from flask import Flask, request, jsonify
from .models import User, ShortenedURL, db

app = Flask(__name__)
app.config.from_object('config')
db.init_app(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    user = User(email=email, password=password)
    user.save()
    return jsonify({'message': 'Registration successful'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    user = User.objects(email=email).first()

    if not user or not user.password == password:
        return jsonify({'error': 'Invalid email or password'}), 401

    # Return user's shortened URLs
    shortened_urls = ShortenedURL.objects(user=user)
    return jsonify({'user_id': str(user.id), 'shortened_urls': [url.short_url for url in shortened_urls]}), 200

# Define route for URL shortening and other routes as needed

if __name__ == '__main__':
    app.run(debug=True)
