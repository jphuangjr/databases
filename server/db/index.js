var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports  = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'student',
  database : 'chat'
});
 

