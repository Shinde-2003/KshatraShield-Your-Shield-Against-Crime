from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient('mongodb://localhost:27017/')
db = client['kshatrashield']

# Suraj Mahadik's user ID
suraj_id = "69c5159aae4a73ced12cbd28"

print(f"--- ALL COMPLAINTS IN DATABASE ---")
for c in db.complaints.find():
    reporter = c.get('reporter')
    status = c.get('status')
    cid = c.get('complaint_id')
    print(f"ID: {cid}, Status: {status}, Reporter: {reporter} ({type(reporter)})")

print(f"\n--- ATTEMPTING TO FIND FOR {suraj_id} (string) ---")
count_str = db.complaints.count_documents({'reporter': suraj_id})
print(f"Found: {count_str}")

print(f"\n--- ATTEMPTING TO FIND FOR {suraj_id} (ObjectId) ---")
count_oid = db.complaints.count_documents({'reporter': ObjectId(suraj_id)})
print(f"Found: {count_oid}")
