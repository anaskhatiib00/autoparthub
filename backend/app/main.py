from fastapi import FastAPI
from app.database import engine, Base
from app import models
from app.routes import auth_routes
from app.routes import part_routes

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth_routes.router)
app.include_router(part_routes.router)


@app.get("/")
def root():
    return {"message": "AutoPartHub API Running"}


@app.get("/db-test")
def db_test():
    return {"message": "Database connected successfully"}