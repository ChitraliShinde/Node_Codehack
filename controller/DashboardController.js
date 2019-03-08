var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var Config = require('../config/config.js');
var Config_URL = new Config();

var Dashboard = require('../models/Dashboard');
var mysql = require("mysql");

var fs = require('fs');
var uniqid = require('uniqid');

exports.dashboard = function(req, res){
    try {
        Dashboard.view(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows) && Config_URL.isLoginCheck(req)) {
                res.render('../views/admin/dashboard',{data:rows});
            }
            else {
                req.flash('error',"Please Login First")
                res.redirect('/back-office/Node-Admin-Login/login');
            }
        });
    }catch (ex){

    }
};

exports.view = function(req, res){
    try {
        Dashboard.view(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows) && Config_URL.isLoginCheck(req)) {
                res.render('../views/admin/view_articles',{data:rows});
            }
            else {
                req.flash('error',"Please Login First")
                res.redirect('/back-office/Node-Admin-Login/login');
            }
        });
    }catch (ex){

    }
};

exports.articleDetail = function(req, res){
    var id = req.params.id;

    Dashboard.findById(id, function(err, rows, fields) {
        if (Config_URL.isDataEmpty(rows) && Config_URL.isLoginCheck(req)) {
            res.render('../views/admin/article_detail',{data:rows});
        } else {
            req.flash('error',"Please Login First")
            res.redirect('/back-office/Node-Admin-Login/login');
        };
    });
};

exports.add = function(req, res){
    var id = req.params.id;

    Dashboard.findById(id, function(err, rows, fields) {

        if (Config_URL.isLoginCheck(req)){

            if (Config_URL.isDataEmpty(rows)) {
                res.render('../views/admin/edit_article',{data:rows});
            } else {
                res.render('../views/admin/add_article');
            }
        }
        else {
            req.flash('error',"Please Login First")
            res.redirect('/back-office/Node-Admin-Login/login');
        }
    });
};

exports.save = function(req, res){
    //console.log(req.files);
    if (!req.files) {
        return res.status(400).send("No files were uploaded.");
    }

    try {
        var data = req.body;
        var uploadedFile=req.files.image;
        var fileExtension;
        var image_name;

        fileExtension = uploadedFile.mimetype.split('/')[1];
        image_name = uniqid() + '.' + fileExtension;

        var datass = {
            title: data.title,
            description: data.description,
            image:image_name,

        };

        // check the filetype before uploading it
        if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif') {
            // upload the file to the /public/assets/img directory
            uploadedFile.mv(`public/assets/img/${image_name}`,
                (err ) => {
                    if (err) {
                        return res.status(500).send(err);
                    }

                    // send the Article details to the database
                    Dashboard.save(datass, function (err, info) {

                        req.flash('success', 'Article saved Successfully');
                        res.redirect('/back-office/Node-Admin-Viewarticles/viewarticles');
                    });

                });
        } else {
            message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
            res.render('../views/admin/add_article');
        }

    }catch (ex){

    }
};

exports.update = function(req, res){
    try{
        var data = req.body;
        var id = req.params.id;

        var datass = {
            id: id,
            title: data.title,
            description: data.description
        };
        Dashboard.update(datass, function(err, info) {
            req.flash('success', 'Data updated Successfully');
            res.redirect('/back-office/Node-Admin-Viewarticles/viewarticles');
        });
    }catch (ex){

    }
};

exports.delete = function(req, res){
    try {
        var id = req.params.id;

        data = {
            id: id
        };
        Dashboard.delete(data, function(err, info) {
            req.flash('success', 'Data deleted successfully');
            res.redirect('/back-office/Node-Admin-Viewarticles/viewarticles');
        });
    }catch (ex){

    }
};

exports.api = function(req, res){
    try {
        Dashboard.view(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(rows));
            }
            else {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({status: false}));
            }
        });
    }catch (ex){

    }
};

exports.chart_api = function (req,res) {
  try {
      Dashboard.chart(function(err, rows, fields) {

          if (Config_URL.isDataEmpty(rows)) {
              res.setHeader('Content-Type', 'application/json');
              res.send(JSON.stringify(rows));

          }
          else {
              res.setHeader('Content-Type', 'application/json');
              res.send(JSON.stringify({status: false}));

          }
      });
  }  catch (ex) {

  }
};
