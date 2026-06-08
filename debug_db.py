from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['kshatrashield']

print("--- USERS ---")
for u in db.users.find().limit(5):
    print(f"ID: {u['_id']}, Email: {u.get('email')}, Role: {u.get('role')}")

print("\n--- COMPLAINTS ---")
for c in db.complaints.find().limit(5):
    print(f"Complaint ID: {c.get('complaint_id')}, Reporter: {c.get('reporter')}")

print("\n--- NOTIFICATIONS ---")
for n in db.notifications.find().limit(10):
    print(f"User ID: {n.get('user_id')}, Msg: {n.get('message')}")
