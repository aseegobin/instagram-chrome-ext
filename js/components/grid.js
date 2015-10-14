var React = require('react');

var MediaService = require('../services/media_service');

var IGPost = require('./post');

var Grid = React.createClass({
    getInitalState: function() {
        return {
            feed: []
        }
    },

    getMedia: function(token) {
        MediaService.buildFeed(token)
            .then((posts) => {
                this.setState({feed: posts});
            });
    },

    handleMedia: function() {
        if (!this.state) {
            this.getMedia(this.props.accessToken);
            return (<p></p>);
        } else {
            var images = this.state.feed.map(function(imageObj) {
                return (
                    <IGPost postObj={imageObj} />
                );
            })
            return images;
        }
    },

    render: function() {
        var feed = this.handleMedia();

        return (
            <div>
                <div className='gram-grid'>
                    {feed}
                </div>
            </div>
        );
    }
});

module.exports = Grid;