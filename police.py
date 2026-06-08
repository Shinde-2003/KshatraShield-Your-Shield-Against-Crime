from flask import Blueprint, request, jsonify
from app.utils.jwt_helper import police_required
from app import get_db
import datetime

police_bp = Blueprint('police', __name__)

@police_bp.route('/complaints', methods=['GET'])
@police_required
def get_all_complaints():
    db = get_db()
    
    # Filters
    query = {}
    location = request.args.get('location')
    category = request.args.get('category')
    status = request.args.get('status')
    priority = request.args.get('priority')
    
    if location: query['location'] = {'$regex': location, '$options': 'i'}
    if category: query['category'] = category
    if status: query['status'] = status
    if priority: query['priority'] = priority
    
    complaints = list(db.complaints.find(query).sort('created_at', -1))
    for c in complaints:
        c['_id'] = str(c['_id'])
        
    return jsonify(complaints), 200

@police_bp.route('/complaints/<complaint_id>/status', methods=['PUT'])
@police_required
def update_complaint_status(complaint_id):
    data = request.get_json()
    db = get_db()
    
    new_status = data.get('status')
    comment = data.get('comment', '')
    
    if not new_status:
        return jsonify({'error': 'Status is required'}), 400
        
    result = db.complaints.update_one(
        {'complaint_id': complaint_id},
        {
            '$set': {'status': new_status},
            '$push': {
                'update_history': {
                    'status': new_status,
                    'comment': comment,
                    'time': datetime.datetime.utcnow(),
                    'updated_by': request.user['email']
                }
            }
        }
    )
    
    if result.matched_count == 0:
        return jsonify({'error': 'Complaint not found'}), 404
        
    # Create notification for user
    complaint = db.complaints.find_one({'complaint_id': complaint_id})
    if complaint and complaint.get('reporter') != 'Anonymous':
        # Get user phone for simulated SMS
        user = db.users.find_one({'_id': complaint['reporter']}) # reporter is stored as user_id string
        # Actually reporter was stored as str(user_id) from JWT
        
        notification = {
            'user_id': complaint['reporter'],
            'complaint_id': complaint_id,
            'message': f"KshatraShield ALERT: Status of your complaint {complaint_id} updated to '{new_status}'. See dashboard for details.",
            'type': 'status_update',
            'is_read': False,
            'created_at': datetime.datetime.utcnow()
        }
        db.notifications.insert_one(notification)
        
    return jsonify({'message': f'Status updated to {new_status}'}), 200

@police_bp.route('/stats/summary', methods=['GET'])
@police_required
def get_summary_stats():
    db = get_db()
    
    total = db.complaints.count_documents({})
    pending = db.complaints.count_documents({'status': 'Pending'})
    in_progress = db.complaints.count_documents({'status': 'In Progress'})
    resolved = db.complaints.count_documents({'status': 'Resolved'})
    
    return jsonify({
        'total': total,
        'pending': pending,
        'in_progress': in_progress,
        'resolved': resolved
    }), 200
