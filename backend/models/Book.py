from . import db


# Define the Book model
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(255), nullable=False)
    publisher = db.Column(db.String(255), nullable=False)
    isbn = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    available = db.Column(db.Boolean, nullable=False, default=True)
