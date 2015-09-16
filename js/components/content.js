var React = require('react');

var Login = require('./login');
var Grid = require('./grid');

var Content = React.createClass({
    getInitialState: function() {
        return {
            loggedIn: true
        }
    },

    render: function() {
        var content = <Login />;

        if (this.state.loggedIn) {
            content = <Grid />;
        };
        
        return (
            <div className="container">
                {content}
            </div>
        );
    }
});

module.exports = Content;