from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
    ForeignKey,
    Float,
    Boolean
)

from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String, nullable=False)

    email = Column(String, unique=True, index=True, nullable=False)

    hashed_password = Column(String, nullable=False)

    role = Column(String, default="buyer")

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    parts = relationship("Part", back_populates="seller")


class Part(Base):
    __tablename__ = "parts"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String, nullable=False)

    description = Column(String, nullable=True)

    category = Column(String, nullable=False)

    make = Column(String, nullable=False)

    model = Column(String, nullable=False)

    year = Column(Integer, nullable=False)

    price = Column(Float, nullable=False)

    condition = Column(String, default="used")

    image_url = Column(String, nullable=True)

    in_stock = Column(Boolean, default=True)

    seller_id = Column(Integer, ForeignKey("users.id"))

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    seller = relationship("User", back_populates="parts")