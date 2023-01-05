from flask import Flask, request, jsonify
from flask_sqlalchemy import Model, SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123@localhost:5432/library'
db = SQLAlchemy(app)


class Event(db.Model):
    # columns to be added
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"Event: {self.description}"

    def __init__(self, description):
        self.description = description

db.create_all()
# func used to get info to frontend
def format_event(event):
    return {
        'description': event.description,
        'id': event.id
    }


@app.route('/')
def hello():
    return 'Hello'


@app.route('/event', methods=['POST'])
def create_event():
    event = request.json['description']
    event = Event(event)
    db.session.add(event)
    db.session.commit()
    return format_event(event)


# get all events
@app.route('/events', methods=['GET'])
def get_events():
    event_list = []
    events = Event.query.order_by(Event.id.asc()).all()
    for event in events:
        event_list.append(format_event(event))
    return {'events': event_list}


# get single event
@app.route('/events/<id>', methods=['GET'])
def get_event(id):
    event = Event.query.filter_by(id=id).one()
    formatted_event = format_event(event)
    return {'event': formatted_event}


# delete an event
@app.route('/events/<id>', methods=['DELETE'])
def delete_event(id):
    event = Event.query.filter_by(id=id).one()
    db.session.delete(event)
    db.session.commit()
    return f'Event (id:{id}) deleted'


# updating event
@app.route('/events/<id>', methods=['PUT'])
def update_event(id):
    event = Event.query.filter_by(id=id)
    description = request.json['description']
    event.update(dict(description=description))
    db.session.commit()
    return {'event': format_event(event.one())}


if __name__ == '__main__':
    app.run()
