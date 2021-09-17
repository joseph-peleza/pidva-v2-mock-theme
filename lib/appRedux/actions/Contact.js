"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onDeleteContact = exports.onUpdateContact = exports.onAddContact = exports.onGetAllContact = void 0;

var _ActionTypes = require("../../constants/ActionTypes");

var _firebase = require("../../firebase/firebase");

var onGetAllContact = function onGetAllContact() {
  return function (dispatch) {
    dispatch({
      type: _ActionTypes.FETCH_START
    });

    _firebase.database.ref('/contact').on('value', function (snapshot) {
      dispatch({
        type: _ActionTypes.FETCH_SUCCESS
      });
      dispatch({
        type: _ActionTypes.GET_All_CONTACT_SUCCESS,
        payload: snapshot.val()
      });
    });
  };
};

exports.onGetAllContact = onGetAllContact;

var onAddContact = function onAddContact(contact) {
  return function (dispatch) {
    return _firebase.database.ref('/contact').push(contact);
  };
};

exports.onAddContact = onAddContact;

var onUpdateContact = function onUpdateContact(id, contact) {
  return function (dispatch) {
    return _firebase.database.ref('/contact').child(id).update(contact);
  };
};

exports.onUpdateContact = onUpdateContact;

var onDeleteContact = function onDeleteContact(id) {
  return function (dispatch) {
    return _firebase.database.ref('/contact').child(id).remove();
  };
};

exports.onDeleteContact = onDeleteContact;