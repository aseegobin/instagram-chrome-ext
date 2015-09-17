var React = require('react');

var authenicateURL = 'https://instagram.com/oauth/authorize/?client_id=55c4e90c0b3a41fab5b5c18c961ba3a5&redirect_uri=https://depcohpcikenbahfbjcppghabjkamohf.chromiumapp.org&response_type=token';

function handleToken(url) {
    var token = url.split('=')[1];
    console.log(token);
    //add flux to fuck with content
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