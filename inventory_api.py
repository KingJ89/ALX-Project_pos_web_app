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
