from pydantic import BaseModel, EmailStr, Field, ConfigDict
from datetime import datetime

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