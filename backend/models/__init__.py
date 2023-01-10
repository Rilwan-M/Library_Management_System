# src/models/__init__.py


from flask_sqlalchemy import SQLAlchemy
# initialize our db
db = SQLAlchemy()

from .User import User
from .Book import Book
from .Use import Use
from .Hey import Hey
