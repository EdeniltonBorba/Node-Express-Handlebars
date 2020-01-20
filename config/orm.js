var connection = require("../config/connection.js");

  const orm = {
    selectAll: function(cb) {
      const queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(burger, cb) {
      let queryString = "INSERT INTO burgers(burger_name) VALUES(?)";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    updateOne: function(id, cb) {
      let queryString = "UPDATE burgers SET devoured = true WHERE id =?";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },     
  };
  
  module.exports = orm;
  