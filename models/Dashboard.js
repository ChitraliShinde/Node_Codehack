var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var mysql = require("mysql");

module.exports.view = function(callback) {
    var sql = "Select * from ?? order by title";
    var table = ["articles"];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.recentPost = function(callback) {
    var sql = "Select * from ?? order by created_at desc limit 5";
    var table = ["articles"];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.count = function (callback) {
    var sql = "SELECT COUNT(*) AS totalCount FROM ??";
    var table = ["articles" ];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.save = function(data, callback) {
    //?? for static data such as table name
    //? for dynamic data (data in table)
    var sql = "INSERT INTO ?? SET ?";
    var table = ["articles", data];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.update = function(data,callback) {
    var sql = "Update ?? SET ? where id=?";
    var table = ["articles", data,data.id];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.delete = function(data,callback) {
    var sql = "Delete From ?? where id=?";
    var table = ["articles",data.id];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.findById = function(id,callback) {
    var sql = "SELECT * from ?? where id=?";
    var table = ["articles", id];
    var queries = mysql.format(sql, table);
    conn.query(queries, callback);
}

module.exports.about = function(callback) {
    var sql = "Select * from ??";
    var table = ["about"];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}


module.exports.comment = function(id, callback) {
    var sql = "Select * from ?? WHERE post_id = ?";
    var table = ["comments",id];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.savecomment = function(data, callback) {
    var sql = "INSERT INTO ?? SET ?";
    var table = ["comments", data];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.countcomment = function(id, callback) {
    var sql = "SELECT COUNT(comment_id) FROM ?? WHERE post_id = ?";
    var table = ["comments", id];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}


module.exports.chart = function(callback) {
    var sql = "Select title,article_views from ??";
    var table = ["articles"];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

/*
INSERT INTO comments (post_id)
SELECT id
FROM articles
*/