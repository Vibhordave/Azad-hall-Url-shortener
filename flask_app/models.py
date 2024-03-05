from flask_mongoengine import MongoEngine

db = MongoEngine()

class User(db.Document):
    email = db.EmailField(unique=True, required=True)
    password = db.StringField(required=True)

class ShortenedURL(db.Document):
    original_url = db.StringField(required=True)
    short_url = db.StringField(unique=True, required=True)
    user = db.ReferenceField(User)
