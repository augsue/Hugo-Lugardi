from fastapi import APIRouter

from app.constants import WIKI_CATEGORIES

router = APIRouter(prefix="/wiki", tags=["wiki"])


@router.get("/categories")
def list_categories():
    return [{"key": k, "label": v} for k, v in WIKI_CATEGORIES.items()]