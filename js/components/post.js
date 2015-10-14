var React = require('react');

var IGPost = React.createClass({
    render: function() {
        return (
            <div className='ig-post'>
                <div className='user-info'>
                    <img className='user-pic' src={this.props.postObj.profilePic} />
                    <div className='user-name'> 
                        {this.props.postObj.userName} 
                    </div>
                </div>    
                <img className='instagram-img' src={this.props.postObj.link} />
            </div>
        );
    }
});

module.exports = IGPost;