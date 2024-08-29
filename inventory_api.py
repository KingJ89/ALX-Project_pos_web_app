from flask import Flask, jsonify, request
import mysql.connector

app = Flask(__name__)

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="KingJ89",
        password="Jmutewera12345",
        database="pos_system"
    )

    @app.route('/api/items', methods=['GET'])
def get_items():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM inventory")
    rows = cursor.fetchall()
    items = []

 for row in rows:
        items.append({"id": row[0], "name": row[1], "quantity": row[2], "price": row[3]})
    cursor.close()
    conn.close()
    return jsonify(items)
