var React        = require('react');
var EventEmitter = require('events').EventEmitter;
var Constants    = require('../constants/constants');
var assign       = require('object-assign');

var ChromestagramDispatcher = require('../dispatcher/chromestagram_dispatcher');


var UserStore = assign({}, EventEmitter.prototype, {
  emitChange: function(token) {
    this.emit(Constants.LOGIN_EVENT, token);
  },

  addChangeListener: function(callback) {
    this.on(Constants.LOGIN_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(Constants.LOGIN_EVENT, callback);
  }

});

// Register callback to handle all updates
ChromestagramDispatcher.register(function(action) {

    switch(action.actionType) {
        case Constants.LOGIN_ACTION:
            UserStore.emitChange(action.token);
        break;
    }
});

module.exports = UserStore;