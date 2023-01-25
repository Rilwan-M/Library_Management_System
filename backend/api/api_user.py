from flask import Blueprint, request, jsonify

# importing models from app
from models.User import User


# import db
from models import db

# Define the blueprint
api_user = Blueprint('api_user', __name__)


# creating users
@api_user.route('/users', methods=['POST', 'GET'])
def create_user():
    if request.method == 'POST':
        data = request.get_json()
        new_user = User(username=data['username'],
                        email=data['email'], password=data['password'])
        db.session.add(new_user)
        db.session.commit()
        return 'Success', 201

    elif request.method == 'GET':
        # Get all users
        users = User.query.all()

        # Return the response
        return jsonify([user.serialize() for user in users])


# get user by email
@api_user.route('/users/<string:email>', methods=['GET'])
def get_user(email):
    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({'error': 'User not found'}), 404
    if user.password != request.args.get('password'):
        return jsonify({'error': 'Incorrect password'}), 401
    return jsonify(user.serialize()), 200


@api_user.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    data = request.get_json()
    user = User.query.get(id)
    if user is None:
        return jsonify({'error': 'User not found'}), 404
    user.username = data['username']
    user.email = data['email']
    user.password = data['password']
    db.session.commit()
    return jsonify(user.serialize())


@api_user.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({'error': 'User not found'}), 404
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'})
