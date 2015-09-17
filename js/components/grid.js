var React = require('react');

var MediaService = require('../services/media_service');

var Grid = React.createClass({
    getInitalState: function() {
        return {
            feed: []
        }
    },

    getMedia: function(token) {
        var newsFeed = MediaService.getFeed(token);
        this.setState({ feed: newsFeed });
    },

    render: function() {
        return (
            <div>
                <div className='gram-grid'>
                    GRID
                    {this.getMedia(this.props.accessToken)}
                </div>
            </div>
        );
    }
});

module.exports = Grid;