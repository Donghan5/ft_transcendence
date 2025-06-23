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

/***/ "../../../dev/loaders/src/glTF/1.0/glTFBinaryExtension.ts":
/*!****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFBinaryExtension.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFBinaryExtension: () => (/* binding */ GLTFBinaryExtension)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoader */ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts");
/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFLoaderUtils */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts");
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");




var BinaryExtensionBufferName = "binary_glTF";
/**
 * @internal
 * @deprecated
 */
var GLTFBinaryExtension = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(GLTFBinaryExtension, _super);
    function GLTFBinaryExtension() {
        return _super.call(this, "KHR_binary_glTF") || this;
    }
    // eslint-disable-next-line no-restricted-syntax
    GLTFBinaryExtension.prototype.loadRuntimeAsync = function (scene, data, rootUrl, onSuccess) {
        var extensionsUsed = data.json.extensionsUsed;
        if (!extensionsUsed || extensionsUsed.indexOf(this.name) === -1 || !data.bin) {
            return false;
        }
        this._bin = data.bin;
        onSuccess(_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderBase.CreateRuntime(data.json, scene, rootUrl));
        return true;
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFBinaryExtension.prototype.loadBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        if (gltfRuntime.extensionsUsed.indexOf(this.name) === -1) {
            return false;
        }
        if (id !== BinaryExtensionBufferName) {
            return false;
        }
        // eslint-disable-next-line github/no-then
        this._bin.readAsync(0, this._bin.byteLength).then(onSuccess, function (error) { return onError(error.message); });
        return true;
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFBinaryExtension.prototype.loadTextureBufferAsync = function (gltfRuntime, id, onSuccess) {
        var texture = gltfRuntime.textures[id];
        var source = gltfRuntime.images[texture.source];
        if (!source.extensions || !(this.name in source.extensions)) {
            return false;
        }
        var sourceExt = source.extensions[this.name];
        var bufferView = gltfRuntime.bufferViews[sourceExt.bufferView];
        var buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__.GLTFUtils.GetBufferFromBufferView(gltfRuntime, bufferView, 0, bufferView.byteLength, _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EComponentType.UNSIGNED_BYTE);
        onSuccess(buffer);
        return true;
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFBinaryExtension.prototype.loadShaderStringAsync = function (gltfRuntime, id, onSuccess) {
        var shader = gltfRuntime.shaders[id];
        if (!shader.extensions || !(this.name in shader.extensions)) {
            return false;
        }
        var binaryExtensionShader = shader.extensions[this.name];
        var bufferView = gltfRuntime.bufferViews[binaryExtensionShader.bufferView];
        var shaderBytes = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__.GLTFUtils.GetBufferFromBufferView(gltfRuntime, bufferView, 0, bufferView.byteLength, _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EComponentType.UNSIGNED_BYTE);
        setTimeout(function () {
            var shaderString = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__.GLTFUtils.DecodeBufferToText(shaderBytes);
            onSuccess(shaderString);
        });
        return true;
    };
    return GLTFBinaryExtension;
}(_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderExtension));

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(new GLTFBinaryExtension());


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFLoader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFLoader: () => (/* binding */ GLTFLoader),
/* harmony export */   GLTFLoaderBase: () => (/* binding */ GLTFLoaderBase),
/* harmony export */   GLTFLoaderExtension: () => (/* binding */ GLTFLoaderExtension)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Engines/constants */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderUtils */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts");
/* harmony import */ var _glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glTFFileLoader */ "../../../dev/loaders/src/glTF/glTFFileLoader.ts");





























/**
 * Tokenizer. Used for shaders compatibility
 * Automatically map world, view, projection, worldViewProjection, attributes and so on
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var ETokenType;
(function (ETokenType) {
    ETokenType[ETokenType["IDENTIFIER"] = 1] = "IDENTIFIER";
    ETokenType[ETokenType["UNKNOWN"] = 2] = "UNKNOWN";
    ETokenType[ETokenType["END_OF_INPUT"] = 3] = "END_OF_INPUT";
})(ETokenType || (ETokenType = {}));
var Tokenizer = /** @class */ (function () {
    function Tokenizer(toParse) {
        this._pos = 0;
        this.currentToken = ETokenType.UNKNOWN;
        this.currentIdentifier = "";
        this.currentString = "";
        this.isLetterOrDigitPattern = /^[a-zA-Z0-9]+$/;
        this._toParse = toParse;
        this._maxPos = toParse.length;
    }
    Tokenizer.prototype.getNextToken = function () {
        if (this.isEnd()) {
            return ETokenType.END_OF_INPUT;
        }
        this.currentString = this.read();
        this.currentToken = ETokenType.UNKNOWN;
        if (this.currentString === "_" || this.isLetterOrDigitPattern.test(this.currentString)) {
            this.currentToken = ETokenType.IDENTIFIER;
            this.currentIdentifier = this.currentString;
            while (!this.isEnd() && (this.isLetterOrDigitPattern.test((this.currentString = this.peek())) || this.currentString === "_")) {
                this.currentIdentifier += this.currentString;
                this.forward();
            }
        }
        return this.currentToken;
    };
    Tokenizer.prototype.peek = function () {
        return this._toParse[this._pos];
    };
    Tokenizer.prototype.read = function () {
        return this._toParse[this._pos++];
    };
    Tokenizer.prototype.forward = function () {
        this._pos++;
    };
    Tokenizer.prototype.isEnd = function () {
        return this._pos >= this._maxPos;
    };
    return Tokenizer;
}());
/**
 * Values
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var glTFTransforms = ["MODEL", "VIEW", "PROJECTION", "MODELVIEW", "MODELVIEWPROJECTION", "JOINTMATRIX"];
var BabylonTransforms = ["world", "view", "projection", "worldView", "worldViewProjection", "mBones"];
// eslint-disable-next-line @typescript-eslint/naming-convention
var glTFAnimationPaths = ["translation", "rotation", "scale"];
var BabylonAnimationPaths = ["position", "rotationQuaternion", "scaling"];
/**
 * Parse
 * @param parsedBuffers
 * @param gltfRuntime
 */
var ParseBuffers = function (parsedBuffers, gltfRuntime) {
    for (var buf in parsedBuffers) {
        var parsedBuffer = parsedBuffers[buf];
        gltfRuntime.buffers[buf] = parsedBuffer;
        gltfRuntime.buffersCount++;
    }
};
var ParseShaders = function (parsedShaders, gltfRuntime) {
    for (var sha in parsedShaders) {
        var parsedShader = parsedShaders[sha];
        gltfRuntime.shaders[sha] = parsedShader;
        gltfRuntime.shaderscount++;
    }
};
var ParseObject = function (parsedObjects, runtimeProperty, gltfRuntime) {
    for (var object in parsedObjects) {
        var parsedObject = parsedObjects[object];
        gltfRuntime[runtimeProperty][object] = parsedObject;
    }
};
/**
 * Utils
 * @param buffer
 */
var NormalizeUVs = function (buffer) {
    if (!buffer) {
        return;
    }
    for (var i = 0; i < buffer.length / 2; i++) {
        buffer[i * 2 + 1] = 1.0 - buffer[i * 2 + 1];
    }
};
var GetAttribute = function (attributeParameter) {
    if (attributeParameter.semantic === "NORMAL") {
        return "normal";
    }
    else if (attributeParameter.semantic === "POSITION") {
        return "position";
    }
    else if (attributeParameter.semantic === "JOINT") {
        return "matricesIndices";
    }
    else if (attributeParameter.semantic === "WEIGHT") {
        return "matricesWeights";
    }
    else if (attributeParameter.semantic === "COLOR") {
        return "color";
    }
    else if (attributeParameter.semantic && attributeParameter.semantic.indexOf("TEXCOORD_") !== -1) {
        var channel = Number(attributeParameter.semantic.split("_")[1]);
        return "uv" + (channel === 0 ? "" : channel + 1);
    }
    return null;
};
/**
 * Loads and creates animations
 * @param gltfRuntime
 */
var LoadAnimations = function (gltfRuntime) {
    for (var anim in gltfRuntime.animations) {
        var animation = gltfRuntime.animations[anim];
        if (!animation.channels || !animation.samplers) {
            continue;
        }
        var lastAnimation = null;
        for (var i = 0; i < animation.channels.length; i++) {
            // Get parameters and load buffers
            var channel = animation.channels[i];
            var sampler = animation.samplers[channel.sampler];
            if (!sampler) {
                continue;
            }
            var inputData = null;
            var outputData = null;
            if (animation.parameters) {
                inputData = animation.parameters[sampler.input];
                outputData = animation.parameters[sampler.output];
            }
            else {
                inputData = sampler.input;
                outputData = sampler.output;
            }
            var bufferInput = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, gltfRuntime.accessors[inputData]);
            var bufferOutput = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, gltfRuntime.accessors[outputData]);
            var targetId = channel.target.id;
            var targetNode = gltfRuntime.scene.getNodeById(targetId);
            if (targetNode === null) {
                targetNode = gltfRuntime.scene.getNodeByName(targetId);
            }
            if (targetNode === null) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Creating animation named " + anim + ". But cannot find node named " + targetId + " to attach to");
                continue;
            }
            var isBone = targetNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone;
            // Get target path (position, rotation or scaling)
            var targetPath = channel.target.path;
            var targetPathIndex = glTFAnimationPaths.indexOf(targetPath);
            if (targetPathIndex !== -1) {
                targetPath = BabylonAnimationPaths[targetPathIndex];
            }
            // Determine animation type
            var animationType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONTYPE_MATRIX;
            if (!isBone) {
                if (targetPath === "rotationQuaternion") {
                    animationType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONTYPE_QUATERNION;
                    targetNode.rotationQuaternion = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
                }
                else {
                    animationType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONTYPE_VECTOR3;
                }
            }
            // Create animation and key frames
            var babylonAnimation = null;
            var keys = [];
            var arrayOffset = 0;
            var modifyKey = false;
            if (isBone && lastAnimation && lastAnimation.getKeys().length === bufferInput.length) {
                babylonAnimation = lastAnimation;
                modifyKey = true;
            }
            if (!modifyKey) {
                gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
                babylonAnimation = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation(anim, isBone ? "_matrix" : targetPath, 1, animationType, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONLOOPMODE_CYCLE);
                gltfRuntime.scene._blockEntityCollection = false;
            }
            // For each frame
            for (var j = 0; j < bufferInput.length; j++) {
                var value = null;
                if (targetPath === "rotationQuaternion") {
                    // VEC4
                    value = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2], bufferOutput[arrayOffset + 3]]);
                    arrayOffset += 4;
                }
                else {
                    // Position and scaling are VEC3
                    value = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2]]);
                    arrayOffset += 3;
                }
                if (isBone) {
                    var bone = targetNode;
                    var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
                    var rotationQuaternion = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
                    var scaling = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
                    // Warning on decompose
                    var mat = bone.getBaseMatrix();
                    if (modifyKey && lastAnimation) {
                        mat = lastAnimation.getKeys()[j].value;
                    }
                    mat.decompose(scaling, rotationQuaternion, translation);
                    if (targetPath === "position") {
                        translation = value;
                    }
                    else if (targetPath === "rotationQuaternion") {
                        rotationQuaternion = value;
                    }
                    else {
                        scaling = value;
                    }
                    value = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Compose(scaling, rotationQuaternion, translation);
                }
                if (!modifyKey) {
                    keys.push({
                        frame: bufferInput[j],
                        value: value,
                    });
                }
                else if (lastAnimation) {
                    lastAnimation.getKeys()[j].value = value;
                }
            }
            // Finish
            if (!modifyKey && babylonAnimation) {
                babylonAnimation.setKeys(keys);
                targetNode.animations.push(babylonAnimation);
            }
            lastAnimation = babylonAnimation;
            gltfRuntime.scene.stopAnimation(targetNode);
            gltfRuntime.scene.beginAnimation(targetNode, 0, bufferInput[bufferInput.length - 1], true, 1.0);
        }
    }
};
/**
 * @returns the bones transformation matrix
 * @param node
 */
var ConfigureBoneTransformation = function (node) {
    var mat = null;
    if (node.translation || node.rotation || node.scale) {
        var scale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.scale || [1, 1, 1]);
        var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(node.rotation || [0, 0, 0, 1]);
        var position = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.translation || [0, 0, 0]);
        mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Compose(scale, rotation, position);
    }
    else {
        mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromArray(node.matrix);
    }
    return mat;
};
/**
 * Returns the parent bone
 * @param gltfRuntime
 * @param skins
 * @param jointName
 * @param newSkeleton
 * @returns the parent bone
 */
var GetParentBone = function (gltfRuntime, skins, jointName, newSkeleton) {
    // Try to find
    for (var i = 0; i < newSkeleton.bones.length; i++) {
        if (newSkeleton.bones[i].name === jointName) {
            return newSkeleton.bones[i];
        }
    }
    // Not found, search in gltf nodes
    var nodes = gltfRuntime.nodes;
    for (var nde in nodes) {
        var node = nodes[nde];
        if (!node.jointName) {
            continue;
        }
        var children = node.children;
        for (var i = 0; i < children.length; i++) {
            var child = gltfRuntime.nodes[children[i]];
            if (!child.jointName) {
                continue;
            }
            if (child.jointName === jointName) {
                var mat = ConfigureBoneTransformation(node);
                var bone = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone(node.name || "", newSkeleton, GetParentBone(gltfRuntime, skins, node.jointName, newSkeleton), mat);
                bone.id = nde;
                return bone;
            }
        }
    }
    return null;
};
/**
 * Returns the appropriate root node
 * @param nodesToRoot
 * @param id
 * @returns the root node
 */
var GetNodeToRoot = function (nodesToRoot, id) {
    for (var i = 0; i < nodesToRoot.length; i++) {
        var nodeToRoot = nodesToRoot[i];
        for (var j = 0; j < nodeToRoot.node.children.length; j++) {
            var child = nodeToRoot.node.children[j];
            if (child === id) {
                return nodeToRoot.bone;
            }
        }
    }
    return null;
};
/**
 * Returns the node with the joint name
 * @param gltfRuntime
 * @param jointName
 * @returns the node with the joint name
 */
var GetJointNode = function (gltfRuntime, jointName) {
    var nodes = gltfRuntime.nodes;
    var node = nodes[jointName];
    if (node) {
        return {
            node: node,
            id: jointName,
        };
    }
    for (var nde in nodes) {
        node = nodes[nde];
        if (node.jointName === jointName) {
            return {
                node: node,
                id: nde,
            };
        }
    }
    return null;
};
/**
 * Checks if a nodes is in joints
 * @param skins
 * @param id
 * @returns true if the node is in joints, else false
 */
var NodeIsInJoints = function (skins, id) {
    for (var i = 0; i < skins.jointNames.length; i++) {
        if (skins.jointNames[i] === id) {
            return true;
        }
    }
    return false;
};
/**
 * Fills the nodes to root for bones and builds hierarchy
 * @param gltfRuntime
 * @param newSkeleton
 * @param skins
 * @param nodesToRoot
 */
var GetNodesToRoot = function (gltfRuntime, newSkeleton, skins, nodesToRoot) {
    // Creates nodes for root
    for (var nde in gltfRuntime.nodes) {
        var node = gltfRuntime.nodes[nde];
        var id = nde;
        if (!node.jointName || NodeIsInJoints(skins, node.jointName)) {
            continue;
        }
        // Create node to root bone
        var mat = ConfigureBoneTransformation(node);
        var bone = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone(node.name || "", newSkeleton, null, mat);
        bone.id = id;
        nodesToRoot.push({ bone: bone, node: node, id: id });
    }
    // Parenting
    for (var i = 0; i < nodesToRoot.length; i++) {
        var nodeToRoot = nodesToRoot[i];
        var children = nodeToRoot.node.children;
        for (var j = 0; j < children.length; j++) {
            var child = null;
            for (var k = 0; k < nodesToRoot.length; k++) {
                if (nodesToRoot[k].id === children[j]) {
                    child = nodesToRoot[k];
                    break;
                }
            }
            if (child) {
                child.bone._parent = nodeToRoot.bone;
                nodeToRoot.bone.children.push(child.bone);
            }
        }
    }
};
/**
 * Imports a skeleton
 * @param gltfRuntime
 * @param skins
 * @param mesh
 * @param newSkeleton
 * @returns the bone name
 */
var ImportSkeleton = function (gltfRuntime, skins, mesh, newSkeleton) {
    if (!newSkeleton) {
        newSkeleton = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Skeleton(skins.name || "", "", gltfRuntime.scene);
    }
    if (!skins.babylonSkeleton) {
        return newSkeleton;
    }
    // Find the root bones
    var nodesToRoot = [];
    var nodesToRootToAdd = [];
    GetNodesToRoot(gltfRuntime, newSkeleton, skins, nodesToRoot);
    newSkeleton.bones = [];
    // Joints
    for (var i = 0; i < skins.jointNames.length; i++) {
        var jointNode = GetJointNode(gltfRuntime, skins.jointNames[i]);
        if (!jointNode) {
            continue;
        }
        var node = jointNode.node;
        if (!node) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Joint named " + skins.jointNames[i] + " does not exist");
            continue;
        }
        var id = jointNode.id;
        // Optimize, if the bone already exists...
        var existingBone = gltfRuntime.scene.getBoneById(id);
        if (existingBone) {
            newSkeleton.bones.push(existingBone);
            continue;
        }
        // Search for parent bone
        var foundBone = false;
        var parentBone = null;
        for (var j = 0; j < i; j++) {
            var jointNode_1 = GetJointNode(gltfRuntime, skins.jointNames[j]);
            if (!jointNode_1) {
                continue;
            }
            var joint = jointNode_1.node;
            if (!joint) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Joint named " + skins.jointNames[j] + " does not exist when looking for parent");
                continue;
            }
            var children = joint.children;
            if (!children) {
                continue;
            }
            foundBone = false;
            for (var k = 0; k < children.length; k++) {
                if (children[k] === id) {
                    parentBone = GetParentBone(gltfRuntime, skins, skins.jointNames[j], newSkeleton);
                    foundBone = true;
                    break;
                }
            }
            if (foundBone) {
                break;
            }
        }
        // Create bone
        var mat = ConfigureBoneTransformation(node);
        if (!parentBone && nodesToRoot.length > 0) {
            parentBone = GetNodeToRoot(nodesToRoot, id);
            if (parentBone) {
                if (nodesToRootToAdd.indexOf(parentBone) === -1) {
                    nodesToRootToAdd.push(parentBone);
                }
            }
        }
        var bone = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone(node.jointName || "", newSkeleton, parentBone, mat);
        bone.id = id;
    }
    // Polish
    var bones = newSkeleton.bones;
    newSkeleton.bones = [];
    for (var i = 0; i < skins.jointNames.length; i++) {
        var jointNode = GetJointNode(gltfRuntime, skins.jointNames[i]);
        if (!jointNode) {
            continue;
        }
        for (var j = 0; j < bones.length; j++) {
            if (bones[j].id === jointNode.id) {
                newSkeleton.bones.push(bones[j]);
                break;
            }
        }
    }
    newSkeleton.prepare();
    // Finish
    for (var i = 0; i < nodesToRootToAdd.length; i++) {
        newSkeleton.bones.push(nodesToRootToAdd[i]);
    }
    return newSkeleton;
};
/**
 * Imports a mesh and its geometries
 * @param gltfRuntime
 * @param node
 * @param meshes
 * @param id
 * @param newMesh
 * @returns the new mesh
 */
var ImportMesh = function (gltfRuntime, node, meshes, id, newMesh) {
    if (!newMesh) {
        gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
        newMesh = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh(node.name || "", gltfRuntime.scene);
        newMesh._parentContainer = gltfRuntime.assetContainer;
        gltfRuntime.scene._blockEntityCollection = false;
        newMesh.id = id;
    }
    if (!node.babylonNode) {
        return newMesh;
    }
    var subMaterials = [];
    var vertexData = null;
    var verticesStarts = [];
    var verticesCounts = [];
    var indexStarts = [];
    var indexCounts = [];
    for (var meshIndex = 0; meshIndex < meshes.length; meshIndex++) {
        var meshId = meshes[meshIndex];
        var mesh = gltfRuntime.meshes[meshId];
        if (!mesh) {
            continue;
        }
        // Positions, normals and UVs
        for (var i = 0; i < mesh.primitives.length; i++) {
            // Temporary vertex data
            var tempVertexData = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexData();
            var primitive = mesh.primitives[i];
            if (primitive.mode !== 4) {
                // continue;
            }
            var attributes = primitive.attributes;
            var accessor = null;
            var buffer = null;
            // Set positions, normal and uvs
            for (var semantic in attributes) {
                // Link accessor and buffer view
                accessor = gltfRuntime.accessors[attributes[semantic]];
                buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, accessor);
                if (semantic === "NORMAL") {
                    tempVertexData.normals = new Float32Array(buffer.length);
                    tempVertexData.normals.set(buffer);
                }
                else if (semantic === "POSITION") {
                    if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.HomogeneousCoordinates) {
                        tempVertexData.positions = new Float32Array(buffer.length - buffer.length / 4);
                        for (var j = 0; j < buffer.length; j += 4) {
                            tempVertexData.positions[j] = buffer[j];
                            tempVertexData.positions[j + 1] = buffer[j + 1];
                            tempVertexData.positions[j + 2] = buffer[j + 2];
                        }
                    }
                    else {
                        tempVertexData.positions = new Float32Array(buffer.length);
                        tempVertexData.positions.set(buffer);
                    }
                    verticesCounts.push(tempVertexData.positions.length);
                }
                else if (semantic.indexOf("TEXCOORD_") !== -1) {
                    var channel = Number(semantic.split("_")[1]);
                    var uvKind = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind + (channel === 0 ? "" : channel + 1);
                    var uvs = new Float32Array(buffer.length);
                    uvs.set(buffer);
                    NormalizeUVs(uvs);
                    tempVertexData.set(uvs, uvKind);
                }
                else if (semantic === "JOINT") {
                    tempVertexData.matricesIndices = new Float32Array(buffer.length);
                    tempVertexData.matricesIndices.set(buffer);
                }
                else if (semantic === "WEIGHT") {
                    tempVertexData.matricesWeights = new Float32Array(buffer.length);
                    tempVertexData.matricesWeights.set(buffer);
                }
                else if (semantic === "COLOR") {
                    tempVertexData.colors = new Float32Array(buffer.length);
                    tempVertexData.colors.set(buffer);
                }
            }
            // Indices
            accessor = gltfRuntime.accessors[primitive.indices];
            if (accessor) {
                buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, accessor);
                tempVertexData.indices = new Int32Array(buffer.length);
                tempVertexData.indices.set(buffer);
                indexCounts.push(tempVertexData.indices.length);
            }
            else {
                // Set indices on the fly
                var indices = [];
                for (var j = 0; j < tempVertexData.positions.length / 3; j++) {
                    indices.push(j);
                }
                tempVertexData.indices = new Int32Array(indices);
                indexCounts.push(tempVertexData.indices.length);
            }
            if (!vertexData) {
                vertexData = tempVertexData;
            }
            else {
                vertexData.merge(tempVertexData);
            }
            // Sub material
            var material_1 = gltfRuntime.scene.getMaterialById(primitive.material);
            subMaterials.push(material_1 === null ? _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetDefaultMaterial(gltfRuntime.scene) : material_1);
            // Update vertices start and index start
            verticesStarts.push(verticesStarts.length === 0 ? 0 : verticesStarts[verticesStarts.length - 1] + verticesCounts[verticesCounts.length - 2]);
            indexStarts.push(indexStarts.length === 0 ? 0 : indexStarts[indexStarts.length - 1] + indexCounts[indexCounts.length - 2]);
        }
    }
    var material;
    gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
    if (subMaterials.length > 1) {
        material = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.MultiMaterial("multimat" + id, gltfRuntime.scene);
        material.subMaterials = subMaterials;
    }
    else {
        material = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial("multimat" + id, gltfRuntime.scene);
    }
    if (subMaterials.length === 1) {
        material = subMaterials[0];
    }
    material._parentContainer = gltfRuntime.assetContainer;
    if (!newMesh.material) {
        newMesh.material = material;
    }
    // Apply geometry
    new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Geometry(id, gltfRuntime.scene, vertexData, false, newMesh);
    newMesh.computeWorldMatrix(true);
    gltfRuntime.scene._blockEntityCollection = false;
    // Apply submeshes
    newMesh.subMeshes = [];
    var index = 0;
    for (var meshIndex = 0; meshIndex < meshes.length; meshIndex++) {
        var meshId = meshes[meshIndex];
        var mesh = gltfRuntime.meshes[meshId];
        if (!mesh) {
            continue;
        }
        for (var i = 0; i < mesh.primitives.length; i++) {
            if (mesh.primitives[i].mode !== 4) {
                //continue;
            }
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.SubMesh.AddToMesh(index, verticesStarts[index], verticesCounts[index], indexStarts[index], indexCounts[index], newMesh, newMesh, true);
            index++;
        }
    }
    // Finish
    return newMesh;
};
/**
 * Configure node transformation from position, rotation and scaling
 * @param newNode
 * @param position
 * @param rotation
 * @param scaling
 */
var ConfigureNode = function (newNode, position, rotation, scaling) {
    if (newNode.position) {
        newNode.position = position;
    }
    if (newNode.rotationQuaternion || newNode.rotation) {
        newNode.rotationQuaternion = rotation;
    }
    if (newNode.scaling) {
        newNode.scaling = scaling;
    }
};
/**
 * Configures node from transformation matrix
 * @param newNode
 * @param node
 */
var ConfigureNodeFromMatrix = function (newNode, node) {
    if (node.matrix) {
        var position = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
        var rotation = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
        var scaling = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
        var mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromArray(node.matrix);
        mat.decompose(scaling, rotation, position);
        ConfigureNode(newNode, position, rotation, scaling);
    }
    else if (node.translation && node.rotation && node.scale) {
        ConfigureNode(newNode, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.translation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(node.rotation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.scale));
    }
    newNode.computeWorldMatrix(true);
};
/**
 * Imports a node
 * @param gltfRuntime
 * @param node
 * @param id
 * @returns the newly imported node
 */
var ImportNode = function (gltfRuntime, node, id) {
    var lastNode = null;
    if (gltfRuntime.importOnlyMeshes && (node.skin || node.meshes)) {
        if (gltfRuntime.importMeshesNames && gltfRuntime.importMeshesNames.length > 0 && gltfRuntime.importMeshesNames.indexOf(node.name || "") === -1) {
            return null;
        }
    }
    // Meshes
    if (node.skin) {
        if (node.meshes) {
            var skin = gltfRuntime.skins[node.skin];
            var newMesh = ImportMesh(gltfRuntime, node, node.meshes, id, node.babylonNode);
            newMesh.skeleton = gltfRuntime.scene.getLastSkeletonById(node.skin);
            if (newMesh.skeleton === null) {
                newMesh.skeleton = ImportSkeleton(gltfRuntime, skin, newMesh, skin.babylonSkeleton);
                if (!skin.babylonSkeleton) {
                    skin.babylonSkeleton = newMesh.skeleton;
                }
            }
            lastNode = newMesh;
        }
    }
    else if (node.meshes) {
        /**
         * Improve meshes property
         */
        var newMesh = ImportMesh(gltfRuntime, node, node.mesh ? [node.mesh] : node.meshes, id, node.babylonNode);
        lastNode = newMesh;
    }
    // Lights
    else if (node.light && !node.babylonNode && !gltfRuntime.importOnlyMeshes) {
        var light = gltfRuntime.lights[node.light];
        if (light) {
            if (light.type === "ambient") {
                var ambienLight = light[light.type];
                var hemiLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.HemisphericLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene);
                hemiLight.name = node.name || "";
                if (ambienLight.color) {
                    hemiLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(ambienLight.color);
                }
                lastNode = hemiLight;
            }
            else if (light.type === "directional") {
                var directionalLight = light[light.type];
                var dirLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene);
                dirLight.name = node.name || "";
                if (directionalLight.color) {
                    dirLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(directionalLight.color);
                }
                lastNode = dirLight;
            }
            else if (light.type === "point") {
                var pointLight = light[light.type];
                var ptLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.PointLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene);
                ptLight.name = node.name || "";
                if (pointLight.color) {
                    ptLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(pointLight.color);
                }
                lastNode = ptLight;
            }
            else if (light.type === "spot") {
                var spotLight = light[light.type];
                var spLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.SpotLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), 0, 0, gltfRuntime.scene);
                spLight.name = node.name || "";
                if (spotLight.color) {
                    spLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(spotLight.color);
                }
                if (spotLight.fallOfAngle) {
                    spLight.angle = spotLight.fallOfAngle;
                }
                if (spotLight.fallOffExponent) {
                    spLight.exponent = spotLight.fallOffExponent;
                }
                lastNode = spLight;
            }
        }
    }
    // Cameras
    else if (node.camera && !node.babylonNode && !gltfRuntime.importOnlyMeshes) {
        var camera = gltfRuntime.cameras[node.camera];
        if (camera) {
            gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
            if (camera.type === "orthographic") {
                var orthoCamera = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.FreeCamera(node.camera, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene, false);
                orthoCamera.name = node.name || "";
                orthoCamera.mode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Camera.ORTHOGRAPHIC_CAMERA;
                orthoCamera.attachControl();
                lastNode = orthoCamera;
                orthoCamera._parentContainer = gltfRuntime.assetContainer;
            }
            else if (camera.type === "perspective") {
                var perspectiveCamera = camera[camera.type];
                var persCamera = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.FreeCamera(node.camera, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene, false);
                persCamera.name = node.name || "";
                persCamera.attachControl();
                if (!perspectiveCamera.aspectRatio) {
                    perspectiveCamera.aspectRatio = gltfRuntime.scene.getEngine().getRenderWidth() / gltfRuntime.scene.getEngine().getRenderHeight();
                }
                if (perspectiveCamera.znear && perspectiveCamera.zfar) {
                    persCamera.maxZ = perspectiveCamera.zfar;
                    persCamera.minZ = perspectiveCamera.znear;
                }
                lastNode = persCamera;
                persCamera._parentContainer = gltfRuntime.assetContainer;
            }
            gltfRuntime.scene._blockEntityCollection = false;
        }
    }
    // Empty node
    if (!node.jointName) {
        if (node.babylonNode) {
            return node.babylonNode;
        }
        else if (lastNode === null) {
            gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
            var dummy = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh(node.name || "", gltfRuntime.scene);
            dummy._parentContainer = gltfRuntime.assetContainer;
            gltfRuntime.scene._blockEntityCollection = false;
            node.babylonNode = dummy;
            lastNode = dummy;
        }
    }
    if (lastNode !== null) {
        if (node.matrix && lastNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh) {
            ConfigureNodeFromMatrix(lastNode, node);
        }
        else {
            var translation = node.translation || [0, 0, 0];
            var rotation = node.rotation || [0, 0, 0, 1];
            var scale = node.scale || [1, 1, 1];
            ConfigureNode(lastNode, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(translation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(rotation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(scale));
        }
        lastNode.updateCache(true);
        node.babylonNode = lastNode;
    }
    return lastNode;
};
/**
 * Traverses nodes and creates them
 * @param gltfRuntime
 * @param id
 * @param parent
 * @param meshIncluded
 */
var TraverseNodes = function (gltfRuntime, id, parent, meshIncluded) {
    if (meshIncluded === void 0) { meshIncluded = false; }
    var node = gltfRuntime.nodes[id];
    var newNode = null;
    if (gltfRuntime.importOnlyMeshes && !meshIncluded && gltfRuntime.importMeshesNames) {
        if (gltfRuntime.importMeshesNames.indexOf(node.name || "") !== -1 || gltfRuntime.importMeshesNames.length === 0) {
            meshIncluded = true;
        }
        else {
            meshIncluded = false;
        }
    }
    else {
        meshIncluded = true;
    }
    if (!node.jointName && meshIncluded) {
        newNode = ImportNode(gltfRuntime, node, id);
        if (newNode !== null) {
            newNode.id = id;
            newNode.parent = parent;
        }
    }
    if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
            TraverseNodes(gltfRuntime, node.children[i], newNode, meshIncluded);
        }
    }
};
/**
 * do stuff after buffers, shaders are loaded (e.g. hook up materials, load animations, etc.)
 * @param gltfRuntime
 */
var PostLoad = function (gltfRuntime) {
    // Nodes
    var currentScene = gltfRuntime.currentScene;
    if (currentScene) {
        for (var i = 0; i < currentScene.nodes.length; i++) {
            TraverseNodes(gltfRuntime, currentScene.nodes[i], null);
        }
    }
    else {
        for (var thing in gltfRuntime.scenes) {
            currentScene = gltfRuntime.scenes[thing];
            for (var i = 0; i < currentScene.nodes.length; i++) {
                TraverseNodes(gltfRuntime, currentScene.nodes[i], null);
            }
        }
    }
    // Set animations
    LoadAnimations(gltfRuntime);
    for (var i = 0; i < gltfRuntime.scene.skeletons.length; i++) {
        var skeleton = gltfRuntime.scene.skeletons[i];
        gltfRuntime.scene.beginAnimation(skeleton, 0, Number.MAX_VALUE, true, 1.0);
    }
};
/**
 * onBind shaderrs callback to set uniforms and matrices
 * @param mesh
 * @param gltfRuntime
 * @param unTreatedUniforms
 * @param shaderMaterial
 * @param technique
 * @param material
 * @param onSuccess
 */
var OnBindShaderMaterial = function (mesh, gltfRuntime, unTreatedUniforms, shaderMaterial, technique, material, onSuccess) {
    var materialValues = material.values || technique.parameters;
    for (var unif in unTreatedUniforms) {
        var uniform = unTreatedUniforms[unif];
        var type = uniform.type;
        if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT2 || type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT3 || type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT4) {
            if (uniform.semantic && !uniform.source && !uniform.node) {
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetMatrix(gltfRuntime.scene, mesh, uniform, unif, shaderMaterial.getEffect());
            }
            else if (uniform.semantic && (uniform.source || uniform.node)) {
                var source = gltfRuntime.scene.getNodeByName(uniform.source || uniform.node || "");
                if (source === null) {
                    source = gltfRuntime.scene.getNodeById(uniform.source || uniform.node || "");
                }
                if (source === null) {
                    continue;
                }
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetMatrix(gltfRuntime.scene, source, uniform, unif, shaderMaterial.getEffect());
            }
        }
        else {
            var value = materialValues[technique.uniforms[unif]];
            if (!value) {
                continue;
            }
            if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.SAMPLER_2D) {
                var texture = gltfRuntime.textures[material.values ? value : uniform.value].babylonTexture;
                if (texture === null || texture === undefined) {
                    continue;
                }
                shaderMaterial.getEffect().setTexture(unif, texture);
            }
            else {
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetUniform(shaderMaterial.getEffect(), unif, value, type);
            }
        }
    }
    onSuccess(shaderMaterial);
};
/**
 * Prepare uniforms to send the only one time
 * Loads the appropriate textures
 * @param gltfRuntime
 * @param shaderMaterial
 * @param technique
 * @param material
 */
var PrepareShaderMaterialUniforms = function (gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms) {
    var materialValues = material.values || technique.parameters;
    var techniqueUniforms = technique.uniforms;
    var _loop_1 = function (unif) {
        var uniform = unTreatedUniforms[unif];
        var type = uniform.type;
        var value = materialValues[techniqueUniforms[unif]];
        if (value === undefined) {
            // In case the value is the same for all materials
            value = uniform.value;
        }
        if (!value) {
            return "continue";
        }
        var onLoadTexture = function (uniformName) {
            return function (texture) {
                if (uniform.value && uniformName) {
                    // Static uniform
                    shaderMaterial.setTexture(uniformName, texture);
                    delete unTreatedUniforms[uniformName];
                }
            };
        };
        // Texture (sampler2D)
        if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.SAMPLER_2D) {
            GLTFLoaderExtension.LoadTextureAsync(gltfRuntime, material.values ? value : uniform.value, onLoadTexture(unif), function () { return onLoadTexture(null); });
        }
        // Others
        else {
            if (uniform.value && _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetUniform(shaderMaterial, unif, material.values ? value : uniform.value, type)) {
                // Static uniform
                delete unTreatedUniforms[unif];
            }
        }
    };
    /**
     * Prepare values here (not matrices)
     */
    for (var unif in unTreatedUniforms) {
        _loop_1(unif);
    }
};
/**
 * Shader compilation failed
 * @param program
 * @param shaderMaterial
 * @param onError
 * @returns callback when shader is compiled
 */
var OnShaderCompileError = function (program, shaderMaterial, onError) {
    return function (effect, error) {
        shaderMaterial.dispose(true);
        onError("Cannot compile program named " + program.name + ". Error: " + error + ". Default material will be applied");
    };
};
/**
 * Shader compilation success
 * @param gltfRuntime
 * @param shaderMaterial
 * @param technique
 * @param material
 * @param unTreatedUniforms
 * @param onSuccess
 * @returns callback when shader is compiled
 */
var OnShaderCompileSuccess = function (gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms, onSuccess) {
    return function (_) {
        PrepareShaderMaterialUniforms(gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms);
        shaderMaterial.onBind = function (mesh) {
            OnBindShaderMaterial(mesh, gltfRuntime, unTreatedUniforms, shaderMaterial, technique, material, onSuccess);
        };
    };
};
/**
 * Returns the appropriate uniform if already handled by babylon
 * @param tokenizer
 * @param technique
 * @param unTreatedUniforms
 * @returns the name of the uniform handled by babylon
 */
var ParseShaderUniforms = function (tokenizer, technique, unTreatedUniforms) {
    for (var unif in technique.uniforms) {
        var uniform = technique.uniforms[unif];
        var uniformParameter = technique.parameters[uniform];
        if (tokenizer.currentIdentifier === unif) {
            if (uniformParameter.semantic && !uniformParameter.source && !uniformParameter.node) {
                var transformIndex = glTFTransforms.indexOf(uniformParameter.semantic);
                if (transformIndex !== -1) {
                    delete unTreatedUniforms[unif];
                    return BabylonTransforms[transformIndex];
                }
            }
        }
    }
    return tokenizer.currentIdentifier;
};
/**
 * All shaders loaded. Create materials one by one
 * @param gltfRuntime
 */
var ImportMaterials = function (gltfRuntime) {
    // Create materials
    for (var mat in gltfRuntime.materials) {
        GLTFLoaderExtension.LoadMaterialAsync(gltfRuntime, mat, function () { }, function () { });
    }
};
/**
 * Implementation of the base glTF spec
 * @internal
 */
var GLTFLoaderBase = /** @class */ (function () {
    function GLTFLoaderBase() {
    }
    GLTFLoaderBase.CreateRuntime = function (parsedData, scene, rootUrl) {
        var gltfRuntime = {
            extensions: {},
            accessors: {},
            buffers: {},
            bufferViews: {},
            meshes: {},
            lights: {},
            cameras: {},
            nodes: {},
            images: {},
            textures: {},
            shaders: {},
            programs: {},
            samplers: {},
            techniques: {},
            materials: {},
            animations: {},
            skins: {},
            extensionsUsed: [],
            scenes: {},
            buffersCount: 0,
            shaderscount: 0,
            scene: scene,
            rootUrl: rootUrl,
            loadedBufferCount: 0,
            loadedBufferViews: {},
            loadedShaderCount: 0,
            importOnlyMeshes: false,
            dummyNodes: [],
            assetContainer: null,
        };
        // Parse
        if (parsedData.extensions) {
            ParseObject(parsedData.extensions, "extensions", gltfRuntime);
        }
        if (parsedData.extensionsUsed) {
            ParseObject(parsedData.extensionsUsed, "extensionsUsed", gltfRuntime);
        }
        if (parsedData.buffers) {
            ParseBuffers(parsedData.buffers, gltfRuntime);
        }
        if (parsedData.bufferViews) {
            ParseObject(parsedData.bufferViews, "bufferViews", gltfRuntime);
        }
        if (parsedData.accessors) {
            ParseObject(parsedData.accessors, "accessors", gltfRuntime);
        }
        if (parsedData.meshes) {
            ParseObject(parsedData.meshes, "meshes", gltfRuntime);
        }
        if (parsedData.lights) {
            ParseObject(parsedData.lights, "lights", gltfRuntime);
        }
        if (parsedData.cameras) {
            ParseObject(parsedData.cameras, "cameras", gltfRuntime);
        }
        if (parsedData.nodes) {
            ParseObject(parsedData.nodes, "nodes", gltfRuntime);
        }
        if (parsedData.images) {
            ParseObject(parsedData.images, "images", gltfRuntime);
        }
        if (parsedData.textures) {
            ParseObject(parsedData.textures, "textures", gltfRuntime);
        }
        if (parsedData.shaders) {
            ParseShaders(parsedData.shaders, gltfRuntime);
        }
        if (parsedData.programs) {
            ParseObject(parsedData.programs, "programs", gltfRuntime);
        }
        if (parsedData.samplers) {
            ParseObject(parsedData.samplers, "samplers", gltfRuntime);
        }
        if (parsedData.techniques) {
            ParseObject(parsedData.techniques, "techniques", gltfRuntime);
        }
        if (parsedData.materials) {
            ParseObject(parsedData.materials, "materials", gltfRuntime);
        }
        if (parsedData.animations) {
            ParseObject(parsedData.animations, "animations", gltfRuntime);
        }
        if (parsedData.skins) {
            ParseObject(parsedData.skins, "skins", gltfRuntime);
        }
        if (parsedData.scenes) {
            gltfRuntime.scenes = parsedData.scenes;
        }
        if (parsedData.scene && parsedData.scenes) {
            gltfRuntime.currentScene = parsedData.scenes[parsedData.scene];
        }
        return gltfRuntime;
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderBase.LoadBufferAsync = function (gltfRuntime, id, onSuccess, onError, onProgress) {
        var buffer = gltfRuntime.buffers[id];
        if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.IsBase64(buffer.uri)) {
            setTimeout(function () { return onSuccess(new Uint8Array(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.DecodeBase64(buffer.uri))); });
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.LoadFile(gltfRuntime.rootUrl + buffer.uri, function (data) { return onSuccess(new Uint8Array(data)); }, onProgress, undefined, true, function (request) {
                if (request) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderBase.LoadTextureBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        var texture = gltfRuntime.textures[id];
        if (!texture || !texture.source) {
            onError("");
            return;
        }
        if (texture.babylonTexture) {
            onSuccess(null);
            return;
        }
        var source = gltfRuntime.images[texture.source];
        if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.IsBase64(source.uri)) {
            setTimeout(function () { return onSuccess(new Uint8Array(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.DecodeBase64(source.uri))); });
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.LoadFile(gltfRuntime.rootUrl + source.uri, function (data) { return onSuccess(new Uint8Array(data)); }, undefined, undefined, true, function (request) {
                if (request) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderBase.CreateTextureAsync = function (gltfRuntime, id, buffer, onSuccess) {
        var texture = gltfRuntime.textures[id];
        if (texture.babylonTexture) {
            onSuccess(texture.babylonTexture);
            return;
        }
        var sampler = gltfRuntime.samplers[texture.sampler];
        var createMipMaps = sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST_MIPMAP_NEAREST ||
            sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST_MIPMAP_LINEAR ||
            sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_NEAREST ||
            sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_LINEAR;
        var samplingMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.BILINEAR_SAMPLINGMODE;
        var blob = buffer == null ? new Blob() : new Blob([buffer]);
        var blobURL = URL.createObjectURL(blob);
        var revokeBlobURL = function () { return URL.revokeObjectURL(blobURL); };
        var newTexture = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture(blobURL, gltfRuntime.scene, !createMipMaps, true, samplingMode, revokeBlobURL, revokeBlobURL);
        if (sampler.wrapS !== undefined) {
            newTexture.wrapU = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetWrapMode(sampler.wrapS);
        }
        if (sampler.wrapT !== undefined) {
            newTexture.wrapV = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetWrapMode(sampler.wrapT);
        }
        newTexture.name = id;
        texture.babylonTexture = newTexture;
        onSuccess(newTexture);
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderBase.LoadShaderStringAsync = function (gltfRuntime, id, onSuccess, onError) {
        var shader = gltfRuntime.shaders[id];
        if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.IsBase64(shader.uri)) {
            var shaderString = atob(shader.uri.split(",")[1]);
            if (onSuccess) {
                onSuccess(shaderString);
            }
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.LoadFile(gltfRuntime.rootUrl + shader.uri, onSuccess, undefined, undefined, false, function (request) {
                if (request && onError) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderBase.LoadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        var material = gltfRuntime.materials[id];
        if (!material.technique) {
            if (onError) {
                onError("No technique found.");
            }
            return;
        }
        var technique = gltfRuntime.techniques[material.technique];
        if (!technique) {
            gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
            var defaultMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial(id, gltfRuntime.scene);
            defaultMaterial._parentContainer = gltfRuntime.assetContainer;
            gltfRuntime.scene._blockEntityCollection = false;
            defaultMaterial.diffuseColor = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3(0.5, 0.5, 0.5);
            defaultMaterial.sideOrientation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.CounterClockWiseSideOrientation;
            onSuccess(defaultMaterial);
            return;
        }
        var program = gltfRuntime.programs[technique.program];
        var states = technique.states;
        var vertexShader = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.vertexShader + "VertexShader"];
        var pixelShader = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.fragmentShader + "PixelShader"];
        var newVertexShader = "";
        var newPixelShader = "";
        var vertexTokenizer = new Tokenizer(vertexShader);
        var pixelTokenizer = new Tokenizer(pixelShader);
        var unTreatedUniforms = {};
        var uniforms = [];
        var attributes = [];
        var samplers = [];
        // Fill uniform, sampler2D and attributes
        for (var unif in technique.uniforms) {
            var uniform = technique.uniforms[unif];
            var uniformParameter = technique.parameters[uniform];
            unTreatedUniforms[unif] = uniformParameter;
            if (uniformParameter.semantic && !uniformParameter.node && !uniformParameter.source) {
                var transformIndex = glTFTransforms.indexOf(uniformParameter.semantic);
                if (transformIndex !== -1) {
                    uniforms.push(BabylonTransforms[transformIndex]);
                    delete unTreatedUniforms[unif];
                }
                else {
                    uniforms.push(unif);
                }
            }
            else if (uniformParameter.type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.SAMPLER_2D) {
                samplers.push(unif);
            }
            else {
                uniforms.push(unif);
            }
        }
        for (var attr in technique.attributes) {
            var attribute = technique.attributes[attr];
            var attributeParameter = technique.parameters[attribute];
            if (attributeParameter.semantic) {
                var name_1 = GetAttribute(attributeParameter);
                if (name_1) {
                    attributes.push(name_1);
                }
            }
        }
        // Configure vertex shader
        while (!vertexTokenizer.isEnd() && vertexTokenizer.getNextToken()) {
            var tokenType = vertexTokenizer.currentToken;
            if (tokenType !== ETokenType.IDENTIFIER) {
                newVertexShader += vertexTokenizer.currentString;
                continue;
            }
            var foundAttribute = false;
            for (var attr in technique.attributes) {
                var attribute = technique.attributes[attr];
                var attributeParameter = technique.parameters[attribute];
                if (vertexTokenizer.currentIdentifier === attr && attributeParameter.semantic) {
                    newVertexShader += GetAttribute(attributeParameter);
                    foundAttribute = true;
                    break;
                }
            }
            if (foundAttribute) {
                continue;
            }
            newVertexShader += ParseShaderUniforms(vertexTokenizer, technique, unTreatedUniforms);
        }
        // Configure pixel shader
        while (!pixelTokenizer.isEnd() && pixelTokenizer.getNextToken()) {
            var tokenType = pixelTokenizer.currentToken;
            if (tokenType !== ETokenType.IDENTIFIER) {
                newPixelShader += pixelTokenizer.currentString;
                continue;
            }
            newPixelShader += ParseShaderUniforms(pixelTokenizer, technique, unTreatedUniforms);
        }
        // Create shader material
        var shaderPath = {
            vertex: program.vertexShader + id,
            fragment: program.fragmentShader + id,
        };
        var options = {
            attributes: attributes,
            uniforms: uniforms,
            samplers: samplers,
            needAlphaBlending: states && states.enable && states.enable.indexOf(3042) !== -1,
        };
        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.vertexShader + id + "VertexShader"] = newVertexShader;
        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.fragmentShader + id + "PixelShader"] = newPixelShader;
        var shaderMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.ShaderMaterial(id, gltfRuntime.scene, shaderPath, options);
        shaderMaterial.onError = OnShaderCompileError(program, shaderMaterial, onError);
        shaderMaterial.onCompiled = OnShaderCompileSuccess(gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms, onSuccess);
        shaderMaterial.sideOrientation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.CounterClockWiseSideOrientation;
        if (states && states.functions) {
            var functions = states.functions;
            if (functions.cullFace && functions.cullFace[0] !== _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ECullingType.BACK) {
                shaderMaterial.backFaceCulling = false;
            }
            var blendFunc = functions.blendFuncSeparate;
            if (blendFunc) {
                if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.SRC_ALPHA &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE_MINUS_SRC_ALPHA &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_COMBINE;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_ONEONE;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.SRC_ALPHA &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_ADD;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE_MINUS_SRC_COLOR &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_SUBTRACT;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.DST_COLOR &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_MULTIPLY;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.SRC_ALPHA &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE_MINUS_SRC_COLOR &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_MAXIMIZED;
                }
            }
        }
    };
    return GLTFLoaderBase;
}());

/**
 * glTF V1 Loader
 * @internal
 * @deprecated
 */
var GLTFLoader = /** @class */ (function () {
    function GLTFLoader() {
    }
    GLTFLoader.RegisterExtension = function (extension) {
        if (GLTFLoader.Extensions[extension.name]) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error('Tool with the same name "' + extension.name + '" already exists');
            return;
        }
        GLTFLoader.Extensions[extension.name] = extension;
    };
    GLTFLoader.prototype.dispose = function () {
        // do nothing
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoader.prototype._importMeshAsync = function (meshesNames, scene, data, rootUrl, assetContainer, onSuccess, onProgress, onError) {
        var _this = this;
        scene.useRightHandedSystem = true;
        GLTFLoaderExtension.LoadRuntimeAsync(scene, data, rootUrl, function (gltfRuntime) {
            gltfRuntime.assetContainer = assetContainer;
            gltfRuntime.importOnlyMeshes = true;
            if (meshesNames === "") {
                gltfRuntime.importMeshesNames = [];
            }
            else if (typeof meshesNames === "string") {
                gltfRuntime.importMeshesNames = [meshesNames];
            }
            else if (meshesNames && !(meshesNames instanceof Array)) {
                gltfRuntime.importMeshesNames = [meshesNames];
            }
            else {
                gltfRuntime.importMeshesNames = [];
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Argument meshesNames must be of type string or string[]");
            }
            // Create nodes
            _this._createNodes(gltfRuntime);
            var meshes = [];
            var skeletons = [];
            // Fill arrays of meshes and skeletons
            for (var nde in gltfRuntime.nodes) {
                var node = gltfRuntime.nodes[nde];
                if (node.babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.AbstractMesh) {
                    meshes.push(node.babylonNode);
                }
            }
            for (var skl in gltfRuntime.skins) {
                var skin = gltfRuntime.skins[skl];
                if (skin.babylonSkeleton instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Skeleton) {
                    skeletons.push(skin.babylonSkeleton);
                }
            }
            // Load buffers, shaders, materials, etc.
            _this._loadBuffersAsync(gltfRuntime, function () {
                _this._loadShadersAsync(gltfRuntime, function () {
                    ImportMaterials(gltfRuntime);
                    PostLoad(gltfRuntime);
                    if (!_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading && onSuccess) {
                        onSuccess(meshes, skeletons);
                    }
                });
            });
            if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading && onSuccess) {
                onSuccess(meshes, skeletons);
            }
        }, onError);
        return true;
    };
    /**
     * Imports one or more meshes from a loaded gltf file and adds them to the scene
     * @param meshesNames a string or array of strings of the mesh names that should be loaded from the file
     * @param scene the scene the meshes should be added to
     * @param assetContainer defines the asset container to use (can be null)
     * @param data gltf data containing information of the meshes in a loaded file
     * @param rootUrl root url to load from
     * @param onProgress event that fires when loading progress has occured
     * @returns a promise containg the loaded meshes, particles, skeletons and animations
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    GLTFLoader.prototype.importMeshAsync = function (meshesNames, scene, assetContainer, data, rootUrl, onProgress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._importMeshAsync(meshesNames, scene, data, rootUrl, assetContainer, function (meshes, skeletons) {
                resolve({
                    meshes: meshes,
                    particleSystems: [],
                    skeletons: skeletons,
                    animationGroups: [],
                    lights: [],
                    transformNodes: [],
                    geometries: [],
                    spriteManagers: [],
                });
            }, onProgress, function (message) {
                reject(new Error(message));
            });
        });
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoader.prototype._loadAsync = function (scene, data, rootUrl, onSuccess, onProgress, onError) {
        var _this = this;
        scene.useRightHandedSystem = true;
        GLTFLoaderExtension.LoadRuntimeAsync(scene, data, rootUrl, function (gltfRuntime) {
            // Load runtime extensios
            GLTFLoaderExtension.LoadRuntimeExtensionsAsync(gltfRuntime, function () {
                // Create nodes
                _this._createNodes(gltfRuntime);
                // Load buffers, shaders, materials, etc.
                _this._loadBuffersAsync(gltfRuntime, function () {
                    _this._loadShadersAsync(gltfRuntime, function () {
                        ImportMaterials(gltfRuntime);
                        PostLoad(gltfRuntime);
                        if (!_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading) {
                            onSuccess();
                        }
                    });
                });
                if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading) {
                    onSuccess();
                }
            }, onError);
        }, onError);
    };
    /**
     * Imports all objects from a loaded gltf file and adds them to the scene
     * @param scene the scene the objects should be added to
     * @param data gltf data containing information of the meshes in a loaded file
     * @param rootUrl root url to load from
     * @param onProgress event that fires when loading progress has occured
     * @returns a promise which completes when objects have been loaded to the scene
     */
    GLTFLoader.prototype.loadAsync = function (scene, data, rootUrl, onProgress) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this._loadAsync(scene, data, rootUrl, function () {
                                resolve();
                            }, onProgress, function (message) {
                                reject(new Error(message));
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoader.prototype._loadShadersAsync = function (gltfRuntime, onload) {
        var hasShaders = false;
        var processShader = function (sha, shader) {
            GLTFLoaderExtension.LoadShaderStringAsync(gltfRuntime, sha, function (shaderString) {
                if (shaderString instanceof ArrayBuffer) {
                    return;
                }
                gltfRuntime.loadedShaderCount++;
                if (shaderString) {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[sha + (shader.type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EShaderType.VERTEX ? "VertexShader" : "PixelShader")] = shaderString;
                }
                if (gltfRuntime.loadedShaderCount === gltfRuntime.shaderscount) {
                    onload();
                }
            }, function () {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Error when loading shader program named " + sha + " located at " + shader.uri);
            });
        };
        for (var sha in gltfRuntime.shaders) {
            hasShaders = true;
            var shader = gltfRuntime.shaders[sha];
            if (shader) {
                processShader.bind(this, sha, shader)();
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("No shader named: " + sha);
            }
        }
        if (!hasShaders) {
            onload();
        }
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoader.prototype._loadBuffersAsync = function (gltfRuntime, onLoad) {
        var hasBuffers = false;
        var processBuffer = function (buf, buffer) {
            GLTFLoaderExtension.LoadBufferAsync(gltfRuntime, buf, function (bufferView) {
                gltfRuntime.loadedBufferCount++;
                if (bufferView) {
                    if (bufferView.byteLength != gltfRuntime.buffers[buf].byteLength) {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Buffer named " + buf + " is length " + bufferView.byteLength + ". Expected: " + buffer.byteLength); // Improve error message
                    }
                    gltfRuntime.loadedBufferViews[buf] = bufferView;
                }
                if (gltfRuntime.loadedBufferCount === gltfRuntime.buffersCount) {
                    onLoad();
                }
            }, function () {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Error when loading buffer named " + buf + " located at " + buffer.uri);
            });
        };
        for (var buf in gltfRuntime.buffers) {
            hasBuffers = true;
            var buffer = gltfRuntime.buffers[buf];
            if (buffer) {
                processBuffer.bind(this, buf, buffer)();
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("No buffer named: " + buf);
            }
        }
        if (!hasBuffers) {
            onLoad();
        }
    };
    GLTFLoader.prototype._createNodes = function (gltfRuntime) {
        var currentScene = gltfRuntime.currentScene;
        if (currentScene) {
            // Only one scene even if multiple scenes are defined
            for (var i = 0; i < currentScene.nodes.length; i++) {
                TraverseNodes(gltfRuntime, currentScene.nodes[i], null);
            }
        }
        else {
            // Load all scenes
            for (var thing in gltfRuntime.scenes) {
                currentScene = gltfRuntime.scenes[thing];
                for (var i = 0; i < currentScene.nodes.length; i++) {
                    TraverseNodes(gltfRuntime, currentScene.nodes[i], null);
                }
            }
        }
    };
    GLTFLoader.Extensions = {};
    return GLTFLoader;
}());

/** @internal */
var GLTFLoaderExtension = /** @class */ (function () {
    function GLTFLoaderExtension(name) {
        this._name = name;
    }
    Object.defineProperty(GLTFLoaderExtension.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Defines an override for loading the runtime
     * Return true to stop further extensions from loading the runtime
     * @param scene
     * @param data
     * @param rootUrl
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from loading the runtime
     */
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.prototype.loadRuntimeAsync = function (scene, data, rootUrl, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an onverride for creating gltf runtime
     * Return true to stop further extensions from creating the runtime
     * @param gltfRuntime
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from creating the runtime
     */
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.prototype.loadRuntimeExtensionsAsync = function (gltfRuntime, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for loading buffers
     * Return true to stop further extensions from loading this buffer
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     * @param onProgress
     * @returns true to stop further extensions from loading this buffer
     */
    // eslint-disable-next-line no-restricted-syntax
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.prototype.loadBufferAsync = function (gltfRuntime, id, onSuccess, onError, onProgress) {
        return false;
    };
    /**
     * Defines an override for loading texture buffers
     * Return true to stop further extensions from loading this texture data
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from loading this texture data
     */
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.prototype.loadTextureBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for creating textures
     * Return true to stop further extensions from loading this texture
     * @param gltfRuntime
     * @param id
     * @param buffer
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from loading this texture
     */
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.prototype.createTextureAsync = function (gltfRuntime, id, buffer, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for loading shader strings
     * Return true to stop further extensions from loading this shader data
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from loading this shader data
     */
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.prototype.loadShaderStringAsync = function (gltfRuntime, id, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for loading materials
     * Return true to stop further extensions from loading this material
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from loading this material
     */
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.prototype.loadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        return false;
    };
    // ---------
    // Utilities
    // ---------
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.LoadRuntimeAsync = function (scene, data, rootUrl, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadRuntimeAsync(scene, data, rootUrl, onSuccess, onError);
        }, function () {
            setTimeout(function () {
                if (!onSuccess) {
                    return;
                }
                onSuccess(GLTFLoaderBase.CreateRuntime(data.json, scene, rootUrl));
            });
        });
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.LoadRuntimeExtensionsAsync = function (gltfRuntime, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadRuntimeExtensionsAsync(gltfRuntime, onSuccess, onError);
        }, function () {
            setTimeout(function () {
                onSuccess();
            });
        });
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.LoadBufferAsync = function (gltfRuntime, id, onSuccess, onError, onProgress) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadBufferAsync(gltfRuntime, id, onSuccess, onError, onProgress);
        }, function () {
            GLTFLoaderBase.LoadBufferAsync(gltfRuntime, id, onSuccess, onError, onProgress);
        });
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.LoadTextureAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._LoadTextureBufferAsync(gltfRuntime, id, function (buffer) {
            if (buffer) {
                GLTFLoaderExtension._CreateTextureAsync(gltfRuntime, id, buffer, onSuccess, onError);
            }
        }, onError);
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.LoadShaderStringAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadShaderStringAsync(gltfRuntime, id, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.LoadShaderStringAsync(gltfRuntime, id, onSuccess, onError);
        });
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension.LoadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadMaterialAsync(gltfRuntime, id, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.LoadMaterialAsync(gltfRuntime, id, onSuccess, onError);
        });
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension._LoadTextureBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadTextureBufferAsync(gltfRuntime, id, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.LoadTextureBufferAsync(gltfRuntime, id, onSuccess, onError);
        });
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFLoaderExtension._CreateTextureAsync = function (gltfRuntime, id, buffer, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.createTextureAsync(gltfRuntime, id, buffer, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.CreateTextureAsync(gltfRuntime, id, buffer, onSuccess);
        });
    };
    GLTFLoaderExtension._ApplyExtensions = function (func, defaultFunc) {
        for (var extensionName in GLTFLoader.Extensions) {
            var loaderExtension = GLTFLoader.Extensions[extensionName];
            if (func(loaderExtension)) {
                return;
            }
        }
        defaultFunc();
    };
    return GLTFLoaderExtension;
}());

_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader._CreateGLTF1Loader = function () { return new GLTFLoader(); };


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts":
/*!*****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EBlendingFunction: () => (/* binding */ EBlendingFunction),
/* harmony export */   EComponentType: () => (/* binding */ EComponentType),
/* harmony export */   ECullingType: () => (/* binding */ ECullingType),
/* harmony export */   EParameterType: () => (/* binding */ EParameterType),
/* harmony export */   EShaderType: () => (/* binding */ EShaderType),
/* harmony export */   ETextureFilterType: () => (/* binding */ ETextureFilterType),
/* harmony export */   ETextureFormat: () => (/* binding */ ETextureFormat),
/* harmony export */   ETextureWrapMode: () => (/* binding */ ETextureWrapMode)
/* harmony export */ });
/**
 * Enums
 * @internal
 */
var EComponentType;
(function (EComponentType) {
    EComponentType[EComponentType["BYTE"] = 5120] = "BYTE";
    EComponentType[EComponentType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    EComponentType[EComponentType["SHORT"] = 5122] = "SHORT";
    EComponentType[EComponentType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    EComponentType[EComponentType["FLOAT"] = 5126] = "FLOAT";
})(EComponentType || (EComponentType = {}));
/** @internal */
var EShaderType;
(function (EShaderType) {
    EShaderType[EShaderType["FRAGMENT"] = 35632] = "FRAGMENT";
    EShaderType[EShaderType["VERTEX"] = 35633] = "VERTEX";
})(EShaderType || (EShaderType = {}));
/** @internal */
var EParameterType;
(function (EParameterType) {
    EParameterType[EParameterType["BYTE"] = 5120] = "BYTE";
    EParameterType[EParameterType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    EParameterType[EParameterType["SHORT"] = 5122] = "SHORT";
    EParameterType[EParameterType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    EParameterType[EParameterType["INT"] = 5124] = "INT";
    EParameterType[EParameterType["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
    EParameterType[EParameterType["FLOAT"] = 5126] = "FLOAT";
    EParameterType[EParameterType["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
    EParameterType[EParameterType["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
    EParameterType[EParameterType["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
    EParameterType[EParameterType["INT_VEC2"] = 35667] = "INT_VEC2";
    EParameterType[EParameterType["INT_VEC3"] = 35668] = "INT_VEC3";
    EParameterType[EParameterType["INT_VEC4"] = 35669] = "INT_VEC4";
    EParameterType[EParameterType["BOOL"] = 35670] = "BOOL";
    EParameterType[EParameterType["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
    EParameterType[EParameterType["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
    EParameterType[EParameterType["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
    EParameterType[EParameterType["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
    EParameterType[EParameterType["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
    EParameterType[EParameterType["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
    EParameterType[EParameterType["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
})(EParameterType || (EParameterType = {}));
/** @internal */
var ETextureWrapMode;
(function (ETextureWrapMode) {
    ETextureWrapMode[ETextureWrapMode["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
    ETextureWrapMode[ETextureWrapMode["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
    ETextureWrapMode[ETextureWrapMode["REPEAT"] = 10497] = "REPEAT";
})(ETextureWrapMode || (ETextureWrapMode = {}));
/** @internal */
var ETextureFilterType;
(function (ETextureFilterType) {
    ETextureFilterType[ETextureFilterType["NEAREST"] = 9728] = "NEAREST";
    ETextureFilterType[ETextureFilterType["LINEAR"] = 9728] = "LINEAR";
    ETextureFilterType[ETextureFilterType["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
    ETextureFilterType[ETextureFilterType["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
    ETextureFilterType[ETextureFilterType["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
    ETextureFilterType[ETextureFilterType["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
})(ETextureFilterType || (ETextureFilterType = {}));
/** @internal */
var ETextureFormat;
(function (ETextureFormat) {
    ETextureFormat[ETextureFormat["ALPHA"] = 6406] = "ALPHA";
    ETextureFormat[ETextureFormat["RGB"] = 6407] = "RGB";
    ETextureFormat[ETextureFormat["RGBA"] = 6408] = "RGBA";
    ETextureFormat[ETextureFormat["LUMINANCE"] = 6409] = "LUMINANCE";
    ETextureFormat[ETextureFormat["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
})(ETextureFormat || (ETextureFormat = {}));
/** @internal */
var ECullingType;
(function (ECullingType) {
    ECullingType[ECullingType["FRONT"] = 1028] = "FRONT";
    ECullingType[ECullingType["BACK"] = 1029] = "BACK";
    ECullingType[ECullingType["FRONT_AND_BACK"] = 1032] = "FRONT_AND_BACK";
})(ECullingType || (ECullingType = {}));
/** @internal */
var EBlendingFunction;
(function (EBlendingFunction) {
    EBlendingFunction[EBlendingFunction["ZERO"] = 0] = "ZERO";
    EBlendingFunction[EBlendingFunction["ONE"] = 1] = "ONE";
    EBlendingFunction[EBlendingFunction["SRC_COLOR"] = 768] = "SRC_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_SRC_COLOR"] = 769] = "ONE_MINUS_SRC_COLOR";
    EBlendingFunction[EBlendingFunction["DST_COLOR"] = 774] = "DST_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_DST_COLOR"] = 775] = "ONE_MINUS_DST_COLOR";
    EBlendingFunction[EBlendingFunction["SRC_ALPHA"] = 770] = "SRC_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_SRC_ALPHA"] = 771] = "ONE_MINUS_SRC_ALPHA";
    EBlendingFunction[EBlendingFunction["DST_ALPHA"] = 772] = "DST_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_DST_ALPHA"] = 773] = "ONE_MINUS_DST_ALPHA";
    EBlendingFunction[EBlendingFunction["CONSTANT_COLOR"] = 32769] = "CONSTANT_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_CONSTANT_COLOR"] = 32770] = "ONE_MINUS_CONSTANT_COLOR";
    EBlendingFunction[EBlendingFunction["CONSTANT_ALPHA"] = 32771] = "CONSTANT_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_CONSTANT_ALPHA"] = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
    EBlendingFunction[EBlendingFunction["SRC_ALPHA_SATURATE"] = 776] = "SRC_ALPHA_SATURATE";
})(EBlendingFunction || (EBlendingFunction = {}));


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts":
/*!************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFUtils: () => (/* binding */ GLTFUtils)
/* harmony export */ });
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/Textures/texture */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__);






/**
 * Utils functions for GLTF
 * @internal
 * @deprecated
 */
var GLTFUtils = /** @class */ (function () {
    function GLTFUtils() {
    }
    /**
     * Sets the given "parameter" matrix
     * @param scene the Scene object
     * @param source the source node where to pick the matrix
     * @param parameter the GLTF technique parameter
     * @param uniformName the name of the shader's uniform
     * @param shaderMaterial the shader material
     */
    GLTFUtils.SetMatrix = function (scene, source, parameter, uniformName, shaderMaterial) {
        var mat = null;
        if (parameter.semantic === "MODEL") {
            mat = source.getWorldMatrix();
        }
        else if (parameter.semantic === "PROJECTION") {
            mat = scene.getProjectionMatrix();
        }
        else if (parameter.semantic === "VIEW") {
            mat = scene.getViewMatrix();
        }
        else if (parameter.semantic === "MODELVIEWINVERSETRANSPOSE") {
            mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Transpose(source.getWorldMatrix().multiply(scene.getViewMatrix()).invert());
        }
        else if (parameter.semantic === "MODELVIEW") {
            mat = source.getWorldMatrix().multiply(scene.getViewMatrix());
        }
        else if (parameter.semantic === "MODELVIEWPROJECTION") {
            mat = source.getWorldMatrix().multiply(scene.getTransformMatrix());
        }
        else if (parameter.semantic === "MODELINVERSE") {
            mat = source.getWorldMatrix().invert();
        }
        else if (parameter.semantic === "VIEWINVERSE") {
            mat = scene.getViewMatrix().invert();
        }
        else if (parameter.semantic === "PROJECTIONINVERSE") {
            mat = scene.getProjectionMatrix().invert();
        }
        else if (parameter.semantic === "MODELVIEWINVERSE") {
            mat = source.getWorldMatrix().multiply(scene.getViewMatrix()).invert();
        }
        else if (parameter.semantic === "MODELVIEWPROJECTIONINVERSE") {
            mat = source.getWorldMatrix().multiply(scene.getTransformMatrix()).invert();
        }
        else if (parameter.semantic === "MODELINVERSETRANSPOSE") {
            mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Transpose(source.getWorldMatrix().invert());
        }
        if (mat) {
            switch (parameter.type) {
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT2:
                    shaderMaterial.setMatrix2x2(uniformName, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.GetAsMatrix2x2(mat));
                    break;
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT3:
                    shaderMaterial.setMatrix3x3(uniformName, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.GetAsMatrix3x3(mat));
                    break;
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT4:
                    shaderMaterial.setMatrix(uniformName, mat);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Sets the given "parameter" matrix
     * @param shaderMaterial the shader material
     * @param uniform the name of the shader's uniform
     * @param value the value of the uniform
     * @param type the uniform's type (EParameterType FLOAT, VEC2, VEC3 or VEC4)
     * @returns true if set, else false
     */
    GLTFUtils.SetUniform = function (shaderMaterial, uniform, value, type) {
        switch (type) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT:
                shaderMaterial.setFloat(uniform, value);
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_VEC2:
                shaderMaterial.setVector2(uniform, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.FromArray(value));
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_VEC3:
                shaderMaterial.setVector3(uniform, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(value));
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_VEC4:
                shaderMaterial.setVector4(uniform, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(value));
                return true;
            default:
                return false;
        }
    };
    /**
     * Returns the wrap mode of the texture
     * @param mode the mode value
     * @returns the wrap mode (TEXTURE_WRAP_ADDRESSMODE, MIRROR_ADDRESSMODE or CLAMP_ADDRESSMODE)
     */
    GLTFUtils.GetWrapMode = function (mode) {
        switch (mode) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureWrapMode.CLAMP_TO_EDGE:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.CLAMP_ADDRESSMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureWrapMode.MIRRORED_REPEAT:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.MIRROR_ADDRESSMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureWrapMode.REPEAT:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.WRAP_ADDRESSMODE;
            default:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.WRAP_ADDRESSMODE;
        }
    };
    /**
     * Returns the byte stride giving an accessor
     * @param accessor the GLTF accessor objet
     * @returns the byte stride
     */
    GLTFUtils.GetByteStrideFromType = function (accessor) {
        // Needs this function since "byteStride" isn't requiered in glTF format
        var type = accessor.type;
        switch (type) {
            case "VEC2":
                return 2;
            case "VEC3":
                return 3;
            case "VEC4":
                return 4;
            case "MAT2":
                return 4;
            case "MAT3":
                return 9;
            case "MAT4":
                return 16;
            default:
                return 1;
        }
    };
    /**
     * Returns the texture filter mode giving a mode value
     * @param mode the filter mode value
     * @returns the filter mode (TODO - needs to be a type?)
     */
    GLTFUtils.GetTextureFilterMode = function (mode) {
        switch (mode) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_NEAREST:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_LINEAR:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.TRILINEAR_SAMPLINGMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST_MIPMAP_NEAREST:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.NEAREST_SAMPLINGMODE;
            default:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.BILINEAR_SAMPLINGMODE;
        }
    };
    GLTFUtils.GetBufferFromBufferView = function (gltfRuntime, bufferView, byteOffset, byteLength, componentType) {
        byteOffset = bufferView.byteOffset + byteOffset;
        var loadedBufferView = gltfRuntime.loadedBufferViews[bufferView.buffer];
        if (byteOffset + byteLength > loadedBufferView.byteLength) {
            throw new Error("Buffer access is out of range");
        }
        var buffer = loadedBufferView.buffer;
        byteOffset += loadedBufferView.byteOffset;
        switch (componentType) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.BYTE:
                return new Int8Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.UNSIGNED_BYTE:
                return new Uint8Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.SHORT:
                return new Int16Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.UNSIGNED_SHORT:
                return new Uint16Array(buffer, byteOffset, byteLength);
            default:
                return new Float32Array(buffer, byteOffset, byteLength);
        }
    };
    /**
     * Returns a buffer from its accessor
     * @param gltfRuntime the GLTF runtime
     * @param accessor the GLTF accessor
     * @returns an array buffer view
     */
    GLTFUtils.GetBufferFromAccessor = function (gltfRuntime, accessor) {
        var bufferView = gltfRuntime.bufferViews[accessor.bufferView];
        var byteLength = accessor.count * GLTFUtils.GetByteStrideFromType(accessor);
        return GLTFUtils.GetBufferFromBufferView(gltfRuntime, bufferView, accessor.byteOffset, byteLength, accessor.componentType);
    };
    /**
     * Decodes a buffer view into a string
     * @param view the buffer view
     * @returns a string
     */
    GLTFUtils.DecodeBufferToText = function (view) {
        var result = "";
        var length = view.byteLength;
        for (var i = 0; i < length; ++i) {
            result += String.fromCharCode(view[i]);
        }
        return result;
    };
    /**
     * Returns the default material of gltf. Related to
     * https://github.com/KhronosGroup/glTF/tree/master/specification/1.0#appendix-a-default-material
     * @param scene the Babylon.js scene
     * @returns the default Babylon material
     */
    GLTFUtils.GetDefaultMaterial = function (scene) {
        if (!GLTFUtils._DefaultMaterial) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore["GLTFDefaultMaterialVertexShader"] = [
                "precision highp float;",
                "",
                "uniform mat4 worldView;",
                "uniform mat4 projection;",
                "",
                "attribute vec3 position;",
                "",
                "void main(void)",
                "{",
                "    gl_Position = projection * worldView * vec4(position, 1.0);",
                "}",
            ].join("\n");
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore["GLTFDefaultMaterialPixelShader"] = [
                "precision highp float;",
                "",
                "uniform vec4 u_emission;",
                "",
                "void main(void)",
                "{",
                "    gl_FragColor = u_emission;",
                "}",
            ].join("\n");
            var shaderPath = {
                vertex: "GLTFDefaultMaterial",
                fragment: "GLTFDefaultMaterial",
            };
            var options = {
                attributes: ["position"],
                uniforms: ["worldView", "projection", "u_emission"],
                samplers: new Array(),
                needAlphaBlending: false,
            };
            GLTFUtils._DefaultMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.ShaderMaterial("GLTFDefaultMaterial", scene, shaderPath, options);
            GLTFUtils._DefaultMaterial.setColor4("u_emission", new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color4(0.5, 0.5, 0.5, 1.0));
        }
        return GLTFUtils._DefaultMaterial;
    };
    // The GLTF default material
    GLTFUtils._DefaultMaterial = null;
    return GLTFUtils;
}());



/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFMaterialsCommonExtension.ts":
/*!*************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFMaterialsCommonExtension.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFMaterialsCommonExtension: () => (/* binding */ GLTFMaterialsCommonExtension)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoader */ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Lights/spotLight */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__);











/**
 * @internal
 * @deprecated
 */
var GLTFMaterialsCommonExtension = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(GLTFMaterialsCommonExtension, _super);
    function GLTFMaterialsCommonExtension() {
        return _super.call(this, "KHR_materials_common") || this;
    }
    // eslint-disable-next-line no-restricted-syntax
    GLTFMaterialsCommonExtension.prototype.loadRuntimeExtensionsAsync = function (gltfRuntime) {
        if (!gltfRuntime.extensions) {
            return false;
        }
        var extension = gltfRuntime.extensions[this.name];
        if (!extension) {
            return false;
        }
        // Create lights
        var lights = extension.lights;
        if (lights) {
            for (var thing in lights) {
                var light = lights[thing];
                switch (light.type) {
                    case "ambient": {
                        var ambientLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.HemisphericLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0), gltfRuntime.scene);
                        var ambient = light.ambient;
                        if (ambient) {
                            ambientLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(ambient.color || [1, 1, 1]);
                        }
                        break;
                    }
                    case "point": {
                        var pointLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.PointLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(10, 10, 10), gltfRuntime.scene);
                        var point = light.point;
                        if (point) {
                            pointLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(point.color || [1, 1, 1]);
                        }
                        break;
                    }
                    case "directional": {
                        var dirLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -1, 0), gltfRuntime.scene);
                        var directional = light.directional;
                        if (directional) {
                            dirLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(directional.color || [1, 1, 1]);
                        }
                        break;
                    }
                    case "spot": {
                        var spot = light.spot;
                        if (spot) {
                            var spotLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.SpotLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 10, 0), new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -1, 0), spot.fallOffAngle || Math.PI, spot.fallOffExponent || 0.0, gltfRuntime.scene);
                            spotLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(spot.color || [1, 1, 1]);
                        }
                        break;
                    }
                    default:
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn('GLTF Material Common extension: light type "' + light.type + "” not supported");
                        break;
                }
            }
        }
        return false;
    };
    // eslint-disable-next-line no-restricted-syntax
    GLTFMaterialsCommonExtension.prototype.loadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        var material = gltfRuntime.materials[id];
        if (!material || !material.extensions) {
            return false;
        }
        var extension = material.extensions[this.name];
        if (!extension) {
            return false;
        }
        var standardMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial(id, gltfRuntime.scene);
        standardMaterial.sideOrientation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.CounterClockWiseSideOrientation;
        if (extension.technique === "CONSTANT") {
            standardMaterial.disableLighting = true;
        }
        standardMaterial.backFaceCulling = extension.doubleSided === undefined ? false : !extension.doubleSided;
        standardMaterial.alpha = extension.values.transparency === undefined ? 1.0 : extension.values.transparency;
        standardMaterial.specularPower = extension.values.shininess === undefined ? 0.0 : extension.values.shininess;
        // Ambient
        if (typeof extension.values.ambient === "string") {
            this._loadTexture(gltfRuntime, extension.values.ambient, standardMaterial, "ambientTexture", onError);
        }
        else {
            standardMaterial.ambientColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.ambient || [0, 0, 0]);
        }
        // Diffuse
        if (typeof extension.values.diffuse === "string") {
            this._loadTexture(gltfRuntime, extension.values.diffuse, standardMaterial, "diffuseTexture", onError);
        }
        else {
            standardMaterial.diffuseColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.diffuse || [0, 0, 0]);
        }
        // Emission
        if (typeof extension.values.emission === "string") {
            this._loadTexture(gltfRuntime, extension.values.emission, standardMaterial, "emissiveTexture", onError);
        }
        else {
            standardMaterial.emissiveColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.emission || [0, 0, 0]);
        }
        // Specular
        if (typeof extension.values.specular === "string") {
            this._loadTexture(gltfRuntime, extension.values.specular, standardMaterial, "specularTexture", onError);
        }
        else {
            standardMaterial.specularColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.specular || [0, 0, 0]);
        }
        return true;
    };
    GLTFMaterialsCommonExtension.prototype._loadTexture = function (gltfRuntime, id, material, propertyPath, onError) {
        // Create buffer from texture url
        _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderBase.LoadTextureBufferAsync(gltfRuntime, id, function (buffer) {
            // Create texture from buffer
            _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderBase.CreateTextureAsync(gltfRuntime, id, buffer, function (texture) { return (material[propertyPath] = texture); });
        }, onError);
    };
    return GLTFMaterialsCommonExtension;
}(_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderExtension));

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(new GLTFMaterialsCommonExtension());


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/index.ts":
/*!**************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EBlendingFunction: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EBlendingFunction),
/* harmony export */   EComponentType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EComponentType),
/* harmony export */   ECullingType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ECullingType),
/* harmony export */   EParameterType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EParameterType),
/* harmony export */   EShaderType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EShaderType),
/* harmony export */   ETextureFilterType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ETextureFilterType),
/* harmony export */   ETextureFormat: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ETextureFormat),
/* harmony export */   ETextureWrapMode: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ETextureWrapMode),
/* harmony export */   GLTFBinaryExtension: () => (/* reexport safe */ _glTFBinaryExtension__WEBPACK_IMPORTED_MODULE_0__.GLTFBinaryExtension),
/* harmony export */   GLTFLoader: () => (/* reexport safe */ _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader),
/* harmony export */   GLTFLoaderBase: () => (/* reexport safe */ _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderBase),
/* harmony export */   GLTFLoaderExtension: () => (/* reexport safe */ _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderExtension),
/* harmony export */   GLTFMaterialsCommonExtension: () => (/* reexport safe */ _glTFMaterialsCommonExtension__WEBPACK_IMPORTED_MODULE_4__.GLTFMaterialsCommonExtension),
/* harmony export */   GLTFUtils: () => (/* reexport safe */ _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_3__.GLTFUtils)
/* harmony export */ });
/* harmony import */ var _glTFBinaryExtension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFBinaryExtension */ "../../../dev/loaders/src/glTF/1.0/glTFBinaryExtension.ts");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFLoader */ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts");
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glTFLoaderUtils */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts");
/* harmony import */ var _glTFMaterialsCommonExtension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glTFMaterialsCommonExtension */ "../../../dev/loaders/src/glTF/1.0/glTFMaterialsCommonExtension.ts");







/***/ }),

/***/ "../../../dev/loaders/src/glTF/glTFFileLoader.metadata.ts":
/*!****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/glTFFileLoader.metadata.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFFileLoaderMetadata: () => (/* binding */ GLTFFileLoaderMetadata),
/* harmony export */   GLTFMagicBase64Encoded: () => (/* binding */ GLTFMagicBase64Encoded)
/* harmony export */ });
var GLTFMagicBase64Encoded = "Z2xURg"; // "glTF" base64 encoded (without the quotes!)
var GLTFFileLoaderMetadata = {
    name: "gltf",
    extensions: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ".gltf": { isBinary: false, mimeType: "model/gltf+json" },
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ".glb": { isBinary: true, mimeType: "model/gltf-binary" },
    },
    canDirectLoad: function (data) {
        return ((data.indexOf("asset") !== -1 && data.indexOf("version") !== -1) ||
            data.startsWith("data:base64," + GLTFMagicBase64Encoded) || // this is technically incorrect, but will continue to support for backcompat.
            data.startsWith("data:;base64," + GLTFMagicBase64Encoded) ||
            data.startsWith("data:application/octet-stream;base64," + GLTFMagicBase64Encoded) ||
            data.startsWith("data:model/gltf-binary;base64," + GLTFMagicBase64Encoded));
    },
};


/***/ }),

/***/ "../../../dev/loaders/src/glTF/glTFFileLoader.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/glTFFileLoader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFFileLoader: () => (/* binding */ GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* binding */ GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* binding */ GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* binding */ GLTFLoaderState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/error */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFValidation */ "../../../dev/loaders/src/glTF/glTFValidation.ts");
/* harmony import */ var _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFFileLoader.metadata */ "../../../dev/loaders/src/glTF/glTFFileLoader.metadata.ts");











function readAsync(arrayBuffer, byteOffset, byteLength) {
    try {
        return Promise.resolve(new Uint8Array(arrayBuffer, byteOffset, byteLength));
    }
    catch (e) {
        return Promise.reject(e);
    }
}
function readViewAsync(arrayBufferView, byteOffset, byteLength) {
    try {
        if (byteOffset < 0 || byteOffset >= arrayBufferView.byteLength) {
            throw new RangeError("Offset is out of range.");
        }
        if (byteOffset + byteLength > arrayBufferView.byteLength) {
            throw new RangeError("Length is out of range.");
        }
        return Promise.resolve(new Uint8Array(arrayBufferView.buffer, arrayBufferView.byteOffset + byteOffset, byteLength));
    }
    catch (e) {
        return Promise.reject(e);
    }
}
/**
 * Mode that determines the coordinate system to use.
 */
var GLTFLoaderCoordinateSystemMode;
(function (GLTFLoaderCoordinateSystemMode) {
    /**
     * Automatically convert the glTF right-handed data to the appropriate system based on the current coordinate system mode of the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["AUTO"] = 0] = "AUTO";
    /**
     * Sets the useRightHandedSystem flag on the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["FORCE_RIGHT_HANDED"] = 1] = "FORCE_RIGHT_HANDED";
})(GLTFLoaderCoordinateSystemMode || (GLTFLoaderCoordinateSystemMode = {}));
/**
 * Mode that determines what animations will start.
 */
var GLTFLoaderAnimationStartMode;
(function (GLTFLoaderAnimationStartMode) {
    /**
     * No animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["NONE"] = 0] = "NONE";
    /**
     * The first animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["FIRST"] = 1] = "FIRST";
    /**
     * All animations will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["ALL"] = 2] = "ALL";
})(GLTFLoaderAnimationStartMode || (GLTFLoaderAnimationStartMode = {}));
/**
 * Loader state.
 */
var GLTFLoaderState;
(function (GLTFLoaderState) {
    /**
     * The asset is loading.
     */
    GLTFLoaderState[GLTFLoaderState["LOADING"] = 0] = "LOADING";
    /**
     * The asset is ready for rendering.
     */
    GLTFLoaderState[GLTFLoaderState["READY"] = 1] = "READY";
    /**
     * The asset is completely loaded.
     */
    GLTFLoaderState[GLTFLoaderState["COMPLETE"] = 2] = "COMPLETE";
})(GLTFLoaderState || (GLTFLoaderState = {}));
var GLTFLoaderOptions = /** @class */ (function () {
    function GLTFLoaderOptions() {
        // ----------
        // V2 options
        // ----------
        /**
         * The coordinate system mode. Defaults to AUTO.
         */
        this.coordinateSystemMode = GLTFLoaderCoordinateSystemMode.AUTO;
        /**
         * The animation start mode. Defaults to FIRST.
         */
        this.animationStartMode = GLTFLoaderAnimationStartMode.FIRST;
        /**
         * Defines if the loader should load node animations. Defaults to true.
         * NOTE: The animation of this node will still load if the node is also a joint of a skin and `loadSkins` is true.
         */
        this.loadNodeAnimations = true;
        /**
         * Defines if the loader should load skins. Defaults to true.
         */
        this.loadSkins = true;
        /**
         * Defines if the loader should load morph targets. Defaults to true.
         */
        this.loadMorphTargets = true;
        /**
         * Defines if the loader should compile materials before raising the success callback. Defaults to false.
         */
        this.compileMaterials = false;
        /**
         * Defines if the loader should also compile materials with clip planes. Defaults to false.
         */
        this.useClipPlane = false;
        /**
         * Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.
         */
        this.compileShadowGenerators = false;
        /**
         * Defines if the Alpha blended materials are only applied as coverage.
         * If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
         * If true, no extra effects are applied to transparent pixels.
         */
        this.transparencyAsCoverage = false;
        /**
         * Defines if the loader should use range requests when load binary glTF files from HTTP.
         * Enabling will disable offline support and glTF validator.
         * Defaults to false.
         */
        this.useRangeRequests = false;
        /**
         * Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.
         */
        this.createInstances = true;
        /**
         * Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.
         */
        this.alwaysComputeBoundingBox = false;
        /**
         * If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.
         */
        this.loadAllMaterials = false;
        /**
         * If true, load only the materials defined in the file. Defaults to false.
         */
        this.loadOnlyMaterials = false;
        /**
         * If true, do not load any materials defined in the file. Defaults to false.
         */
        this.skipMaterials = false;
        /**
         * If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.
         */
        this.useSRGBBuffers = true;
        /**
         * When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.
         */
        this.targetFps = 60;
        /**
         * Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
         * Set this to true if loading assets with invalid `skin.skeleton` values.
         */
        this.alwaysComputeSkeletonRootNode = false;
        /**
         * If true, the loader will derive the name for Babylon textures from the glTF texture name, image name, or image url. Defaults to false.
         * Note that it is possible for multiple Babylon textures to share the same name when the Babylon textures load from the same glTF texture or image.
         */
        this.useGltfTextureNames = false;
        /**
         * Function called before loading a url referenced by the asset.
         * @param url url referenced by the asset
         * @returns Async url to load
         */
        this.preprocessUrlAsync = function (url) { return Promise.resolve(url); };
        /**
         * Defines options for glTF extensions.
         */
        this.extensionOptions = {};
    }
    // eslint-disable-next-line babylonjs/available
    GLTFLoaderOptions.prototype.copyFrom = function (options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        if (options) {
            this.onParsed = options.onParsed;
            this.coordinateSystemMode = (_a = options.coordinateSystemMode) !== null && _a !== void 0 ? _a : this.coordinateSystemMode;
            this.animationStartMode = (_b = options.animationStartMode) !== null && _b !== void 0 ? _b : this.animationStartMode;
            this.loadNodeAnimations = (_c = options.loadNodeAnimations) !== null && _c !== void 0 ? _c : this.loadNodeAnimations;
            this.loadSkins = (_d = options.loadSkins) !== null && _d !== void 0 ? _d : this.loadSkins;
            this.loadMorphTargets = (_e = options.loadMorphTargets) !== null && _e !== void 0 ? _e : this.loadMorphTargets;
            this.compileMaterials = (_f = options.compileMaterials) !== null && _f !== void 0 ? _f : this.compileMaterials;
            this.useClipPlane = (_g = options.useClipPlane) !== null && _g !== void 0 ? _g : this.useClipPlane;
            this.compileShadowGenerators = (_h = options.compileShadowGenerators) !== null && _h !== void 0 ? _h : this.compileShadowGenerators;
            this.transparencyAsCoverage = (_j = options.transparencyAsCoverage) !== null && _j !== void 0 ? _j : this.transparencyAsCoverage;
            this.useRangeRequests = (_k = options.useRangeRequests) !== null && _k !== void 0 ? _k : this.useRangeRequests;
            this.createInstances = (_l = options.createInstances) !== null && _l !== void 0 ? _l : this.createInstances;
            this.alwaysComputeBoundingBox = (_m = options.alwaysComputeBoundingBox) !== null && _m !== void 0 ? _m : this.alwaysComputeBoundingBox;
            this.loadAllMaterials = (_o = options.loadAllMaterials) !== null && _o !== void 0 ? _o : this.loadAllMaterials;
            this.loadOnlyMaterials = (_p = options.loadOnlyMaterials) !== null && _p !== void 0 ? _p : this.loadOnlyMaterials;
            this.skipMaterials = (_q = options.skipMaterials) !== null && _q !== void 0 ? _q : this.skipMaterials;
            this.useSRGBBuffers = (_r = options.useSRGBBuffers) !== null && _r !== void 0 ? _r : this.useSRGBBuffers;
            this.targetFps = (_s = options.targetFps) !== null && _s !== void 0 ? _s : this.targetFps;
            this.alwaysComputeSkeletonRootNode = (_t = options.alwaysComputeSkeletonRootNode) !== null && _t !== void 0 ? _t : this.alwaysComputeSkeletonRootNode;
            this.useGltfTextureNames = (_u = options.useGltfTextureNames) !== null && _u !== void 0 ? _u : this.useGltfTextureNames;
            this.preprocessUrlAsync = (_v = options.preprocessUrlAsync) !== null && _v !== void 0 ? _v : this.preprocessUrlAsync;
            this.customRootNode = options.customRootNode;
            this.onMeshLoaded = options.onMeshLoaded;
            this.onSkinLoaded = options.onSkinLoaded;
            this.onTextureLoaded = options.onTextureLoaded;
            this.onMaterialLoaded = options.onMaterialLoaded;
            this.onCameraLoaded = options.onCameraLoaded;
            this.extensionOptions = (_w = options.extensionOptions) !== null && _w !== void 0 ? _w : this.extensionOptions;
        }
    };
    return GLTFLoaderOptions;
}());
/**
 * File loader for loading glTF files into a scene.
 */
var GLTFFileLoader = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(GLTFFileLoader, _super);
    /**
     * Creates a new glTF file loader.
     * @param options The options for the loader
     */
    function GLTFFileLoader(options) {
        var _this = _super.call(this) || this;
        // --------------------
        // Begin Common options
        // --------------------
        /**
         * Raised when the asset has been parsed
         */
        _this.onParsedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        // --------------
        // End V1 options
        // --------------
        /**
         * Observable raised when the loader creates a mesh after parsing the glTF properties of the mesh.
         * Note that the observable is raised as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)
         */
        _this.onMeshLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a skin after parsing the glTF properties of the skin node.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh
         * @param node - the transform node that corresponds to the original glTF skin node used for animations
         * @param skinnedNode - the transform node that is the skinned mesh itself or the parent of the skinned meshes
         */
        _this.onSkinLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a texture after parsing the glTF properties of the texture.
         */
        _this.onTextureLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a material after parsing the glTF properties of the material.
         */
        _this.onMaterialLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a camera after parsing the glTF properties of the camera.
         */
        _this.onCameraLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the asset is completely loaded, immediately before the loader is disposed.
         * For assets with LODs, raised when all of the LODs are complete.
         * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
         */
        _this.onCompleteObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when an error occurs.
         */
        _this.onErrorObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised after the loader is disposed.
         */
        _this.onDisposeObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised after a loader extension is created.
         * Set additional options for a loader extension in this event.
         */
        _this.onExtensionLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Defines if the loader should validate the asset.
         */
        _this.validate = false;
        /**
         * Observable raised after validation when validate is set to true. The event data is the result of the validation.
         */
        _this.onValidatedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        _this._loader = null;
        _this._state = null;
        _this._requests = new Array();
        /**
         * Name of the loader ("gltf")
         */
        _this.name = _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFFileLoaderMetadata.name;
        /** @internal */
        _this.extensions = _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFFileLoaderMetadata.extensions;
        /**
         * Observable raised when the loader state changes.
         */
        _this.onLoaderStateChangedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        _this._logIndentLevel = 0;
        _this._loggingEnabled = false;
        /** @internal */
        _this._log = _this._logDisabled;
        _this._capturePerformanceCounters = false;
        /** @internal */
        _this._startPerformanceCounter = _this._startPerformanceCounterDisabled;
        /** @internal */
        _this._endPerformanceCounter = _this._endPerformanceCounterDisabled;
        _this.copyFrom(options);
        return _this;
    }
    Object.defineProperty(GLTFFileLoader.prototype, "onParsed", {
        /**
         * Raised when the asset has been parsed
         */
        set: function (callback) {
            if (this._onParsedObserver) {
                this.onParsedObservable.remove(this._onParsedObserver);
            }
            if (callback) {
                this._onParsedObserver = this.onParsedObservable.add(callback);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onMeshLoaded", {
        /**
         * Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
         * Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)
         */
        set: function (callback) {
            if (this._onMeshLoadedObserver) {
                this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver);
            }
            if (callback) {
                this._onMeshLoadedObserver = this.onMeshLoadedObservable.add(callback);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onSkinLoaded", {
        /**
         * Callback raised when the loader creates a skin after parsing the glTF properties of the skin node.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh
         */
        set: function (callback) {
            if (this._onSkinLoadedObserver) {
                this.onSkinLoadedObservable.remove(this._onSkinLoadedObserver);
            }
            if (callback) {
                this._onSkinLoadedObserver = this.onSkinLoadedObservable.add(function (data) { return callback(data.node, data.skinnedNode); });
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onTextureLoaded", {
        /**
         * Callback raised when the loader creates a texture after parsing the glTF properties of the texture.
         */
        set: function (callback) {
            if (this._onTextureLoadedObserver) {
                this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver);
            }
            if (callback) {
                this._onTextureLoadedObserver = this.onTextureLoadedObservable.add(callback);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onMaterialLoaded", {
        /**
         * Callback raised when the loader creates a material after parsing the glTF properties of the material.
         */
        set: function (callback) {
            if (this._onMaterialLoadedObserver) {
                this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver);
            }
            if (callback) {
                this._onMaterialLoadedObserver = this.onMaterialLoadedObservable.add(callback);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onCameraLoaded", {
        /**
         * Callback raised when the loader creates a camera after parsing the glTF properties of the camera.
         */
        set: function (callback) {
            if (this._onCameraLoadedObserver) {
                this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver);
            }
            if (callback) {
                this._onCameraLoadedObserver = this.onCameraLoadedObservable.add(callback);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onComplete", {
        /**
         * Callback raised when the asset is completely loaded, immediately before the loader is disposed.
         * For assets with LODs, raised when all of the LODs are complete.
         * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
         */
        set: function (callback) {
            if (this._onCompleteObserver) {
                this.onCompleteObservable.remove(this._onCompleteObserver);
            }
            this._onCompleteObserver = this.onCompleteObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onError", {
        /**
         * Callback raised when an error occurs.
         */
        set: function (callback) {
            if (this._onErrorObserver) {
                this.onErrorObservable.remove(this._onErrorObserver);
            }
            this._onErrorObserver = this.onErrorObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onDispose", {
        /**
         * Callback raised after the loader is disposed.
         */
        set: function (callback) {
            if (this._onDisposeObserver) {
                this.onDisposeObservable.remove(this._onDisposeObserver);
            }
            this._onDisposeObserver = this.onDisposeObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onExtensionLoaded", {
        /**
         * Callback raised after a loader extension is created.
         */
        set: function (callback) {
            if (this._onExtensionLoadedObserver) {
                this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver);
            }
            this._onExtensionLoadedObserver = this.onExtensionLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "loggingEnabled", {
        /**
         * Defines if the loader logging is enabled.
         */
        get: function () {
            return this._loggingEnabled;
        },
        set: function (value) {
            if (this._loggingEnabled === value) {
                return;
            }
            this._loggingEnabled = value;
            if (this._loggingEnabled) {
                this._log = this._logEnabled;
            }
            else {
                this._log = this._logDisabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "capturePerformanceCounters", {
        /**
         * Defines if the loader should capture performance counters.
         */
        get: function () {
            return this._capturePerformanceCounters;
        },
        set: function (value) {
            if (this._capturePerformanceCounters === value) {
                return;
            }
            this._capturePerformanceCounters = value;
            if (this._capturePerformanceCounters) {
                this._startPerformanceCounter = this._startPerformanceCounterEnabled;
                this._endPerformanceCounter = this._endPerformanceCounterEnabled;
            }
            else {
                this._startPerformanceCounter = this._startPerformanceCounterDisabled;
                this._endPerformanceCounter = this._endPerformanceCounterDisabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onValidated", {
        /**
         * Callback raised after a loader extension is created.
         */
        set: function (callback) {
            if (this._onValidatedObserver) {
                this.onValidatedObservable.remove(this._onValidatedObserver);
            }
            this._onValidatedObserver = this.onValidatedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Disposes the loader, releases resources during load, and cancels any outstanding requests.
     */
    GLTFFileLoader.prototype.dispose = function () {
        if (this._loader) {
            this._loader.dispose();
            this._loader = null;
        }
        for (var _i = 0, _a = this._requests; _i < _a.length; _i++) {
            var request = _a[_i];
            request.abort();
        }
        this._requests.length = 0;
        delete this._progressCallback;
        this.preprocessUrlAsync = function (url) { return Promise.resolve(url); };
        this.onMeshLoadedObservable.clear();
        this.onSkinLoadedObservable.clear();
        this.onTextureLoadedObservable.clear();
        this.onMaterialLoadedObservable.clear();
        this.onCameraLoadedObservable.clear();
        this.onCompleteObservable.clear();
        this.onExtensionLoadedObservable.clear();
        this.onDisposeObservable.notifyObservers(undefined);
        this.onDisposeObservable.clear();
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadFile = function (scene, fileOrUrl, rootUrl, onSuccess, onProgress, useArrayBuffer, onError, name) {
        var _this = this;
        if (ArrayBuffer.isView(fileOrUrl)) {
            this._loadBinary(scene, fileOrUrl, rootUrl, onSuccess, onError, name);
            return null;
        }
        this._progressCallback = onProgress;
        var fileName = fileOrUrl.name || babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.GetFilename(fileOrUrl);
        if (useArrayBuffer) {
            if (this.useRangeRequests) {
                if (this.validate) {
                    babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("glTF validation is not supported when range requests are enabled");
                }
                var fileRequest_1 = {
                    abort: function () { },
                    onCompleteObservable: new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable(),
                };
                var dataBuffer = {
                    readAsync: function (byteOffset, byteLength) {
                        return new Promise(function (resolve, reject) {
                            _this._loadFile(scene, fileOrUrl, function (data) {
                                resolve(new Uint8Array(data));
                            }, true, function (error) {
                                reject(error);
                            }, function (webRequest) {
                                webRequest.setRequestHeader("Range", "bytes=".concat(byteOffset, "-").concat(byteOffset + byteLength - 1));
                            });
                        });
                    },
                    byteLength: 0,
                };
                this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader(dataBuffer)).then(function (loaderData) {
                    fileRequest_1.onCompleteObservable.notifyObservers(fileRequest_1);
                    onSuccess(loaderData);
                }, onError ? function (error) { return onError(undefined, error); } : undefined);
                return fileRequest_1;
            }
            return this._loadFile(scene, fileOrUrl, function (data) {
                _this._validate(scene, new Uint8Array(data, 0, data.byteLength), rootUrl, fileName);
                _this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
                    readAsync: function (byteOffset, byteLength) { return readAsync(data, byteOffset, byteLength); },
                    byteLength: data.byteLength,
                })).then(function (loaderData) {
                    onSuccess(loaderData);
                }, onError ? function (error) { return onError(undefined, error); } : undefined);
            }, true, onError);
        }
        else {
            return this._loadFile(scene, fileOrUrl, function (data) {
                try {
                    _this._validate(scene, data, rootUrl, fileName);
                    onSuccess({ json: _this._parseJson(data) });
                }
                catch (_a) {
                    if (onError) {
                        onError();
                    }
                }
            }, false, onError);
        }
    };
    GLTFFileLoader.prototype._loadBinary = function (scene, data, rootUrl, onSuccess, onError, fileName) {
        this._validate(scene, new Uint8Array(data.buffer, data.byteOffset, data.byteLength), rootUrl, fileName);
        this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
            readAsync: function (byteOffset, byteLength) { return readViewAsync(data, byteOffset, byteLength); },
            byteLength: data.byteLength,
        })).then(function (loaderData) {
            onSuccess(loaderData);
        }, onError ? function (error) { return onError(undefined, error); } : undefined);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.importMeshAsync = function (meshesNames, scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            return _this._loader.importMeshAsync(meshesNames, scene, null, data, rootUrl, onProgress, fileName);
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadAsync = function (scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            return _this._loader.loadAsync(scene, data, rootUrl, onProgress, fileName);
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadAssetContainerAsync = function (scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            // Prepare the asset container.
            var container = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.AssetContainer(scene);
            // Get materials/textures when loading to add to container
            var materials = [];
            _this.onMaterialLoadedObservable.add(function (material) {
                materials.push(material);
            });
            var textures = [];
            _this.onTextureLoadedObservable.add(function (texture) {
                textures.push(texture);
            });
            var cameras = [];
            _this.onCameraLoadedObservable.add(function (camera) {
                cameras.push(camera);
            });
            var morphTargetManagers = [];
            _this.onMeshLoadedObservable.add(function (mesh) {
                if (mesh.morphTargetManager) {
                    morphTargetManagers.push(mesh.morphTargetManager);
                }
            });
            return _this._loader.importMeshAsync(null, scene, container, data, rootUrl, onProgress, fileName).then(function (result) {
                Array.prototype.push.apply(container.geometries, result.geometries);
                Array.prototype.push.apply(container.meshes, result.meshes);
                Array.prototype.push.apply(container.particleSystems, result.particleSystems);
                Array.prototype.push.apply(container.skeletons, result.skeletons);
                Array.prototype.push.apply(container.animationGroups, result.animationGroups);
                Array.prototype.push.apply(container.materials, materials);
                Array.prototype.push.apply(container.textures, textures);
                Array.prototype.push.apply(container.lights, result.lights);
                Array.prototype.push.apply(container.transformNodes, result.transformNodes);
                Array.prototype.push.apply(container.cameras, cameras);
                Array.prototype.push.apply(container.morphTargetManagers, morphTargetManagers);
                return container;
            });
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.canDirectLoad = function (data) {
        return _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFFileLoaderMetadata.canDirectLoad(data);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.directLoad = function (scene, data) {
        if (data.startsWith("base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFMagicBase64Encoded) || // this is technically incorrect, but will continue to support for backcompat.
            data.startsWith(";base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFMagicBase64Encoded) ||
            data.startsWith("application/octet-stream;base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFMagicBase64Encoded) ||
            data.startsWith("model/gltf-binary;base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFMagicBase64Encoded)) {
            var arrayBuffer_1 = (0,babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DecodeBase64UrlToBinary)(data);
            this._validate(scene, new Uint8Array(arrayBuffer_1, 0, arrayBuffer_1.byteLength));
            return this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
                readAsync: function (byteOffset, byteLength) { return readAsync(arrayBuffer_1, byteOffset, byteLength); },
                byteLength: arrayBuffer_1.byteLength,
            }));
        }
        this._validate(scene, data);
        return Promise.resolve({ json: this._parseJson(data) });
    };
    /** @internal */
    GLTFFileLoader.prototype.createPlugin = function (options) {
        return new GLTFFileLoader(options[_glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFFileLoaderMetadata.name]);
    };
    Object.defineProperty(GLTFFileLoader.prototype, "loaderState", {
        /**
         * The loader state or null if the loader is not active.
         */
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a promise that resolves when the asset is completely loaded.
     * @returns a promise that resolves when the asset is completely loaded.
     */
    GLTFFileLoader.prototype.whenCompleteAsync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.onCompleteObservable.addOnce(function () {
                resolve();
            });
            _this.onErrorObservable.addOnce(function (reason) {
                reject(reason);
            });
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._setState = function (state) {
        if (this._state === state) {
            return;
        }
        this._state = state;
        this.onLoaderStateChangedObservable.notifyObservers(this._state);
        this._log(GLTFLoaderState[this._state]);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._loadFile = function (scene, fileOrUrl, onSuccess, useArrayBuffer, onError, onOpened) {
        var _this = this;
        var request = scene._loadFile(fileOrUrl, onSuccess, function (event) {
            _this._onProgress(event, request);
        }, true, useArrayBuffer, onError, onOpened);
        request.onCompleteObservable.add(function () {
            // Force the length computable to be true since we can guarantee the data is loaded.
            request._lengthComputable = true;
            request._total = request._loaded;
        });
        this._requests.push(request);
        return request;
    };
    GLTFFileLoader.prototype._onProgress = function (event, request) {
        if (!this._progressCallback) {
            return;
        }
        request._lengthComputable = event.lengthComputable;
        request._loaded = event.loaded;
        request._total = event.total;
        var lengthComputable = true;
        var loaded = 0;
        var total = 0;
        for (var _i = 0, _a = this._requests; _i < _a.length; _i++) {
            var request_1 = _a[_i];
            if (request_1._lengthComputable === undefined || request_1._loaded === undefined || request_1._total === undefined) {
                return;
            }
            lengthComputable = lengthComputable && request_1._lengthComputable;
            loaded += request_1._loaded;
            total += request_1._total;
        }
        this._progressCallback({
            lengthComputable: lengthComputable,
            loaded: loaded,
            total: lengthComputable ? total : 0,
        });
    };
    GLTFFileLoader.prototype._validate = function (scene, data, rootUrl, fileName) {
        var _this = this;
        if (rootUrl === void 0) { rootUrl = ""; }
        if (fileName === void 0) { fileName = ""; }
        if (!this.validate) {
            return;
        }
        this._startPerformanceCounter("Validate JSON");
        _glTFValidation__WEBPACK_IMPORTED_MODULE_1__.GLTFValidation.ValidateAsync(data, rootUrl, fileName, function (uri) {
            return _this.preprocessUrlAsync(rootUrl + uri).then(function (url) {
                return scene._loadFileAsync(url, undefined, true, true).then(function (data) {
                    return new Uint8Array(data, 0, data.byteLength);
                });
            });
        }).then(function (result) {
            _this._endPerformanceCounter("Validate JSON");
            _this.onValidatedObservable.notifyObservers(result);
            _this.onValidatedObservable.clear();
        }, function (reason) {
            _this._endPerformanceCounter("Validate JSON");
            babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Failed to validate: ".concat(reason.message));
            _this.onValidatedObservable.clear();
        });
    };
    GLTFFileLoader.prototype._getLoader = function (loaderData) {
        var asset = loaderData.json.asset || {};
        this._log("Asset version: ".concat(asset.version));
        asset.minVersion && this._log("Asset minimum version: ".concat(asset.minVersion));
        asset.generator && this._log("Asset generator: ".concat(asset.generator));
        var version = GLTFFileLoader._parseVersion(asset.version);
        if (!version) {
            throw new Error("Invalid version: " + asset.version);
        }
        if (asset.minVersion !== undefined) {
            var minVersion = GLTFFileLoader._parseVersion(asset.minVersion);
            if (!minVersion) {
                throw new Error("Invalid minimum version: " + asset.minVersion);
            }
            if (GLTFFileLoader._compareVersion(minVersion, { major: 2, minor: 0 }) > 0) {
                throw new Error("Incompatible minimum version: " + asset.minVersion);
            }
        }
        var createLoaders = {
            1: GLTFFileLoader._CreateGLTF1Loader,
            2: GLTFFileLoader._CreateGLTF2Loader,
        };
        var createLoader = createLoaders[version.major];
        if (!createLoader) {
            throw new Error("Unsupported version: " + asset.version);
        }
        return createLoader(this);
    };
    GLTFFileLoader.prototype._parseJson = function (json) {
        this._startPerformanceCounter("Parse JSON");
        this._log("JSON length: ".concat(json.length));
        var parsed = JSON.parse(json);
        this._endPerformanceCounter("Parse JSON");
        return parsed;
    };
    GLTFFileLoader.prototype._unpackBinaryAsync = function (dataReader) {
        var _this = this;
        this._startPerformanceCounter("Unpack Binary");
        // Read magic + version + length + json length + json format
        return dataReader.loadAsync(20).then(function () {
            var Binary = {
                Magic: 0x46546c67,
            };
            var magic = dataReader.readUint32();
            if (magic !== Binary.Magic) {
                throw new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.RuntimeError("Unexpected magic: " + magic, babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.ErrorCodes.GLTFLoaderUnexpectedMagicError);
            }
            var version = dataReader.readUint32();
            if (_this.loggingEnabled) {
                _this._log("Binary version: ".concat(version));
            }
            var length = dataReader.readUint32();
            if (!_this.useRangeRequests && length !== dataReader.buffer.byteLength) {
                babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Length in header does not match actual data length: ".concat(length, " != ").concat(dataReader.buffer.byteLength));
            }
            var unpacked;
            switch (version) {
                case 1: {
                    unpacked = _this._unpackBinaryV1Async(dataReader, length);
                    break;
                }
                case 2: {
                    unpacked = _this._unpackBinaryV2Async(dataReader, length);
                    break;
                }
                default: {
                    throw new Error("Unsupported version: " + version);
                }
            }
            _this._endPerformanceCounter("Unpack Binary");
            return unpacked;
        });
    };
    GLTFFileLoader.prototype._unpackBinaryV1Async = function (dataReader, length) {
        var ContentFormat = {
            JSON: 0,
        };
        var contentLength = dataReader.readUint32();
        var contentFormat = dataReader.readUint32();
        if (contentFormat !== ContentFormat.JSON) {
            throw new Error("Unexpected content format: ".concat(contentFormat));
        }
        var bodyLength = length - dataReader.byteOffset;
        var data = { json: this._parseJson(dataReader.readString(contentLength)), bin: null };
        if (bodyLength !== 0) {
            var startByteOffset_1 = dataReader.byteOffset;
            data.bin = {
                readAsync: function (byteOffset, byteLength) { return dataReader.buffer.readAsync(startByteOffset_1 + byteOffset, byteLength); },
                byteLength: bodyLength,
            };
        }
        return Promise.resolve(data);
    };
    GLTFFileLoader.prototype._unpackBinaryV2Async = function (dataReader, length) {
        var _this = this;
        var ChunkFormat = {
            JSON: 0x4e4f534a,
            BIN: 0x004e4942,
        };
        // Read the JSON chunk header.
        var chunkLength = dataReader.readUint32();
        var chunkFormat = dataReader.readUint32();
        if (chunkFormat !== ChunkFormat.JSON) {
            throw new Error("First chunk format is not JSON");
        }
        // Bail if there are no other chunks.
        if (dataReader.byteOffset + chunkLength === length) {
            return dataReader.loadAsync(chunkLength).then(function () {
                return { json: _this._parseJson(dataReader.readString(chunkLength)), bin: null };
            });
        }
        // Read the JSON chunk and the length and type of the next chunk.
        return dataReader.loadAsync(chunkLength + 8).then(function () {
            var data = { json: _this._parseJson(dataReader.readString(chunkLength)), bin: null };
            var readAsync = function () {
                var chunkLength = dataReader.readUint32();
                var chunkFormat = dataReader.readUint32();
                switch (chunkFormat) {
                    case ChunkFormat.JSON: {
                        throw new Error("Unexpected JSON chunk");
                    }
                    case ChunkFormat.BIN: {
                        var startByteOffset_2 = dataReader.byteOffset;
                        data.bin = {
                            readAsync: function (byteOffset, byteLength) { return dataReader.buffer.readAsync(startByteOffset_2 + byteOffset, byteLength); },
                            byteLength: chunkLength,
                        };
                        dataReader.skipBytes(chunkLength);
                        break;
                    }
                    default: {
                        // ignore unrecognized chunkFormat
                        dataReader.skipBytes(chunkLength);
                        break;
                    }
                }
                if (dataReader.byteOffset !== length) {
                    return dataReader.loadAsync(8).then(readAsync);
                }
                return Promise.resolve(data);
            };
            return readAsync();
        });
    };
    GLTFFileLoader._parseVersion = function (version) {
        if (version === "1.0" || version === "1.0.1") {
            return {
                major: 1,
                minor: 0,
            };
        }
        var match = (version + "").match(/^(\d+)\.(\d+)/);
        if (!match) {
            return null;
        }
        return {
            major: parseInt(match[1]),
            minor: parseInt(match[2]),
        };
    };
    GLTFFileLoader._compareVersion = function (a, b) {
        if (a.major > b.major) {
            return 1;
        }
        if (a.major < b.major) {
            return -1;
        }
        if (a.minor > b.minor) {
            return 1;
        }
        if (a.minor < b.minor) {
            return -1;
        }
        return 0;
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._logOpen = function (message) {
        this._log(message);
        this._logIndentLevel++;
    };
    /** @internal */
    GLTFFileLoader.prototype._logClose = function () {
        --this._logIndentLevel;
    };
    GLTFFileLoader.prototype._logEnabled = function (message) {
        var spaces = GLTFFileLoader._logSpaces.substring(0, this._logIndentLevel * 2);
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Log("".concat(spaces).concat(message));
    };
    GLTFFileLoader.prototype._logDisabled = function (message) { };
    GLTFFileLoader.prototype._startPerformanceCounterEnabled = function (counterName) {
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.StartPerformanceCounter(counterName);
    };
    GLTFFileLoader.prototype._startPerformanceCounterDisabled = function (counterName) { };
    GLTFFileLoader.prototype._endPerformanceCounterEnabled = function (counterName) {
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.EndPerformanceCounter(counterName);
    };
    GLTFFileLoader.prototype._endPerformanceCounterDisabled = function (counterName) { };
    // ------------------
    // End Common options
    // ------------------
    // ----------------
    // Begin V1 options
    // ----------------
    /**
     * Set this property to false to disable incremental loading which delays the loader from calling the success callback until after loading the meshes and shaders.
     * Textures always loads asynchronously. For example, the success callback can compute the bounding information of the loaded meshes when incremental loading is disabled.
     * Defaults to true.
     * @internal
     */
    GLTFFileLoader.IncrementalLoading = true;
    /**
     * Set this property to true in order to work with homogeneous coordinates, available with some converters and exporters.
     * Defaults to false. See https://en.wikipedia.org/wiki/Homogeneous_coordinates.
     * @internal
     */
    GLTFFileLoader.HomogeneousCoordinates = false;
    GLTFFileLoader._logSpaces = "                                ";
    return GLTFFileLoader;
}(GLTFLoaderOptions));

(0,babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.RegisterSceneLoaderPlugin)(new GLTFFileLoader());


/***/ }),

/***/ "../../../dev/loaders/src/glTF/glTFValidation.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/glTFValidation.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFValidation: () => (/* binding */ GLTFValidation)
/* harmony export */ });
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__);

function ValidateAsync(data, rootUrl, fileName, getExternalResource) {
    var options = {
        externalResourceFunction: getExternalResource,
    };
    if (fileName) {
        options.uri = rootUrl === "file:" ? fileName : rootUrl + fileName;
    }
    return ArrayBuffer.isView(data) ? GLTFValidator.validateBytes(data, options) : GLTFValidator.validateString(data, options);
}
/**
 * The worker function that gets converted to a blob url to pass into a worker.
 */
function WorkerFunc() {
    var pendingExternalResources = [];
    onmessage = function (message) {
        var data = message.data;
        switch (data.id) {
            case "init": {
                importScripts(data.url);
                break;
            }
            case "validate": {
                ValidateAsync(data.data, data.rootUrl, data.fileName, function (uri) {
                    return new Promise(function (resolve, reject) {
                        var index = pendingExternalResources.length;
                        pendingExternalResources.push({ resolve: resolve, reject: reject });
                        postMessage({ id: "getExternalResource", index: index, uri: uri });
                    });
                }).then(function (value) {
                    postMessage({ id: "validate.resolve", value: value });
                }, function (reason) {
                    postMessage({ id: "validate.reject", reason: reason });
                });
                break;
            }
            case "getExternalResource.resolve": {
                pendingExternalResources[data.index].resolve(data.value);
                break;
            }
            case "getExternalResource.reject": {
                pendingExternalResources[data.index].reject(data.reason);
                break;
            }
        }
    };
}
/**
 * glTF validation
 */
var GLTFValidation = /** @class */ (function () {
    function GLTFValidation() {
    }
    /**
     * Validate a glTF asset using the glTF-Validator.
     * @param data The JSON of a glTF or the array buffer of a binary glTF
     * @param rootUrl The root url for the glTF
     * @param fileName The file name for the glTF
     * @param getExternalResource The callback to get external resources for the glTF validator
     * @returns A promise that resolves with the glTF validation results once complete
     */
    GLTFValidation.ValidateAsync = function (data, rootUrl, fileName, getExternalResource) {
        var _this = this;
        if (typeof Worker === "function") {
            return new Promise(function (resolve, reject) {
                var workerContent = "".concat(ValidateAsync, "(").concat(WorkerFunc, ")()");
                var workerBlobUrl = URL.createObjectURL(new Blob([workerContent], { type: "application/javascript" }));
                var worker = new Worker(workerBlobUrl);
                var onError = function (error) {
                    worker.removeEventListener("error", onError);
                    worker.removeEventListener("message", onMessage);
                    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                    reject(error);
                };
                var onMessage = function (message) {
                    var data = message.data;
                    switch (data.id) {
                        case "getExternalResource": {
                            getExternalResource(data.uri).then(function (value) {
                                worker.postMessage({ id: "getExternalResource.resolve", index: data.index, value: value }, [value.buffer]);
                            }, function (reason) {
                                worker.postMessage({ id: "getExternalResource.reject", index: data.index, reason: reason });
                            });
                            break;
                        }
                        case "validate.resolve": {
                            worker.removeEventListener("error", onError);
                            worker.removeEventListener("message", onMessage);
                            resolve(data.value);
                            worker.terminate();
                            break;
                        }
                        case "validate.reject": {
                            worker.removeEventListener("error", onError);
                            worker.removeEventListener("message", onMessage);
                            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                            reject(data.reason);
                            worker.terminate();
                        }
                    }
                };
                worker.addEventListener("error", onError);
                worker.addEventListener("message", onMessage);
                worker.postMessage({ id: "init", url: babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.GetBabylonScriptURL(_this.Configuration.url) });
                if (ArrayBuffer.isView(data)) {
                    // Slice the data to avoid copying the whole array buffer.
                    var slicedData = data.slice();
                    worker.postMessage({ id: "validate", data: slicedData, rootUrl: rootUrl, fileName: fileName }, [slicedData.buffer]);
                }
                else {
                    worker.postMessage({ id: "validate", data: data, rootUrl: rootUrl, fileName: fileName });
                }
            });
        }
        else {
            if (!this._LoadScriptPromise) {
                this._LoadScriptPromise = babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadBabylonScriptAsync(this.Configuration.url);
            }
            return this._LoadScriptPromise.then(function () {
                return ValidateAsync(data, rootUrl, fileName, getExternalResource);
            });
        }
    };
    /**
     * The configuration. Defaults to `{ url: "https://cdn.babylonjs.com/gltf_validator.js" }`.
     */
    GLTFValidation.Configuration = {
        url: "".concat(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools._DefaultCdnUrl, "/gltf_validator.js"),
    };
    return GLTFValidation;
}());



/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF.ts":
/*!******************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFFileLoader: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderState),
/* harmony export */   GLTFValidation: () => (/* reexport safe */ loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__.GLTFValidation)
/* harmony export */ });
/* harmony import */ var loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loaders/glTF/glTFFileLoader */ "../../../dev/loaders/src/glTF/glTFFileLoader.ts");
/* harmony import */ var loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! loaders/glTF/glTFValidation */ "../../../dev/loaders/src/glTF/glTFValidation.ts");


/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var GlobalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof GlobalObject !== "undefined") {
    GlobalObject.BABYLON = GlobalObject.BABYLON || {};
    for (var key in loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__) {
        GlobalObject.BABYLON[key] = loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__[key];
    }
    for (var key in loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__) {
        GlobalObject.BABYLON[key] = loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__[key];
    }
}




/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF1.ts":
/*!*******************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF1.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF1: () => (/* reexport module object */ loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loaders/glTF/1.0/index */ "../../../dev/loaders/src/glTF/1.0/index.ts");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var GlobalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof GlobalObject !== "undefined") {
    GlobalObject.BABYLON = GlobalObject.BABYLON || {};
    GlobalObject.BABYLON.GLTF1 = GlobalObject.BABYLON.GLTF1 || {};
    for (var key in loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__) {
        GlobalObject.BABYLON.GLTF1[key] = loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}



/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF1FileLoader.ts":
/*!*****************************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF1FileLoader.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF1: () => (/* reexport safe */ _legacy_glTF1__WEBPACK_IMPORTED_MODULE_1__.GLTF1),
/* harmony export */   GLTFFileLoader: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderState),
/* harmony export */   GLTFValidation: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFValidation)
/* harmony export */ });
/* harmony import */ var _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy-glTF */ "../../../lts/loaders/src/legacy/legacy-glTF.ts");
/* harmony import */ var _legacy_glTF1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy-glTF1 */ "../../../lts/loaders/src/legacy/legacy-glTF1.ts");
// eslint-disable-next-line import/export




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
/*!********************************!*\
  !*** ./src/glTF1FileLoader.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loaders: () => (/* reexport module object */ _lts_loaders_legacy_legacy_glTF1FileLoader__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_loaders_legacy_legacy_glTF1FileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/loaders/legacy/legacy-glTF1FileLoader */ "../../../lts/loaders/src/legacy/legacy-glTF1FileLoader.ts");
// eslint-disable-next-line import/export


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_loaders_legacy_legacy_glTF1FileLoader__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5nbFRGMUZpbGVMb2FkZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFpBO0FBQ0E7QUFJQTtBQUlBO0FBYUE7OztBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFSQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFyQ0E7O0FBRUE7QUFDQTtBQUFBO0FBbUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBNmFBO0FBNWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFBQTtBQStUQTtBQTVUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQVVBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFRQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBUUE7QUFFQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFiQTs7OztBQWNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN1RBO0FBOFRBO0FBQUE7QUEvVEE7QUFpVUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyeUVBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFtUUE7QUFsUUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQW5RQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF3REE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBc0NBOztBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBMEJBO0FBQUE7QUE0Q0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFtQ0E7O0FBRUE7QUFDQTtBQVFBO0FBeE1BO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF3S0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBdUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBaUJBOzs7OztBQUtBO0FBQ0E7QUFpQkE7O0FBRUE7QUFDQTtBQWdCQTs7QUFFQTtBQUNBO0FBZ0JBOztBQUVBO0FBQ0E7QUFnQkE7Ozs7QUFJQTtBQUNBO0FBZ0JBOztBQUVBO0FBQ0E7QUFjQTs7QUFFQTtBQUNBO0FBY0E7OztBQUdBO0FBQ0E7QUEwREE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQWtUQTs7QUFFQTtBQUNBO0FBdVVBO0FBQ0E7QUFFQTtBQUNBO0FBc0JBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUE1OEJBOztBQUNBO0FBZ0JBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQXlDQTtBQUpBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBZ0JBO0FBSkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFZQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFZQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFZQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFnQkE7QUFMQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQVlBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBWUE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFhQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUtBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQWRBO0FBbUJBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFoQkE7QUFpQ0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFlQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUlBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFPQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBUUE7QUFJQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQTk3QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQTQzQkE7QUE4Q0E7QUFBQTtBQXQrQkE7QUF3K0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ24zQ0E7QUFXQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQUFBO0FBMkZBO0FBakZBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBcUZBO0FBQUE7QUEzRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0xPQURFUlMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8xLjAvZ2xURkJpbmFyeUV4dGVuc2lvbi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzEuMC9nbFRGTG9hZGVyLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMS4wL2dsVEZMb2FkZXJJbnRlcmZhY2VzLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMS4wL2dsVEZMb2FkZXJVdGlscy50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzEuMC9nbFRGTWF0ZXJpYWxzQ29tbW9uRXh0ZW5zaW9uLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMS4wL2luZGV4LnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvZ2xURkZpbGVMb2FkZXIubWV0YWRhdGEudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi9nbFRGRmlsZUxvYWRlci50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGL2dsVEZWYWxpZGF0aW9uLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vbHRzL2xvYWRlcnMvc3JjL2xlZ2FjeS9sZWdhY3ktZ2xURi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2x0cy9sb2FkZXJzL3NyYy9sZWdhY3kvbGVnYWN5LWdsVEYxLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vbHRzL2xvYWRlcnMvc3JjL2xlZ2FjeS9sZWdhY3ktZ2xURjFGaWxlTG9hZGVyLnRzIiwid2VicGFjazovL0xPQURFUlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uL3NyYy9nbFRGMUZpbGVMb2FkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmFieWxvbmpzLWxvYWRlcnNcIiwgW1wiYmFieWxvbmpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJhYnlsb25qcy1sb2FkZXJzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJMT0FERVJTXCJdID0gZmFjdG9yeShyb290W1wiQkFCWUxPTlwiXSk7XG59KSgodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMpLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWlzY190b29sc19fKSA9PiB7XG5yZXR1cm4gIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sLCBJdGVyYXRvciAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBBc3luY0l0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBBc3luY0l0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpLCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIsIGF3YWl0UmV0dXJuKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiBhd2FpdFJldHVybihmKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZiwgcmVqZWN0KTsgfTsgfVxuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKGdbbl0pIHsgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgaWYgKGYpIGlbbl0gPSBmKGlbbl0pOyB9IH1cbiAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxuICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cbiAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xuICB2YXIgaSwgcDtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xuICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgcmV0dXJuIGNvb2tlZDtcbn07XG5cbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gIG9bXCJkZWZhdWx0XCJdID0gdjtcbn07XG5cbnZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICB2YXIgYXIgPSBbXTtcbiAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgIHJldHVybiBhcjtcbiAgfTtcbiAgcmV0dXJuIG93bktleXMobyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlLCBpbm5lcjtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICAgIGlmIChhc3luYykgaW5uZXIgPSBkaXNwb3NlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgaWYgKGlubmVyKSBkaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRyeSB7IGlubmVyLmNhbGwodGhpcyk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpOyB9IH07XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIHZhciByLCBzID0gMDtcbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAociA9IGVudi5zdGFjay5wb3AoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFyLmFzeW5jICYmIHMgPT09IDEpIHJldHVybiBzID0gMCwgZW52LnN0YWNrLnB1c2gociksIFByb21pc2UucmVzb2x2ZSgpLnRoZW4obmV4dCk7XG4gICAgICAgIGlmIChyLmRpc3Bvc2UpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gci5kaXNwb3NlLmNhbGwoci52YWx1ZSk7XG4gICAgICAgICAgaWYgKHIuYXN5bmMpIHJldHVybiBzIHw9IDIsIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHMgfD0gMTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzID09PSAxKSByZXR1cm4gZW52Lmhhc0Vycm9yID8gUHJvbWlzZS5yZWplY3QoZW52LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24ocGF0aCwgcHJlc2VydmVKc3gpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiICYmIC9eXFwuXFwuP1xcLy8udGVzdChwYXRoKSkge1xuICAgICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuKHRzeCkkfCgoPzpcXC5kKT8pKCg/OlxcLlteLi9dKz8pPylcXC4oW2NtXT8pdHMkL2ksIGZ1bmN0aW9uIChtLCB0c3gsIGQsIGV4dCwgY20pIHtcbiAgICAgICAgICByZXR1cm4gdHN4ID8gcHJlc2VydmVKc3ggPyBcIi5qc3hcIiA6IFwiLmpzXCIgOiBkICYmICghZXh0IHx8ICFjbSkgPyBtIDogKGQgKyBleHQgKyBcIi5cIiArIGNtLnRvTG93ZXJDYXNlKCkgKyBcImpzXCIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX2VzRGVjb3JhdGUsXG4gIF9fcnVuSW5pdGlhbGl6ZXJzLFxuICBfX3Byb3BLZXksXG4gIF9fc2V0RnVuY3Rpb25OYW1lLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbiAgX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24sXG59O1xuIiwiaW1wb3J0IHsgR0xURkxvYWRlckV4dGVuc2lvbiwgR0xURkxvYWRlciwgR0xURkxvYWRlckJhc2UgfSBmcm9tIFwiLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB7IEdMVEZVdGlscyB9IGZyb20gXCIuL2dsVEZMb2FkZXJVdGlsc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckRhdGEgfSBmcm9tIFwiLi4vZ2xURkZpbGVMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURlJ1bnRpbWUsIElHTFRGVGV4dHVyZSwgSUdMVEZJbWFnZSwgSUdMVEZCdWZmZXJWaWV3LCBJR0xURlNoYWRlciB9IGZyb20gXCIuL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEVDb21wb25lbnRUeXBlIH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSURhdGFCdWZmZXIgfSBmcm9tIFwiY29yZS9NaXNjL2RhdGFSZWFkZXJcIjtcclxuXHJcbmNvbnN0IEJpbmFyeUV4dGVuc2lvbkJ1ZmZlck5hbWUgPSBcImJpbmFyeV9nbFRGXCI7XHJcblxyXG5pbnRlcmZhY2UgSUdMVEZCaW5hcnlFeHRlbnNpb25TaGFkZXIge1xyXG4gICAgYnVmZmVyVmlldzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUdMVEZCaW5hcnlFeHRlbnNpb25JbWFnZSB7XHJcbiAgICBidWZmZXJWaWV3OiBzdHJpbmc7XHJcbiAgICBtaW1lVHlwZTogc3RyaW5nO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURkJpbmFyeUV4dGVuc2lvbiBleHRlbmRzIEdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgcHJpdmF0ZSBfYmluOiBJRGF0YUJ1ZmZlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJLSFJfYmluYXJ5X2dsVEZcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgbG9hZFJ1bnRpbWVBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IElHTFRGTG9hZGVyRGF0YSwgcm9vdFVybDogc3RyaW5nLCBvblN1Y2Nlc3M6IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uc1VzZWQgPSAoPGFueT5kYXRhLmpzb24pLmV4dGVuc2lvbnNVc2VkO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uc1VzZWQgfHwgZXh0ZW5zaW9uc1VzZWQuaW5kZXhPZih0aGlzLm5hbWUpID09PSAtMSB8fCAhZGF0YS5iaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYmluID0gZGF0YS5iaW47XHJcbiAgICAgICAgb25TdWNjZXNzKEdMVEZMb2FkZXJCYXNlLkNyZWF0ZVJ1bnRpbWUoZGF0YS5qc29uLCBzY2VuZSwgcm9vdFVybCkpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIG92ZXJyaWRlIGxvYWRCdWZmZXJBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6IChidWZmZXI6IEFycmF5QnVmZmVyVmlldykgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChnbHRmUnVudGltZS5leHRlbnNpb25zVXNlZC5pbmRleE9mKHRoaXMubmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZCAhPT0gQmluYXJ5RXh0ZW5zaW9uQnVmZmVyTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICB0aGlzLl9iaW4ucmVhZEFzeW5jKDAsIHRoaXMuX2Jpbi5ieXRlTGVuZ3RoKS50aGVuKG9uU3VjY2VzcywgKGVycm9yKSA9PiBvbkVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBvdmVycmlkZSBsb2FkVGV4dHVyZUJ1ZmZlckFzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKGJ1ZmZlcjogQXJyYXlCdWZmZXJWaWV3KSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZTogSUdMVEZUZXh0dXJlID0gZ2x0ZlJ1bnRpbWUudGV4dHVyZXNbaWRdO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZTogSUdMVEZJbWFnZSA9IGdsdGZSdW50aW1lLmltYWdlc1t0ZXh0dXJlLnNvdXJjZV07XHJcbiAgICAgICAgaWYgKCFzb3VyY2UuZXh0ZW5zaW9ucyB8fCAhKHRoaXMubmFtZSBpbiBzb3VyY2UuZXh0ZW5zaW9ucykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc291cmNlRXh0OiBJR0xURkJpbmFyeUV4dGVuc2lvbkltYWdlID0gc291cmNlLmV4dGVuc2lvbnNbdGhpcy5uYW1lXTtcclxuICAgICAgICBjb25zdCBidWZmZXJWaWV3OiBJR0xURkJ1ZmZlclZpZXcgPSBnbHRmUnVudGltZS5idWZmZXJWaWV3c1tzb3VyY2VFeHQuYnVmZmVyVmlld107XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gR0xURlV0aWxzLkdldEJ1ZmZlckZyb21CdWZmZXJWaWV3KGdsdGZSdW50aW1lLCBidWZmZXJWaWV3LCAwLCBidWZmZXJWaWV3LmJ5dGVMZW5ndGgsIEVDb21wb25lbnRUeXBlLlVOU0lHTkVEX0JZVEUpO1xyXG4gICAgICAgIG9uU3VjY2VzcyhidWZmZXIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIG92ZXJyaWRlIGxvYWRTaGFkZXJTdHJpbmdBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6IChzaGFkZXJTdHJpbmc6IHN0cmluZykgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHNoYWRlcjogSUdMVEZTaGFkZXIgPSBnbHRmUnVudGltZS5zaGFkZXJzW2lkXTtcclxuICAgICAgICBpZiAoIXNoYWRlci5leHRlbnNpb25zIHx8ICEodGhpcy5uYW1lIGluIHNoYWRlci5leHRlbnNpb25zKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBiaW5hcnlFeHRlbnNpb25TaGFkZXI6IElHTFRGQmluYXJ5RXh0ZW5zaW9uU2hhZGVyID0gc2hhZGVyLmV4dGVuc2lvbnNbdGhpcy5uYW1lXTtcclxuICAgICAgICBjb25zdCBidWZmZXJWaWV3OiBJR0xURkJ1ZmZlclZpZXcgPSBnbHRmUnVudGltZS5idWZmZXJWaWV3c1tiaW5hcnlFeHRlbnNpb25TaGFkZXIuYnVmZmVyVmlld107XHJcbiAgICAgICAgY29uc3Qgc2hhZGVyQnl0ZXMgPSBHTFRGVXRpbHMuR2V0QnVmZmVyRnJvbUJ1ZmZlclZpZXcoZ2x0ZlJ1bnRpbWUsIGJ1ZmZlclZpZXcsIDAsIGJ1ZmZlclZpZXcuYnl0ZUxlbmd0aCwgRUNvbXBvbmVudFR5cGUuVU5TSUdORURfQllURSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFkZXJTdHJpbmcgPSBHTFRGVXRpbHMuRGVjb2RlQnVmZmVyVG9UZXh0KHNoYWRlckJ5dGVzKTtcclxuICAgICAgICAgICAgb25TdWNjZXNzKHNoYWRlclN0cmluZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKG5ldyBHTFRGQmluYXJ5RXh0ZW5zaW9uKCkpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IHR5cGUge1xyXG4gICAgSUdMVEZSdW50aW1lLFxyXG4gICAgSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIsXHJcbiAgICBJR0xURkFuaW1hdGlvbixcclxuICAgIElHTFRGQW5pbWF0aW9uU2FtcGxlcixcclxuICAgIElHTFRGTm9kZSxcclxuICAgIElHTFRGU2tpbnMsXHJcbiAgICBJTm9kZVRvUm9vdCxcclxuICAgIElKb2ludE5vZGUsXHJcbiAgICBJR0xURk1lc2gsXHJcbiAgICBJR0xURkFjY2Vzc29yLFxyXG4gICAgSUdMVEZMaWdodCxcclxuICAgIElHTFRGQW1iaWVuTGlnaHQsXHJcbiAgICBJR0xURkRpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICBJR0xURlBvaW50TGlnaHQsXHJcbiAgICBJR0xURlNwb3RMaWdodCxcclxuICAgIElHTFRGQ2FtZXJhLFxyXG4gICAgSUdMVEZDYW1lcmFQZXJzcGVjdGl2ZSxcclxuICAgIElHTFRGU2NlbmUsXHJcbiAgICBJR0xURlRlY2huaXF1ZSxcclxuICAgIElHTFRGTWF0ZXJpYWwsXHJcbiAgICBJR0xURlByb2dyYW0sXHJcbiAgICBJR0xURkJ1ZmZlcixcclxuICAgIElHTFRGVGV4dHVyZSxcclxuICAgIElHTFRGSW1hZ2UsXHJcbiAgICBJR0xURlNhbXBsZXIsXHJcbiAgICBJR0xURlNoYWRlcixcclxuICAgIElHTFRGVGVjaG5pcXVlU3RhdGVzLFxyXG59IGZyb20gXCIuL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEVQYXJhbWV0ZXJUeXBlLCBFVGV4dHVyZUZpbHRlclR5cGUsIEVDdWxsaW5nVHlwZSwgRUJsZW5kaW5nRnVuY3Rpb24sIEVTaGFkZXJUeXBlIH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgRmxvYXRBcnJheSwgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzLCBNYXRyaXggfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBGcmVlQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9mcmVlQ2FtZXJhXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEJvbmUgfSBmcm9tIFwiY29yZS9Cb25lcy9ib25lXCI7XHJcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcImNvcmUvQm9uZXMvc2tlbGV0b25cIjtcclxuaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL2VmZmVjdFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBNdWx0aU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL211bHRpTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFNoYWRlck1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3NoYWRlck1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IFZlcnRleERhdGEgfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaC52ZXJ0ZXhEYXRhXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSBcImNvcmUvTWVzaGVzL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB7IFN1Yk1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvc3ViTWVzaFwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBIZW1pc3BoZXJpY0xpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2hlbWlzcGhlcmljTGlnaHRcIjtcclxuaW1wb3J0IHsgRGlyZWN0aW9uYWxMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9kaXJlY3Rpb25hbExpZ2h0XCI7XHJcbmltcG9ydCB7IFBvaW50TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvcG9pbnRMaWdodFwiO1xyXG5pbXBvcnQgeyBTcG90TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvc3BvdExpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgSVNjZW5lTG9hZGVyQXN5bmNSZXN1bHQsIElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQgfSBmcm9tIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5cclxuaW1wb3J0IHsgR0xURlV0aWxzIH0gZnJvbSBcIi4vZ2xURkxvYWRlclV0aWxzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXIsIElHTFRGTG9hZGVyRGF0YSB9IGZyb20gXCIuLi9nbFRGRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBHTFRGRmlsZUxvYWRlciB9IGZyb20gXCIuLi9nbFRGRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvYXNzZXRDb250YWluZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBUb2tlbml6ZXIuIFVzZWQgZm9yIHNoYWRlcnMgY29tcGF0aWJpbGl0eVxyXG4gKiBBdXRvbWF0aWNhbGx5IG1hcCB3b3JsZCwgdmlldywgcHJvamVjdGlvbiwgd29ybGRWaWV3UHJvamVjdGlvbiwgYXR0cmlidXRlcyBhbmQgc28gb25cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZW51bSBFVG9rZW5UeXBlIHtcclxuICAgIElERU5USUZJRVIgPSAxLFxyXG5cclxuICAgIFVOS05PV04gPSAyLFxyXG4gICAgRU5EX09GX0lOUFVUID0gMyxcclxufVxyXG5cclxuY2xhc3MgVG9rZW5pemVyIHtcclxuICAgIHByaXZhdGUgX3RvUGFyc2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3BvczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX21heFBvczogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50VG9rZW46IEVUb2tlblR5cGUgPSBFVG9rZW5UeXBlLlVOS05PV047XHJcbiAgICBwdWJsaWMgY3VycmVudElkZW50aWZpZXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgY3VycmVudFN0cmluZzogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBpc0xldHRlck9yRGlnaXRQYXR0ZXJuOiBSZWdFeHAgPSAvXlthLXpBLVowLTldKyQvO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRvUGFyc2U6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3RvUGFyc2UgPSB0b1BhcnNlO1xyXG4gICAgICAgIHRoaXMuX21heFBvcyA9IHRvUGFyc2UubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROZXh0VG9rZW4oKTogRVRva2VuVHlwZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRVRva2VuVHlwZS5FTkRfT0ZfSU5QVVQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdHJpbmcgPSB0aGlzLnJlYWQoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUb2tlbiA9IEVUb2tlblR5cGUuVU5LTk9XTjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0cmluZyA9PT0gXCJfXCIgfHwgdGhpcy5pc0xldHRlck9yRGlnaXRQYXR0ZXJuLnRlc3QodGhpcy5jdXJyZW50U3RyaW5nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb2tlbiA9IEVUb2tlblR5cGUuSURFTlRJRklFUjtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SWRlbnRpZmllciA9IHRoaXMuY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgd2hpbGUgKCF0aGlzLmlzRW5kKCkgJiYgKHRoaXMuaXNMZXR0ZXJPckRpZ2l0UGF0dGVybi50ZXN0KCh0aGlzLmN1cnJlbnRTdHJpbmcgPSB0aGlzLnBlZWsoKSkpIHx8IHRoaXMuY3VycmVudFN0cmluZyA9PT0gXCJfXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJZGVudGlmaWVyICs9IHRoaXMuY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yd2FyZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBlZWsoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9QYXJzZVt0aGlzLl9wb3NdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWFkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvUGFyc2VbdGhpcy5fcG9zKytdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3J3YXJkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BvcysrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0VuZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zID49IHRoaXMuX21heFBvcztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbHVlc1xyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5jb25zdCBnbFRGVHJhbnNmb3JtcyA9IFtcIk1PREVMXCIsIFwiVklFV1wiLCBcIlBST0pFQ1RJT05cIiwgXCJNT0RFTFZJRVdcIiwgXCJNT0RFTFZJRVdQUk9KRUNUSU9OXCIsIFwiSk9JTlRNQVRSSVhcIl07XHJcbmNvbnN0IEJhYnlsb25UcmFuc2Zvcm1zID0gW1wid29ybGRcIiwgXCJ2aWV3XCIsIFwicHJvamVjdGlvblwiLCBcIndvcmxkVmlld1wiLCBcIndvcmxkVmlld1Byb2plY3Rpb25cIiwgXCJtQm9uZXNcIl07XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmNvbnN0IGdsVEZBbmltYXRpb25QYXRocyA9IFtcInRyYW5zbGF0aW9uXCIsIFwicm90YXRpb25cIiwgXCJzY2FsZVwiXTtcclxuY29uc3QgQmFieWxvbkFuaW1hdGlvblBhdGhzID0gW1wicG9zaXRpb25cIiwgXCJyb3RhdGlvblF1YXRlcm5pb25cIiwgXCJzY2FsaW5nXCJdO1xyXG5cclxuLyoqXHJcbiAqIFBhcnNlXHJcbiAqIEBwYXJhbSBwYXJzZWRCdWZmZXJzXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKi9cclxuY29uc3QgUGFyc2VCdWZmZXJzID0gKHBhcnNlZEJ1ZmZlcnM6IGFueSwgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBidWYgaW4gcGFyc2VkQnVmZmVycykge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZEJ1ZmZlciA9IHBhcnNlZEJ1ZmZlcnNbYnVmXTtcclxuICAgICAgICBnbHRmUnVudGltZS5idWZmZXJzW2J1Zl0gPSBwYXJzZWRCdWZmZXI7XHJcbiAgICAgICAgZ2x0ZlJ1bnRpbWUuYnVmZmVyc0NvdW50Kys7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBQYXJzZVNoYWRlcnMgPSAocGFyc2VkU2hhZGVyczogYW55LCBnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IHNoYSBpbiBwYXJzZWRTaGFkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkU2hhZGVyID0gcGFyc2VkU2hhZGVyc1tzaGFdO1xyXG4gICAgICAgIGdsdGZSdW50aW1lLnNoYWRlcnNbc2hhXSA9IHBhcnNlZFNoYWRlcjtcclxuICAgICAgICBnbHRmUnVudGltZS5zaGFkZXJzY291bnQrKztcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IFBhcnNlT2JqZWN0ID0gKHBhcnNlZE9iamVjdHM6IGFueSwgcnVudGltZVByb3BlcnR5OiBzdHJpbmcsIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUpID0+IHtcclxuICAgIGZvciAoY29uc3Qgb2JqZWN0IGluIHBhcnNlZE9iamVjdHMpIHtcclxuICAgICAgICBjb25zdCBwYXJzZWRPYmplY3QgPSBwYXJzZWRPYmplY3RzW29iamVjdF07XHJcbiAgICAgICAgKDxhbnk+Z2x0ZlJ1bnRpbWUpW3J1bnRpbWVQcm9wZXJ0eV1bb2JqZWN0XSA9IHBhcnNlZE9iamVjdDtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBVdGlsc1xyXG4gKiBAcGFyYW0gYnVmZmVyXHJcbiAqL1xyXG5jb25zdCBOb3JtYWxpemVVVnMgPSAoYnVmZmVyOiBhbnkpID0+IHtcclxuICAgIGlmICghYnVmZmVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyLmxlbmd0aCAvIDI7IGkrKykge1xyXG4gICAgICAgIGJ1ZmZlcltpICogMiArIDFdID0gMS4wIC0gYnVmZmVyW2kgKiAyICsgMV07XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBHZXRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlUGFyYW1ldGVyOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlcik6IE51bGxhYmxlPHN0cmluZz4gPT4ge1xyXG4gICAgaWYgKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJOT1JNQUxcIikge1xyXG4gICAgICAgIHJldHVybiBcIm5vcm1hbFwiO1xyXG4gICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVQYXJhbWV0ZXIuc2VtYW50aWMgPT09IFwiUE9TSVRJT05cIikge1xyXG4gICAgICAgIHJldHVybiBcInBvc2l0aW9uXCI7XHJcbiAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJKT0lOVFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibWF0cmljZXNJbmRpY2VzXCI7XHJcbiAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJXRUlHSFRcIikge1xyXG4gICAgICAgIHJldHVybiBcIm1hdHJpY2VzV2VpZ2h0c1wiO1xyXG4gICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVQYXJhbWV0ZXIuc2VtYW50aWMgPT09IFwiQ09MT1JcIikge1xyXG4gICAgICAgIHJldHVybiBcImNvbG9yXCI7XHJcbiAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYyAmJiBhdHRyaWJ1dGVQYXJhbWV0ZXIuc2VtYW50aWMuaW5kZXhPZihcIlRFWENPT1JEX1wiKSAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCBjaGFubmVsID0gTnVtYmVyKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYy5zcGxpdChcIl9cIilbMV0pO1xyXG4gICAgICAgIHJldHVybiBcInV2XCIgKyAoY2hhbm5lbCA9PT0gMCA/IFwiXCIgOiBjaGFubmVsICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9hZHMgYW5kIGNyZWF0ZXMgYW5pbWF0aW9uc1xyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICovXHJcbmNvbnN0IExvYWRBbmltYXRpb25zID0gKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUpID0+IHtcclxuICAgIGZvciAoY29uc3QgYW5pbSBpbiBnbHRmUnVudGltZS5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uOiBJR0xURkFuaW1hdGlvbiA9IGdsdGZSdW50aW1lLmFuaW1hdGlvbnNbYW5pbV07XHJcblxyXG4gICAgICAgIGlmICghYW5pbWF0aW9uLmNoYW5uZWxzIHx8ICFhbmltYXRpb24uc2FtcGxlcnMpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGFzdEFuaW1hdGlvbjogTnVsbGFibGU8QW5pbWF0aW9uPiA9IG51bGw7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCBwYXJhbWV0ZXJzIGFuZCBsb2FkIGJ1ZmZlcnNcclxuICAgICAgICAgICAgY29uc3QgY2hhbm5lbCA9IGFuaW1hdGlvbi5jaGFubmVsc1tpXTtcclxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlcjogSUdMVEZBbmltYXRpb25TYW1wbGVyID0gYW5pbWF0aW9uLnNhbXBsZXJzW2NoYW5uZWwuc2FtcGxlcl07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNhbXBsZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5wdXREYXRhOiBOdWxsYWJsZTxzdHJpbmc+ID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IG91dHB1dERhdGE6IE51bGxhYmxlPHN0cmluZz4gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dERhdGEgPSBhbmltYXRpb24ucGFyYW1ldGVyc1tzYW1wbGVyLmlucHV0XTtcclxuICAgICAgICAgICAgICAgIG91dHB1dERhdGEgPSBhbmltYXRpb24ucGFyYW1ldGVyc1tzYW1wbGVyLm91dHB1dF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dERhdGEgPSBzYW1wbGVyLmlucHV0O1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0RGF0YSA9IHNhbXBsZXIub3V0cHV0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJJbnB1dCA9IEdMVEZVdGlscy5HZXRCdWZmZXJGcm9tQWNjZXNzb3IoZ2x0ZlJ1bnRpbWUsIGdsdGZSdW50aW1lLmFjY2Vzc29yc1tpbnB1dERhdGFdKTtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyT3V0cHV0ID0gR0xURlV0aWxzLkdldEJ1ZmZlckZyb21BY2Nlc3NvcihnbHRmUnVudGltZSwgZ2x0ZlJ1bnRpbWUuYWNjZXNzb3JzW291dHB1dERhdGFdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gY2hhbm5lbC50YXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXROb2RlOiBhbnkgPSBnbHRmUnVudGltZS5zY2VuZS5nZXROb2RlQnlJZCh0YXJnZXRJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGdsdGZSdW50aW1lLnNjZW5lLmdldE5vZGVCeU5hbWUodGFyZ2V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIkNyZWF0aW5nIGFuaW1hdGlvbiBuYW1lZCBcIiArIGFuaW0gKyBcIi4gQnV0IGNhbm5vdCBmaW5kIG5vZGUgbmFtZWQgXCIgKyB0YXJnZXRJZCArIFwiIHRvIGF0dGFjaCB0b1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpc0JvbmUgPSB0YXJnZXROb2RlIGluc3RhbmNlb2YgQm9uZTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0YXJnZXQgcGF0aCAocG9zaXRpb24sIHJvdGF0aW9uIG9yIHNjYWxpbmcpXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRQYXRoID0gY2hhbm5lbC50YXJnZXQucGF0aDtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGF0aEluZGV4ID0gZ2xURkFuaW1hdGlvblBhdGhzLmluZGV4T2YodGFyZ2V0UGF0aCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0UGF0aEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UGF0aCA9IEJhYnlsb25BbmltYXRpb25QYXRoc1t0YXJnZXRQYXRoSW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgYW5pbWF0aW9uIHR5cGVcclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvblR5cGUgPSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9NQVRSSVg7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzQm9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFBhdGggPT09IFwicm90YXRpb25RdWF0ZXJuaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25UeXBlID0gQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfUVVBVEVSTklPTjtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXROb2RlLnJvdGF0aW9uUXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblR5cGUgPSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9WRUNUT1IzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5pbWF0aW9uIGFuZCBrZXkgZnJhbWVzXHJcbiAgICAgICAgICAgIGxldCBiYWJ5bG9uQW5pbWF0aW9uOiBOdWxsYWJsZTxBbmltYXRpb24+ID0gbnVsbDtcclxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlPZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgbW9kaWZ5S2V5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNCb25lICYmIGxhc3RBbmltYXRpb24gJiYgbGFzdEFuaW1hdGlvbi5nZXRLZXlzKCkubGVuZ3RoID09PSBidWZmZXJJbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb24gPSBsYXN0QW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgbW9kaWZ5S2V5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFtb2RpZnlLZXkpIHtcclxuICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIWdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oYW5pbSwgaXNCb25lID8gXCJfbWF0cml4XCIgOiB0YXJnZXRQYXRoLCAxLCBhbmltYXRpb25UeXBlLCBBbmltYXRpb24uQU5JTUFUSU9OTE9PUE1PREVfQ1lDTEUpO1xyXG4gICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBmcmFtZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ1ZmZlcklucHV0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IGFueSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFBhdGggPT09IFwicm90YXRpb25RdWF0ZXJuaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBWRUM0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBRdWF0ZXJuaW9uLkZyb21BcnJheShbYnVmZmVyT3V0cHV0W2FycmF5T2Zmc2V0XSwgYnVmZmVyT3V0cHV0W2FycmF5T2Zmc2V0ICsgMV0sIGJ1ZmZlck91dHB1dFthcnJheU9mZnNldCArIDJdLCBidWZmZXJPdXRwdXRbYXJyYXlPZmZzZXQgKyAzXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5T2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFBvc2l0aW9uIGFuZCBzY2FsaW5nIGFyZSBWRUMzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBWZWN0b3IzLkZyb21BcnJheShbYnVmZmVyT3V0cHV0W2FycmF5T2Zmc2V0XSwgYnVmZmVyT3V0cHV0W2FycmF5T2Zmc2V0ICsgMV0sIGJ1ZmZlck91dHB1dFthcnJheU9mZnNldCArIDJdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZmZzZXQgKz0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNCb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9uZSA9IDxCb25lPnRhcmdldE5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9uID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdGF0aW9uUXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxpbmcgPSBWZWN0b3IzLlplcm8oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FybmluZyBvbiBkZWNvbXBvc2VcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0ID0gYm9uZS5nZXRCYXNlTWF0cml4KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZnlLZXkgJiYgbGFzdEFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQgPSBsYXN0QW5pbWF0aW9uLmdldEtleXMoKVtqXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1hdC5kZWNvbXBvc2Uoc2NhbGluZywgcm90YXRpb25RdWF0ZXJuaW9uLCB0cmFuc2xhdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRQYXRoID09PSBcInBvc2l0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFBhdGggPT09IFwicm90YXRpb25RdWF0ZXJuaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRyaXguQ29tcG9zZShzY2FsaW5nLCByb3RhdGlvblF1YXRlcm5pb24sIHRyYW5zbGF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGlmeUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lOiBidWZmZXJJbnB1dFtqXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbi5nZXRLZXlzKClbal0udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRmluaXNoXHJcbiAgICAgICAgICAgIGlmICghbW9kaWZ5S2V5ICYmIGJhYnlsb25BbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb24uc2V0S2V5cyhrZXlzKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldE5vZGUuYW5pbWF0aW9ucy5wdXNoKGJhYnlsb25BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYXN0QW5pbWF0aW9uID0gYmFieWxvbkFuaW1hdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLnN0b3BBbmltYXRpb24odGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLmJlZ2luQW5pbWF0aW9uKHRhcmdldE5vZGUsIDAsIGJ1ZmZlcklucHV0W2J1ZmZlcklucHV0Lmxlbmd0aCAtIDFdLCB0cnVlLCAxLjApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJucyB0aGUgYm9uZXMgdHJhbnNmb3JtYXRpb24gbWF0cml4XHJcbiAqIEBwYXJhbSBub2RlXHJcbiAqL1xyXG5jb25zdCBDb25maWd1cmVCb25lVHJhbnNmb3JtYXRpb24gPSAobm9kZTogSUdMVEZOb2RlKTogTWF0cml4ID0+IHtcclxuICAgIGxldCBtYXQ6IE51bGxhYmxlPE1hdHJpeD4gPSBudWxsO1xyXG5cclxuICAgIGlmIChub2RlLnRyYW5zbGF0aW9uIHx8IG5vZGUucm90YXRpb24gfHwgbm9kZS5zY2FsZSkge1xyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS5zY2FsZSB8fCBbMSwgMSwgMV0pO1xyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXkobm9kZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV0pO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0pO1xyXG5cclxuICAgICAgICBtYXQgPSBNYXRyaXguQ29tcG9zZShzY2FsZSwgcm90YXRpb24sIHBvc2l0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWF0ID0gTWF0cml4LkZyb21BcnJheShub2RlLm1hdHJpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBwYXJlbnQgYm9uZVxyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICogQHBhcmFtIHNraW5zXHJcbiAqIEBwYXJhbSBqb2ludE5hbWVcclxuICogQHBhcmFtIG5ld1NrZWxldG9uXHJcbiAqIEByZXR1cm5zIHRoZSBwYXJlbnQgYm9uZVxyXG4gKi9cclxuY29uc3QgR2V0UGFyZW50Qm9uZSA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBza2luczogSUdMVEZTa2lucywgam9pbnROYW1lOiBzdHJpbmcsIG5ld1NrZWxldG9uOiBTa2VsZXRvbik6IE51bGxhYmxlPEJvbmU+ID0+IHtcclxuICAgIC8vIFRyeSB0byBmaW5kXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NrZWxldG9uLmJvbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG5ld1NrZWxldG9uLmJvbmVzW2ldLm5hbWUgPT09IGpvaW50TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3U2tlbGV0b24uYm9uZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdCBmb3VuZCwgc2VhcmNoIGluIGdsdGYgbm9kZXNcclxuICAgIGNvbnN0IG5vZGVzID0gZ2x0ZlJ1bnRpbWUubm9kZXM7XHJcbiAgICBmb3IgKGNvbnN0IG5kZSBpbiBub2Rlcykge1xyXG4gICAgICAgIGNvbnN0IG5vZGU6IElHTFRGTm9kZSA9IG5vZGVzW25kZV07XHJcblxyXG4gICAgICAgIGlmICghbm9kZS5qb2ludE5hbWUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZDogSUdMVEZOb2RlID0gZ2x0ZlJ1bnRpbWUubm9kZXNbY2hpbGRyZW5baV1dO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmpvaW50TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5qb2ludE5hbWUgPT09IGpvaW50TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ID0gQ29uZmlndXJlQm9uZVRyYW5zZm9ybWF0aW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9uZSA9IG5ldyBCb25lKG5vZGUubmFtZSB8fCBcIlwiLCBuZXdTa2VsZXRvbiwgR2V0UGFyZW50Qm9uZShnbHRmUnVudGltZSwgc2tpbnMsIG5vZGUuam9pbnROYW1lLCBuZXdTa2VsZXRvbiksIG1hdCk7XHJcbiAgICAgICAgICAgICAgICBib25lLmlkID0gbmRlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgcm9vdCBub2RlXHJcbiAqIEBwYXJhbSBub2Rlc1RvUm9vdFxyXG4gKiBAcGFyYW0gaWRcclxuICogQHJldHVybnMgdGhlIHJvb3Qgbm9kZVxyXG4gKi9cclxuY29uc3QgR2V0Tm9kZVRvUm9vdCA9IChub2Rlc1RvUm9vdDogSU5vZGVUb1Jvb3RbXSwgaWQ6IHN0cmluZyk6IE51bGxhYmxlPEJvbmU+ID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXNUb1Jvb3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBub2RlVG9Sb290ID0gbm9kZXNUb1Jvb3RbaV07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZVRvUm9vdC5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gbm9kZVRvUm9vdC5ub2RlLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVRvUm9vdC5ib25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG5vZGUgd2l0aCB0aGUgam9pbnQgbmFtZVxyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICogQHBhcmFtIGpvaW50TmFtZVxyXG4gKiBAcmV0dXJucyB0aGUgbm9kZSB3aXRoIHRoZSBqb2ludCBuYW1lXHJcbiAqL1xyXG5jb25zdCBHZXRKb2ludE5vZGUgPSAoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgam9pbnROYW1lOiBzdHJpbmcpOiBOdWxsYWJsZTxJSm9pbnROb2RlPiA9PiB7XHJcbiAgICBjb25zdCBub2RlcyA9IGdsdGZSdW50aW1lLm5vZGVzO1xyXG4gICAgbGV0IG5vZGU6IElHTFRGTm9kZSA9IG5vZGVzW2pvaW50TmFtZV07XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5vZGU6IG5vZGUsXHJcbiAgICAgICAgICAgIGlkOiBqb2ludE5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IG5kZSBpbiBub2Rlcykge1xyXG4gICAgICAgIG5vZGUgPSBub2Rlc1tuZGVdO1xyXG4gICAgICAgIGlmIChub2RlLmpvaW50TmFtZSA9PT0gam9pbnROYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IG5kZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGEgbm9kZXMgaXMgaW4gam9pbnRzXHJcbiAqIEBwYXJhbSBza2luc1xyXG4gKiBAcGFyYW0gaWRcclxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgbm9kZSBpcyBpbiBqb2ludHMsIGVsc2UgZmFsc2VcclxuICovXHJcbmNvbnN0IE5vZGVJc0luSm9pbnRzID0gKHNraW5zOiBJR0xURlNraW5zLCBpZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraW5zLmpvaW50TmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc2tpbnMuam9pbnROYW1lc1tpXSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaWxscyB0aGUgbm9kZXMgdG8gcm9vdCBmb3IgYm9uZXMgYW5kIGJ1aWxkcyBoaWVyYXJjaHlcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqIEBwYXJhbSBuZXdTa2VsZXRvblxyXG4gKiBAcGFyYW0gc2tpbnNcclxuICogQHBhcmFtIG5vZGVzVG9Sb290XHJcbiAqL1xyXG5jb25zdCBHZXROb2Rlc1RvUm9vdCA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBuZXdTa2VsZXRvbjogU2tlbGV0b24sIHNraW5zOiBJR0xURlNraW5zLCBub2Rlc1RvUm9vdDogSU5vZGVUb1Jvb3RbXSkgPT4ge1xyXG4gICAgLy8gQ3JlYXRlcyBub2RlcyBmb3Igcm9vdFxyXG4gICAgZm9yIChjb25zdCBuZGUgaW4gZ2x0ZlJ1bnRpbWUubm9kZXMpIHtcclxuICAgICAgICBjb25zdCBub2RlOiBJR0xURk5vZGUgPSBnbHRmUnVudGltZS5ub2Rlc1tuZGVdO1xyXG4gICAgICAgIGNvbnN0IGlkID0gbmRlO1xyXG5cclxuICAgICAgICBpZiAoIW5vZGUuam9pbnROYW1lIHx8IE5vZGVJc0luSm9pbnRzKHNraW5zLCBub2RlLmpvaW50TmFtZSkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgbm9kZSB0byByb290IGJvbmVcclxuICAgICAgICBjb25zdCBtYXQgPSBDb25maWd1cmVCb25lVHJhbnNmb3JtYXRpb24obm9kZSk7XHJcbiAgICAgICAgY29uc3QgYm9uZSA9IG5ldyBCb25lKG5vZGUubmFtZSB8fCBcIlwiLCBuZXdTa2VsZXRvbiwgbnVsbCwgbWF0KTtcclxuICAgICAgICBib25lLmlkID0gaWQ7XHJcbiAgICAgICAgbm9kZXNUb1Jvb3QucHVzaCh7IGJvbmU6IGJvbmUsIG5vZGU6IG5vZGUsIGlkOiBpZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJlbnRpbmdcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXNUb1Jvb3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBub2RlVG9Sb290ID0gbm9kZXNUb1Jvb3RbaV07XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2RlVG9Sb290Lm5vZGUuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkOiBOdWxsYWJsZTxJTm9kZVRvUm9vdD4gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBub2Rlc1RvUm9vdC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzVG9Sb290W2tdLmlkID09PSBjaGlsZHJlbltqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gbm9kZXNUb1Jvb3Rba107XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+Y2hpbGQuYm9uZSkuX3BhcmVudCA9IG5vZGVUb1Jvb3QuYm9uZTtcclxuICAgICAgICAgICAgICAgIG5vZGVUb1Jvb3QuYm9uZS5jaGlsZHJlbi5wdXNoKGNoaWxkLmJvbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEltcG9ydHMgYSBza2VsZXRvblxyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICogQHBhcmFtIHNraW5zXHJcbiAqIEBwYXJhbSBtZXNoXHJcbiAqIEBwYXJhbSBuZXdTa2VsZXRvblxyXG4gKiBAcmV0dXJucyB0aGUgYm9uZSBuYW1lXHJcbiAqL1xyXG5jb25zdCBJbXBvcnRTa2VsZXRvbiA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBza2luczogSUdMVEZTa2lucywgbWVzaDogTWVzaCwgbmV3U2tlbGV0b246IFNrZWxldG9uIHwgdW5kZWZpbmVkKTogU2tlbGV0b24gPT4ge1xyXG4gICAgaWYgKCFuZXdTa2VsZXRvbikge1xyXG4gICAgICAgIG5ld1NrZWxldG9uID0gbmV3IFNrZWxldG9uKHNraW5zLm5hbWUgfHwgXCJcIiwgXCJcIiwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghc2tpbnMuYmFieWxvblNrZWxldG9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ld1NrZWxldG9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIHJvb3QgYm9uZXNcclxuICAgIGNvbnN0IG5vZGVzVG9Sb290OiBJTm9kZVRvUm9vdFtdID0gW107XHJcbiAgICBjb25zdCBub2Rlc1RvUm9vdFRvQWRkOiBCb25lW10gPSBbXTtcclxuXHJcbiAgICBHZXROb2Rlc1RvUm9vdChnbHRmUnVudGltZSwgbmV3U2tlbGV0b24sIHNraW5zLCBub2Rlc1RvUm9vdCk7XHJcbiAgICBuZXdTa2VsZXRvbi5ib25lcyA9IFtdO1xyXG5cclxuICAgIC8vIEpvaW50c1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2lucy5qb2ludE5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgam9pbnROb2RlID0gR2V0Sm9pbnROb2RlKGdsdGZSdW50aW1lLCBza2lucy5qb2ludE5hbWVzW2ldKTtcclxuXHJcbiAgICAgICAgaWYgKCFqb2ludE5vZGUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub2RlID0gam9pbnROb2RlLm5vZGU7XHJcblxyXG4gICAgICAgIGlmICghbm9kZSkge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKFwiSm9pbnQgbmFtZWQgXCIgKyBza2lucy5qb2ludE5hbWVzW2ldICsgXCIgZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBqb2ludE5vZGUuaWQ7XHJcblxyXG4gICAgICAgIC8vIE9wdGltaXplLCBpZiB0aGUgYm9uZSBhbHJlYWR5IGV4aXN0cy4uLlxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQm9uZSA9IGdsdGZSdW50aW1lLnNjZW5lLmdldEJvbmVCeUlkKGlkKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmdCb25lKSB7XHJcbiAgICAgICAgICAgIG5ld1NrZWxldG9uLmJvbmVzLnB1c2goZXhpc3RpbmdCb25lKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZWFyY2ggZm9yIHBhcmVudCBib25lXHJcbiAgICAgICAgbGV0IGZvdW5kQm9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBwYXJlbnRCb25lOiBOdWxsYWJsZTxCb25lPiA9IG51bGw7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaTsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGpvaW50Tm9kZSA9IEdldEpvaW50Tm9kZShnbHRmUnVudGltZSwgc2tpbnMuam9pbnROYW1lc1tqXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWpvaW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGpvaW50OiBJR0xURk5vZGUgPSBqb2ludE5vZGUubm9kZTtcclxuXHJcbiAgICAgICAgICAgIGlmICgham9pbnQpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJKb2ludCBuYW1lZCBcIiArIHNraW5zLmpvaW50TmFtZXNbal0gKyBcIiBkb2VzIG5vdCBleGlzdCB3aGVuIGxvb2tpbmcgZm9yIHBhcmVudFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGpvaW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3VuZEJvbmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY2hpbGRyZW4ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbltrXSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRCb25lID0gR2V0UGFyZW50Qm9uZShnbHRmUnVudGltZSwgc2tpbnMsIHNraW5zLmpvaW50TmFtZXNbal0sIG5ld1NrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEJvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZm91bmRCb25lKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGJvbmVcclxuICAgICAgICBjb25zdCBtYXQgPSBDb25maWd1cmVCb25lVHJhbnNmb3JtYXRpb24obm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50Qm9uZSAmJiBub2Rlc1RvUm9vdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHBhcmVudEJvbmUgPSBHZXROb2RlVG9Sb290KG5vZGVzVG9Sb290LCBpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyZW50Qm9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzVG9Sb290VG9BZGQuaW5kZXhPZihwYXJlbnRCb25lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2Rlc1RvUm9vdFRvQWRkLnB1c2gocGFyZW50Qm9uZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvbmUgPSBuZXcgQm9uZShub2RlLmpvaW50TmFtZSB8fCBcIlwiLCBuZXdTa2VsZXRvbiwgcGFyZW50Qm9uZSwgbWF0KTtcclxuICAgICAgICBib25lLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUG9saXNoXHJcbiAgICBjb25zdCBib25lcyA9IG5ld1NrZWxldG9uLmJvbmVzO1xyXG4gICAgbmV3U2tlbGV0b24uYm9uZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraW5zLmpvaW50TmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBqb2ludE5vZGUgPSBHZXRKb2ludE5vZGUoZ2x0ZlJ1bnRpbWUsIHNraW5zLmpvaW50TmFtZXNbaV0pO1xyXG5cclxuICAgICAgICBpZiAoIWpvaW50Tm9kZSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9uZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGJvbmVzW2pdLmlkID09PSBqb2ludE5vZGUuaWQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1NrZWxldG9uLmJvbmVzLnB1c2goYm9uZXNbal0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV3U2tlbGV0b24ucHJlcGFyZSgpO1xyXG5cclxuICAgIC8vIEZpbmlzaFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlc1RvUm9vdFRvQWRkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbmV3U2tlbGV0b24uYm9uZXMucHVzaChub2Rlc1RvUm9vdFRvQWRkW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3U2tlbGV0b247XHJcbn07XHJcblxyXG4vKipcclxuICogSW1wb3J0cyBhIG1lc2ggYW5kIGl0cyBnZW9tZXRyaWVzXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKiBAcGFyYW0gbm9kZVxyXG4gKiBAcGFyYW0gbWVzaGVzXHJcbiAqIEBwYXJhbSBpZFxyXG4gKiBAcGFyYW0gbmV3TWVzaFxyXG4gKiBAcmV0dXJucyB0aGUgbmV3IG1lc2hcclxuICovXHJcbmNvbnN0IEltcG9ydE1lc2ggPSAoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgbm9kZTogSUdMVEZOb2RlLCBtZXNoZXM6IHN0cmluZ1tdLCBpZDogc3RyaW5nLCBuZXdNZXNoOiBNZXNoKTogTWVzaCA9PiB7XHJcbiAgICBpZiAoIW5ld01lc2gpIHtcclxuICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISFnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBuZXdNZXNoID0gbmV3IE1lc2gobm9kZS5uYW1lIHx8IFwiXCIsIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICBuZXdNZXNoLl9wYXJlbnRDb250YWluZXIgPSBnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgbmV3TWVzaC5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbm9kZS5iYWJ5bG9uTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBuZXdNZXNoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Yk1hdGVyaWFsczogTWF0ZXJpYWxbXSA9IFtdO1xyXG5cclxuICAgIGxldCB2ZXJ0ZXhEYXRhOiBOdWxsYWJsZTxWZXJ0ZXhEYXRhPiA9IG51bGw7XHJcbiAgICBjb25zdCB2ZXJ0aWNlc1N0YXJ0czogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IHZlcnRpY2VzQ291bnRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgY29uc3QgaW5kZXhTdGFydHM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBpbmRleENvdW50czogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBtZXNoSW5kZXggPSAwOyBtZXNoSW5kZXggPCBtZXNoZXMubGVuZ3RoOyBtZXNoSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG1lc2hJZCA9IG1lc2hlc1ttZXNoSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG1lc2g6IElHTFRGTWVzaCA9IGdsdGZSdW50aW1lLm1lc2hlc1ttZXNoSWRdO1xyXG5cclxuICAgICAgICBpZiAoIW1lc2gpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQb3NpdGlvbnMsIG5vcm1hbHMgYW5kIFVWc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzaC5wcmltaXRpdmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIFRlbXBvcmFyeSB2ZXJ0ZXggZGF0YVxyXG4gICAgICAgICAgICBjb25zdCB0ZW1wVmVydGV4RGF0YSA9IG5ldyBWZXJ0ZXhEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcmltaXRpdmUgPSBtZXNoLnByaW1pdGl2ZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChwcmltaXRpdmUubW9kZSAhPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBwcmltaXRpdmUuYXR0cmlidXRlcztcclxuICAgICAgICAgICAgbGV0IGFjY2Vzc29yOiBOdWxsYWJsZTxJR0xURkFjY2Vzc29yPiA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBidWZmZXI6IGFueSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgcG9zaXRpb25zLCBub3JtYWwgYW5kIHV2c1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNlbWFudGljIGluIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIExpbmsgYWNjZXNzb3IgYW5kIGJ1ZmZlciB2aWV3XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NvciA9IGdsdGZSdW50aW1lLmFjY2Vzc29yc1thdHRyaWJ1dGVzW3NlbWFudGljXV07XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBHTFRGVXRpbHMuR2V0QnVmZmVyRnJvbUFjY2Vzc29yKGdsdGZSdW50aW1lLCBhY2Nlc3Nvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbWFudGljID09PSBcIk5PUk1BTFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEubm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxGbG9hdDMyQXJyYXk+dGVtcFZlcnRleERhdGEubm9ybWFscykuc2V0KGJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbWFudGljID09PSBcIlBPU0lUSU9OXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoR0xURkZpbGVMb2FkZXIuSG9tb2dlbmVvdXNDb29yZGluYXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5wb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlci5sZW5ndGggLSBidWZmZXIubGVuZ3RoIC8gNCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ1ZmZlci5sZW5ndGg7IGogKz0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEucG9zaXRpb25zW2pdID0gYnVmZmVyW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEucG9zaXRpb25zW2ogKyAxXSA9IGJ1ZmZlcltqICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5wb3NpdGlvbnNbaiArIDJdID0gYnVmZmVyW2ogKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLnBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8RmxvYXQzMkFycmF5PnRlbXBWZXJ0ZXhEYXRhLnBvc2l0aW9ucykuc2V0KGJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlc0NvdW50cy5wdXNoKHRlbXBWZXJ0ZXhEYXRhLnBvc2l0aW9ucy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW1hbnRpYy5pbmRleE9mKFwiVEVYQ09PUkRfXCIpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5uZWwgPSBOdW1iZXIoc2VtYW50aWMuc3BsaXQoXCJfXCIpWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1dktpbmQgPSBWZXJ0ZXhCdWZmZXIuVVZLaW5kICsgKGNoYW5uZWwgPT09IDAgPyBcIlwiIDogY2hhbm5lbCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHV2cyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxGbG9hdDMyQXJyYXk+dXZzKS5zZXQoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBOb3JtYWxpemVVVnModXZzKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5zZXQodXZzLCB1dktpbmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW1hbnRpYyA9PT0gXCJKT0lOVFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEubWF0cmljZXNJbmRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAoPEZsb2F0MzJBcnJheT50ZW1wVmVydGV4RGF0YS5tYXRyaWNlc0luZGljZXMpLnNldChidWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW1hbnRpYyA9PT0gXCJXRUlHSFRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLm1hdHJpY2VzV2VpZ2h0cyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxGbG9hdDMyQXJyYXk+dGVtcFZlcnRleERhdGEubWF0cmljZXNXZWlnaHRzKS5zZXQoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtYW50aWMgPT09IFwiQ09MT1JcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLmNvbG9ycyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxGbG9hdDMyQXJyYXk+dGVtcFZlcnRleERhdGEuY29sb3JzKS5zZXQoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSW5kaWNlc1xyXG4gICAgICAgICAgICBhY2Nlc3NvciA9IGdsdGZSdW50aW1lLmFjY2Vzc29yc1twcmltaXRpdmUuaW5kaWNlc107XHJcbiAgICAgICAgICAgIGlmIChhY2Nlc3Nvcikge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyID0gR0xURlV0aWxzLkdldEJ1ZmZlckZyb21BY2Nlc3NvcihnbHRmUnVudGltZSwgYWNjZXNzb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLmluZGljZXMgPSBuZXcgSW50MzJBcnJheShidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLmluZGljZXMuc2V0KGJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICBpbmRleENvdW50cy5wdXNoKHRlbXBWZXJ0ZXhEYXRhLmluZGljZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNldCBpbmRpY2VzIG9uIHRoZSBmbHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8ICg8RmxvYXRBcnJheT50ZW1wVmVydGV4RGF0YS5wb3NpdGlvbnMpLmxlbmd0aCAvIDM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXMucHVzaChqKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5pbmRpY2VzID0gbmV3IEludDMyQXJyYXkoaW5kaWNlcyk7XHJcbiAgICAgICAgICAgICAgICBpbmRleENvdW50cy5wdXNoKHRlbXBWZXJ0ZXhEYXRhLmluZGljZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF2ZXJ0ZXhEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhID0gdGVtcFZlcnRleERhdGE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhLm1lcmdlKHRlbXBWZXJ0ZXhEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU3ViIG1hdGVyaWFsXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gZ2x0ZlJ1bnRpbWUuc2NlbmUuZ2V0TWF0ZXJpYWxCeUlkKHByaW1pdGl2ZS5tYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICBzdWJNYXRlcmlhbHMucHVzaChtYXRlcmlhbCA9PT0gbnVsbCA/IEdMVEZVdGlscy5HZXREZWZhdWx0TWF0ZXJpYWwoZ2x0ZlJ1bnRpbWUuc2NlbmUpIDogbWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHZlcnRpY2VzIHN0YXJ0IGFuZCBpbmRleCBzdGFydFxyXG4gICAgICAgICAgICB2ZXJ0aWNlc1N0YXJ0cy5wdXNoKHZlcnRpY2VzU3RhcnRzLmxlbmd0aCA9PT0gMCA/IDAgOiB2ZXJ0aWNlc1N0YXJ0c1t2ZXJ0aWNlc1N0YXJ0cy5sZW5ndGggLSAxXSArIHZlcnRpY2VzQ291bnRzW3ZlcnRpY2VzQ291bnRzLmxlbmd0aCAtIDJdKTtcclxuICAgICAgICAgICAgaW5kZXhTdGFydHMucHVzaChpbmRleFN0YXJ0cy5sZW5ndGggPT09IDAgPyAwIDogaW5kZXhTdGFydHNbaW5kZXhTdGFydHMubGVuZ3RoIC0gMV0gKyBpbmRleENvdW50c1tpbmRleENvdW50cy5sZW5ndGggLSAyXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG1hdGVyaWFsOiBTdGFuZGFyZE1hdGVyaWFsIHwgTXVsdGlNYXRlcmlhbDtcclxuICAgIGdsdGZSdW50aW1lLnNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIWdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgaWYgKHN1Yk1hdGVyaWFscy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgbWF0ZXJpYWwgPSBuZXcgTXVsdGlNYXRlcmlhbChcIm11bHRpbWF0XCIgKyBpZCwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgICAgIG1hdGVyaWFsLnN1Yk1hdGVyaWFscyA9IHN1Yk1hdGVyaWFscztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChcIm11bHRpbWF0XCIgKyBpZCwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdWJNYXRlcmlhbHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbWF0ZXJpYWwgPSBzdWJNYXRlcmlhbHNbMF0gYXMgU3RhbmRhcmRNYXRlcmlhbDtcclxuICAgIH1cclxuXHJcbiAgICBtYXRlcmlhbC5fcGFyZW50Q29udGFpbmVyID0gZ2x0ZlJ1bnRpbWUuYXNzZXRDb250YWluZXI7XHJcblxyXG4gICAgaWYgKCFuZXdNZXNoLm1hdGVyaWFsKSB7XHJcbiAgICAgICAgbmV3TWVzaC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IGdlb21ldHJ5XHJcbiAgICBuZXcgR2VvbWV0cnkoaWQsIGdsdGZSdW50aW1lLnNjZW5lLCB2ZXJ0ZXhEYXRhISwgZmFsc2UsIG5ld01lc2gpO1xyXG4gICAgbmV3TWVzaC5jb21wdXRlV29ybGRNYXRyaXgodHJ1ZSk7XHJcblxyXG4gICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFwcGx5IHN1Ym1lc2hlc1xyXG4gICAgbmV3TWVzaC5zdWJNZXNoZXMgPSBbXTtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBmb3IgKGxldCBtZXNoSW5kZXggPSAwOyBtZXNoSW5kZXggPCBtZXNoZXMubGVuZ3RoOyBtZXNoSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG1lc2hJZCA9IG1lc2hlc1ttZXNoSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG1lc2g6IElHTFRGTWVzaCA9IGdsdGZSdW50aW1lLm1lc2hlc1ttZXNoSWRdO1xyXG5cclxuICAgICAgICBpZiAoIW1lc2gpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc2gucHJpbWl0aXZlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobWVzaC5wcmltaXRpdmVzW2ldLm1vZGUgIT09IDQpIHtcclxuICAgICAgICAgICAgICAgIC8vY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFN1Yk1lc2guQWRkVG9NZXNoKGluZGV4LCB2ZXJ0aWNlc1N0YXJ0c1tpbmRleF0sIHZlcnRpY2VzQ291bnRzW2luZGV4XSwgaW5kZXhTdGFydHNbaW5kZXhdLCBpbmRleENvdW50c1tpbmRleF0sIG5ld01lc2gsIG5ld01lc2gsIHRydWUpO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5pc2hcclxuICAgIHJldHVybiBuZXdNZXNoO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyZSBub2RlIHRyYW5zZm9ybWF0aW9uIGZyb20gcG9zaXRpb24sIHJvdGF0aW9uIGFuZCBzY2FsaW5nXHJcbiAqIEBwYXJhbSBuZXdOb2RlXHJcbiAqIEBwYXJhbSBwb3NpdGlvblxyXG4gKiBAcGFyYW0gcm90YXRpb25cclxuICogQHBhcmFtIHNjYWxpbmdcclxuICovXHJcbmNvbnN0IENvbmZpZ3VyZU5vZGUgPSAobmV3Tm9kZTogYW55LCBwb3NpdGlvbjogVmVjdG9yMywgcm90YXRpb246IFF1YXRlcm5pb24sIHNjYWxpbmc6IFZlY3RvcjMpID0+IHtcclxuICAgIGlmIChuZXdOb2RlLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgbmV3Tm9kZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdOb2RlLnJvdGF0aW9uUXVhdGVybmlvbiB8fCBuZXdOb2RlLnJvdGF0aW9uKSB7XHJcbiAgICAgICAgbmV3Tm9kZS5yb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3Tm9kZS5zY2FsaW5nKSB7XHJcbiAgICAgICAgbmV3Tm9kZS5zY2FsaW5nID0gc2NhbGluZztcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmVzIG5vZGUgZnJvbSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcclxuICogQHBhcmFtIG5ld05vZGVcclxuICogQHBhcmFtIG5vZGVcclxuICovXHJcbmNvbnN0IENvbmZpZ3VyZU5vZGVGcm9tTWF0cml4ID0gKG5ld05vZGU6IE1lc2gsIG5vZGU6IElHTFRGTm9kZSkgPT4ge1xyXG4gICAgaWYgKG5vZGUubWF0cml4KSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBjb25zdCByb3RhdGlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgY29uc3Qgc2NhbGluZyA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIGNvbnN0IG1hdCA9IE1hdHJpeC5Gcm9tQXJyYXkobm9kZS5tYXRyaXgpO1xyXG4gICAgICAgIG1hdC5kZWNvbXBvc2Uoc2NhbGluZywgcm90YXRpb24sIHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgQ29uZmlndXJlTm9kZShuZXdOb2RlLCBwb3NpdGlvbiwgcm90YXRpb24sIHNjYWxpbmcpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLnRyYW5zbGF0aW9uICYmIG5vZGUucm90YXRpb24gJiYgbm9kZS5zY2FsZSkge1xyXG4gICAgICAgIENvbmZpZ3VyZU5vZGUobmV3Tm9kZSwgVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS50cmFuc2xhdGlvbiksIFF1YXRlcm5pb24uRnJvbUFycmF5KG5vZGUucm90YXRpb24pLCBWZWN0b3IzLkZyb21BcnJheShub2RlLnNjYWxlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3Tm9kZS5jb21wdXRlV29ybGRNYXRyaXgodHJ1ZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogSW1wb3J0cyBhIG5vZGVcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqIEBwYXJhbSBub2RlXHJcbiAqIEBwYXJhbSBpZFxyXG4gKiBAcmV0dXJucyB0aGUgbmV3bHkgaW1wb3J0ZWQgbm9kZVxyXG4gKi9cclxuY29uc3QgSW1wb3J0Tm9kZSA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBub2RlOiBJR0xURk5vZGUsIGlkOiBzdHJpbmcpOiBOdWxsYWJsZTxOb2RlPiA9PiB7XHJcbiAgICBsZXQgbGFzdE5vZGU6IE51bGxhYmxlPE5vZGU+ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoZ2x0ZlJ1bnRpbWUuaW1wb3J0T25seU1lc2hlcyAmJiAobm9kZS5za2luIHx8IG5vZGUubWVzaGVzKSkge1xyXG4gICAgICAgIGlmIChnbHRmUnVudGltZS5pbXBvcnRNZXNoZXNOYW1lcyAmJiBnbHRmUnVudGltZS5pbXBvcnRNZXNoZXNOYW1lcy5sZW5ndGggPiAwICYmIGdsdGZSdW50aW1lLmltcG9ydE1lc2hlc05hbWVzLmluZGV4T2Yobm9kZS5uYW1lIHx8IFwiXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWVzaGVzXHJcbiAgICBpZiAobm9kZS5za2luKSB7XHJcbiAgICAgICAgaWYgKG5vZGUubWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNraW46IElHTFRGU2tpbnMgPSBnbHRmUnVudGltZS5za2luc1tub2RlLnNraW5dO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3TWVzaCA9IEltcG9ydE1lc2goZ2x0ZlJ1bnRpbWUsIG5vZGUsIG5vZGUubWVzaGVzLCBpZCwgPE1lc2g+bm9kZS5iYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgIG5ld01lc2guc2tlbGV0b24gPSBnbHRmUnVudGltZS5zY2VuZS5nZXRMYXN0U2tlbGV0b25CeUlkKG5vZGUuc2tpbik7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV3TWVzaC5za2VsZXRvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TWVzaC5za2VsZXRvbiA9IEltcG9ydFNrZWxldG9uKGdsdGZSdW50aW1lLCBza2luLCBuZXdNZXNoLCBza2luLmJhYnlsb25Ta2VsZXRvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFza2luLmJhYnlsb25Ta2VsZXRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNraW4uYmFieWxvblNrZWxldG9uID0gbmV3TWVzaC5za2VsZXRvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFzdE5vZGUgPSBuZXdNZXNoO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobm9kZS5tZXNoZXMpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbXByb3ZlIG1lc2hlcyBwcm9wZXJ0eVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IG5ld01lc2ggPSBJbXBvcnRNZXNoKGdsdGZSdW50aW1lLCBub2RlLCBub2RlLm1lc2ggPyBbbm9kZS5tZXNoXSA6IG5vZGUubWVzaGVzLCBpZCwgPE1lc2g+bm9kZS5iYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgbGFzdE5vZGUgPSBuZXdNZXNoO1xyXG4gICAgfVxyXG4gICAgLy8gTGlnaHRzXHJcbiAgICBlbHNlIGlmIChub2RlLmxpZ2h0ICYmICFub2RlLmJhYnlsb25Ob2RlICYmICFnbHRmUnVudGltZS5pbXBvcnRPbmx5TWVzaGVzKSB7XHJcbiAgICAgICAgY29uc3QgbGlnaHQ6IElHTFRGTGlnaHQgPSBnbHRmUnVudGltZS5saWdodHNbbm9kZS5saWdodF07XHJcblxyXG4gICAgICAgIGlmIChsaWdodCkge1xyXG4gICAgICAgICAgICBpZiAobGlnaHQudHlwZSA9PT0gXCJhbWJpZW50XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFtYmllbkxpZ2h0OiBJR0xURkFtYmllbkxpZ2h0ID0gKDxhbnk+bGlnaHQpW2xpZ2h0LnR5cGVdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVtaUxpZ2h0ID0gbmV3IEhlbWlzcGhlcmljTGlnaHQobm9kZS5saWdodCwgVmVjdG9yMy5aZXJvKCksIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGhlbWlMaWdodC5uYW1lID0gbm9kZS5uYW1lIHx8IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFtYmllbkxpZ2h0LmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVtaUxpZ2h0LmRpZmZ1c2UgPSBDb2xvcjMuRnJvbUFycmF5KGFtYmllbkxpZ2h0LmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZSA9IGhlbWlMaWdodDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaWdodC50eXBlID09PSBcImRpcmVjdGlvbmFsXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQ6IElHTFRGRGlyZWN0aW9uYWxMaWdodCA9ICg8YW55PmxpZ2h0KVtsaWdodC50eXBlXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpckxpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQobm9kZS5saWdodCwgVmVjdG9yMy5aZXJvKCksIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGRpckxpZ2h0Lm5hbWUgPSBub2RlLm5hbWUgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uYWxMaWdodC5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpckxpZ2h0LmRpZmZ1c2UgPSBDb2xvcjMuRnJvbUFycmF5KGRpcmVjdGlvbmFsTGlnaHQuY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhc3ROb2RlID0gZGlyTGlnaHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlnaHQudHlwZSA9PT0gXCJwb2ludFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludExpZ2h0OiBJR0xURlBvaW50TGlnaHQgPSAoPGFueT5saWdodClbbGlnaHQudHlwZV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwdExpZ2h0ID0gbmV3IFBvaW50TGlnaHQobm9kZS5saWdodCwgVmVjdG9yMy5aZXJvKCksIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIHB0TGlnaHQubmFtZSA9IG5vZGUubmFtZSB8fCBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwb2ludExpZ2h0LmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHRMaWdodC5kaWZmdXNlID0gQ29sb3IzLkZyb21BcnJheShwb2ludExpZ2h0LmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZSA9IHB0TGlnaHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlnaHQudHlwZSA9PT0gXCJzcG90XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwb3RMaWdodDogSUdMVEZTcG90TGlnaHQgPSAoPGFueT5saWdodClbbGlnaHQudHlwZV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcExpZ2h0ID0gbmV3IFNwb3RMaWdodChub2RlLmxpZ2h0LCBWZWN0b3IzLlplcm8oKSwgVmVjdG9yMy5aZXJvKCksIDAsIDAsIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIHNwTGlnaHQubmFtZSA9IG5vZGUubmFtZSB8fCBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzcG90TGlnaHQuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcExpZ2h0LmRpZmZ1c2UgPSBDb2xvcjMuRnJvbUFycmF5KHNwb3RMaWdodC5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNwb3RMaWdodC5mYWxsT2ZBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwTGlnaHQuYW5nbGUgPSBzcG90TGlnaHQuZmFsbE9mQW5nbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNwb3RMaWdodC5mYWxsT2ZmRXhwb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcExpZ2h0LmV4cG9uZW50ID0gc3BvdExpZ2h0LmZhbGxPZmZFeHBvbmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZSA9IHNwTGlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDYW1lcmFzXHJcbiAgICBlbHNlIGlmIChub2RlLmNhbWVyYSAmJiAhbm9kZS5iYWJ5bG9uTm9kZSAmJiAhZ2x0ZlJ1bnRpbWUuaW1wb3J0T25seU1lc2hlcykge1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYTogSUdMVEZDYW1lcmEgPSBnbHRmUnVudGltZS5jYW1lcmFzW25vZGUuY2FtZXJhXTtcclxuXHJcbiAgICAgICAgaWYgKGNhbWVyYSkge1xyXG4gICAgICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISFnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgaWYgKGNhbWVyYS50eXBlID09PSBcIm9ydGhvZ3JhcGhpY1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcnRob0NhbWVyYSA9IG5ldyBGcmVlQ2FtZXJhKG5vZGUuY2FtZXJhLCBWZWN0b3IzLlplcm8oKSwgZ2x0ZlJ1bnRpbWUuc2NlbmUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcnRob0NhbWVyYS5uYW1lID0gbm9kZS5uYW1lIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBvcnRob0NhbWVyYS5tb2RlID0gQ2FtZXJhLk9SVEhPR1JBUEhJQ19DQU1FUkE7XHJcbiAgICAgICAgICAgICAgICBvcnRob0NhbWVyYS5hdHRhY2hDb250cm9sKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFzdE5vZGUgPSBvcnRob0NhbWVyYTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcnRob0NhbWVyYS5fcGFyZW50Q29udGFpbmVyID0gZ2x0ZlJ1bnRpbWUuYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FtZXJhLnR5cGUgPT09IFwicGVyc3BlY3RpdmVcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyc3BlY3RpdmVDYW1lcmE6IElHTFRGQ2FtZXJhUGVyc3BlY3RpdmUgPSAoPGFueT5jYW1lcmEpW2NhbWVyYS50eXBlXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNDYW1lcmEgPSBuZXcgRnJlZUNhbWVyYShub2RlLmNhbWVyYSwgVmVjdG9yMy5aZXJvKCksIGdsdGZSdW50aW1lLnNjZW5lLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGVyc0NhbWVyYS5uYW1lID0gbm9kZS5uYW1lIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwZXJzQ2FtZXJhLmF0dGFjaENvbnRyb2woKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBlcnNwZWN0aXZlQ2FtZXJhLmFzcGVjdFJhdGlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmVDYW1lcmEuYXNwZWN0UmF0aW8gPSBnbHRmUnVudGltZS5zY2VuZS5nZXRFbmdpbmUoKS5nZXRSZW5kZXJXaWR0aCgpIC8gZ2x0ZlJ1bnRpbWUuc2NlbmUuZ2V0RW5naW5lKCkuZ2V0UmVuZGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBlcnNwZWN0aXZlQ2FtZXJhLnpuZWFyICYmIHBlcnNwZWN0aXZlQ2FtZXJhLnpmYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzQ2FtZXJhLm1heFogPSBwZXJzcGVjdGl2ZUNhbWVyYS56ZmFyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNDYW1lcmEubWluWiA9IHBlcnNwZWN0aXZlQ2FtZXJhLnpuZWFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhc3ROb2RlID0gcGVyc0NhbWVyYTtcclxuICAgICAgICAgICAgICAgIHBlcnNDYW1lcmEuX3BhcmVudENvbnRhaW5lciA9IGdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEVtcHR5IG5vZGVcclxuICAgIGlmICghbm9kZS5qb2ludE5hbWUpIHtcclxuICAgICAgICBpZiAobm9kZS5iYWJ5bG9uTm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5iYWJ5bG9uTm9kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxhc3ROb2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIWdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBjb25zdCBkdW1teSA9IG5ldyBNZXNoKG5vZGUubmFtZSB8fCBcIlwiLCBnbHRmUnVudGltZS5zY2VuZSk7XHJcbiAgICAgICAgICAgIGR1bW15Ll9wYXJlbnRDb250YWluZXIgPSBnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBub2RlLmJhYnlsb25Ob2RlID0gZHVtbXk7XHJcbiAgICAgICAgICAgIGxhc3ROb2RlID0gZHVtbXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChsYXN0Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChub2RlLm1hdHJpeCAmJiBsYXN0Tm9kZSBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAgICAgQ29uZmlndXJlTm9kZUZyb21NYXRyaXgobGFzdE5vZGUsIG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gbm9kZS50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uID0gbm9kZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gbm9kZS5zY2FsZSB8fCBbMSwgMSwgMV07XHJcbiAgICAgICAgICAgIENvbmZpZ3VyZU5vZGUobGFzdE5vZGUsIFZlY3RvcjMuRnJvbUFycmF5KHRyYW5zbGF0aW9uKSwgUXVhdGVybmlvbi5Gcm9tQXJyYXkocm90YXRpb24pLCBWZWN0b3IzLkZyb21BcnJheShzY2FsZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFzdE5vZGUudXBkYXRlQ2FjaGUodHJ1ZSk7XHJcbiAgICAgICAgbm9kZS5iYWJ5bG9uTm9kZSA9IGxhc3ROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXN0Tm9kZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUcmF2ZXJzZXMgbm9kZXMgYW5kIGNyZWF0ZXMgdGhlbVxyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICogQHBhcmFtIGlkXHJcbiAqIEBwYXJhbSBwYXJlbnRcclxuICogQHBhcmFtIG1lc2hJbmNsdWRlZFxyXG4gKi9cclxuY29uc3QgVHJhdmVyc2VOb2RlcyA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBwYXJlbnQ6IE51bGxhYmxlPE5vZGU+LCBtZXNoSW5jbHVkZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3Qgbm9kZTogSUdMVEZOb2RlID0gZ2x0ZlJ1bnRpbWUubm9kZXNbaWRdO1xyXG4gICAgbGV0IG5ld05vZGU6IE51bGxhYmxlPE5vZGU+ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoZ2x0ZlJ1bnRpbWUuaW1wb3J0T25seU1lc2hlcyAmJiAhbWVzaEluY2x1ZGVkICYmIGdsdGZSdW50aW1lLmltcG9ydE1lc2hlc05hbWVzKSB7XHJcbiAgICAgICAgaWYgKGdsdGZSdW50aW1lLmltcG9ydE1lc2hlc05hbWVzLmluZGV4T2Yobm9kZS5uYW1lIHx8IFwiXCIpICE9PSAtMSB8fCBnbHRmUnVudGltZS5pbXBvcnRNZXNoZXNOYW1lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbWVzaEluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNoSW5jbHVkZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc2hJbmNsdWRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFub2RlLmpvaW50TmFtZSAmJiBtZXNoSW5jbHVkZWQpIHtcclxuICAgICAgICBuZXdOb2RlID0gSW1wb3J0Tm9kZShnbHRmUnVudGltZSwgbm9kZSwgaWQpO1xyXG5cclxuICAgICAgICBpZiAobmV3Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdOb2RlLmlkID0gaWQ7XHJcbiAgICAgICAgICAgIG5ld05vZGUucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBUcmF2ZXJzZU5vZGVzKGdsdGZSdW50aW1lLCBub2RlLmNoaWxkcmVuW2ldLCBuZXdOb2RlLCBtZXNoSW5jbHVkZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBkbyBzdHVmZiBhZnRlciBidWZmZXJzLCBzaGFkZXJzIGFyZSBsb2FkZWQgKGUuZy4gaG9vayB1cCBtYXRlcmlhbHMsIGxvYWQgYW5pbWF0aW9ucywgZXRjLilcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqL1xyXG5jb25zdCBQb3N0TG9hZCA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKSA9PiB7XHJcbiAgICAvLyBOb2Rlc1xyXG4gICAgbGV0IGN1cnJlbnRTY2VuZTogSUdMVEZTY2VuZSA9IDxJR0xURlNjZW5lPmdsdGZSdW50aW1lLmN1cnJlbnRTY2VuZTtcclxuXHJcbiAgICBpZiAoY3VycmVudFNjZW5lKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2NlbmUubm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgVHJhdmVyc2VOb2RlcyhnbHRmUnVudGltZSwgY3VycmVudFNjZW5lLm5vZGVzW2ldLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGhpbmcgaW4gZ2x0ZlJ1bnRpbWUuc2NlbmVzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTY2VuZSA9IGdsdGZSdW50aW1lLnNjZW5lc1t0aGluZ107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTY2VuZS5ub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgVHJhdmVyc2VOb2RlcyhnbHRmUnVudGltZSwgY3VycmVudFNjZW5lLm5vZGVzW2ldLCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgYW5pbWF0aW9uc1xyXG4gICAgTG9hZEFuaW1hdGlvbnMoZ2x0ZlJ1bnRpbWUpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2x0ZlJ1bnRpbWUuc2NlbmUuc2tlbGV0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc2tlbGV0b24gPSBnbHRmUnVudGltZS5zY2VuZS5za2VsZXRvbnNbaV07XHJcbiAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuYmVnaW5BbmltYXRpb24oc2tlbGV0b24sIDAsIE51bWJlci5NQVhfVkFMVUUsIHRydWUsIDEuMCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogb25CaW5kIHNoYWRlcnJzIGNhbGxiYWNrIHRvIHNldCB1bmlmb3JtcyBhbmQgbWF0cmljZXNcclxuICogQHBhcmFtIG1lc2hcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqIEBwYXJhbSB1blRyZWF0ZWRVbmlmb3Jtc1xyXG4gKiBAcGFyYW0gc2hhZGVyTWF0ZXJpYWxcclxuICogQHBhcmFtIHRlY2huaXF1ZVxyXG4gKiBAcGFyYW0gbWF0ZXJpYWxcclxuICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gKi9cclxuY29uc3QgT25CaW5kU2hhZGVyTWF0ZXJpYWwgPSAoXHJcbiAgICBtZXNoOiBBYnN0cmFjdE1lc2gsXHJcbiAgICBnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLFxyXG4gICAgdW5UcmVhdGVkVW5pZm9ybXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIgfSxcclxuICAgIHNoYWRlck1hdGVyaWFsOiBTaGFkZXJNYXRlcmlhbCxcclxuICAgIHRlY2huaXF1ZTogSUdMVEZUZWNobmlxdWUsXHJcbiAgICBtYXRlcmlhbDogSUdMVEZNYXRlcmlhbCxcclxuICAgIG9uU3VjY2VzczogKHNoYWRlck1hdGVyaWFsOiBTaGFkZXJNYXRlcmlhbCkgPT4gdm9pZFxyXG4pID0+IHtcclxuICAgIGNvbnN0IG1hdGVyaWFsVmFsdWVzID0gbWF0ZXJpYWwudmFsdWVzIHx8IHRlY2huaXF1ZS5wYXJhbWV0ZXJzO1xyXG5cclxuICAgIGZvciAoY29uc3QgdW5pZiBpbiB1blRyZWF0ZWRVbmlmb3Jtcykge1xyXG4gICAgICAgIGNvbnN0IHVuaWZvcm06IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyID0gdW5UcmVhdGVkVW5pZm9ybXNbdW5pZl07XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHVuaWZvcm0udHlwZTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IEVQYXJhbWV0ZXJUeXBlLkZMT0FUX01BVDIgfHwgdHlwZSA9PT0gRVBhcmFtZXRlclR5cGUuRkxPQVRfTUFUMyB8fCB0eXBlID09PSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9NQVQ0KSB7XHJcbiAgICAgICAgICAgIGlmICh1bmlmb3JtLnNlbWFudGljICYmICF1bmlmb3JtLnNvdXJjZSAmJiAhdW5pZm9ybS5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBHTFRGVXRpbHMuU2V0TWF0cml4KGdsdGZSdW50aW1lLnNjZW5lLCBtZXNoLCB1bmlmb3JtLCB1bmlmLCBzaGFkZXJNYXRlcmlhbC5nZXRFZmZlY3QoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodW5pZm9ybS5zZW1hbnRpYyAmJiAodW5pZm9ybS5zb3VyY2UgfHwgdW5pZm9ybS5ub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IGdsdGZSdW50aW1lLnNjZW5lLmdldE5vZGVCeU5hbWUodW5pZm9ybS5zb3VyY2UgfHwgdW5pZm9ybS5ub2RlIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGdsdGZSdW50aW1lLnNjZW5lLmdldE5vZGVCeUlkKHVuaWZvcm0uc291cmNlIHx8IHVuaWZvcm0ubm9kZSB8fCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBHTFRGVXRpbHMuU2V0TWF0cml4KGdsdGZSdW50aW1lLnNjZW5lLCBzb3VyY2UsIHVuaWZvcm0sIHVuaWYsIHNoYWRlck1hdGVyaWFsLmdldEVmZmVjdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKDxhbnk+bWF0ZXJpYWxWYWx1ZXMpW3RlY2huaXF1ZS51bmlmb3Jtc1t1bmlmXV07XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gRVBhcmFtZXRlclR5cGUuU0FNUExFUl8yRCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdsdGZSdW50aW1lLnRleHR1cmVzW21hdGVyaWFsLnZhbHVlcyA/IHZhbHVlIDogdW5pZm9ybS52YWx1ZV0uYmFieWxvblRleHR1cmU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRleHR1cmUgPT09IG51bGwgfHwgdGV4dHVyZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuZ2V0RWZmZWN0KCkuc2V0VGV4dHVyZSh1bmlmLCB0ZXh0dXJlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEdMVEZVdGlscy5TZXRVbmlmb3JtKHNoYWRlck1hdGVyaWFsLmdldEVmZmVjdCgpLCB1bmlmLCB2YWx1ZSwgdHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWNjZXNzKHNoYWRlck1hdGVyaWFsKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQcmVwYXJlIHVuaWZvcm1zIHRvIHNlbmQgdGhlIG9ubHkgb25lIHRpbWVcclxuICogTG9hZHMgdGhlIGFwcHJvcHJpYXRlIHRleHR1cmVzXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKiBAcGFyYW0gc2hhZGVyTWF0ZXJpYWxcclxuICogQHBhcmFtIHRlY2huaXF1ZVxyXG4gKiBAcGFyYW0gbWF0ZXJpYWxcclxuICovXHJcbmNvbnN0IFByZXBhcmVTaGFkZXJNYXRlcmlhbFVuaWZvcm1zID0gKFxyXG4gICAgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSxcclxuICAgIHNoYWRlck1hdGVyaWFsOiBTaGFkZXJNYXRlcmlhbCxcclxuICAgIHRlY2huaXF1ZTogSUdMVEZUZWNobmlxdWUsXHJcbiAgICBtYXRlcmlhbDogSUdMVEZNYXRlcmlhbCxcclxuICAgIHVuVHJlYXRlZFVuaWZvcm1zOiB7IFtrZXk6IHN0cmluZ106IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyIH1cclxuKSA9PiB7XHJcbiAgICBjb25zdCBtYXRlcmlhbFZhbHVlcyA9IG1hdGVyaWFsLnZhbHVlcyB8fCB0ZWNobmlxdWUucGFyYW1ldGVycztcclxuICAgIGNvbnN0IHRlY2huaXF1ZVVuaWZvcm1zID0gdGVjaG5pcXVlLnVuaWZvcm1zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJlcGFyZSB2YWx1ZXMgaGVyZSAobm90IG1hdHJpY2VzKVxyXG4gICAgICovXHJcbiAgICBmb3IgKGNvbnN0IHVuaWYgaW4gdW5UcmVhdGVkVW5pZm9ybXMpIHtcclxuICAgICAgICBjb25zdCB1bmlmb3JtOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlciA9IHVuVHJlYXRlZFVuaWZvcm1zW3VuaWZdO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSB1bmlmb3JtLnR5cGU7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gKDxhbnk+bWF0ZXJpYWxWYWx1ZXMpW3RlY2huaXF1ZVVuaWZvcm1zW3VuaWZdXTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gSW4gY2FzZSB0aGUgdmFsdWUgaXMgdGhlIHNhbWUgZm9yIGFsbCBtYXRlcmlhbHNcclxuICAgICAgICAgICAgdmFsdWUgPSA8YW55PnVuaWZvcm0udmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb25Mb2FkVGV4dHVyZSA9ICh1bmlmb3JtTmFtZTogTnVsbGFibGU8c3RyaW5nPikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRleHR1cmU6IFRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1bmlmb3JtLnZhbHVlICYmIHVuaWZvcm1OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhdGljIHVuaWZvcm1cclxuICAgICAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5zZXRUZXh0dXJlKHVuaWZvcm1OYW1lLCB0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW5UcmVhdGVkVW5pZm9ybXNbdW5pZm9ybU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFRleHR1cmUgKHNhbXBsZXIyRClcclxuICAgICAgICBpZiAodHlwZSA9PT0gRVBhcmFtZXRlclR5cGUuU0FNUExFUl8yRCkge1xyXG4gICAgICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLkxvYWRUZXh0dXJlQXN5bmMoZ2x0ZlJ1bnRpbWUsIG1hdGVyaWFsLnZhbHVlcyA/IHZhbHVlIDogdW5pZm9ybS52YWx1ZSwgb25Mb2FkVGV4dHVyZSh1bmlmKSwgKCkgPT4gb25Mb2FkVGV4dHVyZShudWxsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE90aGVyc1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodW5pZm9ybS52YWx1ZSAmJiBHTFRGVXRpbHMuU2V0VW5pZm9ybShzaGFkZXJNYXRlcmlhbCwgdW5pZiwgbWF0ZXJpYWwudmFsdWVzID8gdmFsdWUgOiB1bmlmb3JtLnZhbHVlLCB0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RhdGljIHVuaWZvcm1cclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB1blRyZWF0ZWRVbmlmb3Jtc1t1bmlmXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBTaGFkZXIgY29tcGlsYXRpb24gZmFpbGVkXHJcbiAqIEBwYXJhbSBwcm9ncmFtXHJcbiAqIEBwYXJhbSBzaGFkZXJNYXRlcmlhbFxyXG4gKiBAcGFyYW0gb25FcnJvclxyXG4gKiBAcmV0dXJucyBjYWxsYmFjayB3aGVuIHNoYWRlciBpcyBjb21waWxlZFxyXG4gKi9cclxuY29uc3QgT25TaGFkZXJDb21waWxlRXJyb3IgPSAocHJvZ3JhbTogSUdMVEZQcm9ncmFtLCBzaGFkZXJNYXRlcmlhbDogU2hhZGVyTWF0ZXJpYWwsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcclxuICAgIHJldHVybiAoZWZmZWN0OiBFZmZlY3QsIGVycm9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBzaGFkZXJNYXRlcmlhbC5kaXNwb3NlKHRydWUpO1xyXG4gICAgICAgIG9uRXJyb3IoXCJDYW5ub3QgY29tcGlsZSBwcm9ncmFtIG5hbWVkIFwiICsgcHJvZ3JhbS5uYW1lICsgXCIuIEVycm9yOiBcIiArIGVycm9yICsgXCIuIERlZmF1bHQgbWF0ZXJpYWwgd2lsbCBiZSBhcHBsaWVkXCIpO1xyXG4gICAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTaGFkZXIgY29tcGlsYXRpb24gc3VjY2Vzc1xyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICogQHBhcmFtIHNoYWRlck1hdGVyaWFsXHJcbiAqIEBwYXJhbSB0ZWNobmlxdWVcclxuICogQHBhcmFtIG1hdGVyaWFsXHJcbiAqIEBwYXJhbSB1blRyZWF0ZWRVbmlmb3Jtc1xyXG4gKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAqIEByZXR1cm5zIGNhbGxiYWNrIHdoZW4gc2hhZGVyIGlzIGNvbXBpbGVkXHJcbiAqL1xyXG5jb25zdCBPblNoYWRlckNvbXBpbGVTdWNjZXNzID0gKFxyXG4gICAgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSxcclxuICAgIHNoYWRlck1hdGVyaWFsOiBTaGFkZXJNYXRlcmlhbCxcclxuICAgIHRlY2huaXF1ZTogSUdMVEZUZWNobmlxdWUsXHJcbiAgICBtYXRlcmlhbDogSUdMVEZNYXRlcmlhbCxcclxuICAgIHVuVHJlYXRlZFVuaWZvcm1zOiB7IFtrZXk6IHN0cmluZ106IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyIH0sXHJcbiAgICBvblN1Y2Nlc3M6IChzaGFkZXJNYXRlcmlhbDogU2hhZGVyTWF0ZXJpYWwpID0+IHZvaWRcclxuKSA9PiB7XHJcbiAgICByZXR1cm4gKF86IEVmZmVjdCkgPT4ge1xyXG4gICAgICAgIFByZXBhcmVTaGFkZXJNYXRlcmlhbFVuaWZvcm1zKGdsdGZSdW50aW1lLCBzaGFkZXJNYXRlcmlhbCwgdGVjaG5pcXVlLCBtYXRlcmlhbCwgdW5UcmVhdGVkVW5pZm9ybXMpO1xyXG5cclxuICAgICAgICBzaGFkZXJNYXRlcmlhbC5vbkJpbmQgPSAobWVzaDogQWJzdHJhY3RNZXNoKSA9PiB7XHJcbiAgICAgICAgICAgIE9uQmluZFNoYWRlck1hdGVyaWFsKG1lc2gsIGdsdGZSdW50aW1lLCB1blRyZWF0ZWRVbmlmb3Jtcywgc2hhZGVyTWF0ZXJpYWwsIHRlY2huaXF1ZSwgbWF0ZXJpYWwsIG9uU3VjY2Vzcyk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgdW5pZm9ybSBpZiBhbHJlYWR5IGhhbmRsZWQgYnkgYmFieWxvblxyXG4gKiBAcGFyYW0gdG9rZW5pemVyXHJcbiAqIEBwYXJhbSB0ZWNobmlxdWVcclxuICogQHBhcmFtIHVuVHJlYXRlZFVuaWZvcm1zXHJcbiAqIEByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSB1bmlmb3JtIGhhbmRsZWQgYnkgYmFieWxvblxyXG4gKi9cclxuY29uc3QgUGFyc2VTaGFkZXJVbmlmb3JtcyA9ICh0b2tlbml6ZXI6IFRva2VuaXplciwgdGVjaG5pcXVlOiBJR0xURlRlY2huaXF1ZSwgdW5UcmVhdGVkVW5pZm9ybXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIgfSk6IHN0cmluZyA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IHVuaWYgaW4gdGVjaG5pcXVlLnVuaWZvcm1zKSB7XHJcbiAgICAgICAgY29uc3QgdW5pZm9ybSA9IHRlY2huaXF1ZS51bmlmb3Jtc1t1bmlmXTtcclxuICAgICAgICBjb25zdCB1bmlmb3JtUGFyYW1ldGVyOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlciA9IHRlY2huaXF1ZS5wYXJhbWV0ZXJzW3VuaWZvcm1dO1xyXG5cclxuICAgICAgICBpZiAodG9rZW5pemVyLmN1cnJlbnRJZGVudGlmaWVyID09PSB1bmlmKSB7XHJcbiAgICAgICAgICAgIGlmICh1bmlmb3JtUGFyYW1ldGVyLnNlbWFudGljICYmICF1bmlmb3JtUGFyYW1ldGVyLnNvdXJjZSAmJiAhdW5pZm9ybVBhcmFtZXRlci5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1JbmRleCA9IGdsVEZUcmFuc2Zvcm1zLmluZGV4T2YodW5pZm9ybVBhcmFtZXRlci5zZW1hbnRpYyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1blRyZWF0ZWRVbmlmb3Jtc1t1bmlmXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmFieWxvblRyYW5zZm9ybXNbdHJhbnNmb3JtSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2tlbml6ZXIuY3VycmVudElkZW50aWZpZXI7XHJcbn07XHJcblxyXG4vKipcclxuICogQWxsIHNoYWRlcnMgbG9hZGVkLiBDcmVhdGUgbWF0ZXJpYWxzIG9uZSBieSBvbmVcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqL1xyXG5jb25zdCBJbXBvcnRNYXRlcmlhbHMgPSAoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSkgPT4ge1xyXG4gICAgLy8gQ3JlYXRlIG1hdGVyaWFsc1xyXG4gICAgZm9yIChjb25zdCBtYXQgaW4gZ2x0ZlJ1bnRpbWUubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5Mb2FkTWF0ZXJpYWxBc3luYyhcclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUsXHJcbiAgICAgICAgICAgIG1hdCxcclxuICAgICAgICAgICAgKCkgPT4ge30sXHJcbiAgICAgICAgICAgICgpID0+IHt9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgYmFzZSBnbFRGIHNwZWNcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURkxvYWRlckJhc2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVSdW50aW1lKHBhcnNlZERhdGE6IGFueSwgc2NlbmU6IFNjZW5lLCByb290VXJsOiBzdHJpbmcpOiBJR0xURlJ1bnRpbWUge1xyXG4gICAgICAgIGNvbnN0IGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUgPSB7XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHt9LFxyXG4gICAgICAgICAgICBhY2Nlc3NvcnM6IHt9LFxyXG4gICAgICAgICAgICBidWZmZXJzOiB7fSxcclxuICAgICAgICAgICAgYnVmZmVyVmlld3M6IHt9LFxyXG4gICAgICAgICAgICBtZXNoZXM6IHt9LFxyXG4gICAgICAgICAgICBsaWdodHM6IHt9LFxyXG4gICAgICAgICAgICBjYW1lcmFzOiB7fSxcclxuICAgICAgICAgICAgbm9kZXM6IHt9LFxyXG4gICAgICAgICAgICBpbWFnZXM6IHt9LFxyXG4gICAgICAgICAgICB0ZXh0dXJlczoge30sXHJcbiAgICAgICAgICAgIHNoYWRlcnM6IHt9LFxyXG4gICAgICAgICAgICBwcm9ncmFtczoge30sXHJcbiAgICAgICAgICAgIHNhbXBsZXJzOiB7fSxcclxuICAgICAgICAgICAgdGVjaG5pcXVlczoge30sXHJcbiAgICAgICAgICAgIG1hdGVyaWFsczoge30sXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBza2luczoge30sXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnNVc2VkOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHNjZW5lczoge30sXHJcblxyXG4gICAgICAgICAgICBidWZmZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIHNoYWRlcnNjb3VudDogMCxcclxuXHJcbiAgICAgICAgICAgIHNjZW5lOiBzY2VuZSxcclxuICAgICAgICAgICAgcm9vdFVybDogcm9vdFVybCxcclxuXHJcbiAgICAgICAgICAgIGxvYWRlZEJ1ZmZlckNvdW50OiAwLFxyXG4gICAgICAgICAgICBsb2FkZWRCdWZmZXJWaWV3czoge30sXHJcblxyXG4gICAgICAgICAgICBsb2FkZWRTaGFkZXJDb3VudDogMCxcclxuXHJcbiAgICAgICAgICAgIGltcG9ydE9ubHlNZXNoZXM6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgZHVtbXlOb2RlczogW10sXHJcblxyXG4gICAgICAgICAgICBhc3NldENvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBQYXJzZVxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLmV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgUGFyc2VPYmplY3QocGFyc2VkRGF0YS5leHRlbnNpb25zLCBcImV4dGVuc2lvbnNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuZXh0ZW5zaW9uc1VzZWQpIHtcclxuICAgICAgICAgICAgUGFyc2VPYmplY3QocGFyc2VkRGF0YS5leHRlbnNpb25zVXNlZCwgXCJleHRlbnNpb25zVXNlZFwiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5idWZmZXJzKSB7XHJcbiAgICAgICAgICAgIFBhcnNlQnVmZmVycyhwYXJzZWREYXRhLmJ1ZmZlcnMsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLmJ1ZmZlclZpZXdzKSB7XHJcbiAgICAgICAgICAgIFBhcnNlT2JqZWN0KHBhcnNlZERhdGEuYnVmZmVyVmlld3MsIFwiYnVmZmVyVmlld3NcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuYWNjZXNzb3JzKSB7XHJcbiAgICAgICAgICAgIFBhcnNlT2JqZWN0KHBhcnNlZERhdGEuYWNjZXNzb3JzLCBcImFjY2Vzc29yc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5tZXNoZXMpIHtcclxuICAgICAgICAgICAgUGFyc2VPYmplY3QocGFyc2VkRGF0YS5tZXNoZXMsIFwibWVzaGVzXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLmxpZ2h0cykge1xyXG4gICAgICAgICAgICBQYXJzZU9iamVjdChwYXJzZWREYXRhLmxpZ2h0cywgXCJsaWdodHNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuY2FtZXJhcykge1xyXG4gICAgICAgICAgICBQYXJzZU9iamVjdChwYXJzZWREYXRhLmNhbWVyYXMsIFwiY2FtZXJhc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5ub2Rlcykge1xyXG4gICAgICAgICAgICBQYXJzZU9iamVjdChwYXJzZWREYXRhLm5vZGVzLCBcIm5vZGVzXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLmltYWdlcykge1xyXG4gICAgICAgICAgICBQYXJzZU9iamVjdChwYXJzZWREYXRhLmltYWdlcywgXCJpbWFnZXNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEudGV4dHVyZXMpIHtcclxuICAgICAgICAgICAgUGFyc2VPYmplY3QocGFyc2VkRGF0YS50ZXh0dXJlcywgXCJ0ZXh0dXJlc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5zaGFkZXJzKSB7XHJcbiAgICAgICAgICAgIFBhcnNlU2hhZGVycyhwYXJzZWREYXRhLnNoYWRlcnMsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLnByb2dyYW1zKSB7XHJcbiAgICAgICAgICAgIFBhcnNlT2JqZWN0KHBhcnNlZERhdGEucHJvZ3JhbXMsIFwicHJvZ3JhbXNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuc2FtcGxlcnMpIHtcclxuICAgICAgICAgICAgUGFyc2VPYmplY3QocGFyc2VkRGF0YS5zYW1wbGVycywgXCJzYW1wbGVyc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS50ZWNobmlxdWVzKSB7XHJcbiAgICAgICAgICAgIFBhcnNlT2JqZWN0KHBhcnNlZERhdGEudGVjaG5pcXVlcywgXCJ0ZWNobmlxdWVzXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLm1hdGVyaWFscykge1xyXG4gICAgICAgICAgICBQYXJzZU9iamVjdChwYXJzZWREYXRhLm1hdGVyaWFscywgXCJtYXRlcmlhbHNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICBQYXJzZU9iamVjdChwYXJzZWREYXRhLmFuaW1hdGlvbnMsIFwiYW5pbWF0aW9uc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5za2lucykge1xyXG4gICAgICAgICAgICBQYXJzZU9iamVjdChwYXJzZWREYXRhLnNraW5zLCBcInNraW5zXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLnNjZW5lcykge1xyXG4gICAgICAgICAgICBnbHRmUnVudGltZS5zY2VuZXMgPSBwYXJzZWREYXRhLnNjZW5lcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLnNjZW5lICYmIHBhcnNlZERhdGEuc2NlbmVzKSB7XHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLmN1cnJlbnRTY2VuZSA9IHBhcnNlZERhdGEuc2NlbmVzW3BhcnNlZERhdGEuc2NlbmVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdsdGZSdW50aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkQnVmZmVyQXN5bmMoXHJcbiAgICAgICAgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSxcclxuICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGJ1ZmZlcjogQXJyYXlCdWZmZXJWaWV3KSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86ICgpID0+IHZvaWRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcjogSUdMVEZCdWZmZXIgPSBnbHRmUnVudGltZS5idWZmZXJzW2lkXTtcclxuXHJcbiAgICAgICAgaWYgKFRvb2xzLklzQmFzZTY0KGJ1ZmZlci51cmkpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb25TdWNjZXNzKG5ldyBVaW50OEFycmF5KFRvb2xzLkRlY29kZUJhc2U2NChidWZmZXIudXJpKSkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5Mb2FkRmlsZShcclxuICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLnJvb3RVcmwgKyBidWZmZXIudXJpLFxyXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+IG9uU3VjY2VzcyhuZXcgVWludDhBcnJheShkYXRhIGFzIEFycmF5QnVmZmVyKSksXHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgIChyZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcihyZXF1ZXN0LnN0YXR1cyArIFwiIFwiICsgcmVxdWVzdC5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkVGV4dHVyZUJ1ZmZlckFzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKGJ1ZmZlcjogTnVsbGFibGU8QXJyYXlCdWZmZXJWaWV3PikgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmU6IElHTFRGVGV4dHVyZSA9IGdsdGZSdW50aW1lLnRleHR1cmVzW2lkXTtcclxuXHJcbiAgICAgICAgaWYgKCF0ZXh0dXJlIHx8ICF0ZXh0dXJlLnNvdXJjZSkge1xyXG4gICAgICAgICAgICBvbkVycm9yKFwiXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGV4dHVyZS5iYWJ5bG9uVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBvblN1Y2Nlc3MobnVsbCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZTogSUdMVEZJbWFnZSA9IGdsdGZSdW50aW1lLmltYWdlc1t0ZXh0dXJlLnNvdXJjZV07XHJcblxyXG4gICAgICAgIGlmIChUb29scy5Jc0Jhc2U2NChzb3VyY2UudXJpKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9uU3VjY2VzcyhuZXcgVWludDhBcnJheShUb29scy5EZWNvZGVCYXNlNjQoc291cmNlLnVyaSkpKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuTG9hZEZpbGUoXHJcbiAgICAgICAgICAgICAgICBnbHRmUnVudGltZS5yb290VXJsICsgc291cmNlLnVyaSxcclxuICAgICAgICAgICAgICAgIChkYXRhKSA9PiBvblN1Y2Nlc3MobmV3IFVpbnQ4QXJyYXkoZGF0YSBhcyBBcnJheUJ1ZmZlcikpLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgIChyZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcihyZXF1ZXN0LnN0YXR1cyArIFwiIFwiICsgcmVxdWVzdC5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVUZXh0dXJlQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgYnVmZmVyOiBOdWxsYWJsZTxBcnJheUJ1ZmZlclZpZXc+LCBvblN1Y2Nlc3M6ICh0ZXh0dXJlOiBUZXh0dXJlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZTogSUdMVEZUZXh0dXJlID0gZ2x0ZlJ1bnRpbWUudGV4dHVyZXNbaWRdO1xyXG5cclxuICAgICAgICBpZiAodGV4dHVyZS5iYWJ5bG9uVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBvblN1Y2Nlc3ModGV4dHVyZS5iYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbXBsZXI6IElHTFRGU2FtcGxlciA9IGdsdGZSdW50aW1lLnNhbXBsZXJzW3RleHR1cmUuc2FtcGxlcl07XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZU1pcE1hcHMgPVxyXG4gICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9PT0gRVRleHR1cmVGaWx0ZXJUeXBlLk5FQVJFU1RfTUlQTUFQX05FQVJFU1QgfHxcclxuICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPT09IEVUZXh0dXJlRmlsdGVyVHlwZS5ORUFSRVNUX01JUE1BUF9MSU5FQVIgfHxcclxuICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPT09IEVUZXh0dXJlRmlsdGVyVHlwZS5MSU5FQVJfTUlQTUFQX05FQVJFU1QgfHxcclxuICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPT09IEVUZXh0dXJlRmlsdGVyVHlwZS5MSU5FQVJfTUlQTUFQX0xJTkVBUjtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxpbmdNb2RlID0gVGV4dHVyZS5CSUxJTkVBUl9TQU1QTElOR01PREU7XHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2IgPSBidWZmZXIgPT0gbnVsbCA/IG5ldyBCbG9iKCkgOiBuZXcgQmxvYihbYnVmZmVyXSk7XHJcbiAgICAgICAgY29uc3QgYmxvYlVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgY29uc3QgcmV2b2tlQmxvYlVSTCA9ICgpID0+IFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYlVSTCk7XHJcbiAgICAgICAgY29uc3QgbmV3VGV4dHVyZSA9IG5ldyBUZXh0dXJlKGJsb2JVUkwsIGdsdGZSdW50aW1lLnNjZW5lLCAhY3JlYXRlTWlwTWFwcywgdHJ1ZSwgc2FtcGxpbmdNb2RlLCByZXZva2VCbG9iVVJMLCByZXZva2VCbG9iVVJMKTtcclxuICAgICAgICBpZiAoc2FtcGxlci53cmFwUyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG5ld1RleHR1cmUud3JhcFUgPSBHTFRGVXRpbHMuR2V0V3JhcE1vZGUoc2FtcGxlci53cmFwUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzYW1wbGVyLndyYXBUICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbmV3VGV4dHVyZS53cmFwViA9IEdMVEZVdGlscy5HZXRXcmFwTW9kZShzYW1wbGVyLndyYXBUKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3VGV4dHVyZS5uYW1lID0gaWQ7XHJcblxyXG4gICAgICAgIHRleHR1cmUuYmFieWxvblRleHR1cmUgPSBuZXdUZXh0dXJlO1xyXG4gICAgICAgIG9uU3VjY2VzcyhuZXdUZXh0dXJlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFNoYWRlclN0cmluZ0FzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKHNoYWRlclN0cmluZzogc3RyaW5nIHwgQXJyYXlCdWZmZXIpID0+IHZvaWQsIG9uRXJyb3I/OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2hhZGVyOiBJR0xURlNoYWRlciA9IGdsdGZSdW50aW1lLnNoYWRlcnNbaWRdO1xyXG5cclxuICAgICAgICBpZiAoVG9vbHMuSXNCYXNlNjQoc2hhZGVyLnVyaSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hhZGVyU3RyaW5nID0gYXRvYihzaGFkZXIudXJpLnNwbGl0KFwiLFwiKVsxXSk7XHJcbiAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhzaGFkZXJTdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuTG9hZEZpbGUoZ2x0ZlJ1bnRpbWUucm9vdFVybCArIHNoYWRlci51cmksIG9uU3VjY2VzcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZhbHNlLCAocmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QgJiYgb25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IocmVxdWVzdC5zdGF0dXMgKyBcIiBcIiArIHJlcXVlc3Quc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZE1hdGVyaWFsQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgb25TdWNjZXNzOiAobWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiB2b2lkLCBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWw6IElHTFRGTWF0ZXJpYWwgPSBnbHRmUnVudGltZS5tYXRlcmlhbHNbaWRdO1xyXG4gICAgICAgIGlmICghbWF0ZXJpYWwudGVjaG5pcXVlKSB7XHJcbiAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yKFwiTm8gdGVjaG5pcXVlIGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZWNobmlxdWU6IElHTFRGVGVjaG5pcXVlID0gZ2x0ZlJ1bnRpbWUudGVjaG5pcXVlc1ttYXRlcmlhbC50ZWNobmlxdWVdO1xyXG4gICAgICAgIGlmICghdGVjaG5pcXVlKSB7XHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIWdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0TWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChpZCwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0TWF0ZXJpYWwuX3BhcmVudENvbnRhaW5lciA9IGdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRlZmF1bHRNYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBuZXcgQ29sb3IzKDAuNSwgMC41LCAwLjUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0TWF0ZXJpYWwuc2lkZU9yaWVudGF0aW9uID0gTWF0ZXJpYWwuQ291bnRlckNsb2NrV2lzZVNpZGVPcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgb25TdWNjZXNzKGRlZmF1bHRNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2dyYW06IElHTFRGUHJvZ3JhbSA9IGdsdGZSdW50aW1lLnByb2dyYW1zW3RlY2huaXF1ZS5wcm9ncmFtXTtcclxuICAgICAgICBjb25zdCBzdGF0ZXM6IElHTFRGVGVjaG5pcXVlU3RhdGVzID0gdGVjaG5pcXVlLnN0YXRlcztcclxuXHJcbiAgICAgICAgY29uc3QgdmVydGV4U2hhZGVyOiBzdHJpbmcgPSBFZmZlY3QuU2hhZGVyc1N0b3JlW3Byb2dyYW0udmVydGV4U2hhZGVyICsgXCJWZXJ0ZXhTaGFkZXJcIl07XHJcbiAgICAgICAgY29uc3QgcGl4ZWxTaGFkZXI6IHN0cmluZyA9IEVmZmVjdC5TaGFkZXJzU3RvcmVbcHJvZ3JhbS5mcmFnbWVudFNoYWRlciArIFwiUGl4ZWxTaGFkZXJcIl07XHJcbiAgICAgICAgbGV0IG5ld1ZlcnRleFNoYWRlciA9IFwiXCI7XHJcbiAgICAgICAgbGV0IG5ld1BpeGVsU2hhZGVyID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgdmVydGV4VG9rZW5pemVyID0gbmV3IFRva2VuaXplcih2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgICAgIGNvbnN0IHBpeGVsVG9rZW5pemVyID0gbmV3IFRva2VuaXplcihwaXhlbFNoYWRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHVuVHJlYXRlZFVuaWZvcm1zOiB7IFtrZXk6IHN0cmluZ106IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyIH0gPSB7fTtcclxuICAgICAgICBjb25zdCB1bmlmb3Jtczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBGaWxsIHVuaWZvcm0sIHNhbXBsZXIyRCBhbmQgYXR0cmlidXRlc1xyXG4gICAgICAgIGZvciAoY29uc3QgdW5pZiBpbiB0ZWNobmlxdWUudW5pZm9ybXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdW5pZm9ybSA9IHRlY2huaXF1ZS51bmlmb3Jtc1t1bmlmXTtcclxuICAgICAgICAgICAgY29uc3QgdW5pZm9ybVBhcmFtZXRlcjogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIgPSB0ZWNobmlxdWUucGFyYW1ldGVyc1t1bmlmb3JtXTtcclxuXHJcbiAgICAgICAgICAgIHVuVHJlYXRlZFVuaWZvcm1zW3VuaWZdID0gdW5pZm9ybVBhcmFtZXRlcjtcclxuXHJcbiAgICAgICAgICAgIGlmICh1bmlmb3JtUGFyYW1ldGVyLnNlbWFudGljICYmICF1bmlmb3JtUGFyYW1ldGVyLm5vZGUgJiYgIXVuaWZvcm1QYXJhbWV0ZXIuc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1JbmRleCA9IGdsVEZUcmFuc2Zvcm1zLmluZGV4T2YodW5pZm9ybVBhcmFtZXRlci5zZW1hbnRpYyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXMucHVzaChCYWJ5bG9uVHJhbnNmb3Jtc1t0cmFuc2Zvcm1JbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1blRyZWF0ZWRVbmlmb3Jtc1t1bmlmXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXMucHVzaCh1bmlmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh1bmlmb3JtUGFyYW1ldGVyLnR5cGUgPT09IEVQYXJhbWV0ZXJUeXBlLlNBTVBMRVJfMkQpIHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXJzLnB1c2godW5pZik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlmb3Jtcy5wdXNoKHVuaWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdGVjaG5pcXVlLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGVjaG5pcXVlLmF0dHJpYnV0ZXNbYXR0cl07XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVBhcmFtZXRlcjogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIgPSB0ZWNobmlxdWUucGFyYW1ldGVyc1thdHRyaWJ1dGVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IEdldEF0dHJpYnV0ZShhdHRyaWJ1dGVQYXJhbWV0ZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbmZpZ3VyZSB2ZXJ0ZXggc2hhZGVyXHJcbiAgICAgICAgd2hpbGUgKCF2ZXJ0ZXhUb2tlbml6ZXIuaXNFbmQoKSAmJiB2ZXJ0ZXhUb2tlbml6ZXIuZ2V0TmV4dFRva2VuKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW5UeXBlID0gdmVydGV4VG9rZW5pemVyLmN1cnJlbnRUb2tlbjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlblR5cGUgIT09IEVUb2tlblR5cGUuSURFTlRJRklFUikge1xyXG4gICAgICAgICAgICAgICAgbmV3VmVydGV4U2hhZGVyICs9IHZlcnRleFRva2VuaXplci5jdXJyZW50U3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBmb3VuZEF0dHJpYnV0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIHRlY2huaXF1ZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0ZWNobmlxdWUuYXR0cmlidXRlc1thdHRyXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVBhcmFtZXRlcjogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIgPSB0ZWNobmlxdWUucGFyYW1ldGVyc1thdHRyaWJ1dGVdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXhUb2tlbml6ZXIuY3VycmVudElkZW50aWZpZXIgPT09IGF0dHIgJiYgYXR0cmlidXRlUGFyYW1ldGVyLnNlbWFudGljKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmVydGV4U2hhZGVyICs9IEdldEF0dHJpYnV0ZShhdHRyaWJ1dGVQYXJhbWV0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kQXR0cmlidXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZvdW5kQXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmV3VmVydGV4U2hhZGVyICs9IFBhcnNlU2hhZGVyVW5pZm9ybXModmVydGV4VG9rZW5pemVyLCB0ZWNobmlxdWUsIHVuVHJlYXRlZFVuaWZvcm1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbmZpZ3VyZSBwaXhlbCBzaGFkZXJcclxuICAgICAgICB3aGlsZSAoIXBpeGVsVG9rZW5pemVyLmlzRW5kKCkgJiYgcGl4ZWxUb2tlbml6ZXIuZ2V0TmV4dFRva2VuKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW5UeXBlID0gcGl4ZWxUb2tlbml6ZXIuY3VycmVudFRva2VuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRva2VuVHlwZSAhPT0gRVRva2VuVHlwZS5JREVOVElGSUVSKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQaXhlbFNoYWRlciArPSBwaXhlbFRva2VuaXplci5jdXJyZW50U3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5ld1BpeGVsU2hhZGVyICs9IFBhcnNlU2hhZGVyVW5pZm9ybXMocGl4ZWxUb2tlbml6ZXIsIHRlY2huaXF1ZSwgdW5UcmVhdGVkVW5pZm9ybXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHNoYWRlciBtYXRlcmlhbFxyXG4gICAgICAgIGNvbnN0IHNoYWRlclBhdGggPSB7XHJcbiAgICAgICAgICAgIHZlcnRleDogcHJvZ3JhbS52ZXJ0ZXhTaGFkZXIgKyBpZCxcclxuICAgICAgICAgICAgZnJhZ21lbnQ6IHByb2dyYW0uZnJhZ21lbnRTaGFkZXIgKyBpZCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICB1bmlmb3JtczogdW5pZm9ybXMsXHJcbiAgICAgICAgICAgIHNhbXBsZXJzOiBzYW1wbGVycyxcclxuICAgICAgICAgICAgbmVlZEFscGhhQmxlbmRpbmc6IHN0YXRlcyAmJiBzdGF0ZXMuZW5hYmxlICYmIHN0YXRlcy5lbmFibGUuaW5kZXhPZigzMDQyKSAhPT0gLTEsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgRWZmZWN0LlNoYWRlcnNTdG9yZVtwcm9ncmFtLnZlcnRleFNoYWRlciArIGlkICsgXCJWZXJ0ZXhTaGFkZXJcIl0gPSBuZXdWZXJ0ZXhTaGFkZXI7XHJcbiAgICAgICAgRWZmZWN0LlNoYWRlcnNTdG9yZVtwcm9ncmFtLmZyYWdtZW50U2hhZGVyICsgaWQgKyBcIlBpeGVsU2hhZGVyXCJdID0gbmV3UGl4ZWxTaGFkZXI7XHJcblxyXG4gICAgICAgIGNvbnN0IHNoYWRlck1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKGlkLCBnbHRmUnVudGltZS5zY2VuZSwgc2hhZGVyUGF0aCwgb3B0aW9ucyk7XHJcbiAgICAgICAgc2hhZGVyTWF0ZXJpYWwub25FcnJvciA9IE9uU2hhZGVyQ29tcGlsZUVycm9yKHByb2dyYW0sIHNoYWRlck1hdGVyaWFsLCBvbkVycm9yKTtcclxuICAgICAgICBzaGFkZXJNYXRlcmlhbC5vbkNvbXBpbGVkID0gT25TaGFkZXJDb21waWxlU3VjY2VzcyhnbHRmUnVudGltZSwgc2hhZGVyTWF0ZXJpYWwsIHRlY2huaXF1ZSwgbWF0ZXJpYWwsIHVuVHJlYXRlZFVuaWZvcm1zLCBvblN1Y2Nlc3MpO1xyXG4gICAgICAgIHNoYWRlck1hdGVyaWFsLnNpZGVPcmllbnRhdGlvbiA9IE1hdGVyaWFsLkNvdW50ZXJDbG9ja1dpc2VTaWRlT3JpZW50YXRpb247XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZXMgJiYgc3RhdGVzLmZ1bmN0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBmdW5jdGlvbnMgPSBzdGF0ZXMuZnVuY3Rpb25zO1xyXG4gICAgICAgICAgICBpZiAoZnVuY3Rpb25zLmN1bGxGYWNlICYmIGZ1bmN0aW9ucy5jdWxsRmFjZVswXSAhPT0gRUN1bGxpbmdUeXBlLkJBQ0spIHtcclxuICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBibGVuZEZ1bmMgPSBmdW5jdGlvbnMuYmxlbmRGdW5jU2VwYXJhdGU7XHJcbiAgICAgICAgICAgIGlmIChibGVuZEZ1bmMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMF0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLlNSQ19BTFBIQSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1sxXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FX01JTlVTX1NSQ19BTFBIQSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1syXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzNdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLmFscGhhTW9kZSA9IENvbnN0YW50cy5BTFBIQV9DT01CSU5FO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMF0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1sxXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzJdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5aRVJPICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzNdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLmFscGhhTW9kZSA9IENvbnN0YW50cy5BTFBIQV9PTkVPTkU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1swXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uU1JDX0FMUEhBICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzFdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkUgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMl0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLlpFUk8gJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbM10gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuYWxwaGFNb2RlID0gQ29uc3RhbnRzLkFMUEhBX0FERDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzBdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5aRVJPICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzFdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkVfTUlOVVNfU1JDX0NPTE9SICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzJdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkUgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbM10gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuYWxwaGFNb2RlID0gQ29uc3RhbnRzLkFMUEhBX1NVQlRSQUNUO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMF0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLkRTVF9DT0xPUiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1sxXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uWkVSTyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1syXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzNdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLmFscGhhTW9kZSA9IENvbnN0YW50cy5BTFBIQV9NVUxUSVBMWTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzBdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5TUkNfQUxQSEEgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMV0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORV9NSU5VU19TUkNfQ09MT1IgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMl0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1szXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5hbHBoYU1vZGUgPSBDb25zdGFudHMuQUxQSEFfTUFYSU1JWkVEO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogZ2xURiBWMSBMb2FkZXJcclxuICogQGludGVybmFsXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURkxvYWRlciBpbXBsZW1lbnRzIElHTFRGTG9hZGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgRXh0ZW5zaW9uczogeyBbbmFtZTogc3RyaW5nXTogR0xURkxvYWRlckV4dGVuc2lvbiB9ID0ge307XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBSZWdpc3RlckV4dGVuc2lvbihleHRlbnNpb246IEdMVEZMb2FkZXJFeHRlbnNpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoR0xURkxvYWRlci5FeHRlbnNpb25zW2V4dGVuc2lvbi5uYW1lXSkge1xyXG4gICAgICAgICAgICBUb29scy5FcnJvcignVG9vbCB3aXRoIHRoZSBzYW1lIG5hbWUgXCInICsgZXh0ZW5zaW9uLm5hbWUgKyAnXCIgYWxyZWFkeSBleGlzdHMnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR0xURkxvYWRlci5FeHRlbnNpb25zW2V4dGVuc2lvbi5uYW1lXSA9IGV4dGVuc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9pbXBvcnRNZXNoQXN5bmMoXHJcbiAgICAgICAgbWVzaGVzTmFtZXM6IGFueSxcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZGF0YTogSUdMVEZMb2FkZXJEYXRhLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBhc3NldENvbnRhaW5lcjogTnVsbGFibGU8QXNzZXRDb250YWluZXI+LFxyXG4gICAgICAgIG9uU3VjY2VzczogKG1lc2hlczogQWJzdHJhY3RNZXNoW10sIHNrZWxldG9uczogU2tlbGV0b25bXSkgPT4gdm9pZCxcclxuICAgICAgICBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I/OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgICApOiBib29sZWFuIHtcclxuICAgICAgICBzY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSA9IHRydWU7XHJcblxyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uTG9hZFJ1bnRpbWVBc3luYyhcclxuICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIHJvb3RVcmwsXHJcbiAgICAgICAgICAgIChnbHRmUnVudGltZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuYXNzZXRDb250YWluZXIgPSBhc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLmltcG9ydE9ubHlNZXNoZXMgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtZXNoZXNOYW1lcyA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLmltcG9ydE1lc2hlc05hbWVzID0gW107XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNoZXNOYW1lcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLmltcG9ydE1lc2hlc05hbWVzID0gW21lc2hlc05hbWVzXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzaGVzTmFtZXMgJiYgIShtZXNoZXNOYW1lcyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLmltcG9ydE1lc2hlc05hbWVzID0gW21lc2hlc05hbWVzXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuaW1wb3J0TWVzaGVzTmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKFwiQXJndW1lbnQgbWVzaGVzTmFtZXMgbXVzdCBiZSBvZiB0eXBlIHN0cmluZyBvciBzdHJpbmdbXVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbm9kZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU5vZGVzKGdsdGZSdW50aW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNoZXM6IEFic3RyYWN0TWVzaFtdID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2VsZXRvbnM6IFNrZWxldG9uW10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGaWxsIGFycmF5cyBvZiBtZXNoZXMgYW5kIHNrZWxldG9uc1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuZGUgaW4gZ2x0ZlJ1bnRpbWUubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlOiBJR0xURk5vZGUgPSBnbHRmUnVudGltZS5ub2Rlc1tuZGVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5iYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIEFic3RyYWN0TWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoZXMucHVzaChub2RlLmJhYnlsb25Ob2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBza2wgaW4gZ2x0ZlJ1bnRpbWUuc2tpbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBza2luOiBJR0xURlNraW5zID0gZ2x0ZlJ1bnRpbWUuc2tpbnNbc2tsXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNraW4uYmFieWxvblNrZWxldG9uIGluc3RhbmNlb2YgU2tlbGV0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tlbGV0b25zLnB1c2goc2tpbi5iYWJ5bG9uU2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBMb2FkIGJ1ZmZlcnMsIHNoYWRlcnMsIG1hdGVyaWFscywgZXRjLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEJ1ZmZlcnNBc3luYyhnbHRmUnVudGltZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRTaGFkZXJzQXN5bmMoZ2x0ZlJ1bnRpbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSW1wb3J0TWF0ZXJpYWxzKGdsdGZSdW50aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdExvYWQoZ2x0ZlJ1bnRpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFHTFRGRmlsZUxvYWRlci5JbmNyZW1lbnRhbExvYWRpbmcgJiYgb25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobWVzaGVzLCBza2VsZXRvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoR0xURkZpbGVMb2FkZXIuSW5jcmVtZW50YWxMb2FkaW5nICYmIG9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhtZXNoZXMsIHNrZWxldG9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRXJyb3JcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcG9ydHMgb25lIG9yIG1vcmUgbWVzaGVzIGZyb20gYSBsb2FkZWQgZ2x0ZiBmaWxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gbWVzaGVzTmFtZXMgYSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyBvZiB0aGUgbWVzaCBuYW1lcyB0aGF0IHNob3VsZCBiZSBsb2FkZWQgZnJvbSB0aGUgZmlsZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIHRoZSBzY2VuZSB0aGUgbWVzaGVzIHNob3VsZCBiZSBhZGRlZCB0b1xyXG4gICAgICogQHBhcmFtIGFzc2V0Q29udGFpbmVyIGRlZmluZXMgdGhlIGFzc2V0IGNvbnRhaW5lciB0byB1c2UgKGNhbiBiZSBudWxsKVxyXG4gICAgICogQHBhcmFtIGRhdGEgZ2x0ZiBkYXRhIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gb2YgdGhlIG1lc2hlcyBpbiBhIGxvYWRlZCBmaWxlXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCByb290IHVybCB0byBsb2FkIGZyb21cclxuICAgICAqIEBwYXJhbSBvblByb2dyZXNzIGV2ZW50IHRoYXQgZmlyZXMgd2hlbiBsb2FkaW5nIHByb2dyZXNzIGhhcyBvY2N1cmVkXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgY29udGFpbmcgdGhlIGxvYWRlZCBtZXNoZXMsIHBhcnRpY2xlcywgc2tlbGV0b25zIGFuZCBhbmltYXRpb25zXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBpbXBvcnRNZXNoQXN5bmMoXHJcbiAgICAgICAgbWVzaGVzTmFtZXM6IGFueSxcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgYXNzZXRDb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPixcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWRcclxuICAgICk6IFByb21pc2U8SVNjZW5lTG9hZGVyQXN5bmNSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9pbXBvcnRNZXNoQXN5bmMoXHJcbiAgICAgICAgICAgICAgICBtZXNoZXNOYW1lcyxcclxuICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgIHJvb3RVcmwsXHJcbiAgICAgICAgICAgICAgICBhc3NldENvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIChtZXNoZXMsIHNrZWxldG9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoZXM6IG1lc2hlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVTeXN0ZW1zOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tlbGV0b25zOiBza2VsZXRvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU5vZGVzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cmllczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZU1hbmFnZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRBc3luYyhcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZGF0YTogSUdMVEZMb2FkZXJEYXRhLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHZvaWQsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICBvbkVycm9yPzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPSB0cnVlO1xyXG5cclxuICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLkxvYWRSdW50aW1lQXN5bmMoXHJcbiAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICByb290VXJsLFxyXG4gICAgICAgICAgICAoZ2x0ZlJ1bnRpbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIExvYWQgcnVudGltZSBleHRlbnNpb3NcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uTG9hZFJ1bnRpbWVFeHRlbnNpb25zQXN5bmMoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbm9kZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlTm9kZXMoZ2x0ZlJ1bnRpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBidWZmZXJzLCBzaGFkZXJzLCBtYXRlcmlhbHMsIGV0Yy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEJ1ZmZlcnNBc3luYyhnbHRmUnVudGltZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZFNoYWRlcnNBc3luYyhnbHRmUnVudGltZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltcG9ydE1hdGVyaWFscyhnbHRmUnVudGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9zdExvYWQoZ2x0ZlJ1bnRpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUdMVEZGaWxlTG9hZGVyLkluY3JlbWVudGFsTG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoR0xURkZpbGVMb2FkZXIuSW5jcmVtZW50YWxMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25FcnJvclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnRzIGFsbCBvYmplY3RzIGZyb20gYSBsb2FkZWQgZ2x0ZiBmaWxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIHNjZW5lIHRoZSBvYmplY3RzIHNob3VsZCBiZSBhZGRlZCB0b1xyXG4gICAgICogQHBhcmFtIGRhdGEgZ2x0ZiBkYXRhIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gb2YgdGhlIG1lc2hlcyBpbiBhIGxvYWRlZCBmaWxlXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCByb290IHVybCB0byBsb2FkIGZyb21cclxuICAgICAqIEBwYXJhbSBvblByb2dyZXNzIGV2ZW50IHRoYXQgZmlyZXMgd2hlbiBsb2FkaW5nIHByb2dyZXNzIGhhcyBvY2N1cmVkXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2Ugd2hpY2ggY29tcGxldGVzIHdoZW4gb2JqZWN0cyBoYXZlIGJlZW4gbG9hZGVkIHRvIHRoZSBzY2VuZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgbG9hZEFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkQXN5bmMoXHJcbiAgICAgICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICByb290VXJsLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRTaGFkZXJzQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgb25sb2FkOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGhhc1NoYWRlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc1NoYWRlciA9IChzaGE6IHN0cmluZywgc2hhZGVyOiBJR0xURlNoYWRlcikgPT4ge1xyXG4gICAgICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLkxvYWRTaGFkZXJTdHJpbmdBc3luYyhcclxuICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLFxyXG4gICAgICAgICAgICAgICAgc2hhLFxyXG4gICAgICAgICAgICAgICAgKHNoYWRlclN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFkZXJTdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBnbHRmUnVudGltZS5sb2FkZWRTaGFkZXJDb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZGVyU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVmZmVjdC5TaGFkZXJzU3RvcmVbc2hhICsgKHNoYWRlci50eXBlID09PSBFU2hhZGVyVHlwZS5WRVJURVggPyBcIlZlcnRleFNoYWRlclwiIDogXCJQaXhlbFNoYWRlclwiKV0gPSBzaGFkZXJTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2x0ZlJ1bnRpbWUubG9hZGVkU2hhZGVyQ291bnQgPT09IGdsdGZSdW50aW1lLnNoYWRlcnNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKFwiRXJyb3Igd2hlbiBsb2FkaW5nIHNoYWRlciBwcm9ncmFtIG5hbWVkIFwiICsgc2hhICsgXCIgbG9jYXRlZCBhdCBcIiArIHNoYWRlci51cmkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgc2hhIGluIGdsdGZSdW50aW1lLnNoYWRlcnMpIHtcclxuICAgICAgICAgICAgaGFzU2hhZGVycyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaGFkZXI6IElHTFRGU2hhZGVyID0gZ2x0ZlJ1bnRpbWUuc2hhZGVyc1tzaGFdO1xyXG4gICAgICAgICAgICBpZiAoc2hhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzU2hhZGVyLmJpbmQodGhpcywgc2hhLCBzaGFkZXIpKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihcIk5vIHNoYWRlciBuYW1lZDogXCIgKyBzaGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhhc1NoYWRlcnMpIHtcclxuICAgICAgICAgICAgb25sb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfbG9hZEJ1ZmZlcnNBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBvbkxvYWQ6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaGFzQnVmZmVycyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9jZXNzQnVmZmVyID0gKGJ1Zjogc3RyaW5nLCBidWZmZXI6IElHTFRGQnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uTG9hZEJ1ZmZlckFzeW5jKFxyXG4gICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUsXHJcbiAgICAgICAgICAgICAgICBidWYsXHJcbiAgICAgICAgICAgICAgICAoYnVmZmVyVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLmxvYWRlZEJ1ZmZlckNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXJWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXJWaWV3LmJ5dGVMZW5ndGggIT0gZ2x0ZlJ1bnRpbWUuYnVmZmVyc1tidWZdLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKFwiQnVmZmVyIG5hbWVkIFwiICsgYnVmICsgXCIgaXMgbGVuZ3RoIFwiICsgYnVmZmVyVmlldy5ieXRlTGVuZ3RoICsgXCIuIEV4cGVjdGVkOiBcIiArIGJ1ZmZlci5ieXRlTGVuZ3RoKTsgLy8gSW1wcm92ZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLmxvYWRlZEJ1ZmZlclZpZXdzW2J1Zl0gPSBidWZmZXJWaWV3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdsdGZSdW50aW1lLmxvYWRlZEJ1ZmZlckNvdW50ID09PSBnbHRmUnVudGltZS5idWZmZXJzQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5FcnJvcihcIkVycm9yIHdoZW4gbG9hZGluZyBidWZmZXIgbmFtZWQgXCIgKyBidWYgKyBcIiBsb2NhdGVkIGF0IFwiICsgYnVmZmVyLnVyaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBidWYgaW4gZ2x0ZlJ1bnRpbWUuYnVmZmVycykge1xyXG4gICAgICAgICAgICBoYXNCdWZmZXJzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlcjogSUdMVEZCdWZmZXIgPSBnbHRmUnVudGltZS5idWZmZXJzW2J1Zl07XHJcbiAgICAgICAgICAgIGlmIChidWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NCdWZmZXIuYmluZCh0aGlzLCBidWYsIGJ1ZmZlcikoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKFwiTm8gYnVmZmVyIG5hbWVkOiBcIiArIGJ1Zik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaGFzQnVmZmVycykge1xyXG4gICAgICAgICAgICBvbkxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlTm9kZXMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjdXJyZW50U2NlbmUgPSA8SUdMVEZTY2VuZT5nbHRmUnVudGltZS5jdXJyZW50U2NlbmU7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50U2NlbmUpIHtcclxuICAgICAgICAgICAgLy8gT25seSBvbmUgc2NlbmUgZXZlbiBpZiBtdWx0aXBsZSBzY2VuZXMgYXJlIGRlZmluZWRcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2NlbmUubm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIFRyYXZlcnNlTm9kZXMoZ2x0ZlJ1bnRpbWUsIGN1cnJlbnRTY2VuZS5ub2Rlc1tpXSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBMb2FkIGFsbCBzY2VuZXNcclxuICAgICAgICAgICAgZm9yIChjb25zdCB0aGluZyBpbiBnbHRmUnVudGltZS5zY2VuZXMpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTY2VuZSA9IGdsdGZSdW50aW1lLnNjZW5lc1t0aGluZ107XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2NlbmUubm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBUcmF2ZXJzZU5vZGVzKGdsdGZSdW50aW1lLCBjdXJyZW50U2NlbmUubm9kZXNbaV0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGFuIG92ZXJyaWRlIGZvciBsb2FkaW5nIHRoZSBydW50aW1lXHJcbiAgICAgKiBSZXR1cm4gdHJ1ZSB0byBzdG9wIGZ1cnRoZXIgZXh0ZW5zaW9ucyBmcm9tIGxvYWRpbmcgdGhlIHJ1bnRpbWVcclxuICAgICAqIEBwYXJhbSBzY2VuZVxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqIEBwYXJhbSByb290VXJsXHJcbiAgICAgKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAgICAgKiBAcGFyYW0gb25FcnJvclxyXG4gICAgICogQHJldHVybnMgdHJ1ZSB0byBzdG9wIGZ1cnRoZXIgZXh0ZW5zaW9ucyBmcm9tIGxvYWRpbmcgdGhlIHJ1bnRpbWVcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZFJ1bnRpbWVBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IElHTFRGTG9hZGVyRGF0YSwgcm9vdFVybDogc3RyaW5nLCBvblN1Y2Nlc3M/OiAoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSkgPT4gdm9pZCwgb25FcnJvcj86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGFuIG9udmVycmlkZSBmb3IgY3JlYXRpbmcgZ2x0ZiBydW50aW1lXHJcbiAgICAgKiBSZXR1cm4gdHJ1ZSB0byBzdG9wIGZ1cnRoZXIgZXh0ZW5zaW9ucyBmcm9tIGNyZWF0aW5nIHRoZSBydW50aW1lXHJcbiAgICAgKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICAgICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgICAqIEBwYXJhbSBvbkVycm9yXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gY3JlYXRpbmcgdGhlIHJ1bnRpbWVcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZFJ1bnRpbWVFeHRlbnNpb25zQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgb25TdWNjZXNzOiAoKSA9PiB2b2lkLCBvbkVycm9yPzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYW4gb3ZlcnJpZGUgZm9yIGxvYWRpbmcgYnVmZmVyc1xyXG4gICAgICogUmV0dXJuIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoaXMgYnVmZmVyXHJcbiAgICAgKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAgICogQHBhcmFtIG9uRXJyb3JcclxuICAgICAqIEBwYXJhbSBvblByb2dyZXNzXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gbG9hZGluZyB0aGlzIGJ1ZmZlclxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWRCdWZmZXJBc3luYyhcclxuICAgICAgICBnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLFxyXG4gICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgb25TdWNjZXNzOiAoYnVmZmVyOiBBcnJheUJ1ZmZlclZpZXcpID0+IHZvaWQsXHJcbiAgICAgICAgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICBvblByb2dyZXNzPzogKCkgPT4gdm9pZFxyXG4gICAgKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhbiBvdmVycmlkZSBmb3IgbG9hZGluZyB0ZXh0dXJlIGJ1ZmZlcnNcclxuICAgICAqIFJldHVybiB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gbG9hZGluZyB0aGlzIHRleHR1cmUgZGF0YVxyXG4gICAgICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgICAqIEBwYXJhbSBvbkVycm9yXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gbG9hZGluZyB0aGlzIHRleHR1cmUgZGF0YVxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkVGV4dHVyZUJ1ZmZlckFzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKGJ1ZmZlcjogQXJyYXlCdWZmZXJWaWV3KSA9PiB2b2lkLCBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhbiBvdmVycmlkZSBmb3IgY3JlYXRpbmcgdGV4dHVyZXNcclxuICAgICAqIFJldHVybiB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gbG9hZGluZyB0aGlzIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyXHJcbiAgICAgKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAgICAgKiBAcGFyYW0gb25FcnJvclxyXG4gICAgICogQHJldHVybnMgdHJ1ZSB0byBzdG9wIGZ1cnRoZXIgZXh0ZW5zaW9ucyBmcm9tIGxvYWRpbmcgdGhpcyB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGNyZWF0ZVRleHR1cmVBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBidWZmZXI6IEFycmF5QnVmZmVyVmlldywgb25TdWNjZXNzOiAodGV4dHVyZTogVGV4dHVyZSkgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYW4gb3ZlcnJpZGUgZm9yIGxvYWRpbmcgc2hhZGVyIHN0cmluZ3NcclxuICAgICAqIFJldHVybiB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gbG9hZGluZyB0aGlzIHNoYWRlciBkYXRhXHJcbiAgICAgKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAgICogQHBhcmFtIG9uRXJyb3JcclxuICAgICAqIEByZXR1cm5zIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoaXMgc2hhZGVyIGRhdGFcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZFNoYWRlclN0cmluZ0FzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKHNoYWRlclN0cmluZzogc3RyaW5nKSA9PiB2b2lkLCBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhbiBvdmVycmlkZSBmb3IgbG9hZGluZyBtYXRlcmlhbHNcclxuICAgICAqIFJldHVybiB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gbG9hZGluZyB0aGlzIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAgICogQHBhcmFtIG9uRXJyb3JcclxuICAgICAqIEByZXR1cm5zIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoaXMgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgb25TdWNjZXNzOiAobWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiB2b2lkLCBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLVxyXG4gICAgLy8gVXRpbGl0aWVzXHJcbiAgICAvLyAtLS0tLS0tLS1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFJ1bnRpbWVBc3luYyhcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZGF0YTogSUdMVEZMb2FkZXJEYXRhLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M/OiAoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSkgPT4gdm9pZCxcclxuICAgICAgICBvbkVycm9yPzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5fQXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICAobG9hZGVyRXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZGVyRXh0ZW5zaW9uLmxvYWRSdW50aW1lQXN5bmMoc2NlbmUsIGRhdGEsIHJvb3RVcmwsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKEdMVEZMb2FkZXJCYXNlLkNyZWF0ZVJ1bnRpbWUoZGF0YS5qc29uLCBzY2VuZSwgcm9vdFVybCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkUnVudGltZUV4dGVuc2lvbnNBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBvblN1Y2Nlc3M6ICgpID0+IHZvaWQsIG9uRXJyb3I/OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5fQXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICAobG9hZGVyRXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZGVyRXh0ZW5zaW9uLmxvYWRSdW50aW1lRXh0ZW5zaW9uc0FzeW5jKGdsdGZSdW50aW1lLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZEJ1ZmZlckFzeW5jKFxyXG4gICAgICAgIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsXHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M6IChidWZmZXJWaWV3OiBBcnJheUJ1ZmZlclZpZXcpID0+IHZvaWQsXHJcbiAgICAgICAgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICBvblByb2dyZXNzPzogKCkgPT4gdm9pZFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5fQXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICAobG9hZGVyRXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZGVyRXh0ZW5zaW9uLmxvYWRCdWZmZXJBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJCYXNlLkxvYWRCdWZmZXJBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkVGV4dHVyZUFzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKHRleHR1cmU6IFRleHR1cmUpID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLl9Mb2FkVGV4dHVyZUJ1ZmZlckFzeW5jKFxyXG4gICAgICAgICAgICBnbHRmUnVudGltZSxcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIChidWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChidWZmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLl9DcmVhdGVUZXh0dXJlQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBidWZmZXIsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRXJyb3JcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkU2hhZGVyU3RyaW5nQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgb25TdWNjZXNzOiAoc2hhZGVyRGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXIpID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLl9BcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIChsb2FkZXJFeHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkZXJFeHRlbnNpb24ubG9hZFNoYWRlclN0cmluZ0FzeW5jKGdsdGZSdW50aW1lLCBpZCwgb25TdWNjZXNzLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgR0xURkxvYWRlckJhc2UuTG9hZFNoYWRlclN0cmluZ0FzeW5jKGdsdGZSdW50aW1lLCBpZCwgb25TdWNjZXNzLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRNYXRlcmlhbEFzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uX0FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgKGxvYWRlckV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRlckV4dGVuc2lvbi5sb2FkTWF0ZXJpYWxBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJCYXNlLkxvYWRNYXRlcmlhbEFzeW5jKGdsdGZSdW50aW1lLCBpZCwgb25TdWNjZXNzLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfTG9hZFRleHR1cmVCdWZmZXJBc3luYyhcclxuICAgICAgICBnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLFxyXG4gICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgb25TdWNjZXNzOiAoYnVmZmVyOiBOdWxsYWJsZTxBcnJheUJ1ZmZlclZpZXc+KSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uX0FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgKGxvYWRlckV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRlckV4dGVuc2lvbi5sb2FkVGV4dHVyZUJ1ZmZlckFzeW5jKGdsdGZSdW50aW1lLCBpZCwgb25TdWNjZXNzLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgR0xURkxvYWRlckJhc2UuTG9hZFRleHR1cmVCdWZmZXJBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NyZWF0ZVRleHR1cmVBc3luYyhcclxuICAgICAgICBnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLFxyXG4gICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgYnVmZmVyOiBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgb25TdWNjZXNzOiAodGV4dHVyZTogVGV4dHVyZSkgPT4gdm9pZCxcclxuICAgICAgICBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLl9BcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIChsb2FkZXJFeHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkZXJFeHRlbnNpb24uY3JlYXRlVGV4dHVyZUFzeW5jKGdsdGZSdW50aW1lLCBpZCwgYnVmZmVyLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBHTFRGTG9hZGVyQmFzZS5DcmVhdGVUZXh0dXJlQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBidWZmZXIsIG9uU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9BcHBseUV4dGVuc2lvbnMoZnVuYzogKGxvYWRlckV4dGVuc2lvbjogR0xURkxvYWRlckV4dGVuc2lvbikgPT4gYm9vbGVhbiwgZGVmYXVsdEZ1bmM6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGV4dGVuc2lvbk5hbWUgaW4gR0xURkxvYWRlci5FeHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlckV4dGVuc2lvbiA9IEdMVEZMb2FkZXIuRXh0ZW5zaW9uc1tleHRlbnNpb25OYW1lXTtcclxuICAgICAgICAgICAgaWYgKGZ1bmMobG9hZGVyRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0RnVuYygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGRmlsZUxvYWRlci5fQ3JlYXRlR0xURjFMb2FkZXIgPSAoKSA9PiBuZXcgR0xURkxvYWRlcigpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHR5cGUgeyBBc3NldENvbnRhaW5lciB9IGZyb20gXCJjb3JlL2Fzc2V0Q29udGFpbmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgQm9uZSB9IGZyb20gXCJjb3JlL0JvbmVzL2JvbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBTa2VsZXRvbiB9IGZyb20gXCJjb3JlL0JvbmVzL3NrZWxldG9uXCI7XHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEVudW1zXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGVudW0gRUNvbXBvbmVudFR5cGUge1xyXG4gICAgQllURSA9IDUxMjAsXHJcbiAgICBVTlNJR05FRF9CWVRFID0gNTEyMSxcclxuICAgIFNIT1JUID0gNTEyMixcclxuICAgIFVOU0lHTkVEX1NIT1JUID0gNTEyMyxcclxuICAgIEZMT0FUID0gNTEyNixcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgZW51bSBFU2hhZGVyVHlwZSB7XHJcbiAgICBGUkFHTUVOVCA9IDM1NjMyLFxyXG4gICAgVkVSVEVYID0gMzU2MzMsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGVudW0gRVBhcmFtZXRlclR5cGUge1xyXG4gICAgQllURSA9IDUxMjAsXHJcbiAgICBVTlNJR05FRF9CWVRFID0gNTEyMSxcclxuICAgIFNIT1JUID0gNTEyMixcclxuICAgIFVOU0lHTkVEX1NIT1JUID0gNTEyMyxcclxuICAgIElOVCA9IDUxMjQsXHJcbiAgICBVTlNJR05FRF9JTlQgPSA1MTI1LFxyXG4gICAgRkxPQVQgPSA1MTI2LFxyXG4gICAgRkxPQVRfVkVDMiA9IDM1NjY0LFxyXG4gICAgRkxPQVRfVkVDMyA9IDM1NjY1LFxyXG4gICAgRkxPQVRfVkVDNCA9IDM1NjY2LFxyXG4gICAgSU5UX1ZFQzIgPSAzNTY2NyxcclxuICAgIElOVF9WRUMzID0gMzU2NjgsXHJcbiAgICBJTlRfVkVDNCA9IDM1NjY5LFxyXG4gICAgQk9PTCA9IDM1NjcwLFxyXG4gICAgQk9PTF9WRUMyID0gMzU2NzEsXHJcbiAgICBCT09MX1ZFQzMgPSAzNTY3MixcclxuICAgIEJPT0xfVkVDNCA9IDM1NjczLFxyXG4gICAgRkxPQVRfTUFUMiA9IDM1Njc0LFxyXG4gICAgRkxPQVRfTUFUMyA9IDM1Njc1LFxyXG4gICAgRkxPQVRfTUFUNCA9IDM1Njc2LFxyXG4gICAgU0FNUExFUl8yRCA9IDM1Njc4LFxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBlbnVtIEVUZXh0dXJlV3JhcE1vZGUge1xyXG4gICAgQ0xBTVBfVE9fRURHRSA9IDMzMDcxLFxyXG4gICAgTUlSUk9SRURfUkVQRUFUID0gMzM2NDgsXHJcbiAgICBSRVBFQVQgPSAxMDQ5NyxcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgZW51bSBFVGV4dHVyZUZpbHRlclR5cGUge1xyXG4gICAgTkVBUkVTVCA9IDk3MjgsXHJcbiAgICBMSU5FQVIgPSA5NzI4LFxyXG4gICAgTkVBUkVTVF9NSVBNQVBfTkVBUkVTVCA9IDk5ODQsXHJcbiAgICBMSU5FQVJfTUlQTUFQX05FQVJFU1QgPSA5OTg1LFxyXG4gICAgTkVBUkVTVF9NSVBNQVBfTElORUFSID0gOTk4NixcclxuICAgIExJTkVBUl9NSVBNQVBfTElORUFSID0gOTk4NyxcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgZW51bSBFVGV4dHVyZUZvcm1hdCB7XHJcbiAgICBBTFBIQSA9IDY0MDYsXHJcbiAgICBSR0IgPSA2NDA3LFxyXG4gICAgUkdCQSA9IDY0MDgsXHJcbiAgICBMVU1JTkFOQ0UgPSA2NDA5LFxyXG4gICAgTFVNSU5BTkNFX0FMUEhBID0gNjQxMCxcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgZW51bSBFQ3VsbGluZ1R5cGUge1xyXG4gICAgRlJPTlQgPSAxMDI4LFxyXG4gICAgQkFDSyA9IDEwMjksXHJcbiAgICBGUk9OVF9BTkRfQkFDSyA9IDEwMzIsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGVudW0gRUJsZW5kaW5nRnVuY3Rpb24ge1xyXG4gICAgWkVSTyA9IDAsXHJcbiAgICBPTkUgPSAxLFxyXG4gICAgU1JDX0NPTE9SID0gNzY4LFxyXG4gICAgT05FX01JTlVTX1NSQ19DT0xPUiA9IDc2OSxcclxuICAgIERTVF9DT0xPUiA9IDc3NCxcclxuICAgIE9ORV9NSU5VU19EU1RfQ09MT1IgPSA3NzUsXHJcbiAgICBTUkNfQUxQSEEgPSA3NzAsXHJcbiAgICBPTkVfTUlOVVNfU1JDX0FMUEhBID0gNzcxLFxyXG4gICAgRFNUX0FMUEhBID0gNzcyLFxyXG4gICAgT05FX01JTlVTX0RTVF9BTFBIQSA9IDc3MyxcclxuICAgIENPTlNUQU5UX0NPTE9SID0gMzI3NjksXHJcbiAgICBPTkVfTUlOVVNfQ09OU1RBTlRfQ09MT1IgPSAzMjc3MCxcclxuICAgIENPTlNUQU5UX0FMUEhBID0gMzI3NzEsXHJcbiAgICBPTkVfTUlOVVNfQ09OU1RBTlRfQUxQSEEgPSAzMjc3MixcclxuICAgIFNSQ19BTFBIQV9TQVRVUkFURSA9IDc3NixcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGUHJvcGVydHkge1xyXG4gICAgZXh0ZW5zaW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgICBleHRyYXM/OiBvYmplY3Q7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkNoaWxkUm9vdFByb3BlcnR5IGV4dGVuZHMgSUdMVEZQcm9wZXJ0eSB7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZBY2Nlc3NvciBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgYnVmZmVyVmlldzogc3RyaW5nO1xyXG4gICAgYnl0ZU9mZnNldDogbnVtYmVyO1xyXG4gICAgYnl0ZVN0cmlkZTogbnVtYmVyO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGNvbXBvbmVudFR5cGU6IEVDb21wb25lbnRUeXBlO1xyXG5cclxuICAgIG1heD86IG51bWJlcltdO1xyXG4gICAgbWluPzogbnVtYmVyW107XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZCdWZmZXJWaWV3IGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICBidWZmZXI6IHN0cmluZztcclxuICAgIGJ5dGVPZmZzZXQ6IG51bWJlcjtcclxuICAgIGJ5dGVMZW5ndGg6IG51bWJlcjtcclxuICAgIGJ5dGVTdHJpZGU6IG51bWJlcjtcclxuXHJcbiAgICB0YXJnZXQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkJ1ZmZlciBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgdXJpOiBzdHJpbmc7XHJcblxyXG4gICAgYnl0ZUxlbmd0aD86IG51bWJlcjtcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlNoYWRlciBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgdXJpOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBFU2hhZGVyVHlwZTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGUHJvZ3JhbSBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgYXR0cmlidXRlczogc3RyaW5nW107XHJcbiAgICBmcmFnbWVudFNoYWRlcjogc3RyaW5nO1xyXG4gICAgdmVydGV4U2hhZGVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlRlY2huaXF1ZVBhcmFtZXRlciB7XHJcbiAgICB0eXBlOiBudW1iZXI7XHJcblxyXG4gICAgY291bnQ/OiBudW1iZXI7XHJcbiAgICBzZW1hbnRpYz86IHN0cmluZztcclxuICAgIG5vZGU/OiBzdHJpbmc7XHJcbiAgICB2YWx1ZT86IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfCBBcnJheTxhbnk+O1xyXG4gICAgc291cmNlPzogc3RyaW5nO1xyXG5cclxuICAgIGJhYnlsb25WYWx1ZT86IGFueTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGVGVjaG5pcXVlQ29tbW9uUHJvZmlsZSB7XHJcbiAgICBsaWdodGluZ01vZGVsOiBzdHJpbmc7XHJcbiAgICB0ZXhjb29yZEJpbmRpbmdzOiBvYmplY3Q7XHJcblxyXG4gICAgcGFyYW1ldGVycz86IEFycmF5PGFueT47XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlRlY2huaXF1ZVN0YXRlc0Z1bmN0aW9ucyB7XHJcbiAgICBibGVuZENvbG9yPzogbnVtYmVyW107XHJcbiAgICBibGVuZEVxdWF0aW9uU2VwYXJhdGU/OiBudW1iZXJbXTtcclxuICAgIGJsZW5kRnVuY1NlcGFyYXRlPzogbnVtYmVyW107XHJcbiAgICBjb2xvck1hc2s6IGJvb2xlYW5bXTtcclxuICAgIGN1bGxGYWNlOiBudW1iZXJbXTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGVGVjaG5pcXVlU3RhdGVzIHtcclxuICAgIGVuYWJsZTogbnVtYmVyW107XHJcbiAgICBmdW5jdGlvbnM6IElHTFRGVGVjaG5pcXVlU3RhdGVzRnVuY3Rpb25zO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZUZWNobmlxdWUgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHBhcmFtZXRlcnM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIgfTtcclxuICAgIHByb2dyYW06IHN0cmluZztcclxuXHJcbiAgICBhdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gICAgdW5pZm9ybXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICBzdGF0ZXM6IElHTFRGVGVjaG5pcXVlU3RhdGVzO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZNYXRlcmlhbCBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgdGVjaG5pcXVlPzogc3RyaW5nO1xyXG4gICAgdmFsdWVzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTWVzaFByaW1pdGl2ZSBleHRlbmRzIElHTFRGUHJvcGVydHkge1xyXG4gICAgYXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIGluZGljZXM6IHN0cmluZztcclxuICAgIG1hdGVyaWFsOiBzdHJpbmc7XHJcblxyXG4gICAgbW9kZT86IG51bWJlcjtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTWVzaCBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgcHJpbWl0aXZlczogSUdMVEZNZXNoUHJpbWl0aXZlW107XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkltYWdlIGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICB1cmk6IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGU2FtcGxlciBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgbWFnRmlsdGVyPzogbnVtYmVyO1xyXG4gICAgbWluRmlsdGVyPzogbnVtYmVyO1xyXG4gICAgd3JhcFM/OiBudW1iZXI7XHJcbiAgICB3cmFwVD86IG51bWJlcjtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGVGV4dHVyZSBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgc2FtcGxlcjogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblxyXG4gICAgZm9ybWF0PzogRVRleHR1cmVGb3JtYXQ7XHJcbiAgICBpbnRlcm5hbEZvcm1hdD86IEVUZXh0dXJlRm9ybWF0O1xyXG4gICAgdGFyZ2V0PzogbnVtYmVyO1xyXG4gICAgdHlwZT86IG51bWJlcjtcclxuXHJcbiAgICAvLyBCYWJ5bG9uLmpzIHZhbHVlcyAob3B0aW1pemUpXHJcbiAgICBiYWJ5bG9uVGV4dHVyZT86IFRleHR1cmU7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkFtYmllbkxpZ2h0IHtcclxuICAgIGNvbG9yPzogbnVtYmVyW107XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkRpcmVjdGlvbmFsTGlnaHQge1xyXG4gICAgY29sb3I/OiBudW1iZXJbXTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGUG9pbnRMaWdodCB7XHJcbiAgICBjb2xvcj86IG51bWJlcltdO1xyXG4gICAgY29uc3RhbnRBdHRlbnVhdGlvbj86IG51bWJlcjtcclxuICAgIGxpbmVhckF0dGVudWF0aW9uPzogbnVtYmVyO1xyXG4gICAgcXVhZHJhdGljQXR0ZW51YXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlNwb3RMaWdodCB7XHJcbiAgICBjb2xvcj86IG51bWJlcltdO1xyXG4gICAgY29uc3RhbnRBdHRlbnVhdGlvbj86IG51bWJlcjtcclxuICAgIGZhbGxPZkFuZ2xlPzogbnVtYmVyO1xyXG4gICAgZmFsbE9mZkV4cG9uZW50PzogbnVtYmVyO1xyXG4gICAgbGluZWFyQXR0ZW51YXRpb24/OiBudW1iZXI7XHJcbiAgICBxdWFkcmF0aWNBdHRlbnVhdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTGlnaHQgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQ2FtZXJhT3J0aG9ncmFwaGljIHtcclxuICAgIHhtYWc6IG51bWJlcjtcclxuICAgIHltYWc6IG51bWJlcjtcclxuICAgIHpmYXI6IG51bWJlcjtcclxuICAgIHpuZWFyOiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkNhbWVyYVBlcnNwZWN0aXZlIHtcclxuICAgIGFzcGVjdFJhdGlvOiBudW1iZXI7XHJcbiAgICB5Zm92OiBudW1iZXI7XHJcbiAgICB6ZmFyOiBudW1iZXI7XHJcbiAgICB6bmVhcjogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZDYW1lcmEgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQW5pbWF0aW9uQ2hhbm5lbFRhcmdldCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcGF0aDogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZBbmltYXRpb25DaGFubmVsIHtcclxuICAgIHNhbXBsZXI6IHN0cmluZztcclxuICAgIHRhcmdldDogSUdMVEZBbmltYXRpb25DaGFubmVsVGFyZ2V0O1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZBbmltYXRpb25TYW1wbGVyIHtcclxuICAgIGlucHV0OiBzdHJpbmc7XHJcbiAgICBvdXRwdXQ6IHN0cmluZztcclxuXHJcbiAgICBpbnRlcnBvbGF0aW9uPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZBbmltYXRpb24gZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIGNoYW5uZWxzPzogSUdMVEZBbmltYXRpb25DaGFubmVsW107XHJcbiAgICBwYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIHNhbXBsZXJzPzogeyBba2V5OiBzdHJpbmddOiBJR0xURkFuaW1hdGlvblNhbXBsZXIgfTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTm9kZUluc3RhbmNlU2tpbiB7XHJcbiAgICBza2VsZXRvbnM6IHN0cmluZ1tdO1xyXG4gICAgc2tpbjogc3RyaW5nO1xyXG4gICAgbWVzaGVzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGU2tpbnMgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIGJpbmRTaGFwZU1hdHJpeDogbnVtYmVyW107XHJcbiAgICBpbnZlcnNlQmluZE1hdHJpY2VzOiBzdHJpbmc7XHJcbiAgICBqb2ludE5hbWVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBiYWJ5bG9uU2tlbGV0b24/OiBTa2VsZXRvbjtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTm9kZSBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgY2FtZXJhPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW46IHN0cmluZ1tdO1xyXG4gICAgc2tpbj86IHN0cmluZztcclxuICAgIGpvaW50TmFtZT86IHN0cmluZztcclxuICAgIGxpZ2h0Pzogc3RyaW5nO1xyXG4gICAgbWF0cml4OiBudW1iZXJbXTtcclxuICAgIG1lc2g/OiBzdHJpbmc7XHJcbiAgICBtZXNoZXM/OiBzdHJpbmdbXTtcclxuICAgIHJvdGF0aW9uPzogbnVtYmVyW107XHJcbiAgICBzY2FsZT86IG51bWJlcltdO1xyXG4gICAgdHJhbnNsYXRpb24/OiBudW1iZXJbXTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uLmpzIHZhbHVlcyAob3B0aW1pemUpXHJcbiAgICBiYWJ5bG9uTm9kZT86IE5vZGU7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlNjZW5lIGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICBub2Rlczogc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlJ1bnRpbWUge1xyXG4gICAgZXh0ZW5zaW9uczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICAgIGFjY2Vzc29yczogeyBba2V5OiBzdHJpbmddOiBJR0xURkFjY2Vzc29yIH07XHJcbiAgICBidWZmZXJzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGQnVmZmVyIH07XHJcbiAgICBidWZmZXJWaWV3czogeyBba2V5OiBzdHJpbmddOiBJR0xURkJ1ZmZlclZpZXcgfTtcclxuICAgIG1lc2hlczogeyBba2V5OiBzdHJpbmddOiBJR0xURk1lc2ggfTtcclxuICAgIGxpZ2h0czogeyBba2V5OiBzdHJpbmddOiBJR0xURkxpZ2h0IH07XHJcbiAgICBjYW1lcmFzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGQ2FtZXJhIH07XHJcbiAgICBub2RlczogeyBba2V5OiBzdHJpbmddOiBJR0xURk5vZGUgfTtcclxuICAgIGltYWdlczogeyBba2V5OiBzdHJpbmddOiBJR0xURkltYWdlIH07XHJcbiAgICB0ZXh0dXJlczogeyBba2V5OiBzdHJpbmddOiBJR0xURlRleHR1cmUgfTtcclxuICAgIHNoYWRlcnM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZTaGFkZXIgfTtcclxuICAgIHByb2dyYW1zOiB7IFtrZXk6IHN0cmluZ106IElHTFRGUHJvZ3JhbSB9O1xyXG4gICAgc2FtcGxlcnM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZTYW1wbGVyIH07XHJcbiAgICB0ZWNobmlxdWVzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGVGVjaG5pcXVlIH07XHJcbiAgICBtYXRlcmlhbHM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZNYXRlcmlhbCB9O1xyXG4gICAgYW5pbWF0aW9uczogeyBba2V5OiBzdHJpbmddOiBJR0xURkFuaW1hdGlvbiB9O1xyXG4gICAgc2tpbnM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZTa2lucyB9O1xyXG5cclxuICAgIGN1cnJlbnRTY2VuZT86IG9iamVjdDtcclxuICAgIHNjZW5lczogeyBba2V5OiBzdHJpbmddOiBJR0xURlNjZW5lIH07IC8vIHYxLjFcclxuXHJcbiAgICBleHRlbnNpb25zVXNlZDogc3RyaW5nW107XHJcbiAgICBleHRlbnNpb25zUmVxdWlyZWQ/OiBzdHJpbmdbXTsgLy8gdjEuMVxyXG5cclxuICAgIGJ1ZmZlcnNDb3VudDogbnVtYmVyO1xyXG4gICAgc2hhZGVyc2NvdW50OiBudW1iZXI7XHJcblxyXG4gICAgc2NlbmU6IFNjZW5lO1xyXG4gICAgcm9vdFVybDogc3RyaW5nO1xyXG5cclxuICAgIGxvYWRlZEJ1ZmZlckNvdW50OiBudW1iZXI7XHJcbiAgICBsb2FkZWRCdWZmZXJWaWV3czogeyBbbmFtZTogc3RyaW5nXTogQXJyYXlCdWZmZXJWaWV3IH07XHJcblxyXG4gICAgbG9hZGVkU2hhZGVyQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICBpbXBvcnRPbmx5TWVzaGVzOiBib29sZWFuO1xyXG4gICAgaW1wb3J0TWVzaGVzTmFtZXM/OiBzdHJpbmdbXTtcclxuXHJcbiAgICBkdW1teU5vZGVzOiBOb2RlW107XHJcblxyXG4gICAgYXNzZXRDb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPjtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOb2RlVG9Sb290IHtcclxuICAgIGJvbmU6IEJvbmU7XHJcbiAgICBub2RlOiBJR0xURk5vZGU7XHJcbiAgICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUpvaW50Tm9kZSB7XHJcbiAgICBub2RlOiBJR0xURk5vZGU7XHJcbiAgICBpZDogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIsIElHTFRGQWNjZXNzb3IsIElHTFRGUnVudGltZSwgSUdMVEZCdWZmZXJWaWV3IH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgRVBhcmFtZXRlclR5cGUsIEVUZXh0dXJlV3JhcE1vZGUsIEVUZXh0dXJlRmlsdGVyVHlwZSwgRUNvbXBvbmVudFR5cGUgfSBmcm9tIFwiLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIsIFZlY3RvcjMsIFZlY3RvcjQsIE1hdHJpeCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IENvbG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL2VmZmVjdFwiO1xyXG5pbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zaGFkZXJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcImNvcmUvbm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuXHJcbi8qKlxyXG4gKiBVdGlscyBmdW5jdGlvbnMgZm9yIEdMVEZcclxuICogQGludGVybmFsXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURlV0aWxzIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZ2l2ZW4gXCJwYXJhbWV0ZXJcIiBtYXRyaXhcclxuICAgICAqIEBwYXJhbSBzY2VuZSB0aGUgU2NlbmUgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gc291cmNlIHRoZSBzb3VyY2Ugbm9kZSB3aGVyZSB0byBwaWNrIHRoZSBtYXRyaXhcclxuICAgICAqIEBwYXJhbSBwYXJhbWV0ZXIgdGhlIEdMVEYgdGVjaG5pcXVlIHBhcmFtZXRlclxyXG4gICAgICogQHBhcmFtIHVuaWZvcm1OYW1lIHRoZSBuYW1lIG9mIHRoZSBzaGFkZXIncyB1bmlmb3JtXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyTWF0ZXJpYWwgdGhlIHNoYWRlciBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNldE1hdHJpeChzY2VuZTogU2NlbmUsIHNvdXJjZTogTm9kZSwgcGFyYW1ldGVyOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlciwgdW5pZm9ybU5hbWU6IHN0cmluZywgc2hhZGVyTWF0ZXJpYWw6IFNoYWRlck1hdGVyaWFsIHwgRWZmZWN0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1hdDogTnVsbGFibGU8TWF0cml4PiA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChwYXJhbWV0ZXIuc2VtYW50aWMgPT09IFwiTU9ERUxcIikge1xyXG4gICAgICAgICAgICBtYXQgPSBzb3VyY2UuZ2V0V29ybGRNYXRyaXgoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJQUk9KRUNUSU9OXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc2NlbmUuZ2V0UHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIlZJRVdcIikge1xyXG4gICAgICAgICAgICBtYXQgPSBzY2VuZS5nZXRWaWV3TWF0cml4KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIuc2VtYW50aWMgPT09IFwiTU9ERUxWSUVXSU5WRVJTRVRSQU5TUE9TRVwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IE1hdHJpeC5UcmFuc3Bvc2Uoc291cmNlLmdldFdvcmxkTWF0cml4KCkubXVsdGlwbHkoc2NlbmUuZ2V0Vmlld01hdHJpeCgpKS5pbnZlcnQoKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIuc2VtYW50aWMgPT09IFwiTU9ERUxWSUVXXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc291cmNlLmdldFdvcmxkTWF0cml4KCkubXVsdGlwbHkoc2NlbmUuZ2V0Vmlld01hdHJpeCgpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJNT0RFTFZJRVdQUk9KRUNUSU9OXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc291cmNlLmdldFdvcmxkTWF0cml4KCkubXVsdGlwbHkoc2NlbmUuZ2V0VHJhbnNmb3JtTWF0cml4KCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIk1PREVMSU5WRVJTRVwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNvdXJjZS5nZXRXb3JsZE1hdHJpeCgpLmludmVydCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIlZJRVdJTlZFUlNFXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc2NlbmUuZ2V0Vmlld01hdHJpeCgpLmludmVydCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIlBST0pFQ1RJT05JTlZFUlNFXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc2NlbmUuZ2V0UHJvamVjdGlvbk1hdHJpeCgpLmludmVydCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIk1PREVMVklFV0lOVkVSU0VcIikge1xyXG4gICAgICAgICAgICBtYXQgPSBzb3VyY2UuZ2V0V29ybGRNYXRyaXgoKS5tdWx0aXBseShzY2VuZS5nZXRWaWV3TWF0cml4KCkpLmludmVydCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIk1PREVMVklFV1BST0pFQ1RJT05JTlZFUlNFXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc291cmNlLmdldFdvcmxkTWF0cml4KCkubXVsdGlwbHkoc2NlbmUuZ2V0VHJhbnNmb3JtTWF0cml4KCkpLmludmVydCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIk1PREVMSU5WRVJTRVRSQU5TUE9TRVwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IE1hdHJpeC5UcmFuc3Bvc2Uoc291cmNlLmdldFdvcmxkTWF0cml4KCkuaW52ZXJ0KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hdCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHBhcmFtZXRlci50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVQYXJhbWV0ZXJUeXBlLkZMT0FUX01BVDI6XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuc2V0TWF0cml4MngyKHVuaWZvcm1OYW1lLCBNYXRyaXguR2V0QXNNYXRyaXgyeDIobWF0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVQYXJhbWV0ZXJUeXBlLkZMT0FUX01BVDM6XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuc2V0TWF0cml4M3gzKHVuaWZvcm1OYW1lLCBNYXRyaXguR2V0QXNNYXRyaXgzeDMobWF0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVQYXJhbWV0ZXJUeXBlLkZMT0FUX01BVDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuc2V0TWF0cml4KHVuaWZvcm1OYW1lLCBtYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGdpdmVuIFwicGFyYW1ldGVyXCIgbWF0cml4XHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyTWF0ZXJpYWwgdGhlIHNoYWRlciBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIHVuaWZvcm0gdGhlIG5hbWUgb2YgdGhlIHNoYWRlcidzIHVuaWZvcm1cclxuICAgICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIHVuaWZvcm1cclxuICAgICAqIEBwYXJhbSB0eXBlIHRoZSB1bmlmb3JtJ3MgdHlwZSAoRVBhcmFtZXRlclR5cGUgRkxPQVQsIFZFQzIsIFZFQzMgb3IgVkVDNClcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgc2V0LCBlbHNlIGZhbHNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2V0VW5pZm9ybShzaGFkZXJNYXRlcmlhbDogU2hhZGVyTWF0ZXJpYWwgfCBFZmZlY3QsIHVuaWZvcm06IHN0cmluZywgdmFsdWU6IGFueSwgdHlwZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRVBhcmFtZXRlclR5cGUuRkxPQVQ6XHJcbiAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5zZXRGbG9hdCh1bmlmb3JtLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9WRUMyOlxyXG4gICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuc2V0VmVjdG9yMih1bmlmb3JtLCBWZWN0b3IyLkZyb21BcnJheSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGNhc2UgRVBhcmFtZXRlclR5cGUuRkxPQVRfVkVDMzpcclxuICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLnNldFZlY3RvcjModW5pZm9ybSwgVmVjdG9yMy5Gcm9tQXJyYXkodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBjYXNlIEVQYXJhbWV0ZXJUeXBlLkZMT0FUX1ZFQzQ6XHJcbiAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5zZXRWZWN0b3I0KHVuaWZvcm0sIFZlY3RvcjQuRnJvbUFycmF5KHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB3cmFwIG1vZGUgb2YgdGhlIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBtb2RlIHRoZSBtb2RlIHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgd3JhcCBtb2RlIChURVhUVVJFX1dSQVBfQUREUkVTU01PREUsIE1JUlJPUl9BRERSRVNTTU9ERSBvciBDTEFNUF9BRERSRVNTTU9ERSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRXcmFwTW9kZShtb2RlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIEVUZXh0dXJlV3JhcE1vZGUuQ0xBTVBfVE9fRURHRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkNMQU1QX0FERFJFU1NNT0RFO1xyXG4gICAgICAgICAgICBjYXNlIEVUZXh0dXJlV3JhcE1vZGUuTUlSUk9SRURfUkVQRUFUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTUlSUk9SX0FERFJFU1NNT0RFO1xyXG4gICAgICAgICAgICBjYXNlIEVUZXh0dXJlV3JhcE1vZGUuUkVQRUFUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuV1JBUF9BRERSRVNTTU9ERTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLldSQVBfQUREUkVTU01PREU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgYnl0ZSBzdHJpZGUgZ2l2aW5nIGFuIGFjY2Vzc29yXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzb3IgdGhlIEdMVEYgYWNjZXNzb3Igb2JqZXRcclxuICAgICAqIEByZXR1cm5zIHRoZSBieXRlIHN0cmlkZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJ5dGVTdHJpZGVGcm9tVHlwZShhY2Nlc3NvcjogSUdMVEZBY2Nlc3Nvcik6IG51bWJlciB7XHJcbiAgICAgICAgLy8gTmVlZHMgdGhpcyBmdW5jdGlvbiBzaW5jZSBcImJ5dGVTdHJpZGVcIiBpc24ndCByZXF1aWVyZWQgaW4gZ2xURiBmb3JtYXRcclxuICAgICAgICBjb25zdCB0eXBlID0gYWNjZXNzb3IudHlwZTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJWRUMyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICAgICAgY2FzZSBcIlZFQzNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgICAgICBjYXNlIFwiVkVDNFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNQVQyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgY2FzZSBcIk1BVDNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA5O1xyXG4gICAgICAgICAgICBjYXNlIFwiTUFUNFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE2O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdGV4dHVyZSBmaWx0ZXIgbW9kZSBnaXZpbmcgYSBtb2RlIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gbW9kZSB0aGUgZmlsdGVyIG1vZGUgdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHRoZSBmaWx0ZXIgbW9kZSAoVE9ETyAtIG5lZWRzIHRvIGJlIGEgdHlwZT8pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0VGV4dHVyZUZpbHRlck1vZGUobW9kZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBFVGV4dHVyZUZpbHRlclR5cGUuTElORUFSOlxyXG4gICAgICAgICAgICBjYXNlIEVUZXh0dXJlRmlsdGVyVHlwZS5MSU5FQVJfTUlQTUFQX05FQVJFU1Q6XHJcbiAgICAgICAgICAgIGNhc2UgRVRleHR1cmVGaWx0ZXJUeXBlLkxJTkVBUl9NSVBNQVBfTElORUFSOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuVFJJTElORUFSX1NBTVBMSU5HTU9ERTtcclxuICAgICAgICAgICAgY2FzZSBFVGV4dHVyZUZpbHRlclR5cGUuTkVBUkVTVDpcclxuICAgICAgICAgICAgY2FzZSBFVGV4dHVyZUZpbHRlclR5cGUuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk5FQVJFU1RfU0FNUExJTkdNT0RFO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuQklMSU5FQVJfU0FNUExJTkdNT0RFO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJ1ZmZlckZyb21CdWZmZXJWaWV3KFxyXG4gICAgICAgIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsXHJcbiAgICAgICAgYnVmZmVyVmlldzogSUdMVEZCdWZmZXJWaWV3LFxyXG4gICAgICAgIGJ5dGVPZmZzZXQ6IG51bWJlcixcclxuICAgICAgICBieXRlTGVuZ3RoOiBudW1iZXIsXHJcbiAgICAgICAgY29tcG9uZW50VHlwZTogRUNvbXBvbmVudFR5cGVcclxuICAgICk6IEFycmF5QnVmZmVyVmlldyB7XHJcbiAgICAgICAgYnl0ZU9mZnNldCA9IGJ1ZmZlclZpZXcuYnl0ZU9mZnNldCArIGJ5dGVPZmZzZXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvYWRlZEJ1ZmZlclZpZXcgPSBnbHRmUnVudGltZS5sb2FkZWRCdWZmZXJWaWV3c1tidWZmZXJWaWV3LmJ1ZmZlcl07XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoID4gbG9hZGVkQnVmZmVyVmlldy5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJ1ZmZlciBhY2Nlc3MgaXMgb3V0IG9mIHJhbmdlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbG9hZGVkQnVmZmVyVmlldy5idWZmZXI7XHJcbiAgICAgICAgYnl0ZU9mZnNldCArPSBsb2FkZWRCdWZmZXJWaWV3LmJ5dGVPZmZzZXQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEVDb21wb25lbnRUeXBlLkJZVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEludDhBcnJheShidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICBjYXNlIEVDb21wb25lbnRUeXBlLlVOU0lHTkVEX0JZVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgY2FzZSBFQ29tcG9uZW50VHlwZS5TSE9SVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSW50MTZBcnJheShidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICBjYXNlIEVDb21wb25lbnRUeXBlLlVOU0lHTkVEX1NIT1JUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50MTZBcnJheShidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgYnVmZmVyIGZyb20gaXRzIGFjY2Vzc29yXHJcbiAgICAgKiBAcGFyYW0gZ2x0ZlJ1bnRpbWUgdGhlIEdMVEYgcnVudGltZVxyXG4gICAgICogQHBhcmFtIGFjY2Vzc29yIHRoZSBHTFRGIGFjY2Vzc29yXHJcbiAgICAgKiBAcmV0dXJucyBhbiBhcnJheSBidWZmZXIgdmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJ1ZmZlckZyb21BY2Nlc3NvcihnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBhY2Nlc3NvcjogSUdMVEZBY2Nlc3Nvcik6IGFueSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyVmlldzogSUdMVEZCdWZmZXJWaWV3ID0gZ2x0ZlJ1bnRpbWUuYnVmZmVyVmlld3NbYWNjZXNzb3IuYnVmZmVyVmlld107XHJcbiAgICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IGFjY2Vzc29yLmNvdW50ICogR0xURlV0aWxzLkdldEJ5dGVTdHJpZGVGcm9tVHlwZShhY2Nlc3Nvcik7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZVdGlscy5HZXRCdWZmZXJGcm9tQnVmZmVyVmlldyhnbHRmUnVudGltZSwgYnVmZmVyVmlldywgYWNjZXNzb3IuYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCwgYWNjZXNzb3IuY29tcG9uZW50VHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNvZGVzIGEgYnVmZmVyIHZpZXcgaW50byBhIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIHZpZXcgdGhlIGJ1ZmZlciB2aWV3XHJcbiAgICAgKiBAcmV0dXJucyBhIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29kZUJ1ZmZlclRvVGV4dCh2aWV3OiBBcnJheUJ1ZmZlclZpZXcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHZpZXcuYnl0ZUxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoPGFueT52aWV3KVtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZGVmYXVsdCBtYXRlcmlhbCBvZiBnbHRmLiBSZWxhdGVkIHRvXHJcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8xLjAjYXBwZW5kaXgtYS1kZWZhdWx0LW1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIEJhYnlsb24uanMgc2NlbmVcclxuICAgICAqIEByZXR1cm5zIHRoZSBkZWZhdWx0IEJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXREZWZhdWx0TWF0ZXJpYWwoc2NlbmU6IFNjZW5lKTogU2hhZGVyTWF0ZXJpYWwge1xyXG4gICAgICAgIGlmICghR0xURlV0aWxzLl9EZWZhdWx0TWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgRWZmZWN0LlNoYWRlcnNTdG9yZVtcIkdMVEZEZWZhdWx0TWF0ZXJpYWxWZXJ0ZXhTaGFkZXJcIl0gPSBbXHJcbiAgICAgICAgICAgICAgICBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcIixcclxuICAgICAgICAgICAgICAgIFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcInVuaWZvcm0gbWF0NCB3b3JsZFZpZXc7XCIsXHJcbiAgICAgICAgICAgICAgICBcInVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1wiLFxyXG4gICAgICAgICAgICAgICAgXCJcIixcclxuICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4odm9pZClcIixcclxuICAgICAgICAgICAgICAgIFwie1wiLFxyXG4gICAgICAgICAgICAgICAgXCIgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogd29ybGRWaWV3ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcIixcclxuICAgICAgICAgICAgICAgIFwifVwiLFxyXG4gICAgICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcblxyXG4gICAgICAgICAgICBFZmZlY3QuU2hhZGVyc1N0b3JlW1wiR0xURkRlZmF1bHRNYXRlcmlhbFBpeGVsU2hhZGVyXCJdID0gW1xyXG4gICAgICAgICAgICAgICAgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1bmlmb3JtIHZlYzQgdV9lbWlzc2lvbjtcIixcclxuICAgICAgICAgICAgICAgIFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcInZvaWQgbWFpbih2b2lkKVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ7XCIsXHJcbiAgICAgICAgICAgICAgICBcIiAgICBnbF9GcmFnQ29sb3IgPSB1X2VtaXNzaW9uO1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ9XCIsXHJcbiAgICAgICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNoYWRlclBhdGggPSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXg6IFwiR0xURkRlZmF1bHRNYXRlcmlhbFwiLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQ6IFwiR0xURkRlZmF1bHRNYXRlcmlhbFwiLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcInBvc2l0aW9uXCJdLFxyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IFtcIndvcmxkVmlld1wiLCBcInByb2plY3Rpb25cIiwgXCJ1X2VtaXNzaW9uXCJdLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlcnM6IG5ldyBBcnJheTxzdHJpbmc+KCksXHJcbiAgICAgICAgICAgICAgICBuZWVkQWxwaGFCbGVuZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBHTFRGVXRpbHMuX0RlZmF1bHRNYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbChcIkdMVEZEZWZhdWx0TWF0ZXJpYWxcIiwgc2NlbmUsIHNoYWRlclBhdGgsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBHTFRGVXRpbHMuX0RlZmF1bHRNYXRlcmlhbC5zZXRDb2xvcjQoXCJ1X2VtaXNzaW9uXCIsIG5ldyBDb2xvcjQoMC41LCAwLjUsIDAuNSwgMS4wKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gR0xURlV0aWxzLl9EZWZhdWx0TWF0ZXJpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIEdMVEYgZGVmYXVsdCBtYXRlcmlhbFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0RlZmF1bHRNYXRlcmlhbDogTnVsbGFibGU8U2hhZGVyTWF0ZXJpYWw+ID0gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBHTFRGTG9hZGVyRXh0ZW5zaW9uLCBHTFRGTG9hZGVyQmFzZSwgR0xURkxvYWRlciB9IGZyb20gXCIuL2dsVEZMb2FkZXJcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSUdMVEZSdW50aW1lLCBJR0xURk1hdGVyaWFsIH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuXHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgSGVtaXNwaGVyaWNMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9oZW1pc3BoZXJpY0xpZ2h0XCI7XHJcbmltcG9ydCB7IERpcmVjdGlvbmFsTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvZGlyZWN0aW9uYWxMaWdodFwiO1xyXG5pbXBvcnQgeyBQb2ludExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3BvaW50TGlnaHRcIjtcclxuaW1wb3J0IHsgU3BvdExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3Nwb3RMaWdodFwiO1xyXG5cclxuaW50ZXJmYWNlIElHTFRGTWF0ZXJpYWxzQ29tbW9uRXh0ZW5zaW9uVmFsdWVzIHtcclxuICAgIGFtYmllbnQ/OiBudW1iZXJbXSB8IHN0cmluZztcclxuICAgIGRpZmZ1c2U/OiBudW1iZXJbXSB8IHN0cmluZztcclxuICAgIGVtaXNzaW9uPzogbnVtYmVyW10gfCBzdHJpbmc7XHJcbiAgICBzcGVjdWxhcj86IG51bWJlcltdIHwgc3RyaW5nO1xyXG4gICAgc2hpbmluZXNzPzogbnVtYmVyO1xyXG4gICAgdHJhbnNwYXJlbmN5PzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUdMVEZNYXRlcmlhbHNDb21tb25FeHRlbnNpb24ge1xyXG4gICAgdGVjaG5pcXVlOiBzdHJpbmc7XHJcbiAgICB0cmFuc3BhcmVudD86IG51bWJlcjtcclxuICAgIGRvdWJsZVNpZGVkPzogYm9vbGVhbjtcclxuICAgIHZhbHVlczogSUdMVEZNYXRlcmlhbHNDb21tb25FeHRlbnNpb25WYWx1ZXM7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR0xURlJ1bnRpbWVDb21tb25FeHRlbnNpb24ge1xyXG4gICAgbGlnaHRzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGTGlnaHRDb21tb25FeHRlbnNpb24gfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElHTFRGTGlnaHRDb21tb25FeHRlbnNpb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgIGFtYmllbnQ/OiBJR0xURkFtYmllbnRMaWdodENvbW1vbkV4dGVuc2lvbjtcclxuICAgIHBvaW50PzogSUdMVEZQb2ludExpZ2h0Q29tbW9uRXh0ZW5zaW9uO1xyXG4gICAgZGlyZWN0aW9uYWw/OiBJR0xURkRpcmVjdGlvbmFsTGlnaHRDb21tb25FeHRlbnNpb247XHJcbiAgICBzcG90PzogSUdMVEZTcG90TGlnaHRDb21tb25FeHRlbnNpb247XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR0xURlBvaW50TGlnaHRDb21tb25FeHRlbnNpb24ge1xyXG4gICAgY29sb3I6IG51bWJlcltdO1xyXG4gICAgY29uc3RhbnRBdHRlbnVhdGlvbjogbnVtYmVyO1xyXG4gICAgbGluZWFyQXR0ZW51YXRpb246IG51bWJlcjtcclxuICAgIHF1YWRyYXRpY0F0dGVudWF0aW9uOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR0xURkFtYmllbnRMaWdodENvbW1vbkV4dGVuc2lvbiB7XHJcbiAgICBjb2xvcjogbnVtYmVyW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR0xURkRpcmVjdGlvbmFsTGlnaHRDb21tb25FeHRlbnNpb24ge1xyXG4gICAgY29sb3I6IG51bWJlcltdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUdMVEZTcG90TGlnaHRDb21tb25FeHRlbnNpb24ge1xyXG4gICAgY29sb3I6IG51bWJlcltdO1xyXG4gICAgY29uc3RhbnRBdHRlbnVhdGlvbjogbnVtYmVyO1xyXG4gICAgZmFsbE9mZkFuZ2xlOiBudW1iZXI7XHJcbiAgICBmYWxsT2ZmRXhwb25lbnQ6IG51bWJlcjtcclxuICAgIGxpbmVhckF0dGVudWF0aW9uOiBudW1iZXI7XHJcbiAgICBxdWFkcmF0aWNBdHRlbnVhdGlvbjogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURk1hdGVyaWFsc0NvbW1vbkV4dGVuc2lvbiBleHRlbmRzIEdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJLSFJfbWF0ZXJpYWxzX2NvbW1vblwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBvdmVycmlkZSBsb2FkUnVudGltZUV4dGVuc2lvbnNBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFnbHRmUnVudGltZS5leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbjogSUdMVEZSdW50aW1lQ29tbW9uRXh0ZW5zaW9uID0gZ2x0ZlJ1bnRpbWUuZXh0ZW5zaW9uc1t0aGlzLm5hbWVdO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBsaWdodHNcclxuICAgICAgICBjb25zdCBsaWdodHMgPSBleHRlbnNpb24ubGlnaHRzO1xyXG4gICAgICAgIGlmIChsaWdodHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB0aGluZyBpbiBsaWdodHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpZ2h0OiBJR0xURkxpZ2h0Q29tbW9uRXh0ZW5zaW9uID0gbGlnaHRzW3RoaW5nXTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGxpZ2h0LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW1iaWVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBIZW1pc3BoZXJpY0xpZ2h0KGxpZ2h0Lm5hbWUsIG5ldyBWZWN0b3IzKDAsIDEsIDApLCBnbHRmUnVudGltZS5zY2VuZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtYmllbnQgPSBsaWdodC5hbWJpZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW1iaWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1iaWVudExpZ2h0LmRpZmZ1c2UgPSBDb2xvcjMuRnJvbUFycmF5KGFtYmllbnQuY29sb3IgfHwgWzEsIDEsIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBvaW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9pbnRMaWdodCA9IG5ldyBQb2ludExpZ2h0KGxpZ2h0Lm5hbWUsIG5ldyBWZWN0b3IzKDEwLCAxMCwgMTApLCBnbHRmUnVudGltZS5zY2VuZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gbGlnaHQucG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRMaWdodC5kaWZmdXNlID0gQ29sb3IzLkZyb21BcnJheShwb2ludC5jb2xvciB8fCBbMSwgMSwgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGlyZWN0aW9uYWxcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJMaWdodCA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KGxpZ2h0Lm5hbWUsIG5ldyBWZWN0b3IzKDAsIC0xLCAwKSwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25hbCA9IGxpZ2h0LmRpcmVjdGlvbmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpckxpZ2h0LmRpZmZ1c2UgPSBDb2xvcjMuRnJvbUFycmF5KGRpcmVjdGlvbmFsLmNvbG9yIHx8IFsxLCAxLCAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzcG90XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BvdCA9IGxpZ2h0LnNwb3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcG90TGlnaHQgPSBuZXcgU3BvdExpZ2h0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjMoMCwgMTAsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKDAsIC0xLCAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG90LmZhbGxPZmZBbmdsZSB8fCBNYXRoLlBJLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwb3QuZmFsbE9mZkV4cG9uZW50IHx8IDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbHRmUnVudGltZS5zY2VuZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwb3RMaWdodC5kaWZmdXNlID0gQ29sb3IzLkZyb21BcnJheShzcG90LmNvbG9yIHx8IFsxLCAxLCAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oJ0dMVEYgTWF0ZXJpYWwgQ29tbW9uIGV4dGVuc2lvbjogbGlnaHQgdHlwZSBcIicgKyBsaWdodC50eXBlICsgXCLigJ0gbm90IHN1cHBvcnRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBvdmVycmlkZSBsb2FkTWF0ZXJpYWxBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6IChtYXRlcmlhbDogTWF0ZXJpYWwpID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtYXRlcmlhbDogSUdMVEZNYXRlcmlhbCA9IGdsdGZSdW50aW1lLm1hdGVyaWFsc1tpZF07XHJcbiAgICAgICAgaWYgKCFtYXRlcmlhbCB8fCAhbWF0ZXJpYWwuZXh0ZW5zaW9ucykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHRlbnNpb246IElHTFRGTWF0ZXJpYWxzQ29tbW9uRXh0ZW5zaW9uID0gbWF0ZXJpYWwuZXh0ZW5zaW9uc1t0aGlzLm5hbWVdO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YW5kYXJkTWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChpZCwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgICAgIHN0YW5kYXJkTWF0ZXJpYWwuc2lkZU9yaWVudGF0aW9uID0gTWF0ZXJpYWwuQ291bnRlckNsb2NrV2lzZVNpZGVPcmllbnRhdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbi50ZWNobmlxdWUgPT09IFwiQ09OU1RBTlRcIikge1xyXG4gICAgICAgICAgICBzdGFuZGFyZE1hdGVyaWFsLmRpc2FibGVMaWdodGluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFuZGFyZE1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyA9IGV4dGVuc2lvbi5kb3VibGVTaWRlZCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhZXh0ZW5zaW9uLmRvdWJsZVNpZGVkO1xyXG4gICAgICAgIHN0YW5kYXJkTWF0ZXJpYWwuYWxwaGEgPSBleHRlbnNpb24udmFsdWVzLnRyYW5zcGFyZW5jeSA9PT0gdW5kZWZpbmVkID8gMS4wIDogZXh0ZW5zaW9uLnZhbHVlcy50cmFuc3BhcmVuY3k7XHJcbiAgICAgICAgc3RhbmRhcmRNYXRlcmlhbC5zcGVjdWxhclBvd2VyID0gZXh0ZW5zaW9uLnZhbHVlcy5zaGluaW5lc3MgPT09IHVuZGVmaW5lZCA/IDAuMCA6IGV4dGVuc2lvbi52YWx1ZXMuc2hpbmluZXNzO1xyXG5cclxuICAgICAgICAvLyBBbWJpZW50XHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHRlbnNpb24udmFsdWVzLmFtYmllbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZFRleHR1cmUoZ2x0ZlJ1bnRpbWUsIGV4dGVuc2lvbi52YWx1ZXMuYW1iaWVudCwgc3RhbmRhcmRNYXRlcmlhbCwgXCJhbWJpZW50VGV4dHVyZVwiLCBvbkVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFuZGFyZE1hdGVyaWFsLmFtYmllbnRDb2xvciA9IENvbG9yMy5Gcm9tQXJyYXkoZXh0ZW5zaW9uLnZhbHVlcy5hbWJpZW50IHx8IFswLCAwLCAwXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaWZmdXNlXHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHRlbnNpb24udmFsdWVzLmRpZmZ1c2UgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZFRleHR1cmUoZ2x0ZlJ1bnRpbWUsIGV4dGVuc2lvbi52YWx1ZXMuZGlmZnVzZSwgc3RhbmRhcmRNYXRlcmlhbCwgXCJkaWZmdXNlVGV4dHVyZVwiLCBvbkVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFuZGFyZE1hdGVyaWFsLmRpZmZ1c2VDb2xvciA9IENvbG9yMy5Gcm9tQXJyYXkoZXh0ZW5zaW9uLnZhbHVlcy5kaWZmdXNlIHx8IFswLCAwLCAwXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFbWlzc2lvblxyXG4gICAgICAgIGlmICh0eXBlb2YgZXh0ZW5zaW9uLnZhbHVlcy5lbWlzc2lvbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZShnbHRmUnVudGltZSwgZXh0ZW5zaW9uLnZhbHVlcy5lbWlzc2lvbiwgc3RhbmRhcmRNYXRlcmlhbCwgXCJlbWlzc2l2ZVRleHR1cmVcIiwgb25FcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhbmRhcmRNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gQ29sb3IzLkZyb21BcnJheShleHRlbnNpb24udmFsdWVzLmVtaXNzaW9uIHx8IFswLCAwLCAwXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTcGVjdWxhclxyXG4gICAgICAgIGlmICh0eXBlb2YgZXh0ZW5zaW9uLnZhbHVlcy5zcGVjdWxhciA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZShnbHRmUnVudGltZSwgZXh0ZW5zaW9uLnZhbHVlcy5zcGVjdWxhciwgc3RhbmRhcmRNYXRlcmlhbCwgXCJzcGVjdWxhclRleHR1cmVcIiwgb25FcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhbmRhcmRNYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gQ29sb3IzLkZyb21BcnJheShleHRlbnNpb24udmFsdWVzLnNwZWN1bGFyIHx8IFswLCAwLCAwXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkVGV4dHVyZShnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBtYXRlcmlhbDogU3RhbmRhcmRNYXRlcmlhbCwgcHJvcGVydHlQYXRoOiBzdHJpbmcsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICAvLyBDcmVhdGUgYnVmZmVyIGZyb20gdGV4dHVyZSB1cmxcclxuICAgICAgICBHTFRGTG9hZGVyQmFzZS5Mb2FkVGV4dHVyZUJ1ZmZlckFzeW5jKFxyXG4gICAgICAgICAgICBnbHRmUnVudGltZSxcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIChidWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0ZXh0dXJlIGZyb20gYnVmZmVyXHJcbiAgICAgICAgICAgICAgICBHTFRGTG9hZGVyQmFzZS5DcmVhdGVUZXh0dXJlQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBidWZmZXIsICh0ZXh0dXJlKSA9PiAoKDxhbnk+bWF0ZXJpYWwpW3Byb3BlcnR5UGF0aF0gPSB0ZXh0dXJlKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRXJyb3JcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKG5ldyBHTFRGTWF0ZXJpYWxzQ29tbW9uRXh0ZW5zaW9uKCkpO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9nbFRGQmluYXJ5RXh0ZW5zaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEZMb2FkZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURkxvYWRlclV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEZNYXRlcmlhbHNDb21tb25FeHRlbnNpb25cIjtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzXHJcbmltcG9ydCB0eXBlIHsgSVNjZW5lTG9hZGVyUGx1Z2luRXh0ZW5zaW9ucywgSVNjZW5lTG9hZGVyUGx1Z2luTWV0YWRhdGEgfSBmcm9tIFwiY29yZS9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQgPSBcIloyeFVSZ1wiOyAvLyBcImdsVEZcIiBiYXNlNjQgZW5jb2RlZCAod2l0aG91dCB0aGUgcXVvdGVzISlcclxuXHJcbmV4cG9ydCBjb25zdCBHTFRGRmlsZUxvYWRlck1ldGFkYXRhID0ge1xyXG4gICAgbmFtZTogXCJnbHRmXCIsXHJcblxyXG4gICAgZXh0ZW5zaW9uczoge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgICAgICBcIi5nbHRmXCI6IHsgaXNCaW5hcnk6IGZhbHNlLCBtaW1lVHlwZTogXCJtb2RlbC9nbHRmK2pzb25cIiB9LFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgICAgICBcIi5nbGJcIjogeyBpc0JpbmFyeTogdHJ1ZSwgbWltZVR5cGU6IFwibW9kZWwvZ2x0Zi1iaW5hcnlcIiB9LFxyXG4gICAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgSVNjZW5lTG9hZGVyUGx1Z2luRXh0ZW5zaW9ucyxcclxuXHJcbiAgICBjYW5EaXJlY3RMb2FkKGRhdGE6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIChkYXRhLmluZGV4T2YoXCJhc3NldFwiKSAhPT0gLTEgJiYgZGF0YS5pbmRleE9mKFwidmVyc2lvblwiKSAhPT0gLTEpIHx8XHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcImRhdGE6YmFzZTY0LFwiICsgR0xURk1hZ2ljQmFzZTY0RW5jb2RlZCkgfHwgLy8gdGhpcyBpcyB0ZWNobmljYWxseSBpbmNvcnJlY3QsIGJ1dCB3aWxsIGNvbnRpbnVlIHRvIHN1cHBvcnQgZm9yIGJhY2tjb21wYXQuXHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcImRhdGE6O2Jhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpIHx8XHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpIHx8XHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcImRhdGE6bW9kZWwvZ2x0Zi1iaW5hcnk7YmFzZTY0LFwiICsgR0xURk1hZ2ljQmFzZTY0RW5jb2RlZClcclxuICAgICAgICApO1xyXG4gICAgfSxcclxufSBhcyBjb25zdCBzYXRpc2ZpZXMgSVNjZW5lTG9hZGVyUGx1Z2luTWV0YWRhdGE7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGdpdGh1Yi9uby10aGVuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9ycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlICogYXMgR0xURjIgZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBPYnNlcnZlciB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBJU2NlbmVMb2FkZXJQbHVnaW5GYWN0b3J5LCBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYywgSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCwgSVNjZW5lTG9hZGVyQXN5bmNSZXN1bHQsIFNjZW5lTG9hZGVyUGx1Z2luT3B0aW9ucyB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJTY2VuZUxvYWRlclBsdWdpbiB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lLCBJRGlzcG9zYWJsZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgV2ViUmVxdWVzdCB9IGZyb20gXCJjb3JlL01pc2Mvd2ViUmVxdWVzdFwiO1xyXG5pbXBvcnQgdHlwZSB7IElGaWxlUmVxdWVzdCB9IGZyb20gXCJjb3JlL01pc2MvZmlsZVJlcXVlc3RcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJRGF0YUJ1ZmZlciB9IGZyb20gXCJjb3JlL01pc2MvZGF0YVJlYWRlclwiO1xyXG5pbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSBcImNvcmUvTWlzYy9kYXRhUmVhZGVyXCI7XHJcbmltcG9ydCB7IEdMVEZWYWxpZGF0aW9uIH0gZnJvbSBcIi4vZ2xURlZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgR0xURkZpbGVMb2FkZXJNZXRhZGF0YSwgR0xURk1hZ2ljQmFzZTY0RW5jb2RlZCB9IGZyb20gXCIuL2dsVEZGaWxlTG9hZGVyLm1ldGFkYXRhXCI7XHJcbmltcG9ydCB0eXBlIHsgTG9hZEZpbGVFcnJvciB9IGZyb20gXCJjb3JlL01pc2MvZmlsZVRvb2xzXCI7XHJcbmltcG9ydCB7IERlY29kZUJhc2U2NFVybFRvQmluYXJ5IH0gZnJvbSBcImNvcmUvTWlzYy9maWxlVG9vbHNcIjtcclxuaW1wb3J0IHsgUnVudGltZUVycm9yLCBFcnJvckNvZGVzIH0gZnJvbSBcImNvcmUvTWlzYy9lcnJvclwiO1xyXG5pbXBvcnQgdHlwZSB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE1vcnBoVGFyZ2V0TWFuYWdlciB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0TWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgb3B0aW9ucyBmb3IgZ2xURiBsb2FkZXIgZXh0ZW5zaW9ucy4gVGhpcyBpbnRlcmZhY2UgaXMgZXh0ZW5kZWQgYnkgc3BlY2lmaWMgZXh0ZW5zaW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZD4ge31cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2NcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2NlbmVMb2FkZXJQbHVnaW5PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBnbFRGIGxvYWRlci5cclxuICAgICAgICAgKi9cclxuICAgICAgICBbR0xURkZpbGVMb2FkZXJNZXRhZGF0YS5uYW1lXTogUGFydGlhbDxHTFRGTG9hZGVyT3B0aW9ucz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRmlsZVJlcXVlc3RJbmZvIGV4dGVuZHMgSUZpbGVSZXF1ZXN0IHtcclxuICAgIF9sZW5ndGhDb21wdXRhYmxlPzogYm9vbGVhbjtcclxuICAgIF9sb2FkZWQ/OiBudW1iZXI7XHJcbiAgICBfdG90YWw/OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRBc3luYyhhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRWaWV3QXN5bmMoYXJyYXlCdWZmZXJWaWV3OiBBcnJheUJ1ZmZlclZpZXcsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBieXRlT2Zmc2V0ID49IGFycmF5QnVmZmVyVmlldy5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiT2Zmc2V0IGlzIG91dCBvZiByYW5nZS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGggPiBhcnJheUJ1ZmZlclZpZXcuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkxlbmd0aCBpcyBvdXQgb2YgcmFuZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlclZpZXcuYnVmZmVyLCBhcnJheUJ1ZmZlclZpZXcuYnl0ZU9mZnNldCArIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb2RlIHRoYXQgZGV0ZXJtaW5lcyB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gdG8gdXNlLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gR0xURkxvYWRlckNvb3JkaW5hdGVTeXN0ZW1Nb2RlIHtcclxuICAgIC8qKlxyXG4gICAgICogQXV0b21hdGljYWxseSBjb252ZXJ0IHRoZSBnbFRGIHJpZ2h0LWhhbmRlZCBkYXRhIHRvIHRoZSBhcHByb3ByaWF0ZSBzeXN0ZW0gYmFzZWQgb24gdGhlIGN1cnJlbnQgY29vcmRpbmF0ZSBzeXN0ZW0gbW9kZSBvZiB0aGUgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIEFVVE8sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB1c2VSaWdodEhhbmRlZFN5c3RlbSBmbGFnIG9uIHRoZSBzY2VuZS5cclxuICAgICAqL1xyXG4gICAgRk9SQ0VfUklHSFRfSEFOREVELFxyXG59XHJcblxyXG4vKipcclxuICogTW9kZSB0aGF0IGRldGVybWluZXMgd2hhdCBhbmltYXRpb25zIHdpbGwgc3RhcnQuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBHTFRGTG9hZGVyQW5pbWF0aW9uU3RhcnRNb2RlIHtcclxuICAgIC8qKlxyXG4gICAgICogTm8gYW5pbWF0aW9uIHdpbGwgc3RhcnQuXHJcbiAgICAgKi9cclxuICAgIE5PTkUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZmlyc3QgYW5pbWF0aW9uIHdpbGwgc3RhcnQuXHJcbiAgICAgKi9cclxuICAgIEZJUlNULFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsIGFuaW1hdGlvbnMgd2lsbCBzdGFydC5cclxuICAgICAqL1xyXG4gICAgQUxMLFxyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgY29udGFpbnMgdGhlIGRhdGEgZm9yIHRoZSBnbFRGIGFzc2V0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkxvYWRlckRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgZ2xURiBKU09OLlxyXG4gICAgICovXHJcbiAgICBqc29uOiBvYmplY3Q7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQklOIGNodW5rIG9mIGEgYmluYXJ5IGdsVEYuXHJcbiAgICAgKi9cclxuICAgIGJpbjogTnVsbGFibGU8SURhdGFCdWZmZXI+O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBleHRlbmRpbmcgdGhlIGxvYWRlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBvcmRlciBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqIFRoZSBsb2FkZXIgc29ydHMgdGhlIGV4dGVuc2lvbnMgdXNpbmcgdGhlc2UgdmFsdWVzIHdoZW4gbG9hZGluZy5cclxuICAgICAqL1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2FkZXIgc3RhdGUuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBHTFRGTG9hZGVyU3RhdGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXNzZXQgaXMgbG9hZGluZy5cclxuICAgICAqL1xyXG4gICAgTE9BRElORyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhc3NldCBpcyByZWFkeSBmb3IgcmVuZGVyaW5nLlxyXG4gICAgICovXHJcbiAgICBSRUFEWSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhc3NldCBpcyBjb21wbGV0ZWx5IGxvYWRlZC5cclxuICAgICAqL1xyXG4gICAgQ09NUExFVEUsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkxvYWRlciBleHRlbmRzIElEaXNwb3NhYmxlIHtcclxuICAgIGltcG9ydE1lc2hBc3luYzogKFxyXG4gICAgICAgIG1lc2hlc05hbWVzOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGNvbnRhaW5lcjogTnVsbGFibGU8QXNzZXRDb250YWluZXI+LFxyXG4gICAgICAgIGRhdGE6IElHTFRGTG9hZGVyRGF0YSxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICBmaWxlTmFtZT86IHN0cmluZ1xyXG4gICAgKSA9PiBQcm9taXNlPElTY2VuZUxvYWRlckFzeW5jUmVzdWx0PjtcclxuICAgIGxvYWRBc3luYzogKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsIGZpbGVOYW1lPzogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyBkZWZhdWx0L2ltcGxpY2l0IG9wdGlvbnMgdG8gZXh0ZW5zaW9uIHNwZWNpZmljIG9wdGlvbnMuXHJcbiAqL1xyXG50eXBlIERlZmF1bHRFeHRlbnNpb25PcHRpb25zPEJhc2VFeHRlbnNpb25PcHRpb25zPiA9IHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgZXh0ZW5zaW9uIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgZW5hYmxlZD86IGJvb2xlYW47XHJcbn0gJiBCYXNlRXh0ZW5zaW9uT3B0aW9ucztcclxuXHJcbmFic3RyYWN0IGNsYXNzIEdMVEZMb2FkZXJPcHRpb25zIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBiYWJ5bG9uanMvYXZhaWxhYmxlXHJcbiAgICBwcm90ZWN0ZWQgY29weUZyb20ob3B0aW9ucz86IFBhcnRpYWw8UmVhZG9ubHk8R0xURkxvYWRlck9wdGlvbnM+Pikge1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWQgPSBvcHRpb25zLm9uUGFyc2VkO1xyXG4gICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVTeXN0ZW1Nb2RlID0gb3B0aW9ucy5jb29yZGluYXRlU3lzdGVtTW9kZSA/PyB0aGlzLmNvb3JkaW5hdGVTeXN0ZW1Nb2RlO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXJ0TW9kZSA9IG9wdGlvbnMuYW5pbWF0aW9uU3RhcnRNb2RlID8/IHRoaXMuYW5pbWF0aW9uU3RhcnRNb2RlO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWROb2RlQW5pbWF0aW9ucyA9IG9wdGlvbnMubG9hZE5vZGVBbmltYXRpb25zID8/IHRoaXMubG9hZE5vZGVBbmltYXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTa2lucyA9IG9wdGlvbnMubG9hZFNraW5zID8/IHRoaXMubG9hZFNraW5zO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRNb3JwaFRhcmdldHMgPSBvcHRpb25zLmxvYWRNb3JwaFRhcmdldHMgPz8gdGhpcy5sb2FkTW9ycGhUYXJnZXRzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVNYXRlcmlhbHMgPSBvcHRpb25zLmNvbXBpbGVNYXRlcmlhbHMgPz8gdGhpcy5jb21waWxlTWF0ZXJpYWxzO1xyXG4gICAgICAgICAgICB0aGlzLnVzZUNsaXBQbGFuZSA9IG9wdGlvbnMudXNlQ2xpcFBsYW5lID8/IHRoaXMudXNlQ2xpcFBsYW5lO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVTaGFkb3dHZW5lcmF0b3JzID0gb3B0aW9ucy5jb21waWxlU2hhZG93R2VuZXJhdG9ycyA/PyB0aGlzLmNvbXBpbGVTaGFkb3dHZW5lcmF0b3JzO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zcGFyZW5jeUFzQ292ZXJhZ2UgPSBvcHRpb25zLnRyYW5zcGFyZW5jeUFzQ292ZXJhZ2UgPz8gdGhpcy50cmFuc3BhcmVuY3lBc0NvdmVyYWdlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZVJhbmdlUmVxdWVzdHMgPSBvcHRpb25zLnVzZVJhbmdlUmVxdWVzdHMgPz8gdGhpcy51c2VSYW5nZVJlcXVlc3RzO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUluc3RhbmNlcyA9IG9wdGlvbnMuY3JlYXRlSW5zdGFuY2VzID8/IHRoaXMuY3JlYXRlSW5zdGFuY2VzO1xyXG4gICAgICAgICAgICB0aGlzLmFsd2F5c0NvbXB1dGVCb3VuZGluZ0JveCA9IG9wdGlvbnMuYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94ID8/IHRoaXMuYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94O1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRBbGxNYXRlcmlhbHMgPSBvcHRpb25zLmxvYWRBbGxNYXRlcmlhbHMgPz8gdGhpcy5sb2FkQWxsTWF0ZXJpYWxzO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRPbmx5TWF0ZXJpYWxzID0gb3B0aW9ucy5sb2FkT25seU1hdGVyaWFscyA/PyB0aGlzLmxvYWRPbmx5TWF0ZXJpYWxzO1xyXG4gICAgICAgICAgICB0aGlzLnNraXBNYXRlcmlhbHMgPSBvcHRpb25zLnNraXBNYXRlcmlhbHMgPz8gdGhpcy5za2lwTWF0ZXJpYWxzO1xyXG4gICAgICAgICAgICB0aGlzLnVzZVNSR0JCdWZmZXJzID0gb3B0aW9ucy51c2VTUkdCQnVmZmVycyA/PyB0aGlzLnVzZVNSR0JCdWZmZXJzO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldEZwcyA9IG9wdGlvbnMudGFyZ2V0RnBzID8/IHRoaXMudGFyZ2V0RnBzO1xyXG4gICAgICAgICAgICB0aGlzLmFsd2F5c0NvbXB1dGVTa2VsZXRvblJvb3ROb2RlID0gb3B0aW9ucy5hbHdheXNDb21wdXRlU2tlbGV0b25Sb290Tm9kZSA/PyB0aGlzLmFsd2F5c0NvbXB1dGVTa2VsZXRvblJvb3ROb2RlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZUdsdGZUZXh0dXJlTmFtZXMgPSBvcHRpb25zLnVzZUdsdGZUZXh0dXJlTmFtZXMgPz8gdGhpcy51c2VHbHRmVGV4dHVyZU5hbWVzO1xyXG4gICAgICAgICAgICB0aGlzLnByZXByb2Nlc3NVcmxBc3luYyA9IG9wdGlvbnMucHJlcHJvY2Vzc1VybEFzeW5jID8/IHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jO1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbVJvb3ROb2RlID0gb3B0aW9ucy5jdXN0b21Sb290Tm9kZTtcclxuICAgICAgICAgICAgdGhpcy5vbk1lc2hMb2FkZWQgPSBvcHRpb25zLm9uTWVzaExvYWRlZDtcclxuICAgICAgICAgICAgdGhpcy5vblNraW5Mb2FkZWQgPSBvcHRpb25zLm9uU2tpbkxvYWRlZDtcclxuICAgICAgICAgICAgdGhpcy5vblRleHR1cmVMb2FkZWQgPSBvcHRpb25zLm9uVGV4dHVyZUxvYWRlZDtcclxuICAgICAgICAgICAgdGhpcy5vbk1hdGVyaWFsTG9hZGVkID0gb3B0aW9ucy5vbk1hdGVyaWFsTG9hZGVkO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2FtZXJhTG9hZGVkID0gb3B0aW9ucy5vbkNhbWVyYUxvYWRlZDtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25PcHRpb25zID0gb3B0aW9ucy5leHRlbnNpb25PcHRpb25zID8/IHRoaXMuZXh0ZW5zaW9uT3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIENvbW1vbiBvcHRpb25zXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmFpc2VkIHdoZW4gdGhlIGFzc2V0IGhhcyBiZWVuIHBhcnNlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25QYXJzZWQ/OiAoKGxvYWRlckRhdGE6IElHTFRGTG9hZGVyRGF0YSkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLVxyXG4gICAgLy8gVjIgb3B0aW9uc1xyXG4gICAgLy8gLS0tLS0tLS0tLVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvb3JkaW5hdGUgc3lzdGVtIG1vZGUuIERlZmF1bHRzIHRvIEFVVE8uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb29yZGluYXRlU3lzdGVtTW9kZSA9IEdMVEZMb2FkZXJDb29yZGluYXRlU3lzdGVtTW9kZS5BVVRPO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFuaW1hdGlvbiBzdGFydCBtb2RlLiBEZWZhdWx0cyB0byBGSVJTVC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFuaW1hdGlvblN0YXJ0TW9kZSA9IEdMVEZMb2FkZXJBbmltYXRpb25TdGFydE1vZGUuRklSU1Q7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGxvYWQgbm9kZSBhbmltYXRpb25zLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICogTk9URTogVGhlIGFuaW1hdGlvbiBvZiB0aGlzIG5vZGUgd2lsbCBzdGlsbCBsb2FkIGlmIHRoZSBub2RlIGlzIGFsc28gYSBqb2ludCBvZiBhIHNraW4gYW5kIGBsb2FkU2tpbnNgIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTm9kZUFuaW1hdGlvbnMgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBsb2FkIHNraW5zLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFNraW5zID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgbG9hZCBtb3JwaCB0YXJnZXRzLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1vcnBoVGFyZ2V0cyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGNvbXBpbGUgbWF0ZXJpYWxzIGJlZm9yZSByYWlzaW5nIHRoZSBzdWNjZXNzIGNhbGxiYWNrLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbXBpbGVNYXRlcmlhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgYWxzbyBjb21waWxlIG1hdGVyaWFscyB3aXRoIGNsaXAgcGxhbmVzLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZUNsaXBQbGFuZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBjb21waWxlIHNoYWRvdyBnZW5lcmF0b3JzIGJlZm9yZSByYWlzaW5nIHRoZSBzdWNjZXNzIGNhbGxiYWNrLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbXBpbGVTaGFkb3dHZW5lcmF0b3JzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBBbHBoYSBibGVuZGVkIG1hdGVyaWFscyBhcmUgb25seSBhcHBsaWVkIGFzIGNvdmVyYWdlLlxyXG4gICAgICogSWYgZmFsc2UsIChkZWZhdWx0KSBUaGUgbHVtaW5hbmNlIG9mIGVhY2ggcGl4ZWwgd2lsbCByZWR1Y2UgaXRzIG9wYWNpdHkgdG8gc2ltdWxhdGUgdGhlIGJlaGF2aW91ciBvZiBtb3N0IHBoeXNpY2FsIG1hdGVyaWFscy5cclxuICAgICAqIElmIHRydWUsIG5vIGV4dHJhIGVmZmVjdHMgYXJlIGFwcGxpZWQgdG8gdHJhbnNwYXJlbnQgcGl4ZWxzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJhbnNwYXJlbmN5QXNDb3ZlcmFnZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCB1c2UgcmFuZ2UgcmVxdWVzdHMgd2hlbiBsb2FkIGJpbmFyeSBnbFRGIGZpbGVzIGZyb20gSFRUUC5cclxuICAgICAqIEVuYWJsaW5nIHdpbGwgZGlzYWJsZSBvZmZsaW5lIHN1cHBvcnQgYW5kIGdsVEYgdmFsaWRhdG9yLlxyXG4gICAgICogRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VSYW5nZVJlcXVlc3RzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGNyZWF0ZSBpbnN0YW5jZXMgd2hlbiBtdWx0aXBsZSBnbFRGIG5vZGVzIHBvaW50IHRvIHRoZSBzYW1lIGdsVEYgbWVzaC4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0ZUluc3RhbmNlcyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGFsd2F5cyBjb21wdXRlIHRoZSBib3VuZGluZyBib3hlcyBvZiBtZXNoZXMgYW5kIG5vdCB1c2UgdGhlIG1pbi9tYXggdmFsdWVzIGZyb20gdGhlIHBvc2l0aW9uIGFjY2Vzc29yLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFsd2F5c0NvbXB1dGVCb3VuZGluZ0JveCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgbG9hZCBhbGwgbWF0ZXJpYWxzIGRlZmluZWQgaW4gdGhlIGZpbGUsIGV2ZW4gaWYgbm90IHVzZWQgYnkgYW55IG1lc2guIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFsbE1hdGVyaWFscyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgbG9hZCBvbmx5IHRoZSBtYXRlcmlhbHMgZGVmaW5lZCBpbiB0aGUgZmlsZS4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkT25seU1hdGVyaWFscyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgZG8gbm90IGxvYWQgYW55IG1hdGVyaWFscyBkZWZpbmVkIGluIHRoZSBmaWxlLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNraXBNYXRlcmlhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIGxvYWQgdGhlIGNvbG9yIChnYW1tYSBlbmNvZGVkKSB0ZXh0dXJlcyBpbnRvIHNSR0IgYnVmZmVycyAoaWYgc3VwcG9ydGVkIGJ5IHRoZSBHUFUpLCB3aGljaCB3aWxsIHlpZWxkIG1vcmUgYWNjdXJhdGUgcmVzdWx0cyB3aGVuIHNhbXBsaW5nIHRoZSB0ZXh0dXJlLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlU1JHQkJ1ZmZlcnMgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBsb2FkaW5nIGdsVEYgYW5pbWF0aW9ucywgd2hpY2ggYXJlIGRlZmluZWQgaW4gc2Vjb25kcywgdGFyZ2V0IHRoZW0gdG8gdGhpcyBGUFMuIERlZmF1bHRzIHRvIDYwLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdGFyZ2V0RnBzID0gNjA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGFsd2F5cyBjb21wdXRlIHRoZSBuZWFyZXN0IGNvbW1vbiBhbmNlc3RvciBvZiB0aGUgc2tlbGV0b24gam9pbnRzIGluc3RlYWQgb2YgdXNpbmcgYHNraW4uc2tlbGV0b25gLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqIFNldCB0aGlzIHRvIHRydWUgaWYgbG9hZGluZyBhc3NldHMgd2l0aCBpbnZhbGlkIGBza2luLnNrZWxldG9uYCB2YWx1ZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhbHdheXNDb21wdXRlU2tlbGV0b25Sb290Tm9kZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgdGhlIGxvYWRlciB3aWxsIGRlcml2ZSB0aGUgbmFtZSBmb3IgQmFieWxvbiB0ZXh0dXJlcyBmcm9tIHRoZSBnbFRGIHRleHR1cmUgbmFtZSwgaW1hZ2UgbmFtZSwgb3IgaW1hZ2UgdXJsLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqIE5vdGUgdGhhdCBpdCBpcyBwb3NzaWJsZSBmb3IgbXVsdGlwbGUgQmFieWxvbiB0ZXh0dXJlcyB0byBzaGFyZSB0aGUgc2FtZSBuYW1lIHdoZW4gdGhlIEJhYnlsb24gdGV4dHVyZXMgbG9hZCBmcm9tIHRoZSBzYW1lIGdsVEYgdGV4dHVyZSBvciBpbWFnZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZUdsdGZUZXh0dXJlTmFtZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBhIHVybCByZWZlcmVuY2VkIGJ5IHRoZSBhc3NldC5cclxuICAgICAqIEBwYXJhbSB1cmwgdXJsIHJlZmVyZW5jZWQgYnkgdGhlIGFzc2V0XHJcbiAgICAgKiBAcmV0dXJucyBBc3luYyB1cmwgdG8gbG9hZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHJlcHJvY2Vzc1VybEFzeW5jID0gKHVybDogc3RyaW5nKSA9PiBQcm9taXNlLnJlc29sdmUodXJsKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIG5vZGUgdG8gdXNlIGFzIHRoZSByb290IG9mIHRoZSBoaWVyYXJjaHkgd2hlbiBsb2FkaW5nIHRoZSBzY2VuZSAoZGVmYXVsdDogdW5kZWZpbmVkKS4gSWYgbm90IGRlZmluZWQsIGEgcm9vdCBub2RlIHdpbGwgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkLlxyXG4gICAgICogWW91IGNhbiBhbHNvIHBhc3MgbnVsbCBpZiB5b3UgZG9uJ3Qgd2FudCBhIHJvb3Qgbm9kZSB0byBiZSBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VzdG9tUm9vdE5vZGU/OiBOdWxsYWJsZTxUcmFuc2Zvcm1Ob2RlPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1lc2ggYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBtZXNoLlxyXG4gICAgICogTm90ZSB0aGF0IHRoZSBjYWxsYmFjayBpcyBjYWxsZWQgYXMgc29vbiBhcyB0aGUgbWVzaCBvYmplY3QgaXMgY3JlYXRlZCwgbWVhbmluZyBzb21lIGRhdGEgbWF5IG5vdCBoYXZlIGJlZW4gc2V0dXAgeWV0IGZvciB0aGlzIG1lc2ggKHZlcnRleCBkYXRhLCBtb3JwaCB0YXJnZXRzLCBtYXRlcmlhbCwgLi4uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25NZXNoTG9hZGVkPzogKChtZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgc2tpbiBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIHNraW4gbm9kZS5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2ltcG9ydGVycy9nbFRGL2dsVEZTa2lubmluZyNpZ25vcmluZy10aGUtdHJhbnNmb3JtLW9mLXRoZS1za2lubmVkLW1lc2hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IG9uU2tpbkxvYWRlZD86ICgobm9kZTogVHJhbnNmb3JtTm9kZSwgc2tpbm5lZE5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgdGV4dHVyZSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIHRleHR1cmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvblRleHR1cmVMb2FkZWQ/OiAoKHRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbk1hdGVyaWFsTG9hZGVkPzogKChtYXRlcmlhbDogTWF0ZXJpYWwpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgY2FtZXJhIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgY2FtZXJhLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25DYW1lcmFMb2FkZWQ/OiAoKGNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgZ2xURiBleHRlbnNpb25zLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXh0ZW5zaW9uT3B0aW9uczoge1xyXG4gICAgICAgIC8vIE5PVEU6IFRoaXMgdHlwZSBpcyBkb2luZyB0d28gdGhpbmdzOlxyXG4gICAgICAgIC8vIDEuIEFkZGluZyBhbiBpbXBsaWNpdCAnZW5hYmxlZCcgcHJvcGVydHkgdG8gdGhlIG9wdGlvbnMgZm9yIGVhY2ggZXh0ZW5zaW9uLlxyXG4gICAgICAgIC8vIDIuIENyZWF0aW5nIGEgbWFwcGVkIHR5cGUgb2YgYWxsIHRoZSBvcHRpb25zIG9mIGFsbCB0aGUgZXh0ZW5zaW9ucyB0byBtYWtlIGl0IGp1c3QgbG9vayBsaWtlIGEgY29uc29saWRhdGVkIHBsYWluIG9iamVjdCBpbiBpbnRlbGxpc2Vuc2UgZm9yIHRoZSB1c2VyLlxyXG4gICAgICAgIFtFeHRlbnNpb24gaW4ga2V5b2YgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnNdPzoge1xyXG4gICAgICAgICAgICBbT3B0aW9uIGluIGtleW9mIERlZmF1bHRFeHRlbnNpb25PcHRpb25zPEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zW0V4dGVuc2lvbl0+XTogRGVmYXVsdEV4dGVuc2lvbk9wdGlvbnM8R0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnNbRXh0ZW5zaW9uXT5bT3B0aW9uXTtcclxuICAgICAgICB9O1xyXG4gICAgfSA9IHt9O1xyXG59XHJcblxyXG4vKipcclxuICogRmlsZSBsb2FkZXIgZm9yIGxvYWRpbmcgZ2xURiBmaWxlcyBpbnRvIGEgc2NlbmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURkZpbGVMb2FkZXIgZXh0ZW5kcyBHTFRGTG9hZGVyT3B0aW9ucyBpbXBsZW1lbnRzIElEaXNwb3NhYmxlLCBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYywgSVNjZW5lTG9hZGVyUGx1Z2luRmFjdG9yeSB7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVHTFRGMUxvYWRlcjogKHBhcmVudDogR0xURkZpbGVMb2FkZXIpID0+IElHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZUdMVEYyTG9hZGVyOiAocGFyZW50OiBHTFRGRmlsZUxvYWRlcikgPT4gSUdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGdsVEYgZmlsZSBsb2FkZXIuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIGxvYWRlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9ucz86IFBhcnRpYWw8UmVhZG9ubHk8R0xURkxvYWRlck9wdGlvbnM+Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb3B5RnJvbShvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQmVnaW4gQ29tbW9uIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWlzZWQgd2hlbiB0aGUgYXNzZXQgaGFzIGJlZW4gcGFyc2VkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblBhcnNlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxJR0xURkxvYWRlckRhdGE+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25QYXJzZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8SUdMVEZMb2FkZXJEYXRhPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWlzZWQgd2hlbiB0aGUgYXNzZXQgaGFzIGJlZW4gcGFyc2VkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25QYXJzZWQoY2FsbGJhY2s6ICgobG9hZGVyRGF0YTogSUdMVEZMb2FkZXJEYXRhKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vblBhcnNlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vblBhcnNlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uUGFyc2VkT2JzZXJ2ZXIgPSB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEVuZCBDb21tb24gb3B0aW9uc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQmVnaW4gVjEgb3B0aW9uc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoaXMgcHJvcGVydHkgdG8gZmFsc2UgdG8gZGlzYWJsZSBpbmNyZW1lbnRhbCBsb2FkaW5nIHdoaWNoIGRlbGF5cyB0aGUgbG9hZGVyIGZyb20gY2FsbGluZyB0aGUgc3VjY2VzcyBjYWxsYmFjayB1bnRpbCBhZnRlciBsb2FkaW5nIHRoZSBtZXNoZXMgYW5kIHNoYWRlcnMuXHJcbiAgICAgKiBUZXh0dXJlcyBhbHdheXMgbG9hZHMgYXN5bmNocm9ub3VzbHkuIEZvciBleGFtcGxlLCB0aGUgc3VjY2VzcyBjYWxsYmFjayBjYW4gY29tcHV0ZSB0aGUgYm91bmRpbmcgaW5mb3JtYXRpb24gb2YgdGhlIGxvYWRlZCBtZXNoZXMgd2hlbiBpbmNyZW1lbnRhbCBsb2FkaW5nIGlzIGRpc2FibGVkLlxyXG4gICAgICogRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEluY3JlbWVudGFsTG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhpcyBwcm9wZXJ0eSB0byB0cnVlIGluIG9yZGVyIHRvIHdvcmsgd2l0aCBob21vZ2VuZW91cyBjb29yZGluYXRlcywgYXZhaWxhYmxlIHdpdGggc29tZSBjb252ZXJ0ZXJzIGFuZCBleHBvcnRlcnMuXHJcbiAgICAgKiBEZWZhdWx0cyB0byBmYWxzZS4gU2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hvbW9nZW5lb3VzX2Nvb3JkaW5hdGVzLlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSG9tb2dlbmVvdXNDb29yZGluYXRlcyA9IGZhbHNlO1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBFbmQgVjEgb3B0aW9uc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgbWVzaCBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIG1lc2guXHJcbiAgICAgKiBOb3RlIHRoYXQgdGhlIG9ic2VydmFibGUgaXMgcmFpc2VkIGFzIHNvb24gYXMgdGhlIG1lc2ggb2JqZWN0IGlzIGNyZWF0ZWQsIG1lYW5pbmcgc29tZSBkYXRhIG1heSBub3QgaGF2ZSBiZWVuIHNldHVwIHlldCBmb3IgdGhpcyBtZXNoICh2ZXJ0ZXggZGF0YSwgbW9ycGggdGFyZ2V0cywgbWF0ZXJpYWwsIC4uLilcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uTWVzaExvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxBYnN0cmFjdE1lc2g+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25NZXNoTG9hZGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPEFic3RyYWN0TWVzaD4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgbWVzaCBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIG1lc2guXHJcbiAgICAgKiBOb3RlIHRoYXQgdGhlIGNhbGxiYWNrIGlzIGNhbGxlZCBhcyBzb29uIGFzIHRoZSBtZXNoIG9iamVjdCBpcyBjcmVhdGVkLCBtZWFuaW5nIHNvbWUgZGF0YSBtYXkgbm90IGhhdmUgYmVlbiBzZXR1cCB5ZXQgZm9yIHRoaXMgbWVzaCAodmVydGV4IGRhdGEsIG1vcnBoIHRhcmdldHMsIG1hdGVyaWFsLCAuLi4pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25NZXNoTG9hZGVkKGNhbGxiYWNrOiAoKG1lc2g6IEFic3RyYWN0TWVzaCkgPT4gdm9pZCkgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25NZXNoTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk1lc2hMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbk1lc2hMb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9vbk1lc2hMb2FkZWRPYnNlcnZlciA9IHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgc2tpbiBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIHNraW4gbm9kZS5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2ltcG9ydGVycy9nbFRGL2dsVEZTa2lubmluZyNpZ25vcmluZy10aGUtdHJhbnNmb3JtLW9mLXRoZS1za2lubmVkLW1lc2hcclxuICAgICAqIEBwYXJhbSBub2RlIC0gdGhlIHRyYW5zZm9ybSBub2RlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIG9yaWdpbmFsIGdsVEYgc2tpbiBub2RlIHVzZWQgZm9yIGFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBza2lubmVkTm9kZSAtIHRoZSB0cmFuc2Zvcm0gbm9kZSB0aGF0IGlzIHRoZSBza2lubmVkIG1lc2ggaXRzZWxmIG9yIHRoZSBwYXJlbnQgb2YgdGhlIHNraW5uZWQgbWVzaGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvblNraW5Mb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8eyBub2RlOiBUcmFuc2Zvcm1Ob2RlOyBza2lubmVkTm9kZTogVHJhbnNmb3JtTm9kZSB9PigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uU2tpbkxvYWRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjx7IG5vZGU6IFRyYW5zZm9ybU5vZGU7IHNraW5uZWROb2RlOiBUcmFuc2Zvcm1Ob2RlIH0+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHNraW4gYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBza2luIG5vZGUuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9pbXBvcnRlcnMvZ2xURi9nbFRGU2tpbm5pbmcjaWdub3JpbmctdGhlLXRyYW5zZm9ybS1vZi10aGUtc2tpbm5lZC1tZXNoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25Ta2luTG9hZGVkKGNhbGxiYWNrOiAoKG5vZGU6IFRyYW5zZm9ybU5vZGUsIHNraW5uZWROb2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vblNraW5Mb2FkZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2tpbkxvYWRlZE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uU2tpbkxvYWRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uU2tpbkxvYWRlZE9ic2VydmVyID0gdGhpcy5vblNraW5Mb2FkZWRPYnNlcnZhYmxlLmFkZCgoZGF0YSkgPT4gY2FsbGJhY2soZGF0YS5ub2RlLCBkYXRhLnNraW5uZWROb2RlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSB0ZXh0dXJlIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgdGV4dHVyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uVGV4dHVyZUxvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxCYXNlVGV4dHVyZT4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vblRleHR1cmVMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8QmFzZVRleHR1cmU+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHRleHR1cmUgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSB0ZXh0dXJlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uVGV4dHVyZUxvYWRlZChjYWxsYmFjazogKCh0ZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4gdm9pZCkgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vblRleHR1cmVMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vblRleHR1cmVMb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9vblRleHR1cmVMb2FkZWRPYnNlcnZlciA9IHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgbWF0ZXJpYWwgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBtYXRlcmlhbC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uTWF0ZXJpYWxMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8TWF0ZXJpYWw+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25NYXRlcmlhbExvYWRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxNYXRlcmlhbD4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgbWF0ZXJpYWwgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBtYXRlcmlhbC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbk1hdGVyaWFsTG9hZGVkKGNhbGxiYWNrOiAoKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZCkgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25NYXRlcmlhbExvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uTWF0ZXJpYWxMb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uTWF0ZXJpYWxMb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBjYW1lcmEgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBjYW1lcmEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkNhbWVyYUxvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxDYW1lcmE+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25DYW1lcmFMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8Q2FtZXJhPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBjYW1lcmEgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBjYW1lcmEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25DYW1lcmFMb2FkZWQoY2FsbGJhY2s6ICgoY2FtZXJhOiBDYW1lcmEpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uQ2FtZXJhTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNhbWVyYUxvYWRlZE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uQ2FtZXJhTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fb25DYW1lcmFMb2FkZWRPYnNlcnZlciA9IHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQsIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgbG9hZGVyIGlzIGRpc3Bvc2VkLlxyXG4gICAgICogRm9yIGFzc2V0cyB3aXRoIExPRHMsIHJhaXNlZCB3aGVuIGFsbCBvZiB0aGUgTE9EcyBhcmUgY29tcGxldGUuXHJcbiAgICAgKiBGb3IgYXNzZXRzIHdpdGhvdXQgTE9EcywgcmFpc2VkIHdoZW4gdGhlIG1vZGVsIGlzIGNvbXBsZXRlLCBpbW1lZGlhdGVseSBhZnRlciB0aGUgbG9hZGVyIHJlc29sdmVzIHRoZSByZXR1cm5lZCBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25Db21wbGV0ZU9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTx2b2lkPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uQ29tcGxldGVPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8dm9pZD4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGFzc2V0IGlzIGNvbXBsZXRlbHkgbG9hZGVkLCBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGxvYWRlciBpcyBkaXNwb3NlZC5cclxuICAgICAqIEZvciBhc3NldHMgd2l0aCBMT0RzLCByYWlzZWQgd2hlbiBhbGwgb2YgdGhlIExPRHMgYXJlIGNvbXBsZXRlLlxyXG4gICAgICogRm9yIGFzc2V0cyB3aXRob3V0IExPRHMsIHJhaXNlZCB3aGVuIHRoZSBtb2RlbCBpcyBjb21wbGV0ZSwgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGxvYWRlciByZXNvbHZlcyB0aGUgcmV0dXJuZWQgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbkNvbXBsZXRlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uQ29tcGxldGVPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGVPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkNvbXBsZXRlT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbkNvbXBsZXRlT2JzZXJ2ZXIgPSB0aGlzLm9uQ29tcGxldGVPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIGFuIGVycm9yIG9jY3Vycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uRXJyb3JPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8YW55PigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uRXJyb3JPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8YW55Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25FcnJvcihjYWxsYmFjazogKHJlYXNvbjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uRXJyb3JPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3JPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkVycm9yT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbkVycm9yT2JzZXJ2ZXIgPSB0aGlzLm9uRXJyb3JPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCBhZnRlciB0aGUgbG9hZGVyIGlzIGRpc3Bvc2VkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25EaXNwb3NlT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPHZvaWQ+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EaXNwb3NlT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPHZvaWQ+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCBhZnRlciB0aGUgbG9hZGVyIGlzIGRpc3Bvc2VkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uRGlzcG9zZShjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkRpc3Bvc2VPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGlzcG9zZU9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uRGlzcG9zZU9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25EaXNwb3NlT2JzZXJ2ZXIgPSB0aGlzLm9uRGlzcG9zZU9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIGFmdGVyIGEgbG9hZGVyIGV4dGVuc2lvbiBpcyBjcmVhdGVkLlxyXG4gICAgICogU2V0IGFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgYSBsb2FkZXIgZXh0ZW5zaW9uIGluIHRoaXMgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkV4dGVuc2lvbkxvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxJR0xURkxvYWRlckV4dGVuc2lvbj4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxJR0xURkxvYWRlckV4dGVuc2lvbj4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIGFmdGVyIGEgbG9hZGVyIGV4dGVuc2lvbiBpcyBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uRXh0ZW5zaW9uTG9hZGVkKGNhbGxiYWNrOiAoZXh0ZW5zaW9uOiBJR0xURkxvYWRlckV4dGVuc2lvbikgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FeHRlbnNpb25Mb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZlciA9IHRoaXMub25FeHRlbnNpb25Mb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgbG9nZ2luZyBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxvZ2dpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2dnaW5nRW5hYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGxvZ2dpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvZ2dpbmdFbmFibGVkID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sb2dnaW5nRW5hYmxlZCA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbG9nZ2luZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nID0gdGhpcy5fbG9nRW5hYmxlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cgPSB0aGlzLl9sb2dEaXNhYmxlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGNhcHR1cmUgcGVyZm9ybWFuY2UgY291bnRlcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycykge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRW5hYmxlZDtcclxuICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyRW5hYmxlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgdmFsaWRhdGUgdGhlIGFzc2V0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsaWRhdGUgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIGFmdGVyIHZhbGlkYXRpb24gd2hlbiB2YWxpZGF0ZSBpcyBzZXQgdG8gdHJ1ZS4gVGhlIGV2ZW50IGRhdGEgaXMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uVmFsaWRhdGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25WYWxpZGF0ZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8R0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cz4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIGFmdGVyIGEgbG9hZGVyIGV4dGVuc2lvbiBpcyBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uVmFsaWRhdGVkKGNhbGxiYWNrOiAocmVzdWx0czogR0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cykgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vblZhbGlkYXRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vblZhbGlkYXRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25WYWxpZGF0ZWRPYnNlcnZlciA9IHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBOdWxsYWJsZTxJR0xURkxvYWRlcj4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IE51bGxhYmxlPEdMVEZMb2FkZXJTdGF0ZT4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfcHJvZ3Jlc3NDYWxsYmFjaz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICAgIHByaXZhdGUgX3JlcXVlc3RzID0gbmV3IEFycmF5PElGaWxlUmVxdWVzdEluZm8+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBsb2FkZXIgKFwiZ2x0ZlwiKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IEdMVEZGaWxlTG9hZGVyTWV0YWRhdGEubmFtZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZXh0ZW5zaW9ucyA9IEdMVEZGaWxlTG9hZGVyTWV0YWRhdGEuZXh0ZW5zaW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIHRoZSBsb2FkZXIsIHJlbGVhc2VzIHJlc291cmNlcyBkdXJpbmcgbG9hZCwgYW5kIGNhbmNlbHMgYW55IG91dHN0YW5kaW5nIHJlcXVlc3RzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgdGhpcy5fcmVxdWVzdHMpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jID0gKHVybCkgPT4gUHJvbWlzZS5yZXNvbHZlKHVybCk7XHJcblxyXG4gICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Ta2luTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICB0aGlzLm9uRGlzcG9zZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcgfCBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IHVua25vd24sIHJlc3BvbnNlVVJMPzogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXY6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgdXNlQXJyYXlCdWZmZXI/OiBib29sZWFuLFxyXG4gICAgICAgIG9uRXJyb3I/OiAocmVxdWVzdD86IFdlYlJlcXVlc3QsIGV4Y2VwdGlvbj86IExvYWRGaWxlRXJyb3IpID0+IHZvaWQsXHJcbiAgICAgICAgbmFtZT86IHN0cmluZ1xyXG4gICAgKTogTnVsbGFibGU8SUZpbGVSZXF1ZXN0PiB7XHJcbiAgICAgICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhmaWxlT3JVcmwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRCaW5hcnkoc2NlbmUsIGZpbGVPclVybCwgcm9vdFVybCwgb25TdWNjZXNzLCBvbkVycm9yLCBuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrID0gb25Qcm9ncmVzcztcclxuXHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSAoZmlsZU9yVXJsIGFzIEZpbGUpLm5hbWUgfHwgVG9vbHMuR2V0RmlsZW5hbWUoZmlsZU9yVXJsIGFzIHN0cmluZyk7XHJcblxyXG4gICAgICAgIGlmICh1c2VBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VSYW5nZVJlcXVlc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiZ2xURiB2YWxpZGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiByYW5nZSByZXF1ZXN0cyBhcmUgZW5hYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUmVxdWVzdDogSUZpbGVSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlT2JzZXJ2YWJsZTogbmV3IE9ic2VydmFibGU8SUZpbGVSZXF1ZXN0PigpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQnVmZmVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVPclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBVaW50OEFycmF5KGRhdGEgYXMgQXJyYXlCdWZmZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2ViUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJSYW5nZVwiLCBgYnl0ZXM9JHtieXRlT2Zmc2V0fS0ke2J5dGVPZmZzZXQgKyBieXRlTGVuZ3RoIC0gMX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IDAsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKG5ldyBEYXRhUmVhZGVyKGRhdGFCdWZmZXIpKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZXF1ZXN0Lm9uQ29tcGxldGVPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhmaWxlUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyhsb2FkZXJEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbGVSZXF1ZXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEZpbGUoXHJcbiAgICAgICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgICAgIGZpbGVPclVybCxcclxuICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsaWRhdGUoc2NlbmUsIG5ldyBVaW50OEFycmF5KGRhdGEgYXMgQXJyYXlCdWZmZXIsIDAsIChkYXRhIGFzIEFycmF5QnVmZmVyKS5ieXRlTGVuZ3RoKSwgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0YVJlYWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkQXN5bmM6IChieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSA9PiByZWFkQXN5bmMoZGF0YSBhcyBBcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiAoZGF0YSBhcyBBcnJheUJ1ZmZlcikuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobG9hZGVyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgICAgICBmaWxlT3JVcmwsXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBkYXRhIGFzIHN0cmluZywgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoeyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YSBhcyBzdHJpbmcpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb25FcnJvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQmluYXJ5KFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IHVua25vd24sIHJlc3BvbnNlVVJMPzogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I/OiAocmVxdWVzdD86IFdlYlJlcXVlc3QsIGV4Y2VwdGlvbj86IExvYWRGaWxlRXJyb3IpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpLCByb290VXJsLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5fdW5wYWNrQmluYXJ5QXN5bmMoXHJcbiAgICAgICAgICAgIG5ldyBEYXRhUmVhZGVyKHtcclxuICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IHJlYWRWaWV3QXN5bmMoZGF0YSwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiBkYXRhLmJ5dGVMZW5ndGgsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAobG9hZGVyRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKGxvYWRlckRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yID8gKGVycm9yKSA9PiBvbkVycm9yKHVuZGVmaW5lZCwgZXJyb3IpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW1wb3J0TWVzaEFzeW5jKFxyXG4gICAgICAgIG1lc2hlc05hbWVzOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGRhdGE6IElHTFRGTG9hZGVyRGF0YSxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICBmaWxlTmFtZT86IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9nKGBMb2FkaW5nICR7ZmlsZU5hbWUgfHwgXCJcIn1gKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyID0gdGhpcy5fZ2V0TG9hZGVyKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmltcG9ydE1lc2hBc3luYyhtZXNoZXNOYW1lcywgc2NlbmUsIG51bGwsIGRhdGEsIHJvb3RVcmwsIG9uUHJvZ3Jlc3MsIGZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsIGZpbGVOYW1lPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2coYExvYWRpbmcgJHtmaWxlTmFtZSB8fCBcIlwifWApO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIgPSB0aGlzLl9nZXRMb2FkZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZEFzeW5jKHNjZW5lLCBkYXRhLCByb290VXJsLCBvblByb2dyZXNzLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBc3NldENvbnRhaW5lckFzeW5jKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICk6IFByb21pc2U8QXNzZXRDb250YWluZXI+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhgTG9hZGluZyAke2ZpbGVOYW1lIHx8IFwiXCJ9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IHRoaXMuX2dldExvYWRlcihkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIGFzc2V0IGNvbnRhaW5lci5cclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEFzc2V0Q29udGFpbmVyKHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBtYXRlcmlhbHMvdGV4dHVyZXMgd2hlbiBsb2FkaW5nIHRvIGFkZCB0byBjb250YWluZXJcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzOiBBcnJheTxNYXRlcmlhbD4gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlczogQXJyYXk8QmFzZVRleHR1cmU+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVzLnB1c2godGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmFzOiBBcnJheTxDYW1lcmE+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLmFkZCgoY2FtZXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFzLnB1c2goY2FtZXJhKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXJzOiBBcnJheTxNb3JwaFRhcmdldE1hbmFnZXI+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0TWFuYWdlcnMucHVzaChtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5pbXBvcnRNZXNoQXN5bmMobnVsbCwgc2NlbmUsIGNvbnRhaW5lciwgZGF0YSwgcm9vdFVybCwgb25Qcm9ncmVzcywgZmlsZU5hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmdlb21ldHJpZXMsIHJlc3VsdC5nZW9tZXRyaWVzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5tZXNoZXMsIHJlc3VsdC5tZXNoZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLnBhcnRpY2xlU3lzdGVtcywgcmVzdWx0LnBhcnRpY2xlU3lzdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuc2tlbGV0b25zLCByZXN1bHQuc2tlbGV0b25zKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5hbmltYXRpb25Hcm91cHMsIHJlc3VsdC5hbmltYXRpb25Hcm91cHMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLm1hdGVyaWFscywgbWF0ZXJpYWxzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci50ZXh0dXJlcywgdGV4dHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmxpZ2h0cywgcmVzdWx0LmxpZ2h0cyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIudHJhbnNmb3JtTm9kZXMsIHJlc3VsdC50cmFuc2Zvcm1Ob2Rlcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuY2FtZXJhcywgY2FtZXJhcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIubW9ycGhUYXJnZXRNYW5hZ2VycywgbW9ycGhUYXJnZXRNYW5hZ2Vycyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2FuRGlyZWN0TG9hZChkYXRhOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gR0xURkZpbGVMb2FkZXJNZXRhZGF0YS5jYW5EaXJlY3RMb2FkKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXJlY3RMb2FkKHNjZW5lOiBTY2VuZSwgZGF0YTogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcImJhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpIHx8IC8vIHRoaXMgaXMgdGVjaG5pY2FsbHkgaW5jb3JyZWN0LCBidXQgd2lsbCBjb250aW51ZSB0byBzdXBwb3J0IGZvciBiYWNrY29tcGF0LlxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCI7YmFzZTY0LFwiICsgR0xURk1hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpIHx8XHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcIm1vZGVsL2dsdGYtYmluYXJ5O2Jhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gRGVjb2RlQmFzZTY0VXJsVG9CaW5hcnkoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0ZShzY2VuZSwgbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIDAsIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgbmV3IERhdGFSZWFkZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IHJlYWRBc3luYyhhcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZShzY2VuZSwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjYWxsYmFjayB0aGF0IGFsbG93cyBjdXN0b20gaGFuZGxpbmcgb2YgdGhlIHJvb3QgdXJsIGJhc2VkIG9uIHRoZSByZXNwb25zZSB1cmwuXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCB0aGUgb3JpZ2luYWwgcm9vdCB1cmxcclxuICAgICAqIEBwYXJhbSByZXNwb25zZVVSTCB0aGUgcmVzcG9uc2UgdXJsIGlmIGF2YWlsYWJsZVxyXG4gICAgICogQHJldHVybnMgdGhlIG5ldyByb290IHVybFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmV3cml0ZVJvb3RVUkw/KHJvb3RVcmw6IHN0cmluZywgcmVzcG9uc2VVUkw/OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVBsdWdpbihvcHRpb25zOiBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMpOiBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHTFRGRmlsZUxvYWRlcihvcHRpb25zW0dMVEZGaWxlTG9hZGVyTWV0YWRhdGEubmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxvYWRlciBzdGF0ZSBvciBudWxsIGlmIHRoZSBsb2FkZXIgaXMgbm90IGFjdGl2ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBsb2FkZXJTdGF0ZSgpOiBOdWxsYWJsZTxHTFRGTG9hZGVyU3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgc3RhdGUgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uTG9hZGVyU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE51bGxhYmxlPEdMVEZMb2FkZXJTdGF0ZT4+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFzc2V0IGlzIGNvbXBsZXRlbHkgbG9hZGVkLlxyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aGVuQ29tcGxldGVBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGVPYnNlcnZhYmxlLmFkZE9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5hZGRPbmNlKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3NldFN0YXRlKHN0YXRlOiBHTFRGTG9hZGVyU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5vbkxvYWRlclN0YXRlQ2hhbmdlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB0aGlzLl9sb2coR0xURkxvYWRlclN0YXRlW3RoaXMuX3N0YXRlXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkRmlsZShcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IHN0cmluZyB8IEFycmF5QnVmZmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIHVzZUFycmF5QnVmZmVyPzogYm9vbGVhbixcclxuICAgICAgICBvbkVycm9yPzogKHJlcXVlc3Q/OiBXZWJSZXF1ZXN0KSA9PiB2b2lkLFxyXG4gICAgICAgIG9uT3BlbmVkPzogKHJlcXVlc3Q6IFdlYlJlcXVlc3QpID0+IHZvaWRcclxuICAgICk6IElGaWxlUmVxdWVzdCB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHNjZW5lLl9sb2FkRmlsZShcclxuICAgICAgICAgICAgZmlsZU9yVXJsLFxyXG4gICAgICAgICAgICBvblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Qcm9ncmVzcyhldmVudCwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIHVzZUFycmF5QnVmZmVyLFxyXG4gICAgICAgICAgICBvbkVycm9yLFxyXG4gICAgICAgICAgICBvbk9wZW5lZFxyXG4gICAgICAgICkgYXMgSUZpbGVSZXF1ZXN0SW5mbztcclxuICAgICAgICByZXF1ZXN0Lm9uQ29tcGxldGVPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEZvcmNlIHRoZSBsZW5ndGggY29tcHV0YWJsZSB0byBiZSB0cnVlIHNpbmNlIHdlIGNhbiBndWFyYW50ZWUgdGhlIGRhdGEgaXMgbG9hZGVkLlxyXG4gICAgICAgICAgICByZXF1ZXN0Ll9sZW5ndGhDb21wdXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVxdWVzdC5fdG90YWwgPSByZXF1ZXN0Ll9sb2FkZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMucHVzaChyZXF1ZXN0KTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vblByb2dyZXNzKGV2ZW50OiBQcm9ncmVzc0V2ZW50LCByZXF1ZXN0OiBJRmlsZVJlcXVlc3RJbmZvKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wcm9ncmVzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGUgPSBldmVudC5sZW5ndGhDb21wdXRhYmxlO1xyXG4gICAgICAgIHJlcXVlc3QuX2xvYWRlZCA9IGV2ZW50LmxvYWRlZDtcclxuICAgICAgICByZXF1ZXN0Ll90b3RhbCA9IGV2ZW50LnRvdGFsO1xyXG5cclxuICAgICAgICBsZXQgbGVuZ3RoQ29tcHV0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGxvYWRlZCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgdGhpcy5fcmVxdWVzdHMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGUgPT09IHVuZGVmaW5lZCB8fCByZXF1ZXN0Ll9sb2FkZWQgPT09IHVuZGVmaW5lZCB8fCByZXF1ZXN0Ll90b3RhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGUgPSBsZW5ndGhDb21wdXRhYmxlICYmIHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGU7XHJcbiAgICAgICAgICAgIGxvYWRlZCArPSByZXF1ZXN0Ll9sb2FkZWQ7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IHJlcXVlc3QuX3RvdGFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NDYWxsYmFjayh7XHJcbiAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGU6IGxlbmd0aENvbXB1dGFibGUsXHJcbiAgICAgICAgICAgIGxvYWRlZDogbG9hZGVkLFxyXG4gICAgICAgICAgICB0b3RhbDogbGVuZ3RoQ29tcHV0YWJsZSA/IHRvdGFsIDogMCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF92YWxpZGF0ZShzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXksIHJvb3RVcmwgPSBcIlwiLCBmaWxlTmFtZSA9IFwiXCIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoXCJWYWxpZGF0ZSBKU09OXCIpO1xyXG4gICAgICAgIEdMVEZWYWxpZGF0aW9uLlZhbGlkYXRlQXN5bmMoZGF0YSwgcm9vdFVybCwgZmlsZU5hbWUsICh1cmkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jKHJvb3RVcmwgKyB1cmkpLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjZW5lLl9sb2FkRmlsZUFzeW5jKHVybCwgdW5kZWZpbmVkLCB0cnVlLCB0cnVlKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEsIDAsIGRhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYEZhaWxlZCB0byB2YWxpZGF0ZTogJHtyZWFzb24ubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldExvYWRlcihsb2FkZXJEYXRhOiBJR0xURkxvYWRlckRhdGEpOiBJR0xURkxvYWRlciB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSAoPGFueT5sb2FkZXJEYXRhLmpzb24pLmFzc2V0IHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9sb2coYEFzc2V0IHZlcnNpb246ICR7YXNzZXQudmVyc2lvbn1gKTtcclxuICAgICAgICBhc3NldC5taW5WZXJzaW9uICYmIHRoaXMuX2xvZyhgQXNzZXQgbWluaW11bSB2ZXJzaW9uOiAke2Fzc2V0Lm1pblZlcnNpb259YCk7XHJcbiAgICAgICAgYXNzZXQuZ2VuZXJhdG9yICYmIHRoaXMuX2xvZyhgQXNzZXQgZ2VuZXJhdG9yOiAke2Fzc2V0LmdlbmVyYXRvcn1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmVyc2lvbjogXCIgKyBhc3NldC52ZXJzaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc3NldC5taW5WZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWluVmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIGlmICghbWluVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBtaW5pbXVtIHZlcnNpb246IFwiICsgYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChHTFRGRmlsZUxvYWRlci5fY29tcGFyZVZlcnNpb24obWluVmVyc2lvbiwgeyBtYWpvcjogMiwgbWlub3I6IDAgfSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvbXBhdGlibGUgbWluaW11bSB2ZXJzaW9uOiBcIiArIGFzc2V0Lm1pblZlcnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXJzOiB7IFtrZXk6IG51bWJlcl06IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlciB9ID0ge1xyXG4gICAgICAgICAgICAxOiBHTFRGRmlsZUxvYWRlci5fQ3JlYXRlR0xURjFMb2FkZXIsXHJcbiAgICAgICAgICAgIDI6IEdMVEZGaWxlTG9hZGVyLl9DcmVhdGVHTFRGMkxvYWRlcixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXIgPSBjcmVhdGVMb2FkZXJzW3ZlcnNpb24ubWFqb3JdO1xyXG4gICAgICAgIGlmICghY3JlYXRlTG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlTG9hZGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BhcnNlSnNvbihqc29uOiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICB0aGlzLl9sb2coYEpTT04gbGVuZ3RoOiAke2pzb24ubGVuZ3RofWApO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeUFzeW5jKGRhdGFSZWFkZXI6IERhdGFSZWFkZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiVW5wYWNrIEJpbmFyeVwiKTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCBtYWdpYyArIHZlcnNpb24gKyBsZW5ndGggKyBqc29uIGxlbmd0aCArIGpzb24gZm9ybWF0XHJcbiAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDIwKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgQmluYXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgTWFnaWM6IDB4NDY1NDZjNjcsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWdpYyA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICBpZiAobWFnaWMgIT09IEJpbmFyeS5NYWdpYykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcIlVuZXhwZWN0ZWQgbWFnaWM6IFwiICsgbWFnaWMsIEVycm9yQ29kZXMuR0xURkxvYWRlclVuZXhwZWN0ZWRNYWdpY0Vycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmVyc2lvbiA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nZ2luZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZyhgQmluYXJ5IHZlcnNpb246ICR7dmVyc2lvbn1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VSYW5nZVJlcXVlc3RzICYmIGxlbmd0aCAhPT0gZGF0YVJlYWRlci5idWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYExlbmd0aCBpbiBoZWFkZXIgZG9lcyBub3QgbWF0Y2ggYWN0dWFsIGRhdGEgbGVuZ3RoOiAke2xlbmd0aH0gIT0gJHtkYXRhUmVhZGVyLmJ1ZmZlci5ieXRlTGVuZ3RofWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdW5wYWNrZWQ6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPjtcclxuICAgICAgICAgICAgc3dpdGNoICh2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZCA9IHRoaXMuX3VucGFja0JpbmFyeVYxQXN5bmMoZGF0YVJlYWRlciwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVucGFja2VkID0gdGhpcy5fdW5wYWNrQmluYXJ5VjJBc3luYyhkYXRhUmVhZGVyLCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgdmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihcIlVucGFjayBCaW5hcnlcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdW5wYWNrZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdW5wYWNrQmluYXJ5VjFBc3luYyhkYXRhUmVhZGVyOiBEYXRhUmVhZGVyLCBsZW5ndGg6IG51bWJlcik6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiB7XHJcbiAgICAgICAgY29uc3QgQ29udGVudEZvcm1hdCA9IHtcclxuICAgICAgICAgICAgSlNPTjogMCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgY29uc3QgY29udGVudEZvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICBpZiAoY29udGVudEZvcm1hdCAhPT0gQ29udGVudEZvcm1hdC5KU09OKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjb250ZW50IGZvcm1hdDogJHtjb250ZW50Rm9ybWF0fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keUxlbmd0aCA9IGxlbmd0aCAtIGRhdGFSZWFkZXIuYnl0ZU9mZnNldDtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNvbnRlbnRMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgaWYgKGJvZHlMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGJvZHlMZW5ndGgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeVYyQXN5bmMoZGF0YVJlYWRlcjogRGF0YVJlYWRlciwgbGVuZ3RoOiBudW1iZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIGNvbnN0IENodW5rRm9ybWF0ID0ge1xyXG4gICAgICAgICAgICBKU09OOiAweDRlNGY1MzRhLFxyXG4gICAgICAgICAgICBCSU46IDB4MDA0ZTQ5NDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBoZWFkZXIuXHJcbiAgICAgICAgY29uc3QgY2h1bmtMZW5ndGggPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuICAgICAgICBjb25zdCBjaHVua0Zvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgIGlmIChjaHVua0Zvcm1hdCAhPT0gQ2h1bmtGb3JtYXQuSlNPTikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBjaHVuayBmb3JtYXQgaXMgbm90IEpTT05cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCYWlsIGlmIHRoZXJlIGFyZSBubyBvdGhlciBjaHVua3MuXHJcbiAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCArIGNodW5rTGVuZ3RoID09PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKGNodW5rTGVuZ3RoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhUmVhZGVyLnJlYWRTdHJpbmcoY2h1bmtMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBhbmQgdGhlIGxlbmd0aCBhbmQgdHlwZSBvZiB0aGUgbmV4dCBjaHVuay5cclxuICAgICAgICByZXR1cm4gZGF0YVJlYWRlci5sb2FkQXN5bmMoY2h1bmtMZW5ndGggKyA4KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNodW5rTGVuZ3RoKSksIGJpbjogbnVsbCB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVhZEFzeW5jID0gKCk6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVua0xlbmd0aCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmtGb3JtYXQgPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNodW5rRm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5KU09OOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgSlNPTiBjaHVua1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5CSU46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGNodW5rTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUmVhZGVyLnNraXBCeXRlcyhjaHVua0xlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB1bnJlY29nbml6ZWQgY2h1bmtGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJlYWRlci5za2lwQnl0ZXMoY2h1bmtMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCAhPT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDgpLnRoZW4ocmVhZEFzeW5jKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlYWRBc3luYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9wYXJzZVZlcnNpb24odmVyc2lvbjogc3RyaW5nKTogTnVsbGFibGU8eyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0+IHtcclxuICAgICAgICBpZiAodmVyc2lvbiA9PT0gXCIxLjBcIiB8fCB2ZXJzaW9uID09PSBcIjEuMC4xXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1ham9yOiAxLFxyXG4gICAgICAgICAgICAgICAgbWlub3I6IDAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaCA9ICh2ZXJzaW9uICsgXCJcIikubWF0Y2goL14oXFxkKylcXC4oXFxkKykvKTtcclxuICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdKSxcclxuICAgICAgICAgICAgbWlub3I6IHBhcnNlSW50KG1hdGNoWzJdKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9jb21wYXJlVmVyc2lvbihhOiB7IG1ham9yOiBudW1iZXI7IG1pbm9yOiBudW1iZXIgfSwgYjogeyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0pOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChhLm1ham9yID4gYi5tYWpvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWFqb3IgPCBiLm1ham9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWlub3IgPiBiLm1pbm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5taW5vciA8IGIubWlub3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfbG9nU3BhY2VzID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiO1xyXG4gICAgcHJpdmF0ZSBfbG9nSW5kZW50TGV2ZWwgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbG9nZ2luZ0VuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZyA9IHRoaXMuX2xvZ0Rpc2FibGVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9nT3BlbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5fbG9nSW5kZW50TGV2ZWwrKztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZ0Nsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIC0tdGhpcy5fbG9nSW5kZW50TGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9nRW5hYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzcGFjZXMgPSBHTFRGRmlsZUxvYWRlci5fbG9nU3BhY2VzLnN1YnN0cmluZygwLCB0aGlzLl9sb2dJbmRlbnRMZXZlbCAqIDIpO1xyXG4gICAgICAgIExvZ2dlci5Mb2coYCR7c3BhY2VzfSR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2dEaXNhYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2VuZFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRW5hYmxlZChjb3VudGVyTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgVG9vbHMuU3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQoY291bnRlck5hbWU6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgICBwcml2YXRlIF9lbmRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBUb29scy5FbmRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHt9XHJcbn1cclxuXHJcblJlZ2lzdGVyU2NlbmVMb2FkZXJQbHVnaW4obmV3IEdMVEZGaWxlTG9hZGVyKCkpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBnaXRodWIvbm8tdGhlbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyAqL1xyXG5pbXBvcnQgdHlwZSAqIGFzIEdMVEYyIGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmRlY2xhcmUgbGV0IEdMVEZWYWxpZGF0b3I6IEdMVEYyLklHTFRGVmFsaWRhdG9yO1xyXG5cclxuLy8gV29ya2VyR2xvYmFsU2NvcGVcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5kZWNsYXJlIGZ1bmN0aW9uIGltcG9ydFNjcmlwdHMoLi4udXJsczogc3RyaW5nW10pOiB2b2lkO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmRlY2xhcmUgZnVuY3Rpb24gcG9zdE1lc3NhZ2UobWVzc2FnZTogYW55LCB0cmFuc2Zlcj86IGFueVtdKTogdm9pZDtcclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRlQXN5bmMoXHJcbiAgICBkYXRhOiBzdHJpbmcgfCBVaW50OEFycmF5LFxyXG4gICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgIGdldEV4dGVybmFsUmVzb3VyY2U6ICh1cmk6IHN0cmluZykgPT4gUHJvbWlzZTxVaW50OEFycmF5PlxyXG4pOiBQcm9taXNlPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+IHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IEdMVEYyLklHTFRGVmFsaWRhdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgZXh0ZXJuYWxSZXNvdXJjZUZ1bmN0aW9uOiBnZXRFeHRlcm5hbFJlc291cmNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZmlsZU5hbWUpIHtcclxuICAgICAgICBvcHRpb25zLnVyaSA9IHJvb3RVcmwgPT09IFwiZmlsZTpcIiA/IGZpbGVOYW1lIDogcm9vdFVybCArIGZpbGVOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkgPyBHTFRGVmFsaWRhdG9yLnZhbGlkYXRlQnl0ZXMoZGF0YSwgb3B0aW9ucykgOiBHTFRGVmFsaWRhdG9yLnZhbGlkYXRlU3RyaW5nKGRhdGEsIG9wdGlvbnMpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHdvcmtlciBmdW5jdGlvbiB0aGF0IGdldHMgY29udmVydGVkIHRvIGEgYmxvYiB1cmwgdG8gcGFzcyBpbnRvIGEgd29ya2VyLlxyXG4gKi9cclxuZnVuY3Rpb24gV29ya2VyRnVuYygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBlbmRpbmdFeHRlcm5hbFJlc291cmNlczogQXJyYXk8eyByZXNvbHZlOiAoZGF0YTogYW55KSA9PiB2b2lkOyByZWplY3Q6IChyZWFzb246IGFueSkgPT4gdm9pZCB9PiA9IFtdO1xyXG5cclxuICAgIG9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcImluaXRcIjoge1xyXG4gICAgICAgICAgICAgICAgaW1wb3J0U2NyaXB0cyhkYXRhLnVybCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwidmFsaWRhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdGVBc3luYyhcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yb290VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgKHVyaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwZW5kaW5nRXh0ZXJuYWxSZXNvdXJjZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzLnB1c2goeyByZXNvbHZlLCByZWplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcImdldEV4dGVybmFsUmVzb3VyY2VcIiwgaW5kZXg6IGluZGV4LCB1cmk6IHVyaSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZS5yZXNvbHZlXCIsIHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZS5yZWplY3RcIiwgcmVhc29uOiByZWFzb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlc29sdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzW2RhdGEuaW5kZXhdLnJlc29sdmUoZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZS5yZWplY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzW2RhdGEuaW5kZXhdLnJlamVjdChkYXRhLnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciBnbFRGIHZhbGlkYXRpb25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZWYWxpZGF0aW9uQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1cmwgb2YgdGhlIGdsVEYgdmFsaWRhdG9yLlxyXG4gICAgICovXHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIGdsVEYgdmFsaWRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZWYWxpZGF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbmZpZ3VyYXRpb24uIERlZmF1bHRzIHRvIGB7IHVybDogXCJodHRwczovL2Nkbi5iYWJ5bG9uanMuY29tL2dsdGZfdmFsaWRhdG9yLmpzXCIgfWAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29uZmlndXJhdGlvbjogSUdMVEZWYWxpZGF0aW9uQ29uZmlndXJhdGlvbiA9IHtcclxuICAgICAgICB1cmw6IGAke1Rvb2xzLl9EZWZhdWx0Q2RuVXJsfS9nbHRmX3ZhbGlkYXRvci5qc2AsXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Mb2FkU2NyaXB0UHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIGEgZ2xURiBhc3NldCB1c2luZyB0aGUgZ2xURi1WYWxpZGF0b3IuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgSlNPTiBvZiBhIGdsVEYgb3IgdGhlIGFycmF5IGJ1ZmZlciBvZiBhIGJpbmFyeSBnbFRGXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgZm9yIHRoZSBnbFRGXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgVGhlIGZpbGUgbmFtZSBmb3IgdGhlIGdsVEZcclxuICAgICAqIEBwYXJhbSBnZXRFeHRlcm5hbFJlc291cmNlIFRoZSBjYWxsYmFjayB0byBnZXQgZXh0ZXJuYWwgcmVzb3VyY2VzIGZvciB0aGUgZ2xURiB2YWxpZGF0b3JcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGdsVEYgdmFsaWRhdGlvbiByZXN1bHRzIG9uY2UgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBWYWxpZGF0ZUFzeW5jKFxyXG4gICAgICAgIGRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXksXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZ2V0RXh0ZXJuYWxSZXNvdXJjZTogKHVyaTogc3RyaW5nKSA9PiBQcm9taXNlPFVpbnQ4QXJyYXk+XHJcbiAgICApOiBQcm9taXNlPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+IHtcclxuICAgICAgICBpZiAodHlwZW9mIFdvcmtlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXJDb250ZW50ID0gYCR7VmFsaWRhdGVBc3luY30oJHtXb3JrZXJGdW5jfSkoKWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXJCbG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbd29ya2VyQ29udGVudF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCIgfSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJCbG9iVXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbkVycm9yID0gKGVycm9yOiBFcnJvckV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbk1lc3NhZ2UgPSAobWVzc2FnZTogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImdldEV4dGVybmFsUmVzb3VyY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RXh0ZXJuYWxSZXNvdXJjZShkYXRhLnVyaSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZS5yZXNvbHZlXCIsIGluZGV4OiBkYXRhLmluZGV4LCB2YWx1ZTogdmFsdWUgfSwgW3ZhbHVlLmJ1ZmZlcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlamVjdFwiLCBpbmRleDogZGF0YS5pbmRleCwgcmVhc29uOiByZWFzb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWxpZGF0ZS5yZXNvbHZlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmFsaWRhdGUucmVqZWN0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEucmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbk1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcImluaXRcIiwgdXJsOiBUb29scy5HZXRCYWJ5bG9uU2NyaXB0VVJMKHRoaXMuQ29uZmlndXJhdGlvbi51cmwpIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTbGljZSB0aGUgZGF0YSB0byBhdm9pZCBjb3B5aW5nIHRoZSB3aG9sZSBhcnJheSBidWZmZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VkRGF0YSA9IGRhdGEuc2xpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZVwiLCBkYXRhOiBzbGljZWREYXRhLCByb290VXJsOiByb290VXJsLCBmaWxlTmFtZTogZmlsZU5hbWUgfSwgW3NsaWNlZERhdGEuYnVmZmVyXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcInZhbGlkYXRlXCIsIGRhdGE6IGRhdGEsIHJvb3RVcmw6IHJvb3RVcmwsIGZpbGVOYW1lOiBmaWxlTmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9Mb2FkU2NyaXB0UHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fTG9hZFNjcmlwdFByb21pc2UgPSBUb29scy5Mb2FkQmFieWxvblNjcmlwdEFzeW5jKHRoaXMuQ29uZmlndXJhdGlvbi51cmwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fTG9hZFNjcmlwdFByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdGVBc3luYyhkYXRhLCByb290VXJsLCBmaWxlTmFtZSwgZ2V0RXh0ZXJuYWxSZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBGaWxlTG9hZGVyIGZyb20gXCJsb2FkZXJzL2dsVEYvZ2xURkZpbGVMb2FkZXJcIjtcclxuaW1wb3J0ICogYXMgVmFsaWRhdGlvbiBmcm9tIFwibG9hZGVycy9nbFRGL2dsVEZWYWxpZGF0aW9uXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgR2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgR2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAoPGFueT5HbG9iYWxPYmplY3QpLkJBQllMT04gPSAoPGFueT5HbG9iYWxPYmplY3QpLkJBQllMT04gfHwge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBGaWxlTG9hZGVyKSB7XHJcbiAgICAgICAgKDxhbnk+R2xvYmFsT2JqZWN0KS5CQUJZTE9OW2tleV0gPSAoPGFueT5GaWxlTG9hZGVyKVtrZXldO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gVmFsaWRhdGlvbikge1xyXG4gICAgICAgICg8YW55Pkdsb2JhbE9iamVjdCkuQkFCWUxPTltrZXldID0gKDxhbnk+VmFsaWRhdGlvbilba2V5XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSBcImxvYWRlcnMvZ2xURi9nbFRGRmlsZUxvYWRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwibG9hZGVycy9nbFRGL2dsVEZWYWxpZGF0aW9uXCI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmltcG9ydCAqIGFzIEdMVEYxIGZyb20gXCJsb2FkZXJzL2dsVEYvMS4wL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgR2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgR2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAoPGFueT5HbG9iYWxPYmplY3QpLkJBQllMT04gPSAoPGFueT5HbG9iYWxPYmplY3QpLkJBQllMT04gfHwge307XHJcbiAgICAoPGFueT5HbG9iYWxPYmplY3QpLkJBQllMT04uR0xURjEgPSAoPGFueT5HbG9iYWxPYmplY3QpLkJBQllMT04uR0xURjEgfHwge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBHTFRGMSkge1xyXG4gICAgICAgICg8YW55Pkdsb2JhbE9iamVjdCkuQkFCWUxPTi5HTFRGMVtrZXldID0gKDxhbnk+R0xURjEpW2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEdMVEYxIH07XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZXhwb3J0XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xlZ2FjeS1nbFRGXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xlZ2FjeS1nbFRGMVwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmFieWxvbmpzX01pc2NfdG9vbHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4cG9ydFxyXG5pbXBvcnQgKiBhcyBsb2FkZXJzIGZyb20gXCJAbHRzL2xvYWRlcnMvbGVnYWN5L2xlZ2FjeS1nbFRGMUZpbGVMb2FkZXJcIjtcclxuZXhwb3J0IHsgbG9hZGVycyB9O1xyXG5leHBvcnQgZGVmYXVsdCBsb2FkZXJzO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=