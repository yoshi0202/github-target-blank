/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/const.js":
/*!*****************************!*\
  !*** ./src/assets/const.js ***!
  \*****************************/
/*! exports provided: selectorParams, observerSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectorParams\", function() { return selectorParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observerSettings\", function() { return observerSettings; });\nconst selectorParams = {\n  pullRequest: \"a.tabnav-tab\", // Pull Request navbar\n  repositoryNavbar: \"a.js-responsive-underlinenav-item\", // Repository navbar\n  conversationLinks: \".markdown-body p a\", // Conversation links\n};\n\nconst observerSettings = {\n  selector: \"js-repo-pjax-container\",\n  config: {\n    childList: true,\n  },\n};\n\n\n\n\n//# sourceURL=webpack:///./src/assets/const.js?");

/***/ }),

/***/ "./src/assets/util.js":
/*!****************************!*\
  !*** ./src/assets/util.js ***!
  \****************************/
/*! exports provided: getLocalStorageData, createPromiseArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocalStorageData\", function() { return getLocalStorageData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPromiseArray\", function() { return createPromiseArray; });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./src/assets/const.js\");\n\nfunction getLocalStorageData(key) {\n  return new Promise(function (res, rej) {\n    chrome.runtime.sendMessage({ method: \"getItem\", key: key }, function (\n      response\n    ) {\n      // キーを元にオブジェクトを作成しtrue or false を返却\n      res({\n        [key]: response.data,\n      });\n    });\n  });\n}\n\nfunction createPromiseArray() {\n  const promiseArr = [];\n  for (const i in _const__WEBPACK_IMPORTED_MODULE_0__[\"selectorParams\"]) {\n    promiseArr.push(getLocalStorageData(i));\n  }\n  return promiseArr;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/assets/util.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/util */ \"./src/assets/util.js\");\n/* harmony import */ var _assets_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/const */ \"./src/assets/const.js\");\n\n\n\nclass Content {\n  constructor() {\n    this.promiseArr = Object(_assets_util__WEBPACK_IMPORTED_MODULE_0__[\"createPromiseArray\"])();\n    this.createMutationObject();\n  }\n  async main() {\n    console.log(\"main is run\");\n    const promiseRes = await Promise.all(this.promiseArr);\n    /* localStorageに保存されている有効な設定のみEventListenerを設定する */\n    for (const i of promiseRes) {\n      const key = Object.keys(i)[0];\n      if (!i[key]) continue;\n      let object = this.createElementObject(\n        document.querySelectorAll(_assets_const__WEBPACK_IMPORTED_MODULE_1__[\"selectorParams\"][key])\n      );\n      this.createAddEventListenner(object);\n    }\n  }\n\n  createAddEventListenner(object) {\n    for (const url in object) {\n      object[url].url = url;\n      const listenerFunction = function (e) {\n        const evt = new MouseEvent(\"click\", {\n          metaKey: true,\n        });\n        const a = document.createElement(\"a\");\n        a.href = e.currentTarget.url;\n        a.dispatchEvent(evt);\n        e.preventDefault();\n      };\n      object[url].removeEventListener(\"click\", listenerFunction);\n      object[url].addEventListener(\"click\", listenerFunction);\n    }\n  }\n\n  createElementObject(elements) {\n    const obj = {};\n    for (const element of elements) {\n      if (!element.href) continue;\n      obj[element.href] = element;\n    }\n    return obj;\n  }\n\n  createMutationObject() {\n    const target = document.getElementById(_assets_const__WEBPACK_IMPORTED_MODULE_1__[\"observerSettings\"].selector);\n    if (target) {\n      const observer = new MutationObserver((mutations) => {\n        this.main();\n      });\n      observer.observe(target, _assets_const__WEBPACK_IMPORTED_MODULE_1__[\"observerSettings\"].config);\n    }\n  }\n}\n\nwindow.onload = function () {\n  const content = new Content();\n  content.main();\n};\n\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ })

/******/ });