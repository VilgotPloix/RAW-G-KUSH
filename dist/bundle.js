/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nvar home = function home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  console.log(\"home\" + argument);\n};\n\n\n\n//# sourceURL=webpack://cours/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById('pageContent');\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\n\n//# sourceURL=webpack://cours/./src/js/index.js?");

/***/ }),

/***/ "./src/js/pageDetail.js":
/*!******************************!*\
  !*** ./src/js/pageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageDetail\": () => (/* binding */ pageDetail)\n/* harmony export */ });\nvar key = \"9d31efd322574c689c5c233ec3698aa8\";\nvar cleanedArguments;\n\nvar pageDetail = function pageDetail() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var preparePage = function preparePage() {\n    cleanedArguments = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url) {\n      var finalURL = url;\n      fetch(\"\".concat(finalURL)).then(function (reponse) {\n        return reponse.json();\n      }).then(function (game) {\n        var name = game.name,\n            released = game.released,\n            description = game.description;\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\n        articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\".concat(cleanedArguments, \"?key=\").concat(key));\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n            <section class=\\\"page-detail\\\">\\n                <div class=\\\"article\\\">\\n                    <h1 class=\\\"title\\\"></h1>\\n                    <p class=\\\"release-date\\\">Release date : <span></span></p>\\n                    <p class=\\\"description\\\"></p>\\n                </div>\\n            </section>\\n        \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://cours/./src/js/pageDetail.js?");

/***/ }),

/***/ "./src/js/pageList.js":
/*!****************************!*\
  !*** ./src/js/pageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageList\": () => (/* binding */ pageList)\n/* harmony export */ });\nvar key = \"9d31efd322574c689c5c233ec3698aa8\";\nvar cleanedArguments;\n\nvar pageList = function pageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var preparePage = function preparePage() {\n    cleanedArguments = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url;\n\n      if (argument) {\n        finalURL = url + \"?search=\" + argument;\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (reponse) {\n        return reponse.json();\n      }).then(function (game) {\n        var number = 9 * 1;\n        var nine = game.results.slice(0, number);\n        nine.forEach(function (article) {\n          articles += \"\\n                        <div class=\\\"cardGame\\\">\\n                            <h1>\".concat(article.name, \"</h1>\\n                            <h2>\").concat(article.released, \"</h2>\\n                            <a href=\\\"#pageDetail/\").concat(article.id, \"\\\">voir plus</a>\\n                        </div>  \\n\\n                    \");\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(key, \"&\").concat(cleanedArguments));\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n            <section class=\\\"page-list\\\">\\n                <div class=\\\"articles\\\">...loading</div>\\n            </section>\\n        \";\n    preparePage();\n  };\n\n  render();\n};\n\nvar searchBar = document.getElementById('searchBar');\nvar submit = document.getElementById('submit');\nsubmit.addEventListener('click', function () {\n  var game = searchBar.value.split(' ').join('-');\n  fetch(\"https://api.rawg.io/api/games?search=\".concat(game, \"&key=\").concat(key)).then(function (reponse) {\n    return reponse.json();\n  }).then(function (articles) {\n    var page = \"\";\n    articles.results.forEach(function (article) {\n      page += \"\\n            <div class=\\\"cardGame\\\">\\n                <h1>\".concat(article.name, \"</h1>\\n                <h2>\").concat(article.released, \"</h2>\\n                <a href=\\\"#pageDetail/\").concat(article.id, \"\\\">voir plus</a>\\n            </div>  \\n            \");\n    });\n    document.querySelector(\".page-list .articles\").innerHTML = page;\n  });\n});\n\n\n//# sourceURL=webpack://cours/./src/js/pageList.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _pageDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageDetail */ \"./src/js/pageDetail.js\");\n/* harmony import */ var _pageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageList */ \"./src/js/pageList.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n\n\n\nvar routes = {\n  \"\": _Home__WEBPACK_IMPORTED_MODULE_2__.home,\n  \"pageList\": _pageList__WEBPACK_IMPORTED_MODULE_1__.pageList,\n  \"pageDetail\": _pageDetail__WEBPACK_IMPORTED_MODULE_0__.pageDetail\n};\n\n\n//# sourceURL=webpack://cours/./src/js/routes.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cours/./src/sass/style.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;