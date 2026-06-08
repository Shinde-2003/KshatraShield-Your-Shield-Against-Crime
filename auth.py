from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from app.utils.jwt_helper import generate_token
from app.utils.otp_store import generate_otp, verify_otp
from app import get_db
from config import Config
import datetime

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    db = get_db()
    
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'error': 'Missing required fields'}), 400
    
    if db.users.find_one({'email': data['email']}):
        return jsonify({'error': 'User already exists'}), 400
    
    role = 'user'
    if data.get('police_code') == Config.POLICE_ADMIN_CODE:
        role = 'police'
        
    user = {
        'name': data.get('name', ''),
        'email': data['email'],
        'phone': data.get('phone', ''),
        'password': generate_password_hash(data['password']),
        'id_type': data.get('id_type', 'Aadhaar'),
        'id_number': data.get('id_number', ''),
        'role': role,
        'created_at': datetime.datetime.utcnow()
    }
    
    db.users.insert_one(user)
    return jsonify({'message': 'User registered successfully', 'role': role}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    db = get_db()
    
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'error': 'Missing credentials'}), 400
    
    user = db.users.find_one({'email': data['email']})
    if not user or not check_password_hash(user['password'], data['password']):
        return jsonify({'error': 'Invalid email or password'}), 401
    
    # Generate OTP for 2FA
    otp = generate_otp(user['email'])
    print(f"DEBUG: OTP for {user['email']} is {otp}")
    
    # Mask phone number (e.g., +91 ******1234)
    phone = user.get('phone', 'XXXXXXXXXX')
    masked_phone = phone[:3] + "*" * (len(phone)-7) + phone[-4:] if len(phone) > 4 else "****"
    
    return jsonify({
        'message': 'OTP sent to your registered contact number',
        'email': user['email'],
        'phone': masked_phone
    }), 200

@auth_bp.route('/verify-otp', methods=['POST'])
def verify():
    data = request.get_json()
    db = get_db()
    
    if not data or not data.get('email') or not data.get('otp'):
        return jsonify({'error': 'Missing email or OTP'}), 400
    
    if verify_otp(data['email'], data['otp']):
        user = db.users.find_one({'email': data['email']})
        token = generate_token(user)
        return jsonify({
            'message': 'Login successful',
            'token': token,
            'role': user.get('role', 'user'),
            'name': user.get('name', '')
        }), 200
    else:
        return jsonify({'error': 'Invalid or expired OTP'}), 401
