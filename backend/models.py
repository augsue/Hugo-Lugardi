from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Boolean
from database import Base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func


class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True) #books.id
    title = Column(String(200), nullable=False) #books.title
    synopsis = Column(Text) #books.synopsis
    cover = Column(String(300)) #books.cover

    authors = relationship("Author", back_populates="book") #books.authors
    characters = relationship("Character", back_populates="book") #books.characters


class Author(Base):
    __tablename__ = "authors"

    id = Column(Integer, primary_key=True, index=True) #authors.id
    name = Column(String(150), nullable=False) #authors.name
    bio = Column(Text) #authors.bio
    photo = Column(String(300)) #authors.image

    book_id = Column(Integer, ForeignKey("books.id")) #authors.book_id
    book = relationship("Book", back_populates="authors") #authors.book


class Character(Base):
    __tablename__ = "characters"

    id = Column(Integer, primary_key=True, index=True) #characters.id
    name = Column(String(150), nullable=False) #characters.name
    description = Column(Text) #characters.description
    image = Column(String(300)) #characters.image

    book_id = Column(Integer, ForeignKey("books.id")) #characters.book_id
    book = relationship("Book", back_populates="characters") #characters.book


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True) #users.id
    name = Column(String(150), nullable=False) #users.name
    email = Column(String(200), unique=True, nullable=False) #users.email
    password_hash = Column(String(300), nullable=False) #users.password_hash
    created_at = Column(DateTime(timezone=True), server_default=func.now()) #users.created_at

    feedbacks = relationship("Feedback", back_populates="user") #users.feedbacks


class Feedback(Base):
    __tablename__ = "feedbacks"

    id = Column(Integer, primary_key=True, index=True) #feedbacks.id
    message = Column(Text, nullable=False) #feedbacks.message
    approved = Column(Boolean, default=False) #feedbacks.approved
    created_at = Column(DateTime(timezone=True),server_default=func.now()) #feedbacks.created_at

    user_id = Column(Integer, ForeignKey("users.id")) #feedbacks.user_id
    user = relationship("User", back_populates="feedbacks") #feedbacks.user

