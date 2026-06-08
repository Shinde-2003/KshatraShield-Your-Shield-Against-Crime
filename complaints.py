from flask import Blueprint, request, jsonify
from app.utils.jwt_helper import token_required, decode_token
from app.utils.ai_classifier import classify_crime
from app import get_db
from config import Config
import os
import uuid
import datetime
from werkzeug.utils import secure_filename

complaints_bp = Blueprint('complaints', __name__)

def save_evidence(files):
    evidence_paths = []
    for key in files:
        file = files[key]
        if file and file.filename:
            filename = f"{uuid.uuid4()}_{secure_filename(file.filename)}"
            filepath = os.path.join(Config.UPLOAD_FOLDER, filename)
            file.save(filepath)
            evidence_paths.append(f"/static/uploads/{filename}")
    return evidence_paths

@complaints_bp.route('/report', methods=['POST'])
def report_crime():
    db = get_db()
    
    # Check if authorized or anonymous
    token = None
    if 'Authorization' in request.headers:
        auth_header = request.headers['Authorization']
        if auth_header.startswith('Bearer '):
            token = auth_header.split(' ')[1]
    
    user_payload = decode_token(token) if token else None
    
    # Get form data
    title = request.form.get('title', 'Untitled Crime')
    description = request.form.get('description', '')
    location = request.form.get('location', 'Unknown')
    report_type = request.form.get('type', 'Standard') # Standard, Anonymous, E-NC, E-FIR
    
    # AI Classification
    ai_result = classify_crime(title, description)
    
    # Handle evidence files
    evidence = save_evidence(request.files)
    
    complaint_id = f"KS-{uuid.uuid4().hex[:8].upper()}"
    
    complaint = {
        'complaint_id': complaint_id,
        'title': title,
        'description': description,
        'location': location,
        'type': report_type,
        'category': ai_result['category'],
        'priority': ai_result['priority'],
        'confidence': ai_result['confidence'],
        'evidence': evidence,
        'status': 'Pending',
        'update_history': [
            {'status': 'Pending', 'comment': 'Complaint submitted', 'time': datetime.datetime.utcnow()}
        ],
        'reporter': user_payload['user_id'] if user_payload else 'Anonymous',
        'created_at': datetime.datetime.utcnow()
    }
    
    db.complaints.insert_one(complaint)
    
    return jsonify({
        'message': 'Crime reported successfully',
        'complaint_id': complaint_id,
        'category': ai_result['category'],
        'priority': ai_result['priority']
    }), 201

@complaints_bp.route('/my-reports', methods=['GET'])
@token_required
def get_my_reports():
    db = get_db()
    user_id = request.user['user_id']
    
    reports = list(db.complaints.find({'reporter': user_id}).sort('created_at', -1))
    for r in reports:
        r['_id'] = str(r['_id'])
        
    return jsonify(reports), 200

@complaints_bp.route('/track/<complaint_id>', methods=['GET'])
def track_complaint(complaint_id):
    db = get_db()
    report = db.complaints.find_one({'complaint_id': complaint_id})
    
    if not report:
        return jsonify({'error': 'Complaint not found'}), 404
        
    report['_id'] = str(report['_id'])
    return jsonify(report), 200

@complaints_bp.route('/notifications', methods=['GET'])
@token_required
def get_notifications():
    db = get_db()
    user_id = request.user.get('user_id')
    print(f"DEBUG: Fetching notifications for user {user_id}")
    
    notifs = list(db.notifications.find({'user_id': user_id}).sort('created_at', -1).limit(10))
    print(f"DEBUG: Found {len(notifs)} notifications")
    
    for n in notifs:
        n['_id'] = str(n['_id'])
        
    return jsonify(notifs), 200

@complaints_bp.route('/notifications/clear', methods=['DELETE'])
@token_required
def clear_notifications():
    db = get_db()
    user_id = request.user['user_id']
    db.notifications.delete_many({'user_id': user_id})
    return jsonify({'message': 'Notifications cleared'}), 200
