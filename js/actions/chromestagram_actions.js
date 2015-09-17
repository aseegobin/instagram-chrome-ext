var ChromestagramDispatcher = require('../dispatcher/chromestagram_dispatcher');
var Constants = require('../constants/constants');

var ChromestagramActions = {
  handleLogin: function(token) {
    ChromestagramDispatcher.dispatch({
      actionType: Constants.LOGIN_ACTION,
      token: token
    });
  },

  // updateText: function(id, text) {
  //   AppDispatcher.dispatch({
  //     actionType: Constants.TODO_UPDATE_TEXT,
  //     id: id,
  //     text: text
  //   });
  // },

};

module.exports = ChromestagramActions;