Point of Sale (POS) Web Application
Table of Contents

    Introduction
    Features
    Technology Stack
    Installation
    Configuration
    Usage
    API Endpoints
    Database Schema
    Frontend
    Contributing
    License
    Contact

Introduction

The Point of Sale (POS) Web Application is a server-centric system designed to manage sales, inventory, and reporting for businesses. The application is built on the LAMP stack (Linux, Nginx, MySQL, Python) and is designed to be accessible from any web browser and Android devices. The POS system supports single-user authentication, multiple clients, and integrates with external APIs for payment processing, tax calculation, and currency conversion.
Features

    User Authentication: Secure login system with password storage.
    POS Functionality: Sales processing, receipt generation, and inventory management.
    API Integration: Payment gateway, tax calculation, and currency conversion.
    Inventory Management: Real-time stock tracking and restocking alerts.
    Reporting: Sales, inventory, and financial performance reports.
    Cross-Platform Accessibility: Responsive design for desktop and mobile use.
    Centralized Management: Manage multiple shops and real-time inventory updates.

Technology Stack

    Frontend: HTML, CSS, JavaScript
    Backend: Python, Flask
    Database: MySQL
    Server: Nginx, Ubuntu Server 20.04
    APIs: External APIs for payment, tax, and currency handling

Installation
Prerequisites

    Python 3.x
    MySQL
    Nginx
    Node.js and npm (for frontend development)

Server Setup

    Configure Nginx to serve the application:

Update your Nginx configuration to include the following:

nginx

server {
    listen 80;
    server_name your_domain_or_ip;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /static {
        alias /path_to_your_project/frontend/static;
    }
}

    Restart Nginx:

bash

sudo systemctl restart nginx

Configuration
Environment Variables

Create a .env file in the project root directory with the following variables:

bash

FLASK_ENV=production
DATABASE_URL=mysql+pymysql://pos_user:password@localhost/pos_db
SECRET_KEY=your_secret_key

Configuration Files

    config.py: Configuration settings for different environments (development, testing, production).
    nginx.conf: Nginx server configuration file.

Usage
Starting the Application

To start the backend server, run:

bash

flask run

To serve the frontend files, they will be automatically served by Nginx as configured.
Accessing the Application

Open your web browser and navigate to http://your_domain_or_ip to access the POS system.
API Endpoints
/api/items

    GET: Retrieve a list of all items.
    POST: Add a new item.
    PUT: Update an existing item.
    DELETE: Delete an item.

/api/sales

    GET: Retrieve a list of all sales transactions.
    POST: Create a new sales transaction.

/api/inventory

    GET: Retrieve inventory details.
    PUT: Update inventory levels.

Database Schema

    Users: Stores user information for authentication.
    Items: Stores product details.
    Sales: Records all sales transactions.
    Inventory: Tracks stock levels and restocking alerts.

Frontend
Inventory Management Page

    Features: Add, update, delete, and view items.
    Interface: Responsive design with modern UI elements.

Point of Sale (POS) Page

    Features: Process sales, generate receipts, and update inventory.
    Interface: Intuitive design for fast and easy transactions.
