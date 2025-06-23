(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-loaders", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-loaders"] = factory(require("babylonjs"));
	else
		root["LOADERS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_tools__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../node_modules/tslib/tslib.es6.mjs":
/*!****************************************************!*\
  !*** ../../../../node_modules/tslib/tslib.es6.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }),

/***/ "../../../dev/loaders/src/OBJ/index.ts":
/*!*********************************************!*\
  !*** ../../../dev/loaders/src/OBJ/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MTLFileLoader: () => (/* reexport safe */ _mtlFileLoader__WEBPACK_IMPORTED_MODULE_0__.MTLFileLoader),
/* harmony export */   OBJFileLoader: () => (/* reexport safe */ _objFileLoader__WEBPACK_IMPORTED_MODULE_3__.OBJFileLoader),
/* harmony export */   SolidParser: () => (/* reexport safe */ _solidParser__WEBPACK_IMPORTED_MODULE_2__.SolidParser)
/* harmony export */ });
/* harmony import */ var _mtlFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mtlFileLoader */ "../../../dev/loaders/src/OBJ/mtlFileLoader.ts");
/* harmony import */ var _objLoadingOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objLoadingOptions */ "../../../dev/loaders/src/OBJ/objLoadingOptions.ts");
/* harmony import */ var _solidParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solidParser */ "../../../dev/loaders/src/OBJ/solidParser.ts");
/* harmony import */ var _objFileLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objFileLoader */ "../../../dev/loaders/src/OBJ/objFileLoader.ts");






/***/ }),

/***/ "../../../dev/loaders/src/OBJ/mtlFileLoader.ts":
/*!*****************************************************!*\
  !*** ../../../dev/loaders/src/OBJ/mtlFileLoader.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MTLFileLoader: () => (/* binding */ MTLFileLoader)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/standardMaterial */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__);



/**
 * Class reading and parsing the MTL file bundled with the obj file.
 */
var MTLFileLoader = /** @class */ (function () {
    function MTLFileLoader() {
        /**
         * All material loaded from the mtl will be set here
         */
        this.materials = [];
    }
    /**
     * This function will read the mtl file and create each material described inside
     * This function could be improve by adding :
     * -some component missing (Ni, Tf...)
     * -including the specific options available
     *
     * @param scene defines the scene the material will be created in
     * @param data defines the mtl data to parse
     * @param rootUrl defines the rooturl to use in order to load relative dependencies
     * @param assetContainer defines the asset container to store the material in (can be null)
     */
    MTLFileLoader.prototype.parseMTL = function (scene, data, rootUrl, assetContainer) {
        if (data instanceof ArrayBuffer) {
            return;
        }
        //Split the lines from the file
        var lines = data.split("\n");
        // whitespace char ie: [ \t\r\n\f]
        var delimiterPattern = /\s+/;
        //Array with RGB colors
        var color;
        //New material
        var material = null;
        //Look at each line
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            // Blank line or comment
            if (line.length === 0 || line.charAt(0) === "#") {
                continue;
            }
            //Get the first parameter (keyword)
            var pos = line.indexOf(" ");
            var key = pos >= 0 ? line.substring(0, pos) : line;
            key = key.toLowerCase();
            //Get the data following the key
            var value = pos >= 0 ? line.substring(pos + 1).trim() : "";
            //This mtl keyword will create the new material
            if (key === "newmtl") {
                //Check if it is the first material.
                // Materials specifications are described after this keyword.
                if (material) {
                    //Add the previous material in the material array.
                    this.materials.push(material);
                }
                //Create a new material.
                // value is the name of the material read in the mtl file
                scene._blockEntityCollection = !!assetContainer;
                material = new babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial(value, scene);
                material._parentContainer = assetContainer;
                scene._blockEntityCollection = false;
            }
            else if (key === "kd" && material) {
                // Diffuse color (color under white light) using RGB values
                //value  = "r g b"
                color = value.split(delimiterPattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set tghe color into the material
                material.diffuseColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ka" && material) {
                // Ambient color (color under shadow) using RGB values
                //value = "r g b"
                color = value.split(delimiterPattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set tghe color into the material
                material.ambientColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ks" && material) {
                // Specular color (color when light is reflected from shiny surface) using RGB values
                //value = "r g b"
                color = value.split(delimiterPattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set the color into the material
                material.specularColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ke" && material) {
                // Emissive color using RGB values
                color = value.split(delimiterPattern, 3).map(parseFloat);
                material.emissiveColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ns" && material) {
                //value = "Integer"
                material.specularPower = parseFloat(value);
            }
            else if (key === "d" && material) {
                //d is dissolve for current material. It mean alpha for BABYLON
                material.alpha = parseFloat(value);
                //Texture
                //This part can be improved by adding the possible options of texture
            }
            else if (key === "map_ka" && material) {
                // ambient texture map with a loaded image
                //We must first get the folder of the image
                material.ambientTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
            }
            else if (key === "map_kd" && material) {
                // Diffuse texture map with a loaded image
                material.diffuseTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
            }
            else if (key === "map_ks" && material) {
                // Specular texture map with a loaded image
                //We must first get the folder of the image
                material.specularTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
            }
            else if (key === "map_ns") {
                //Specular
                //Specular highlight component
                //We must first get the folder of the image
                //
                //Not supported by BABYLON
                //
                //    continue;
            }
            else if (key === "map_bump" && material) {
                //The bump texture
                var values = value.split(delimiterPattern);
                var bumpMultiplierIndex = values.indexOf("-bm");
                var bumpMultiplier = null;
                if (bumpMultiplierIndex >= 0) {
                    bumpMultiplier = values[bumpMultiplierIndex + 1];
                    values.splice(bumpMultiplierIndex, 2); // remove
                }
                material.bumpTexture = MTLFileLoader._GetTexture(rootUrl, values.join(" "), scene);
                if (material.bumpTexture && bumpMultiplier !== null) {
                    material.bumpTexture.level = parseFloat(bumpMultiplier);
                }
            }
            else if (key === "map_d" && material) {
                // The dissolve of the material
                material.opacityTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
                //Options for illumination
            }
            else if (key === "illum") {
                //Illumination
                if (value === "0") {
                    //That mean Kd == Kd
                }
                else if (value === "1") {
                    //Color on and Ambient on
                }
                else if (value === "2") {
                    //Highlight on
                }
                else if (value === "3") {
                    //Reflection on and Ray trace on
                }
                else if (value === "4") {
                    //Transparency: Glass on, Reflection: Ray trace on
                }
                else if (value === "5") {
                    //Reflection: Fresnel on and Ray trace on
                }
                else if (value === "6") {
                    //Transparency: Refraction on, Reflection: Fresnel off and Ray trace on
                }
                else if (value === "7") {
                    //Transparency: Refraction on, Reflection: Fresnel on and Ray trace on
                }
                else if (value === "8") {
                    //Reflection on and Ray trace off
                }
                else if (value === "9") {
                    //Transparency: Glass on, Reflection: Ray trace off
                }
                else if (value === "10") {
                    //Casts shadows onto invisible surfaces
                }
            }
            else {
                // console.log("Unhandled expression at line : " + i +'\n' + "with value : " + line);
            }
        }
        //At the end of the file, add the last material
        if (material) {
            this.materials.push(material);
        }
    };
    /**
     * Gets the texture for the material.
     *
     * If the material is imported from input file,
     * We sanitize the url to ensure it takes the texture from aside the material.
     *
     * @param rootUrl The root url to load from
     * @param value The value stored in the mtl
     * @param scene
     * @returns The Texture
     */
    MTLFileLoader._GetTexture = function (rootUrl, value, scene) {
        if (!value) {
            return null;
        }
        var url = rootUrl;
        // Load from input file.
        if (rootUrl === "file:") {
            var lastDelimiter = value.lastIndexOf("\\");
            if (lastDelimiter === -1) {
                lastDelimiter = value.lastIndexOf("/");
            }
            if (lastDelimiter > -1) {
                url += value.substring(lastDelimiter + 1);
            }
            else {
                url += value;
            }
        }
        // Not from input file.
        else {
            url += value;
        }
        return new babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture(url, scene, false, MTLFileLoader.INVERT_TEXTURE_Y);
    };
    /**
     * Invert Y-Axis of referenced textures on load
     */
    MTLFileLoader.INVERT_TEXTURE_Y = true;
    return MTLFileLoader;
}());



/***/ }),

/***/ "../../../dev/loaders/src/OBJ/objFileLoader.metadata.ts":
/*!**************************************************************!*\
  !*** ../../../dev/loaders/src/OBJ/objFileLoader.metadata.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OBJFileLoaderMetadata: () => (/* binding */ OBJFileLoaderMetadata)
/* harmony export */ });
var OBJFileLoaderMetadata = {
    name: "obj",
    extensions: ".obj",
};


/***/ }),

/***/ "../../../dev/loaders/src/OBJ/objFileLoader.ts":
/*!*****************************************************!*\
  !*** ../../../dev/loaders/src/OBJ/objFileLoader.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OBJFileLoader: () => (/* binding */ OBJFileLoader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/standardMaterial */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objFileLoader_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objFileLoader.metadata */ "../../../dev/loaders/src/OBJ/objFileLoader.metadata.ts");
/* harmony import */ var _mtlFileLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mtlFileLoader */ "../../../dev/loaders/src/OBJ/mtlFileLoader.ts");
/* harmony import */ var _solidParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solidParser */ "../../../dev/loaders/src/OBJ/solidParser.ts");









/**
 * OBJ file type loader.
 * This is a babylon scene loader plugin.
 */
var OBJFileLoader = /** @class */ (function () {
    /**
     * Creates loader for .OBJ files
     *
     * @param loadingOptions options for loading and parsing OBJ/MTL files.
     */
    function OBJFileLoader(loadingOptions) {
        /**
         * Defines the name of the plugin.
         */
        this.name = _objFileLoader_metadata__WEBPACK_IMPORTED_MODULE_1__.OBJFileLoaderMetadata.name;
        /**
         * Defines the extension the plugin is able to load.
         */
        this.extensions = _objFileLoader_metadata__WEBPACK_IMPORTED_MODULE_1__.OBJFileLoaderMetadata.extensions;
        this._assetContainer = null;
        this._loadingOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, OBJFileLoader._DefaultLoadingOptions), (loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : {}));
    }
    Object.defineProperty(OBJFileLoader, "INVERT_TEXTURE_Y", {
        /**
         * Invert Y-Axis of referenced textures on load
         */
        get: function () {
            return _mtlFileLoader__WEBPACK_IMPORTED_MODULE_2__.MTLFileLoader.INVERT_TEXTURE_Y;
        },
        set: function (value) {
            _mtlFileLoader__WEBPACK_IMPORTED_MODULE_2__.MTLFileLoader.INVERT_TEXTURE_Y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBJFileLoader, "_DefaultLoadingOptions", {
        get: function () {
            return {
                computeNormals: OBJFileLoader.COMPUTE_NORMALS,
                optimizeNormals: OBJFileLoader.OPTIMIZE_NORMALS,
                importVertexColors: OBJFileLoader.IMPORT_VERTEX_COLORS,
                invertY: OBJFileLoader.INVERT_Y,
                invertTextureY: OBJFileLoader.INVERT_TEXTURE_Y,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                UVScaling: OBJFileLoader.UV_SCALING,
                materialLoadingFailsSilently: OBJFileLoader.MATERIAL_LOADING_FAILS_SILENTLY,
                optimizeWithUV: OBJFileLoader.OPTIMIZE_WITH_UV,
                skipMaterials: OBJFileLoader.SKIP_MATERIALS,
                useLegacyBehavior: OBJFileLoader.USE_LEGACY_BEHAVIOR,
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Calls synchronously the MTL file attached to this obj.
     * Load function or importMesh function don't enable to load 2 files in the same time asynchronously.
     * Without this function materials are not displayed in the first frame (but displayed after).
     * In consequence it is impossible to get material information in your HTML file
     *
     * @param url The URL of the MTL file
     * @param rootUrl defines where to load data from
     * @param onSuccess Callback function to be called when the MTL file is loaded
     * @param onFailure
     */
    OBJFileLoader.prototype._loadMTL = function (url, rootUrl, onSuccess, onFailure) {
        //The complete path to the mtl file
        var pathOfFile = rootUrl + url;
        // Loads through the babylon tools to allow fileInput search.
        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadFile(pathOfFile, onSuccess, undefined, undefined, false, function (request, exception) {
            onFailure(pathOfFile, exception);
        });
    };
    /** @internal */
    OBJFileLoader.prototype.createPlugin = function (options) {
        return new OBJFileLoader(options[_objFileLoader_metadata__WEBPACK_IMPORTED_MODULE_1__.OBJFileLoaderMetadata.name]);
    };
    /**
     * If the data string can be loaded directly.
     * @returns if the data can be loaded directly
     */
    OBJFileLoader.prototype.canDirectLoad = function () {
        return false;
    };
    /**
     * Imports one or more meshes from the loaded OBJ data and adds them to the scene
     * @param meshesNames a string or array of strings of the mesh names that should be loaded from the file
     * @param scene the scene the meshes should be added to
     * @param data the OBJ data to load
     * @param rootUrl root url to load from
     * @returns a promise containing the loaded meshes, particles, skeletons and animations
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    OBJFileLoader.prototype.importMeshAsync = function (meshesNames, scene, data, rootUrl) {
        //get the meshes from OBJ file
        // eslint-disable-next-line github/no-then
        return this._parseSolidAsync(meshesNames, scene, data, rootUrl).then(function (meshes) {
            return {
                meshes: meshes,
                particleSystems: [],
                skeletons: [],
                animationGroups: [],
                transformNodes: [],
                geometries: [],
                lights: [],
                spriteManagers: [],
            };
        });
    };
    /**
     * Imports all objects from the loaded OBJ data and adds them to the scene
     * @param scene the scene the objects should be added to
     * @param data the OBJ data to load
     * @param rootUrl root url to load from
     * @returns a promise which completes when objects have been loaded to the scene
     */
    // eslint-disable-next-line no-restricted-syntax
    OBJFileLoader.prototype.loadAsync = function (scene, data, rootUrl) {
        //Get the 3D model
        // eslint-disable-next-line github/no-then
        return this.importMeshAsync(null, scene, data, rootUrl).then(function () {
            // return void
        });
    };
    /**
     * Load into an asset container.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @returns The loaded asset container
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    OBJFileLoader.prototype.loadAssetContainerAsync = function (scene, data, rootUrl) {
        var _this = this;
        var container = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AssetContainer(scene);
        this._assetContainer = container;
        return (this.importMeshAsync(null, scene, data, rootUrl)
            // eslint-disable-next-line github/no-then
            .then(function (result) {
            result.meshes.forEach(function (mesh) { return container.meshes.push(mesh); });
            result.meshes.forEach(function (mesh) {
                var material = mesh.material;
                if (material) {
                    // Materials
                    if (container.materials.indexOf(material) == -1) {
                        container.materials.push(material);
                        // Textures
                        var textures = material.getActiveTextures();
                        textures.forEach(function (t) {
                            if (container.textures.indexOf(t) == -1) {
                                container.textures.push(t);
                            }
                        });
                    }
                }
            });
            _this._assetContainer = null;
            return container;
        })
            // eslint-disable-next-line github/no-then
            .catch(function (ex) {
            _this._assetContainer = null;
            throw ex;
        }));
    };
    /**
     * Read the OBJ file and create an Array of meshes.
     * Each mesh contains all information given by the OBJ and the MTL file.
     * i.e. vertices positions and indices, optional normals values, optional UV values, optional material
     * @param meshesNames defines a string or array of strings of the mesh names that should be loaded from the file
     * @param scene defines the scene where are displayed the data
     * @param data defines the content of the obj file
     * @param rootUrl defines the path to the folder
     * @returns the list of loaded meshes
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    OBJFileLoader.prototype._parseSolidAsync = function (meshesNames, scene, data, rootUrl) {
        var _this = this;
        var fileToLoad = ""; //The name of the mtlFile to load
        var materialsFromMTLFile = new _mtlFileLoader__WEBPACK_IMPORTED_MODULE_2__.MTLFileLoader();
        var materialToUse = [];
        var babylonMeshesArray = []; //The mesh for babylon
        // Sanitize data
        data = data.replace(/#.*$/gm, "").trim();
        // Main function
        var solidParser = new _solidParser__WEBPACK_IMPORTED_MODULE_3__.SolidParser(materialToUse, babylonMeshesArray, this._loadingOptions);
        solidParser.parse(meshesNames, data, scene, this._assetContainer, function (fileName) {
            fileToLoad = fileName;
        });
        // load the materials
        var mtlPromises = [];
        // Check if we have a file to load
        if (fileToLoad !== "" && !this._loadingOptions.skipMaterials) {
            //Load the file synchronously
            mtlPromises.push(new Promise(function (resolve, reject) {
                _this._loadMTL(fileToLoad, rootUrl, function (dataLoaded) {
                    try {
                        //Create materials thanks MTLLoader function
                        materialsFromMTLFile.parseMTL(scene, dataLoaded, rootUrl, _this._assetContainer);
                        //Look at each material loaded in the mtl file
                        for (var n = 0; n < materialsFromMTLFile.materials.length; n++) {
                            //Three variables to get all meshes with the same material
                            var startIndex = 0;
                            var _indices = [];
                            var _index = void 0;
                            //The material from MTL file is used in the meshes loaded
                            //Push the indice in an array
                            //Check if the material is not used for another mesh
                            while ((_index = materialToUse.indexOf(materialsFromMTLFile.materials[n].name, startIndex)) > -1) {
                                _indices.push(_index);
                                startIndex = _index + 1;
                            }
                            //If the material is not used dispose it
                            if (_index === -1 && _indices.length === 0) {
                                //If the material is not needed, remove it
                                materialsFromMTLFile.materials[n].dispose();
                            }
                            else {
                                for (var o = 0; o < _indices.length; o++) {
                                    //Apply the material to the Mesh for each mesh with the material
                                    var mesh = babylonMeshesArray[_indices[o]];
                                    var material = materialsFromMTLFile.materials[n];
                                    mesh.material = material;
                                    if (!mesh.getTotalIndices()) {
                                        // No indices, we need to turn on point cloud
                                        material.pointsCloud = true;
                                    }
                                }
                            }
                        }
                        resolve();
                    }
                    catch (e) {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Error processing MTL file: '".concat(fileToLoad, "'"));
                        if (_this._loadingOptions.materialLoadingFailsSilently) {
                            resolve();
                        }
                        else {
                            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                            reject(e);
                        }
                    }
                }, function (pathOfFile, exception) {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Error downloading MTL file: '".concat(fileToLoad, "'"));
                    if (_this._loadingOptions.materialLoadingFailsSilently) {
                        resolve();
                    }
                    else {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        reject(exception);
                    }
                });
            }));
        }
        //Return an array with all Mesh
        // eslint-disable-next-line github/no-then
        return Promise.all(mtlPromises).then(function () {
            var isLine = function (mesh) { var _a, _b; return Boolean((_b = (_a = mesh._internalMetadata) === null || _a === void 0 ? void 0 : _a["_isLine"]) !== null && _b !== void 0 ? _b : false); };
            // Iterate over the mesh, determine if it is a line mesh, clone or modify the material to line rendering.
            babylonMeshesArray.forEach(function (mesh) {
                var _a, _b;
                if (isLine(mesh)) {
                    var mat = (_a = mesh.material) !== null && _a !== void 0 ? _a : new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial(mesh.name + "_line", scene);
                    // If another mesh is using this material and it is not a line then we need to clone it.
                    var needClone = mat.getBindedMeshes().filter(function (e) { return !isLine(e); }).length > 0;
                    if (needClone) {
                        mat = (_b = mat.clone(mat.name + "_line")) !== null && _b !== void 0 ? _b : mat;
                    }
                    mat.wireframe = true;
                    mesh.material = mat;
                    if (mesh._internalMetadata) {
                        mesh._internalMetadata["_isLine"] = undefined;
                    }
                }
            });
            return babylonMeshesArray;
        });
    };
    /**
     * Defines if UVs are optimized by default during load.
     */
    OBJFileLoader.OPTIMIZE_WITH_UV = true;
    /**
     * Invert model on y-axis (does a model scaling inversion)
     */
    OBJFileLoader.INVERT_Y = false;
    /**
     * Include in meshes the vertex colors available in some OBJ files.  This is not part of OBJ standard.
     */
    OBJFileLoader.IMPORT_VERTEX_COLORS = false;
    /**
     * Compute the normals for the model, even if normals are present in the file.
     */
    OBJFileLoader.COMPUTE_NORMALS = false;
    /**
     * Optimize the normals for the model. Lighting can be uneven if you use OptimizeWithUV = true because new vertices can be created for the same location if they pertain to different faces.
     * Using OptimizehNormals = true will help smoothing the lighting by averaging the normals of those vertices.
     */
    OBJFileLoader.OPTIMIZE_NORMALS = false;
    /**
     * Defines custom scaling of UV coordinates of loaded meshes.
     */
    OBJFileLoader.UV_SCALING = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(1, 1);
    /**
     * Skip loading the materials even if defined in the OBJ file (materials are ignored).
     */
    OBJFileLoader.SKIP_MATERIALS = false;
    /**
     * When a material fails to load OBJ loader will silently fail and onSuccess() callback will be triggered.
     *
     * Defaults to true for backwards compatibility.
     */
    OBJFileLoader.MATERIAL_LOADING_FAILS_SILENTLY = true;
    /**
     * Loads assets without handedness conversions. This flag is for compatibility. Use it only if absolutely required. Defaults to false.
     */
    OBJFileLoader.USE_LEGACY_BEHAVIOR = false;
    return OBJFileLoader;
}());

//Add this loader into the register plugin
(0,babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.RegisterSceneLoaderPlugin)(new OBJFileLoader());


/***/ }),

/***/ "../../../dev/loaders/src/OBJ/objLoadingOptions.ts":
/*!*********************************************************!*\
  !*** ../../../dev/loaders/src/OBJ/objLoadingOptions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../dev/loaders/src/OBJ/solidParser.ts":
/*!***************************************************!*\
  !*** ../../../dev/loaders/src/OBJ/solidParser.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolidParser: () => (/* binding */ SolidParser)
/* harmony export */ });
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__);








/**
 * Class used to load mesh data from OBJ content
 */
var SolidParser = /** @class */ (function () {
    /**
     * Creates a new SolidParser
     * @param materialToUse defines the array to fill with the list of materials to use (it will be filled by the parse function)
     * @param babylonMeshesArray defines the array to fill with the list of loaded meshes (it will be filled by the parse function)
     * @param loadingOptions defines the loading options to use
     */
    function SolidParser(materialToUse, babylonMeshesArray, loadingOptions) {
        this._positions = []; //values for the positions of vertices
        this._normals = []; //Values for the normals
        this._uvs = []; //Values for the textures
        this._colors = [];
        this._extColors = []; //Extension color
        this._meshesFromObj = []; //[mesh] Contains all the obj meshes
        this._indicesForBabylon = []; //The list of indices for VertexData
        this._wrappedPositionForBabylon = []; //The list of position in vectors
        this._wrappedUvsForBabylon = []; //Array with all value of uvs to match with the indices
        this._wrappedColorsForBabylon = []; // Array with all color values to match with the indices
        this._wrappedNormalsForBabylon = []; //Array with all value of normals to match with the indices
        this._tuplePosNorm = []; //Create a tuple with indice of Position, Normal, UV  [pos, norm, uvs]
        this._curPositionInIndices = 0;
        this._hasMeshes = false; //Meshes are defined in the file
        this._unwrappedPositionsForBabylon = []; //Value of positionForBabylon w/o Vector3() [x,y,z]
        this._unwrappedColorsForBabylon = []; // Value of colorForBabylon w/o Color4() [r,g,b,a]
        this._unwrappedNormalsForBabylon = []; //Value of normalsForBabylon w/o Vector3()  [x,y,z]
        this._unwrappedUVForBabylon = []; //Value of uvsForBabylon w/o Vector3()      [x,y,z]
        this._triangles = []; //Indices from new triangles coming from polygons
        this._materialNameFromObj = ""; //The name of the current material
        this._objMeshName = ""; //The name of the current obj mesh
        this._increment = 1; //Id for meshes created by the multimaterial
        this._isFirstMaterial = true;
        this._grayColor = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Color4(0.5, 0.5, 0.5, 1);
        this._hasLineData = false; //If this mesh has line segment(l) data
        this._materialToUse = materialToUse;
        this._babylonMeshesArray = babylonMeshesArray;
        this._loadingOptions = loadingOptions;
    }
    /**
     * Search for obj in the given array.
     * This function is called to check if a couple of data already exists in an array.
     *
     * If found, returns the index of the founded tuple index. Returns -1 if not found
     * @param arr Array<{ normals: Array<number>, idx: Array<number> }>
     * @param obj Array<number>
     * @returns {boolean}
     */
    SolidParser.prototype._isInArray = function (arr, obj) {
        if (!arr[obj[0]]) {
            arr[obj[0]] = { normals: [], idx: [] };
        }
        var idx = arr[obj[0]].normals.indexOf(obj[1]);
        return idx === -1 ? -1 : arr[obj[0]].idx[idx];
    };
    SolidParser.prototype._isInArrayUV = function (arr, obj) {
        if (!arr[obj[0]]) {
            arr[obj[0]] = { normals: [], idx: [], uv: [] };
        }
        var idx = arr[obj[0]].normals.indexOf(obj[1]);
        if (idx != 1 && obj[2] === arr[obj[0]].uv[idx]) {
            return arr[obj[0]].idx[idx];
        }
        return -1;
    };
    /**
     * This function set the data for each triangle.
     * Data are position, normals and uvs
     * If a tuple of (position, normal) is not set, add the data into the corresponding array
     * If the tuple already exist, add only their indice
     *
     * @param indicePositionFromObj Integer The index in positions array
     * @param indiceUvsFromObj Integer The index in uvs array
     * @param indiceNormalFromObj Integer The index in normals array
     * @param positionVectorFromOBJ Vector3 The value of position at index objIndice
     * @param textureVectorFromOBJ Vector3 The value of uvs
     * @param normalsVectorFromOBJ Vector3 The value of normals at index objNormale
     * @param positionColorsFromOBJ
     */
    SolidParser.prototype._setData = function (indicePositionFromObj, indiceUvsFromObj, indiceNormalFromObj, positionVectorFromOBJ, textureVectorFromOBJ, normalsVectorFromOBJ, positionColorsFromOBJ) {
        //Check if this tuple already exists in the list of tuples
        var _index;
        if (this._loadingOptions.optimizeWithUV) {
            _index = this._isInArrayUV(this._tuplePosNorm, [indicePositionFromObj, indiceNormalFromObj, indiceUvsFromObj]);
        }
        else {
            _index = this._isInArray(this._tuplePosNorm, [indicePositionFromObj, indiceNormalFromObj]);
        }
        //If it not exists
        if (_index === -1) {
            //Add an new indice.
            //The array of indices is only an array with his length equal to the number of triangles - 1.
            //We add vertices data in this order
            this._indicesForBabylon.push(this._wrappedPositionForBabylon.length);
            //Push the position of vertice for Babylon
            //Each element is a Vector3(x,y,z)
            this._wrappedPositionForBabylon.push(positionVectorFromOBJ);
            //Push the uvs for Babylon
            //Each element is a Vector2(u,v)
            //If the UVs are missing, set (u,v)=(0,0)
            textureVectorFromOBJ = textureVectorFromOBJ !== null && textureVectorFromOBJ !== void 0 ? textureVectorFromOBJ : new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0);
            this._wrappedUvsForBabylon.push(textureVectorFromOBJ);
            //Push the normals for Babylon
            //Each element is a Vector3(x,y,z)
            this._wrappedNormalsForBabylon.push(normalsVectorFromOBJ);
            if (positionColorsFromOBJ !== undefined) {
                //Push the colors for Babylon
                //Each element is a BABYLON.Color4(r,g,b,a)
                this._wrappedColorsForBabylon.push(positionColorsFromOBJ);
            }
            //Add the tuple in the comparison list
            this._tuplePosNorm[indicePositionFromObj].normals.push(indiceNormalFromObj);
            this._tuplePosNorm[indicePositionFromObj].idx.push(this._curPositionInIndices++);
            if (this._loadingOptions.optimizeWithUV) {
                this._tuplePosNorm[indicePositionFromObj].uv.push(indiceUvsFromObj);
            }
        }
        else {
            //The tuple already exists
            //Add the index of the already existing tuple
            //At this index we can get the value of position, normal, color and uvs of vertex
            this._indicesForBabylon.push(_index);
        }
    };
    /**
     * Transform Vector() and BABYLON.Color() objects into numbers in an array
     */
    SolidParser.prototype._unwrapData = function () {
        try {
            //Every array has the same length
            for (var l = 0; l < this._wrappedPositionForBabylon.length; l++) {
                //Push the x, y, z values of each element in the unwrapped array
                this._unwrappedPositionsForBabylon.push(this._wrappedPositionForBabylon[l].x * this._handednessSign, this._wrappedPositionForBabylon[l].y, this._wrappedPositionForBabylon[l].z);
                this._unwrappedNormalsForBabylon.push(this._wrappedNormalsForBabylon[l].x * this._handednessSign, this._wrappedNormalsForBabylon[l].y, this._wrappedNormalsForBabylon[l].z);
                this._unwrappedUVForBabylon.push(this._wrappedUvsForBabylon[l].x, this._wrappedUvsForBabylon[l].y); //z is an optional value not supported by BABYLON
                if (this._loadingOptions.importVertexColors) {
                    //Push the r, g, b, a values of each element in the unwrapped array
                    this._unwrappedColorsForBabylon.push(this._wrappedColorsForBabylon[l].r, this._wrappedColorsForBabylon[l].g, this._wrappedColorsForBabylon[l].b, this._wrappedColorsForBabylon[l].a);
                }
            }
            // Reset arrays for the next new meshes
            this._wrappedPositionForBabylon.length = 0;
            this._wrappedNormalsForBabylon.length = 0;
            this._wrappedUvsForBabylon.length = 0;
            this._wrappedColorsForBabylon.length = 0;
            this._tuplePosNorm.length = 0;
            this._curPositionInIndices = 0;
        }
        catch (e) {
            throw new Error("Unable to unwrap data while parsing OBJ data.");
        }
    };
    /**
     * Create triangles from polygons
     * It is important to notice that a triangle is a polygon
     * We get 5 patterns of face defined in OBJ File :
     * facePattern1 = ["1","2","3","4","5","6"]
     * facePattern2 = ["1/1","2/2","3/3","4/4","5/5","6/6"]
     * facePattern3 = ["1/1/1","2/2/2","3/3/3","4/4/4","5/5/5","6/6/6"]
     * facePattern4 = ["1//1","2//2","3//3","4//4","5//5","6//6"]
     * facePattern5 = ["-1/-1/-1","-2/-2/-2","-3/-3/-3","-4/-4/-4","-5/-5/-5","-6/-6/-6"]
     * Each pattern is divided by the same method
     * @param faces Array[String] The indices of elements
     * @param v Integer The variable to increment
     */
    SolidParser.prototype._getTriangles = function (faces, v) {
        //Work for each element of the array
        for (var faceIndex = v; faceIndex < faces.length - 1; faceIndex++) {
            //Add on the triangle variable the indexes to obtain triangles
            this._pushTriangle(faces, faceIndex);
        }
        //Result obtained after 2 iterations:
        //Pattern1 => triangle = ["1","2","3","1","3","4"];
        //Pattern2 => triangle = ["1/1","2/2","3/3","1/1","3/3","4/4"];
        //Pattern3 => triangle = ["1/1/1","2/2/2","3/3/3","1/1/1","3/3/3","4/4/4"];
        //Pattern4 => triangle = ["1//1","2//2","3//3","1//1","3//3","4//4"];
        //Pattern5 => triangle = ["-1/-1/-1","-2/-2/-2","-3/-3/-3","-1/-1/-1","-3/-3/-3","-4/-4/-4"];
    };
    /**
     * To get color between color and extension color
     * @param index Integer The index of the element in the array
     * @returns value of target color
     */
    SolidParser.prototype._getColor = function (index) {
        var _a;
        if (this._loadingOptions.importVertexColors) {
            return (_a = this._extColors[index]) !== null && _a !== void 0 ? _a : this._colors[index];
        }
        else {
            return undefined;
        }
    };
    /**
     * Create triangles and push the data for each polygon for the pattern 1
     * In this pattern we get vertice positions
     * @param face
     * @param v
     */
    SolidParser.prototype._setDataForCurrentFaceWithPattern1 = function (face, v) {
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        //For each element in the triangles array.
        //This var could contains 1 to an infinity of triangles
        for (var k = 0; k < this._triangles.length; k++) {
            // Set position indice
            var indicePositionFromObj = parseInt(this._triangles[k]) - 1;
            this._setData(indicePositionFromObj, 0, 0, // In the pattern 1, normals and uvs are not defined
            this._positions[indicePositionFromObj], // Get the vectors data
            babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector2.Zero(), babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3.Up(), // Create default vectors
            this._getColor(indicePositionFromObj));
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    };
    /**
     * Create triangles and push the data for each polygon for the pattern 2
     * In this pattern we get vertice positions and uvs
     * @param face
     * @param v
     */
    SolidParser.prototype._setDataForCurrentFaceWithPattern2 = function (face, v) {
        var _a;
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        for (var k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "1/1"
            //Split the data for getting position and uv
            var point = this._triangles[k].split("/"); // ["1", "1"]
            //Set position indice
            var indicePositionFromObj = parseInt(point[0]) - 1;
            //Set uv indice
            var indiceUvsFromObj = parseInt(point[1]) - 1;
            this._setData(indicePositionFromObj, indiceUvsFromObj, 0, //Default value for normals
            this._positions[indicePositionFromObj], //Get the values for each element
            (_a = this._uvs[indiceUvsFromObj]) !== null && _a !== void 0 ? _a : babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector2.Zero(), babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3.Up(), //Default value for normals
            this._getColor(indicePositionFromObj));
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    };
    /**
     * Create triangles and push the data for each polygon for the pattern 3
     * In this pattern we get vertice positions, uvs and normals
     * @param face
     * @param v
     */
    SolidParser.prototype._setDataForCurrentFaceWithPattern3 = function (face, v) {
        var _a, _b;
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        for (var k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "1/1/1"
            //Split the data for getting position, uv, and normals
            var point = this._triangles[k].split("/"); // ["1", "1", "1"]
            // Set position indice
            var indicePositionFromObj = parseInt(point[0]) - 1;
            // Set uv indice
            var indiceUvsFromObj = parseInt(point[1]) - 1;
            // Set normal indice
            var indiceNormalFromObj = parseInt(point[2]) - 1;
            this._setData(indicePositionFromObj, indiceUvsFromObj, indiceNormalFromObj, this._positions[indicePositionFromObj], (_a = this._uvs[indiceUvsFromObj]) !== null && _a !== void 0 ? _a : babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector2.Zero(), (_b = this._normals[indiceNormalFromObj]) !== null && _b !== void 0 ? _b : babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3.Up() //Set the vector for each component
            );
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    };
    /**
     * Create triangles and push the data for each polygon for the pattern 4
     * In this pattern we get vertice positions and normals
     * @param face
     * @param v
     */
    SolidParser.prototype._setDataForCurrentFaceWithPattern4 = function (face, v) {
        this._getTriangles(face, v);
        for (var k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "1//1"
            //Split the data for getting position and normals
            var point = this._triangles[k].split("//"); // ["1", "1"]
            // We check indices, and normals
            var indicePositionFromObj = parseInt(point[0]) - 1;
            var indiceNormalFromObj = parseInt(point[1]) - 1;
            this._setData(indicePositionFromObj, 1, //Default value for uv
            indiceNormalFromObj, this._positions[indicePositionFromObj], //Get each vector of data
            babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector2.Zero(), this._normals[indiceNormalFromObj], this._getColor(indicePositionFromObj));
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    };
    /*
     * Create triangles and push the data for each polygon for the pattern 3
     * In this pattern we get vertice positions, uvs and normals
     * @param face
     * @param v
     */
    SolidParser.prototype._setDataForCurrentFaceWithPattern5 = function (face, v) {
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        for (var k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "-1/-1/-1"
            //Split the data for getting position, uv, and normals
            var point = this._triangles[k].split("/"); // ["-1", "-1", "-1"]
            // Set position indice
            var indicePositionFromObj = this._positions.length + parseInt(point[0]);
            // Set uv indice
            var indiceUvsFromObj = this._uvs.length + parseInt(point[1]);
            // Set normal indice
            var indiceNormalFromObj = this._normals.length + parseInt(point[2]);
            this._setData(indicePositionFromObj, indiceUvsFromObj, indiceNormalFromObj, this._positions[indicePositionFromObj], this._uvs[indiceUvsFromObj], this._normals[indiceNormalFromObj], //Set the vector for each component
            this._getColor(indicePositionFromObj));
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    };
    SolidParser.prototype._addPreviousObjMesh = function () {
        //Check if it is not the first mesh. Otherwise we don't have data.
        if (this._meshesFromObj.length > 0) {
            //Get the previous mesh for applying the data about the faces
            //=> in obj file, faces definition append after the name of the mesh
            this._handledMesh = this._meshesFromObj[this._meshesFromObj.length - 1];
            //Set the data into Array for the mesh
            this._unwrapData();
            if (this._loadingOptions.useLegacyBehavior) {
                // Reverse tab. Otherwise face are displayed in the wrong sens
                this._indicesForBabylon.reverse();
            }
            //Set the information for the mesh
            //Slice the array to avoid rewriting because of the fact this is the same var which be rewrited
            this._handledMesh.indices = this._indicesForBabylon.slice();
            this._handledMesh.positions = this._unwrappedPositionsForBabylon.slice();
            this._handledMesh.normals = this._unwrappedNormalsForBabylon.slice();
            this._handledMesh.uvs = this._unwrappedUVForBabylon.slice();
            this._handledMesh.hasLines = this._hasLineData;
            if (this._loadingOptions.importVertexColors) {
                this._handledMesh.colors = this._unwrappedColorsForBabylon.slice();
            }
            //Reset the array for the next mesh
            this._indicesForBabylon.length = 0;
            this._unwrappedPositionsForBabylon.length = 0;
            this._unwrappedColorsForBabylon.length = 0;
            this._unwrappedNormalsForBabylon.length = 0;
            this._unwrappedUVForBabylon.length = 0;
            this._hasLineData = false;
        }
    };
    SolidParser.prototype._optimizeNormals = function (mesh) {
        var positions = mesh.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind);
        var normals = mesh.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
        var mapVertices = {};
        if (!positions || !normals) {
            return;
        }
        for (var i = 0; i < positions.length / 3; i++) {
            var x = positions[i * 3 + 0];
            var y = positions[i * 3 + 1];
            var z = positions[i * 3 + 2];
            var key = x + "_" + y + "_" + z;
            var lst = mapVertices[key];
            if (!lst) {
                lst = [];
                mapVertices[key] = lst;
            }
            lst.push(i);
        }
        var normal = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        for (var key in mapVertices) {
            var lst = mapVertices[key];
            if (lst.length < 2) {
                continue;
            }
            var v0Idx = lst[0];
            for (var i = 1; i < lst.length; ++i) {
                var vIdx = lst[i];
                normals[v0Idx * 3 + 0] += normals[vIdx * 3 + 0];
                normals[v0Idx * 3 + 1] += normals[vIdx * 3 + 1];
                normals[v0Idx * 3 + 2] += normals[vIdx * 3 + 2];
            }
            normal.copyFromFloats(normals[v0Idx * 3 + 0], normals[v0Idx * 3 + 1], normals[v0Idx * 3 + 2]);
            normal.normalize();
            for (var i = 0; i < lst.length; ++i) {
                var vIdx = lst[i];
                normals[vIdx * 3 + 0] = normal.x;
                normals[vIdx * 3 + 1] = normal.y;
                normals[vIdx * 3 + 2] = normal.z;
            }
        }
        mesh.setVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind, normals);
    };
    SolidParser._IsLineElement = function (line) {
        return line.startsWith("l");
    };
    SolidParser._IsObjectElement = function (line) {
        return line.startsWith("o");
    };
    SolidParser._IsGroupElement = function (line) {
        return line.startsWith("g");
    };
    SolidParser._GetZbrushMRGB = function (line, notParse) {
        if (!line.startsWith("mrgb")) {
            return null;
        }
        line = line.replace("mrgb", "").trim();
        // if include vertex color , not load mrgb anymore
        if (notParse) {
            return [];
        }
        var regex = /[a-z0-9]/g;
        var regArray = line.match(regex);
        if (!regArray || regArray.length % 8 !== 0) {
            return [];
        }
        var array = [];
        for (var regIndex = 0; regIndex < regArray.length / 8; regIndex++) {
            //each item is MMRRGGBB, m is material index
            // const m = regArray[regIndex * 8 + 0] + regArray[regIndex * 8 + 1];
            var r = regArray[regIndex * 8 + 2] + regArray[regIndex * 8 + 3];
            var g = regArray[regIndex * 8 + 4] + regArray[regIndex * 8 + 5];
            var b = regArray[regIndex * 8 + 6] + regArray[regIndex * 8 + 7];
            array.push(new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Color4(parseInt(r, 16) / 255, parseInt(g, 16) / 255, parseInt(b, 16) / 255, 1));
        }
        return array;
    };
    /**
     * Function used to parse an OBJ string
     * @param meshesNames defines the list of meshes to load (all if not defined)
     * @param data defines the OBJ string
     * @param scene defines the hosting scene
     * @param assetContainer defines the asset container to load data in
     * @param onFileToLoadFound defines a callback that will be called if a MTL file is found
     */
    SolidParser.prototype.parse = function (meshesNames, data, scene, assetContainer, onFileToLoadFound) {
        var _this = this;
        var _a, _b;
        //Move Santitize here to forbid delete zbrush data
        // Sanitize data
        data = data.replace(/#MRGB/g, "mrgb");
        data = data.replace(/#.*$/gm, "").trim();
        if (this._loadingOptions.useLegacyBehavior) {
            this._pushTriangle = function (faces, faceIndex) { return _this._triangles.push(faces[0], faces[faceIndex], faces[faceIndex + 1]); };
            this._handednessSign = 1;
        }
        else if (scene.useRightHandedSystem) {
            this._pushTriangle = function (faces, faceIndex) { return _this._triangles.push(faces[0], faces[faceIndex + 1], faces[faceIndex]); };
            this._handednessSign = 1;
        }
        else {
            this._pushTriangle = function (faces, faceIndex) { return _this._triangles.push(faces[0], faces[faceIndex], faces[faceIndex + 1]); };
            this._handednessSign = -1;
        }
        // Split the file into lines
        // Preprocess line data
        var linesOBJ = data.split("\n");
        var lineLines = [];
        var currentGroup = [];
        lineLines.push(currentGroup);
        for (var i = 0; i < linesOBJ.length; i++) {
            var line = linesOBJ[i].trim().replace(/\s\s/g, " ");
            // Comment or newLine
            if (line.length === 0 || line.charAt(0) === "#") {
                continue;
            }
            if (SolidParser._IsGroupElement(line) || SolidParser._IsObjectElement(line)) {
                currentGroup = [];
                lineLines.push(currentGroup);
            }
            if (SolidParser._IsLineElement(line)) {
                var lineValues = line.split(" ");
                // create line elements with two vertices only
                for (var i_1 = 1; i_1 < lineValues.length - 1; i_1++) {
                    currentGroup.push("l ".concat(lineValues[i_1], " ").concat(lineValues[i_1 + 1]));
                }
            }
            else {
                currentGroup.push(line);
            }
        }
        var lines = lineLines.flat();
        // Look at each line
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim().replace(/\s\s/g, " ");
            var result = void 0;
            // Comment or newLine
            if (line.length === 0 || line.charAt(0) === "#") {
                continue;
            }
            else if (SolidParser.VertexPattern.test(line)) {
                //Get information about one position possible for the vertices
                result = line.match(/[^ ]+/g); // match will return non-null due to passing regex pattern
                // Value of result with line: "v 1.0 2.0 3.0"
                // ["v", "1.0", "2.0", "3.0"]
                // Create a Vector3 with the position x, y, z
                this._positions.push(new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])));
                if (this._loadingOptions.importVertexColors) {
                    if (result.length >= 7) {
                        var r = parseFloat(result[4]);
                        var g = parseFloat(result[5]);
                        var b = parseFloat(result[6]);
                        this._colors.push(new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Color4(r > 1 ? r / 255 : r, g > 1 ? g / 255 : g, b > 1 ? b / 255 : b, result.length === 7 || result[7] === undefined ? 1 : parseFloat(result[7])));
                    }
                    else {
                        // TODO: maybe push NULL and if all are NULL to skip (and remove grayColor var).
                        this._colors.push(this._grayColor);
                    }
                }
            }
            else if ((result = SolidParser.NormalPattern.exec(line)) !== null) {
                //Create a Vector3 with the normals x, y, z
                //Value of result
                // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
                //Add the Vector in the list of normals
                this._normals.push(new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])));
            }
            else if ((result = SolidParser.UVPattern.exec(line)) !== null) {
                //Create a Vector2 with the normals u, v
                //Value of result
                // ["vt 0.1 0.2 0.3", "0.1", "0.2"]
                //Add the Vector in the list of uvs
                this._uvs.push(new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector2(parseFloat(result[1]) * this._loadingOptions.UVScaling.x, parseFloat(result[2]) * this._loadingOptions.UVScaling.y));
                //Identify patterns of faces
                //Face could be defined in different type of pattern
            }
            else if ((result = SolidParser.FacePattern3.exec(line)) !== null) {
                //Value of result:
                //["f 1/1/1 2/2/2 3/3/3", "1/1/1 2/2/2 3/3/3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern3(result[1].trim().split(" "), // ["1/1/1", "2/2/2", "3/3/3"]
                1);
            }
            else if ((result = SolidParser.FacePattern4.exec(line)) !== null) {
                //Value of result:
                //["f 1//1 2//2 3//3", "1//1 2//2 3//3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern4(result[1].trim().split(" "), // ["1//1", "2//2", "3//3"]
                1);
            }
            else if ((result = SolidParser.FacePattern5.exec(line)) !== null) {
                //Value of result:
                //["f -1/-1/-1 -2/-2/-2 -3/-3/-3", "-1/-1/-1 -2/-2/-2 -3/-3/-3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern5(result[1].trim().split(" "), // ["-1/-1/-1", "-2/-2/-2", "-3/-3/-3"]
                1);
            }
            else if ((result = SolidParser.FacePattern2.exec(line)) !== null) {
                //Value of result:
                //["f 1/1 2/2 3/3", "1/1 2/2 3/3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern2(result[1].trim().split(" "), // ["1/1", "2/2", "3/3"]
                1);
            }
            else if ((result = SolidParser.FacePattern1.exec(line)) !== null) {
                //Value of result
                //["f 1 2 3", "1 2 3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern1(result[1].trim().split(" "), // ["1", "2", "3"]
                1);
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if ((result = SolidParser.LinePattern1.exec(line)) !== null) {
                //Value of result
                //["l 1 2"]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern1(result[1].trim().split(" "), // ["1", "2"]
                0);
                this._hasLineData = true;
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if ((result = SolidParser.LinePattern2.exec(line)) !== null) {
                //Value of result
                //["l 1/1 2/2"]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern2(result[1].trim().split(" "), // ["1/1", "2/2"]
                0);
                this._hasLineData = true;
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if ((result = SolidParser._GetZbrushMRGB(line, !this._loadingOptions.importVertexColors))) {
                for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                    var element = result_1[_i];
                    this._extColors.push(element);
                }
            }
            else if ((result = SolidParser.LinePattern3.exec(line)) !== null) {
                //Value of result
                //["l 1/1/1 2/2/2"]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern3(result[1].trim().split(" "), // ["1/1/1", "2/2/2"]
                0);
                this._hasLineData = true;
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if (SolidParser.GroupDescriptor.test(line) || SolidParser.ObjectDescriptor.test(line)) {
                // Create a new mesh corresponding to the name of the group.
                // Definition of the mesh
                var objMesh = {
                    name: line.substring(2).trim(), //Set the name of the current obj mesh
                    indices: null,
                    positions: null,
                    normals: null,
                    uvs: null,
                    colors: null,
                    materialName: this._materialNameFromObj,
                    isObject: SolidParser.ObjectDescriptor.test(line),
                };
                this._addPreviousObjMesh();
                //Push the last mesh created with only the name
                this._meshesFromObj.push(objMesh);
                //Set this variable to indicate that now meshesFromObj has objects defined inside
                this._hasMeshes = true;
                this._isFirstMaterial = true;
                this._increment = 1;
                //Keyword for applying a material
            }
            else if (SolidParser.UseMtlDescriptor.test(line)) {
                //Get the name of the material
                this._materialNameFromObj = line.substring(7).trim();
                //If this new material is in the same mesh
                if (!this._isFirstMaterial || !this._hasMeshes) {
                    //Set the data for the previous mesh
                    this._addPreviousObjMesh();
                    //Create a new mesh
                    var objMesh = 
                    //Set the name of the current obj mesh
                    {
                        name: (this._objMeshName || "mesh") + "_mm" + this._increment.toString(), //Set the name of the current obj mesh
                        indices: null,
                        positions: null,
                        normals: null,
                        uvs: null,
                        colors: null,
                        materialName: this._materialNameFromObj,
                        isObject: false,
                    };
                    this._increment++;
                    //If meshes are already defined
                    this._meshesFromObj.push(objMesh);
                    this._hasMeshes = true;
                }
                //Set the material name if the previous line define a mesh
                if (this._hasMeshes && this._isFirstMaterial) {
                    //Set the material name to the previous mesh (1 material per mesh)
                    this._meshesFromObj[this._meshesFromObj.length - 1].materialName = this._materialNameFromObj;
                    this._isFirstMaterial = false;
                }
                // Keyword for loading the mtl file
            }
            else if (SolidParser.MtlLibGroupDescriptor.test(line)) {
                // Get the name of mtl file
                onFileToLoadFound(line.substring(7).trim());
                // Apply smoothing
            }
            else if (SolidParser.SmoothDescriptor.test(line)) {
                // smooth shading => apply smoothing
                // Today I don't know it work with babylon and with obj.
                // With the obj file  an integer is set
            }
            else {
                //If there is another possibility
                babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Logger.Log("Unhandled expression at line : " + line);
            }
        }
        // At the end of the file, add the last mesh into the meshesFromObj array
        if (this._hasMeshes) {
            // Set the data for the last mesh
            this._handledMesh = this._meshesFromObj[this._meshesFromObj.length - 1];
            if (this._loadingOptions.useLegacyBehavior) {
                //Reverse indices for displaying faces in the good sense
                this._indicesForBabylon.reverse();
            }
            //Get the good array
            this._unwrapData();
            //Set array
            this._handledMesh.indices = this._indicesForBabylon;
            this._handledMesh.positions = this._unwrappedPositionsForBabylon;
            this._handledMesh.normals = this._unwrappedNormalsForBabylon;
            this._handledMesh.uvs = this._unwrappedUVForBabylon;
            this._handledMesh.hasLines = this._hasLineData;
            if (this._loadingOptions.importVertexColors) {
                this._handledMesh.colors = this._unwrappedColorsForBabylon;
            }
        }
        // If any o or g keyword not found, create a mesh with a random id
        if (!this._hasMeshes) {
            var newMaterial = null;
            if (this._indicesForBabylon.length) {
                if (this._loadingOptions.useLegacyBehavior) {
                    // reverse tab of indices
                    this._indicesForBabylon.reverse();
                }
                //Get positions normals uvs
                this._unwrapData();
            }
            else {
                // There is no indices in the file. We will have to switch to point cloud rendering
                for (var _c = 0, _d = this._positions; _c < _d.length; _c++) {
                    var pos = _d[_c];
                    this._unwrappedPositionsForBabylon.push(pos.x, pos.y, pos.z);
                }
                if (this._normals.length) {
                    for (var _e = 0, _f = this._normals; _e < _f.length; _e++) {
                        var normal = _f[_e];
                        this._unwrappedNormalsForBabylon.push(normal.x, normal.y, normal.z);
                    }
                }
                if (this._uvs.length) {
                    for (var _g = 0, _h = this._uvs; _g < _h.length; _g++) {
                        var uv = _h[_g];
                        this._unwrappedUVForBabylon.push(uv.x, uv.y);
                    }
                }
                if (this._extColors.length) {
                    for (var _j = 0, _k = this._extColors; _j < _k.length; _j++) {
                        var color = _k[_j];
                        this._unwrappedColorsForBabylon.push(color.r, color.g, color.b, color.a);
                    }
                }
                else {
                    if (this._colors.length) {
                        for (var _l = 0, _m = this._colors; _l < _m.length; _l++) {
                            var color = _m[_l];
                            this._unwrappedColorsForBabylon.push(color.r, color.g, color.b, color.a);
                        }
                    }
                }
                if (!this._materialNameFromObj) {
                    // Create a material with point cloud on
                    newMaterial = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Geometry.RandomId(), scene);
                    newMaterial.pointsCloud = true;
                    this._materialNameFromObj = newMaterial.name;
                    if (!this._normals.length) {
                        newMaterial.disableLighting = true;
                        newMaterial.emissiveColor = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
                    }
                }
            }
            //Set data for one mesh
            this._meshesFromObj.push({
                name: babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Geometry.RandomId(),
                indices: this._indicesForBabylon,
                positions: this._unwrappedPositionsForBabylon,
                colors: this._unwrappedColorsForBabylon,
                normals: this._unwrappedNormalsForBabylon,
                uvs: this._unwrappedUVForBabylon,
                materialName: this._materialNameFromObj,
                directMaterial: newMaterial,
                isObject: true,
                hasLines: this._hasLineData,
            });
        }
        //Set data for each mesh
        for (var j = 0; j < this._meshesFromObj.length; j++) {
            //check meshesNames (stlFileLoader)
            if (meshesNames && this._meshesFromObj[j].name) {
                if (meshesNames instanceof Array) {
                    if (meshesNames.indexOf(this._meshesFromObj[j].name) === -1) {
                        continue;
                    }
                }
                else {
                    if (this._meshesFromObj[j].name !== meshesNames) {
                        continue;
                    }
                }
            }
            //Get the current mesh
            //Set the data with VertexBuffer for each mesh
            this._handledMesh = this._meshesFromObj[j];
            //Create a Mesh with the name of the obj mesh
            scene._blockEntityCollection = !!assetContainer;
            var babylonMesh = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Mesh(this._meshesFromObj[j].name, scene);
            babylonMesh._parentContainer = assetContainer;
            scene._blockEntityCollection = false;
            this._handledMesh._babylonMesh = babylonMesh;
            // If this is a group mesh, it should have an object mesh as a parent. So look for the first object mesh that appears before it.
            if (!this._handledMesh.isObject) {
                for (var k = j - 1; k >= 0; --k) {
                    if (this._meshesFromObj[k].isObject && this._meshesFromObj[k]._babylonMesh) {
                        babylonMesh.parent = this._meshesFromObj[k]._babylonMesh;
                        break;
                    }
                }
            }
            //Push the name of the material to an array
            //This is indispensable for the importMesh function
            this._materialToUse.push(this._meshesFromObj[j].materialName);
            //If the mesh is a line mesh
            if (this._handledMesh.hasLines) {
                (_a = babylonMesh._internalMetadata) !== null && _a !== void 0 ? _a : (babylonMesh._internalMetadata = {});
                babylonMesh._internalMetadata["_isLine"] = true; //this is a line mesh
            }
            if (((_b = this._handledMesh.positions) === null || _b === void 0 ? void 0 : _b.length) === 0) {
                //Push the mesh into an array
                this._babylonMeshesArray.push(babylonMesh);
                continue;
            }
            var vertexData = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexData(); //The container for the values
            //Set the data for the babylonMesh
            vertexData.uvs = this._handledMesh.uvs;
            vertexData.indices = this._handledMesh.indices;
            vertexData.positions = this._handledMesh.positions;
            if (this._loadingOptions.computeNormals) {
                var normals = new Array();
                babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexData.ComputeNormals(this._handledMesh.positions, this._handledMesh.indices, normals);
                vertexData.normals = normals;
            }
            else {
                vertexData.normals = this._handledMesh.normals;
            }
            if (this._loadingOptions.importVertexColors) {
                vertexData.colors = this._handledMesh.colors;
            }
            //Set the data from the VertexBuffer to the current Mesh
            vertexData.applyToMesh(babylonMesh);
            if (this._loadingOptions.invertY) {
                babylonMesh.scaling.y *= -1;
            }
            if (this._loadingOptions.optimizeNormals) {
                this._optimizeNormals(babylonMesh);
            }
            //Push the mesh into an array
            this._babylonMeshesArray.push(babylonMesh);
            if (this._handledMesh.directMaterial) {
                babylonMesh.material = this._handledMesh.directMaterial;
            }
        }
    };
    // Descriptor
    /** Object descriptor */
    SolidParser.ObjectDescriptor = /^o/;
    /** Group descriptor */
    SolidParser.GroupDescriptor = /^g/;
    /** Material lib descriptor */
    SolidParser.MtlLibGroupDescriptor = /^mtllib /;
    /** Use a material descriptor */
    SolidParser.UseMtlDescriptor = /^usemtl /;
    /** Smooth descriptor */
    SolidParser.SmoothDescriptor = /^s /;
    // Patterns
    /** Pattern used to detect a vertex */
    SolidParser.VertexPattern = /^v(\s+[\d|.|+|\-|e|E]+){3,7}/;
    /** Pattern used to detect a normal */
    SolidParser.NormalPattern = /^vn(\s+[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)/;
    /** Pattern used to detect a UV set */
    SolidParser.UVPattern = /^vt(\s+[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)/;
    /** Pattern used to detect a first kind of face (f vertex vertex vertex) */
    SolidParser.FacePattern1 = /^f\s+(([\d]{1,}[\s]?){3,})+/;
    /** Pattern used to detect a second kind of face (f vertex/uvs vertex/uvs vertex/uvs) */
    SolidParser.FacePattern2 = /^f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
    /** Pattern used to detect a third kind of face (f vertex/uvs/normal vertex/uvs/normal vertex/uvs/normal) */
    SolidParser.FacePattern3 = /^f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
    /** Pattern used to detect a fourth kind of face (f vertex//normal vertex//normal vertex//normal)*/
    SolidParser.FacePattern4 = /^f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/;
    /** Pattern used to detect a fifth kind of face (f -vertex/-uvs/-normal -vertex/-uvs/-normal -vertex/-uvs/-normal) */
    SolidParser.FacePattern5 = /^f\s+(((-[\d]{1,}\/-[\d]{1,}\/-[\d]{1,}[\s]?){3,})+)/;
    /** Pattern used to detect a line(l vertex vertex) */
    SolidParser.LinePattern1 = /^l\s+(([\d]{1,}[\s]?){2,})+/;
    /** Pattern used to detect a second kind of line (l vertex/uvs vertex/uvs) */
    SolidParser.LinePattern2 = /^l\s+((([\d]{1,}\/[\d]{1,}[\s]?){2,})+)/;
    /** Pattern used to detect a third kind of line (l vertex/uvs/normal vertex/uvs/normal) */
    SolidParser.LinePattern3 = /^l\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){2,})+)/;
    return SolidParser;
}());



/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-objFileLoader.ts":
/*!***************************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-objFileLoader.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MTLFileLoader: () => (/* reexport safe */ loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__.MTLFileLoader),
/* harmony export */   OBJFileLoader: () => (/* reexport safe */ loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__.OBJFileLoader),
/* harmony export */   SolidParser: () => (/* reexport safe */ loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__.SolidParser)
/* harmony export */ });
/* harmony import */ var loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loaders/OBJ/index */ "../../../dev/loaders/src/OBJ/index.ts");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var GlobalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof GlobalObject !== "undefined") {
    for (var key in loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__) {
        if (!GlobalObject.BABYLON[key]) {
            GlobalObject.BABYLON[key] = loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__[key];
        }
    }
}



/***/ }),

/***/ "babylonjs/Misc/tools":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_tools__;

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/objFileLoader.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loaders: () => (/* reexport module object */ _lts_loaders_legacy_legacy_objFileLoader__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_loaders_legacy_legacy_objFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/loaders/legacy/legacy-objFileLoader */ "../../../lts/loaders/src/legacy/legacy-objFileLoader.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_loaders_legacy_legacy_objFileLoader__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5vYmpGaWxlTG9hZGVyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoWkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUFBO0FBTUE7O0FBRUE7QUFDQTtBQStNQTtBQTdNQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBdE5BOztBQUVBO0FBQ0E7QUFvTkE7QUFBQTtBQXhOQTs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBWUE7OztBQUdBO0FBQ0E7QUFtRUE7Ozs7QUFJQTtBQUNBO0FBbEJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBOURBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUpBO0FBOERBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFsVkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBZ1NBO0FBQUE7QUFwVkE7QUFzVkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyWEE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQWdCQTs7QUFFQTtBQUNBO0FBcUVBOzs7OztBQUtBO0FBQ0E7QUFyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOTlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTY3QkE7QUFBQTtBQWgrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQ2hCQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9PQkovaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvT0JKL210bEZpbGVMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvT0JKL29iakZpbGVMb2FkZXIubWV0YWRhdGEudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvT0JKL29iakZpbGVMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvT0JKL3NvbGlkUGFyc2VyLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vbHRzL2xvYWRlcnMvc3JjL2xlZ2FjeS9sZWdhY3ktb2JqRmlsZUxvYWRlci50cyIsIndlYnBhY2s6Ly9MT0FERVJTL2V4dGVybmFsIHVtZCB7XCJyb290XCI6XCJCQUJZTE9OXCIsXCJjb21tb25qc1wiOlwiYmFieWxvbmpzXCIsXCJjb21tb25qczJcIjpcImJhYnlsb25qc1wiLFwiYW1kXCI6XCJiYWJ5bG9uanNcIn0iLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xPQURFUlMvLi9zcmMvb2JqRmlsZUxvYWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJiYWJ5bG9uanMtbG9hZGVyc1wiLCBbXCJiYWJ5bG9uanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmFieWxvbmpzLWxvYWRlcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxPQURFUlNcIl0gPSBmYWN0b3J5KHJvb3RbXCJCQUJZTE9OXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyksIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX3Rvb2xzX18pID0+IHtcbnJldHVybiAiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wsIEl0ZXJhdG9yICovXG5cbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xuICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XG4gICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgfVxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgfVxuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XG4gIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxuICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xuICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcbiAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XG4gIHZhciBfLCBkb25lID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xuICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcbiAgICAgIH1cbiAgfVxuICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XG4gIGRvbmUgPSB0cnVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcbiAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XG4gIH1cbiAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEFzeW5jSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEFzeW5jSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSksIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiwgYXdhaXRSZXR1cm4pLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIGF3YWl0UmV0dXJuKGYpIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodikudGhlbihmLCByZWplY3QpOyB9OyB9XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpZiAoZ1tuXSkgeyBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyBpZiAoZikgaVtuXSA9IGYoaVtuXSk7IH0gfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxudmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgIHZhciBhciA9IFtdO1xuICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgcmV0dXJuIGFyO1xuICB9O1xuICByZXR1cm4gb3duS2V5cyhvKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XG4gIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2UsIGlubmVyO1xuICAgIGlmIChhc3luYykge1xuICAgICAgaWYgKCFTeW1ib2wuYXN5bmNEaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmRpc3Bvc2VdO1xuICAgICAgaWYgKGFzeW5jKSBpbm5lciA9IGRpc3Bvc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBpZiAoaW5uZXIpIGRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgdHJ5IHsgaW5uZXIuY2FsbCh0aGlzKTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7IH0gfTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgdmFyIHIsIHMgPSAwO1xuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChyID0gZW52LnN0YWNrLnBvcCgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIXIuYXN5bmMgJiYgcyA9PT0gMSkgcmV0dXJuIHMgPSAwLCBlbnYuc3RhY2sucHVzaChyKSwgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihuZXh0KTtcbiAgICAgICAgaWYgKHIuZGlzcG9zZSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSByLmRpc3Bvc2UuY2FsbChyLnZhbHVlKTtcbiAgICAgICAgICBpZiAoci5hc3luYykgcmV0dXJuIHMgfD0gMiwgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcyB8PSAxO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHMgPT09IDEpIHJldHVybiBlbnYuaGFzRXJyb3IgPyBQcm9taXNlLnJlamVjdChlbnYuZXJyb3IpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbihwYXRoLCBwcmVzZXJ2ZUpzeCkge1xuICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIgJiYgL15cXC5cXC4/XFwvLy50ZXN0KHBhdGgpKSB7XG4gICAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC4odHN4KSR8KCg/OlxcLmQpPykoKD86XFwuW14uL10rPyk/KVxcLihbY21dPyl0cyQvaSwgZnVuY3Rpb24gKG0sIHRzeCwgZCwgZXh0LCBjbSkge1xuICAgICAgICAgIHJldHVybiB0c3ggPyBwcmVzZXJ2ZUpzeCA/IFwiLmpzeFwiIDogXCIuanNcIiA6IGQgJiYgKCFleHQgfHwgIWNtKSA/IG0gOiAoZCArIGV4dCArIFwiLlwiICsgY20udG9Mb3dlckNhc2UoKSArIFwianNcIik7XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBfX2V4dGVuZHMsXG4gIF9fYXNzaWduLFxuICBfX3Jlc3QsXG4gIF9fZGVjb3JhdGUsXG4gIF9fcGFyYW0sXG4gIF9fZXNEZWNvcmF0ZSxcbiAgX19ydW5Jbml0aWFsaXplcnMsXG4gIF9fcHJvcEtleSxcbiAgX19zZXRGdW5jdGlvbk5hbWUsXG4gIF9fbWV0YWRhdGEsXG4gIF9fYXdhaXRlcixcbiAgX19nZW5lcmF0b3IsXG4gIF9fY3JlYXRlQmluZGluZyxcbiAgX19leHBvcnRTdGFyLFxuICBfX3ZhbHVlcyxcbiAgX19yZWFkLFxuICBfX3NwcmVhZCxcbiAgX19zcHJlYWRBcnJheXMsXG4gIF9fc3ByZWFkQXJyYXksXG4gIF9fYXdhaXQsXG4gIF9fYXN5bmNHZW5lcmF0b3IsXG4gIF9fYXN5bmNEZWxlZ2F0b3IsXG4gIF9fYXN5bmNWYWx1ZXMsXG4gIF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxuICBfX2ltcG9ydFN0YXIsXG4gIF9faW1wb3J0RGVmYXVsdCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEluLFxuICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcbiAgX19kaXNwb3NlUmVzb3VyY2VzLFxuICBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbixcbn07XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9tdGxGaWxlTG9hZGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iakxvYWRpbmdPcHRpb25zXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NvbGlkUGFyc2VyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iakZpbGVMb2FkZXJcIjtcclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG4vKipcclxuICogQ2xhc3MgcmVhZGluZyBhbmQgcGFyc2luZyB0aGUgTVRMIGZpbGUgYnVuZGxlZCB3aXRoIHRoZSBvYmogZmlsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNVExGaWxlTG9hZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSW52ZXJ0IFktQXhpcyBvZiByZWZlcmVuY2VkIHRleHR1cmVzIG9uIGxvYWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJTlZFUlRfVEVYVFVSRV9ZID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbCBtYXRlcmlhbCBsb2FkZWQgZnJvbSB0aGUgbXRsIHdpbGwgYmUgc2V0IGhlcmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1hdGVyaWFsczogU3RhbmRhcmRNYXRlcmlhbFtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmVhZCB0aGUgbXRsIGZpbGUgYW5kIGNyZWF0ZSBlYWNoIG1hdGVyaWFsIGRlc2NyaWJlZCBpbnNpZGVcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gY291bGQgYmUgaW1wcm92ZSBieSBhZGRpbmcgOlxyXG4gICAgICogLXNvbWUgY29tcG9uZW50IG1pc3NpbmcgKE5pLCBUZi4uLilcclxuICAgICAqIC1pbmNsdWRpbmcgdGhlIHNwZWNpZmljIG9wdGlvbnMgYXZhaWxhYmxlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIHNjZW5lIHRoZSBtYXRlcmlhbCB3aWxsIGJlIGNyZWF0ZWQgaW5cclxuICAgICAqIEBwYXJhbSBkYXRhIGRlZmluZXMgdGhlIG10bCBkYXRhIHRvIHBhcnNlXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBkZWZpbmVzIHRoZSByb290dXJsIHRvIHVzZSBpbiBvcmRlciB0byBsb2FkIHJlbGF0aXZlIGRlcGVuZGVuY2llc1xyXG4gICAgICogQHBhcmFtIGFzc2V0Q29udGFpbmVyIGRlZmluZXMgdGhlIGFzc2V0IGNvbnRhaW5lciB0byBzdG9yZSB0aGUgbWF0ZXJpYWwgaW4gKGNhbiBiZSBudWxsKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFyc2VNVEwoc2NlbmU6IFNjZW5lLCBkYXRhOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciwgcm9vdFVybDogc3RyaW5nLCBhc3NldENvbnRhaW5lcjogTnVsbGFibGU8QXNzZXRDb250YWluZXI+KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1NwbGl0IHRoZSBsaW5lcyBmcm9tIHRoZSBmaWxlXHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBkYXRhLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIC8vIHdoaXRlc3BhY2UgY2hhciBpZTogWyBcXHRcXHJcXG5cXGZdXHJcbiAgICAgICAgY29uc3QgZGVsaW1pdGVyUGF0dGVybiA9IC9cXHMrLztcclxuICAgICAgICAvL0FycmF5IHdpdGggUkdCIGNvbG9yc1xyXG4gICAgICAgIGxldCBjb2xvcjogbnVtYmVyW107XHJcbiAgICAgICAgLy9OZXcgbWF0ZXJpYWxcclxuICAgICAgICBsZXQgbWF0ZXJpYWw6IE51bGxhYmxlPFN0YW5kYXJkTWF0ZXJpYWw+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy9Mb29rIGF0IGVhY2ggbGluZVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJsYW5rIGxpbmUgb3IgY29tbWVudFxyXG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPT09IDAgfHwgbGluZS5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9HZXQgdGhlIGZpcnN0IHBhcmFtZXRlciAoa2V5d29yZClcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gbGluZS5pbmRleE9mKFwiIFwiKTtcclxuICAgICAgICAgICAgbGV0IGtleSA9IHBvcyA+PSAwID8gbGluZS5zdWJzdHJpbmcoMCwgcG9zKSA6IGxpbmU7XHJcbiAgICAgICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9HZXQgdGhlIGRhdGEgZm9sbG93aW5nIHRoZSBrZXlcclxuICAgICAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHBvcyA+PSAwID8gbGluZS5zdWJzdHJpbmcocG9zICsgMSkudHJpbSgpIDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vVGhpcyBtdGwga2V5d29yZCB3aWxsIGNyZWF0ZSB0aGUgbmV3IG1hdGVyaWFsXHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwibmV3bXRsXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgaXQgaXMgdGhlIGZpcnN0IG1hdGVyaWFsLlxyXG4gICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWxzIHNwZWNpZmljYXRpb25zIGFyZSBkZXNjcmliZWQgYWZ0ZXIgdGhpcyBrZXl3b3JkLlxyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9BZGQgdGhlIHByZXZpb3VzIG1hdGVyaWFsIGluIHRoZSBtYXRlcmlhbCBhcnJheS5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIGEgbmV3IG1hdGVyaWFsLlxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWUgaXMgdGhlIG5hbWUgb2YgdGhlIG1hdGVyaWFsIHJlYWQgaW4gdGhlIG10bCBmaWxlXHJcblxyXG4gICAgICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IG5ldyBTdGFuZGFyZE1hdGVyaWFsKHZhbHVlLCBzY2VuZSk7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5fcGFyZW50Q29udGFpbmVyID0gYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImtkXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIERpZmZ1c2UgY29sb3IgKGNvbG9yIHVuZGVyIHdoaXRlIGxpZ2h0KSB1c2luZyBSR0IgdmFsdWVzXHJcblxyXG4gICAgICAgICAgICAgICAgLy92YWx1ZSAgPSBcInIgZyBiXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdmFsdWUuc3BsaXQoZGVsaW1pdGVyUGF0dGVybiwgMykubWFwKHBhcnNlRmxvYXQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb2xvciA9IFtyLGcsYl1cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRnaGUgY29sb3IgaW50byB0aGUgbWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLmRpZmZ1c2VDb2xvciA9IENvbG9yMy5Gcm9tQXJyYXkoY29sb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJrYVwiICYmIG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbWJpZW50IGNvbG9yIChjb2xvciB1bmRlciBzaGFkb3cpIHVzaW5nIFJHQiB2YWx1ZXNcclxuXHJcbiAgICAgICAgICAgICAgICAvL3ZhbHVlID0gXCJyIGcgYlwiXHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHZhbHVlLnNwbGl0KGRlbGltaXRlclBhdHRlcm4sIDMpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgICAgICAgICAgICAgIC8vY29sb3IgPSBbcixnLGJdXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0Z2hlIGNvbG9yIGludG8gdGhlIG1hdGVyaWFsXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5hbWJpZW50Q29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KGNvbG9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwia3NcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3BlY3VsYXIgY29sb3IgKGNvbG9yIHdoZW4gbGlnaHQgaXMgcmVmbGVjdGVkIGZyb20gc2hpbnkgc3VyZmFjZSkgdXNpbmcgUkdCIHZhbHVlc1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdmFsdWUgPSBcInIgZyBiXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdmFsdWUuc3BsaXQoZGVsaW1pdGVyUGF0dGVybiwgMykubWFwKHBhcnNlRmxvYXQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb2xvciA9IFtyLGcsYl1cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBjb2xvciBpbnRvIHRoZSBtYXRlcmlhbFxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IENvbG9yMy5Gcm9tQXJyYXkoY29sb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJrZVwiICYmIG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFbWlzc2l2ZSBjb2xvciB1c2luZyBSR0IgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHZhbHVlLnNwbGl0KGRlbGltaXRlclBhdHRlcm4sIDMpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KGNvbG9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwibnNcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy92YWx1ZSA9IFwiSW50ZWdlclwiXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zcGVjdWxhclBvd2VyID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImRcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy9kIGlzIGRpc3NvbHZlIGZvciBjdXJyZW50IG1hdGVyaWFsLiBJdCBtZWFuIGFscGhhIGZvciBCQUJZTE9OXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5hbHBoYSA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vVGV4dHVyZVxyXG4gICAgICAgICAgICAgICAgLy9UaGlzIHBhcnQgY2FuIGJlIGltcHJvdmVkIGJ5IGFkZGluZyB0aGUgcG9zc2libGUgb3B0aW9ucyBvZiB0ZXh0dXJlXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIm1hcF9rYVwiICYmIG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbWJpZW50IHRleHR1cmUgbWFwIHdpdGggYSBsb2FkZWQgaW1hZ2VcclxuICAgICAgICAgICAgICAgIC8vV2UgbXVzdCBmaXJzdCBnZXQgdGhlIGZvbGRlciBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLmFtYmllbnRUZXh0dXJlID0gTVRMRmlsZUxvYWRlci5fR2V0VGV4dHVyZShyb290VXJsLCB2YWx1ZSwgc2NlbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJtYXBfa2RcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGlmZnVzZSB0ZXh0dXJlIG1hcCB3aXRoIGEgbG9hZGVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5kaWZmdXNlVGV4dHVyZSA9IE1UTEZpbGVMb2FkZXIuX0dldFRleHR1cmUocm9vdFVybCwgdmFsdWUsIHNjZW5lKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwibWFwX2tzXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNwZWN1bGFyIHRleHR1cmUgbWFwIHdpdGggYSBsb2FkZWQgaW1hZ2VcclxuICAgICAgICAgICAgICAgIC8vV2UgbXVzdCBmaXJzdCBnZXQgdGhlIGZvbGRlciBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFyVGV4dHVyZSA9IE1UTEZpbGVMb2FkZXIuX0dldFRleHR1cmUocm9vdFVybCwgdmFsdWUsIHNjZW5lKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwibWFwX25zXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vU3BlY3VsYXJcclxuICAgICAgICAgICAgICAgIC8vU3BlY3VsYXIgaGlnaGxpZ2h0IGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgLy9XZSBtdXN0IGZpcnN0IGdldCB0aGUgZm9sZGVyIG9mIHRoZSBpbWFnZVxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vTm90IHN1cHBvcnRlZCBieSBCQUJZTE9OXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIm1hcF9idW1wXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vVGhlIGJ1bXAgdGV4dHVyZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoZGVsaW1pdGVyUGF0dGVybik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidW1wTXVsdGlwbGllckluZGV4ID0gdmFsdWVzLmluZGV4T2YoXCItYm1cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVtcE11bHRpcGxpZXI6IE51bGxhYmxlPHN0cmluZz4gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChidW1wTXVsdGlwbGllckluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBidW1wTXVsdGlwbGllciA9IHZhbHVlc1tidW1wTXVsdGlwbGllckluZGV4ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnNwbGljZShidW1wTXVsdGlwbGllckluZGV4LCAyKTsgLy8gcmVtb3ZlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuYnVtcFRleHR1cmUgPSBNVExGaWxlTG9hZGVyLl9HZXRUZXh0dXJlKHJvb3RVcmwsIHZhbHVlcy5qb2luKFwiIFwiKSwgc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGVyaWFsLmJ1bXBUZXh0dXJlICYmIGJ1bXBNdWx0aXBsaWVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwuYnVtcFRleHR1cmUubGV2ZWwgPSBwYXJzZUZsb2F0KGJ1bXBNdWx0aXBsaWVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwibWFwX2RcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGRpc3NvbHZlIG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eVRleHR1cmUgPSBNVExGaWxlTG9hZGVyLl9HZXRUZXh0dXJlKHJvb3RVcmwsIHZhbHVlLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9PcHRpb25zIGZvciBpbGx1bWluYXRpb25cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiaWxsdW1cIikge1xyXG4gICAgICAgICAgICAgICAgLy9JbGx1bWluYXRpb25cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RoYXQgbWVhbiBLZCA9PSBLZFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0NvbG9yIG9uIGFuZCBBbWJpZW50IG9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIjJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vSGlnaGxpZ2h0IG9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIjNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVmbGVjdGlvbiBvbiBhbmQgUmF5IHRyYWNlIG9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIjRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vVHJhbnNwYXJlbmN5OiBHbGFzcyBvbiwgUmVmbGVjdGlvbjogUmF5IHRyYWNlIG9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIjVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVmbGVjdGlvbjogRnJlc25lbCBvbiBhbmQgUmF5IHRyYWNlIG9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIjZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vVHJhbnNwYXJlbmN5OiBSZWZyYWN0aW9uIG9uLCBSZWZsZWN0aW9uOiBGcmVzbmVsIG9mZiBhbmQgUmF5IHRyYWNlIG9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIjdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vVHJhbnNwYXJlbmN5OiBSZWZyYWN0aW9uIG9uLCBSZWZsZWN0aW9uOiBGcmVzbmVsIG9uIGFuZCBSYXkgdHJhY2Ugb25cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiOFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9SZWZsZWN0aW9uIG9uIGFuZCBSYXkgdHJhY2Ugb2ZmXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIjlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vVHJhbnNwYXJlbmN5OiBHbGFzcyBvbiwgUmVmbGVjdGlvbjogUmF5IHRyYWNlIG9mZlxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCIxMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9DYXN0cyBzaGFkb3dzIG9udG8gaW52aXNpYmxlIHN1cmZhY2VzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlVuaGFuZGxlZCBleHByZXNzaW9uIGF0IGxpbmUgOiBcIiArIGkgKydcXG4nICsgXCJ3aXRoIHZhbHVlIDogXCIgKyBsaW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL0F0IHRoZSBlbmQgb2YgdGhlIGZpbGUsIGFkZCB0aGUgbGFzdCBtYXRlcmlhbFxyXG4gICAgICAgIGlmIChtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB0ZXh0dXJlIGZvciB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKlxyXG4gICAgICogSWYgdGhlIG1hdGVyaWFsIGlzIGltcG9ydGVkIGZyb20gaW5wdXQgZmlsZSxcclxuICAgICAqIFdlIHNhbml0aXplIHRoZSB1cmwgdG8gZW5zdXJlIGl0IHRha2VzIHRoZSB0ZXh0dXJlIGZyb20gYXNpZGUgdGhlIG1hdGVyaWFsLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSByb290VXJsIFRoZSByb290IHVybCB0byBsb2FkIGZyb21cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgc3RvcmVkIGluIHRoZSBtdGxcclxuICAgICAqIEBwYXJhbSBzY2VuZVxyXG4gICAgICogQHJldHVybnMgVGhlIFRleHR1cmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldFRleHR1cmUocm9vdFVybDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBzY2VuZTogU2NlbmUpOiBOdWxsYWJsZTxUZXh0dXJlPiB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSByb290VXJsO1xyXG4gICAgICAgIC8vIExvYWQgZnJvbSBpbnB1dCBmaWxlLlxyXG4gICAgICAgIGlmIChyb290VXJsID09PSBcImZpbGU6XCIpIHtcclxuICAgICAgICAgICAgbGV0IGxhc3REZWxpbWl0ZXIgPSB2YWx1ZS5sYXN0SW5kZXhPZihcIlxcXFxcIik7XHJcbiAgICAgICAgICAgIGlmIChsYXN0RGVsaW1pdGVyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbGFzdERlbGltaXRlciA9IHZhbHVlLmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxhc3REZWxpbWl0ZXIgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IHZhbHVlLnN1YnN0cmluZyhsYXN0RGVsaW1pdGVyICsgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTm90IGZyb20gaW5wdXQgZmlsZS5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdXJsICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0dXJlKHVybCwgc2NlbmUsIGZhbHNlLCBNVExGaWxlTG9hZGVyLklOVkVSVF9URVhUVVJFX1kpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlc1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZUxvYWRlclBsdWdpbk1ldGFkYXRhIH0gZnJvbSBcImNvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPQkpGaWxlTG9hZGVyTWV0YWRhdGEgPSB7XHJcbiAgICBuYW1lOiBcIm9ialwiLFxyXG4gICAgZXh0ZW5zaW9uczogXCIub2JqXCIsXHJcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIElTY2VuZUxvYWRlclBsdWdpbk1ldGFkYXRhO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyAqL1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYywgSVNjZW5lTG9hZGVyUGx1Z2luRmFjdG9yeSwgSVNjZW5lTG9hZGVyUGx1Z2luLCBJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdCwgU2NlbmVMb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlclNjZW5lTG9hZGVyUGx1Z2luIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBBc3NldENvbnRhaW5lciB9IGZyb20gXCJjb3JlL2Fzc2V0Q29udGFpbmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFdlYlJlcXVlc3QgfSBmcm9tIFwiY29yZS9NaXNjL3dlYlJlcXVlc3RcIjtcclxuaW1wb3J0IHsgT0JKRmlsZUxvYWRlck1ldGFkYXRhIH0gZnJvbSBcIi4vb2JqRmlsZUxvYWRlci5tZXRhZGF0YVwiO1xyXG5pbXBvcnQgeyBNVExGaWxlTG9hZGVyIH0gZnJvbSBcIi4vbXRsRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE9CSkxvYWRpbmdPcHRpb25zIH0gZnJvbSBcIi4vb2JqTG9hZGluZ09wdGlvbnNcIjtcclxuaW1wb3J0IHsgU29saWRQYXJzZXIgfSBmcm9tIFwiLi9zb2xpZFBhcnNlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIG9iaiBsb2FkZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgW09CSkZpbGVMb2FkZXJNZXRhZGF0YS5uYW1lXTogUGFydGlhbDxPQkpMb2FkaW5nT3B0aW9ucz47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPQkogZmlsZSB0eXBlIGxvYWRlci5cclxuICogVGhpcyBpcyBhIGJhYnlsb24gc2NlbmUgbG9hZGVyIHBsdWdpbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBPQkpGaWxlTG9hZGVyIGltcGxlbWVudHMgSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMsIElTY2VuZUxvYWRlclBsdWdpbkZhY3Rvcnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIFVWcyBhcmUgb3B0aW1pemVkIGJ5IGRlZmF1bHQgZHVyaW5nIGxvYWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgT1BUSU1JWkVfV0lUSF9VViA9IHRydWU7XHJcbiAgICAvKipcclxuICAgICAqIEludmVydCBtb2RlbCBvbiB5LWF4aXMgKGRvZXMgYSBtb2RlbCBzY2FsaW5nIGludmVyc2lvbilcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJTlZFUlRfWSA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZlcnQgWS1BeGlzIG9mIHJlZmVyZW5jZWQgdGV4dHVyZXMgb24gbG9hZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJTlZFUlRfVEVYVFVSRV9ZKCkge1xyXG4gICAgICAgIHJldHVybiBNVExGaWxlTG9hZGVyLklOVkVSVF9URVhUVVJFX1k7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgSU5WRVJUX1RFWFRVUkVfWSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIE1UTEZpbGVMb2FkZXIuSU5WRVJUX1RFWFRVUkVfWSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5jbHVkZSBpbiBtZXNoZXMgdGhlIHZlcnRleCBjb2xvcnMgYXZhaWxhYmxlIGluIHNvbWUgT0JKIGZpbGVzLiAgVGhpcyBpcyBub3QgcGFydCBvZiBPQkogc3RhbmRhcmQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSU1QT1JUX1ZFUlRFWF9DT0xPUlMgPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogQ29tcHV0ZSB0aGUgbm9ybWFscyBmb3IgdGhlIG1vZGVsLCBldmVuIGlmIG5vcm1hbHMgYXJlIHByZXNlbnQgaW4gdGhlIGZpbGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ09NUFVURV9OT1JNQUxTID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIE9wdGltaXplIHRoZSBub3JtYWxzIGZvciB0aGUgbW9kZWwuIExpZ2h0aW5nIGNhbiBiZSB1bmV2ZW4gaWYgeW91IHVzZSBPcHRpbWl6ZVdpdGhVViA9IHRydWUgYmVjYXVzZSBuZXcgdmVydGljZXMgY2FuIGJlIGNyZWF0ZWQgZm9yIHRoZSBzYW1lIGxvY2F0aW9uIGlmIHRoZXkgcGVydGFpbiB0byBkaWZmZXJlbnQgZmFjZXMuXHJcbiAgICAgKiBVc2luZyBPcHRpbWl6ZWhOb3JtYWxzID0gdHJ1ZSB3aWxsIGhlbHAgc21vb3RoaW5nIHRoZSBsaWdodGluZyBieSBhdmVyYWdpbmcgdGhlIG5vcm1hbHMgb2YgdGhvc2UgdmVydGljZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgT1BUSU1JWkVfTk9STUFMUyA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGN1c3RvbSBzY2FsaW5nIG9mIFVWIGNvb3JkaW5hdGVzIG9mIGxvYWRlZCBtZXNoZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVVZfU0NBTElORyA9IG5ldyBWZWN0b3IyKDEsIDEpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTa2lwIGxvYWRpbmcgdGhlIG1hdGVyaWFscyBldmVuIGlmIGRlZmluZWQgaW4gdGhlIE9CSiBmaWxlIChtYXRlcmlhbHMgYXJlIGlnbm9yZWQpLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNLSVBfTUFURVJJQUxTID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGEgbWF0ZXJpYWwgZmFpbHMgdG8gbG9hZCBPQkogbG9hZGVyIHdpbGwgc2lsZW50bHkgZmFpbCBhbmQgb25TdWNjZXNzKCkgY2FsbGJhY2sgd2lsbCBiZSB0cmlnZ2VyZWQuXHJcbiAgICAgKlxyXG4gICAgICogRGVmYXVsdHMgdG8gdHJ1ZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTUFURVJJQUxfTE9BRElOR19GQUlMU19TSUxFTlRMWSA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhc3NldHMgd2l0aG91dCBoYW5kZWRuZXNzIGNvbnZlcnNpb25zLiBUaGlzIGZsYWcgaXMgZm9yIGNvbXBhdGliaWxpdHkuIFVzZSBpdCBvbmx5IGlmIGFic29sdXRlbHkgcmVxdWlyZWQuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVTRV9MRUdBQ1lfQkVIQVZJT1IgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIG5hbWUgb2YgdGhlIHBsdWdpbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBPQkpGaWxlTG9hZGVyTWV0YWRhdGEubmFtZTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgZXh0ZW5zaW9uIHRoZSBwbHVnaW4gaXMgYWJsZSB0byBsb2FkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZXh0ZW5zaW9ucyA9IE9CSkZpbGVMb2FkZXJNZXRhZGF0YS5leHRlbnNpb25zO1xyXG5cclxuICAgIHByaXZhdGUgX2Fzc2V0Q29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRpbmdPcHRpb25zOiBPQkpMb2FkaW5nT3B0aW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgbG9hZGVyIGZvciAuT0JKIGZpbGVzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxvYWRpbmdPcHRpb25zIG9wdGlvbnMgZm9yIGxvYWRpbmcgYW5kIHBhcnNpbmcgT0JKL01UTCBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGluZ09wdGlvbnM/OiBQYXJ0aWFsPFJlYWRvbmx5PE9CSkxvYWRpbmdPcHRpb25zPj4pIHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nT3B0aW9ucyA9IHsgLi4uT0JKRmlsZUxvYWRlci5fRGVmYXVsdExvYWRpbmdPcHRpb25zLCAuLi4obG9hZGluZ09wdGlvbnMgPz8ge30pIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IF9EZWZhdWx0TG9hZGluZ09wdGlvbnMoKTogT0JKTG9hZGluZ09wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbXB1dGVOb3JtYWxzOiBPQkpGaWxlTG9hZGVyLkNPTVBVVEVfTk9STUFMUyxcclxuICAgICAgICAgICAgb3B0aW1pemVOb3JtYWxzOiBPQkpGaWxlTG9hZGVyLk9QVElNSVpFX05PUk1BTFMsXHJcbiAgICAgICAgICAgIGltcG9ydFZlcnRleENvbG9yczogT0JKRmlsZUxvYWRlci5JTVBPUlRfVkVSVEVYX0NPTE9SUyxcclxuICAgICAgICAgICAgaW52ZXJ0WTogT0JKRmlsZUxvYWRlci5JTlZFUlRfWSxcclxuICAgICAgICAgICAgaW52ZXJ0VGV4dHVyZVk6IE9CSkZpbGVMb2FkZXIuSU5WRVJUX1RFWFRVUkVfWSxcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgICAgICAgICBVVlNjYWxpbmc6IE9CSkZpbGVMb2FkZXIuVVZfU0NBTElORyxcclxuICAgICAgICAgICAgbWF0ZXJpYWxMb2FkaW5nRmFpbHNTaWxlbnRseTogT0JKRmlsZUxvYWRlci5NQVRFUklBTF9MT0FESU5HX0ZBSUxTX1NJTEVOVExZLFxyXG4gICAgICAgICAgICBvcHRpbWl6ZVdpdGhVVjogT0JKRmlsZUxvYWRlci5PUFRJTUlaRV9XSVRIX1VWLFxyXG4gICAgICAgICAgICBza2lwTWF0ZXJpYWxzOiBPQkpGaWxlTG9hZGVyLlNLSVBfTUFURVJJQUxTLFxyXG4gICAgICAgICAgICB1c2VMZWdhY3lCZWhhdmlvcjogT0JKRmlsZUxvYWRlci5VU0VfTEVHQUNZX0JFSEFWSU9SLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxscyBzeW5jaHJvbm91c2x5IHRoZSBNVEwgZmlsZSBhdHRhY2hlZCB0byB0aGlzIG9iai5cclxuICAgICAqIExvYWQgZnVuY3Rpb24gb3IgaW1wb3J0TWVzaCBmdW5jdGlvbiBkb24ndCBlbmFibGUgdG8gbG9hZCAyIGZpbGVzIGluIHRoZSBzYW1lIHRpbWUgYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBXaXRob3V0IHRoaXMgZnVuY3Rpb24gbWF0ZXJpYWxzIGFyZSBub3QgZGlzcGxheWVkIGluIHRoZSBmaXJzdCBmcmFtZSAoYnV0IGRpc3BsYXllZCBhZnRlcikuXHJcbiAgICAgKiBJbiBjb25zZXF1ZW5jZSBpdCBpcyBpbXBvc3NpYmxlIHRvIGdldCBtYXRlcmlhbCBpbmZvcm1hdGlvbiBpbiB5b3VyIEhUTUwgZmlsZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIFVSTCBvZiB0aGUgTVRMIGZpbGVcclxuICAgICAqIEBwYXJhbSByb290VXJsIGRlZmluZXMgd2hlcmUgdG8gbG9hZCBkYXRhIGZyb21cclxuICAgICAqIEBwYXJhbSBvblN1Y2Nlc3MgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIE1UTCBmaWxlIGlzIGxvYWRlZFxyXG4gICAgICogQHBhcmFtIG9uRmFpbHVyZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9sb2FkTVRMKFxyXG4gICAgICAgIHVybDogc3RyaW5nLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M6IChyZXNwb25zZTogc3RyaW5nIHwgQXJyYXlCdWZmZXIsIHJlc3BvbnNlVXJsPzogc3RyaW5nKSA9PiBhbnksXHJcbiAgICAgICAgb25GYWlsdXJlOiAocGF0aE9mRmlsZTogc3RyaW5nLCBleGNlcHRpb24/OiBhbnkpID0+IHZvaWRcclxuICAgICkge1xyXG4gICAgICAgIC8vVGhlIGNvbXBsZXRlIHBhdGggdG8gdGhlIG10bCBmaWxlXHJcbiAgICAgICAgY29uc3QgcGF0aE9mRmlsZSA9IHJvb3RVcmwgKyB1cmw7XHJcblxyXG4gICAgICAgIC8vIExvYWRzIHRocm91Z2ggdGhlIGJhYnlsb24gdG9vbHMgdG8gYWxsb3cgZmlsZUlucHV0IHNlYXJjaC5cclxuICAgICAgICBUb29scy5Mb2FkRmlsZShwYXRoT2ZGaWxlLCBvblN1Y2Nlc3MsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmYWxzZSwgKHJlcXVlc3Q/OiBXZWJSZXF1ZXN0LCBleGNlcHRpb24/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgb25GYWlsdXJlKHBhdGhPZkZpbGUsIGV4Y2VwdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JlYXRlUGx1Z2luKG9wdGlvbnM6IFNjZW5lTG9hZGVyUGx1Z2luT3B0aW9ucyk6IElTY2VuZUxvYWRlclBsdWdpbkFzeW5jIHwgSVNjZW5lTG9hZGVyUGx1Z2luIHtcclxuICAgICAgICByZXR1cm4gbmV3IE9CSkZpbGVMb2FkZXIob3B0aW9uc1tPQkpGaWxlTG9hZGVyTWV0YWRhdGEubmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdGhlIGRhdGEgc3RyaW5nIGNhbiBiZSBsb2FkZWQgZGlyZWN0bHkuXHJcbiAgICAgKiBAcmV0dXJucyBpZiB0aGUgZGF0YSBjYW4gYmUgbG9hZGVkIGRpcmVjdGx5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjYW5EaXJlY3RMb2FkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcG9ydHMgb25lIG9yIG1vcmUgbWVzaGVzIGZyb20gdGhlIGxvYWRlZCBPQkogZGF0YSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIG1lc2hlc05hbWVzIGEgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3Mgb2YgdGhlIG1lc2ggbmFtZXMgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGZyb20gdGhlIGZpbGVcclxuICAgICAqIEBwYXJhbSBzY2VuZSB0aGUgc2NlbmUgdGhlIG1lc2hlcyBzaG91bGQgYmUgYWRkZWQgdG9cclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBPQkogZGF0YSB0byBsb2FkXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCByb290IHVybCB0byBsb2FkIGZyb21cclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSBjb250YWluaW5nIHRoZSBsb2FkZWQgbWVzaGVzLCBwYXJ0aWNsZXMsIHNrZWxldG9ucyBhbmQgYW5pbWF0aW9uc1xyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgaW1wb3J0TWVzaEFzeW5jKG1lc2hlc05hbWVzOiBhbnksIHNjZW5lOiBTY2VuZSwgZGF0YTogYW55LCByb290VXJsOiBzdHJpbmcpOiBQcm9taXNlPElTY2VuZUxvYWRlckFzeW5jUmVzdWx0PiB7XHJcbiAgICAgICAgLy9nZXQgdGhlIG1lc2hlcyBmcm9tIE9CSiBmaWxlXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlU29saWRBc3luYyhtZXNoZXNOYW1lcywgc2NlbmUsIGRhdGEsIHJvb3RVcmwpLnRoZW4oKG1lc2hlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzaGVzOiBtZXNoZXMsXHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2tlbGV0b25zOiBbXSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwczogW10sXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlczogW10sXHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyaWVzOiBbXSxcclxuICAgICAgICAgICAgICAgIGxpZ2h0czogW10sXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVNYW5hZ2VyczogW10sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnRzIGFsbCBvYmplY3RzIGZyb20gdGhlIGxvYWRlZCBPQkogZGF0YSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIHRoZSBzY2VuZSB0aGUgb2JqZWN0cyBzaG91bGQgYmUgYWRkZWQgdG9cclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBPQkogZGF0YSB0byBsb2FkXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCByb290IHVybCB0byBsb2FkIGZyb21cclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSB3aGljaCBjb21wbGV0ZXMgd2hlbiBvYmplY3RzIGhhdmUgYmVlbiBsb2FkZWQgdG8gdGhlIHNjZW5lXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWRBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZywgcm9vdFVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy9HZXQgdGhlIDNEIG1vZGVsXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wb3J0TWVzaEFzeW5jKG51bGwsIHNjZW5lLCBkYXRhLCByb290VXJsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHZvaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgaW50byBhbiBhc3NldCBjb250YWluZXIuXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgVGhlIHNjZW5lIHRvIGxvYWQgaW50b1xyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gaW1wb3J0XHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgZm9yIHNjZW5lIGFuZCByZXNvdXJjZXNcclxuICAgICAqIEByZXR1cm5zIFRoZSBsb2FkZWQgYXNzZXQgY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkQXNzZXRDb250YWluZXJBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZywgcm9vdFVybDogc3RyaW5nKTogUHJvbWlzZTxBc3NldENvbnRhaW5lcj4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBBc3NldENvbnRhaW5lcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5fYXNzZXRDb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuaW1wb3J0TWVzaEFzeW5jKG51bGwsIHNjZW5lLCBkYXRhLCByb290VXJsKVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1lc2hlcy5mb3JFYWNoKChtZXNoKSA9PiBjb250YWluZXIubWVzaGVzLnB1c2gobWVzaCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tZXNoZXMuZm9yRWFjaCgobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLm1hdGVyaWFscy5pbmRleE9mKG1hdGVyaWFsKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5tYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRleHR1cmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZXMgPSBtYXRlcmlhbC5nZXRBY3RpdmVUZXh0dXJlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmVzLmZvckVhY2goKHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci50ZXh0dXJlcy5pbmRleE9mKHQpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIudGV4dHVyZXMucHVzaCh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRDb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRDb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGV4O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCB0aGUgT0JKIGZpbGUgYW5kIGNyZWF0ZSBhbiBBcnJheSBvZiBtZXNoZXMuXHJcbiAgICAgKiBFYWNoIG1lc2ggY29udGFpbnMgYWxsIGluZm9ybWF0aW9uIGdpdmVuIGJ5IHRoZSBPQkogYW5kIHRoZSBNVEwgZmlsZS5cclxuICAgICAqIGkuZS4gdmVydGljZXMgcG9zaXRpb25zIGFuZCBpbmRpY2VzLCBvcHRpb25hbCBub3JtYWxzIHZhbHVlcywgb3B0aW9uYWwgVVYgdmFsdWVzLCBvcHRpb25hbCBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG1lc2hlc05hbWVzIGRlZmluZXMgYSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyBvZiB0aGUgbWVzaCBuYW1lcyB0aGF0IHNob3VsZCBiZSBsb2FkZWQgZnJvbSB0aGUgZmlsZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIHNjZW5lIHdoZXJlIGFyZSBkaXNwbGF5ZWQgdGhlIGRhdGFcclxuICAgICAqIEBwYXJhbSBkYXRhIGRlZmluZXMgdGhlIGNvbnRlbnQgb2YgdGhlIG9iaiBmaWxlXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBkZWZpbmVzIHRoZSBwYXRoIHRvIHRoZSBmb2xkZXJcclxuICAgICAqIEByZXR1cm5zIHRoZSBsaXN0IG9mIGxvYWRlZCBtZXNoZXNcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfcGFyc2VTb2xpZEFzeW5jKG1lc2hlc05hbWVzOiBhbnksIHNjZW5lOiBTY2VuZSwgZGF0YTogc3RyaW5nLCByb290VXJsOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEFic3RyYWN0TWVzaD4+IHtcclxuICAgICAgICBsZXQgZmlsZVRvTG9hZDogc3RyaW5nID0gXCJcIjsgLy9UaGUgbmFtZSBvZiB0aGUgbXRsRmlsZSB0byBsb2FkXHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzRnJvbU1UTEZpbGU6IE1UTEZpbGVMb2FkZXIgPSBuZXcgTVRMRmlsZUxvYWRlcigpO1xyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsVG9Vc2U6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgY29uc3QgYmFieWxvbk1lc2hlc0FycmF5OiBBcnJheTxNZXNoPiA9IFtdOyAvL1RoZSBtZXNoIGZvciBiYWJ5bG9uXHJcblxyXG4gICAgICAgIC8vIFNhbml0aXplIGRhdGFcclxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8jLiokL2dtLCBcIlwiKS50cmltKCk7XHJcblxyXG4gICAgICAgIC8vIE1haW4gZnVuY3Rpb25cclxuICAgICAgICBjb25zdCBzb2xpZFBhcnNlciA9IG5ldyBTb2xpZFBhcnNlcihtYXRlcmlhbFRvVXNlLCBiYWJ5bG9uTWVzaGVzQXJyYXksIHRoaXMuX2xvYWRpbmdPcHRpb25zKTtcclxuXHJcbiAgICAgICAgc29saWRQYXJzZXIucGFyc2UobWVzaGVzTmFtZXMsIGRhdGEsIHNjZW5lLCB0aGlzLl9hc3NldENvbnRhaW5lciwgKGZpbGVOYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgZmlsZVRvTG9hZCA9IGZpbGVOYW1lO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBsb2FkIHRoZSBtYXRlcmlhbHNcclxuICAgICAgICBjb25zdCBtdGxQcm9taXNlczogQXJyYXk8UHJvbWlzZTx2b2lkPj4gPSBbXTtcclxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgZmlsZSB0byBsb2FkXHJcbiAgICAgICAgaWYgKGZpbGVUb0xvYWQgIT09IFwiXCIgJiYgIXRoaXMuX2xvYWRpbmdPcHRpb25zLnNraXBNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgLy9Mb2FkIHRoZSBmaWxlIHN5bmNocm9ub3VzbHlcclxuICAgICAgICAgICAgbXRsUHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkTVRMKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlVG9Mb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGF0YUxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0NyZWF0ZSBtYXRlcmlhbHMgdGhhbmtzIE1UTExvYWRlciBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsc0Zyb21NVExGaWxlLnBhcnNlTVRMKHNjZW5lLCBkYXRhTG9hZGVkLCByb290VXJsLCB0aGlzLl9hc3NldENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Mb29rIGF0IGVhY2ggbWF0ZXJpYWwgbG9hZGVkIGluIHRoZSBtdGwgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgbWF0ZXJpYWxzRnJvbU1UTEZpbGUubWF0ZXJpYWxzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVGhyZWUgdmFyaWFibGVzIHRvIGdldCBhbGwgbWVzaGVzIHdpdGggdGhlIHNhbWUgbWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaW5kaWNlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2luZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UaGUgbWF0ZXJpYWwgZnJvbSBNVEwgZmlsZSBpcyB1c2VkIGluIHRoZSBtZXNoZXMgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vUHVzaCB0aGUgaW5kaWNlIGluIGFuIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdGhlIG1hdGVyaWFsIGlzIG5vdCB1c2VkIGZvciBhbm90aGVyIG1lc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChfaW5kZXggPSBtYXRlcmlhbFRvVXNlLmluZGV4T2YobWF0ZXJpYWxzRnJvbU1UTEZpbGUubWF0ZXJpYWxzW25dLm5hbWUsIHN0YXJ0SW5kZXgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW5kaWNlcy5wdXNoKF9pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gX2luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lmIHRoZSBtYXRlcmlhbCBpcyBub3QgdXNlZCBkaXNwb3NlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaW5kZXggPT09IC0xICYmIF9pbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9JZiB0aGUgbWF0ZXJpYWwgaXMgbm90IG5lZWRlZCwgcmVtb3ZlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbHNGcm9tTVRMRmlsZS5tYXRlcmlhbHNbbl0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbyA9IDA7IG8gPCBfaW5kaWNlcy5sZW5ndGg7IG8rKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQXBwbHkgdGhlIG1hdGVyaWFsIHRvIHRoZSBNZXNoIGZvciBlYWNoIG1lc2ggd2l0aCB0aGUgbWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gYmFieWxvbk1lc2hlc0FycmF5W19pbmRpY2VzW29dXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG1hdGVyaWFsc0Zyb21NVExGaWxlLm1hdGVyaWFsc1tuXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWVzaC5nZXRUb3RhbEluZGljZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBpbmRpY2VzLCB3ZSBuZWVkIHRvIHR1cm4gb24gcG9pbnQgY2xvdWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwucG9pbnRzQ2xvdWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihgRXJyb3IgcHJvY2Vzc2luZyBNVEwgZmlsZTogJyR7ZmlsZVRvTG9hZH0nYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLm1hdGVyaWFsTG9hZGluZ0ZhaWxzU2lsZW50bHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocGF0aE9mRmlsZTogc3RyaW5nLCBleGNlcHRpb24/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYEVycm9yIGRvd25sb2FkaW5nIE1UTCBmaWxlOiAnJHtmaWxlVG9Mb2FkfSdgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5tYXRlcmlhbExvYWRpbmdGYWlsc1NpbGVudGx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXhjZXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1JldHVybiBhbiBhcnJheSB3aXRoIGFsbCBNZXNoXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG10bFByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNMaW5lID0gKG1lc2g6IEFic3RyYWN0TWVzaCkgPT4gQm9vbGVhbihtZXNoLl9pbnRlcm5hbE1ldGFkYXRhPy5bXCJfaXNMaW5lXCJdID8/IGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgbWVzaCwgZGV0ZXJtaW5lIGlmIGl0IGlzIGEgbGluZSBtZXNoLCBjbG9uZSBvciBtb2RpZnkgdGhlIG1hdGVyaWFsIHRvIGxpbmUgcmVuZGVyaW5nLlxyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaGVzQXJyYXkuZm9yRWFjaCgobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTGluZShtZXNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXQgPSBtZXNoLm1hdGVyaWFsID8/IG5ldyBTdGFuZGFyZE1hdGVyaWFsKG1lc2gubmFtZSArIFwiX2xpbmVcIiwgc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGFub3RoZXIgbWVzaCBpcyB1c2luZyB0aGlzIG1hdGVyaWFsIGFuZCBpdCBpcyBub3QgYSBsaW5lIHRoZW4gd2UgbmVlZCB0byBjbG9uZSBpdC5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZWVkQ2xvbmUgPSBtYXQuZ2V0QmluZGVkTWVzaGVzKCkuZmlsdGVyKChlKSA9PiAhaXNMaW5lKGUpKS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWVkQ2xvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ID0gbWF0LmNsb25lKG1hdC5uYW1lICsgXCJfbGluZVwiKSA/PyBtYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1hdC53aXJlZnJhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc2gubWF0ZXJpYWwgPSBtYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc2guX2ludGVybmFsTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzaC5faW50ZXJuYWxNZXRhZGF0YVtcIl9pc0xpbmVcIl0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uTWVzaGVzQXJyYXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQWRkIHRoaXMgbG9hZGVyIGludG8gdGhlIHJlZ2lzdGVyIHBsdWdpblxyXG5SZWdpc3RlclNjZW5lTG9hZGVyUGx1Z2luKG5ldyBPQkpGaWxlTG9hZGVyKCkpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvYXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tIFwiY29yZS9NZXNoZXMvZ2VvbWV0cnlcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IFZlcnRleERhdGEgfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaC52ZXJ0ZXhEYXRhXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBPQkpMb2FkaW5nT3B0aW9ucyB9IGZyb20gXCIuL29iakxvYWRpbmdPcHRpb25zXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcblxyXG50eXBlIE1lc2hPYmplY3QgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpbmRpY2VzOiBOdWxsYWJsZTxBcnJheTxudW1iZXI+PjtcclxuICAgIHBvc2l0aW9uczogTnVsbGFibGU8QXJyYXk8bnVtYmVyPj47XHJcbiAgICBub3JtYWxzOiBOdWxsYWJsZTxBcnJheTxudW1iZXI+PjtcclxuICAgIGNvbG9yczogTnVsbGFibGU8QXJyYXk8bnVtYmVyPj47XHJcbiAgICB1dnM6IE51bGxhYmxlPEFycmF5PG51bWJlcj4+O1xyXG4gICAgbWF0ZXJpYWxOYW1lOiBzdHJpbmc7XHJcbiAgICBkaXJlY3RNYXRlcmlhbD86IE51bGxhYmxlPE1hdGVyaWFsPjtcclxuICAgIGlzT2JqZWN0OiBib29sZWFuOyAvLyBJZiB0aGUgZW50aXR5IGlzIGRlZmluZWQgYXMgYW4gb2JqZWN0IChcIm9cIiksIG9yIGdyb3VwIChcImdcIilcclxuICAgIF9iYWJ5bG9uTWVzaD86IEFic3RyYWN0TWVzaDsgLy8gVGhlIGNvcnJlc3BvbmRpbmcgQmFieWxvbiBtZXNoXHJcbiAgICBoYXNMaW5lcz86IGJvb2xlYW47IC8vIElmIHRoZSBtZXNoIGhhcyBsaW5lc1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gbG9hZCBtZXNoIGRhdGEgZnJvbSBPQkogY29udGVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNvbGlkUGFyc2VyIHtcclxuICAgIC8vIERlc2NyaXB0b3JcclxuICAgIC8qKiBPYmplY3QgZGVzY3JpcHRvciAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPYmplY3REZXNjcmlwdG9yID0gL15vLztcclxuICAgIC8qKiBHcm91cCBkZXNjcmlwdG9yICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdyb3VwRGVzY3JpcHRvciA9IC9eZy87XHJcbiAgICAvKiogTWF0ZXJpYWwgbGliIGRlc2NyaXB0b3IgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTXRsTGliR3JvdXBEZXNjcmlwdG9yID0gL15tdGxsaWIgLztcclxuICAgIC8qKiBVc2UgYSBtYXRlcmlhbCBkZXNjcmlwdG9yICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVzZU10bERlc2NyaXB0b3IgPSAvXnVzZW10bCAvO1xyXG4gICAgLyoqIFNtb290aCBkZXNjcmlwdG9yICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNtb290aERlc2NyaXB0b3IgPSAvXnMgLztcclxuXHJcbiAgICAvLyBQYXR0ZXJuc1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSB2ZXJ0ZXggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVmVydGV4UGF0dGVybiA9IC9edihcXHMrW1xcZHwufCt8XFwtfGV8RV0rKXszLDd9LztcclxuICAgIC8qKiBQYXR0ZXJuIHVzZWQgdG8gZGV0ZWN0IGEgbm9ybWFsICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE5vcm1hbFBhdHRlcm4gPSAvXnZuKFxccytbXFxkfC58K3xcXC18ZXxFXSspKCArW1xcZHwufCt8XFwtfGV8RV0rKSggK1tcXGR8LnwrfFxcLXxlfEVdKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBVViBzZXQgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVVZQYXR0ZXJuID0gL152dChcXHMrW1xcZHwufCt8XFwtfGV8RV0rKSggK1tcXGR8LnwrfFxcLXxlfEVdKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBmaXJzdCBraW5kIG9mIGZhY2UgKGYgdmVydGV4IHZlcnRleCB2ZXJ0ZXgpICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZhY2VQYXR0ZXJuMSA9IC9eZlxccysoKFtcXGRdezEsfVtcXHNdPyl7Myx9KSsvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBzZWNvbmQga2luZCBvZiBmYWNlIChmIHZlcnRleC91dnMgdmVydGV4L3V2cyB2ZXJ0ZXgvdXZzKSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGYWNlUGF0dGVybjIgPSAvXmZcXHMrKCgoW1xcZF17MSx9XFwvW1xcZF17MSx9W1xcc10/KXszLH0pKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSB0aGlyZCBraW5kIG9mIGZhY2UgKGYgdmVydGV4L3V2cy9ub3JtYWwgdmVydGV4L3V2cy9ub3JtYWwgdmVydGV4L3V2cy9ub3JtYWwpICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZhY2VQYXR0ZXJuMyA9IC9eZlxccysoKChbXFxkXXsxLH1cXC9bXFxkXXsxLH1cXC9bXFxkXXsxLH1bXFxzXT8pezMsfSkrKS87XHJcbiAgICAvKiogUGF0dGVybiB1c2VkIHRvIGRldGVjdCBhIGZvdXJ0aCBraW5kIG9mIGZhY2UgKGYgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWwpKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRmFjZVBhdHRlcm40ID0gL15mXFxzKygoKFtcXGRdezEsfVxcL1xcL1tcXGRdezEsfVtcXHNdPyl7Myx9KSspLztcclxuICAgIC8qKiBQYXR0ZXJuIHVzZWQgdG8gZGV0ZWN0IGEgZmlmdGgga2luZCBvZiBmYWNlIChmIC12ZXJ0ZXgvLXV2cy8tbm9ybWFsIC12ZXJ0ZXgvLXV2cy8tbm9ybWFsIC12ZXJ0ZXgvLXV2cy8tbm9ybWFsKSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGYWNlUGF0dGVybjUgPSAvXmZcXHMrKCgoLVtcXGRdezEsfVxcLy1bXFxkXXsxLH1cXC8tW1xcZF17MSx9W1xcc10/KXszLH0pKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBsaW5lKGwgdmVydGV4IHZlcnRleCkgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTGluZVBhdHRlcm4xID0gL15sXFxzKygoW1xcZF17MSx9W1xcc10/KXsyLH0pKy87XHJcbiAgICAvKiogUGF0dGVybiB1c2VkIHRvIGRldGVjdCBhIHNlY29uZCBraW5kIG9mIGxpbmUgKGwgdmVydGV4L3V2cyB2ZXJ0ZXgvdXZzKSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMaW5lUGF0dGVybjIgPSAvXmxcXHMrKCgoW1xcZF17MSx9XFwvW1xcZF17MSx9W1xcc10/KXsyLH0pKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSB0aGlyZCBraW5kIG9mIGxpbmUgKGwgdmVydGV4L3V2cy9ub3JtYWwgdmVydGV4L3V2cy9ub3JtYWwpICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExpbmVQYXR0ZXJuMyA9IC9ebFxccysoKChbXFxkXXsxLH1cXC9bXFxkXXsxLH1cXC9bXFxkXXsxLH1bXFxzXT8pezIsfSkrKS87XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGluZ09wdGlvbnM6IE9CSkxvYWRpbmdPcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25zOiBBcnJheTxWZWN0b3IzPiA9IFtdOyAvL3ZhbHVlcyBmb3IgdGhlIHBvc2l0aW9ucyBvZiB2ZXJ0aWNlc1xyXG4gICAgcHJpdmF0ZSBfbm9ybWFsczogQXJyYXk8VmVjdG9yMz4gPSBbXTsgLy9WYWx1ZXMgZm9yIHRoZSBub3JtYWxzXHJcbiAgICBwcml2YXRlIF91dnM6IEFycmF5PFZlY3RvcjI+ID0gW107IC8vVmFsdWVzIGZvciB0aGUgdGV4dHVyZXNcclxuICAgIHByaXZhdGUgX2NvbG9yczogQXJyYXk8Q29sb3I0PiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfZXh0Q29sb3JzOiBBcnJheTxDb2xvcjQ+ID0gW107IC8vRXh0ZW5zaW9uIGNvbG9yXHJcbiAgICBwcml2YXRlIF9tZXNoZXNGcm9tT2JqOiBBcnJheTxNZXNoT2JqZWN0PiA9IFtdOyAvL1ttZXNoXSBDb250YWlucyBhbGwgdGhlIG9iaiBtZXNoZXNcclxuICAgIHByaXZhdGUgX2hhbmRsZWRNZXNoOiBNZXNoT2JqZWN0OyAvL1RoZSBjdXJyZW50IG1lc2ggb2YgbWVzaGVzIGFycmF5XHJcbiAgICBwcml2YXRlIF9pbmRpY2VzRm9yQmFieWxvbjogQXJyYXk8bnVtYmVyPiA9IFtdOyAvL1RoZSBsaXN0IG9mIGluZGljZXMgZm9yIFZlcnRleERhdGFcclxuICAgIHByaXZhdGUgX3dyYXBwZWRQb3NpdGlvbkZvckJhYnlsb246IEFycmF5PFZlY3RvcjM+ID0gW107IC8vVGhlIGxpc3Qgb2YgcG9zaXRpb24gaW4gdmVjdG9yc1xyXG4gICAgcHJpdmF0ZSBfd3JhcHBlZFV2c0ZvckJhYnlsb246IEFycmF5PFZlY3RvcjI+ID0gW107IC8vQXJyYXkgd2l0aCBhbGwgdmFsdWUgb2YgdXZzIHRvIG1hdGNoIHdpdGggdGhlIGluZGljZXNcclxuICAgIHByaXZhdGUgX3dyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uOiBBcnJheTxDb2xvcjQ+ID0gW107IC8vIEFycmF5IHdpdGggYWxsIGNvbG9yIHZhbHVlcyB0byBtYXRjaCB3aXRoIHRoZSBpbmRpY2VzXHJcbiAgICBwcml2YXRlIF93cmFwcGVkTm9ybWFsc0ZvckJhYnlsb246IEFycmF5PFZlY3RvcjM+ID0gW107IC8vQXJyYXkgd2l0aCBhbGwgdmFsdWUgb2Ygbm9ybWFscyB0byBtYXRjaCB3aXRoIHRoZSBpbmRpY2VzXHJcbiAgICBwcml2YXRlIF90dXBsZVBvc05vcm06IEFycmF5PHsgbm9ybWFsczogQXJyYXk8bnVtYmVyPjsgaWR4OiBBcnJheTxudW1iZXI+OyB1djogQXJyYXk8bnVtYmVyPiB9PiA9IFtdOyAvL0NyZWF0ZSBhIHR1cGxlIHdpdGggaW5kaWNlIG9mIFBvc2l0aW9uLCBOb3JtYWwsIFVWICBbcG9zLCBub3JtLCB1dnNdXHJcbiAgICBwcml2YXRlIF9jdXJQb3NpdGlvbkluSW5kaWNlcyA9IDA7XHJcbiAgICBwcml2YXRlIF9oYXNNZXNoZXM6IGJvb2xlYW4gPSBmYWxzZTsgLy9NZXNoZXMgYXJlIGRlZmluZWQgaW4gdGhlIGZpbGVcclxuICAgIHByaXZhdGUgX3Vud3JhcHBlZFBvc2l0aW9uc0ZvckJhYnlsb246IEFycmF5PG51bWJlcj4gPSBbXTsgLy9WYWx1ZSBvZiBwb3NpdGlvbkZvckJhYnlsb24gdy9vIFZlY3RvcjMoKSBbeCx5LHpdXHJcbiAgICBwcml2YXRlIF91bndyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uOiBBcnJheTxudW1iZXI+ID0gW107IC8vIFZhbHVlIG9mIGNvbG9yRm9yQmFieWxvbiB3L28gQ29sb3I0KCkgW3IsZyxiLGFdXHJcbiAgICBwcml2YXRlIF91bndyYXBwZWROb3JtYWxzRm9yQmFieWxvbjogQXJyYXk8bnVtYmVyPiA9IFtdOyAvL1ZhbHVlIG9mIG5vcm1hbHNGb3JCYWJ5bG9uIHcvbyBWZWN0b3IzKCkgIFt4LHksel1cclxuICAgIHByaXZhdGUgX3Vud3JhcHBlZFVWRm9yQmFieWxvbjogQXJyYXk8bnVtYmVyPiA9IFtdOyAvL1ZhbHVlIG9mIHV2c0ZvckJhYnlsb24gdy9vIFZlY3RvcjMoKSAgICAgIFt4LHksel1cclxuICAgIHByaXZhdGUgX3RyaWFuZ2xlczogQXJyYXk8c3RyaW5nPiA9IFtdOyAvL0luZGljZXMgZnJvbSBuZXcgdHJpYW5nbGVzIGNvbWluZyBmcm9tIHBvbHlnb25zXHJcbiAgICBwcml2YXRlIF9tYXRlcmlhbE5hbWVGcm9tT2JqOiBzdHJpbmcgPSBcIlwiOyAvL1RoZSBuYW1lIG9mIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICBwcml2YXRlIF9vYmpNZXNoTmFtZTogc3RyaW5nID0gXCJcIjsgLy9UaGUgbmFtZSBvZiB0aGUgY3VycmVudCBvYmogbWVzaFxyXG4gICAgcHJpdmF0ZSBfaW5jcmVtZW50OiBudW1iZXIgPSAxOyAvL0lkIGZvciBtZXNoZXMgY3JlYXRlZCBieSB0aGUgbXVsdGltYXRlcmlhbFxyXG4gICAgcHJpdmF0ZSBfaXNGaXJzdE1hdGVyaWFsOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2dyYXlDb2xvciA9IG5ldyBDb2xvcjQoMC41LCAwLjUsIDAuNSwgMSk7XHJcbiAgICBwcml2YXRlIF9tYXRlcmlhbFRvVXNlOiBzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgX2JhYnlsb25NZXNoZXNBcnJheTogQXJyYXk8TWVzaD47XHJcbiAgICBwcml2YXRlIF9wdXNoVHJpYW5nbGU6IChmYWNlczogQXJyYXk8c3RyaW5nPiwgZmFjZUluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9oYW5kZWRuZXNzU2lnbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaGFzTGluZURhdGE6IGJvb2xlYW4gPSBmYWxzZTsgLy9JZiB0aGlzIG1lc2ggaGFzIGxpbmUgc2VnbWVudChsKSBkYXRhXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFNvbGlkUGFyc2VyXHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWxUb1VzZSBkZWZpbmVzIHRoZSBhcnJheSB0byBmaWxsIHdpdGggdGhlIGxpc3Qgb2YgbWF0ZXJpYWxzIHRvIHVzZSAoaXQgd2lsbCBiZSBmaWxsZWQgYnkgdGhlIHBhcnNlIGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NZXNoZXNBcnJheSBkZWZpbmVzIHRoZSBhcnJheSB0byBmaWxsIHdpdGggdGhlIGxpc3Qgb2YgbG9hZGVkIG1lc2hlcyAoaXQgd2lsbCBiZSBmaWxsZWQgYnkgdGhlIHBhcnNlIGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGxvYWRpbmdPcHRpb25zIGRlZmluZXMgdGhlIGxvYWRpbmcgb3B0aW9ucyB0byB1c2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG1hdGVyaWFsVG9Vc2U6IHN0cmluZ1tdLCBiYWJ5bG9uTWVzaGVzQXJyYXk6IEFycmF5PE1lc2g+LCBsb2FkaW5nT3B0aW9uczogT0JKTG9hZGluZ09wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbFRvVXNlID0gbWF0ZXJpYWxUb1VzZTtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uTWVzaGVzQXJyYXkgPSBiYWJ5bG9uTWVzaGVzQXJyYXk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ09wdGlvbnMgPSBsb2FkaW5nT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlYXJjaCBmb3Igb2JqIGluIHRoZSBnaXZlbiBhcnJheS5cclxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIGNoZWNrIGlmIGEgY291cGxlIG9mIGRhdGEgYWxyZWFkeSBleGlzdHMgaW4gYW4gYXJyYXkuXHJcbiAgICAgKlxyXG4gICAgICogSWYgZm91bmQsIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmb3VuZGVkIHR1cGxlIGluZGV4LiBSZXR1cm5zIC0xIGlmIG5vdCBmb3VuZFxyXG4gICAgICogQHBhcmFtIGFyciBBcnJheTx7IG5vcm1hbHM6IEFycmF5PG51bWJlcj4sIGlkeDogQXJyYXk8bnVtYmVyPiB9PlxyXG4gICAgICogQHBhcmFtIG9iaiBBcnJheTxudW1iZXI+XHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaXNJbkFycmF5KGFycjogQXJyYXk8eyBub3JtYWxzOiBBcnJheTxudW1iZXI+OyBpZHg6IEFycmF5PG51bWJlcj4gfT4sIG9iajogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIGlmICghYXJyW29ialswXV0pIHtcclxuICAgICAgICAgICAgYXJyW29ialswXV0gPSB7IG5vcm1hbHM6IFtdLCBpZHg6IFtdIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkeCA9IGFycltvYmpbMF1dLm5vcm1hbHMuaW5kZXhPZihvYmpbMV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaWR4ID09PSAtMSA/IC0xIDogYXJyW29ialswXV0uaWR4W2lkeF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNJbkFycmF5VVYoYXJyOiBBcnJheTx7IG5vcm1hbHM6IEFycmF5PG51bWJlcj47IGlkeDogQXJyYXk8bnVtYmVyPjsgdXY6IEFycmF5PG51bWJlcj4gfT4sIG9iajogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIGlmICghYXJyW29ialswXV0pIHtcclxuICAgICAgICAgICAgYXJyW29ialswXV0gPSB7IG5vcm1hbHM6IFtdLCBpZHg6IFtdLCB1djogW10gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWR4ID0gYXJyW29ialswXV0ubm9ybWFscy5pbmRleE9mKG9ialsxXSk7XHJcblxyXG4gICAgICAgIGlmIChpZHggIT0gMSAmJiBvYmpbMl0gPT09IGFycltvYmpbMF1dLnV2W2lkeF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycltvYmpbMF1dLmlkeFtpZHhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHNldCB0aGUgZGF0YSBmb3IgZWFjaCB0cmlhbmdsZS5cclxuICAgICAqIERhdGEgYXJlIHBvc2l0aW9uLCBub3JtYWxzIGFuZCB1dnNcclxuICAgICAqIElmIGEgdHVwbGUgb2YgKHBvc2l0aW9uLCBub3JtYWwpIGlzIG5vdCBzZXQsIGFkZCB0aGUgZGF0YSBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIGFycmF5XHJcbiAgICAgKiBJZiB0aGUgdHVwbGUgYWxyZWFkeSBleGlzdCwgYWRkIG9ubHkgdGhlaXIgaW5kaWNlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGluZGljZVBvc2l0aW9uRnJvbU9iaiBJbnRlZ2VyIFRoZSBpbmRleCBpbiBwb3NpdGlvbnMgYXJyYXlcclxuICAgICAqIEBwYXJhbSBpbmRpY2VVdnNGcm9tT2JqIEludGVnZXIgVGhlIGluZGV4IGluIHV2cyBhcnJheVxyXG4gICAgICogQHBhcmFtIGluZGljZU5vcm1hbEZyb21PYmogSW50ZWdlciBUaGUgaW5kZXggaW4gbm9ybWFscyBhcnJheVxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uVmVjdG9yRnJvbU9CSiBWZWN0b3IzIFRoZSB2YWx1ZSBvZiBwb3NpdGlvbiBhdCBpbmRleCBvYmpJbmRpY2VcclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlVmVjdG9yRnJvbU9CSiBWZWN0b3IzIFRoZSB2YWx1ZSBvZiB1dnNcclxuICAgICAqIEBwYXJhbSBub3JtYWxzVmVjdG9yRnJvbU9CSiBWZWN0b3IzIFRoZSB2YWx1ZSBvZiBub3JtYWxzIGF0IGluZGV4IG9iak5vcm1hbGVcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvbkNvbG9yc0Zyb21PQkpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2V0RGF0YShcclxuICAgICAgICBpbmRpY2VQb3NpdGlvbkZyb21PYmo6IG51bWJlcixcclxuICAgICAgICBpbmRpY2VVdnNGcm9tT2JqOiBudW1iZXIsXHJcbiAgICAgICAgaW5kaWNlTm9ybWFsRnJvbU9iajogbnVtYmVyLFxyXG4gICAgICAgIHBvc2l0aW9uVmVjdG9yRnJvbU9CSjogVmVjdG9yMyxcclxuICAgICAgICB0ZXh0dXJlVmVjdG9yRnJvbU9CSjogVmVjdG9yMixcclxuICAgICAgICBub3JtYWxzVmVjdG9yRnJvbU9CSjogVmVjdG9yMyxcclxuICAgICAgICBwb3NpdGlvbkNvbG9yc0Zyb21PQko/OiBDb2xvcjRcclxuICAgICkge1xyXG4gICAgICAgIC8vQ2hlY2sgaWYgdGhpcyB0dXBsZSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbGlzdCBvZiB0dXBsZXNcclxuICAgICAgICBsZXQgX2luZGV4OiBudW1iZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLm9wdGltaXplV2l0aFVWKSB7XHJcbiAgICAgICAgICAgIF9pbmRleCA9IHRoaXMuX2lzSW5BcnJheVVWKHRoaXMuX3R1cGxlUG9zTm9ybSwgW2luZGljZVBvc2l0aW9uRnJvbU9iaiwgaW5kaWNlTm9ybWFsRnJvbU9iaiwgaW5kaWNlVXZzRnJvbU9ial0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9pbmRleCA9IHRoaXMuX2lzSW5BcnJheSh0aGlzLl90dXBsZVBvc05vcm0sIFtpbmRpY2VQb3NpdGlvbkZyb21PYmosIGluZGljZU5vcm1hbEZyb21PYmpdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vSWYgaXQgbm90IGV4aXN0c1xyXG4gICAgICAgIGlmIChfaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vQWRkIGFuIG5ldyBpbmRpY2UuXHJcbiAgICAgICAgICAgIC8vVGhlIGFycmF5IG9mIGluZGljZXMgaXMgb25seSBhbiBhcnJheSB3aXRoIGhpcyBsZW5ndGggZXF1YWwgdG8gdGhlIG51bWJlciBvZiB0cmlhbmdsZXMgLSAxLlxyXG4gICAgICAgICAgICAvL1dlIGFkZCB2ZXJ0aWNlcyBkYXRhIGluIHRoaXMgb3JkZXJcclxuICAgICAgICAgICAgdGhpcy5faW5kaWNlc0ZvckJhYnlsb24ucHVzaCh0aGlzLl93cmFwcGVkUG9zaXRpb25Gb3JCYWJ5bG9uLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIC8vUHVzaCB0aGUgcG9zaXRpb24gb2YgdmVydGljZSBmb3IgQmFieWxvblxyXG4gICAgICAgICAgICAvL0VhY2ggZWxlbWVudCBpcyBhIFZlY3RvcjMoeCx5LHopXHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRQb3NpdGlvbkZvckJhYnlsb24ucHVzaChwb3NpdGlvblZlY3RvckZyb21PQkopO1xyXG4gICAgICAgICAgICAvL1B1c2ggdGhlIHV2cyBmb3IgQmFieWxvblxyXG4gICAgICAgICAgICAvL0VhY2ggZWxlbWVudCBpcyBhIFZlY3RvcjIodSx2KVxyXG4gICAgICAgICAgICAvL0lmIHRoZSBVVnMgYXJlIG1pc3NpbmcsIHNldCAodSx2KT0oMCwwKVxyXG4gICAgICAgICAgICB0ZXh0dXJlVmVjdG9yRnJvbU9CSiA9IHRleHR1cmVWZWN0b3JGcm9tT0JKID8/IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLl93cmFwcGVkVXZzRm9yQmFieWxvbi5wdXNoKHRleHR1cmVWZWN0b3JGcm9tT0JKKTtcclxuICAgICAgICAgICAgLy9QdXNoIHRoZSBub3JtYWxzIGZvciBCYWJ5bG9uXHJcbiAgICAgICAgICAgIC8vRWFjaCBlbGVtZW50IGlzIGEgVmVjdG9yMyh4LHkseilcclxuICAgICAgICAgICAgdGhpcy5fd3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uLnB1c2gobm9ybWFsc1ZlY3RvckZyb21PQkopO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uQ29sb3JzRnJvbU9CSiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvL1B1c2ggdGhlIGNvbG9ycyBmb3IgQmFieWxvblxyXG4gICAgICAgICAgICAgICAgLy9FYWNoIGVsZW1lbnQgaXMgYSBCQUJZTE9OLkNvbG9yNChyLGcsYixhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZENvbG9yc0ZvckJhYnlsb24ucHVzaChwb3NpdGlvbkNvbG9yc0Zyb21PQkopO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0FkZCB0aGUgdHVwbGUgaW4gdGhlIGNvbXBhcmlzb24gbGlzdFxyXG4gICAgICAgICAgICB0aGlzLl90dXBsZVBvc05vcm1baW5kaWNlUG9zaXRpb25Gcm9tT2JqXS5ub3JtYWxzLnB1c2goaW5kaWNlTm9ybWFsRnJvbU9iaik7XHJcbiAgICAgICAgICAgIHRoaXMuX3R1cGxlUG9zTm9ybVtpbmRpY2VQb3NpdGlvbkZyb21PYmpdLmlkeC5wdXNoKHRoaXMuX2N1clBvc2l0aW9uSW5JbmRpY2VzKyspO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMub3B0aW1pemVXaXRoVVYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3R1cGxlUG9zTm9ybVtpbmRpY2VQb3NpdGlvbkZyb21PYmpdLnV2LnB1c2goaW5kaWNlVXZzRnJvbU9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1RoZSB0dXBsZSBhbHJlYWR5IGV4aXN0c1xyXG4gICAgICAgICAgICAvL0FkZCB0aGUgaW5kZXggb2YgdGhlIGFscmVhZHkgZXhpc3RpbmcgdHVwbGVcclxuICAgICAgICAgICAgLy9BdCB0aGlzIGluZGV4IHdlIGNhbiBnZXQgdGhlIHZhbHVlIG9mIHBvc2l0aW9uLCBub3JtYWwsIGNvbG9yIGFuZCB1dnMgb2YgdmVydGV4XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGljZXNGb3JCYWJ5bG9uLnB1c2goX2luZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2Zvcm0gVmVjdG9yKCkgYW5kIEJBQllMT04uQ29sb3IoKSBvYmplY3RzIGludG8gbnVtYmVycyBpbiBhbiBhcnJheVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF91bndyYXBEYXRhKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vRXZlcnkgYXJyYXkgaGFzIHRoZSBzYW1lIGxlbmd0aFxyXG4gICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHRoaXMuX3dyYXBwZWRQb3NpdGlvbkZvckJhYnlsb24ubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICAgICAgICAgIC8vUHVzaCB0aGUgeCwgeSwgeiB2YWx1ZXMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSB1bndyYXBwZWQgYXJyYXlcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZFBvc2l0aW9uc0ZvckJhYnlsb24ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93cmFwcGVkUG9zaXRpb25Gb3JCYWJ5bG9uW2xdLnggKiB0aGlzLl9oYW5kZWRuZXNzU2lnbixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93cmFwcGVkUG9zaXRpb25Gb3JCYWJ5bG9uW2xdLnksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZFBvc2l0aW9uRm9yQmFieWxvbltsXS56XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW53cmFwcGVkTm9ybWFsc0ZvckJhYnlsb24ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93cmFwcGVkTm9ybWFsc0ZvckJhYnlsb25bbF0ueCAqIHRoaXMuX2hhbmRlZG5lc3NTaWduLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyYXBwZWROb3JtYWxzRm9yQmFieWxvbltsXS55LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyYXBwZWROb3JtYWxzRm9yQmFieWxvbltsXS56XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZFVWRm9yQmFieWxvbi5wdXNoKHRoaXMuX3dyYXBwZWRVdnNGb3JCYWJ5bG9uW2xdLngsIHRoaXMuX3dyYXBwZWRVdnNGb3JCYWJ5bG9uW2xdLnkpOyAvL3ogaXMgYW4gb3B0aW9uYWwgdmFsdWUgbm90IHN1cHBvcnRlZCBieSBCQUJZTE9OXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMuaW1wb3J0VmVydGV4Q29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9QdXNoIHRoZSByLCBnLCBiLCBhIHZhbHVlcyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIHVud3JhcHBlZCBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZENvbG9yc0ZvckJhYnlsb24ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZENvbG9yc0ZvckJhYnlsb25bbF0ucixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZENvbG9yc0ZvckJhYnlsb25bbF0uZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZENvbG9yc0ZvckJhYnlsb25bbF0uYixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZENvbG9yc0ZvckJhYnlsb25bbF0uYVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUmVzZXQgYXJyYXlzIGZvciB0aGUgbmV4dCBuZXcgbWVzaGVzXHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRQb3NpdGlvbkZvckJhYnlsb24ubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fd3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRVdnNGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3R1cGxlUG9zTm9ybS5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJQb3NpdGlvbkluSW5kaWNlcyA9IDA7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gdW53cmFwIGRhdGEgd2hpbGUgcGFyc2luZyBPQkogZGF0YS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyaWFuZ2xlcyBmcm9tIHBvbHlnb25zXHJcbiAgICAgKiBJdCBpcyBpbXBvcnRhbnQgdG8gbm90aWNlIHRoYXQgYSB0cmlhbmdsZSBpcyBhIHBvbHlnb25cclxuICAgICAqIFdlIGdldCA1IHBhdHRlcm5zIG9mIGZhY2UgZGVmaW5lZCBpbiBPQkogRmlsZSA6XHJcbiAgICAgKiBmYWNlUGF0dGVybjEgPSBbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjIgPSBbXCIxLzFcIixcIjIvMlwiLFwiMy8zXCIsXCI0LzRcIixcIjUvNVwiLFwiNi82XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjMgPSBbXCIxLzEvMVwiLFwiMi8yLzJcIixcIjMvMy8zXCIsXCI0LzQvNFwiLFwiNS81LzVcIixcIjYvNi82XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjQgPSBbXCIxLy8xXCIsXCIyLy8yXCIsXCIzLy8zXCIsXCI0Ly80XCIsXCI1Ly81XCIsXCI2Ly82XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjUgPSBbXCItMS8tMS8tMVwiLFwiLTIvLTIvLTJcIixcIi0zLy0zLy0zXCIsXCItNC8tNC8tNFwiLFwiLTUvLTUvLTVcIixcIi02Ly02Ly02XCJdXHJcbiAgICAgKiBFYWNoIHBhdHRlcm4gaXMgZGl2aWRlZCBieSB0aGUgc2FtZSBtZXRob2RcclxuICAgICAqIEBwYXJhbSBmYWNlcyBBcnJheVtTdHJpbmddIFRoZSBpbmRpY2VzIG9mIGVsZW1lbnRzXHJcbiAgICAgKiBAcGFyYW0gdiBJbnRlZ2VyIFRoZSB2YXJpYWJsZSB0byBpbmNyZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0VHJpYW5nbGVzKGZhY2VzOiBBcnJheTxzdHJpbmc+LCB2OiBudW1iZXIpIHtcclxuICAgICAgICAvL1dvcmsgZm9yIGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXlcclxuICAgICAgICBmb3IgKGxldCBmYWNlSW5kZXggPSB2OyBmYWNlSW5kZXggPCBmYWNlcy5sZW5ndGggLSAxOyBmYWNlSW5kZXgrKykge1xyXG4gICAgICAgICAgICAvL0FkZCBvbiB0aGUgdHJpYW5nbGUgdmFyaWFibGUgdGhlIGluZGV4ZXMgdG8gb2J0YWluIHRyaWFuZ2xlc1xyXG4gICAgICAgICAgICB0aGlzLl9wdXNoVHJpYW5nbGUoZmFjZXMsIGZhY2VJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1Jlc3VsdCBvYnRhaW5lZCBhZnRlciAyIGl0ZXJhdGlvbnM6XHJcbiAgICAgICAgLy9QYXR0ZXJuMSA9PiB0cmlhbmdsZSA9IFtcIjFcIixcIjJcIixcIjNcIixcIjFcIixcIjNcIixcIjRcIl07XHJcbiAgICAgICAgLy9QYXR0ZXJuMiA9PiB0cmlhbmdsZSA9IFtcIjEvMVwiLFwiMi8yXCIsXCIzLzNcIixcIjEvMVwiLFwiMy8zXCIsXCI0LzRcIl07XHJcbiAgICAgICAgLy9QYXR0ZXJuMyA9PiB0cmlhbmdsZSA9IFtcIjEvMS8xXCIsXCIyLzIvMlwiLFwiMy8zLzNcIixcIjEvMS8xXCIsXCIzLzMvM1wiLFwiNC80LzRcIl07XHJcbiAgICAgICAgLy9QYXR0ZXJuNCA9PiB0cmlhbmdsZSA9IFtcIjEvLzFcIixcIjIvLzJcIixcIjMvLzNcIixcIjEvLzFcIixcIjMvLzNcIixcIjQvLzRcIl07XHJcbiAgICAgICAgLy9QYXR0ZXJuNSA9PiB0cmlhbmdsZSA9IFtcIi0xLy0xLy0xXCIsXCItMi8tMi8tMlwiLFwiLTMvLTMvLTNcIixcIi0xLy0xLy0xXCIsXCItMy8tMy8tM1wiLFwiLTQvLTQvLTRcIl07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUbyBnZXQgY29sb3IgYmV0d2VlbiBjb2xvciBhbmQgZXh0ZW5zaW9uIGNvbG9yXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggSW50ZWdlciBUaGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgaW4gdGhlIGFycmF5XHJcbiAgICAgKiBAcmV0dXJucyB2YWx1ZSBvZiB0YXJnZXQgY29sb3JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0Q29sb3IoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5pbXBvcnRWZXJ0ZXhDb2xvcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4dENvbG9yc1tpbmRleF0gPz8gdGhpcy5fY29sb3JzW2luZGV4XTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cmlhbmdsZXMgYW5kIHB1c2ggdGhlIGRhdGEgZm9yIGVhY2ggcG9seWdvbiBmb3IgdGhlIHBhdHRlcm4gMVxyXG4gICAgICogSW4gdGhpcyBwYXR0ZXJuIHdlIGdldCB2ZXJ0aWNlIHBvc2l0aW9uc1xyXG4gICAgICogQHBhcmFtIGZhY2VcclxuICAgICAqIEBwYXJhbSB2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuMShmYWNlOiBBcnJheTxzdHJpbmc+LCB2OiBudW1iZXIpIHtcclxuICAgICAgICAvL0dldCB0aGUgaW5kaWNlcyBvZiB0cmlhbmdsZXMgZm9yIGVhY2ggcG9seWdvblxyXG4gICAgICAgIHRoaXMuX2dldFRyaWFuZ2xlcyhmYWNlLCB2KTtcclxuICAgICAgICAvL0ZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIHRyaWFuZ2xlcyBhcnJheS5cclxuICAgICAgICAvL1RoaXMgdmFyIGNvdWxkIGNvbnRhaW5zIDEgdG8gYW4gaW5maW5pdHkgb2YgdHJpYW5nbGVzXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLl90cmlhbmdsZXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgLy8gU2V0IHBvc2l0aW9uIGluZGljZVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VQb3NpdGlvbkZyb21PYmogPSBwYXJzZUludCh0aGlzLl90cmlhbmdsZXNba10pIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NldERhdGEoXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VQb3NpdGlvbkZyb21PYmosXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgMCwgLy8gSW4gdGhlIHBhdHRlcm4gMSwgbm9ybWFscyBhbmQgdXZzIGFyZSBub3QgZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zW2luZGljZVBvc2l0aW9uRnJvbU9ial0sIC8vIEdldCB0aGUgdmVjdG9ycyBkYXRhXHJcbiAgICAgICAgICAgICAgICBWZWN0b3IyLlplcm8oKSxcclxuICAgICAgICAgICAgICAgIFZlY3RvcjMuVXAoKSwgLy8gQ3JlYXRlIGRlZmF1bHQgdmVjdG9yc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29sb3IoaW5kaWNlUG9zaXRpb25Gcm9tT2JqKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1Jlc2V0IHZhcmlhYmxlIGZvciB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5fdHJpYW5nbGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJpYW5nbGVzIGFuZCBwdXNoIHRoZSBkYXRhIGZvciBlYWNoIHBvbHlnb24gZm9yIHRoZSBwYXR0ZXJuIDJcclxuICAgICAqIEluIHRoaXMgcGF0dGVybiB3ZSBnZXQgdmVydGljZSBwb3NpdGlvbnMgYW5kIHV2c1xyXG4gICAgICogQHBhcmFtIGZhY2VcclxuICAgICAqIEBwYXJhbSB2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuMihmYWNlOiBBcnJheTxzdHJpbmc+LCB2OiBudW1iZXIpIHtcclxuICAgICAgICAvL0dldCB0aGUgaW5kaWNlcyBvZiB0cmlhbmdsZXMgZm9yIGVhY2ggcG9seWdvblxyXG4gICAgICAgIHRoaXMuX2dldFRyaWFuZ2xlcyhmYWNlLCB2KTtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuX3RyaWFuZ2xlcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAvL3RyaWFuZ2xlW2tdID0gXCIxLzFcIlxyXG4gICAgICAgICAgICAvL1NwbGl0IHRoZSBkYXRhIGZvciBnZXR0aW5nIHBvc2l0aW9uIGFuZCB1dlxyXG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuX3RyaWFuZ2xlc1trXS5zcGxpdChcIi9cIik7IC8vIFtcIjFcIiwgXCIxXCJdXHJcbiAgICAgICAgICAgIC8vU2V0IHBvc2l0aW9uIGluZGljZVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VQb3NpdGlvbkZyb21PYmogPSBwYXJzZUludChwb2ludFswXSkgLSAxO1xyXG4gICAgICAgICAgICAvL1NldCB1diBpbmRpY2VcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlVXZzRnJvbU9iaiA9IHBhcnNlSW50KHBvaW50WzFdKSAtIDE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlUG9zaXRpb25Gcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlVXZzRnJvbU9iaixcclxuICAgICAgICAgICAgICAgIDAsIC8vRGVmYXVsdCB2YWx1ZSBmb3Igbm9ybWFsc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zW2luZGljZVBvc2l0aW9uRnJvbU9ial0sIC8vR2V0IHRoZSB2YWx1ZXMgZm9yIGVhY2ggZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXZzW2luZGljZVV2c0Zyb21PYmpdID8/IFZlY3RvcjIuWmVybygpLFxyXG4gICAgICAgICAgICAgICAgVmVjdG9yMy5VcCgpLCAvL0RlZmF1bHQgdmFsdWUgZm9yIG5vcm1hbHNcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldENvbG9yKGluZGljZVBvc2l0aW9uRnJvbU9iailcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vUmVzZXQgdmFyaWFibGUgZm9yIHRoZSBuZXh0IGxpbmVcclxuICAgICAgICB0aGlzLl90cmlhbmdsZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cmlhbmdsZXMgYW5kIHB1c2ggdGhlIGRhdGEgZm9yIGVhY2ggcG9seWdvbiBmb3IgdGhlIHBhdHRlcm4gM1xyXG4gICAgICogSW4gdGhpcyBwYXR0ZXJuIHdlIGdldCB2ZXJ0aWNlIHBvc2l0aW9ucywgdXZzIGFuZCBub3JtYWxzXHJcbiAgICAgKiBAcGFyYW0gZmFjZVxyXG4gICAgICogQHBhcmFtIHZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm4zKGZhY2U6IEFycmF5PHN0cmluZz4sIHY6IG51bWJlcikge1xyXG4gICAgICAgIC8vR2V0IHRoZSBpbmRpY2VzIG9mIHRyaWFuZ2xlcyBmb3IgZWFjaCBwb2x5Z29uXHJcbiAgICAgICAgdGhpcy5fZ2V0VHJpYW5nbGVzKGZhY2UsIHYpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuX3RyaWFuZ2xlcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAvL3RyaWFuZ2xlW2tdID0gXCIxLzEvMVwiXHJcbiAgICAgICAgICAgIC8vU3BsaXQgdGhlIGRhdGEgZm9yIGdldHRpbmcgcG9zaXRpb24sIHV2LCBhbmQgbm9ybWFsc1xyXG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuX3RyaWFuZ2xlc1trXS5zcGxpdChcIi9cIik7IC8vIFtcIjFcIiwgXCIxXCIsIFwiMVwiXVxyXG4gICAgICAgICAgICAvLyBTZXQgcG9zaXRpb24gaW5kaWNlXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljZVBvc2l0aW9uRnJvbU9iaiA9IHBhcnNlSW50KHBvaW50WzBdKSAtIDE7XHJcbiAgICAgICAgICAgIC8vIFNldCB1diBpbmRpY2VcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlVXZzRnJvbU9iaiA9IHBhcnNlSW50KHBvaW50WzFdKSAtIDE7XHJcbiAgICAgICAgICAgIC8vIFNldCBub3JtYWwgaW5kaWNlXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljZU5vcm1hbEZyb21PYmogPSBwYXJzZUludChwb2ludFsyXSkgLSAxO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2V0RGF0YShcclxuICAgICAgICAgICAgICAgIGluZGljZVBvc2l0aW9uRnJvbU9iaixcclxuICAgICAgICAgICAgICAgIGluZGljZVV2c0Zyb21PYmosXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VOb3JtYWxGcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zW2luZGljZVBvc2l0aW9uRnJvbU9ial0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLl91dnNbaW5kaWNlVXZzRnJvbU9ial0gPz8gVmVjdG9yMi5aZXJvKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub3JtYWxzW2luZGljZU5vcm1hbEZyb21PYmpdID8/IFZlY3RvcjMuVXAoKSAvL1NldCB0aGUgdmVjdG9yIGZvciBlYWNoIGNvbXBvbmVudFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1Jlc2V0IHZhcmlhYmxlIGZvciB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5fdHJpYW5nbGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJpYW5nbGVzIGFuZCBwdXNoIHRoZSBkYXRhIGZvciBlYWNoIHBvbHlnb24gZm9yIHRoZSBwYXR0ZXJuIDRcclxuICAgICAqIEluIHRoaXMgcGF0dGVybiB3ZSBnZXQgdmVydGljZSBwb3NpdGlvbnMgYW5kIG5vcm1hbHNcclxuICAgICAqIEBwYXJhbSBmYWNlXHJcbiAgICAgKiBAcGFyYW0gdlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjQoZmFjZTogQXJyYXk8c3RyaW5nPiwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0VHJpYW5nbGVzKGZhY2UsIHYpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuX3RyaWFuZ2xlcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAvL3RyaWFuZ2xlW2tdID0gXCIxLy8xXCJcclxuICAgICAgICAgICAgLy9TcGxpdCB0aGUgZGF0YSBmb3IgZ2V0dGluZyBwb3NpdGlvbiBhbmQgbm9ybWFsc1xyXG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuX3RyaWFuZ2xlc1trXS5zcGxpdChcIi8vXCIpOyAvLyBbXCIxXCIsIFwiMVwiXVxyXG4gICAgICAgICAgICAvLyBXZSBjaGVjayBpbmRpY2VzLCBhbmQgbm9ybWFsc1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VQb3NpdGlvbkZyb21PYmogPSBwYXJzZUludChwb2ludFswXSkgLSAxO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VOb3JtYWxGcm9tT2JqID0gcGFyc2VJbnQocG9pbnRbMV0pIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NldERhdGEoXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VQb3NpdGlvbkZyb21PYmosXHJcbiAgICAgICAgICAgICAgICAxLCAvL0RlZmF1bHQgdmFsdWUgZm9yIHV2XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VOb3JtYWxGcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zW2luZGljZVBvc2l0aW9uRnJvbU9ial0sIC8vR2V0IGVhY2ggdmVjdG9yIG9mIGRhdGFcclxuICAgICAgICAgICAgICAgIFZlY3RvcjIuWmVybygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9ybWFsc1tpbmRpY2VOb3JtYWxGcm9tT2JqXSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldENvbG9yKGluZGljZVBvc2l0aW9uRnJvbU9iailcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9SZXNldCB2YXJpYWJsZSBmb3IgdGhlIG5leHQgbGluZVxyXG4gICAgICAgIHRoaXMuX3RyaWFuZ2xlcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDcmVhdGUgdHJpYW5nbGVzIGFuZCBwdXNoIHRoZSBkYXRhIGZvciBlYWNoIHBvbHlnb24gZm9yIHRoZSBwYXR0ZXJuIDNcclxuICAgICAqIEluIHRoaXMgcGF0dGVybiB3ZSBnZXQgdmVydGljZSBwb3NpdGlvbnMsIHV2cyBhbmQgbm9ybWFsc1xyXG4gICAgICogQHBhcmFtIGZhY2VcclxuICAgICAqIEBwYXJhbSB2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuNShmYWNlOiBBcnJheTxzdHJpbmc+LCB2OiBudW1iZXIpIHtcclxuICAgICAgICAvL0dldCB0aGUgaW5kaWNlcyBvZiB0cmlhbmdsZXMgZm9yIGVhY2ggcG9seWdvblxyXG4gICAgICAgIHRoaXMuX2dldFRyaWFuZ2xlcyhmYWNlLCB2KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLl90cmlhbmdsZXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgLy90cmlhbmdsZVtrXSA9IFwiLTEvLTEvLTFcIlxyXG4gICAgICAgICAgICAvL1NwbGl0IHRoZSBkYXRhIGZvciBnZXR0aW5nIHBvc2l0aW9uLCB1diwgYW5kIG5vcm1hbHNcclxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLl90cmlhbmdsZXNba10uc3BsaXQoXCIvXCIpOyAvLyBbXCItMVwiLCBcIi0xXCIsIFwiLTFcIl1cclxuICAgICAgICAgICAgLy8gU2V0IHBvc2l0aW9uIGluZGljZVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VQb3NpdGlvbkZyb21PYmogPSB0aGlzLl9wb3NpdGlvbnMubGVuZ3RoICsgcGFyc2VJbnQocG9pbnRbMF0pO1xyXG4gICAgICAgICAgICAvLyBTZXQgdXYgaW5kaWNlXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljZVV2c0Zyb21PYmogPSB0aGlzLl91dnMubGVuZ3RoICsgcGFyc2VJbnQocG9pbnRbMV0pO1xyXG4gICAgICAgICAgICAvLyBTZXQgbm9ybWFsIGluZGljZVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VOb3JtYWxGcm9tT2JqID0gdGhpcy5fbm9ybWFscy5sZW5ndGggKyBwYXJzZUludChwb2ludFsyXSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlUG9zaXRpb25Gcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlVXZzRnJvbU9iaixcclxuICAgICAgICAgICAgICAgIGluZGljZU5vcm1hbEZyb21PYmosXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3NpdGlvbnNbaW5kaWNlUG9zaXRpb25Gcm9tT2JqXSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX3V2c1tpbmRpY2VVdnNGcm9tT2JqXSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vcm1hbHNbaW5kaWNlTm9ybWFsRnJvbU9ial0sIC8vU2V0IHRoZSB2ZWN0b3IgZm9yIGVhY2ggY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRDb2xvcihpbmRpY2VQb3NpdGlvbkZyb21PYmopXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vUmVzZXQgdmFyaWFibGUgZm9yIHRoZSBuZXh0IGxpbmVcclxuICAgICAgICB0aGlzLl90cmlhbmdsZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hZGRQcmV2aW91c09iak1lc2goKSB7XHJcbiAgICAgICAgLy9DaGVjayBpZiBpdCBpcyBub3QgdGhlIGZpcnN0IG1lc2guIE90aGVyd2lzZSB3ZSBkb24ndCBoYXZlIGRhdGEuXHJcbiAgICAgICAgaWYgKHRoaXMuX21lc2hlc0Zyb21PYmoubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvL0dldCB0aGUgcHJldmlvdXMgbWVzaCBmb3IgYXBwbHlpbmcgdGhlIGRhdGEgYWJvdXQgdGhlIGZhY2VzXHJcbiAgICAgICAgICAgIC8vPT4gaW4gb2JqIGZpbGUsIGZhY2VzIGRlZmluaXRpb24gYXBwZW5kIGFmdGVyIHRoZSBuYW1lIG9mIHRoZSBtZXNoXHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoID0gdGhpcy5fbWVzaGVzRnJvbU9ialt0aGlzLl9tZXNoZXNGcm9tT2JqLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgaW50byBBcnJheSBmb3IgdGhlIG1lc2hcclxuICAgICAgICAgICAgdGhpcy5fdW53cmFwRGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLnVzZUxlZ2FjeUJlaGF2aW9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXZlcnNlIHRhYi4gT3RoZXJ3aXNlIGZhY2UgYXJlIGRpc3BsYXllZCBpbiB0aGUgd3Jvbmcgc2Vuc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5kaWNlc0ZvckJhYnlsb24ucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1NldCB0aGUgaW5mb3JtYXRpb24gZm9yIHRoZSBtZXNoXHJcbiAgICAgICAgICAgIC8vU2xpY2UgdGhlIGFycmF5IHRvIGF2b2lkIHJld3JpdGluZyBiZWNhdXNlIG9mIHRoZSBmYWN0IHRoaXMgaXMgdGhlIHNhbWUgdmFyIHdoaWNoIGJlIHJld3JpdGVkXHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLmluZGljZXMgPSB0aGlzLl9pbmRpY2VzRm9yQmFieWxvbi5zbGljZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC5wb3NpdGlvbnMgPSB0aGlzLl91bndyYXBwZWRQb3NpdGlvbnNGb3JCYWJ5bG9uLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLm5vcm1hbHMgPSB0aGlzLl91bndyYXBwZWROb3JtYWxzRm9yQmFieWxvbi5zbGljZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC51dnMgPSB0aGlzLl91bndyYXBwZWRVVkZvckJhYnlsb24uc2xpY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2guaGFzTGluZXMgPSB0aGlzLl9oYXNMaW5lRGF0YTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5pbXBvcnRWZXJ0ZXhDb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLmNvbG9ycyA9IHRoaXMuX3Vud3JhcHBlZENvbG9yc0ZvckJhYnlsb24uc2xpY2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9SZXNldCB0aGUgYXJyYXkgZm9yIHRoZSBuZXh0IG1lc2hcclxuICAgICAgICAgICAgdGhpcy5faW5kaWNlc0ZvckJhYnlsb24ubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fdW53cmFwcGVkUG9zaXRpb25zRm9yQmFieWxvbi5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl91bndyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZFVWRm9yQmFieWxvbi5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9oYXNMaW5lRGF0YSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vcHRpbWl6ZU5vcm1hbHMobWVzaDogQWJzdHJhY3RNZXNoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCk7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFscyA9IG1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kKTtcclxuICAgICAgICBjb25zdCBtYXBWZXJ0aWNlczogeyBba2V5OiBzdHJpbmddOiBudW1iZXJbXSB9ID0ge307XHJcblxyXG4gICAgICAgIGlmICghcG9zaXRpb25zIHx8ICFub3JtYWxzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aCAvIDM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gcG9zaXRpb25zW2kgKiAzICsgMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwb3NpdGlvbnNbaSAqIDMgKyAxXTtcclxuICAgICAgICAgICAgY29uc3QgeiA9IHBvc2l0aW9uc1tpICogMyArIDJdO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSB4ICsgXCJfXCIgKyB5ICsgXCJfXCIgKyB6O1xyXG5cclxuICAgICAgICAgICAgbGV0IGxzdCA9IG1hcFZlcnRpY2VzW2tleV07XHJcbiAgICAgICAgICAgIGlmICghbHN0KSB7XHJcbiAgICAgICAgICAgICAgICBsc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIG1hcFZlcnRpY2VzW2tleV0gPSBsc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbHN0LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub3JtYWwgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG1hcFZlcnRpY2VzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxzdCA9IG1hcFZlcnRpY2VzW2tleV07XHJcbiAgICAgICAgICAgIGlmIChsc3QubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHYwSWR4ID0gbHN0WzBdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdklkeCA9IGxzdFtpXTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbHNbdjBJZHggKiAzICsgMF0gKz0gbm9ybWFsc1t2SWR4ICogMyArIDBdO1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsc1t2MElkeCAqIDMgKyAxXSArPSBub3JtYWxzW3ZJZHggKiAzICsgMV07XHJcbiAgICAgICAgICAgICAgICBub3JtYWxzW3YwSWR4ICogMyArIDJdICs9IG5vcm1hbHNbdklkeCAqIDMgKyAyXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9ybWFsLmNvcHlGcm9tRmxvYXRzKG5vcm1hbHNbdjBJZHggKiAzICsgMF0sIG5vcm1hbHNbdjBJZHggKiAzICsgMV0sIG5vcm1hbHNbdjBJZHggKiAzICsgMl0pO1xyXG4gICAgICAgICAgICBub3JtYWwubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdklkeCA9IGxzdFtpXTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbHNbdklkeCAqIDMgKyAwXSA9IG5vcm1hbC54O1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsc1t2SWR4ICogMyArIDFdID0gbm9ybWFsLnk7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxzW3ZJZHggKiAzICsgMl0gPSBub3JtYWwuejtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXNoLnNldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZCwgbm9ybWFscyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0lzTGluZUVsZW1lbnQobGluZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpbmUuc3RhcnRzV2l0aChcImxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0lzT2JqZWN0RWxlbWVudChsaW5lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbGluZS5zdGFydHNXaXRoKFwib1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfSXNHcm91cEVsZW1lbnQobGluZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpbmUuc3RhcnRzV2l0aChcImdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldFpicnVzaE1SR0IobGluZTogc3RyaW5nLCBub3RQYXJzZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghbGluZS5zdGFydHNXaXRoKFwibXJnYlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZSA9IGxpbmUucmVwbGFjZShcIm1yZ2JcIiwgXCJcIikudHJpbSgpO1xyXG4gICAgICAgIC8vIGlmIGluY2x1ZGUgdmVydGV4IGNvbG9yICwgbm90IGxvYWQgbXJnYiBhbnltb3JlXHJcbiAgICAgICAgaWYgKG5vdFBhcnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvW2EtejAtOV0vZztcclxuICAgICAgICBjb25zdCByZWdBcnJheSA9IGxpbmUubWF0Y2gocmVnZXgpO1xyXG4gICAgICAgIGlmICghcmVnQXJyYXkgfHwgcmVnQXJyYXkubGVuZ3RoICUgOCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFycmF5OiBDb2xvcjRbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHJlZ0luZGV4ID0gMDsgcmVnSW5kZXggPCByZWdBcnJheS5sZW5ndGggLyA4OyByZWdJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIC8vZWFjaCBpdGVtIGlzIE1NUlJHR0JCLCBtIGlzIG1hdGVyaWFsIGluZGV4XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IG0gPSByZWdBcnJheVtyZWdJbmRleCAqIDggKyAwXSArIHJlZ0FycmF5W3JlZ0luZGV4ICogOCArIDFdO1xyXG4gICAgICAgICAgICBjb25zdCByID0gcmVnQXJyYXlbcmVnSW5kZXggKiA4ICsgMl0gKyByZWdBcnJheVtyZWdJbmRleCAqIDggKyAzXTtcclxuICAgICAgICAgICAgY29uc3QgZyA9IHJlZ0FycmF5W3JlZ0luZGV4ICogOCArIDRdICsgcmVnQXJyYXlbcmVnSW5kZXggKiA4ICsgNV07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSByZWdBcnJheVtyZWdJbmRleCAqIDggKyA2XSArIHJlZ0FycmF5W3JlZ0luZGV4ICogOCArIDddO1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKG5ldyBDb2xvcjQocGFyc2VJbnQociwgMTYpIC8gMjU1LCBwYXJzZUludChnLCAxNikgLyAyNTUsIHBhcnNlSW50KGIsIDE2KSAvIDI1NSwgMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB1c2VkIHRvIHBhcnNlIGFuIE9CSiBzdHJpbmdcclxuICAgICAqIEBwYXJhbSBtZXNoZXNOYW1lcyBkZWZpbmVzIHRoZSBsaXN0IG9mIG1lc2hlcyB0byBsb2FkIChhbGwgaWYgbm90IGRlZmluZWQpXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBkZWZpbmVzIHRoZSBPQkogc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgZGVmaW5lcyB0aGUgaG9zdGluZyBzY2VuZVxyXG4gICAgICogQHBhcmFtIGFzc2V0Q29udGFpbmVyIGRlZmluZXMgdGhlIGFzc2V0IGNvbnRhaW5lciB0byBsb2FkIGRhdGEgaW5cclxuICAgICAqIEBwYXJhbSBvbkZpbGVUb0xvYWRGb3VuZCBkZWZpbmVzIGEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGxlZCBpZiBhIE1UTCBmaWxlIGlzIGZvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYXJzZShtZXNoZXNOYW1lczogYW55LCBkYXRhOiBzdHJpbmcsIHNjZW5lOiBTY2VuZSwgYXNzZXRDb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPiwgb25GaWxlVG9Mb2FkRm91bmQ6IChmaWxlVG9Mb2FkOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICAvL01vdmUgU2FudGl0aXplIGhlcmUgdG8gZm9yYmlkIGRlbGV0ZSB6YnJ1c2ggZGF0YVxyXG4gICAgICAgIC8vIFNhbml0aXplIGRhdGFcclxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8jTVJHQi9nLCBcIm1yZ2JcIik7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvIy4qJC9nbSwgXCJcIikudHJpbSgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy51c2VMZWdhY3lCZWhhdmlvcikge1xyXG4gICAgICAgICAgICB0aGlzLl9wdXNoVHJpYW5nbGUgPSAoZmFjZXMsIGZhY2VJbmRleCkgPT4gdGhpcy5fdHJpYW5nbGVzLnB1c2goZmFjZXNbMF0sIGZhY2VzW2ZhY2VJbmRleF0sIGZhY2VzW2ZhY2VJbmRleCArIDFdKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGVkbmVzc1NpZ24gPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5fcHVzaFRyaWFuZ2xlID0gKGZhY2VzLCBmYWNlSW5kZXgpID0+IHRoaXMuX3RyaWFuZ2xlcy5wdXNoKGZhY2VzWzBdLCBmYWNlc1tmYWNlSW5kZXggKyAxXSwgZmFjZXNbZmFjZUluZGV4XSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRlZG5lc3NTaWduID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9wdXNoVHJpYW5nbGUgPSAoZmFjZXMsIGZhY2VJbmRleCkgPT4gdGhpcy5fdHJpYW5nbGVzLnB1c2goZmFjZXNbMF0sIGZhY2VzW2ZhY2VJbmRleF0sIGZhY2VzW2ZhY2VJbmRleCArIDFdKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGVkbmVzc1NpZ24gPSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNwbGl0IHRoZSBmaWxlIGludG8gbGluZXNcclxuICAgICAgICAvLyBQcmVwcm9jZXNzIGxpbmUgZGF0YVxyXG4gICAgICAgIGNvbnN0IGxpbmVzT0JKID0gZGF0YS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBjb25zdCBsaW5lTGluZXM6IHN0cmluZ1tdW10gPSBbXTtcclxuICAgICAgICBsZXQgY3VycmVudEdyb3VwOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBsaW5lTGluZXMucHVzaChjdXJyZW50R3JvdXApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzT0JKLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc09CSltpXS50cmltKCkucmVwbGFjZSgvXFxzXFxzL2csIFwiIFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbW1lbnQgb3IgbmV3TGluZVxyXG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPT09IDAgfHwgbGluZS5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFNvbGlkUGFyc2VyLl9Jc0dyb3VwRWxlbWVudChsaW5lKSB8fCBTb2xpZFBhcnNlci5fSXNPYmplY3RFbGVtZW50KGxpbmUpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXAgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxpbmVMaW5lcy5wdXNoKGN1cnJlbnRHcm91cCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChTb2xpZFBhcnNlci5fSXNMaW5lRWxlbWVudChsaW5lKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluZVZhbHVlcyA9IGxpbmUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGxpbmUgZWxlbWVudHMgd2l0aCB0d28gdmVydGljZXMgb25seVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaW5lVmFsdWVzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cC5wdXNoKGBsICR7bGluZVZhbHVlc1tpXX0gJHtsaW5lVmFsdWVzW2kgKyAxXX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cC5wdXNoKGxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsaW5lcyA9IGxpbmVMaW5lcy5mbGF0KCk7XHJcbiAgICAgICAgLy8gTG9vayBhdCBlYWNoIGxpbmVcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCkucmVwbGFjZSgvXFxzXFxzL2csIFwiIFwiKTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICAgICAgLy8gQ29tbWVudCBvciBuZXdMaW5lXHJcbiAgICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCA9PT0gMCB8fCBsaW5lLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFNvbGlkUGFyc2VyLlZlcnRleFBhdHRlcm4udGVzdChsaW5lKSkge1xyXG4gICAgICAgICAgICAgICAgLy9HZXQgaW5mb3JtYXRpb24gYWJvdXQgb25lIHBvc2l0aW9uIHBvc3NpYmxlIGZvciB0aGUgdmVydGljZXNcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxpbmUubWF0Y2goL1teIF0rL2cpITsgLy8gbWF0Y2ggd2lsbCByZXR1cm4gbm9uLW51bGwgZHVlIHRvIHBhc3NpbmcgcmVnZXggcGF0dGVyblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFZhbHVlIG9mIHJlc3VsdCB3aXRoIGxpbmU6IFwidiAxLjAgMi4wIDMuMFwiXHJcbiAgICAgICAgICAgICAgICAvLyBbXCJ2XCIsIFwiMS4wXCIsIFwiMi4wXCIsIFwiMy4wXCJdXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBWZWN0b3IzIHdpdGggdGhlIHBvc2l0aW9uIHgsIHksIHpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9ucy5wdXNoKG5ldyBWZWN0b3IzKHBhcnNlRmxvYXQocmVzdWx0WzFdKSwgcGFyc2VGbG9hdChyZXN1bHRbMl0pLCBwYXJzZUZsb2F0KHJlc3VsdFszXSkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMuaW1wb3J0VmVydGV4Q29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPj0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gcGFyc2VGbG9hdChyZXN1bHRbNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnID0gcGFyc2VGbG9hdChyZXN1bHRbNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiID0gcGFyc2VGbG9hdChyZXN1bHRbNl0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sb3JzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29sb3I0KHIgPiAxID8gciAvIDI1NSA6IHIsIGcgPiAxID8gZyAvIDI1NSA6IGcsIGIgPiAxID8gYiAvIDI1NSA6IGIsIHJlc3VsdC5sZW5ndGggPT09IDcgfHwgcmVzdWx0WzddID09PSB1bmRlZmluZWQgPyAxIDogcGFyc2VGbG9hdChyZXN1bHRbN10pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IG1heWJlIHB1c2ggTlVMTCBhbmQgaWYgYWxsIGFyZSBOVUxMIHRvIHNraXAgKGFuZCByZW1vdmUgZ3JheUNvbG9yIHZhcikuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9ycy5wdXNoKHRoaXMuX2dyYXlDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSBTb2xpZFBhcnNlci5Ob3JtYWxQYXR0ZXJuLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL0NyZWF0ZSBhIFZlY3RvcjMgd2l0aCB0aGUgbm9ybWFscyB4LCB5LCB6XHJcbiAgICAgICAgICAgICAgICAvL1ZhbHVlIG9mIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgLy8gW1widm4gMS4wIDIuMCAzLjBcIiwgXCIxLjBcIiwgXCIyLjBcIiwgXCIzLjBcIl1cclxuICAgICAgICAgICAgICAgIC8vQWRkIHRoZSBWZWN0b3IgaW4gdGhlIGxpc3Qgb2Ygbm9ybWFsc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9ybWFscy5wdXNoKG5ldyBWZWN0b3IzKHBhcnNlRmxvYXQocmVzdWx0WzFdKSwgcGFyc2VGbG9hdChyZXN1bHRbMl0pLCBwYXJzZUZsb2F0KHJlc3VsdFszXSkpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gU29saWRQYXJzZXIuVVZQYXR0ZXJuLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL0NyZWF0ZSBhIFZlY3RvcjIgd2l0aCB0aGUgbm9ybWFscyB1LCB2XHJcbiAgICAgICAgICAgICAgICAvL1ZhbHVlIG9mIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgLy8gW1widnQgMC4xIDAuMiAwLjNcIiwgXCIwLjFcIiwgXCIwLjJcIl1cclxuICAgICAgICAgICAgICAgIC8vQWRkIHRoZSBWZWN0b3IgaW4gdGhlIGxpc3Qgb2YgdXZzXHJcbiAgICAgICAgICAgICAgICB0aGlzLl91dnMucHVzaChuZXcgVmVjdG9yMihwYXJzZUZsb2F0KHJlc3VsdFsxXSkgKiB0aGlzLl9sb2FkaW5nT3B0aW9ucy5VVlNjYWxpbmcueCwgcGFyc2VGbG9hdChyZXN1bHRbMl0pICogdGhpcy5fbG9hZGluZ09wdGlvbnMuVVZTY2FsaW5nLnkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0lkZW50aWZ5IHBhdHRlcm5zIG9mIGZhY2VzXHJcbiAgICAgICAgICAgICAgICAvL0ZhY2UgY291bGQgYmUgZGVmaW5lZCBpbiBkaWZmZXJlbnQgdHlwZSBvZiBwYXR0ZXJuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IFNvbGlkUGFyc2VyLkZhY2VQYXR0ZXJuMy5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy9WYWx1ZSBvZiByZXN1bHQ6XHJcbiAgICAgICAgICAgICAgICAvL1tcImYgMS8xLzEgMi8yLzIgMy8zLzNcIiwgXCIxLzEvMSAyLzIvMiAzLzMvM1wiLi4uXVxyXG5cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGZvciB0aGlzIGZhY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuMyhcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbMV0udHJpbSgpLnNwbGl0KFwiIFwiKSwgLy8gW1wiMS8xLzFcIiwgXCIyLzIvMlwiLCBcIjMvMy8zXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gU29saWRQYXJzZXIuRmFjZVBhdHRlcm40LmV4ZWMobGluZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZhbHVlIG9mIHJlc3VsdDpcclxuICAgICAgICAgICAgICAgIC8vW1wiZiAxLy8xIDIvLzIgMy8vM1wiLCBcIjEvLzEgMi8vMiAzLy8zXCIuLi5dXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoaXMgZmFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm40KFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFsxXS50cmltKCkuc3BsaXQoXCIgXCIpLCAvLyBbXCIxLy8xXCIsIFwiMi8vMlwiLCBcIjMvLzNcIl1cclxuICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSBTb2xpZFBhcnNlci5GYWNlUGF0dGVybjUuZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vVmFsdWUgb2YgcmVzdWx0OlxyXG4gICAgICAgICAgICAgICAgLy9bXCJmIC0xLy0xLy0xIC0yLy0yLy0yIC0zLy0zLy0zXCIsIFwiLTEvLTEvLTEgLTIvLTIvLTIgLTMvLTMvLTNcIi4uLl1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0aGUgZGF0YSBmb3IgdGhpcyBmYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjUoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WzFdLnRyaW0oKS5zcGxpdChcIiBcIiksIC8vIFtcIi0xLy0xLy0xXCIsIFwiLTIvLTIvLTJcIiwgXCItMy8tMy8tM1wiXVxyXG4gICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IFNvbGlkUGFyc2VyLkZhY2VQYXR0ZXJuMi5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy9WYWx1ZSBvZiByZXN1bHQ6XHJcbiAgICAgICAgICAgICAgICAvL1tcImYgMS8xIDIvMiAzLzNcIiwgXCIxLzEgMi8yIDMvM1wiLi4uXVxyXG5cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGZvciB0aGlzIGZhY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuMihcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbMV0udHJpbSgpLnNwbGl0KFwiIFwiKSwgLy8gW1wiMS8xXCIsIFwiMi8yXCIsIFwiMy8zXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gU29saWRQYXJzZXIuRmFjZVBhdHRlcm4xLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZhbHVlIG9mIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgLy9bXCJmIDEgMiAzXCIsIFwiMSAyIDNcIi4uLl1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0aGUgZGF0YSBmb3IgdGhpcyBmYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjEoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WzFdLnRyaW0oKS5zcGxpdChcIiBcIiksIC8vIFtcIjFcIiwgXCIyXCIsIFwiM1wiXVxyXG4gICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGEgbWVzaCBvciBhbiBvYmplY3RcclxuICAgICAgICAgICAgICAgIC8vIEVhY2ggdGltZSB0aGlzIGtleXdvcmQgaXMgYW5hbHl6ZWQsIGNyZWF0ZSBhIG5ldyBPYmplY3Qgd2l0aCBhbGwgZGF0YSBmb3IgY3JlYXRpbmcgYSBiYWJ5bG9uTWVzaFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSBTb2xpZFBhcnNlci5MaW5lUGF0dGVybjEuZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vVmFsdWUgb2YgcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAvL1tcImwgMSAyXCJdXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoaXMgZmFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm4xKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFsxXS50cmltKCkuc3BsaXQoXCIgXCIpLCAvLyBbXCIxXCIsIFwiMlwiXVxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNMaW5lRGF0YSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGEgbWVzaCBvciBhbiBvYmplY3RcclxuICAgICAgICAgICAgICAgIC8vIEVhY2ggdGltZSB0aGlzIGtleXdvcmQgaXMgYW5hbHl6ZWQsIGNyZWF0ZSBhIG5ldyBPYmplY3Qgd2l0aCBhbGwgZGF0YSBmb3IgY3JlYXRpbmcgYSBiYWJ5bG9uTWVzaFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSBTb2xpZFBhcnNlci5MaW5lUGF0dGVybjIuZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vVmFsdWUgb2YgcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAvL1tcImwgMS8xIDIvMlwiXVxyXG5cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGZvciB0aGlzIGZhY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuMihcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbMV0udHJpbSgpLnNwbGl0KFwiIFwiKSwgLy8gW1wiMS8xXCIsIFwiMi8yXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hhc0xpbmVEYXRhID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgYSBtZXNoIG9yIGFuIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgLy8gRWFjaCB0aW1lIHRoaXMga2V5d29yZCBpcyBhbmFseXplZCwgY3JlYXRlIGEgbmV3IE9iamVjdCB3aXRoIGFsbCBkYXRhIGZvciBjcmVhdGluZyBhIGJhYnlsb25NZXNoXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IFNvbGlkUGFyc2VyLl9HZXRaYnJ1c2hNUkdCKGxpbmUsICF0aGlzLl9sb2FkaW5nT3B0aW9ucy5pbXBvcnRWZXJ0ZXhDb2xvcnMpKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4dENvbG9ycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSBTb2xpZFBhcnNlci5MaW5lUGF0dGVybjMuZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vVmFsdWUgb2YgcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAvL1tcImwgMS8xLzEgMi8yLzJcIl1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0aGUgZGF0YSBmb3IgdGhpcyBmYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjMoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WzFdLnRyaW0oKS5zcGxpdChcIiBcIiksIC8vIFtcIjEvMS8xXCIsIFwiMi8yLzJcIl1cclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGFzTGluZURhdGEgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlZmluZSBhIG1lc2ggb3IgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHRpbWUgdGhpcyBrZXl3b3JkIGlzIGFuYWx5emVkLCBjcmVhdGUgYSBuZXcgT2JqZWN0IHdpdGggYWxsIGRhdGEgZm9yIGNyZWF0aW5nIGEgYmFieWxvbk1lc2hcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChTb2xpZFBhcnNlci5Hcm91cERlc2NyaXB0b3IudGVzdChsaW5lKSB8fCBTb2xpZFBhcnNlci5PYmplY3REZXNjcmlwdG9yLnRlc3QobGluZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBtZXNoIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG5hbWUgb2YgdGhlIGdyb3VwLlxyXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5pdGlvbiBvZiB0aGUgbWVzaFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqTWVzaDogTWVzaE9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBsaW5lLnN1YnN0cmluZygyKS50cmltKCksIC8vU2V0IHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IG9iaiBtZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICB1dnM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsTmFtZTogdGhpcy5fbWF0ZXJpYWxOYW1lRnJvbU9iaixcclxuICAgICAgICAgICAgICAgICAgICBpc09iamVjdDogU29saWRQYXJzZXIuT2JqZWN0RGVzY3JpcHRvci50ZXN0KGxpbmUpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZFByZXZpb3VzT2JqTWVzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUHVzaCB0aGUgbGFzdCBtZXNoIGNyZWF0ZWQgd2l0aCBvbmx5IHRoZSBuYW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNoZXNGcm9tT2JqLnB1c2gob2JqTWVzaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhpcyB2YXJpYWJsZSB0byBpbmRpY2F0ZSB0aGF0IG5vdyBtZXNoZXNGcm9tT2JqIGhhcyBvYmplY3RzIGRlZmluZWQgaW5zaWRlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNNZXNoZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNGaXJzdE1hdGVyaWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luY3JlbWVudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAvL0tleXdvcmQgZm9yIGFwcGx5aW5nIGEgbWF0ZXJpYWxcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChTb2xpZFBhcnNlci5Vc2VNdGxEZXNjcmlwdG9yLnRlc3QobGluZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vR2V0IHRoZSBuYW1lIG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxOYW1lRnJvbU9iaiA9IGxpbmUuc3Vic3RyaW5nKDcpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0lmIHRoaXMgbmV3IG1hdGVyaWFsIGlzIGluIHRoZSBzYW1lIG1lc2hcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzRmlyc3RNYXRlcmlhbCB8fCAhdGhpcy5faGFzTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoZSBwcmV2aW91cyBtZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkUHJldmlvdXNPYmpNZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9DcmVhdGUgYSBuZXcgbWVzaFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iak1lc2g6IE1lc2hPYmplY3QgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NldCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBvYmogbWVzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAodGhpcy5fb2JqTWVzaE5hbWUgfHwgXCJtZXNoXCIpICsgXCJfbW1cIiArIHRoaXMuX2luY3JlbWVudC50b1N0cmluZygpLCAvL1NldCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBvYmogbWVzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dnM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbE5hbWU6IHRoaXMuX21hdGVyaWFsTmFtZUZyb21PYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09iamVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5jcmVtZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9JZiBtZXNoZXMgYXJlIGFscmVhZHkgZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc2hlc0Zyb21PYmoucHVzaChvYmpNZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNNZXNoZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhlIG1hdGVyaWFsIG5hbWUgaWYgdGhlIHByZXZpb3VzIGxpbmUgZGVmaW5lIGEgbWVzaFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNNZXNoZXMgJiYgdGhpcy5faXNGaXJzdE1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9TZXQgdGhlIG1hdGVyaWFsIG5hbWUgdG8gdGhlIHByZXZpb3VzIG1lc2ggKDEgbWF0ZXJpYWwgcGVyIG1lc2gpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzaGVzRnJvbU9ialt0aGlzLl9tZXNoZXNGcm9tT2JqLmxlbmd0aCAtIDFdLm1hdGVyaWFsTmFtZSA9IHRoaXMuX21hdGVyaWFsTmFtZUZyb21PYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNGaXJzdE1hdGVyaWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBLZXl3b3JkIGZvciBsb2FkaW5nIHRoZSBtdGwgZmlsZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFNvbGlkUGFyc2VyLk10bExpYkdyb3VwRGVzY3JpcHRvci50ZXN0KGxpbmUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIG5hbWUgb2YgbXRsIGZpbGVcclxuICAgICAgICAgICAgICAgIG9uRmlsZVRvTG9hZEZvdW5kKGxpbmUuc3Vic3RyaW5nKDcpLnRyaW0oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgc21vb3RoaW5nXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoU29saWRQYXJzZXIuU21vb3RoRGVzY3JpcHRvci50ZXN0KGxpbmUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzbW9vdGggc2hhZGluZyA9PiBhcHBseSBzbW9vdGhpbmdcclxuICAgICAgICAgICAgICAgIC8vIFRvZGF5IEkgZG9uJ3Qga25vdyBpdCB3b3JrIHdpdGggYmFieWxvbiBhbmQgd2l0aCBvYmouXHJcbiAgICAgICAgICAgICAgICAvLyBXaXRoIHRoZSBvYmogZmlsZSAgYW4gaW50ZWdlciBpcyBzZXRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vSWYgdGhlcmUgaXMgYW5vdGhlciBwb3NzaWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLkxvZyhcIlVuaGFuZGxlZCBleHByZXNzaW9uIGF0IGxpbmUgOiBcIiArIGxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEF0IHRoZSBlbmQgb2YgdGhlIGZpbGUsIGFkZCB0aGUgbGFzdCBtZXNoIGludG8gdGhlIG1lc2hlc0Zyb21PYmogYXJyYXlcclxuICAgICAgICBpZiAodGhpcy5faGFzTWVzaGVzKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgZGF0YSBmb3IgdGhlIGxhc3QgbWVzaFxyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaCA9IHRoaXMuX21lc2hlc0Zyb21PYmpbdGhpcy5fbWVzaGVzRnJvbU9iai5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy51c2VMZWdhY3lCZWhhdmlvcikge1xyXG4gICAgICAgICAgICAgICAgLy9SZXZlcnNlIGluZGljZXMgZm9yIGRpc3BsYXlpbmcgZmFjZXMgaW4gdGhlIGdvb2Qgc2Vuc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luZGljZXNGb3JCYWJ5bG9uLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9HZXQgdGhlIGdvb2QgYXJyYXlcclxuICAgICAgICAgICAgdGhpcy5fdW53cmFwRGF0YSgpO1xyXG4gICAgICAgICAgICAvL1NldCBhcnJheVxyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC5pbmRpY2VzID0gdGhpcy5faW5kaWNlc0ZvckJhYnlsb247XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLnBvc2l0aW9ucyA9IHRoaXMuX3Vud3JhcHBlZFBvc2l0aW9uc0ZvckJhYnlsb247XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLm5vcm1hbHMgPSB0aGlzLl91bndyYXBwZWROb3JtYWxzRm9yQmFieWxvbjtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2gudXZzID0gdGhpcy5fdW53cmFwcGVkVVZGb3JCYWJ5bG9uO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC5oYXNMaW5lcyA9IHRoaXMuX2hhc0xpbmVEYXRhO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMuaW1wb3J0VmVydGV4Q29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC5jb2xvcnMgPSB0aGlzLl91bndyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhbnkgbyBvciBnIGtleXdvcmQgbm90IGZvdW5kLCBjcmVhdGUgYSBtZXNoIHdpdGggYSByYW5kb20gaWRcclxuICAgICAgICBpZiAoIXRoaXMuX2hhc01lc2hlcykge1xyXG4gICAgICAgICAgICBsZXQgbmV3TWF0ZXJpYWw6IE51bGxhYmxlPFN0YW5kYXJkTWF0ZXJpYWw+ID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2luZGljZXNGb3JCYWJ5bG9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLnVzZUxlZ2FjeUJlaGF2aW9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV2ZXJzZSB0YWIgb2YgaW5kaWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGljZXNGb3JCYWJ5bG9uLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL0dldCBwb3NpdGlvbnMgbm9ybWFscyB1dnNcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcERhdGEoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIGluZGljZXMgaW4gdGhlIGZpbGUuIFdlIHdpbGwgaGF2ZSB0byBzd2l0Y2ggdG8gcG9pbnQgY2xvdWQgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBvcyBvZiB0aGlzLl9wb3NpdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91bndyYXBwZWRQb3NpdGlvbnNGb3JCYWJ5bG9uLnB1c2gocG9zLngsIHBvcy55LCBwb3Mueik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX25vcm1hbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBub3JtYWwgb2YgdGhpcy5fbm9ybWFscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91bndyYXBwZWROb3JtYWxzRm9yQmFieWxvbi5wdXNoKG5vcm1hbC54LCBub3JtYWwueSwgbm9ybWFsLnopO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdXZzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdXYgb2YgdGhpcy5fdXZzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZFVWRm9yQmFieWxvbi5wdXNoKHV2LngsIHV2LnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZXh0Q29sb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29sb3Igb2YgdGhpcy5fZXh0Q29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZENvbG9yc0ZvckJhYnlsb24ucHVzaChjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCBjb2xvci5hKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb2xvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29sb3Igb2YgdGhpcy5fY29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91bndyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uLnB1c2goY29sb3IuciwgY29sb3IuZywgY29sb3IuYiwgY29sb3IuYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9tYXRlcmlhbE5hbWVGcm9tT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbWF0ZXJpYWwgd2l0aCBwb2ludCBjbG91ZCBvblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld01hdGVyaWFsID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoR2VvbWV0cnkuUmFuZG9tSWQoKSwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdNYXRlcmlhbC5wb2ludHNDbG91ZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsTmFtZUZyb21PYmogPSBuZXdNYXRlcmlhbC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX25vcm1hbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld01hdGVyaWFsLmRpc2FibGVMaWdodGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld01hdGVyaWFsLmVtaXNzaXZlQ29sb3IgPSBDb2xvcjMuV2hpdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vU2V0IGRhdGEgZm9yIG9uZSBtZXNoXHJcbiAgICAgICAgICAgIHRoaXMuX21lc2hlc0Zyb21PYmoucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBHZW9tZXRyeS5SYW5kb21JZCgpLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlczogdGhpcy5faW5kaWNlc0ZvckJhYnlsb24sXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnM6IHRoaXMuX3Vud3JhcHBlZFBvc2l0aW9uc0ZvckJhYnlsb24sXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IHRoaXMuX3Vud3JhcHBlZENvbG9yc0ZvckJhYnlsb24sXHJcbiAgICAgICAgICAgICAgICBub3JtYWxzOiB0aGlzLl91bndyYXBwZWROb3JtYWxzRm9yQmFieWxvbixcclxuICAgICAgICAgICAgICAgIHV2czogdGhpcy5fdW53cmFwcGVkVVZGb3JCYWJ5bG9uLFxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxOYW1lOiB0aGlzLl9tYXRlcmlhbE5hbWVGcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0TWF0ZXJpYWw6IG5ld01hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgaXNPYmplY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoYXNMaW5lczogdGhpcy5faGFzTGluZURhdGEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TZXQgZGF0YSBmb3IgZWFjaCBtZXNoXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9tZXNoZXNGcm9tT2JqLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgbWVzaGVzTmFtZXMgKHN0bEZpbGVMb2FkZXIpXHJcbiAgICAgICAgICAgIGlmIChtZXNoZXNOYW1lcyAmJiB0aGlzLl9tZXNoZXNGcm9tT2JqW2pdLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNoZXNOYW1lcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc2hlc05hbWVzLmluZGV4T2YodGhpcy5fbWVzaGVzRnJvbU9ialtqXS5uYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWVzaGVzRnJvbU9ialtqXS5uYW1lICE9PSBtZXNoZXNOYW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vR2V0IHRoZSBjdXJyZW50IG1lc2hcclxuICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgd2l0aCBWZXJ0ZXhCdWZmZXIgZm9yIGVhY2ggbWVzaFxyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaCA9IHRoaXMuX21lc2hlc0Zyb21PYmpbal07XHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIGEgTWVzaCB3aXRoIHRoZSBuYW1lIG9mIHRoZSBvYmogbWVzaFxyXG5cclxuICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NZXNoID0gbmV3IE1lc2godGhpcy5fbWVzaGVzRnJvbU9ialtqXS5uYW1lLCBzY2VuZSk7XHJcbiAgICAgICAgICAgIGJhYnlsb25NZXNoLl9wYXJlbnRDb250YWluZXIgPSBhc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC5fYmFieWxvbk1lc2ggPSBiYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGdyb3VwIG1lc2gsIGl0IHNob3VsZCBoYXZlIGFuIG9iamVjdCBtZXNoIGFzIGEgcGFyZW50LiBTbyBsb29rIGZvciB0aGUgZmlyc3Qgb2JqZWN0IG1lc2ggdGhhdCBhcHBlYXJzIGJlZm9yZSBpdC5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9oYW5kbGVkTWVzaC5pc09iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IGogLSAxOyBrID49IDA7IC0taykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXNoZXNGcm9tT2JqW2tdLmlzT2JqZWN0ICYmIHRoaXMuX21lc2hlc0Zyb21PYmpba10uX2JhYnlsb25NZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLnBhcmVudCA9IHRoaXMuX21lc2hlc0Zyb21PYmpba10uX2JhYnlsb25NZXNoITtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1B1c2ggdGhlIG5hbWUgb2YgdGhlIG1hdGVyaWFsIHRvIGFuIGFycmF5XHJcbiAgICAgICAgICAgIC8vVGhpcyBpcyBpbmRpc3BlbnNhYmxlIGZvciB0aGUgaW1wb3J0TWVzaCBmdW5jdGlvblxyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbFRvVXNlLnB1c2godGhpcy5fbWVzaGVzRnJvbU9ialtqXS5tYXRlcmlhbE5hbWUpO1xyXG4gICAgICAgICAgICAvL0lmIHRoZSBtZXNoIGlzIGEgbGluZSBtZXNoXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYW5kbGVkTWVzaC5oYXNMaW5lcykge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1lc2guX2ludGVybmFsTWV0YWRhdGEgPz89IHt9O1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1lc2guX2ludGVybmFsTWV0YWRhdGFbXCJfaXNMaW5lXCJdID0gdHJ1ZTsgLy90aGlzIGlzIGEgbGluZSBtZXNoXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYW5kbGVkTWVzaC5wb3NpdGlvbnM/Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy9QdXNoIHRoZSBtZXNoIGludG8gYW4gYXJyYXlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25NZXNoZXNBcnJheS5wdXNoKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhOiBWZXJ0ZXhEYXRhID0gbmV3IFZlcnRleERhdGEoKTsgLy9UaGUgY29udGFpbmVyIGZvciB0aGUgdmFsdWVzXHJcbiAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGZvciB0aGUgYmFieWxvbk1lc2hcclxuICAgICAgICAgICAgdmVydGV4RGF0YS51dnMgPSB0aGlzLl9oYW5kbGVkTWVzaC51dnM7XHJcbiAgICAgICAgICAgIHZlcnRleERhdGEuaW5kaWNlcyA9IHRoaXMuX2hhbmRsZWRNZXNoLmluZGljZXM7XHJcbiAgICAgICAgICAgIHZlcnRleERhdGEucG9zaXRpb25zID0gdGhpcy5faGFuZGxlZE1lc2gucG9zaXRpb25zO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMuY29tcHV0ZU5vcm1hbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbHM6IEFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgICAgICAgICAgVmVydGV4RGF0YS5Db21wdXRlTm9ybWFscyh0aGlzLl9oYW5kbGVkTWVzaC5wb3NpdGlvbnMsIHRoaXMuX2hhbmRsZWRNZXNoLmluZGljZXMsIG5vcm1hbHMpO1xyXG4gICAgICAgICAgICAgICAgdmVydGV4RGF0YS5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZlcnRleERhdGEubm9ybWFscyA9IHRoaXMuX2hhbmRsZWRNZXNoLm5vcm1hbHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLmltcG9ydFZlcnRleENvbG9ycykge1xyXG4gICAgICAgICAgICAgICAgdmVydGV4RGF0YS5jb2xvcnMgPSB0aGlzLl9oYW5kbGVkTWVzaC5jb2xvcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZnJvbSB0aGUgVmVydGV4QnVmZmVyIHRvIHRoZSBjdXJyZW50IE1lc2hcclxuICAgICAgICAgICAgdmVydGV4RGF0YS5hcHBseVRvTWVzaChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5pbnZlcnRZKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5zY2FsaW5nLnkgKj0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLm9wdGltaXplTm9ybWFscykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW1pemVOb3JtYWxzKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9QdXNoIHRoZSBtZXNoIGludG8gYW4gYXJyYXlcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvbk1lc2hlc0FycmF5LnB1c2goYmFieWxvbk1lc2gpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hhbmRsZWRNZXNoLmRpcmVjdE1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5tYXRlcmlhbCA9IHRoaXMuX2hhbmRsZWRNZXNoLmRpcmVjdE1hdGVyaWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmltcG9ydCAqIGFzIExvYWRlcnMgZnJvbSBcImxvYWRlcnMvT0JKL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgR2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgR2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBMb2FkZXJzKSB7XHJcbiAgICAgICAgaWYgKCEoPGFueT5HbG9iYWxPYmplY3QpLkJBQllMT05ba2V5XSkge1xyXG4gICAgICAgICAgICAoPGFueT5HbG9iYWxPYmplY3QpLkJBQllMT05ba2V5XSA9ICg8YW55PkxvYWRlcnMpW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tIFwibG9hZGVycy9PQkovaW5kZXhcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX3Rvb2xzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgbG9hZGVycyBmcm9tIFwiQGx0cy9sb2FkZXJzL2xlZ2FjeS9sZWdhY3ktb2JqRmlsZUxvYWRlclwiO1xyXG5leHBvcnQgeyBsb2FkZXJzIH07XHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRlcnM7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==