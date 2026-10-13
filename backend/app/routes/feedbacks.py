from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Feedback
from app.schemas import FeedbackCreate

from sqlalchemy import text

router = APIRouter(prefix="/api")

@router.get("/feedbacks/debug")
def debug_feedbacks(db: Session = Depends(get_db)):
    info = db.execute(text("""
        SELECT current_database(), inet_server_addr()::text,
               (SELECT string_agg(column_name, ',') FROM information_schema.columns
                WHERE table_name = 'feedbacks')
    """)).one()
    return {"db": info[0], "server": info[1], "columns": info[2]}

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