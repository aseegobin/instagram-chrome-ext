var authenicateURL = 'https://instagram.com/oauth/authorize/?client_id=55c4e90c0b3a41fab5b5c18c961ba3a5&redirect_uri=https://depcohpcikenbahfbjcppghabjkamohf.chromiumapp.org&response_type=token';

function handleToken(url) {
    var token = url.split('=')[1];
    console.log(token);
}

var options = {
    url: authenicateURL,
    interactive: true
};

chrome.identity.launchWebAuthFlow(options, handleToken);

function getToken() {
    chrome.identity.getAuthToken({ 'interactive': false }, function(token) {
        if (token) {
            window.alert(token);
        }
    });
}

function logout() {
    chrome.identity.getAuthToken({ 'interactive': false }, function(token) {
        chrome.identity.removeCachedAuthToken(token, function() {
            window.alert('loggedout');
        });
    });
}