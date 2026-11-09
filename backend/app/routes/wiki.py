from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session
from app.schemas import WikiDetailOut

from app.constants import WIKI_CATEGORIES
from app.schemas import WikiPublicOut
from database import get_db
from models import WikiPage

router = APIRouter(prefix="/wiki", tags=["wiki"])


@router.get("/categories")
def list_categories():
    return [{"key": k, "label": v} for k, v in WIKI_CATEGORIES.items()]


@router.get("/fixed", response_model=list[WikiPublicOut])
def list_fixed_wiki(db: Session = Depends(get_db)):
    return db.scalars(
        select(WikiPage).where(WikiPage.fixed.is_(True)).order_by(WikiPage.id)
    ).all()


@router.get("", response_model=list[WikiPublicOut])
def list_all_wiki(db: Session = Depends(get_db)):
    return db.scalars(select(WikiPage).order_by(WikiPage.id)).all()

@router.get("/{slug}", response_model=WikiDetailOut)
def get_wiki(slug: str, db: Session = Depends(get_db)):
    page = db.scalars(select(WikiPage).where(WikiPage.slug == slug)).first()
    if not page:
        raise HTTPException(status_code=404, detail="Página não encontrada")
    return page