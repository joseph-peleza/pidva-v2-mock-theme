"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideMessage = exports.showMessage = exports.fetchError = exports.fetchSuccess = exports.fetchStart = void 0;

var _ActionTypes = require("../../constants/ActionTypes");

var fetchStart = function fetchStart() {
  return {
    type: _ActionTypes.FETCH_START
  };
};

exports.fetchStart = fetchStart;

var fetchSuccess = function fetchSuccess() {
  return {
    type: _ActionTypes.FETCH_SUCCESS
  };
};

exports.fetchSuccess = fetchSuccess;

var fetchError = function fetchError(error) {
  return {
    type: _ActionTypes.FETCH_ERROR,
    payload: error
  };
};

exports.fetchError = fetchError;

var showMessage = function showMessage(message) {
  return {
    type: _ActionTypes.SHOW_MESSAGE,
    payload: message
  };
};

exports.showMessage = showMessage;

var hideMessage = function hideMessage() {
  return {
    type: _ActionTypes.HIDE_MESSAGE
  };
};

exports.hideMessage = hideMessage;