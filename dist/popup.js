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