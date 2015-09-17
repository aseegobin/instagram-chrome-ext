var React = require('react');

var Constants = require('../constants/constants');
var UserStore = require('../stores/user_store');

var ChromestagramActions = require('../actions/chromestagram_actions');

var authenicateURL = Constants.AUTHENTICATION_URL;

function handleToken(url) {
    var token = url.split('=')[1];
    
    if (token) {
        ChromestagramActions.handleLogin(token);
    }
}

function login() {
    var options = {
        url: authenicateURL,
        interactive: true
    };

    // chrome.identity.getAuthToken({ 'interactive': false, 'scopes': ["*://*.instagram.com/*"] }, function(token) {
    //     if (token) {
    //         window.alert(token);
    //     }
    // });

    //TODO: find way to get token without launching flow every time
    // maybe just put in storage?
    chrome.identity.launchWebAuthFlow(options, handleToken);
}

module.exports = {
    login: login
};