
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var request = require('request');
var passport = require('passport');


var app = express();
var session = require('express-session');
var connection  = require('express-myconnection');
var mysql = require('mysql');
var flash= require('express-flash');
// all environments

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(session({secret: 'ssshhhhh', resave: true, saveUninitialized: true}));
app.use( bodyParser.json() );
app.use(flash());
// to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());


app.use(function(req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});

require('./config/routes.js')(app);
//require('./config/routes.js')(passport, "sadas");

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
