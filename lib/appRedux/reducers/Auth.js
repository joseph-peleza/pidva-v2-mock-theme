"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ActionTypes = require("constants/ActionTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INIT_STATE = {
  loader: false,
  alertMessage: '',
  showMessage: false,
  initURL: '',
  authUser: localStorage.getItem('user_id')
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _ActionTypes.SIGNUP_USER_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _ActionTypes.SIGNIN_USER_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _ActionTypes.INIT_URL:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          initURL: action.payload
        });
      }

    case _ActionTypes.SIGNOUT_USER_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          authUser: null,
          initURL: '/',
          loader: false
        });
      }

    case _ActionTypes.SHOW_MESSAGE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          alertMessage: action.payload,
          showMessage: true,
          loader: false
        });
      }

    case _ActionTypes.HIDE_MESSAGE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          alertMessage: '',
          showMessage: false,
          loader: false
        });
      }

    case _ActionTypes.SIGNIN_GOOGLE_USER_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _ActionTypes.SIGNIN_FACEBOOK_USER_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _ActionTypes.SIGNIN_TWITTER_USER_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _ActionTypes.SIGNIN_GITHUB_USER_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _ActionTypes.ON_SHOW_LOADER:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: true
        });
      }

    case _ActionTypes.ON_HIDE_LOADER:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false
        });
      }

    default:
      return state;
  }
};

exports.default = _default;