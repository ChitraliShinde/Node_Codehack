// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '214896326056999', // your App ID
        'clientSecret'  : 'acabf96d71205866cee85ce67bbbd8c5', // your App Secret
        'callbackURL'   : 'http://localhost:3000/login/facebook/return',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'googleAuth' : {
        'clientID'      : '809454528467-05gdp05mmffn6b9qkkh9h6huhoq03pbu.apps.googleusercontent.com',
        'clientSecret'  : 'dsy8r2czVOtVkUkoI_SWKXCy',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    },

    'githubAuth' : {
        'clientID'      : '46495966706095f918cf',
        'clientSecret'  : 'fcadb2ecb98055f191c79d92c82c315063621868',
        'callbackURL'   : 'http://localhost:3000/auth/github/callback'
    }
};
