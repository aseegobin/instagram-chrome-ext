var React = require('react');

var MediaService = require('../services/media_service');

var Grid = React.createClass({
    getInitalState: function() {
        return {
            feed: []
        }
    },

    getMedia: function(token) {
        MediaService.buildFeed(token)
            .then((links) => {
                this.setState({feed: links});
            });
    },

    handleMedia: function() {
        if (!this.state) {
            this.getMedia(this.props.accessToken);
            return (<p></p>);
        } else {
            var images = this.state.feed.map(function(imageLink) {
                return (
                    <img className='instagram-img' src={imageLink} />
                );
            })
            return images;
        }
    },

    render: function() {
        return (
            <div>
                <div className='gram-grid'>
                    {this.handleMedia()}
                </div>
            </div>
        );
    }
});

module.exports = Grid;