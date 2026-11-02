import os
import secrets
from datetime import datetime, timedelta, timezone

from sqlalchemy import select
from sqlalchemy.orm import Session

from database import get_db
from models import Feedback
from app.schemas import FeedbackAdminOut, FeedbackFixedIn

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