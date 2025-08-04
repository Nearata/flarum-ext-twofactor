/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/OverloadYield.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/OverloadYield.js ***!
  \**************************************************************/
/***/ ((module) => {

function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _readOnlyError)
/* harmony export */ });
function _readOnlyError(r) {
  throw new TypeError('"' + r + '" is read-only');
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regenerator.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regenerator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ "./node_modules/@babel/runtime/helpers/regeneratorDefine.js");
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function () {
    return this;
  }), regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (module.exports = _regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsync.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsync.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ "./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js");
function _regeneratorAsync(n, e, r, t, o) {
  var a = regeneratorAsyncGen(n, e, r, t, o);
  return a.next().then(function (n) {
    return n.done ? n.value : a.next();
  });
}
module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var regenerator = __webpack_require__(/*! ./regenerator.js */ "./node_modules/@babel/runtime/helpers/regenerator.js");
var regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ "./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js");
function _regeneratorAsyncGen(r, e, t, o, n) {
  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
}
module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ "./node_modules/@babel/runtime/helpers/OverloadYield.js");
var regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ "./node_modules/@babel/runtime/helpers/regeneratorDefine.js");
function AsyncIterator(t, e) {
  function n(r, o, i, f) {
    try {
      var c = t[r](o),
        u = c.value;
      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {
        n("next", t, i, f);
      }, function (t) {
        n("throw", t, i, f);
      }) : e.resolve(u).then(function (t) {
        c.value = t, i(c);
      }, function (t) {
        return n("throw", t, i, f);
      });
    } catch (t) {
      f(t);
    }
  }
  var r;
  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
    return this;
  })), regeneratorDefine(this, "_invoke", function (t, o, i) {
    function f() {
      return new e(function (e, r) {
        n(t, i, e, r);
      });
    }
    return r = r ? r.then(f, f) : f();
  }, !0);
}
module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorDefine.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorDefine.js ***!
  \******************************************************************/
/***/ ((module) => {

function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
}
module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorKeys.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorKeys.js ***!
  \****************************************************************/
/***/ ((module) => {

function _regeneratorKeys(e) {
  var n = Object(e),
    r = [];
  for (var t in n) r.unshift(t);
  return function e() {
    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
    return e.done = !0, e;
  };
}
module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ "./node_modules/@babel/runtime/helpers/OverloadYield.js");
var regenerator = __webpack_require__(/*! ./regenerator.js */ "./node_modules/@babel/runtime/helpers/regenerator.js");
var regeneratorAsync = __webpack_require__(/*! ./regeneratorAsync.js */ "./node_modules/@babel/runtime/helpers/regeneratorAsync.js");
var regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ "./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js");
var regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ "./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js");
var regeneratorKeys = __webpack_require__(/*! ./regeneratorKeys.js */ "./node_modules/@babel/runtime/helpers/regeneratorKeys.js");
var regeneratorValues = __webpack_require__(/*! ./regeneratorValues.js */ "./node_modules/@babel/runtime/helpers/regeneratorValues.js");
function _regeneratorRuntime() {
  "use strict";

  var r = regenerator(),
    e = r.m(_regeneratorRuntime),
    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
  function n(r) {
    var e = "function" == typeof r && r.constructor;
    return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
  }
  var o = {
    "throw": 1,
    "return": 2,
    "break": 3,
    "continue": 3
  };
  function a(r) {
    var e, t;
    return function (n) {
      e || (e = {
        stop: function stop() {
          return t(n.a, 2);
        },
        "catch": function _catch() {
          return n.v;
        },
        abrupt: function abrupt(r, e) {
          return t(n.a, o[r], e);
        },
        delegateYield: function delegateYield(r, o, a) {
          return e.resultName = o, t(n.d, regeneratorValues(r), a);
        },
        finish: function finish(r) {
          return t(n.f, r);
        }
      }, t = function t(r, _t, o) {
        n.p = e.prev, n.n = e.next;
        try {
          return r(_t, o);
        } finally {
          e.next = n.n;
        }
      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
      try {
        return r.call(this, e);
      } finally {
        n.p = e.prev, n.n = e.next;
      }
    };
  }
  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return {
      wrap: function wrap(e, t, n, o) {
        return r.w(a(e), t, n, o && o.reverse());
      },
      isGeneratorFunction: n,
      mark: r.m,
      awrap: function awrap(r, e) {
        return new OverloadYield(r, e);
      },
      AsyncIterator: regeneratorAsyncIterator,
      async: function async(r, e, t, o, u) {
        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
      },
      keys: regeneratorKeys,
      values: regeneratorValues
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorValues.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorValues.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorValues(e) {
  if (null != e) {
    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
      r = 0;
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;
    if (!isNaN(e.length)) return {
      next: function next() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(_typeof(e) + " is not iterable");
}
module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/external-load/index.js":
/*!*********************************************!*\
  !*** ./node_modules/external-load/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Simple resource loader based on David Walsh's tutorial
 * https://davidwalsh.name/javascript-loader
 * https://davidwalsh.name/javascript-functions
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  // Function which returns a function
  function _load(tag) {
    return function (url) {
      // This promise will be used by Promise.all to determine success or failure
      return new Promise(function (resolve, reject) {
        var element = document.createElement(tag);
        var parent = "body";
        var attr = "src";

        // Important success and error for the promise
        element.onload = function () {
          resolve(url);
        };
        element.onerror = function () {
          reject(url);
        };

        // Need to set different attributes depending on tag type
        switch (tag) {
          case "script":
            element.async = true;
            break;
          case "link":
            element.type = "text/css";
            element.rel = "stylesheet";
            attr = "href";
            parent = "head";
        }

        // Inject into document to kick off loading
        element[attr] = url;
        document[parent].appendChild(element);
      });
    };
  }
  return {
    css: _load("link"),
    js: _load("script"),
    img: _load("img")
  };
})());

/***/ }),

/***/ "./src/forum/components/AppSetupModal.tsx":
/*!************************************************!*\
  !*** ./src/forum/components/AppSetupModal.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppSetupModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var _states_AppSetupState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../states/AppSetupState */ "./src/forum/states/AppSetupState.ts");
/* harmony import */ var _AppSetupQrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppSetupQrcode */ "./src/forum/components/AppSetupQrcode.tsx");
/* harmony import */ var _AppSetupSuccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppSetupSuccess */ "./src/forum/components/AppSetupSuccess.tsx");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Form */ "./src/forum/components/Form.tsx");
/* harmony import */ var _FormButtonClose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormButtonClose */ "./src/forum/components/FormButtonClose.tsx");
/* harmony import */ var _FormButtonSubmit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormButtonSubmit */ "./src/forum/components/FormButtonSubmit.tsx");
/* harmony import */ var _FormPasscode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormPasscode */ "./src/forum/components/FormPasscode.tsx");
/* harmony import */ var _FormPassword__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormPassword */ "./src/forum/components/FormPassword.tsx");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _AppSetupNoQrcode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AppSetupNoQrcode */ "./src/forum/components/AppSetupNoQrcode.tsx");
















var AppSetupModal = /*#__PURE__*/function (_Modal) {
  function AppSetupModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.setupState = new _states_AppSetupState__WEBPACK_IMPORTED_MODULE_4__["default"]();
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AppSetupModal, _Modal);
  var _proto = AppSetupModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.setupState.refresh();
  };
  _proto.className = function className() {
    return "NearataTwoFactor AppSetup Modal--small";
  };
  _proto.title = function title() {
    return (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.app_setup_title");
  };
  _proto.content = function content() {
    if (this.setupState.loading) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12___default()), null);
    }
    return m(_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
      disabled: this.loading
    }, m("div", {
      className: "Form-group"
    }, this.setupState.success && m(_AppSetupSuccess__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setupState: this.setupState
    }), !this.setupState.success && !this.setupState.enabled && [m(_AppSetupQrcode__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setupState: this.setupState
    }), m(_AppSetupNoQrcode__WEBPACK_IMPORTED_MODULE_15__["default"], {
      setupState: this.setupState
    })], !this.setupState.success && this.setupState.enabled && m("p", null, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.app_setup_enter_code_disable"))), this.setupState.success && m(_FormButtonClose__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onclick: this.hide.bind(this)
    }), !this.setupState.success && [m(_FormPassword__WEBPACK_IMPORTED_MODULE_11__["default"], {
      bidi: this.setupState.password
    }), m(_FormPasscode__WEBPACK_IMPORTED_MODULE_10__["default"], {
      bidi: this.setupState.passcode
    }), m(_FormButtonSubmit__WEBPACK_IMPORTED_MODULE_9__["default"], {
      loading: this.loading
    }, this.setupState.enabled ? (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.modal_disable_button_label") : (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.modal_enable_button_label"))]);
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;
    e.preventDefault();
    this.loading = true;
    this.alertAttrs = null;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_14___default().request({
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_14___default().forum.attribute("apiUrl") + "/nearata/twofactor/app",
      method: this.setupState.enabled ? "DELETE" : "POST",
      body: {
        passcode: this.setupState.passcode(),
        password: this.setupState.password(),
        secret: this.setupState.secret
      },
      errorHandler: this.onerror.bind(this)
    }).then(/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this2.setupState.refresh();
          case 2:
            _this2.setupState.success = true;
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })))["finally"](this.loaded.bind(this));
  };
  _proto.onerror = function onerror(error) {
    this.setupState.password("");
    this.setupState.passcode("");
    _Modal.prototype.onerror.call(this, error);
  };
  return AppSetupModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_13___default()));
AppSetupModal.isDismissibleViaEscKey = false;
AppSetupModal.isDismissibleViaBackdropClick = false;


/***/ }),

/***/ "./src/forum/components/AppSetupNoQrcode.tsx":
/*!***************************************************!*\
  !*** ./src/forum/components/AppSetupNoQrcode.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppSetupNoQrcode)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");




var AppSetupNoQrcode = /*#__PURE__*/function (_Component) {
  function AppSetupNoQrcode() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AppSetupNoQrcode, _Component);
  var _proto = AppSetupNoQrcode.prototype;
  _proto.view = function view(_) {
    var _this = this;
    return m('[', null, this.setupState.manually ? m("p", {
      className: "message"
    }, m("code", null, this.setupState.secret)) : m("a", {
      onclick: function onclick() {
        return _this.setupState.manually = true;
      }
    }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.app_setup_enter_code_manually")));
  };
  return (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(AppSetupNoQrcode, [{
    key: "setupState",
    get: function get() {
      return this.attrs.setupState;
    }
  }]);
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/AppSetupQrcode.tsx":
/*!*************************************************!*\
  !*** ./src/forum/components/AppSetupQrcode.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppSetupQrcode)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var external_load__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! external-load */ "./node_modules/external-load/index.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__);








var AppSetupQrcode = /*#__PURE__*/function (_Component) {
  function AppSetupQrcode() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.loading = true;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(AppSetupQrcode, _Component);
  var _proto = AppSetupQrcode.prototype;
  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
    this.load();
  };
  _proto.view = function view(_) {
    if (this.loading) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default()), null);
    }
    return m('[', null, m("p", null, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_4__.forumTranslator)("settings.app_setup_scan_qr")), m("p", null, m("canvas", {
      className: "QRCode",
      oncreate: this.render.bind(this)
    })));
  };
  _proto.load = /*#__PURE__*/function () {
    var _load2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!this.setupState.enabled) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.next = 4;
            return this.setupState.generateQRCode();
          case 4:
            if (!(typeof window.QRCode === "undefined")) {
              _context.next = 7;
              break;
            }
            _context.next = 7;
            return external_load__WEBPACK_IMPORTED_MODULE_5__["default"].js("//cdnjs.cloudflare.com/ajax/libs/qrcode/1.5.0/qrcode.min.js");
          case 7:
            this.loading = false;
            m.redraw();
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function load() {
      return _load2.apply(this, arguments);
    }
    return load;
  }();
  _proto.render = function render(vnode) {
    // @ts-ignore
    QRCode.toCanvas(vnode.dom, this.setupState.qrCode, function (error) {
      if (error) {
        console.error(error);
      }
    });
  };
  return (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppSetupQrcode, [{
    key: "setupState",
    get: function get() {
      return this.attrs.setupState;
    }
  }]);
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_6___default()));


/***/ }),

/***/ "./src/forum/components/AppSetupSuccess.tsx":
/*!**************************************************!*\
  !*** ./src/forum/components/AppSetupSuccess.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppSetupSuccess)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);



var AppSetupSuccess = /*#__PURE__*/function (_Component) {
  function AppSetupSuccess() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.loading = true;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AppSetupSuccess, _Component);
  var _proto = AppSetupSuccess.prototype;
  _proto.view = function view(_) {
    return m('[', null, this.attrs.setupState.enabled && m("p", null, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.app_setup_success_enable")), !this.attrs.setupState.enabled && (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.app_setup_success_disable"));
  };
  return AppSetupSuccess;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/EmailSetupModal.tsx":
/*!**************************************************!*\
  !*** ./src/forum/components/EmailSetupModal.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmailSetupModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var _states_EmailSetupState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../states/EmailSetupState */ "./src/forum/states/EmailSetupState.ts");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Form */ "./src/forum/components/Form.tsx");
/* harmony import */ var _FormButtonClose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormButtonClose */ "./src/forum/components/FormButtonClose.tsx");
/* harmony import */ var _FormButtonSubmit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormButtonSubmit */ "./src/forum/components/FormButtonSubmit.tsx");
/* harmony import */ var _FormPasscode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormPasscode */ "./src/forum/components/FormPasscode.tsx");
/* harmony import */ var _FormPassword__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormPassword */ "./src/forum/components/FormPassword.tsx");
/* harmony import */ var _SendEmailButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SendEmailButton */ "./src/forum/components/SendEmailButton.tsx");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_13__);














var EmailSetupModal = /*#__PURE__*/function (_Modal) {
  function EmailSetupModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.setupState = new _states_EmailSetupState__WEBPACK_IMPORTED_MODULE_4__["default"]();
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(EmailSetupModal, _Modal);
  var _proto = EmailSetupModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.setupState.refresh();
  };
  _proto.className = function className() {
    return "NearataTwoFactor EmailSetup Modal--small";
  };
  _proto.title = function title() {
    return (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.email_setup_title");
  };
  _proto.content = function content() {
    if (this.setupState.loading) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_11___default()), null);
    }
    return m(_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
      disabled: this.loading
    }, this.setupState.success ? [m("p", null, this.setupState.enabled ? (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.email_setup_success_enable") : (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.email_setup_success_disable")), m(_FormButtonClose__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onclick: this.hide.bind(this)
    })] : [!this.setupState.enabled && m("div", {
      className: "Form-group"
    }, m("span", {
      className: "helpText"
    }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.email_setup_identification_helptext")), m("input", {
      className: "FormControl",
      type: "text",
      placeholder: (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.email_setup_identification_placeholder"),
      "aria-label": (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.email_setup_identification_placeholder"),
      name: "email",
      autocomplete: "off",
      bidi: this.setupState.email
    })), m(_FormPassword__WEBPACK_IMPORTED_MODULE_9__["default"], {
      bidi: this.setupState.password
    }), m("span", {
      className: "helpText"
    }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.email_setup_passcode_helptext")), m(_FormPasscode__WEBPACK_IMPORTED_MODULE_8__["default"], {
      bidi: this.setupState.passcode
    }), m(_FormButtonSubmit__WEBPACK_IMPORTED_MODULE_7__["default"], {
      loading: this.loading
    }, this.setupState.enabled ? (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.modal_disable_button_label") : (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_3__.forumTranslator)("settings.modal_enable_button_label")), m("div", {
      className: "Form-group"
    }, m(_SendEmailButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      body: {
        email: this.setupState.email
      }
    }))]);
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;
    e.preventDefault();
    this.loading = true;
    this.alertAttrs = null;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_13___default().request({
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_13___default().forum.attribute("apiUrl") + "/nearata/twofactor/email",
      method: this.setupState.enabled ? "DELETE" : "POST",
      body: {
        passcode: this.setupState.passcode(),
        password: this.setupState.password(),
        email: this.setupState.email()
      },
      errorHandler: this.onerror.bind(this)
    }).then(/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this2.setupState.refresh();
          case 2:
            _this2.setupState.success = true;
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })))["finally"](this.loaded.bind(this));
  };
  _proto.onerror = function onerror(error) {
    this.setupState.passcode("");
    this.setupState.password("");
    _Modal.prototype.onerror.call(this, error);
  };
  return EmailSetupModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_12___default()));
EmailSetupModal.isDismissibleViaEscKey = false;
EmailSetupModal.isDismissibleViaBackdropClick = false;


/***/ }),

/***/ "./src/forum/components/Form.tsx":
/*!***************************************!*\
  !*** ./src/forum/components/Form.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);


var Form = /*#__PURE__*/function (_Component) {
  function Form() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Form, _Component);
  var _proto = Form.prototype;
  _proto.view = function view(vnode) {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("fieldset", {
      disabled: this.attrs.disabled
    }, vnode.children)));
  };
  return Form;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/FormButtonClose.tsx":
/*!**************************************************!*\
  !*** ./src/forum/components/FormButtonClose.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormButtonClose)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);



var FormButtonClose = /*#__PURE__*/function (_Button) {
  function FormButtonClose() {
    return _Button.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FormButtonClose, _Button);
  var _proto = FormButtonClose.prototype;
  _proto.view = function view(vnode) {
    this.attrs.className = "Button Button--block";
    vnode.children = (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.modal_close_button_label");
    return m("div", {
      className: "Form-group"
    }, _Button.prototype.view.call(this, vnode));
  };
  return FormButtonClose;
}((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/FormButtonSubmit.tsx":
/*!***************************************************!*\
  !*** ./src/forum/components/FormButtonSubmit.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormButtonSubmit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);


var FormButtonSubmit = /*#__PURE__*/function (_Button) {
  function FormButtonSubmit() {
    return _Button.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FormButtonSubmit, _Button);
  var _proto = FormButtonSubmit.prototype;
  _proto.view = function view(vnode) {
    this.attrs.type = "submit";
    this.attrs.className = "Button Button--primary Button--block";
    return m("div", {
      className: "Form-group"
    }, _Button.prototype.view.call(this, vnode));
  };
  return FormButtonSubmit;
}((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/FormPasscode.tsx":
/*!***********************************************!*\
  !*** ./src/forum/components/FormPasscode.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormPasscode)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);



var FormPasscode = /*#__PURE__*/function (_Component) {
  function FormPasscode() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FormPasscode, _Component);
  var _proto = FormPasscode.prototype;
  _proto.view = function view(vnode) {
    var label = (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("form_passcode_placeholder");
    return m("div", {
      className: "Form-group"
    }, m("input", Object.assign({
      className: "FormControl",
      type: "text",
      name: "passcode",
      placeholder: label,
      "aria-label": label,
      autocomplete: "off"
    }, vnode.attrs)));
  };
  return FormPasscode;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/FormPassword.tsx":
/*!***********************************************!*\
  !*** ./src/forum/components/FormPassword.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormPassword)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);



var FormPassword = /*#__PURE__*/function (_Component) {
  function FormPassword() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FormPassword, _Component);
  var _proto = FormPassword.prototype;
  _proto.view = function view(vnode) {
    var label = (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("form_password_placeholder");
    return m("div", {
      className: "Form-group"
    }, m("input", Object.assign({
      className: "FormControl",
      type: "password",
      name: "password",
      placeholder: label,
      "aria-label": label,
      autocomplete: "off"
    }, vnode.attrs)));
  };
  return FormPassword;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/Providers.tsx":
/*!********************************************!*\
  !*** ./src/forum/components/Providers.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   providers: () => (/* binding */ providers)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var _AppSetupModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppSetupModal */ "./src/forum/components/AppSetupModal.tsx");
/* harmony import */ var _EmailSetupModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmailSetupModal */ "./src/forum/components/EmailSetupModal.tsx");





var providers = [{
  key: "app",
  icon: function icon(attrs) {
    if (attrs === void 0) {
      attrs = {};
    }
    return flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1___default()("fas fa-mobile-alt", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attrs));
  },
  title: function title() {
    return (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("app_label");
  },
  desc: function desc() {
    return (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("app_description");
  },
  setupModal: _AppSetupModal__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  key: "email",
  icon: function icon(attrs) {
    if (attrs === void 0) {
      attrs = {};
    }
    return flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1___default()("fas fa-envelope-open", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attrs));
  },
  title: function title() {
    return (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("email_label");
  },
  desc: function desc() {
    return (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("email_description");
  },
  setupModal: _EmailSetupModal__WEBPACK_IMPORTED_MODULE_4__["default"]
}];

/***/ }),

/***/ "./src/forum/components/RecoverySetupCodes.tsx":
/*!*****************************************************!*\
  !*** ./src/forum/components/RecoverySetupCodes.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecoverySetupBackups)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__);






var RecoverySetupBackups = /*#__PURE__*/function (_Component) {
  function RecoverySetupBackups() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RecoverySetupBackups, _Component);
  var _proto = RecoverySetupBackups.prototype;
  _proto.view = function view(vnode) {
    return m("div", {
      className: "Form-group"
    }, m("p", {
      "class": "Codes-message"
    }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.recovery_setup_message")), m("ol", {
      "class": "Codes-list"
    }, vnode.attrs.codes.map(function (code) {
      return m("li", {
        "class": "Codes-item"
      }, code);
    })), m("div", {
      "class": "Codes-export"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      "class": "Button Button--primary Button--block",
      onclick: this.onClickDownload.bind(this)
    }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.recovery_setup_download_button_label")), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      "class": "Button Button--primary Button--block",
      onclick: this.onClickCopy.bind(this)
    }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.recovery_setup_copy_button_label"))));
  };
  _proto.onClickDownload = function onClickDownload(_) {
    var text = (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.recovery_setup_download_file_format", {
      website_title: flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().forum.attribute("title"),
      website_url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().forum.attribute("baseUrl"),
      codes: this.attrs.codes.join("\n"),
      date: window.dayjs().format("ll")
    });
    var blob = new Blob([flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(text)], {
      type: "text/plain;charset=utf-8"
    });
    var a = document.createElement("a");
    a.download = "twofactor_recovery_codes.txt";
    a.href = URL.createObjectURL(blob);
    a.style.display = "none";
    document.body.append(a);
    a.click();
    new Promise(function (resolve) {
      setTimeout(resolve, 100);
    });
    a.remove();
  };
  _proto.onClickCopy = function onClickCopy(_) {
    navigator.clipboard.writeText(this.attrs.codes.join("\n"));
  };
  return RecoverySetupBackups;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/RecoverySetupModal.tsx":
/*!*****************************************************!*\
  !*** ./src/forum/components/RecoverySetupModal.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecoverySetupModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var _states_RecoverySetupState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states/RecoverySetupState */ "./src/forum/states/RecoverySetupState.ts");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form */ "./src/forum/components/Form.tsx");
/* harmony import */ var _FormButtonClose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormButtonClose */ "./src/forum/components/FormButtonClose.tsx");
/* harmony import */ var _FormButtonSubmit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormButtonSubmit */ "./src/forum/components/FormButtonSubmit.tsx");
/* harmony import */ var _FormPassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormPassword */ "./src/forum/components/FormPassword.tsx");
/* harmony import */ var _RecoverySetupCodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RecoverySetupCodes */ "./src/forum/components/RecoverySetupCodes.tsx");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_12__);













var RecoverySetupModal = /*#__PURE__*/function (_Modal) {
  function RecoverySetupModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.setupState = new _states_RecoverySetupState__WEBPACK_IMPORTED_MODULE_2__["default"]();
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RecoverySetupModal, _Modal);
  var _proto = RecoverySetupModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.setupState.refresh();
  };
  _proto.className = function className() {
    return "NearataTwoFactor RecoverySetup Modal--small";
  };
  _proto.title = function title() {
    return (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.recovery_setup_title");
  };
  _proto.content = function content() {
    if (this.setupState.loading) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9___default()), null);
    }
    var content = [m(_FormPassword__WEBPACK_IMPORTED_MODULE_6__["default"], {
      bidi: this.setupState.password
    }), m(_FormButtonSubmit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      loading: this.loading
    }, this.setupState.exists ? (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.recovery_generate_delete_codes_button_label") : (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.recovery_setup_create_button_label"))];
    if (this.setupState.success) {
      content = [m(_RecoverySetupCodes__WEBPACK_IMPORTED_MODULE_7__["default"], {
        codes: this.setupState.recoveryCodes
      }), m(_FormButtonClose__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onclick: this.hide.bind(this)
      })];
    }
    if (this.setupState.exists) {
      content.unshift(m("div", {
        className: "Form-group"
      }, m((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
        dismissible: false,
        type: "warning"
      }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.recovery_codes_viewed"))));
    }
    return m(_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
      disabled: this.loading
    }, content);
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;
    e.preventDefault();
    this.loading = true;
    this.alertAttrs = null;
    if (this.setupState.exists && !confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()((0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("settings.recovery_confirm_message")))) {
      this.loading = false;
      return;
    }
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().request({
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().forum.attribute("apiUrl") + "/nearata/twofactor/recoveryCodes",
      method: this.setupState.exists ? "DELETE" : "POST",
      body: {
        password: this.setupState.password()
      },
      errorHandler: this.onerror.bind(this)
    }).then(function (r) {
      if (_this2.setupState.exists) {
        // DELETE
        _this2.setupState.password("");
        _this2.setupState.exists = false;
      } else {
        var _this2$setupState$rec;
        // POST
        (_this2$setupState$rec = _this2.setupState.recoveryCodes).push.apply(_this2$setupState$rec, r.data);
        _this2.setupState.success = true;
      }
    })["finally"](this.loaded.bind(this));
  };
  _proto.onerror = function onerror(error) {
    this.setupState.password("");
    _Modal.prototype.onerror.call(this, error);
  };
  return RecoverySetupModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_10___default()));
RecoverySetupModal.isDismissibleViaEscKey = false;
RecoverySetupModal.isDismissibleViaBackdropClick = false;


/***/ }),

/***/ "./src/forum/components/SendEmailButton.tsx":
/*!**************************************************!*\
  !*** ./src/forum/components/SendEmailButton.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SendEmailButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__);





var SendEmailButton = /*#__PURE__*/function (_Component) {
  function SendEmailButton() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.loading = false;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SendEmailButton, _Component);
  var _proto = SendEmailButton.prototype;
  _proto.view = function view(_) {
    return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--block",
      onclick: this.sendEmail.bind(this),
      loading: this.loading,
      disabled: this.loading
    }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("email_sendemail_button_label"));
  };
  _proto.sendEmail = function sendEmail() {
    var _this2 = this;
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().request({
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute("apiUrl") + "/nearata/twofactor/email/sendCode",
      method: "POST",
      body: this.attrs.body
    }).then(function () {
      return flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().alerts.show({
        type: "success"
      }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_1__.forumTranslator)("email_code_sent"));
    })["finally"](function () {
      return _this2.loading = false;
    });
  };
  return SendEmailButton;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/TwoFactorItems.tsx":
/*!*************************************************!*\
  !*** ./src/forum/components/TwoFactorItems.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TwoFactorItems)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var _Providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Providers */ "./src/forum/components/Providers.tsx");
/* harmony import */ var _RecoverySetupModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecoverySetupModal */ "./src/forum/components/RecoverySetupModal.tsx");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/FieldSet */ "flarum/common/components/FieldSet");
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_updateStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/updateStore */ "./src/forum/utils/updateStore.ts");


function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }











var TwoFactorItems = /*#__PURE__*/function (_Component) {
  function TwoFactorItems() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.loading = true;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(TwoFactorItems, _Component);
  var _proto = TwoFactorItems.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _Component.prototype.oninit.call(this, vnode);
    (0,_utils_updateStore__WEBPACK_IMPORTED_MODULE_12__.updateStore)()["finally"](function () {
      _this2.loading = false;
      m.redraw();
    });
  };
  _proto.view = function view(_) {
    return m((flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_7___default()), {
      className: "UserSecurityPage-nearataTwoFactor",
      label: (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("settings.section_title")
    }, this.loading ? m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default()), null) : [m("span", {
      className: "helpText"
    }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("settings.section_help")), m("div", {
      className: "AccessTokensList"
    }, this.items().toArray()), !!flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().store.all("twoFactor").length && m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
      className: "Button",
      icon: "fas fa-key",
      onclick: function onclick() {
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().modal.show(_RecoverySetupModal__WEBPACK_IMPORTED_MODULE_4__["default"]);
      }
    }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("settings.recovery_item_button_label"))]);
  };
  _proto.items = function items() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_10___default())();
    var _loop = function _loop() {
      var i = _step.value;
      items.add(i.key, m("div", {
        className: "AccessTokensList-item"
      }, m("div", {
        className: "AccessTokensList-item-icon"
      }, i.icon()), m("div", {
        className: "AccessTokensList-item-info"
      }, m("div", {
        className: "AccessTokensList-item-title"
      }, m("span", {
        className: "AccessTokensList-item-title-main"
      }, i.title()), !!flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().store.getBy("twoFactor", "type", i.key) && [" ", m("span", {
        className: "AccessTokensList-item-title-sub"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9___default()("fas fa-check"))]), m("div", {
        className: "AccessTokensList-item-description"
      }, m("span", {
        className: "AccessTokensList-item-description-main"
      }, i.desc()))), m("div", {
        className: "AccessTokensList-item-actions"
      }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
        className: "Button Button--primary",
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().modal.show(i.setupModal);
        }
      }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("settings.item_manage_label")))));
    };
    for (var _iterator = _createForOfIteratorHelperLoose(_Providers__WEBPACK_IMPORTED_MODULE_3__.providers), _step; !(_step = _iterator()).done;) {
      _loop();
    }
    return items;
  };
  return TwoFactorItems;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_5___default()));


/***/ }),

/***/ "./src/forum/components/TwoFactorLogInModal.tsx":
/*!******************************************************!*\
  !*** ./src/forum/components/TwoFactorLogInModal.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TwoFactorLogInModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var _FormButtonSubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormButtonSubmit */ "./src/forum/components/FormButtonSubmit.tsx");
/* harmony import */ var _FormPasscode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormPasscode */ "./src/forum/components/FormPasscode.tsx");
/* harmony import */ var _Providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Providers */ "./src/forum/components/Providers.tsx");
/* harmony import */ var _SendEmailButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendEmailButton */ "./src/forum/components/SendEmailButton.tsx");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_11__);












var TwoFactorLogInModal = /*#__PURE__*/function (_Modal) {
  function TwoFactorLogInModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.types = [];
    _this.passcode = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()("");
    _this.type = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()("");
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(TwoFactorLogInModal, _Modal);
  var _proto = TwoFactorLogInModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.loadTypes();
  };
  _proto.className = function className() {
    return "NearataTwoFactor LogInModal Modal--small";
  };
  _proto.title = function title() {
    return (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("login.title");
  };
  _proto.content = function content() {
    var _this2 = this;
    if (this.types.length === 0) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default()), null);
    }
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "LogInButtons"
    }, this.types.length > 1 && _Providers__WEBPACK_IMPORTED_MODULE_5__.providers.filter(function (val) {
      return _this2.types.includes(val.key);
    }).map(function (val) {
      return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
        className: "Button LogInButton LogInButton--" + val.key + " hasIcon",
        "aria-label": val.title(),
        onclick: function onclick() {
          return _this2.type(val.key);
        },
        disabled: _this2.type() === val.key
      }, val.icon({
        "className": "Button-icon"
      }), val.title());
    })), m("div", {
      className: "Form Form--centered"
    }, m("fieldset", {
      disabled: this.loading || this.type() === ""
    }, m(_FormPasscode__WEBPACK_IMPORTED_MODULE_4__["default"], {
      bidi: this.passcode
    }), m(_FormButtonSubmit__WEBPACK_IMPORTED_MODULE_3__["default"], {
      loading: this.loading
    }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("login.submit_button_label")), this.type() === "email" && m("div", {
      className: "Form-group"
    }, m(_SendEmailButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      body: this.loginParams()
    })))));
  };
  _proto.loginParams = function loginParams() {
    var data = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.attrs.loginParams, {
      "2FACode": this.passcode()
    });
    return data;
  };
  _proto.loadTypes = function loadTypes() {
    var _this3 = this;
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().request({
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().forum.attribute("apiUrl") + "/nearata/twofactor",
      method: "POST",
      body: this.attrs.loginParams
    }).then(function (r) {
      var _this3$types;
      (_this3$types = _this3.types).push.apply(_this3$types, r.data.map(function (val) {
        return val.attributes.type;
      }));
      if (_this3.types.length === 1) {
        _this3.type(_this3.types[0]);
      }
    })["finally"](this.loaded.bind(this));
  };
  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    this.alertAttrs = null;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().session.login(this.loginParams(), {
      errorHandler: this.onerror.bind(this)
    }).then(function () {
      return window.location.reload();
    }, this.loaded.bind(this));
  };
  _proto.onerror = function onerror(error) {
    _Modal.prototype.onerror.call(this, error);
  };
  return TwoFactorLogInModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_9___default()));
TwoFactorLogInModal.isDismissibleViaEscKey = false;
TwoFactorLogInModal.isDismissibleViaBackdropClick = false;


/***/ }),

/***/ "./src/forum/components/TwoFactorModal.tsx":
/*!*************************************************!*\
  !*** ./src/forum/components/TwoFactorModal.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TwoFactorModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_trans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/trans */ "./src/forum/helpers/trans.ts");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormPasscode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormPasscode */ "./src/forum/components/FormPasscode.tsx");
/* harmony import */ var _FormButtonSubmit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormButtonSubmit */ "./src/forum/components/FormButtonSubmit.tsx");
/* harmony import */ var _Providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Providers */ "./src/forum/components/Providers.tsx");
/* harmony import */ var _utils_updateStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/updateStore */ "./src/forum/utils/updateStore.ts");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SendEmailButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SendEmailButton */ "./src/forum/components/SendEmailButton.tsx");











/**
 * TODO: Make it standalone like trigger
 * password field, force 2fa type ecc.
 * perhaps feasible
 */
var TwoFactorModal = /*#__PURE__*/function (_Modal) {
  function TwoFactorModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.route = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()("");
    _this.passcode = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()("");
    _this.types = [];
    _this.selected = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()("");
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TwoFactorModal, _Modal);
  var _proto = TwoFactorModal.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _Modal.prototype.oninit.call(this, vnode);
    this.route(vnode.attrs.route);
    (0,_utils_updateStore__WEBPACK_IMPORTED_MODULE_8__.updateStore)().then(function () {
      _this2.types = flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().store.all("twoFactor").map(function (i) {
        return i.type();
      });
      if (_this2.types.length === 1) {
        _this2.selected(_this2.types[0]);
      }
      _this2.loading = false;
      m.redraw();
    });
  };
  _proto.className = function className() {
    return "NearataTwoFactor Modal--small";
  };
  _proto.title = function title() {
    return (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("login.title");
  };
  _proto.content = function content() {
    var _this3 = this;
    return m("div", {
      className: "Modal-body"
    }, this.types.length > 1 && m("div", {
      className: "LogInButtons"
    }, _Providers__WEBPACK_IMPORTED_MODULE_7__.providers.filter(function (val) {
      return _this3.types.includes(val.key);
    }).map(function (val) {
      return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
        className: "Button LogInButton LogInButton--" + val.key + " hasIcon",
        "aria-label": val.title(),
        onclick: function onclick() {
          return _this3.selected(val.key);
        },
        disabled: _this3.selected() === val.key
      }, val.icon({
        "className": "Button-icon"
      }), val.title());
    })), m("div", {
      "class": "Form Form--centered"
    }, m("fieldset", {
      disabled: this.loading || this.selected() === ""
    }, m(_FormPasscode__WEBPACK_IMPORTED_MODULE_5__["default"], {
      bidi: this.passcode
    }), m(_FormButtonSubmit__WEBPACK_IMPORTED_MODULE_6__["default"], {
      loading: this.loading,
      onclick: this.onsubmit.bind(this)
    }, (0,_helpers_trans__WEBPACK_IMPORTED_MODULE_2__.forumTranslator)("login.submit_button_label")), this.selected() === "email" && m("div", {
      className: "Form-group"
    }, m(_SendEmailButton__WEBPACK_IMPORTED_MODULE_10__["default"], null)))));
  };
  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    this.alertAttrs = null;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().request({
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute("apiUrl") + "/nearata/twofactor/validate",
      method: "POST",
      body: {
        passcode: this.passcode(),
        route: this.route() || " "
      },
      errorHandler: this.onerror.bind(this)
    }).then(this.hide.bind(this), this.loaded.bind(this));
  };
  _proto.onerror = function onerror(error) {
    this.passcode("");
    _Modal.prototype.onerror.call(this, error);
  };
  return TwoFactorModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));
TwoFactorModal.isDismissibleViaEscKey = false;
TwoFactorModal.isDismissibleViaBackdropClick = false;


/***/ }),

/***/ "./src/forum/extend.ts":
/*!*****************************!*\
  !*** ./src/forum/extend.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_TwoFactor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/TwoFactor */ "./src/forum/models/TwoFactor.ts");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_1___default().Store)().add("twoFactor", _models_TwoFactor__WEBPACK_IMPORTED_MODULE_0__["default"]), new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_1___default().Model)((flarum_common_models_User__WEBPACK_IMPORTED_MODULE_2___default())).hasMany("twoFactor")]);

/***/ }),

/***/ "./src/forum/helpers/trans.ts":
/*!************************************!*\
  !*** ./src/forum/helpers/trans.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forumTranslator: () => (/* binding */ forumTranslator)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);

function forumTranslator(key, params) {
  if (params === void 0) {
    params = {};
  }
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans("nearata-twofactor.forum." + key, params);
}

/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_12__["default"])
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TwoFactorItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TwoFactorItems */ "./src/forum/components/TwoFactorItems.tsx");
/* harmony import */ var _components_TwoFactorLogInModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TwoFactorLogInModal */ "./src/forum/components/TwoFactorLogInModal.tsx");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_components_UserSecurityPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/components/UserSecurityPage */ "flarum/forum/components/UserSecurityPage");
/* harmony import */ var flarum_forum_components_UserSecurityPage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserSecurityPage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_TwoFactorModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TwoFactorModal */ "./src/forum/components/TwoFactorModal.tsx");
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/forum/components/SettingsPage */ "flarum/forum/components/SettingsPage");
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_forum_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/forum/components/ChangePasswordModal */ "flarum/forum/components/ChangePasswordModal");
/* harmony import */ var flarum_forum_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_forum_components_ChangeEmailModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/forum/components/ChangeEmailModal */ "flarum/forum/components/ChangeEmailModal");
/* harmony import */ var flarum_forum_components_ChangeEmailModal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ChangeEmailModal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./extend */ "./src/forum/extend.ts");












flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().initializers.add("nearata-twofactor", function () {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)((flarum_forum_components_UserSecurityPage__WEBPACK_IMPORTED_MODULE_7___default().prototype), "settingsItems", function (items) {
    items.add("nearataTwoFactor", m(_components_TwoFactorItems__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.override)((flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_6___default().prototype), "onerror", function (original, error) {
    var _error$responseText;
    if ((_error$responseText = error.responseText) != null && _error$responseText.includes("twofactor_login_init")) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().modal.show(_components_TwoFactorLogInModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        loginParams: this.loginParams()
      });
    } else {
      return original(error);
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)((flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_9___default().prototype), "oninit", function () {
    this.loading = false;
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)((flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_9___default().prototype), "accountItems", function (items) {
    var _this = this;
    var onClick = function onClick(item, route, modal) {
      item.attrs.loading = _this.loading;
      item.attrs.onclick = /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.next = 3;
                return flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().request({
                  url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().forum.attribute("apiUrl") + "/nearata/twofactor/validate",
                  method: "GET",
                  params: {
                    route: route
                  }
                }).then(function (r) {
                  if (r.validated) {
                    flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().modal.show(modal);
                  } else {
                    flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().modal.show(_components_TwoFactorModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      route: route
                    });
                  }
                  return r;
                })["finally"](function () {
                  _this.loading = false;
                  m.redraw();
                });
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    };
    var changePassword = items.get("changePassword");
    onClick(changePassword, "forgot", (flarum_forum_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_10___default()));
    var changeEmail = items.get("changeEmail");
    onClick(changeEmail, "users.update", (flarum_forum_components_ChangeEmailModal__WEBPACK_IMPORTED_MODULE_11___default()));
  });
});


/***/ }),

/***/ "./src/forum/models/TwoFactor.ts":
/*!***************************************!*\
  !*** ./src/forum/models/TwoFactor.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TwoFactor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var TwoFactor = /*#__PURE__*/function (_Model) {
  function TwoFactor() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.type = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("type");
    _this.createdAt = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("createdAt", (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TwoFactor, _Model);
  return TwoFactor;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/states/AppSetupState.ts":
/*!*******************************************!*\
  !*** ./src/forum/states/AppSetupState.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppSetupState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SetupState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SetupState */ "./src/forum/states/SetupState.ts");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__);






var AppSetupState = /*#__PURE__*/function (_SetupState) {
  function AppSetupState() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _SetupState.call.apply(_SetupState, [this].concat(args)) || this;
    _this.apiUrl = flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().forum.attribute("apiUrl");
    _this.manually = false;
    _this.password = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()("");
    _this.passcode = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()("");
    _this.qrCode = "";
    _this.secret = "";
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AppSetupState, _SetupState);
  var _proto = AppSetupState.prototype;
  _proto.type = function type() {
    return "app";
  };
  _proto.generateQRCode = /*#__PURE__*/function () {
    var _generateQRCode = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _this2 = this;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().request({
              url: this.apiUrl + "/nearata/twofactor/app",
              method: "GET"
            }).then(function (r) {
              _this2.qrCode = r.qrcode;
              _this2.secret = r.secret;
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function generateQRCode() {
      return _generateQRCode.apply(this, arguments);
    }
    return generateQRCode;
  }();
  return AppSetupState;
}(_SetupState__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./src/forum/states/EmailSetupState.ts":
/*!*********************************************!*\
  !*** ./src/forum/states/EmailSetupState.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmailSetupState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _SetupState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetupState */ "./src/forum/states/SetupState.ts");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__);



var EmailSetupState = /*#__PURE__*/function (_SetupState) {
  function EmailSetupState() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _SetupState.call.apply(_SetupState, [this].concat(args)) || this;
    _this.email = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default())("");
    _this.password = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default())("");
    _this.passcode = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default())("");
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EmailSetupState, _SetupState);
  var _proto = EmailSetupState.prototype;
  _proto.type = function type() {
    return "email";
  };
  return EmailSetupState;
}(_SetupState__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/forum/states/RecoverySetupState.ts":
/*!************************************************!*\
  !*** ./src/forum/states/RecoverySetupState.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecoverySetupState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SetupState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SetupState */ "./src/forum/states/SetupState.ts");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__);






var RecoverySetupState = /*#__PURE__*/function (_SetupState) {
  function RecoverySetupState() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _SetupState.call.apply(_SetupState, [this].concat(args)) || this;
    _this.password = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()("");
    _this.recoveryCodes = [];
    _this.exists = false;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(RecoverySetupState, _SetupState);
  var _proto = RecoverySetupState.prototype;
  _proto.type = function type() {
    return "recovery_codes";
  };
  _proto.refresh = /*#__PURE__*/function () {
    var _refresh = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _this2 = this;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.loading = true;
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().request({
              url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().forum.attribute("apiUrl") + "/nearata/twofactor/recoveryCodes"
            }).then(function (r) {
              return _this2.exists = r.exists;
            })["finally"](function () {
              _this2.loading = false;
              m.redraw();
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function refresh() {
      return _refresh.apply(this, arguments);
    }
    return refresh;
  }();
  return RecoverySetupState;
}(_SetupState__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./src/forum/states/SetupState.ts":
/*!****************************************!*\
  !*** ./src/forum/states/SetupState.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetupState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);



var SetupState = /*#__PURE__*/function () {
  function SetupState() {
    this.success = false;
    this.loading = false;
    this.enabled = false;
  }
  var _proto = SetupState.prototype;
  _proto.refresh = /*#__PURE__*/function () {
    var _refresh = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _this = this;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.loading = true;
            _context.next = 3;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().store.find("nearata/twofactor").then(function (r) {
              _this.enabled = !!r.find(function (val) {
                return val.type() === _this.type();
              });
            })["finally"](function () {
              var type = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().store.getBy("twoFactor", "type", _this.type());
              if (!_this.enabled && type) {
                flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().store.remove(type);
              }
              _this.loading = false;
              m.redraw();
            });
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function refresh() {
      return _refresh.apply(this, arguments);
    }
    return refresh;
  }();
  return SetupState;
}();


/***/ }),

/***/ "./src/forum/utils/updateStore.ts":
/*!****************************************!*\
  !*** ./src/forum/utils/updateStore.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateStore: () => (/* binding */ updateStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);


function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function updateStore() {
  return _updateStore.apply(this, arguments);
}
function _updateStore() {
  _updateStore = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().store.find("nearata/twofactor").then(function (r) {
            var lst = r.map(function (val) {
              return val.type();
            });
            for (var _iterator = _createForOfIteratorHelperLoose(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().store.all("twoFactor")), _step; !(_step = _iterator()).done;) {
              var i = _step.value;
              if (!lst.includes(i.type())) {
                flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().store.remove(i);
              }
            }
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _updateStore.apply(this, arguments);
}

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/FieldSet":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/FieldSet']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/FieldSet'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/extenders":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/extenders']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extenders'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/ChangeEmailModal":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ChangeEmailModal']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/ChangeEmailModal'];

/***/ }),

/***/ "flarum/forum/components/ChangePasswordModal":
/*!*****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ChangePasswordModal']" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/ChangePasswordModal'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/SettingsPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SettingsPage']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SettingsPage'];

/***/ }),

/***/ "flarum/forum/components/UserSecurityPage":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserSecurityPage']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserSecurityPage'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map