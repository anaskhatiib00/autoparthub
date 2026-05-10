from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app import models, schemas
from app.oauth2 import get_current_user

router = APIRouter(prefix="/parts", tags=["Parts"])


@router.post("/", response_model=schemas.PartResponse)
def create_part(
    part: schemas.PartCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    new_part = models.Part(
        **part.model_dump(),
        seller_id=current_user.id
    )

    db.add(new_part)
    db.commit()
    db.refresh(new_part)

    return new_part


@router.get("/", response_model=list[schemas.PartResponse])
def get_parts(db: Session = Depends(get_db)):
    return db.query(models.Part).all()