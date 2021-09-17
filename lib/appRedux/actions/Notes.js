"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStickySuccess = exports.onUpdateSticky = exports.fetchStickySuccess = exports.onGetSticky = void 0;

var _ActionTypes = require("../../constants/ActionTypes");

var onGetSticky = function onGetSticky(notesList) {
  return {
    type: _ActionTypes.GET_STICKY,
    notesList: notesList
  };
};

exports.onGetSticky = onGetSticky;

var fetchStickySuccess = function fetchStickySuccess(notesList) {
  return {
    type: _ActionTypes.FETCH_ALL_NOTES_SUCCESS,
    payload: notesList
  };
};

exports.fetchStickySuccess = fetchStickySuccess;

var onUpdateSticky = function onUpdateSticky(notesList) {
  return {
    type: _ActionTypes.NOTES_UPDATE,
    notesList: notesList
  };
};

exports.onUpdateSticky = onUpdateSticky;

var updateStickySuccess = function updateStickySuccess(notesList) {
  return {
    type: _ActionTypes.UPDATE_ALL_NOTES_SUCCESS,
    payload: notesList
  };
};

exports.updateStickySuccess = updateStickySuccess;