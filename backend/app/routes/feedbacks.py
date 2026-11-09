import os

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Feedback
from app.schemas import FeedbackCreate

from sqlalchemy import select
from app.schemas import FeedbackCreate, FeedbackPublicOut

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

@router.get("/feedbacks/fixed", response_model=list[FeedbackPublicOut])
def list_fixed_feedbacks(db: Session = Depends(get_db)):
    return db.scalars(
        select(Feedback).where(Feedback.fixed.is_(True)).order_by(Feedback.created_at.desc())
    ).all()