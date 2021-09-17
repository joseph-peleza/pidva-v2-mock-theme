"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserAccount = createUserAccount;
exports.signInWithGoogle = signInWithGoogle;
exports.signInWithFacebook = signInWithFacebook;
exports.signInWithTwitter = signInWithTwitter;
exports.signInWithGithub = signInWithGithub;
exports.signInUser = signInUser;
exports.signOutUser = signOutUser;
exports.default = rootSaga;

var _effects = require("redux-saga/effects");

var _firebase = require("../../firebase/firebase");

var _ActionTypes = require("constants/ActionTypes");

var _Auth = require("../../appRedux/actions/Auth");

var _Auth2 = require("../actions/Auth");

var _marked = /*#__PURE__*/regeneratorRuntime.mark(createUserWithEmailPassword),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(signInUserWithGoogle),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(signInUserWithFacebook),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(signInUserWithGithub),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(signInUserWithTwitter),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(signInUserWithEmailPassword),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(signOut),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(createUserAccount),
    _marked9 = /*#__PURE__*/regeneratorRuntime.mark(signInWithGoogle),
    _marked10 = /*#__PURE__*/regeneratorRuntime.mark(signInWithFacebook),
    _marked11 = /*#__PURE__*/regeneratorRuntime.mark(signInWithTwitter),
    _marked12 = /*#__PURE__*/regeneratorRuntime.mark(signInWithGithub),
    _marked13 = /*#__PURE__*/regeneratorRuntime.mark(signInUser),
    _marked14 = /*#__PURE__*/regeneratorRuntime.mark(signOutUser),
    _marked15 = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUserWithEmailPasswordRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _firebase.auth.createUserWithEmailAndPassword(email, password).then(function (authUser) {
              return authUser;
            }).catch(function (error) {
              return error;
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUserWithEmailPasswordRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var signInUserWithEmailPasswordRequest = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(email, password) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _firebase.auth.signInWithEmailAndPassword(email, password).then(function (authUser) {
              return authUser;
            }).catch(function (error) {
              return error;
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signInUserWithEmailPasswordRequest(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var signOutRequest = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _firebase.auth.signOut().then(function (authUser) {
              return authUser;
            }).catch(function (error) {
              return error;
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function signOutRequest() {
    return _ref3.apply(this, arguments);
  };
}();

var signInUserWithGoogleRequest = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _firebase.auth.signInWithPopup(_firebase.googleAuthProvider).then(function (authUser) {
              return authUser;
            }).catch(function (error) {
              return error;
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function signInUserWithGoogleRequest() {
    return _ref4.apply(this, arguments);
  };
}();

var signInUserWithFacebookRequest = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _firebase.auth.signInWithPopup(_firebase.facebookAuthProvider).then(function (authUser) {
              return authUser;
            }).catch(function (error) {
              return error;
            });

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function signInUserWithFacebookRequest() {
    return _ref5.apply(this, arguments);
  };
}();

var signInUserWithGithubRequest = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _firebase.auth.signInWithPopup(_firebase.githubAuthProvider).then(function (authUser) {
              return authUser;
            }).catch(function (error) {
              return error;
            });

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function signInUserWithGithubRequest() {
    return _ref6.apply(this, arguments);
  };
}();

var signInUserWithTwitterRequest = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _firebase.auth.signInWithPopup(_firebase.twitterAuthProvider).then(function (authUser) {
              return authUser;
            }).catch(function (error) {
              return error;
            });

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function signInUserWithTwitterRequest() {
    return _ref7.apply(this, arguments);
  };
}();

function createUserWithEmailPassword(_ref8) {
  var payload, email, password, signUpUser;
  return regeneratorRuntime.wrap(function createUserWithEmailPassword$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          payload = _ref8.payload;
          email = payload.email, password = payload.password;
          _context8.prev = 2;
          _context8.next = 5;
          return (0, _effects.call)(createUserWithEmailPasswordRequest, email, password);

        case 5:
          signUpUser = _context8.sent;

          if (!signUpUser.message) {
            _context8.next = 11;
            break;
          }

          _context8.next = 9;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(signUpUser.message));

        case 9:
          _context8.next = 14;
          break;

        case 11:
          localStorage.setItem('user_id', signUpUser.user.uid);
          _context8.next = 14;
          return (0, _effects.put)((0, _Auth.userSignUpSuccess)(signUpUser.user.uid));

        case 14:
          _context8.next = 20;
          break;

        case 16:
          _context8.prev = 16;
          _context8.t0 = _context8["catch"](2);
          _context8.next = 20;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(_context8.t0));

        case 20:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked, null, [[2, 16]]);
}

function signInUserWithGoogle() {
  var signUpUser;
  return regeneratorRuntime.wrap(function signInUserWithGoogle$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0, _effects.call)(signInUserWithGoogleRequest);

        case 3:
          signUpUser = _context9.sent;

          if (!signUpUser.message) {
            _context9.next = 9;
            break;
          }

          _context9.next = 7;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(signUpUser.message));

        case 7:
          _context9.next = 12;
          break;

        case 9:
          localStorage.setItem('user_id', signUpUser.user.uid);
          _context9.next = 12;
          return (0, _effects.put)((0, _Auth2.userGoogleSignInSuccess)(signUpUser.user.uid));

        case 12:
          _context9.next = 18;
          break;

        case 14:
          _context9.prev = 14;
          _context9.t0 = _context9["catch"](0);
          _context9.next = 18;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(_context9.t0));

        case 18:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked2, null, [[0, 14]]);
}

function signInUserWithFacebook() {
  var signUpUser;
  return regeneratorRuntime.wrap(function signInUserWithFacebook$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return (0, _effects.call)(signInUserWithFacebookRequest);

        case 3:
          signUpUser = _context10.sent;

          if (!signUpUser.message) {
            _context10.next = 9;
            break;
          }

          _context10.next = 7;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(signUpUser.message));

        case 7:
          _context10.next = 12;
          break;

        case 9:
          localStorage.setItem('user_id', signUpUser.user.uid);
          _context10.next = 12;
          return (0, _effects.put)((0, _Auth2.userFacebookSignInSuccess)(signUpUser.user.uid));

        case 12:
          _context10.next = 18;
          break;

        case 14:
          _context10.prev = 14;
          _context10.t0 = _context10["catch"](0);
          _context10.next = 18;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(_context10.t0));

        case 18:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked3, null, [[0, 14]]);
}

function signInUserWithGithub() {
  var signUpUser;
  return regeneratorRuntime.wrap(function signInUserWithGithub$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return (0, _effects.call)(signInUserWithGithubRequest);

        case 3:
          signUpUser = _context11.sent;

          if (!signUpUser.message) {
            _context11.next = 9;
            break;
          }

          _context11.next = 7;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(signUpUser.message));

        case 7:
          _context11.next = 12;
          break;

        case 9:
          localStorage.setItem('user_id', signUpUser.user.uid);
          _context11.next = 12;
          return (0, _effects.put)((0, _Auth2.userGithubSignInSuccess)(signUpUser.user.uid));

        case 12:
          _context11.next = 18;
          break;

        case 14:
          _context11.prev = 14;
          _context11.t0 = _context11["catch"](0);
          _context11.next = 18;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(_context11.t0));

        case 18:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked4, null, [[0, 14]]);
}

function signInUserWithTwitter() {
  var signUpUser;
  return regeneratorRuntime.wrap(function signInUserWithTwitter$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return (0, _effects.call)(signInUserWithTwitterRequest);

        case 3:
          signUpUser = _context12.sent;

          if (!signUpUser.message) {
            _context12.next = 14;
            break;
          }

          if (!(signUpUser.message.length > 100)) {
            _context12.next = 10;
            break;
          }

          _context12.next = 8;
          return (0, _effects.put)((0, _Auth.showAuthMessage)('Your request has been canceled.'));

        case 8:
          _context12.next = 12;
          break;

        case 10:
          _context12.next = 12;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(signUpUser.message));

        case 12:
          _context12.next = 17;
          break;

        case 14:
          localStorage.setItem('user_id', signUpUser.user.uid);
          _context12.next = 17;
          return (0, _effects.put)((0, _Auth2.userTwitterSignInSuccess)(signUpUser.user.uid));

        case 17:
          _context12.next = 23;
          break;

        case 19:
          _context12.prev = 19;
          _context12.t0 = _context12["catch"](0);
          _context12.next = 23;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(_context12.t0));

        case 23:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked5, null, [[0, 19]]);
}

function signInUserWithEmailPassword(_ref9) {
  var payload, email, password, _signInUser;

  return regeneratorRuntime.wrap(function signInUserWithEmailPassword$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          payload = _ref9.payload;
          email = payload.email, password = payload.password;
          _context13.prev = 2;
          _context13.next = 5;
          return (0, _effects.call)(signInUserWithEmailPasswordRequest, email, password);

        case 5:
          _signInUser = _context13.sent;

          if (!_signInUser.message) {
            _context13.next = 11;
            break;
          }

          _context13.next = 9;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(_signInUser.message));

        case 9:
          _context13.next = 14;
          break;

        case 11:
          localStorage.setItem('user_id', _signInUser.user.uid);
          _context13.next = 14;
          return (0, _effects.put)((0, _Auth.userSignInSuccess)(_signInUser.user.uid));

        case 14:
          _context13.next = 20;
          break;

        case 16:
          _context13.prev = 16;
          _context13.t0 = _context13["catch"](2);
          _context13.next = 20;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(_context13.t0));

        case 20:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked6, null, [[2, 16]]);
}

function signOut() {
  var _signOutUser;

  return regeneratorRuntime.wrap(function signOut$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return (0, _effects.call)(signOutRequest);

        case 3:
          _signOutUser = _context14.sent;

          if (!(_signOutUser === undefined)) {
            _context14.next = 10;
            break;
          }

          localStorage.removeItem('user_id');
          _context14.next = 8;
          return (0, _effects.put)((0, _Auth.userSignOutSuccess)(_signOutUser));

        case 8:
          _context14.next = 12;
          break;

        case 10:
          _context14.next = 12;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(_signOutUser.message));

        case 12:
          _context14.next = 18;
          break;

        case 14:
          _context14.prev = 14;
          _context14.t0 = _context14["catch"](0);
          _context14.next = 18;
          return (0, _effects.put)((0, _Auth.showAuthMessage)(_context14.t0));

        case 18:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked7, null, [[0, 14]]);
}

function createUserAccount() {
  return regeneratorRuntime.wrap(function createUserAccount$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _effects.takeEvery)(_ActionTypes.SIGNUP_USER, createUserWithEmailPassword);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked8);
}

function signInWithGoogle() {
  return regeneratorRuntime.wrap(function signInWithGoogle$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0, _effects.takeEvery)(_ActionTypes.SIGNIN_GOOGLE_USER, signInUserWithGoogle);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked9);
}

function signInWithFacebook() {
  return regeneratorRuntime.wrap(function signInWithFacebook$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0, _effects.takeEvery)(_ActionTypes.SIGNIN_FACEBOOK_USER, signInUserWithFacebook);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked10);
}

function signInWithTwitter() {
  return regeneratorRuntime.wrap(function signInWithTwitter$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return (0, _effects.takeEvery)(_ActionTypes.SIGNIN_TWITTER_USER, signInUserWithTwitter);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked11);
}

function signInWithGithub() {
  return regeneratorRuntime.wrap(function signInWithGithub$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return (0, _effects.takeEvery)(_ActionTypes.SIGNIN_GITHUB_USER, signInUserWithGithub);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked12);
}

function signInUser() {
  return regeneratorRuntime.wrap(function signInUser$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return (0, _effects.takeEvery)(_ActionTypes.SIGNIN_USER, signInUserWithEmailPassword);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked13);
}

function signOutUser() {
  return regeneratorRuntime.wrap(function signOutUser$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return (0, _effects.takeEvery)(_ActionTypes.SIGNOUT_USER, signOut);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked14);
}

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(signInUser), (0, _effects.fork)(createUserAccount), (0, _effects.fork)(signInWithGoogle), (0, _effects.fork)(signInWithFacebook), (0, _effects.fork)(signInWithTwitter), (0, _effects.fork)(signInWithGithub), (0, _effects.fork)(signOutUser)]);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked15);
}