from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, Base
from app import models
from app.routes import auth_routes
from app.routes import part_routes
from app.routes import ai_routes


app = FastAPI()
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(auth_routes.router)
app.include_router(part_routes.router)
app.include_router(ai_routes.router)


@app.get("/")
def root():
    return {"message": "AutoPartHub API Running"}


@app.get("/db-test")
def db_test():
    return {"message": "Database connected successfully"}