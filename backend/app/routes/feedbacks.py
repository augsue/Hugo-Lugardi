import os

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Feedback
from app.schemas import FeedbackCreate

router = APIRouter(prefix="/api")


@router.post("/feedbacks", status_code=201)
def create_feedback(data: FeedbackCreate, db: Session = Depends(get_db)):
    feedback = Feedback(
        name=data.name,
        email=data.email,
        message=data.message,
        fixed=False,
    )
    db.add(feedback)
    db.commit()
    db.refresh(feedback)
    return {"id": feedback.id, "fixed": feedback.fixed}


@router.get("/feedbacks/debug")
def debug_feedbacks(db: Session = Depends(get_db)):
    url = os.getenv("DATABASE_URL", "")
    host = url.split("@")[-1].split("/")[0] if "@" in url else "SEM_URL"
    return {"host": host}