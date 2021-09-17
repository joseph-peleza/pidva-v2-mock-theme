"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _effects = require("redux-saga/effects");

var _Auth = _interopRequireDefault(require("./Auth"));

var _Notes = _interopRequireDefault(require("./Notes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);

function rootSaga(getState) {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _Auth.default)(), (0, _Notes.default)()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}