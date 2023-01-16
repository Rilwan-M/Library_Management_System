from flask import Blueprint, request, jsonify

# importing models from app
from models.Book import Book


# import db
from models import db

# Define the blueprint
api_book = Blueprint('api_book', __name__)


@api_book.route('/books', methods=['GET', 'POST'])
def books_api():

    if request.method == 'POST':
        # Get the request data
        data = request.get_json()
        title = data['title']
        author = data['author']
        publisher = data['publisher']
        isbn = data['isbn']
        description = data['description']
        available = data['available']

        # Create a new book
        book = Book(
            title=title,
            author=author,
            publisher=publisher,
            isbn=isbn,
            description=description,
            available=available
        )
        db.session.add(book)
        db.session.commit()

        # Return the response
        return jsonify({'book': {
            'id': book.id,
            'title': book.title,
            'author': book.author,
            'publisher': book.publisher,
            'isbn': book.isbn,
            'description': book.description,
            'available': book.available
        }}), 201

    elif request.method == 'GET':
        # Get all books
        books = Book.query.all()

        # Build the response
        response = []
        for book in books:
            response.append({
                'id': book.id,
                'title': book.title,
                'author': book.author,
                'publisher': book.publisher,
                'isbn': book.isbn,
                'description': book.description,
                'available': book.available
            })

        # Return the response
        return jsonify(response), 200


@api_book.route('/books/<book_id>', methods=['PUT', 'DELETE'])
def update_delete_book(book_id):
    # Get the book
    book = Book.query.get(book_id)

    if book is None:
        # Return a 404 error if the book does not exist
        return jsonify({'error': 'Book not found'}), 404

    if request.method == 'PUT':
        # Get the request data
        data = request.get_json()
        title = data['title']
        author = data['author']
        publisher = data['publisher']
        isbn = data['isbn']
        description = data['description']
        available = data['available']

        # Update the book
        book.title = title
        book.author = author
        book.publisher = publisher
        book.isbn = isbn
        book.description = description
        book.available = available
        db.session.commit()

        # Return the response
        return jsonify({'book': {
            'id': book.id,
            'title': book.title,
            'author': book.author,
            'publisher': book.publisher,
            'isbn': book.isbn,
            'description': book.description,
            'available': book.available
        }}), 200

    elif request.method == 'DELETE':
        # Delete the book
        db.session.delete(book)
        db.session.commit()

        # Return the response
        return jsonify({'message': 'Book deleted'}), 200
