from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    role: str

    class Config:
        from_attributes = True

class PartCreate(BaseModel):
    title: str
    description: str | None = None
    category: str
    make: str
    model: str
    year: int
    price: float
    condition: str = "used"
    image_url: str | None = None
    oem_number: str | None = None
    mileage: int | None = None
    warranty: str | None = None
    shipping_option: str | None = None
    location: str | None = None


class PartResponse(PartCreate):
    id: int
    in_stock: bool
    seller_id: int

    class Config:
        from_attributes = True