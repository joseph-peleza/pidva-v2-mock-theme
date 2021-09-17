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
  error: "",
  loading: false,
  message: ''
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _ActionTypes.FETCH_START:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: '',
          loading: true
        });
      }

    case _ActionTypes.FETCH_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: '',
          loading: false
        });
      }

    case _ActionTypes.SHOW_MESSAGE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: action.payload,
          loading: false
        });
      }

    case _ActionTypes.FETCH_ERROR:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: action.payload,
          message: ''
        });
      }

    case _ActionTypes.HIDE_MESSAGE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: '',
          message: ''
        });
      }

    default:
      return state;
  }
};

exports.default = _default;