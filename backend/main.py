from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
import os

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

@api.get("/db-check")
def db_check():
    conn = psycopg2.connect(os.getenv("DATABASE_URL"))
    cur = conn.cursor()
    cur.execute("SELECT current_database();")
    name = cur.fetchone()[0]
    conn.close()
    return {"banco de dados": name}

@api.get("/status")
def status():
    return {"status": "certíssimo"}

@app.get("/")
def read_root():
    return {"status": "ok"} 

app.include_router(api)