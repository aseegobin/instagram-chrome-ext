var React = require('react');

var Login = React.createClass({
    username: null,
    password: null,

    render: function() {
        return (
            <div>
                <div className='writing-logo'>
                    <img src="images/instagram-writing.png"/>
                </div>

                <div className='gram-login'>
                    <input type="name" placeholder="Username" onChange={this.handleName}/>
                    <input type="password" placeholder="Password" onChange={this.handlePassword}/>
                    
                    <div className='login-button' onClick={this.handleLogIn}>
                        Login
                    </div>
                </div>
            </div>
        );
    },
    
    handleName: function(event) {
        this.username = event.target.value;
    },

    handlePassword: function(event) {
        this.password = event.target.value;
    },

    handleLogIn: function() {
        console.log(this.username, this.password);
    },

});

module.exports = Login;