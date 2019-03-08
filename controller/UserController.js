var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var Config = require('../config/config.js');
var Config_URL = new Config();
var nodemailer = require('nodemailer');

var Dashboard = require('../models/Dashboard');
var mysql = require("mysql");

exports.view = function(req, res){
    try {
        Dashboard.view(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {
                res.render('../views/front_end/home',{data:rows});
            }
            else {
                res.render('../views/front_end/blog');
            }
        });
    }catch (ex){

    }
};

exports.about = function (req, res) {
    try {
        Dashboard.about(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {
                res.render('../views/front_end/about',{data:rows});
            }
            else {
                res.render('../views/front_end/home');
            }
        });
    }catch (ex){

    }
};

exports.blog = function (req, res) {
    try {
        Dashboard.view(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {

                Dashboard.recentPost(function(err, recentPost, fields) {

                    if (Config_URL.isDataEmpty(rows)) {
                        res.render('../views/front_end/blog',{data:rows, data1:recentPost});
                    }
                    else {
                        res.render('../views/front_end/home');
                    }
                });
            }
        });

    }catch (ex){

    }
};

exports.blogDetail = function(req, res){
    var id = req.params.id;

    Dashboard.findById(id, function(err, blogData, fields) {
        if (Config_URL.isDataEmpty(blogData)) {

            Dashboard.recentPost(function(err, recentPost, fields) {

                //View Comment
            Dashboard.comment(id,function(err, rows, fields) {
                if (rows) {
                    res.render('../views/front_end/blog_detail',{data:rows, data1:blogData, data2:recentPost});
                }
                else {
                    res.render('../views/front_end/blog');
                }
            });
            });

            //Save Comment
            var data = req.body;
            var post_id = req.params.id;

            var datasss = {
                username: data.name,
                email: data.email,
                comment: data.comment,
                post_id: post_id
            };

            Dashboard.savecomment(datasss, function (err, info) {

                req.flash('success', 'Comment Post Successfully');
            });
        }
    });
};

exports.comment_api = function (req,res) {
    //var id = req.params.id;
    try {
        var id = req.params.id;
        Dashboard.comment(id,function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(rows));

                // res.render('../views/admin/view_articles',{data:rows});
            }
            else {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({status: false}));

                //res.render('../views/admin/view_articles');
            }
        });
    }  catch (ex) {

    }
};

exports.recaptcha = function (req, res) {
    try {

        // g-recaptcha-response is the key that browser will generate upon form submit.
        // if its blank or null means user has not selected the captcha, so return the error.
        if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
            return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
        }

        var secretKey = "6Lcax4oUAAAAAKefDnTS4ZVyLb7iGJvhjzIJoyFl";
        // req.connection.remoteAddress will provide IP address of connected user.
        var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
        // Hitting GET request to the URL, Google will respond with success or error scenario.
        request(verificationUrl,function(error,response,body) {
            body = JSON.parse(body);
            // Success will be true or false depending upon captcha validation.
            if(body.success !== undefined && !body.success) {
                return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
            }
            res.json({"responseCode" : 0,"responseDesc" : "Sucess"});
        });


    }catch (ex){

    }
};

exports.contact = function (req, res) {
    try {
        Dashboard.about(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {
                res.render('../views/front_end/contact');
            }
            else {
                res.render('../views/front_end/blog');
            }

        });
    }catch (ex){

    }
};

exports.sendmail = function (req, res) {
    try {

        //Send Mail
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'chitralishinde03@gmail.com',
                pass: 'shinde#chitrali03'
            }
        });

        var data = req.body;

        var mailOptions = {
            from: data.email,
            to: 'chitralishinde03@gmail.com, chitralishinde1234@gmail.com',
            subject: 'Sending Email using Node.js',
            //text: data.message,
            html: '<label>Name:</label>' + data.name + '<br><label>Contact:</label>' + data.contact + '<br><label>Email:</label>' + data.email + '<br><label>Message:</label>' + data.message,

        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                req.flash('error','Failed To Sent');

            } else {
                console.log('Email Sent: ' + info.response);
                req.flash('success','Thank You!!!');
            }
        });

    }catch (ex) {

    }
}