from flask import Blueprint, request, jsonify
from datetime import datetime

# importing models from app
from models.CheckOut import CheckOut


# import db
from models import db

# Define the blueprint
api_checkout = Blueprint('api_checkout', __name__)


# creating checkout
@api_checkout.route('/checkout', methods=['POST', 'GET'])
def create_get_checkout():
    if request.method == 'POST':
        json_data = request.get_json()
        check_out = CheckOut(
            user_id=json_data["user_id"],
            book_id=json_data["book_id"],
            check_out_date=datetime.strptime(
                json_data["check_out_date"], '%Y-%m-%d'),
            due_date=datetime.strptime(json_data["due_date"], '%Y-%m-%d'),
            status=json_data["status"]
        )
        db.session.add(check_out)
        db.session.commit()
        return check_out.serialize(), 201

    elif request.method == 'GET':

        check_outs = CheckOut.query.all()
        return jsonify([check_out.serialize() for check_out in check_outs])


# getting a specific checkout form id
@api_checkout.route('/checkout/<int:id>', methods=['GET',])
def get_checkout(id):
    checkout = CheckOut.query.get(id)
    if checkout is None:
        return jsonify({'error': 'checkout not found'}), 404
    return jsonify(checkout.serialize())


# delete a specific checkout
@api_checkout.route('/checkout/<int:id>', methods=['DELETE'])
def delete_checkout(id):
    checkout = CheckOut.query.get(id)
    if checkout is None:
        return jsonify({'error': 'checkout not found'}), 404
    db.session.delete(checkout)
    db.session.commit()
    return jsonify({'message': 'checkout deleted successfully'})
