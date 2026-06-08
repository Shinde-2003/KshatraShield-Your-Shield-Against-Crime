import jwt
import datetime
from functools import wraps
from flask import request, jsonify
from config import Config


def generate_token(user_data, expires_hours=24):
    """Generate a JWT token for authenticated user."""
    payload = {
        'user_id': str(user_data['_id']),
        'email': user_data.get('email', ''),
        'role': user_data.get('role', 'user'),
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=expires_hours),
        'iat': datetime.datetime.utcnow()
    }
    token = jwt.encode(payload, Config.JWT_SECRET, algorithm='HS256')
    return token


def decode_token(token):
    """Decode and validate a JWT token."""
    try:
        payload = jwt.decode(token, Config.JWT_SECRET, algorithms=['HS256'])
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None


def token_required(f):
    """Decorator to protect routes with JWT authentication."""
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            if auth_header.startswith('Bearer '):
                token = auth_header.split(' ')[1]

        if not token:
            return jsonify({'error': 'Access token is missing'}), 401

        payload = decode_token(token)
        if not payload:
            return jsonify({'error': 'Token is invalid or expired'}), 401

        request.user = payload
        return f(*args, **kwargs)
    return decorated


def police_required(f):
    """Decorator to ensure only police/admin can access the route."""
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            if auth_header.startswith('Bearer '):
                token = auth_header.split(' ')[1]

        if not token:
            return jsonify({'error': 'Access token is missing'}), 401

        payload = decode_token(token)
        if not payload:
            return jsonify({'error': 'Token is invalid or expired'}), 401

        if payload.get('role') != 'police':
            return jsonify({'error': 'Police authorization required'}), 403

        request.user = payload
        return f(*args, **kwargs)
    return decorated
