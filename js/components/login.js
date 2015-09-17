var React = require('react');

var TokenService = require('../services/token_service');

var Login = React.createClass({
    render: function() {
        return (
            <div>
                <div className='writing-logo'>
                    <img src="images/instagram-writing.png"/>
                </div>

                <div className='gram-login'>
                    You must first log in to view your feed
                    <div className='login-button' onClick={this.handleLogIn}>
                        Login
                    </div>
                </div>
            </div>
        );
    },
    
    handleLogIn: function() {
        TokenService.login();
    },

});

module.exports = Login;