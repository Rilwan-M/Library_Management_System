# src/models/__init__.py



from flask_sqlalchemy import SQLAlchemy
# initialize our db
db = SQLAlchemy()
from .Book import Book
from .User import User
from .CheckOut import CheckOut