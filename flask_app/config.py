import os

MONGODB_SETTINGS = {
    'host': os.environ.get('MONGODB_URI', 'mongodb://localhost/url_shortener_db')
}
