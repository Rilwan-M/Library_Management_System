from flask import Flask,request,abort, jsonify
from flask_bcrypt import Bcrypt
from config import ApplicationConfig
from models import db,User

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt =Bcrypt(app)
db.init_app(app)
# db.create_all()

with app.app_context():
    db.create_all()
@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]

    user_exists = librarian.query.filter_by(email=email).first() is not None

    if user_exists: 
        abort(409)

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = librarian(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    # session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })
@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = librarian.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    # session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })

if __name__ == "__main__":
    app.run(debug=True)