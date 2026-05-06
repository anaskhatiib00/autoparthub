from fastapi import FastAPI
from app.database import engine, Base

app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "AutoPartHub API Running"}

@app.get("/db-test")
def db_test():
    return {"message": "Database connected successfully"}