var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log(">>>>>>>>>>IN CONTROLLERS GET")
      console.log(models.messages)
      models.messages.get(function(data){
        //TODO: DO SOMETHING WITH REPONSE DATA
        res.end(JSON.stringify(data));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(">>>>>>>>>>IN CONTROLLERS POST")
      models.messages.post(req.body, function(data){
        console.log("success data: ", data);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

