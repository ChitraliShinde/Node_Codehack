var RegistrationController = require('../controller/RegistrationController');
var LoginController = require('../controller/LoginController');
var DashboardController = require('../controller/DashboardController');
var UserController = require('../controller/UserController');

//you can include all your controllers
var passport = require('passport');
var request = require('request');

module.exports = function (app, passports) {

    app.get('/back-office/Node-Admin-Registration/registration', RegistrationController.view);
    app.post('/back-office/Node-Admin-Registration/register', RegistrationController.register);
    app.get('/back-office/Node-Admin-Login/login', LoginController.view);
    app.post('/back-office/Node-Admin-Check/checklogin', LoginController.checklogin);  //checklogin
    app.get('/back-office/Node-Admin-Logout/logout', LoginController.logout);

    app.get('/login/facebook', passport.authenticate('facebook'));
    app.get('/login/facebook/return',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            //res.render('../views/admin/dashboard');
            res.redirect('/dashboard');
        });

    app.get('/auth/google', passport.authenticate('google', {scope: ['email']}));
    app.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/dashboard');
        });

    app.get('/auth/github', passport.authenticate('github'));
    app.get('/auth/github/callback',
        passport.authenticate('github', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/dashboard');
        });


    //return json data to node js
    app.get('/dashoard_api', DashboardController.api);
    app.get('/chart_api', DashboardController.chart_api);

    app.get('/back-office/Node-Admin-Dashboard/dashboard', DashboardController.dashboard);
    app.get('/back-office/Node-Admin-Viewarticles/viewarticles', DashboardController.view);
    app.get('/back-office/Node-Admin-Article/article-detail/:id', DashboardController.articleDetail);
    app.get('/back-office/Node-Admin-Addarticle/addarticle', DashboardController.add);
    app.post('/back-office/Node-Admin-Savearticle/savearticle', DashboardController.save);
    app.get('/back-office/Node-Admin-Editarticle/editarticle/:id', DashboardController.add);
    app.post('/back-office/Node-Admin-Updatearticle/updatearticle/:id', DashboardController.update);
    app.get('/back-office/Node-Admin-Deletearticle/deletearticle/:id', DashboardController.delete);


    app.get('/comment_api/:id', UserController.comment_api);

    app.get('/', UserController.view);
    app.get('/home', UserController.view);
    app.get('/about', UserController.about);
    app.get('/blog', UserController.blog);
    app.get('/blog/blog-detail/:id', UserController.blogDetail);
    app.get('/contact', UserController.contact);
    app.post('/contact/sendmail', UserController.sendmail);

    app.post('/recaptcha', UserController.recaptcha);
    app.post('/savecomment/:id', UserController.blogDetail);


}
