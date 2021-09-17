"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleCollapsedSideNav = toggleCollapsedSideNav;
exports.updateWindowWidth = updateWindowWidth;
exports.setThemeType = setThemeType;
exports.setThemeColorSelection = setThemeColorSelection;
exports.onNavStyleChange = onNavStyleChange;
exports.onLayoutTypeChange = onLayoutTypeChange;
exports.switchLanguage = switchLanguage;

var _ActionTypes = require("constants/ActionTypes");

var _ThemeSetting = require("../../constants/ThemeSetting");

function toggleCollapsedSideNav(navCollapsed) {
  return {
    type: _ActionTypes.TOGGLE_COLLAPSED_NAV,
    navCollapsed: navCollapsed
  };
}

function updateWindowWidth(width) {
  return {
    type: _ActionTypes.WINDOW_WIDTH,
    width: width
  };
}

function setThemeType(themeType) {
  return {
    type: _ThemeSetting.THEME_TYPE,
    themeType: themeType
  };
}

function setThemeColorSelection(colorSelection) {
  return {
    type: _ThemeSetting.THEME_COLOR_SELECTION,
    colorSelection: colorSelection
  };
}

function onNavStyleChange(navStyle) {
  return {
    type: _ThemeSetting.NAV_STYLE,
    navStyle: navStyle
  };
}

function onLayoutTypeChange(layoutType) {
  return {
    type: _ThemeSetting.LAYOUT_TYPE,
    layoutType: layoutType
  };
}

function switchLanguage(locale) {
  return {
    type: _ActionTypes.SWITCH_LANGUAGE,
    payload: locale
  };
}