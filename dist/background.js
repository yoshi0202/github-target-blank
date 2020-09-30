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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/const.js":
/*!*****************************!*\
  !*** ./src/assets/const.js ***!
  \*****************************/
/*! exports provided: selectorParams, observerSettings, extensionHostName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectorParams\", function() { return selectorParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observerSettings\", function() { return observerSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extensionHostName\", function() { return extensionHostName; });\nconst selectorParams = {\n  pullRequest: \"a.tabnav-tab\", // Pull Request navbar\n  repositoryNavbar: \"a.js-responsive-underlinenav-item\", // Repository navbar\n  conversationLinks: \".markdown-body p a\", // Conversation links\n  commitLink: \"code .link-gray\", // commitLink(gray-link)\n  ciLinks: \".status-actions\", // ciLinks\n};\n\nconst observerSettings = {\n  selector: [\"#js-repo-pjax-container\"],\n  config: {\n    childList: true,\n  },\n};\n\nconst extensionHostName = \"github.com\";\n\n\n\n\n//# sourceURL=webpack:///./src/assets/const.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/const */ \"./src/assets/const.js\");\n\n\nclass Background {\n  constructor() {\n    this.chromeMessageListener();\n    this.chromeInstallListener();\n    this.chromeRulesFunction();\n  }\n  chromeInstallListener() {\n    chrome.runtime.onInstalled.addListener(function () {\n      for (const key in _assets_const__WEBPACK_IMPORTED_MODULE_0__[\"selectorParams\"]) {\n        localStorage.setItem(key, \"true\");\n      }\n    });\n  }\n  chromeRulesFunction() {\n    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {\n      chrome.declarativeContent.onPageChanged.addRules([\n        {\n          conditions: [\n            new chrome.declarativeContent.PageStateMatcher({\n              pageUrl: { hostEquals: _assets_const__WEBPACK_IMPORTED_MODULE_0__[\"extensionHostName\"] },\n            }),\n          ],\n          actions: [new chrome.declarativeContent.ShowPageAction()],\n        },\n      ]);\n    });\n  }\n  chromeMessageListener() {\n    chrome.runtime.onMessage.addListener(function (\n      request,\n      sender,\n      sendResponse\n    ) {\n      switch (request.method) {\n        case \"getLength\": // 保存されているデータ数を取得\n          sendResponse({ data: localStorage.length });\n          break;\n        case \"getKeyName\": // 指定されたn番目のkey名を取得\n          sendResponse({ data: localStorage.key(request.number) });\n          break;\n        case \"getItem\": // 指定されたkeyの値を取得\n          sendResponse({ data: JSON.parse(localStorage.getItem(request.key)) });\n          break;\n        case \"setItem\": // 指定されたkeyと値を保存（更新）\n          sendResponse({\n            data: localStorage.setItem(request.key, request.value),\n          });\n          break;\n        case \"removeItem\": // 指定されたkeyの値を削除\n          sendResponse({ data: localStorage.removeItem[request.key] });\n          break;\n        case \"clearAll\": //　すべてのデータを削除\n          sendResponse({ data: localStorage.clear() });\n          break;\n        default:\n          console.log(\"no method\");\n          break;\n      }\n    });\n  }\n}\n\nconst background = new Background();\n\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ })

/******/ });