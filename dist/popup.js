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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/const.js":
/*!*****************************!*\
  !*** ./src/assets/const.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const selectorParams = {\n  pullRequest: \"a.tabnav-tab\", // Pull Request navbar\n  repositoryNavbar: \"a.js-responsive-underlinenav-item\", // Repository navbar\n  conversationLinks: \".markdown-body p a\", // Conversation links\n};\n\nmodule.exports = {\n  selectorParams: selectorParams,\n};\n\n\n//# sourceURL=webpack:///./src/assets/const.js?");

/***/ }),

/***/ "./src/assets/util.js":
/*!****************************!*\
  !*** ./src/assets/util.js ***!
  \****************************/
/*! exports provided: getLocalStorageData, createPromiseArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocalStorageData\", function() { return getLocalStorageData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPromiseArray\", function() { return createPromiseArray; });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./src/assets/const.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_const__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getLocalStorageData(key) {\n  return new Promise(function (res, rej) {\n    chrome.runtime.sendMessage({ method: \"getItem\", key: key }, function (\n      response\n    ) {\n      // キーを元にオブジェクトを作成しtrue or false を返却\n      res({\n        [key]: response.data,\n      });\n    });\n  });\n}\n\nfunction createPromiseArray() {\n  const promiseArr = [];\n  for (const i in _const__WEBPACK_IMPORTED_MODULE_0__[\"selectorParams\"]) {\n    promiseArr.push(getLocalStorageData(i));\n  }\n  return promiseArr;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/assets/util.js?");

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/util */ \"./src/assets/util.js\");\n\n\nclass Popup {\n  constructor() {\n    this.promiseArr = Object(_assets_util__WEBPACK_IMPORTED_MODULE_0__[\"createPromiseArray\"])();\n  }\n\n  async main() {\n    const promiseRes = await Promise.all(this.promiseArr);\n    for (const i of promiseRes) {\n      /* localStorageから取得したオブジェクトのキーを保存 */\n      const key = Object.keys(i)[0];\n      const element = document.getElementById(key);\n      element.checked = i[key];\n      element.addEventListener(\"change\", function (e) {\n        /* チェンジイベントの内容をbackgroundに送信してlocalStorageの値を更新 */\n        chrome.runtime.sendMessage(\n          { method: \"setItem\", key: e.target.name, value: e.target.checked },\n          function (response) {\n            if (response.data) {\n              console.log(response.data);\n            }\n          }\n        );\n      });\n    }\n  }\n}\n\nwindow.onload = function () {\n  const popup = new Popup();\n  popup.main();\n};\n\n\n//# sourceURL=webpack:///./src/popup.js?");

/***/ })

/******/ });