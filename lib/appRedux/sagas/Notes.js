"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSticky = fetchSticky;
exports.updateSticky = updateSticky;
exports.default = rootSaga;

var _effects = require("redux-saga/effects");

var _Notes = require("../actions/Notes");

var _firebase = require("../../firebase/firebase");

var _ActionTypes = require("../../constants/ActionTypes");

var _Common = require("../actions/Common");

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchStickyRequest),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(fetchSticky),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(updateSticky),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getSticky = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _firebase.database.ref('notes').once('value').then(function (snapshot) {
              var notess = [];
              snapshot.forEach(function (rawData) {
                notess.push(rawData.val());
              });
              return notess;
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

  return function getSticky() {
    return _ref.apply(this, arguments);
  };
}();

var updateStickyRequest = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
    var notesList;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            notesList = _ref2.notesList;
            _context2.next = 3;
            return _firebase.database.ref('notes').set(notesList).then(function (notesList) {
              return notesList;
            }).catch(function (notesList) {
              return notesList;
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateStickyRequest(_x) {
    return _ref3.apply(this, arguments);
  };
}();

function fetchStickyRequest() {
  var fetchedSticky;
  return regeneratorRuntime.wrap(function fetchStickyRequest$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)(getSticky);

        case 3:
          fetchedSticky = _context3.sent;
          _context3.next = 6;
          return (0, _effects.put)((0, _Notes.fetchStickySuccess)(fetchedSticky));

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return (0, _effects.put)((0, _Common.fetchError)(_context3.t0));

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function fetchSticky() {
  return regeneratorRuntime.wrap(function fetchSticky$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeEvery)(_ActionTypes.GET_STICKY, fetchStickyRequest);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2);
}

function updateSticky() {
  return regeneratorRuntime.wrap(function updateSticky$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeEvery)(_ActionTypes.NOTES_UPDATE, updateStickyRequest);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked3);
}

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(fetchSticky), (0, _effects.fork)(updateSticky)]);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked4);
}