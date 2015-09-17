var React = require('react');

var Login = require('./login');
var Grid  = require('./grid');

var UserStore = require('../stores/user_store');

var Content = React.createClass({
    getInitialState: function() {
        return {
            loggedIn: false
        }
    },

    componentDidMount: function() {
        UserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        UserStore.removeChangeListener(this._onChange);
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
    },

    _onChange: function(flag) {
        this.setState({ loggedIn: flag });
    }
});

module.exports = Content;