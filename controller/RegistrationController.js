var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var Config = require('../config/config.js');
var Config_URL = new Config();
var Registration = require('../models/Registration');
var mysql = require("mysql");

exports.view = function(req, res){
    res.render('../views/admin/admin_registration');
};

exports.register = function(req, res){
    try {
        var data = req.body;
        var datas = {
            username: data.username,
            password: data.password,
            email: data.email,
            confirm_password: data.confirm_password,

        };
        Registration.save(datas, function (err, info) {
            if (data) {
                req.flash('success', 'Registered Successfully');
                res.redirect('/back-office/Node-Admin-Login/login');
            }
            else {
                req.flash('error', 'Failed to Register');
                res.redirect('/back-office/Node-Admin-Registration/registration');
            }

        });

    }catch (ex){

    }
};
