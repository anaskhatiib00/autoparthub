from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import models, schemas
from app.oauth2 import get_current_user

router = APIRouter(prefix="/parts", tags=["Parts"])


@router.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    return {
        "image_url": f"http://127.0.0.1:8000/uploads/{file.filename}"
    }


@router.post("/", response_model=schemas.PartResponse)
def create_part(
    part: schemas.PartCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    new_part = models.Part(
        **part.model_dump(),
        seller_id=current_user.id,
    )

    db.add(new_part)
    db.commit()
    db.refresh(new_part)

    return new_part


@router.get("/", response_model=list[schemas.PartResponse])
def get_parts(db: Session = Depends(get_db)):
    return db.query(models.Part).all()


@router.get("/my-parts", response_model=list[schemas.PartResponse])
def get_my_parts(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    return db.query(models.Part).filter(models.Part.seller_id == current_user.id).all()


@router.get("/{part_id}", response_model=schemas.PartResponse)
def get_part(
    part_id: int,
    db: Session = Depends(get_db),
):
    part = db.query(models.Part).filter(models.Part.id == part_id).first()

    if not part:
        raise HTTPException(status_code=404, detail="Part not found")

    return part


@router.put("/{part_id}", response_model=schemas.PartResponse)
def update_part(
    part_id: int,
    updated_part: schemas.PartCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    part = db.query(models.Part).filter(models.Part.id == part_id).first()

    if not part:
        raise HTTPException(status_code=404, detail="Part not found")

    if part.seller_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not allowed to update this part")

    for key, value in updated_part.model_dump().items():
        setattr(part, key, value)

    db.commit()
    db.refresh(part)

    return part


@router.delete("/{part_id}")
def delete_part(
    part_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    part = db.query(models.Part).filter(models.Part.id == part_id).first()

    if not part:
        raise HTTPException(status_code=404, detail="Part not found")

    if part.seller_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not allowed to delete this part")

    db.delete(part)
    db.commit()

    return {"message": "Part deleted successfully"}