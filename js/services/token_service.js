var React = require('react');

var Constants = require('../constants/constants');
var UserStore = require('../stores/user_store');

var ChromestagramActions = require('../actions/chromestagram_actions');

var authenicateURL = Constants.AUTHENTICATION_URL;

function handleToken(url) {
    var token = url.split('=')[1];
    
    if (token) {
        ChromestagramActions.handleLogin(true);
    }
}

function login() {
    var options = {
        url: authenicateURL,
        interactive: true
    };

    chrome.identity.launchWebAuthFlow(options, handleToken);
}

module.exports = {
    login: login
};