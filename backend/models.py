from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

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