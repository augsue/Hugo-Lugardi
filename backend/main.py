from fastapi import FastAPI, APIRouter, Depends
from fastapi.middleware.cors import CORSMiddleware
import os
from pydantic import BaseModel
from sqlalchemy.orm import Session

from database import SessionLocal
from models import Author

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class NameIn(BaseModel):
    name: str

app = FastAPI(
    docs_url="/api/docs",
    openapi_url='/api/openapi.json'
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api = APIRouter(prefix="/api")

@api.post("/test-authorName")
def save_name(data: NameIn, db: Session = Depends(get_db)):
    register = Author(name=data.name)
    db.add(register)
    db.commit()
    db.refresh(register)
    return {"id": register.id, "name": register.name}

@api.get("/status")
def status():
    return {"status": "certíssimo"}

@app.get("/")
def read_root():
    return {"status": "ok"} 

app.include_router(api)