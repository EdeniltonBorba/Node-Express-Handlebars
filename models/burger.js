var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(burger, cb) {
    orm.insertOne("burgers", ["burger_name"], burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne("burgers", {devoured: 3}, "id =" + id, function(res) {
      cb(res);
    });
  },
  updateOneByName: function(name, cb) {
    orm.updateOne("burgers", {devoured: 1}, "burger_name = " + name, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;