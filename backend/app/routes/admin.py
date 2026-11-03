import os
import secrets
from datetime import datetime, timedelta, timezone

from sqlalchemy import select
from sqlalchemy.orm import Session

from database import get_db
from models import Feedback, WikiPage
from app.schemas import (               
    FeedbackAdminOut, FeedbackFixedIn, WikiPageIn, WikiFixedIn, WikiPageOut,
)
from app.utils import unique_slug

from pathlib import Path

from fastapi import Request
from vercel import blob

from app.utils import slugify, unique_slug

import jwt
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from pydantic import BaseModel

router = APIRouter(prefix="/admin", tags=["admin"])
bearer = HTTPBearer()

ALGORITHM = "HS256"
TOKEN_TTL_HOURS = 8


class LoginIn(BaseModel):
    key: str


class TokenOut(BaseModel):
    token: str


def _env(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise RuntimeError(f"Variável de ambiente {name} não configurada")
    return value


def require_admin(creds: HTTPAuthorizationCredentials = Depends(bearer)):
    """Dependência para proteger as rotas admin."""
    try:
        jwt.decode(creds.credentials, _env("JWT_SECRET"), algorithms=[ALGORITHM])
    except jwt.PyJWTError:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Token inválido ou expirado")


@router.post("/login", response_model=TokenOut)
def login(body: LoginIn):
    # compare_digest evita timing attack
    if not secrets.compare_digest(
        body.key.encode(), _env("ADMIN_ACCESS_KEY").encode()
    ):
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Chave inválida")

    exp = datetime.now(timezone.utc) + timedelta(hours=TOKEN_TTL_HOURS)
    token = jwt.encode({"sub": "admin", "exp": exp}, _env("JWT_SECRET"), ALGORITHM)
    return {"token": token}


@router.get("/me", dependencies=[Depends(require_admin)])
def me():
    """Usado pelo frontend para checar se o token ainda é válido."""
    return {"ok": True}


# TODO: rotas de Wiki e feedbacks entram aqui com dependencies=[Depends(require_admin)]

@router.get("/comments", response_model=list[FeedbackAdminOut], dependencies=[Depends(require_admin)])
def list_comments(db: Session = Depends(get_db)):
    return db.scalars(select(Feedback).order_by(Feedback.created_at.desc())).all()


@router.patch("/comments/{comment_id}", response_model=FeedbackAdminOut, dependencies=[Depends(require_admin)])
def set_comment_fixed(comment_id: int, body: FeedbackFixedIn, db: Session = Depends(get_db)):
    comment = db.get(Feedback, comment_id)
    if comment is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Comentário não encontrado")
    comment.fixed = body.fixed
    db.commit()
    db.refresh(comment)
    return comment

def _get_wiki_or_404(db: Session, page_id: int) -> WikiPage:
    page = db.get(WikiPage, page_id)
    if page is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Página não encontrada")
    return page


@router.get("/wiki", response_model=list[WikiPageOut], dependencies=[Depends(require_admin)])
def list_wiki(db: Session = Depends(get_db)):
    return db.scalars(select(WikiPage).order_by(WikiPage.created_at.desc())).all()


@router.post("/wiki", response_model=WikiPageOut, status_code=201, dependencies=[Depends(require_admin)])
def create_wiki(body: WikiPageIn, db: Session = Depends(get_db)):
    page = WikiPage(**body.model_dump(), slug=unique_slug(db, body.title))
    db.add(page)
    db.commit()
    db.refresh(page)
    return page


@router.put("/wiki/{page_id}", response_model=WikiPageOut, dependencies=[Depends(require_admin)])
def update_wiki(page_id: int, body: WikiPageIn, db: Session = Depends(get_db)):
    page = _get_wiki_or_404(db, page_id)
    for field, value in body.model_dump().items():
        setattr(page, field, value)
    # o slug NÃO muda ao editar o título, para os links antigos não quebrarem
    db.commit()
    db.refresh(page)
    return page


@router.patch("/wiki/{page_id}", response_model=WikiPageOut, dependencies=[Depends(require_admin)])
def set_wiki_fixed(page_id: int, body: WikiFixedIn, db: Session = Depends(get_db)):
    page = _get_wiki_or_404(db, page_id)
    page.fixed = body.fixed
    db.commit()
    db.refresh(page)
    return page


@router.delete("/wiki/{page_id}", status_code=204, dependencies=[Depends(require_admin)])
def delete_wiki(page_id: int, db: Session = Depends(get_db)):
    page = _get_wiki_or_404(db, page_id)
    db.delete(page)
    db.commit()

ALLOWED_IMAGE_TYPES = {"image/jpeg": "jpg", "image/png": "png", "image/webp": "webp"}
MAX_IMAGE_BYTES = 4 * 1024 * 1024  # o Vercel recusa corpo acima de 4,5 MB


def _looks_like_image(data: bytes, content_type: str) -> bool:
    """Confere os primeiros bytes, porque o Content-Type é informado pelo cliente."""
    if content_type == "image/jpeg":
        return data.startswith(b"\xff\xd8\xff")
    if content_type == "image/png":
        return data.startswith(b"\x89PNG\r\n\x1a\n")
    if content_type == "image/webp":
        return data[:4] == b"RIFF" and data[8:12] == b"WEBP"
    return False


@router.post("/upload", dependencies=[Depends(require_admin)])
async def upload_image(request: Request, filename: str = "imagem"):
    content_type = request.headers.get("content-type", "").split(";")[0].strip().lower()
    if content_type not in ALLOWED_IMAGE_TYPES:
        raise HTTPException(status.HTTP_415_UNSUPPORTED_MEDIA_TYPE, "Envie uma imagem JPG, PNG ou WebP")

    data = await request.body()
    if len(data) > MAX_IMAGE_BYTES:
        raise HTTPException(status.HTTP_413_CONTENT_TOO_LARGE, "A imagem passa de 4 MB")
    if not _looks_like_image(data, content_type):
        raise HTTPException(status.HTTP_400_BAD_REQUEST, "O arquivo não é uma imagem válida")

    name = slugify(Path(filename).stem)
    result = await blob.put_blob(
        f"wiki/{name}.{ALLOWED_IMAGE_TYPES[content_type]}",
        data,
        access="public",
        content_type=content_type,
        add_random_suffix=True,  # evita sobrescrever imagens com o mesmo nome
    )
    return {"url": result.url}