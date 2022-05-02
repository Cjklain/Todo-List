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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    padding: 0;\\n    margin: 0;\\n  }\\n:root{\\n    --main-bg-color: #047857;\\n    --main-font: 'Lato', sans-serif;\\n    --main-font-color: #f8fafc;\\n    --main-hover-color: #85888d;\\n}\\n\\nbody{\\n    display: grid;\\n    grid-template-rows: 1fr 7fr;\\n    grid-template-columns: minmax(200px,1fr) 5fr;\\n    height: 100vh;\\n}\\n\\nheader{\\n    background-color: var(--main-bg-color);\\n    grid-column: 1/-1;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    box-shadow: 0px 1px 5px black;\\n    z-index: 2;\\n    font-family: var(--main-font);\\n    color: var(--main-font-color)\\n}\\n\\nnav{\\n    background-color: var(--main-bg-color);\\n    box-shadow: 1px 0px 5px black;\\n    z-index: 1;\\n    padding: 30px;\\n    font-family: var(--main-font);\\n    color: var(--main-font-color);\\n\\n    display: grid;\\n    grid-template-rows: 1fr 4fr auto 1fr;\\n    justify-items: center;\\n    align-items: center;\\n}\\n\\nnav .projects{\\n    align-self: stretch;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    font-size: 1.1rem;\\n}\\n\\nnav .projects .project{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 0px 5px;\\n    border: var(--main-bg-color) solid 1px;\\n}\\n\\nnav .projects .project:hover{\\n    color: var(--main-hover-color)\\n}\\n\\nnav .projects .project.selected{\\n    border: white solid 1px;\\n    border-radius: 5px;\\n}\\n\\nnav .projects .project.selected:hover{\\n    color: white;\\n}\\n\\nnav div.title{\\n    display: flex;\\n    gap: 20px;\\n}\\n\\nnav .wrapper{\\n    align-self: start;\\n    display: none;\\n}\\n\\nnav .wrapper.open{\\n    display: block;\\n}\\n\\nnav .wrapper .add{\\n    display: flex;\\n    justify-content: center;\\n    padding-top: 20px;\\n    gap: 10px;\\n}\\n\\nnav .add input[type=text]{\\n    width: 100%;\\n    border-radius: 5px;\\n}\\n\\nnav .add input[type=text]:focus{\\n    outline: none;\\n    border: solid 2px #ebebeb;\\n}\\n\\nnav .add button:hover{\\n    color: var(--main-hover-color)\\n}\\n\\nnav .add>button{\\n    border-radius: 5px;\\n    border: 1px solid var(--main-bg-color);\\n}\\nnav .add button svg{\\n    height: 1.3rem;\\n}\\nmain{\\n    font-family: var(--main-font);\\n    background-color: #f8fafc;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    padding: 15px;\\n}\\n\\nmain .card{\\n    /* display: none; */\\n    grid-column: 2/3;\\n    background-color: #f1f5f9;\\n    padding: 15px;\\n    border: solid 3px black;\\n    border-radius: 10px;\\n    box-shadow: 0px 0px 3px black;\\n    visibility: hidden;\\n    opacity: 0;\\n    transition: visibility 0s, opacity 0.1s linear;\\n}\\n\\nmain .card.open{\\n    /* display: block; */\\n    opacity: 1;\\n    visibility: visible;\\n    transition: visibility 0s, opacity 0.1s linear;\\n}\\n\\nmain .card .card-head{\\n    padding-top: 15px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    border-bottom: 2px solid black;\\n}\\n\\nmain .card .card-head .options{\\n    align-self: flex-end;\\n}\\n\\nmain .card .card-body .card-add{\\n    padding: 10px;\\n    display: flex;\\n    justify-content: center;\\n    gap: 10px;\\n    align-items: center;\\n    /* border-bottom: 1px solid black; */\\n}\\n\\nmain .card .card-body .card-add input[type=text]{\\n    border-radius: 5px;\\n    outline: none;\\n    padding: 2px;\\n}\\n\\nmain .card .card-body .card-add input[type=text]:focus{\\n    border: solid 2px #16a34a;\\n}\\nmain .card .card-body .card-add>svg:hover{\\n    color: #16a34a;   \\n}\\n\\nmain .card .card-body .tasks{\\n    display: flex;\\n    flex-direction: column;\\n    gap: 5px;\\n    padding-top: 2px;\\n}\\n\\nmain .card .card-body .tasks .task{\\n    display: grid;\\n    grid-template-columns: auto 10fr 1fr;\\n    gap: 10px;\\n    align-items: center;\\n    background-color: #e2e8f0;;\\n    padding: 5px;\\n    border-top: 1px solid grey;\\n    box-shadow: 0px 0px 1px black;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fadeForCard\": () => (/* binding */ fadeForCard),\n/* harmony export */   \"hideCard\": () => (/* binding */ hideCard)\n/* harmony export */ });\n\n\n\nfunction fadeForCard(){\n    const divCard = document.querySelector('.card')\n    divCard.classList.remove('open')\n    setTimeout(()=> divCard.classList.add('open'),100)   \n}\n\nfunction hideCard(){\n    const divCard = document.querySelector('.card');\n    divCard.classList.remove('open');\n}\n\n//# sourceURL=webpack://todo-list/./src/card.js?");

/***/ }),

/***/ "./src/cardMaker.js":
/*!**************************!*\
  !*** ./src/cardMaker.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardMaker);\n\nfunction cardMaker(name){\n    const html = `\n    <div class=\"card open\">\n<div class=\"card-head\">\n    <div class=\"card-name\">\n        <h2 class=\"card-title\">${name}</h2>\n    </div>\n    <div class=\"options\">\n        <svg class=\"delete\" style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z\" />\n        </svg>\n        </button>\n    </div>\n</div>\n<div class=\"card-body\">\n    <div class=\"card-add\">\n        <h4>Add task:</h4>\n        <input type=\"text\" name=\"task-name\" id=\"task-name\">\n        <svg class=\"task-add\" style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\" />\n        </svg>\n    </div>\n    <div class=\"tasks\">\n        <div class=\"task\">\n            <input type=\"checkbox\">\n            <div class=\"text\">Task 1</div>\n            <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                <path fill=\"currentColor\" d=\"M19,13H5V11H19V13Z\" />\n            </svg>\n        </div>\n        <div class=\"task\">\n            <input type=\"checkbox\">\n            <div class=\"text\">Task 3</div>\n            <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                <path fill=\"currentColor\" d=\"M19,13H5V11H19V13Z\" />\n            </svg>\n        </div>\n        <div class=\"task\">\n            <input type=\"checkbox\">\n            <div class=\"text\">Task 3</div>\n            <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                <path fill=\"currentColor\" d=\"M19,13H5V11H19V13Z\" />\n            </svg>\n        </div>\n    </div>\n</div>\n</div>`\nreturn html\n\n}\n\n//# sourceURL=webpack://todo-list/./src/cardMaker.js?");

/***/ }),

/***/ "./src/id.js":
/*!*******************!*\
  !*** ./src/id.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (idMaker);\nfunction idMaker(){\n    const newId = Date.now()\n    return newId\n}\n\n//# sourceURL=webpack://todo-list/./src/id.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id */ \"./src/id.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\n/* harmony import */ var _cardMaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardMaker */ \"./src/cardMaker.js\");\n\n\n\n\n\nconst nameInput = document.getElementById('Name');\nconst addButton = document.querySelector('.add-project');\nconst divProjects = document.querySelector('.projects')\n\nclass Project{\n    constructor(name){\n        this.name = name;\n        this.id = (0,_id__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        this.displayProject = this.displayProject.bind(this);\n        this.deleteProject = this.deleteProject.bind(this);\n        this.handleAddTask = this.handleAddTask.bind(this);\n        this.handleCheckbox = this.handleCheckbox.bind(this);\n        this.handleDelete = this.handleDelete.bind(this);\n        this.tasks = [];\n    }\n    addToShell(){\n        const div = document.createElement('div')\n        div.classList.add('project')\n        div.innerText = this.name\n        div.dataset.id = this.id\n        divProjects.appendChild(div)\n        this.displayProject();\n        div.addEventListener('click', this.displayProject)\n        div.addEventListener('click', this.markAsSelected)\n    }\n    displayProject(){\n        const main = document.querySelector('main')\n        const html = (0,_cardMaker__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.name)\n        main.innerHTML = html\n        this.generateTask();\n        (0,_card__WEBPACK_IMPORTED_MODULE_2__.fadeForCard)();\n        const deleteButton = document.querySelector('.delete');\n        deleteButton.addEventListener('click',this.deleteProject)\n        const addTaskButton = document.querySelector('.task-add')\n        addTaskButton.addEventListener('click',this.handleAddTask)\n\n    }\n    markAsSelected(){\n        const divProject = document.querySelectorAll('.project')\n        divProject.forEach(project=>{\n            project.classList.remove('selected');\n            if(project===this){\n                project.classList.add('selected')\n            }\n        })\n    }\n    deleteProject(){\n        const toDelete = document.querySelector(`[data-id=\"${this.id}\"]`)\n        divProjects.removeChild(toDelete);\n        (0,_card__WEBPACK_IMPORTED_MODULE_2__.hideCard)()\n    }\n    handleAddTask(){\n        const taskName = document.getElementById('task-name')\n        if(taskName.value=== '')return\n        let checkforDouble = false\n        checkforDouble = this.tasks.find(task=> task.Name === taskName.value);\n        if(checkforDouble)return\n        let taskObj = {}\n        taskObj[\"Name\"] = taskName.value\n        taskObj[\"checked\"] = false\n        this.tasks.push(taskObj)\n        this.generateTask()\n        taskName.value = ''\n    }\n    generateTask(){\n        const tasksDiv = document.querySelector('.tasks');\n        const html = this.tasks.map(task => `\n        <div class=\"task\">\n        <input type=\"checkbox\" ${task.checked ? 'checked' : \"\"}>\n        <div class=\"text\">${task.Name}</div>\n        <svg class=\"delete-task\" style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M19,13H5V11H19V13Z\" />\n        </svg>\n        </div>`).join('');\n        tasksDiv.innerHTML = html\n        const checkboxsEl = tasksDiv.querySelectorAll('input[type=checkbox]')\n        checkboxsEl.forEach(checkbox => checkbox.addEventListener('change',this.handleCheckbox))\n        const deleteIcons = tasksDiv.querySelectorAll('.delete-task')\n        deleteIcons.forEach(icon => icon.addEventListener('click',this.handleDelete))\n\n    }\n    handleCheckbox(e){\n        const currentTaskName = e.currentTarget.parentElement.querySelector('.text').innerText\n        const taskToChange = this.tasks.find(task => task.Name === currentTaskName)\n        taskToChange.checked = !taskToChange.checked\n    }\n    handleDelete(e){\n        const currentTaskName = e.currentTarget.parentElement.querySelector('.text').innerText;\n        this.tasks = this.tasks.filter(task => task.Name != currentTaskName);\n        this.generateTask();\n    }\n}\n\n\naddButton.addEventListener('click', addProject)\n\nlet projectSheel = []\nconsole.log(projectSheel);\nfunction addProject(e){\n    if(nameInput.value === '') return\n    const project = new Project(nameInput.value)\n    projectSheel.push(project)\n    nameInput.value = '';\n    project.addToShell()\n    if(projectSheel.length>=9){\n        alert('sorry you reach limit')\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;