import re
import unicodedata

from sqlalchemy import select
from sqlalchemy.orm import Session

from models import WikiPage


def slugify(text: str) -> str:
    """'Hugo Lugardi' -> 'hugo-lugardi', 'Ambientação' -> 'ambientacao'."""
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    return text or "pagina"


def unique_slug(db: Session, title: str) -> str:
    """Se o slug já existir, acrescenta -2, -3..."""
    base = slugify(title)[:140]
    slug, n = base, 2
    while db.scalar(select(WikiPage.id).where(WikiPage.slug == slug)):
        slug = f"{base}-{n}"
        n += 1
    return slug