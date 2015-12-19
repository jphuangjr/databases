var db = require('../db');
db.connect()

module.exports = {
  messages: {
    get: function (callback) {
      console.log(">>>>>>>>>>IN MODELS GET")
      db.query('SELECT * FROM messages', function(err, rows){
        console.log("DATA ROWS: ", rows)
        if(err) throw err;

        callback(rows); //TODO
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      // console.log(data)
      // console.log(">>>>>>>>>>IN MODELS POST")
      db.query('INSERT INTO messages SET ?', data, function(err, res){
        if (err) throw err;
        callback(res);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.query('SELECT * FROM users', function(err, rows){
        if(err) throw err;
        console.log(rows); //TODO
      });
    },
    post: function (data) {
      db.query('INSERT INTO users SET ?', data, function(err, res){
        if (err) throw err;

        console.log("User ID:", res.id);
      });
    }
  }
};

