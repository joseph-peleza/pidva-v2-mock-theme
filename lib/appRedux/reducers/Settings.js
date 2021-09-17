"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ActionTypes = require("constants/ActionTypes");

var _ThemeSetting = require("../../constants/ThemeSetting");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialSettings = {
  navCollapsed: true,
  navStyle: _ThemeSetting.NAV_STYLE_FIXED,
  layoutType: _ThemeSetting.LAYOUT_TYPE_FULL,
  themeType: _ThemeSetting.THEME_TYPE_SEMI_DARK,
  colorSelection: _ThemeSetting.THEME_COLOR_SELECTION_PRESET,
  pathname: '',
  width: window.innerWidth,
  isDirectionRTL: false,
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  }
};

var settings = function settings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialSettings;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return _objectSpread(_objectSpread({}, state), {}, {
        pathname: action.payload.pathname,
        navCollapsed: false
      });

    case _ActionTypes.TOGGLE_COLLAPSED_NAV:
      return _objectSpread(_objectSpread({}, state), {}, {
        navCollapsed: action.navCollapsed
      });

    case _ActionTypes.WINDOW_WIDTH:
      return _objectSpread(_objectSpread({}, state), {}, {
        width: action.width
      });

    case _ThemeSetting.THEME_TYPE:
      return _objectSpread(_objectSpread({}, state), {}, {
        themeType: action.themeType
      });

    case _ThemeSetting.THEME_COLOR_SELECTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        colorSelection: action.colorSelection
      });

    case _ThemeSetting.NAV_STYLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        navStyle: action.navStyle
      });

    case _ThemeSetting.LAYOUT_TYPE:
      return _objectSpread(_objectSpread({}, state), {}, {
        layoutType: action.layoutType
      });

    case _ActionTypes.SWITCH_LANGUAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        locale: action.payload
      });

    default:
      return state;
  }
};

var _default = settings;
exports.default = _default;