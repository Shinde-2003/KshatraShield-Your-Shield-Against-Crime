from flask import Blueprint, jsonify
from app import get_db

analysis_bp = Blueprint('analysis', __name__)

@analysis_bp.route('/stats', methods=['GET'])
def get_crime_stats():
    db = get_db()
    
    pipeline = [
        {"$group": {"_id": "$category", "count": {"$sum": 1}}}
    ]
    
    results = list(db.complaints.aggregate(pipeline))
    
    categories = []
    counts = []
    
    for res in results:
        categories.append(res['_id'].capitalize())
        counts.append(res['count'])
        
    return jsonify({
        'categories': categories,
        'counts': counts
    }), 200

@analysis_bp.route('/trends/priority', methods=['GET'])
def get_priority_stats():
    db = get_db()
    
    pipeline = [
        {"$group": {"_id": "$priority", "count": {"$sum": 1}}}
    ]
    
    results = list(db.complaints.aggregate(pipeline))
    
    labels = []
    data = []
    
    for res in results:
        labels.append(res['_id'])
        data.append(res['count'])
        
    return jsonify({
        'labels': labels,
        'data': data
    }), 200
