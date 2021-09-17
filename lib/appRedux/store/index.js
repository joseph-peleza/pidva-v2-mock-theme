"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;
exports.history = void 0;

var _redux = require("redux");

var _index = _interopRequireDefault(require("../reducers/index"));

var _reactRouterRedux = require("react-router-redux");

var _createBrowserHistory = _interopRequireDefault(require("history/createBrowserHistory"));

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _index2 = _interopRequireDefault(require("../sagas/index"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory.default)();
exports.history = history;
var routeMiddleware = (0, _reactRouterRedux.routerMiddleware)(history);
var sagaMiddleware = (0, _reduxSaga.default)();
var middlewares = [_reduxThunk.default, sagaMiddleware, routeMiddleware];
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

function configureStore(initialState) {
  var store = (0, _redux.createStore)(_index.default, initialState, composeEnhancers(_redux.applyMiddleware.apply(void 0, middlewares)));
  sagaMiddleware.run(_index2.default);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', function () {
      var nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}