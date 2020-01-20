DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers
(
id INT PRIMARY KEY AUTO_INCREMENT,
burger_name VARCHAR(30),
devoured BOOLEAN DEFAULT false
);