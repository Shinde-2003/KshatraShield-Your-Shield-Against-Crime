import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'kshatrashield-secret-key-2024')
    JWT_SECRET = os.environ.get('JWT_SECRET', 'kshatrashield-jwt-secret-2024')
    MONGO_URI = os.environ.get('MONGO_URI', 'mongodb://localhost:27017/')
    MONGO_DBNAME = 'kshatrashield'
    UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), 'static', 'uploads')
    MAX_CONTENT_LENGTH = 50 * 1024 * 1024  # 50MB max upload
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'mp4', 'avi', 'mov', 'mp3', 'wav', 'ogg', 'webm', 'pdf'}
    POLICE_ADMIN_CODE = 'POLICE2024'  # Code needed to register as police

    @staticmethod
    def init_app(app):
        os.makedirs(Config.UPLOAD_FOLDER, exist_ok=True)
