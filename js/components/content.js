var React = require('react');

var Login = require('./login');
var Grid  = require('./grid');

var UserStore = require('../stores/user_store');

var Content = React.createClass({
    getInitialState: function() {
        return {
            token: null
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

        if (this.state.token) {
            content = <Grid accessToken={this.state.token} />;
        };
        
        return (
            <div className="container">
                {content}
            </div>
        );
    },

    _onChange: function(token) {
        this.setState({ token: token });
    }
});

module.exports = Content;