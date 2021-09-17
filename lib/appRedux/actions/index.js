"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Setting = require("./Setting");

Object.keys(_Setting).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Setting[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Setting[key];
    }
  });
});

var _Auth = require("./Auth");

Object.keys(_Auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Auth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Auth[key];
    }
  });
});

var _Notes = require("./Notes");

Object.keys(_Notes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Notes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Notes[key];
    }
  });
});

var _Common = require("./Common");

Object.keys(_Common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Common[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Common[key];
    }
  });
});

var _Contact = require("./Contact");

Object.keys(_Contact).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Contact[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Contact[key];
    }
  });
});