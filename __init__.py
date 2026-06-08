from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from config import Config
import os

mongo_client = None
db = None

def create_app():
    app = Flask(__name__, template_folder='../templates', static_folder='../static')
    app.config.from_object(Config)
    Config.init_app(app)

    CORS(app)

    # Initialize MongoDB
    global mongo_client, db
    mongo_client = MongoClient(app.config['MONGO_URI'])
    db = mongo_client[app.config['MONGO_DBNAME']]

    # Register blueprints
    from app.routes.auth import auth_bp
    from app.routes.complaints import complaints_bp
    from app.routes.police import police_bp
    from app.routes.analysis import analysis_bp
    from app.routes.pages import pages_bp

    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(complaints_bp, url_prefix='/api/complaints')
    app.register_blueprint(police_bp, url_prefix='/api/police')
    app.register_blueprint(analysis_bp, url_prefix='/api/analysis')
    app.register_blueprint(pages_bp)

    # Create indexes
    db.users.create_index('email', unique=True)
    db.complaints.create_index('complaint_id', unique=True)

    return app

def get_db():
    return db
