# this script creates a database and table for the POS

CREATE DATABASE pos_system;

USE pos_system;

CREATE TABLE inventory (
	id INT AUTO_INCREMENT PRIMARY KEY,
	item_name VARCHAR(255) NOT NULL,
	quantitiy INT NOT NULL
);
