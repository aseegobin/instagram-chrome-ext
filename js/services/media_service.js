var jQuery = require('jQuery');

function getFeed(token) {
    var url = "https://api.instagram.com/v1/media/popular"
    
    //return array of images
    jQuery.ajax({
        method: "GET",
        url: url,
        contentType: 'application/json; charset=utf-8',
        data: {
            access_token: token
        },

        dataType: "jsonp",
        cache: false,
        jsonpCallback: 'jsonpCallback',

        success: function(results) {
            console.log(results)
        },

        error: function(error) {
            console.error(error);
        }
    });

    // jQuery.getJSON(url, function(data) {
    //     console.log(data);
    // })
}

module.exports = {
    getFeed: getFeed
}