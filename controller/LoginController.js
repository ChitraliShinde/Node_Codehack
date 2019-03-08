var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var Config = require('../config/config.js');
var Config_URL = new Config();
var Login = require('../models/Login');
var mysql = require("mysql");
var configAuth = require('../config/auth.js');

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var GitHubStrategy = require('passport-github').Strategy;


//Facebook Login
// Configure the Facebook strategy for use by Passport.

passport.serializeUser(function(user, done) {
    done(null, user);
});

// used to deserialize the user
passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new FacebookStrategy( {

            clientID        : configAuth.facebookAuth.clientID,
            clientSecret    : configAuth.facebookAuth.clientSecret,
            callbackURL     : configAuth.facebookAuth.callbackURL,
            passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function (req, token, refreshToken, profile, done) {
            process.nextTick(function () {
                return done(null,profile)
            });
        }
    ));

//Google Login
passport.use(new GoogleStrategy({
        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

    },
    function (req, token, refreshToken, profile, done) {
        process.nextTick(function () {
            return done(null,profile);
        });
    }
));


//Github Login
passport.use(new GitHubStrategy({
        clientID      : configAuth.githubAuth.clientID,
        clientSecret  : configAuth.githubAuth.clientSecret,
        callbackURL   : configAuth.githubAuth.callbackURL
    },
    function(accessToken, refreshToken, profile, cb) {
        //User.findOrCreate({ githubId: profile.id }, function (err, user) {
        process.nextTick(function () {
            return cb(null, profile);
        });
    }
));

//Local Login
exports.view = function(req, res){
        res.render('../views/admin/admin_login');

};

//req.param.id to get id from querystring (in url)
//req.body.username to get data from form

exports.checklogin = function(req, res){

    var sess = req.session;
    sess.username = req.body.username;
    sess.password = req.body.password;

    var query1 = "SELECT * FROM ?? where username=? and password=?" ;
    var table1 = ["users",sess.username,sess.password];
    query1 = mysql.format(query1,table1);
    conn.query(query1, function(err1, rows1)
    {
        if (rows1.length==""){
            req.flash('error', 'Username & Password does not Match...');
            res.redirect('/back-office/Node-Admin-Login/login');
        }
        else {
            //res.render('../views/admin/dashboard',{username:sess.username});
            res.redirect('/back-office/Node-Admin-Dashboard/dashboard');
        }
    });
};

exports.logout = function(req, res){
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Logout");
            //res.flash('success',"Logout Successfully...");
            res.redirect('/back-office/Node-Admin-Login/login');
        }
    })
};