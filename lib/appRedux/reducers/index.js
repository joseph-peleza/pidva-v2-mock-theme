"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRouterRedux = require("react-router-redux");

var _Settings = _interopRequireDefault(require("./Settings"));

var _Auth = _interopRequireDefault(require("./Auth"));

var _Notes = _interopRequireDefault(require("./Notes"));

var _Contact = _interopRequireDefault(require("./Contact"));

var _Common = _interopRequireDefault(require("./Common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  settings: _Settings.default,
  auth: _Auth.default,
  notes: _Notes.default,
  contact: _Contact.default,
  common: _Common.default
});
var _default = reducers;
exports.default = _default;