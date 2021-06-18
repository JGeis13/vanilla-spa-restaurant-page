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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_hero_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/hero-img.jpg */ \"./src/assets/hero-img.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_hero_img_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --accent-color: rgb(62, 131, 70);\\n  --main-color: white;\\n  --grey: #f3f3f3;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\nhtml,\\nbody {\\n  font-family: Arial, Helvetica, sans-serif;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/************/\\n\\n#content {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  min-height: 100vh;\\n}\\n\\n.inner-container {\\n  max-width: 1280px;\\n  margin: 0 auto;\\n  padding: 0 40px;\\n}\\n\\n/********\\n  HEADER\\n*********/\\n\\nheader {\\n  background: rgba(0, 0, 0, 0.5);\\n  color: white;\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n}\\n\\nheader .inner-container {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\nheader .logo {\\n  font-size: 30px;\\n}\\n\\nheader ul {\\n  padding: 0;\\n  margin: 0;\\n  list-style: none;\\n  display: flex;\\n}\\n\\nheader ul li a {\\n  font-size: 18px;\\n  text-transform: capitalize;\\n  display: inline-block;\\n  padding: 20px 10px;\\n  cursor: pointer;\\n}\\nheader ul li a:hover {\\n  background: rgba(0, 0, 0, 0.8);\\n  color: var(--accent-color);\\n  padding-bottom: 17px;\\n  border-bottom: 3px solid var(--main-color);\\n}\\nheader ul li a.active {\\n  padding-bottom: 17px;\\n  border-bottom: 3px solid var(--main-color);\\n}\\n\\n/*********\\n  HERO\\n**********/\\n\\n.hero {\\n  background: linear-gradient(0deg, rgba(9, 19, 10, 0.5), rgba(9, 19, 10, 0.5)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  /* background-position: center; */\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  /* min-height: 100vh; */\\n  color: var(--main-color);\\n  text-shadow: black 2px 2px 4px;\\n  padding-top: 200px;\\n}\\n.hero.tall {\\n  padding-top: 240px;\\n}\\n\\n.hero h1 {\\n  text-transform: uppercase;\\n  font-size: 56px;\\n  margin-top: 0;\\n}\\n\\n.hero p {\\n  font-size: 20px;\\n  text-shadow: none;\\n  letter-spacing: 1px;\\n  max-width: 70%;\\n  padding-bottom: 150px;\\n}\\n\\n/*********\\n  INFO-SECTION\\n**********/\\n\\n.info-section {\\n  padding: 80px 0;\\n}\\n\\n.info-section .title-box {\\n  text-align: center;\\n  margin-bottom: 7em;\\n  position: relative;\\n}\\n\\n.info-section .title-box::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  height: 4px;\\n  width: 130px;\\n  background: var(--accent-color);\\n  left: 50%;\\n  transform: translateX(-50%);\\n  bottom: -36px;\\n}\\n\\n.info-section .title-box h1 {\\n  font-size: 40px;\\n  font-weight: 300;\\n  text-transform: uppercase;\\n  padding: 0;\\n  margin: 0 0 16px;\\n}\\n\\n.info-section .title-box h5 {\\n  font-size: 20px;\\n  font-weight: 300;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n/*********\\n  CARDS\\n**********/\\n\\n.card {\\n  display: flex;\\n}\\n\\n.card .img-box {\\n  width: 300px;\\n  height: 300px;\\n  margin-right: 48px;\\n  margin-bottom: 48px;\\n  flex-shrink: 0;\\n}\\n\\n.card .img-box img {\\n  width: 100%;\\n  height: 100%;\\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\\n  object-fit: cover;\\n}\\n\\n.card p {\\n  margin: 0;\\n  letter-spacing: 1px;\\n  line-height: 24px;\\n  margin-bottom: 10px;\\n}\\n\\n/*********\\n  FOOD MENU\\n*********/\\n\\n.food-menu {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n}\\n\\n.food-menu .food-item {\\n  width: 47%;\\n  margin-bottom: 16px;\\n}\\n\\n.food-menu .food-item .container-top {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 5px 0;\\n}\\n\\n.food-menu h3 {\\n  margin: 0;\\n  padding: 0;\\n  text-transform: uppercase;\\n}\\n\\n.food-item h3:first-child {\\n  white-space: nowrap;\\n  overflow: hidden;\\n}\\n.food-item h3:first-child::after {\\n  content: \\\"..........................................................................................\\\";\\n}\\n\\n.food-item h3:nth-child(2)::before {\\n  content: \\\"$\\\";\\n  padding-left: 5px;\\n}\\n\\n.food-item p {\\n  margin: 0;\\n  color: rgb(123, 123, 123);\\n}\\n\\n/*********\\n  CONTACT PAGE\\n*********/\\n\\n#contact .contact-info h4 {\\n  text-transform: uppercase;\\n  font-size: 18px;\\n  margin-top: 0;\\n}\\n\\n#contact .contact-info ul {\\n  padding: 0 0 0 16px;\\n  list-style-type: none;\\n}\\n\\n#contact .contact-info li {\\n  font-size: 18px;\\n  position: relative;\\n  padding: 10px 0 10px 5px;\\n}\\n#contact .contact-info li::before {\\n  content: \\\"\\\";\\n  width: 10px;\\n  height: 10px;\\n  background: var(--accent-color);\\n  position: absolute;\\n  left: -16px;\\n  transform: translateY(50%);\\n}\\n\\n#contact .content {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n#contact form {\\n  display: flex;\\n  flex-direction: column;\\n  width: 50%;\\n  margin-top: 0;\\n  margin-bottom: 48px;\\n}\\n\\n#contact form input,\\n#contact form textarea {\\n  border: none;\\n  background: var(--grey);\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-size: 20px;\\n  padding: 10px 20px;\\n  margin: 5px 0;\\n}\\n\\n#contact form button {\\n  border: none;\\n  color: white;\\n  font-size: 20px;\\n  text-transform: uppercase;\\n  background: var(--accent-color);\\n  padding: 10px 0;\\n  margin-top: 5px;\\n}\\n#contact form button:hover {\\n  cursor: pointer;\\n  background: rgb(51, 108, 58);\\n}\\n\\n@media (max-width: 1000px) {\\n  #contact .content {\\n    flex-direction: column;\\n  }\\n  #contact form {\\n    width: 100%;\\n    margin-top: 36px;\\n  }\\n}\\n\\n/*********\\n  FOOTER\\n*********/\\n\\nfooter {\\n  background: black;\\n  color: var(--main-color);\\n  text-align: center;\\n  padding: 15px 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/food1.jpg":
/*!******************************!*\
  !*** ./src/assets/food1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c7305a287d998619b383.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/food1.jpg?");

/***/ }),

/***/ "./src/assets/food2.jpg":
/*!******************************!*\
  !*** ./src/assets/food2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39c4871e046b2a2d2157.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/food2.jpg?");

/***/ }),

/***/ "./src/assets/hero-img.jpg":
/*!*********************************!*\
  !*** ./src/assets/hero-img.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"686ed29dc27edb195cef.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/hero-img.jpg?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildCard = ({ imgUrl, text }) => {\n  const card = document.createElement(\"div\");\n  card.classList.add(\"card\");\n\n  const imgBox = document.createElement(\"div\");\n  imgBox.classList.add(\"img-box\");\n\n  const img = document.createElement(\"img\");\n  img.setAttribute(\"src\", imgUrl);\n\n  const p = document.createElement(\"p\");\n  p.textContent = text;\n\n  imgBox.append(img);\n\n  card.append(imgBox);\n  card.append(p);\n\n  return card;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildCard);\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/card.js?");

/***/ }),

/***/ "./src/components/foodMenu.js":
/*!************************************!*\
  !*** ./src/components/foodMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst foodData = [\n  {\n    name: \"Roll & Butter\",\n    price: 9.99,\n    info: \"Yummy and buttery\",\n  },\n  {\n    name: \"Roll & Butter\",\n    price: 9.99,\n    info: \"Yummy and buttery\",\n  },\n  {\n    name: \"Roll & Butter\",\n    price: 9.99,\n    info: \"Yummy and buttery\",\n  },\n  {\n    name: \"Cheese & Crackers\",\n    price: 5.99,\n    info: \"Yummy and buttery\",\n  },\n  {\n    name: \"Roll & Butter\",\n    price: 9.99,\n    info: \"Yummy and buttery\",\n  },\n  {\n    name: \"Roll & Butter\",\n    price: 9.99,\n    info: \"Yummy and buttery\",\n  },\n  {\n    name: \"Roll & Butter\",\n    price: 9.99,\n    info: \"Yummy and buttery\",\n  },\n];\n\nconst foodItem = ({ name, price, info }) => {\n  const item = document.createElement(\"div\");\n  item.classList.add(\"food-item\");\n\n  const containerTop = document.createElement(\"div\");\n  containerTop.classList.add(\"container-top\");\n\n  const nameH3 = document.createElement(\"h3\");\n  nameH3.textContent = name;\n\n  const priceH3 = document.createElement(\"h3\");\n  priceH3.textContent = price;\n\n  const infoP = document.createElement(\"p\");\n  infoP.textContent = info;\n\n  containerTop.append(nameH3);\n  containerTop.append(priceH3);\n\n  item.append(containerTop);\n  item.append(infoP);\n\n  return item;\n};\n\nconst buildFoodMenu = () => {\n  const containerDiv = document.createElement(\"div\");\n  containerDiv.classList.add(\"food-menu\");\n\n  foodData.forEach((item) => {\n    const foodEl = foodItem(item);\n    containerDiv.append(foodEl);\n  });\n\n  return containerDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildFoodMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/foodMenu.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildFooter = () => {\n  const footer = document.createElement(\"footer\");\n\n  footer.textContent = \"Copyright 2021. Designed by the designer.\";\n\n  return footer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildFooter);\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildForm = () => {\n  const form = document.createElement(\"form\");\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    console.log(\"form submitted\");\n  });\n\n  const nameInp = document.createElement(\"input\");\n  nameInp.setAttribute(\"placeholder\", \"Full Name\");\n  nameInp.setAttribute(\"required\", true);\n\n  const emailInp = document.createElement(\"input\");\n  emailInp.setAttribute(\"placeholder\", \"Email Address\");\n  emailInp.setAttribute(\"required\", true);\n\n  const subjectInp = document.createElement(\"input\");\n  subjectInp.setAttribute(\"placeholder\", \"Subject\");\n  subjectInp.setAttribute(\"required\", true);\n\n  const textArea = document.createElement(\"textArea\");\n  textArea.setAttribute(\"placeholder\", \"Message\");\n  textArea.setAttribute(\"required\", true);\n\n  const submitBtn = document.createElement(\"button\");\n  submitBtn.textContent = \"Send Message\";\n\n  form.append(nameInp);\n  form.append(emailInp);\n  form.append(subjectInp);\n  form.append(textArea);\n  form.append(submitBtn);\n\n  return form;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildForm);\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/form.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/navigation */ \"./src/functions/navigation.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/contact */ \"./src/pages/contact.js\");\n\n\n\n\n\n\nconst pageBuilders = {\n  home: _pages_home__WEBPACK_IMPORTED_MODULE_1__.default,\n  menu: _pages_menu__WEBPACK_IMPORTED_MODULE_2__.default,\n  contact: _pages_contact__WEBPACK_IMPORTED_MODULE_3__.default,\n};\n\nconst buildHeader = (activePage) => {\n  const header = document.createElement(\"header\");\n  const containerDiv = document.createElement(\"div\");\n  containerDiv.classList.add(\"inner-container\");\n\n  const logoDiv = document.createElement(\"div\");\n  logoDiv.classList.add(\"logo\");\n  logoDiv.textContent = \"BLAND\";\n\n  const nav = document.createElement(\"nav\");\n  const ul = document.createElement(\"ul\");\n  const navItems = [\"home\", \"menu\", \"contact\"];\n\n  for (let item of navItems) {\n    let li = document.createElement(\"li\");\n    let a = document.createElement(\"a\");\n\n    if (activePage == item) {\n      a.classList.add(\"active\");\n    }\n\n    a.addEventListener(\"click\", () => {\n      (0,_functions_navigation__WEBPACK_IMPORTED_MODULE_0__.default)(pageBuilders[item](), item);\n    });\n\n    a.textContent = item;\n    li.append(a);\n    ul.append(li);\n  }\n\n  nav.append(ul);\n  containerDiv.append(logoDiv);\n  containerDiv.append(nav);\n  header.append(containerDiv);\n\n  return header;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHeader);\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/header.js?");

/***/ }),

/***/ "./src/components/hero.js":
/*!********************************!*\
  !*** ./src/components/hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildHero = (type = \"heading\") => {\n  // add options for making smaller?\n\n  // Could extract hero into own component\n  const heroSection = document.createElement(\"section\");\n  heroSection.classList.add(\"hero\");\n\n  const innerContainer = document.createElement(\"div\");\n  innerContainer.classList.add(\"inner-container\");\n\n  if (type != \"plain\") {\n    heroSection.classList.add(\"tall\");\n\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"We're Bland\";\n\n    const subText = document.createElement(\"p\");\n    subText.textContent =\n      \"All the good things about our restaurant go here. There are so many of them! Wow are we neat. It's pretty amazing when you really think about it.\";\n\n    innerContainer.append(h1);\n    innerContainer.append(subText);\n  }\n\n  heroSection.append(innerContainer);\n\n  return heroSection;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHero);\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/hero.js?");

/***/ }),

/***/ "./src/components/info-section.js":
/*!****************************************!*\
  !*** ./src/components/info-section.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildInfoSection = ({ title, subtitle, contentElement, id }) => {\n  const infoSection = document.createElement(\"section\");\n  infoSection.id = id;\n  infoSection.classList.add(\"info-section\");\n\n  const innerContainer = document.createElement(\"div\");\n  innerContainer.classList.add(\"inner-container\");\n\n  const titleBox = document.createElement(\"div\");\n  titleBox.classList.add(\"title-box\");\n\n  const titleH1 = document.createElement(\"h1\");\n  titleH1.textContent = title;\n\n  const subtitleH5 = document.createElement(\"h5\");\n  subtitleH5.textContent = subtitle;\n\n  titleBox.append(titleH1);\n  titleBox.append(subtitleH5);\n\n  innerContainer.append(titleBox);\n  innerContainer.append(contentElement);\n\n  infoSection.append(innerContainer);\n\n  return infoSection;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildInfoSection);\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/info-section.js?");

/***/ }),

/***/ "./src/functions/navigation.js":
/*!*************************************!*\
  !*** ./src/functions/navigation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderPage)\n/* harmony export */ });\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n\n\n\nfunction renderPage(page, pageName) {\n  const contentDiv = document.querySelector(\"#content\");\n  contentDiv.innerHTML = \"\";\n  contentDiv.append((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.default)(pageName));\n  contentDiv.append(page);\n  contentDiv.append((0,_components_footer__WEBPACK_IMPORTED_MODULE_0__.default)());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/functions/navigation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _functions_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/navigation */ \"./src/functions/navigation.js\");\n\n\n// import buildHomePage from \"./pages/home\";\n\n\n\n(() => {\n  (0,_functions_navigation__WEBPACK_IMPORTED_MODULE_2__.default)((0,_pages_contact__WEBPACK_IMPORTED_MODULE_1__.default)(), \"contact\");\n})();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/form */ \"./src/components/form.js\");\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hero */ \"./src/components/hero.js\");\n/* harmony import */ var _components_info_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/info-section */ \"./src/components/info-section.js\");\n\n\n\n\nconst contactInfo = () => {\n  const data = {\n    address: \"100 E. Fake Street, Cityville, CA, 90210\",\n    phone: \"(555) 555-5555\",\n    email: \"support@notreal.com\",\n  };\n\n  const div = document.createElement(\"div\");\n  div.classList.add(\"contact-info\");\n\n  const h4 = document.createElement(\"h4\");\n  h4.textContent = \"Contact Info\";\n\n  const ul = document.createElement(\"ul\");\n\n  for (let item in data) {\n    const li = document.createElement(\"li\");\n    li.textContent = data[item];\n    ul.append(li);\n  }\n\n  div.append(h4);\n  div.append(ul);\n\n  return div;\n};\n\nconst buildContactPage = () => {\n  const page = document.createElement(\"div\");\n  page.classList.add(\"page\");\n  page.id = \"home\";\n\n  /* Hero Section (includes header) */\n\n  const heroSection = (0,_components_hero__WEBPACK_IMPORTED_MODULE_1__.default)(\"plain\");\n\n  /* About us section */\n\n  const contactContent = document.createElement(\"div\");\n  contactContent.classList.add(\"content\");\n\n  const form = (0,_components_form__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n  contactContent.append(contactInfo());\n  contactContent.append(form);\n\n  const contactSection = (0,_components_info_section__WEBPACK_IMPORTED_MODULE_2__.default)({\n    title: \"Get In Touch\",\n    subtitle: \"Don't be shy. We want to hear from you!\",\n    contentElement: contactContent,\n    id: \"contact\",\n  });\n\n  /* Add elements to page */\n\n  page.append(heroSection);\n  page.append(contactSection);\n\n  return page;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildContactPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/hero */ \"./src/components/hero.js\");\n/* harmony import */ var _components_info_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/info-section */ \"./src/components/info-section.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card */ \"./src/components/card.js\");\n/* harmony import */ var _assets_food1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/food1.jpg */ \"./src/assets/food1.jpg\");\n/* harmony import */ var _assets_food2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/food2.jpg */ \"./src/assets/food2.jpg\");\n\n\n\n\n\n\n\nconst buildHomePage = () => {\n  const page = document.createElement(\"div\");\n  page.classList.add(\"page\");\n  page.id = \"home\";\n\n  /* Hero Section (includes header) */\n\n  const heroSection = (0,_components_hero__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n  /* About us section */\n\n  const aboutUsContent = document.createElement(\"div\");\n  aboutUsContent.classList.add(\"content\");\n\n  const card1 = (0,_components_card__WEBPACK_IMPORTED_MODULE_2__.default)({\n    imgUrl: _assets_food1_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    text: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus enim magni totam sed, at vitae rem corrupti nam labore neque. Repudiandae non, molestias voluptas voluptatibus, odit ipsa, eligendi eius nisi laborum officiis voluptate voluptatum est nostrum molestiae error velit sunt aliquam! Iste et non voluptates ipsam magni autem quis. Nam, eum autem. Ad dolorum vitae voluptate laudantium iste quis deserunt neque odio impedit repellendus, provident sunt in dolorem dolores aliquid debitis illum labore nam pariatur tenetur voluptates laboriosam eos.\",\n  });\n\n  const card2 = (0,_components_card__WEBPACK_IMPORTED_MODULE_2__.default)({\n    imgUrl: _assets_food2_jpg__WEBPACK_IMPORTED_MODULE_4__,\n    text: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus enim magni totam sed, at vitae rem corrupti nam labore neque. Repudiandae non, molestias voluptas voluptatibus, odit ipsa, eligendi eius nisi laborum officiis voluptate voluptatum est nostrum molestiae error velit sunt aliquam! Iste et non voluptates ipsam magni autem quis. Nam, eum autem. Ad dolorum vitae voluptate laudantium iste quis deserunt neque odio impedit repellendus, provident sunt in dolorem dolores aliquid debitis illum labore nam pariatur tenetur voluptates laboriosam eos.\",\n  });\n\n  aboutUsContent.append(card1);\n  aboutUsContent.append(card2);\n\n  const aboutUsSection = (0,_components_info_section__WEBPACK_IMPORTED_MODULE_1__.default)({ title: \"About Us\", subtitle: \"Our slogan might go here.\", contentElement: aboutUsContent, id: \"about-us\" });\n\n  /* Add elements to page */\n\n  page.append(heroSection);\n  page.append(aboutUsSection);\n\n  return page;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHomePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/hero */ \"./src/components/hero.js\");\n/* harmony import */ var _components_info_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/info-section */ \"./src/components/info-section.js\");\n/* harmony import */ var _components_foodMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/foodMenu */ \"./src/components/foodMenu.js\");\n\n\n\n\nconst buildMenuPage = () => {\n  const page = document.createElement(\"div\");\n  page.classList.add(\"page\");\n  page.id = \"menu\";\n\n  /* Hero Section (includes header) */\n\n  const heroSection = (0,_components_hero__WEBPACK_IMPORTED_MODULE_0__.default)(\"plain\");\n\n  /* Menu section */\n\n  const menuContent = (0,_components_foodMenu__WEBPACK_IMPORTED_MODULE_2__.default)();\n  menuContent.classList.add(\"content\");\n\n  const menuSection = (0,_components_info_section__WEBPACK_IMPORTED_MODULE_1__.default)({\n    title: \"Our Menu\",\n    subtitle: \"It's got to be the best darn food you ever did eat.\",\n    contentElement: menuContent,\n    id: \"our-menu\",\n  });\n\n  /* Add elements to page */\n\n  page.append(heroSection);\n  page.append(menuSection);\n\n  return page;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildMenuPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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