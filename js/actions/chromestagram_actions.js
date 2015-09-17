var ChromestagramDispatcher = require('../dispatcher/chromestagram_dispatcher');
var Constants = require('../constants/constants');

var ChromestagramActions = {
  handleLogin: function(flag) {
    ChromestagramDispatcher.dispatch({
      actionType: Constants.LOGIN_ACTION,
      flag: flag
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