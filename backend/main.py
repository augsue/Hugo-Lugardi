from dotenv import load_dotenv
from pathlib import Path
from fastapi import FastAPI, APIRouter, Depends
from fastapi.middleware.cors import CORSMiddleware
import os
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.routes import admin, wiki
from database import SessionLocal
from app.routes.feedbacks import router as feedbacks_router

load_dotenv(Path(__file__).parent / ".env")
load_dotenv(Path(__file__).parent / ".env.local")

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

app.include_router(feedbacks_router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api = APIRouter(prefix="/api")

@api.get("/status")
def status():
    return {"status": "certíssimo"}

api.include_router(admin.router)
api.include_router(wiki.router)

@app.get("/")
def read_root():
    return {"status": "ok"} 

app.include_router(api)