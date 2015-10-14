var jQuery = require('jQuery');

var _imageObjs = [];
var _postObjs  = [];

function getFeed(token) {
    // var url = "https://api.instagram.com/v1/media/popular";
    var url = "https://api.instagram.com/v1/users/self/feed";
    
    return new Promise((resolve,reject) => {
        jQuery.ajax({
            type: "GET",
            url: url,
            contentType: 'application/json; charset=utf-8',
            data: {
                access_token: token
            },

            success: function(results) {
                // _rawFeed = results;
                resolve(results);
            },

            error: function(error) {
                console.error(error);
            }
        });
    })
}

function buildFeed(token) {
    return new Promise((resolve, reject) => {
        this.getFeed(token)
            .then((feed) => {
                //only return images
                // TODO: handle videos
                _imageObjs = feed.data.filter(function(obj) {
                    return (obj.type === "image");
                });
                
                _postObjs = _imageObjs.map(function(obj) {
                    var postObj = {};
                    postObj.link = obj.images.low_resolution.url;
                    postObj.userName = obj.user.username;
                    postObj.profilePic = obj.user.profile_picture;

                    return postObj;
                })
                
                resolve(_postObjs);
            });
    })
}

module.exports = {
    getFeed: getFeed,
    buildFeed: buildFeed
}