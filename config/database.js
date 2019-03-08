var mysql = require("mysql");

//you can include all your controllers

module.exports = function () {

    this.con=function () {
        var conn= mysql.createConnection({ 
            host: '127.0.0.1',
            user: 'root',
            password : '',
            //port : 3306, //port mysql
            database:'nodejs'
        });
        return conn;
    }
}
