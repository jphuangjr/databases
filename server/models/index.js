var db = require('../db');
db.connect()

module.exports = {
  messages: {
    get: function(callback) {
      console.log(">>>>>>>>>>IN MODELS GET")
      db.query('SELECT * FROM messages', function(err, rows) {
        console.log("DATA ROWS: ", rows)
        if (err) throw err;

        callback(rows); //TODO
      });
    }, // a function which produces all the messages
    post: function(data, callback) {
        // var user_id;
        // var room_id;
        console.log(">>>>>>>>>>IN MODELS POST", data);
        //RETURN/ASSIGN USER ID
        // db.query('SELECT EXISTS(SELECT 1 FROM chat.users WHERE username =' + data.username + "'", function(err, res) {
        //   if (err) throw err;
        //   if (res === 1) {
        //     db.query("SELECT users.id FROM users WHERE username = " + data.username + '"', function(err, res) {
        //       if (err) throw err;
        //       user_id = res;
        //     });
        //   } else {
        //     db.query('INSERT INTO users (username) VALUES ("' + data.username + '")', function(err, res) {
        //       if (err) throw err;
        //       db.query("SELECT users.id FROM users WHERE username = " + data.username + '"', function(err, res) {
        //         if (err) throw err;
        //         user_id = res;
        //       });
        //     });
        //   }
        // });

        // //RETURN/ASSIGN ROOM ID
        // db.query('SELECT EXISTS(SELECT 1 FROM chat.rooms where roomname=' + data.roomname + "'",function(err, res){
        //   if(err) throw err;
        //   if(res === 1){
        //     db.query('SELECT rooms.id FROM rooms WHERE roomname='+ data.roomname + "'", function(err, res){
        //       if(err) throw err;
        //       room_id = res;
        //     });
        //   } else{
        //     db.query('INSERT INTO users (roomname) VALUES ("' + data.roomname + '")', function(err, res) {
        //       if (err) throw err;
        //       db.query("SELECT users.id FROM users WHERE roomname = " + data.roomname + '"', function(err, res) {
        //         if (err) throw err;
        //         room_id = res;
        //       });
        //     });
        //   }
        // });


        //RETURN MESSAGES
        db.query('INSERT INTO messages (username, text, roomname) VALUES ("' + data.username + '","' + data.text + '","' + data.roomname + '")', function(err, res) {
          if (err) throw err;
          callback(res);
        });
      } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {
      db.query('SELECT * FROM users', function(err, rows) {
        if (err) throw err;
        console.log(rows); //TODO
      });
    },
    post: function(data) {
      db.query('INSERT INTO users SET ?', data, function(err, res) {
        if (err) throw err;

        console.log("User ID:", res.id);
      });
    }
  }
};