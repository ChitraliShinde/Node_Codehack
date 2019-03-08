var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var mysql = require("mysql");

module.exports.view = function(callback) {
    var sql = "Select * from ??";
    var value = ["users"];
    conn.query(sql, [value],callback);
}

