var jQuery = require('jQuery');

function getFeed(token) {
    var url = "https://api.instagram.com/v1/media/popular";
    
    // var url = "https://api.instagram.com/v1/tags/toronto?access_token="+token;
    
    // var url = "https://api.instagram.com/v1/tags/coffee/media/recent";
    // url += "?access_token=" + token;
    // url += "&callback=" + jsonpCallback + ";";
    
    //return array of images
    jQuery.ajax({
        type: "GET",
        url: url,
        contentType: 'application/json; charset=utf-8',
        data: {
            access_token: token
        },

        // dataType: "jsonp",
        // cache: false,
        // callback: 'jsonpCallback',

        success: function(results) {
            console.log(results)
        },

        error: function(error) {
            console.error(error);
        }
    });

    // function jsonpCallback() {
    //     console.log('callback');
    // };

    // jQuery.getJSON(url, function(data) {
    //     console.log(data);
    // });
    
    // jQuery.ajax({
    //     type: "GET",
    //     dataType: "jsonp",
    //     url: url, 
    //     success: function(data) {
    //         console.log(data);
    //     }
    // });
}

module.exports = {
    getFeed: getFeed
}