from pydantic import BaseModel, EmailStr, Field, ConfigDict, field_validator
from datetime import datetime
from app.constants import WIKI_CATEGORIES

class FeedbackAdminOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    email: str
    message: str
    fixed: bool
    created_at: datetime | None


class FeedbackFixedIn(BaseModel):
    fixed: bool


class FeedbackPublicOut(BaseModel):  # sem e-mail: o público nunca recebe o e-mail
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    message: str
    created_at: datetime | None

class FeedbackCreate(BaseModel):
    name: str = Field(min_length=1, max_length=150)
    email: EmailStr
    message: str = Field(min_length=1)

class WikiPageIn(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)

    title: str = Field(min_length=1, max_length=120)
    subtitle: str | None = Field(default=None, max_length=200)
    category: str
    content: str = Field(min_length=1)
    image_url: str = Field(min_length=1, max_length=500)

    @field_validator("category")
    @classmethod
    def category_must_exist(cls, v: str) -> str:
        if v not in WIKI_CATEGORIES:
            raise ValueError(f"Categoria inválida. Use uma de: {', '.join(WIKI_CATEGORIES)}")
        return v


class WikiFixedIn(BaseModel):
    fixed: bool


class WikiPageOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    slug: str
    subtitle: str | None
    category: str
    content: str
    image_url: str
    fixed: bool
    created_at: datetime | None

class WikiPublicOut(BaseModel):
    id: int
    slug: str
    title: str
    subtitle: str | None = None
    category: str
    image_url: str | None = None
    model_config = ConfigDict(from_attributes=True)

class WikiDetailOut(WikiPublicOut):
    content: str