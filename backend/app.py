
from flask import Flask, request, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

# import models
# from models import Book, User

# import apis
import api.api_book as BookApi
import api.api_user as UserApi
import api.api_checkout as CheckoutApi

app = Flask(__name__)

# Set up the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@localhost/library'
# app.config['SQLALCHEMY_DATABASE_URI'] = "host=bookhub-server.postgres.database.azure.com port=5432 dbname=bookhub user=bookhubadmin@bookhub-server password=assignment@1234 sslmode=require"
db = SQLAlchemy(app)
CORS(app)


# Define the Book model
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(255), nullable=False)
    publisher = db.Column(db.String(255), nullable=False)
    isbn = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    available = db.Column(db.Boolean, nullable=False, default=True)


# Define the User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }


# Define the checkout model
class CheckOut(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('book.id'), nullable=False)
    check_out_date = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow)
    due_date = db.Column(db.DateTime, nullable=False)
    return_date = db.Column(db.DateTime)
    status = db.Column(db.String(20), nullable=False)


# creating models
db.create_all()


# Register the API blueprint
app.register_blueprint(BookApi.api_book)
app.register_blueprint(UserApi.api_user)
app.register_blueprint(CheckoutApi.api_checkout)
