(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/wavy.jpeg */ "./src/img/wavy.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://necolas.github.io/normalize.css/latest/normalize.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* normalize */\n/* Dancing Script */\n/* Noto Sans */\n\n:root {\n    --main-color: rgb(255, 255, 255);\n    --main-background-color: rgb(218, 232, 240);\n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nheader {\n    flex: 0 1 50px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    background: var(--main-background-color);\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    column-gap: 50px;\n    width: 100%;\n}\n\nnav button {\n    flex: 0 1 100px;\n    border: 2px solid black;\n    border-bottom: 0;\n    padding: 10px;\n    border-radius: 20px 20px 0 0;\n    cursor: pointer;\n    background: var(--main-background-color);\n}\n\nnav button:hover {\n    background-color: rgb(14, 32, 59);\n    color: var(--main-color);\n}\n\nmain {\n    flex: 1 1 auto;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-attachment: fixed;\n    background-size: cover;\n    background-repeat: no-repeat;\n    padding: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    flex: 0 1 50%; \n    height: 100%;\n    padding: 30px;\n    border-radius: 50px;\n    background: var(--main-background-color)\n}\n\n.content .title {\n    flex: 0 1 auto;\n}\n\n.content .title h1,\n.content .title h2 {\n    text-align: center;\n    font-family: 'Dancing Script';\n}\n\n.introduction {\n    flex: auto;\n    display: flex;\n    align-items: center;\n    line-height: 2rem;\n    width: 60%;\n}\n\n\n.wrap {\n    width: 80%;\n    border-radius: 20px;\n}\n\n.wrap h2 {\n    margin: 40px 0;\n}\n\n.item {\n    border: 5px solid rgb(222, 192, 118);\n    padding: 20px;\n    border-radius: 80px 30px 80px 30px;\n    background-color: rgb(14, 32, 59);\n    color: white;\n}\n\n.item:not(:last-child) {\n    margin-bottom: 20px;\n}\n\n.name {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n}\n\n.info {\n    padding: 0 30px;\n}\n\n.info p {\n    min-height: 100px;\n}\n\n.info .image {\n    flex: 0 1 auto;\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n}\n\n.info img {\n    height: auto;\n    width: 300px;\n    height: 150px;\n    object-fit: cover;\n    border: 2px solid var(--main-background-color);\n}\n\n.info ul {\n    list-style: none;\n}\n\n.info li {\n    margin: 10px 0;\n}\n\n.animal {\n    display: flex;\n    width: 100%;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 20px;\n}\n\n.animal p {\n    padding: 0 20px;\n    margin: 0;\n}\n\n.animal img {\n    border-radius: 20px;\n    width: 40%;\n}\n\n.animal .orca {\n    transform: scaleX(-1);\n}\n\n.map {\n    width: 100%;\n    height: 100%;\n    border-radius: 20px;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,cAAc;AAEd,mBAAmB;AAEnB,cAAc;;AAGd;IACI,gCAAgC;IAChC,2CAA2C;AAC/C;;AAEA;IACI,sBAAsB;IACtB,uKAAuK;AAC3K;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,4BAA4B;IAC5B,eAAe;IACf,wCAAwC;AAC5C;;AAEA;IACI,iCAAiC;IACjC,wBAAwB;AAC5B;;AAEA;IACI,cAAc;IACd,yDAAyC;IACzC,4BAA4B;IAC5B,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB;AACJ;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,UAAU;AACd;;;AAGA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,kCAAkC;IAClC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,8CAA8C;AAClD;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB","sourcesContent":["/* normalize */\n@import url('https://necolas.github.io/normalize.css/latest/normalize.css');\n/* Dancing Script */\n@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');\n/* Noto Sans */\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');\n\n:root {\n    --main-color: rgb(255, 255, 255);\n    --main-background-color: rgb(218, 232, 240);\n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nheader {\n    flex: 0 1 50px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    background: var(--main-background-color);\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    column-gap: 50px;\n    width: 100%;\n}\n\nnav button {\n    flex: 0 1 100px;\n    border: 2px solid black;\n    border-bottom: 0;\n    padding: 10px;\n    border-radius: 20px 20px 0 0;\n    cursor: pointer;\n    background: var(--main-background-color);\n}\n\nnav button:hover {\n    background-color: rgb(14, 32, 59);\n    color: var(--main-color);\n}\n\nmain {\n    flex: 1 1 auto;\n    background-image: url('../img/wavy.jpeg');\n    background-attachment: fixed;\n    background-size: cover;\n    background-repeat: no-repeat;\n    padding: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    flex: 0 1 50%; \n    height: 100%;\n    padding: 30px;\n    border-radius: 50px;\n    background: var(--main-background-color)\n}\n\n.content .title {\n    flex: 0 1 auto;\n}\n\n.content .title h1,\n.content .title h2 {\n    text-align: center;\n    font-family: 'Dancing Script';\n}\n\n.introduction {\n    flex: auto;\n    display: flex;\n    align-items: center;\n    line-height: 2rem;\n    width: 60%;\n}\n\n\n.wrap {\n    width: 80%;\n    border-radius: 20px;\n}\n\n.wrap h2 {\n    margin: 40px 0;\n}\n\n.item {\n    border: 5px solid rgb(222, 192, 118);\n    padding: 20px;\n    border-radius: 80px 30px 80px 30px;\n    background-color: rgb(14, 32, 59);\n    color: white;\n}\n\n.item:not(:last-child) {\n    margin-bottom: 20px;\n}\n\n.name {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n}\n\n.info {\n    padding: 0 30px;\n}\n\n.info p {\n    min-height: 100px;\n}\n\n.info .image {\n    flex: 0 1 auto;\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n}\n\n.info img {\n    height: auto;\n    width: 300px;\n    height: 150px;\n    object-fit: cover;\n    border: 2px solid var(--main-background-color);\n}\n\n.info ul {\n    list-style: none;\n}\n\n.info li {\n    margin: 10px 0;\n}\n\n.animal {\n    display: flex;\n    width: 100%;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 20px;\n}\n\n.animal p {\n    padding: 0 20px;\n    margin: 0;\n}\n\n.animal img {\n    border-radius: 20px;\n    width: 40%;\n}\n\n.animal .orca {\n    transform: scaleX(-1);\n}\n\n.map {\n    width: 100%;\n    height: 100%;\n    border-radius: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/menu sync recursive \\.(svg%7Cjpg%7Cjpeg%7Cwebp)$/":
/*!**********************************************************!*\
  !*** ./src/img/menu/ sync \.(svg%7Cjpg%7Cjpeg%7Cwebp)$/ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bbq_octopus.jpeg": "./src/img/menu/bbq_octopus.jpeg",
	"./dungeness_crab.jpeg": "./src/img/menu/dungeness_crab.jpeg",
	"./grilled_oysters.webp": "./src/img/menu/grilled_oysters.webp",
	"./grilled_shrimp.webp": "./src/img/menu/grilled_shrimp.webp",
	"./kalakeitto.jpeg": "./src/img/menu/kalakeitto.jpeg",
	"./lobster.webp": "./src/img/menu/lobster.webp",
	"./marina.jpeg": "./src/img/menu/marina.jpeg",
	"./oysters.webp": "./src/img/menu/oysters.webp",
	"./red_snapper.webp": "./src/img/menu/red_snapper.webp"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img/menu sync recursive \\.(svg%7Cjpg%7Cjpeg%7Cwebp)$/";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/home */ "./src/js/home.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");
/* harmony import */ var _js_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/contact */ "./src/js/contact.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");


;




const container = document.querySelector('.container')
const content = document.querySelector('.content')

container.addEventListener('click', switchPage)

content.innerHTML = (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();

function switchPage(e) {
    if (e.target.tagName !== 'BUTTON') return

    const page = e.target.className;
    const handleRender = {
        home: _js_home__WEBPACK_IMPORTED_MODULE_0__.createHomePage,
        menu: _js_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuPage,
        contact: _js_contact__WEBPACK_IMPORTED_MODULE_2__.createContactPage
    }

    const template = handleRender[page]()
    content.innerHTML = template
}


/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactPage": () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _img_contact_orca_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/contact/orca.jpeg */ "./src/img/contact/orca.jpeg");
/* harmony import */ var _img_contact_shark_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/contact/shark.webp */ "./src/img/contact/shark.webp");


;



function createContactPage() {

    const template = `
        <div class="title">
            <h1 >Contact Us</h1>
        </div>
        <div class="wrap">
            <div class="item">
                <div class="info">
                    <h3>Boss Orcark</h3>
                </div>
                <div class="animal">
                    
                    <p>Deadly and beautiful apex chefs that lurk in ocean</p>
                    <img src="${_img_contact_orca_jpeg__WEBPACK_IMPORTED_MODULE_0__}" alt="Boss Orca">
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <h3>Manager Sharka</h3>
                </div>
                <div class="animal">
                    <p>The oldest hunters also are true super fisherman</p>
                    <img src="${_img_contact_shark_webp__WEBPACK_IMPORTED_MODULE_1__}" alt="ManagerShark">
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <h3>hours</h3>
                    <ul>
                        <li>Sunday: 6am - 12pm</li>
                        <li>Monday: 6am - 12pm</li>
                        <li>Tuesday: 6am - 12pm</li>
                        <li>Wednesday: 6am - 12pm</li>
                        <li>Thursday: 6am - 12pm</li>
                        <li>Friday: 10am - 12pm</li>
                        <li>Saturday: 10am - 12pm</li>
                    </ul>
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <h3>Main store</h3>
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64722591.56959051!2d-149.23960340000002!3d-8.065379849999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ed042c30f318eb%3A0x8eff14a070876cbc!2sPacific%20Ocean!5e0!3m2!1sen!2stw!4v1664445757828!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <h3>Branch store</h3>
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65352652.085742734!2d-31.498041349999983!3d-1.288586049999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65a81cae36eb8ff%3A0xa6342257f310534f!2sAtlantic%20Ocean!5e0!3m2!1sen!2stw!4v1664445877327!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        </div>
            </div>
        </div>
    `
    return template
}



/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _img_home_orca_cartoon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/home/orca_cartoon.svg */ "./src/img/home/orca_cartoon.svg");
/* harmony import */ var _img_home_shark_cartoon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/home/shark_cartoon.svg */ "./src/img/home/shark_cartoon.svg");


;


function createHomePage() {

    const template = `
        <div class="title">
            <h1>Ocean Market</h1>
            <h2>A must-visit for every seafood lover </h2>
        </div>
        <p class="introduction">
            Archeological records suggest that orcas and sharks have been hunting and eating seafood for at least 250,000  years and I think it’s safe to say we’ve gotten pretty good at it. Some of the world’s greatest delicacies come from our oceans.Arctic to the Antarctic, these are the ultimate destinations for seafood.
        </p>
        <div class="animal">
            <img class="orca" src="${_img_home_orca_cartoon_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="Orca Characters">
            <img src="${_img_home_shark_cartoon_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="Shark Characters">
        </div>
    `
    return template
}



/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuPage": () => (/* binding */ createMenuPage)
/* harmony export */ });


function importAll(img) {

    const obj = {};
    const keys = img.keys(); // original url

    keys.forEach((key) => {
        const name = key.match(/(?<=\/)\w+/)[0]; // get file name
        obj[name] = img(key) // img(key) to get hash url
    })

    return obj
}

function createMenuPage() {

    const img = importAll(__webpack_require__("./src/img/menu sync recursive \\.(svg%7Cjpg%7Cjpeg%7Cwebp)$/"));

    const template = `
        <div class="title">
            <h1 >Menu</h1>
        </div>
        <div class="wrap">
            <h2>Antipasto</h2>
            <div class="item">
                <div class="name">
                    <h3>Barbecued octopus with tahini sauce</h3>
                    <span class="cost">4$</span>
                </div>
                <div class="info">
                    <p>I love the charred flavours of barbecued octopus, with this smooth tahini sauce on top. The tahini sauce is also beautiful with barbecued squid or cuttlefish, or a fillet of barbecued fish.</p>
                    <div class="image">
                        <img src="${img.bbq_octopus}" alt="BBQ Octopus">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Pop-Up Oysters</h3>
                    <span class="cost">3$</span>
                </div>
                <div class="info">
                    <p>Not an oyster-shucking pro? Throw them right on the grill and let the heat open them up for you.</p>
                    <div class="image">
                        <img src="${img.oysters}" alt="Oysters">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Shrimp with Condensed Milk Sauce</h3>
                    <span class="cost">5$</span>
                </div>
                <div class="info">
                    <p>The shrimp get an extra punch of flavor from the dipping sauce, which is spiked with Thai green chiles and tempered with sweetened condensed milk.</p>
                    <div class="image">
                        <img src="${img.grilled_shrimp}" alt="Shrimp">
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap">
            <h2>Main Dish</h2>
            <div class="item">
                <div class="name">
                    <h3>Red Snapper with Smoked Almond Chimichurri</h3>
                    <span class="cost">8$</span>
                </div>
                <div class="info">
                    <p>I love the charred flavours of barbecued octopus, with this smooth tahini sauce on top. The tahini sauce is also beautiful with barbecued squid or cuttlefish, or a fillet of barbecued fish.</p>
                    <div class="image">
                        <img src="${img.red_snapper}" alt="Red Snapper">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Grilled Split Lobster</h3>
                    <span class="cost">9$</span>
                </div>
                <div class="info">
                    <p>Splitting lobsters in half makes them easier to grill—and eat.</p>
                    <div class="image">
                        <img src="${img.lobster}" alt="Lobster">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Sautéed Garlic Butter Dungeness Crab</h3>
                    <span class="cost">9$</span>
                </div>
                <div class="info">
                    <p>Sauteed Garlic Butter Dungeness Crab a total delicacy, these crab are easily cooked to perfection in an irresistible garlic butter sauce.</p>
                    <div class="image">
                        <img src="${img.dungeness_crab}" alt="Dungeness Crab">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Oysters with Chorizo Butter</h3>
                    <span class="cost">7$</span>
                </div>
                <div class="info">
                    <p>No shucking necessary: Once the oysters open on the grill, simply top them with chef smoky, tangy butter.</p>
                    <div class="image">
                        <img src="${img.grilled_oysters}" alt="Oysters">
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap">
            <h2>Soup</h2>
            <div class="item">
                <div class="name">
                    <h3>Paila marina</h3>
                    <span class="cost">5$</span>
                </div>
                <div class="info">
                    <p>consisting of a shellfish stock combined with a variety of img, shellfish, herbs, spices, and vegetables such as tomatoes, bell peppers, carrots, and onions.</p>
                    <div class="image">
                        <img src="${img.marina}" alt="Marina">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Kalakeitto</h3>
                    <span class="cost">5$</span>
                </div>
                <div class="info">
                    <p>It consists of filleted rainbow trout chunks and diced Carrots, potatoes, onions, that are simmered in a rich, buttery fish broth.</p>
                    <div class="image">
                        <img src="${img.kalakeitto}" alt="Kalakeitto">
                    </div>
                </div>
            </div>
        </div>
    `
    return template
}



/***/ }),

/***/ "./src/img/contact/orca.jpeg":
/*!***********************************!*\
  !*** ./src/img/contact/orca.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/0d554388b3bf4f0fceff.jpeg";

/***/ }),

/***/ "./src/img/contact/shark.webp":
/*!************************************!*\
  !*** ./src/img/contact/shark.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/189f03b11222dd8e34bd.webp";

/***/ }),

/***/ "./src/img/home/orca_cartoon.svg":
/*!***************************************!*\
  !*** ./src/img/home/orca_cartoon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/66d56b70dc10d88bf3d0.svg";

/***/ }),

/***/ "./src/img/home/shark_cartoon.svg":
/*!****************************************!*\
  !*** ./src/img/home/shark_cartoon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/7c1f5cfc9d6b5ec14d92.svg";

/***/ }),

/***/ "./src/img/menu/bbq_octopus.jpeg":
/*!***************************************!*\
  !*** ./src/img/menu/bbq_octopus.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/434cfe3bd3655318f6f6.jpeg";

/***/ }),

/***/ "./src/img/menu/dungeness_crab.jpeg":
/*!******************************************!*\
  !*** ./src/img/menu/dungeness_crab.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/5881f453071826a0803a.jpeg";

/***/ }),

/***/ "./src/img/menu/grilled_oysters.webp":
/*!*******************************************!*\
  !*** ./src/img/menu/grilled_oysters.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/d2813782160cb5e895b3.webp";

/***/ }),

/***/ "./src/img/menu/grilled_shrimp.webp":
/*!******************************************!*\
  !*** ./src/img/menu/grilled_shrimp.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/143563a63c03b6b85d63.webp";

/***/ }),

/***/ "./src/img/menu/kalakeitto.jpeg":
/*!**************************************!*\
  !*** ./src/img/menu/kalakeitto.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/957ed9dab1083e7bca15.jpeg";

/***/ }),

/***/ "./src/img/menu/lobster.webp":
/*!***********************************!*\
  !*** ./src/img/menu/lobster.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/0a27bb3e7e4fe1521d24.webp";

/***/ }),

/***/ "./src/img/menu/marina.jpeg":
/*!**********************************!*\
  !*** ./src/img/menu/marina.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bcd1e687da3dde130a8c.jpeg";

/***/ }),

/***/ "./src/img/menu/oysters.webp":
/*!***********************************!*\
  !*** ./src/img/menu/oysters.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/1b4a42b81ffbbffd22a5.webp";

/***/ }),

/***/ "./src/img/menu/red_snapper.webp":
/*!***************************************!*\
  !*** ./src/img/menu/red_snapper.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/c69a455c1dd2fd8763bc.webp";

/***/ }),

/***/ "./src/img/wavy.jpeg":
/*!***************************!*\
  !*** ./src/img/wavy.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bc269deb0d05fbea1847.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFlBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGVBQWU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWcvbWVudS8gc3luYyBcXC4oc3ZnJTdDanBnJTdDanBlZyU3Q3dlYnApJC8iLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvd2F2eS5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9uZWNvbGFzLmdpdGh1Yi5pby9ub3JtYWxpemUuY3NzL2xhdGVzdC9ub3JtYWxpemUuY3NzKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBub3JtYWxpemUgKi9cXG4vKiBEYW5jaW5nIFNjcmlwdCAqL1xcbi8qIE5vdG8gU2FucyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyMzIsIDI0MCk7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZsZXg6IDAgMSA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm5hdiBidXR0b24ge1xcbiAgICBmbGV4OiAwIDEgMTAwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbm5hdiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDMyLCA1OSk7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAwIDEgNTAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpXFxufVxcblxcbi5jb250ZW50IC50aXRsZSB7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbn1cXG5cXG4uY29udGVudCAudGl0bGUgaDEsXFxuLmNvbnRlbnQgLnRpdGxlIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JztcXG59XFxuXFxuLmludHJvZHVjdGlvbiB7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG5cXG4ud3JhcCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi53cmFwIGgyIHtcXG4gICAgbWFyZ2luOiA0MHB4IDA7XFxufVxcblxcbi5pdGVtIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDIyMiwgMTkyLCAxMTgpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4IDMwcHggODBweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDMyLCA1OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLml0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBwYWRkaW5nOiAwIDMwcHg7XFxufVxcblxcbi5pbmZvIHAge1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmluZm8gLmltYWdlIHtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZm8gaW1nIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uaW5mbyB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5pbmZvIGxpIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5hbmltYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5hbmltYWwgcCB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYW5pbWFsIGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi5hbmltYWwgLm9yY2Ege1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxufVxcblxcbi5tYXAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBRWQsbUJBQW1CO0FBRW5CLGNBQWM7O0FBR2Q7SUFDSSxnQ0FBZ0M7SUFDaEMsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVLQUF1SztBQUMzSzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlEQUF5QztJQUN6Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBub3JtYWxpemUgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9uZWNvbGFzLmdpdGh1Yi5pby9ub3JtYWxpemUuY3NzL2xhdGVzdC9ub3JtYWxpemUuY3NzJyk7XFxuLyogRGFuY2luZyBTY3JpcHQgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcXG4vKiBOb3RvIFNhbnMgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1tYWluLWJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIzMiwgMjQwKTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZmxleDogMCAxIDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxubmF2IGJ1dHRvbiB7XFxuICAgIGZsZXg6IDAgMSAxMDBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxubmF2IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMzIsIDU5KTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL3dhdnkuanBlZycpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAwIDEgNTAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpXFxufVxcblxcbi5jb250ZW50IC50aXRsZSB7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbn1cXG5cXG4uY29udGVudCAudGl0bGUgaDEsXFxuLmNvbnRlbnQgLnRpdGxlIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JztcXG59XFxuXFxuLmludHJvZHVjdGlvbiB7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG5cXG4ud3JhcCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi53cmFwIGgyIHtcXG4gICAgbWFyZ2luOiA0MHB4IDA7XFxufVxcblxcbi5pdGVtIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDIyMiwgMTkyLCAxMTgpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4IDMwcHggODBweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDMyLCA1OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLml0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBwYWRkaW5nOiAwIDMwcHg7XFxufVxcblxcbi5pbmZvIHAge1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmluZm8gLmltYWdlIHtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZm8gaW1nIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uaW5mbyB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5pbmZvIGxpIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5hbmltYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5hbmltYWwgcCB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYW5pbWFsIGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi5hbmltYWwgLm9yY2Ege1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxufVxcblxcbi5tYXAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2JicV9vY3RvcHVzLmpwZWdcIjogXCIuL3NyYy9pbWcvbWVudS9iYnFfb2N0b3B1cy5qcGVnXCIsXG5cdFwiLi9kdW5nZW5lc3NfY3JhYi5qcGVnXCI6IFwiLi9zcmMvaW1nL21lbnUvZHVuZ2VuZXNzX2NyYWIuanBlZ1wiLFxuXHRcIi4vZ3JpbGxlZF9veXN0ZXJzLndlYnBcIjogXCIuL3NyYy9pbWcvbWVudS9ncmlsbGVkX295c3RlcnMud2VicFwiLFxuXHRcIi4vZ3JpbGxlZF9zaHJpbXAud2VicFwiOiBcIi4vc3JjL2ltZy9tZW51L2dyaWxsZWRfc2hyaW1wLndlYnBcIixcblx0XCIuL2thbGFrZWl0dG8uanBlZ1wiOiBcIi4vc3JjL2ltZy9tZW51L2thbGFrZWl0dG8uanBlZ1wiLFxuXHRcIi4vbG9ic3Rlci53ZWJwXCI6IFwiLi9zcmMvaW1nL21lbnUvbG9ic3Rlci53ZWJwXCIsXG5cdFwiLi9tYXJpbmEuanBlZ1wiOiBcIi4vc3JjL2ltZy9tZW51L21hcmluYS5qcGVnXCIsXG5cdFwiLi9veXN0ZXJzLndlYnBcIjogXCIuL3NyYy9pbWcvbWVudS9veXN0ZXJzLndlYnBcIixcblx0XCIuL3JlZF9zbmFwcGVyLndlYnBcIjogXCIuL3NyYy9pbWcvbWVudS9yZWRfc25hcHBlci53ZWJwXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZy9tZW51IHN5bmMgcmVjdXJzaXZlIFxcXFwuKHN2ZyU3Q2pwZyU3Q2pwZWclN0N3ZWJwKSQvXCI7IiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7Y3JlYXRlSG9tZVBhZ2UgYXMgaG9tZSB9IGZyb20gJy4vanMvaG9tZSdcbmltcG9ydCB7Y3JlYXRlTWVudVBhZ2UgYXMgbWVudSB9ICBmcm9tICcuL2pzL21lbnUnXG5pbXBvcnQge2NyZWF0ZUNvbnRhY3RQYWdlIGFzIGNvbnRhY3QgfSBmcm9tICcuL2pzL2NvbnRhY3QnXG5pbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoUGFnZSlcblxuY29udGVudC5pbm5lckhUTUwgPSBob21lKCk7XG5cbmZ1bmN0aW9uIHN3aXRjaFBhZ2UoZSkge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lICE9PSAnQlVUVE9OJykgcmV0dXJuXG5cbiAgICBjb25zdCBwYWdlID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgIGNvbnN0IGhhbmRsZVJlbmRlciA9IHtcbiAgICAgICAgaG9tZSxcbiAgICAgICAgbWVudSxcbiAgICAgICAgY29udGFjdFxuICAgIH1cblxuICAgIGNvbnN0IHRlbXBsYXRlID0gaGFuZGxlUmVuZGVyW3BhZ2VdKClcbiAgICBjb250ZW50LmlubmVySFRNTCA9IHRlbXBsYXRlXG59XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IG9yY2EgZnJvbSAnLi4vaW1nL2NvbnRhY3Qvb3JjYS5qcGVnJztcbmltcG9ydCBzaGFyayBmcm9tICcuLi9pbWcvY29udGFjdC9zaGFyay53ZWJwJztcblxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcblxuICAgIGNvbnN0IHRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxoMSA+Q29udGFjdCBVczwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+Qm9zcyBPcmNhcms8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmltYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxwPkRlYWRseSBhbmQgYmVhdXRpZnVsIGFwZXggY2hlZnMgdGhhdCBsdXJrIGluIG9jZWFuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7b3JjYX1cIiBhbHQ9XCJCb3NzIE9yY2FcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+TWFuYWdlciBTaGFya2E8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbmltYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VGhlIG9sZGVzdCBodW50ZXJzIGFsc28gYXJlIHRydWUgc3VwZXIgZmlzaGVybWFuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7c2hhcmt9XCIgYWx0PVwiTWFuYWdlclNoYXJrXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPmhvdXJzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN1bmRheTogNmFtIC0gMTJwbTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+TW9uZGF5OiA2YW0gLSAxMnBtPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UdWVzZGF5OiA2YW0gLSAxMnBtPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZWRuZXNkYXk6IDZhbSAtIDEycG08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRodXJzZGF5OiA2YW0gLSAxMnBtPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GcmlkYXk6IDEwYW0gLSAxMnBtPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYXR1cmRheTogMTBhbSAtIDEycG08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5NYWluIHN0b3JlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBjbGFzcz1cIm1hcFwiIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDY0NzIyNTkxLjU2OTU5MDUxITJkLTE0OS4yMzk2MDM0MDAwMDAwMiEzZC04LjA2NTM3OTg0OTk5OTk4NSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NzZlZDA0MmMzMGYzMThlYiUzQTB4OGVmZjE0YTA3MDg3NmNiYyEyc1BhY2lmaWMlMjBPY2VhbiE1ZTAhM20yITFzZW4hMnN0dyE0djE2NjQ0NDU3NTc4MjghNW0yITFzZW4hMnN0d1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+QnJhbmNoIHN0b3JlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBjbGFzcz1cIm1hcFwiIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDY1MzUyNjUyLjA4NTc0MjczNCEyZC0zMS40OTgwNDEzNDk5OTk5ODMhM2QtMS4yODg1ODYwNDk5OTk5ODkhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDY1YTgxY2FlMzZlYjhmZiUzQTB4YTYzNDIyNTdmMzEwNTM0ZiEyc0F0bGFudGljJTIwT2NlYW4hNWUwITNtMiExc2VuITJzdHchNHYxNjY0NDQ1ODc3MzI3ITVtMiExc2VuITJzdHdcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIHJldHVybiB0ZW1wbGF0ZVxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUNvbnRhY3RQYWdlXG59OyIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgb3JjYUNoYXJhY3RlcnMgZnJvbSAnLi4vaW1nL2hvbWUvb3JjYV9jYXJ0b29uLnN2Zyc7XG5pbXBvcnQgc2hhcmtDaGFyYWN0ZXJzIGZyb20gJy4uL2ltZy9ob21lL3NoYXJrX2NhcnRvb24uc3ZnJztcblxuZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8aDE+T2NlYW4gTWFya2V0PC9oMT5cbiAgICAgICAgICAgIDxoMj5BIG11c3QtdmlzaXQgZm9yIGV2ZXJ5IHNlYWZvb2QgbG92ZXIgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICBBcmNoZW9sb2dpY2FsIHJlY29yZHMgc3VnZ2VzdCB0aGF0IG9yY2FzIGFuZCBzaGFya3MgaGF2ZSBiZWVuIGh1bnRpbmcgYW5kIGVhdGluZyBzZWFmb29kIGZvciBhdCBsZWFzdCAyNTAsMDAwICB5ZWFycyBhbmQgSSB0aGluayBpdOKAmXMgc2FmZSB0byBzYXkgd2XigJl2ZSBnb3R0ZW4gcHJldHR5IGdvb2QgYXQgaXQuIFNvbWUgb2YgdGhlIHdvcmxk4oCZcyBncmVhdGVzdCBkZWxpY2FjaWVzIGNvbWUgZnJvbSBvdXIgb2NlYW5zLkFyY3RpYyB0byB0aGUgQW50YXJjdGljLCB0aGVzZSBhcmUgdGhlIHVsdGltYXRlIGRlc3RpbmF0aW9ucyBmb3Igc2VhZm9vZC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW5pbWFsXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwib3JjYVwiIHNyYz1cIiR7b3JjYUNoYXJhY3RlcnN9XCIgYWx0PVwiT3JjYSBDaGFyYWN0ZXJzXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7c2hhcmtDaGFyYWN0ZXJzfVwiIGFsdD1cIlNoYXJrIENoYXJhY3RlcnNcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIHJldHVybiB0ZW1wbGF0ZVxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUhvbWVQYWdlXG59OyIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBpbXBvcnRBbGwoaW1nKSB7XG5cbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBjb25zdCBrZXlzID0gaW1nLmtleXMoKTsgLy8gb3JpZ2luYWwgdXJsXG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0ga2V5Lm1hdGNoKC8oPzw9XFwvKVxcdysvKVswXTsgLy8gZ2V0IGZpbGUgbmFtZVxuICAgICAgICBvYmpbbmFtZV0gPSBpbWcoa2V5KSAvLyBpbWcoa2V5KSB0byBnZXQgaGFzaCB1cmxcbiAgICB9KVxuXG4gICAgcmV0dXJuIG9ialxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcblxuICAgIGNvbnN0IGltZyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ltZy9tZW51LycsIHRydWUsIC9cXC4oc3ZnfGpwZ3xqcGVnfHdlYnApJC9pKSk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8aDEgPk1lbnU8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBcIj5cbiAgICAgICAgICAgIDxoMj5BbnRpcGFzdG88L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+QmFyYmVjdWVkIG9jdG9wdXMgd2l0aCB0YWhpbmkgc2F1Y2U8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvc3RcIj40JDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD5JIGxvdmUgdGhlIGNoYXJyZWQgZmxhdm91cnMgb2YgYmFyYmVjdWVkIG9jdG9wdXMsIHdpdGggdGhpcyBzbW9vdGggdGFoaW5pIHNhdWNlIG9uIHRvcC4gVGhlIHRhaGluaSBzYXVjZSBpcyBhbHNvIGJlYXV0aWZ1bCB3aXRoIGJhcmJlY3VlZCBzcXVpZCBvciBjdXR0bGVmaXNoLCBvciBhIGZpbGxldCBvZiBiYXJiZWN1ZWQgZmlzaC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZy5iYnFfb2N0b3B1c31cIiBhbHQ9XCJCQlEgT2N0b3B1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+UG9wLVVwIE95c3RlcnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvc3RcIj4zJDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Ob3QgYW4gb3lzdGVyLXNodWNraW5nIHBybz8gVGhyb3cgdGhlbSByaWdodCBvbiB0aGUgZ3JpbGwgYW5kIGxldCB0aGUgaGVhdCBvcGVuIHRoZW0gdXAgZm9yIHlvdS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZy5veXN0ZXJzfVwiIGFsdD1cIk95c3RlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlNocmltcCB3aXRoIENvbmRlbnNlZCBNaWxrIFNhdWNlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3N0XCI+NSQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VGhlIHNocmltcCBnZXQgYW4gZXh0cmEgcHVuY2ggb2YgZmxhdm9yIGZyb20gdGhlIGRpcHBpbmcgc2F1Y2UsIHdoaWNoIGlzIHNwaWtlZCB3aXRoIFRoYWkgZ3JlZW4gY2hpbGVzIGFuZCB0ZW1wZXJlZCB3aXRoIHN3ZWV0ZW5lZCBjb25kZW5zZWQgbWlsay48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZy5ncmlsbGVkX3NocmltcH1cIiBhbHQ9XCJTaHJpbXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCI+XG4gICAgICAgICAgICA8aDI+TWFpbiBEaXNoPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlJlZCBTbmFwcGVyIHdpdGggU21va2VkIEFsbW9uZCBDaGltaWNodXJyaTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29zdFwiPjgkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkkgbG92ZSB0aGUgY2hhcnJlZCBmbGF2b3VycyBvZiBiYXJiZWN1ZWQgb2N0b3B1cywgd2l0aCB0aGlzIHNtb290aCB0YWhpbmkgc2F1Y2Ugb24gdG9wLiBUaGUgdGFoaW5pIHNhdWNlIGlzIGFsc28gYmVhdXRpZnVsIHdpdGggYmFyYmVjdWVkIHNxdWlkIG9yIGN1dHRsZWZpc2gsIG9yIGEgZmlsbGV0IG9mIGJhcmJlY3VlZCBmaXNoLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1nLnJlZF9zbmFwcGVyfVwiIGFsdD1cIlJlZCBTbmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5HcmlsbGVkIFNwbGl0IExvYnN0ZXI8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvc3RcIj45JDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD5TcGxpdHRpbmcgbG9ic3RlcnMgaW4gaGFsZiBtYWtlcyB0aGVtIGVhc2llciB0byBncmlsbOKAlGFuZCBlYXQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWcubG9ic3Rlcn1cIiBhbHQ9XCJMb2JzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5TYXV0w6llZCBHYXJsaWMgQnV0dGVyIER1bmdlbmVzcyBDcmFiPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3N0XCI+OSQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+U2F1dGVlZCBHYXJsaWMgQnV0dGVyIER1bmdlbmVzcyBDcmFiIGEgdG90YWwgZGVsaWNhY3ksIHRoZXNlIGNyYWIgYXJlIGVhc2lseSBjb29rZWQgdG8gcGVyZmVjdGlvbiBpbiBhbiBpcnJlc2lzdGlibGUgZ2FybGljIGJ1dHRlciBzYXVjZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZy5kdW5nZW5lc3NfY3JhYn1cIiBhbHQ9XCJEdW5nZW5lc3MgQ3JhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+T3lzdGVycyB3aXRoIENob3Jpem8gQnV0dGVyPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3N0XCI+NyQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Tm8gc2h1Y2tpbmcgbmVjZXNzYXJ5OiBPbmNlIHRoZSBveXN0ZXJzIG9wZW4gb24gdGhlIGdyaWxsLCBzaW1wbHkgdG9wIHRoZW0gd2l0aCBjaGVmIHNtb2t5LCB0YW5neSBidXR0ZXIuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWcuZ3JpbGxlZF9veXN0ZXJzfVwiIGFsdD1cIk95c3RlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCI+XG4gICAgICAgICAgICA8aDI+U291cDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5QYWlsYSBtYXJpbmE8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvc3RcIj41JDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD5jb25zaXN0aW5nIG9mIGEgc2hlbGxmaXNoIHN0b2NrIGNvbWJpbmVkIHdpdGggYSB2YXJpZXR5IG9mIGltZywgc2hlbGxmaXNoLCBoZXJicywgc3BpY2VzLCBhbmQgdmVnZXRhYmxlcyBzdWNoIGFzIHRvbWF0b2VzLCBiZWxsIHBlcHBlcnMsIGNhcnJvdHMsIGFuZCBvbmlvbnMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWcubWFyaW5hfVwiIGFsdD1cIk1hcmluYVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+S2FsYWtlaXR0bzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29zdFwiPjUkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkl0IGNvbnNpc3RzIG9mIGZpbGxldGVkIHJhaW5ib3cgdHJvdXQgY2h1bmtzIGFuZCBkaWNlZCBDYXJyb3RzLCBwb3RhdG9lcywgb25pb25zLCB0aGF0IGFyZSBzaW1tZXJlZCBpbiBhIHJpY2gsIGJ1dHRlcnkgZmlzaCBicm90aC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZy5rYWxha2VpdHRvfVwiIGFsdD1cIkthbGFrZWl0dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIHJldHVybiB0ZW1wbGF0ZVxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1lbnVQYWdlXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==