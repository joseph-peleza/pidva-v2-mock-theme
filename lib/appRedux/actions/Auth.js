"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideAuthLoader = exports.hideMessage = exports.showAuthLoader = exports.userGithubSignInSuccess = exports.userGithubSignIn = exports.userTwitterSignInSuccess = exports.userTwitterSignIn = exports.setInitUrl = exports.userFacebookSignInSuccess = exports.userFacebookSignIn = exports.userGoogleSignInSuccess = exports.userGoogleSignIn = exports.showAuthMessage = exports.userSignOutSuccess = exports.userSignInSuccess = exports.userSignUpSuccess = exports.userSignOut = exports.userSignIn = exports.userSignUp = void 0;

var _ActionTypes = require("constants/ActionTypes");

var userSignUp = function userSignUp(user) {
  return {
    type: _ActionTypes.SIGNUP_USER,
    payload: user
  };
};

exports.userSignUp = userSignUp;

var userSignIn = function userSignIn(user) {
  return {
    type: _ActionTypes.SIGNIN_USER,
    payload: user
  };
};

exports.userSignIn = userSignIn;

var userSignOut = function userSignOut() {
  return {
    type: _ActionTypes.SIGNOUT_USER
  };
};

exports.userSignOut = userSignOut;

var userSignUpSuccess = function userSignUpSuccess(authUser) {
  return {
    type: _ActionTypes.SIGNUP_USER_SUCCESS,
    payload: authUser
  };
};

exports.userSignUpSuccess = userSignUpSuccess;

var userSignInSuccess = function userSignInSuccess(authUser) {
  return {
    type: _ActionTypes.SIGNIN_USER_SUCCESS,
    payload: authUser
  };
};

exports.userSignInSuccess = userSignInSuccess;

var userSignOutSuccess = function userSignOutSuccess() {
  return {
    type: _ActionTypes.SIGNOUT_USER_SUCCESS
  };
};

exports.userSignOutSuccess = userSignOutSuccess;

var showAuthMessage = function showAuthMessage(message) {
  return {
    type: _ActionTypes.SHOW_MESSAGE,
    payload: message
  };
};

exports.showAuthMessage = showAuthMessage;

var userGoogleSignIn = function userGoogleSignIn() {
  return {
    type: _ActionTypes.SIGNIN_GOOGLE_USER
  };
};

exports.userGoogleSignIn = userGoogleSignIn;

var userGoogleSignInSuccess = function userGoogleSignInSuccess(authUser) {
  return {
    type: _ActionTypes.SIGNIN_GOOGLE_USER_SUCCESS,
    payload: authUser
  };
};

exports.userGoogleSignInSuccess = userGoogleSignInSuccess;

var userFacebookSignIn = function userFacebookSignIn() {
  return {
    type: _ActionTypes.SIGNIN_FACEBOOK_USER
  };
};

exports.userFacebookSignIn = userFacebookSignIn;

var userFacebookSignInSuccess = function userFacebookSignInSuccess(authUser) {
  return {
    type: _ActionTypes.SIGNIN_FACEBOOK_USER_SUCCESS,
    payload: authUser
  };
};

exports.userFacebookSignInSuccess = userFacebookSignInSuccess;

var setInitUrl = function setInitUrl(url) {
  return {
    type: _ActionTypes.INIT_URL,
    payload: url
  };
};

exports.setInitUrl = setInitUrl;

var userTwitterSignIn = function userTwitterSignIn() {
  return {
    type: _ActionTypes.SIGNIN_TWITTER_USER
  };
};

exports.userTwitterSignIn = userTwitterSignIn;

var userTwitterSignInSuccess = function userTwitterSignInSuccess(authUser) {
  return {
    type: _ActionTypes.SIGNIN_TWITTER_USER_SUCCESS,
    payload: authUser
  };
};

exports.userTwitterSignInSuccess = userTwitterSignInSuccess;

var userGithubSignIn = function userGithubSignIn() {
  return {
    type: _ActionTypes.SIGNIN_GITHUB_USER
  };
};

exports.userGithubSignIn = userGithubSignIn;

var userGithubSignInSuccess = function userGithubSignInSuccess(authUser) {
  return {
    type: _ActionTypes.SIGNIN_GITHUB_USER_SUCCESS,
    payload: authUser
  };
};

exports.userGithubSignInSuccess = userGithubSignInSuccess;

var showAuthLoader = function showAuthLoader() {
  return {
    type: _ActionTypes.ON_SHOW_LOADER
  };
};

exports.showAuthLoader = showAuthLoader;

var hideMessage = function hideMessage() {
  return {
    type: _ActionTypes.HIDE_MESSAGE
  };
};

exports.hideMessage = hideMessage;

var hideAuthLoader = function hideAuthLoader() {
  return {
    type: _ActionTypes.ON_HIDE_LOADER
  };
};

exports.hideAuthLoader = hideAuthLoader;