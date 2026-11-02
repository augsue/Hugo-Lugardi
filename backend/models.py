from sqlalchemy import Boolean, Column, DateTime, Integer, String, Text, false
from sqlalchemy.sql import func

from database import Base


class Feedback(Base):
    __tablename__ = "feedbacks"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    email = Column(String(200), nullable=False)
    message = Column(Text, nullable=False)
    fixed = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class WikiPage(Base):
    __tablename__ = "wiki_pages"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(120), nullable=False)
    slug = Column(String(150), unique=True, index=True, nullable=False)  # URL: /wiki/<slug>
    subtitle = Column(String(200))
    category = Column(String(50), index=True, nullable=False)  # chave da lista fixa (validada no back)
    content = Column(Text, nullable=False)
    image_url = Column(String(500), nullable=False)
    fixed = Column(Boolean, default=False, server_default=false(), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())