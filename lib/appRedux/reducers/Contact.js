"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ActionTypes = require("../../constants/ActionTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INIT_STATE = {
  contactList: [],
  selectedContact: []
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _ActionTypes.GET_All_CONTACT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          contactList: action.payload
        });
      }

    case _ActionTypes.UPDATE_CONTACT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        contactList: state.contactList.map(function (contact) {
          return contact.id === action.payload.id ? action.payload : contact;
        })
      });

    case _ActionTypes.DELETE_CONTACT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        contactList: state.contactList.filter(function (contact) {
          return contact.id !== action.payload.id;
        })
      });

    case _ActionTypes.ON_ADD_CONTACT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        contactList: action.payload.contact(state.contactList)
      });

    default:
      return state;
  }
};

exports.default = _default;