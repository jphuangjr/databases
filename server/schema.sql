CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  objectID int(5) NOT NULL AUTO_INCREMENT, 
  text varchar(140) DEFAULT NULL,  
  username varchar(80) DEFAULT NULL,
  roomname varchar(80) DEFAULT NULL, 
  PRIMARY KEY(objectID)
);

-- CREATE TABLE users (
--   /* Describe your table here.*/
--   id int(5) NOT NULL AUTO_INCREMENT, 
--   username varchar(80) DEFAULT NULL,  
--   PRIMARY KEY(id)

-- );

-- CREATE TABLE rooms (
--   /* Describe your table here.*/
--   id int(5) NOT NULL AUTO_INCREMENT, 
--   roomname varchar(80) DEFAULT NULL,  
--   PRIMARY KEY(id)
-- );

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   objectID int(5) NOT NULL AUTO_INCREMENT, 
--   text varchar(140) DEFAULT NULL,  
--   user_id int(5) DEFAULT NULL,
--   room_id int(5) DEFAULT NULL, 
--   PRIMARY KEY(objectID),
--   FOREIGN KEY(user_id) REFERENCES users(id),
--   FOREIGN KEY(room_id) REFERENCES rooms(id)
-- );


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

