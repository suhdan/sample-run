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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n  canvas {\n    width: 800px;\n    height: 400px;\n    background: linear-gradient(180deg, #01003d, #1b0092);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  h1 {\n    text-align: center;\n  }", "",{"version":3,"sources":["main.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;EACE;IACE,YAAY;IACZ,aAAa;IACb,qDAAqD;IACrD,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;EAClC;;EAEA;IACE,kBAAkB;EACpB","file":"main.css","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n  canvas {\n    width: 800px;\n    height: 400px;\n    background: linear-gradient(180deg, #01003d, #1b0092);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  h1 {\n    text-align: center;\n  }"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/background.js":
/*!**************************************!*\
  !*** ./src/components/background.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/components/config.js");



class Background {
    constructor (imgSource, xPos, yPos, width, height, scrollSpeed) {       
        this.image = new Image;
        this.image.src = imgSource;
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.scrollSpeed = scrollSpeed;
    }
    
    Scroll() {
        if (this.xPos <= -this.width + _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed) {
            this.xPos = this.width;
        } else {
            this.xPos -= this.scrollSpeed;
        }
        this.Draw();
    }

    AcceleratedScroll() {
        if (this.xPos <= -_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width) {
            this.xPos = _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width;
        } else {
            this.xPos -= _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed;
        }
        this.Draw();
    }
    
    Draw() {
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(this.image, this.xPos, this.yPos, this.width, this.height);
    }
}

/***/ }),

/***/ "./src/components/collision.js":
/*!*************************************!*\
  !*** ./src/components/collision.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkCollision; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/components/config.js");


function checkCollision (player, obst) {

    if ( 
        player.xPos                 < obst.xPos + obst.width &&
        player.xPos + player.width  > obst.xPos          &&
        player.yPos                 < obst.yPos + obst.height &&
        player.yPos + player.height > obst.yPos
    ) {
        //Automatically restart game
        //TO DO: game over screen
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles = [];
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score = 0;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].spawnTimer = _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].initialTimer;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed = 10;
        window.localStorage.setItem('highScore', _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore);
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].over = true;
    }
}

/***/ }),

/***/ "./src/components/config.js":
/*!**********************************!*\
  !*** ./src/components/config.js ***!
  \**********************************/
/*! exports provided: canvas, ctx, game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const game = {
    gravity: 1,
    speed: 10,
    score: 0,
    highScore: 0,
    obstacles: [],
    speedInc: .05,
    speedMax: 30,
    initialTimer: 100,
    spawnTimer: 100,
    over: false
}

/***/ }),

/***/ "./src/components/obstacle.js":
/*!************************************!*\
  !*** ./src/components/obstacle.js ***!
  \************************************/
/*! exports provided: default, Spawn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Obstacle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spawn", function() { return Spawn; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/components/config.js");


class Obstacle {
    constructor (xPos, yPos, width, height, color){
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.color = color;
    }      
    Animate () {
        this.xPos -= _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed;
        this.Draw();
    }
    Draw () {
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = this.color;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(this.xPos, this.yPos, this.width, this.height);
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath;
    }
}

function Spawn () {
    if (_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].spawnTimer <= 0) {
    let size = 50;
    //Change to humanoid with shot
    let obstacle = new Obstacle(_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width + size, _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - size - 10, size, size, '#FF0000');
    
    _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles.push(obstacle);;
    //Make spawnTimer random
    _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].spawnTimer = 60;
    }
    _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].spawnTimer--;

    if (_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles.length > 1) {
        if (_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles[0].xPos + _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles[0].width < 0) {
            _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles.shift();
        }
    }
}

/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/components/config.js");


let keys = {};
document.addEventListener('keydown', function (evt) {
    keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
    keys[evt.code] = false;
});


class Player {
    constructor (xPos, yPos, width, height, color) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ySpeed = 0;
        this.jumpForce = 15;
        this.grounded = false;
        this.jumpTimer = 0;
    }
    
    Animate () {

        if (keys['Space'] || keys['ArrowUp']) {
            this.Jump();
        } else {
            this.jumpTimer = 0;
        }
        this.yPos += this.ySpeed;

        //Gravity
        if (this.yPos + this.height < _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 10) {
            this.ySpeed += _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].gravity;
            this.grounded = false;
        } else {
            this.ySpeed = 0;
            this.grounded = true;
            this.yPos = _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - this.height - 10;
        }

        this.Draw();
    }

    Jump () {
        if (this.grounded && this.jumpTimer == 0){
            this.jumpTimer = 1;
            this.ySpeed = -this.jumpForce;
        } 
        // OPTIONAL CODE: add code below
        // to make Player jump higher when space/ArrowUp key is held down
        //__________________________________________________________
            //else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
            //this.jumpTimer++;
            //this.dy = -this.jumpForce - (this.jumpTimer / 50);
            //}
        //_____________________________________________________________
    }    
    Draw () {
    //Change to a humanoid figure later
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = this.color;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(this.xPos, this.yPos, this.width, this.height);
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath;
    }

}

/***/ }),

/***/ "./src/components/text.js":
/*!********************************!*\
  !*** ./src/components/text.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/components/config.js");
 

class Text {
    constructor (text, xPos, yPos, alignment, color, size){
        this.text = text;
        this.xPos = xPos;
        this.yPos = yPos;
        this.alignment = alignment;
        this.color = color;
        this.size = size;
    }
    Draw () {
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = this.color;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = this.size + "px monospace"; 
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].textAlign = this.alignment;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(this.text, this.xPos, this.yPos);
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath();
    }
}

/***/ }),

/***/ "./src/img/sober-run-buildings.png":
/*!*****************************************!*\
  !*** ./src/img/sober-run-buildings.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4a8a36a8192c58a98667ddfb2b96411c.png");

/***/ }),

/***/ "./src/img/sober-run-sidewalk2.png":
/*!*****************************************!*\
  !*** ./src/img/sober-run-sidewalk2.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f9b2c1df272d3b4aa24e68a25933f36a.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/config.js */ "./src/components/config.js");
/* harmony import */ var _components_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/player.js */ "./src/components/player.js");
/* harmony import */ var _components_obstacle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/obstacle.js */ "./src/components/obstacle.js");
/* harmony import */ var _components_collision_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/collision.js */ "./src/components/collision.js");
/* harmony import */ var _components_text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/text.js */ "./src/components/text.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_sober_run_buildings_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/sober-run-buildings.png */ "./src/img/sober-run-buildings.png");
/* harmony import */ var _img_sober_run_sidewalk2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/sober-run-sidewalk2.png */ "./src/img/sober-run-sidewalk2.png");
/* harmony import */ var _components_background_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/background.js */ "./src/components/background.js");










document.addEventListener("DOMContentLoaded", () => {

    _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width = 800;
    _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height = 400;
    let scoreText;
    let player;
    let buildings;
    let sidewalk;

    function Start() {

        player = new _components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](25, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 150, 50, 50, '#FFFFFF');
        buildings = [
            new _components_background_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_sober_run_buildings_png__WEBPACK_IMPORTED_MODULE_6__["default"], 0, 0, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height, 3),
            new _components_background_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_sober_run_buildings_png__WEBPACK_IMPORTED_MODULE_6__["default"], _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, 0, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height, 3)
        ]
        sidewalk = [
            new _components_background_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_sober_run_sidewalk2_png__WEBPACK_IMPORTED_MODULE_7__["default"], 0, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 30, 1000, 30, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed),
            new _components_background_js__WEBPACK_IMPORTED_MODULE_8__["default"](_img_sober_run_sidewalk2_png__WEBPACK_IMPORTED_MODULE_7__["default"], _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height-30, 1000, 30, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed)
        ]
        
        if (localStorage.getItem('highScore')) {
            _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore = localStorage.getItem('highScore');
        }
        
        scoreText = new _components_text_js__WEBPACK_IMPORTED_MODULE_4__["default"]("Score: " + _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score + " HighScore: " + _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width - 35, 40, "right", '#FFFFFF', 35);
        requestAnimationFrame(Update);
    }

    function Update () {

        requestAnimationFrame(Update);
        _components_config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].clearRect(0, 0, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
        buildings[0].Scroll();
        buildings[1].Scroll();
        sidewalk[0].AcceleratedScroll();
        sidewalk[1].AcceleratedScroll();
        Object(_components_obstacle_js__WEBPACK_IMPORTED_MODULE_2__["Spawn"])();

        for (let i = 0; i < _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles.length; i++){
            _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles[i].Animate();
            Object(_components_collision_js__WEBPACK_IMPORTED_MODULE_3__["default"])(player, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles[i]);
        }

        player.Animate();

        scoreText.Draw();
        scoreText.text = "Score: " + Math.trunc(_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score/10) + " HighScore: " + _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore;
        _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score++;

        if (Math.trunc(_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score/10) > _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore) {
            _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore = Math.trunc(_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score/10);
        }
        if (_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score % 200 ==  0 && _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed <= _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speedMax) {
            _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed += _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speedInc;
            }    
    }

    Start();
});

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9zb2Jlci1ydW4tYnVpbGRpbmdzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3NvYmVyLXJ1bi1zaWRld2FsazIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FB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RSw0REFBTSxXQUFXLDREQUFNLFFBQVEsNERBQU07QUFDOUU7QUFDQTtBQUNBLGdCQUFnQixpRUFBVSxDQUFDLG9FQUFXLEtBQUssNERBQU0sd0JBQXdCLDBEQUFJO0FBQzdFLGdCQUFnQixpRUFBVSxDQUFDLG9FQUFXLEVBQUUsNERBQU0sUUFBUSw0REFBTSxzQkFBc0IsMERBQUk7QUFDdEY7O0FBRUE7QUFDQSxZQUFZLDBEQUFJO0FBQ2hCOztBQUVBLHdCQUF3QiwyREFBSSxhQUFhLDBEQUFJLDBCQUEwQiwwREFBSSxZQUFZLDREQUFNO0FBQzdGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLHlEQUFHLGlCQUFpQiw0REFBTSxRQUFRLDREQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBSzs7QUFFYix1QkFBdUIsS0FBSywwREFBSSxrQkFBa0I7QUFDbEQsWUFBWSwwREFBSTtBQUNoQixZQUFZLHdFQUFjLFNBQVMsMERBQUk7QUFDdkM7O0FBRUE7O0FBRUE7QUFDQSxnREFBZ0QsMERBQUksOEJBQThCLDBEQUFJO0FBQ3RGLFFBQVEsMERBQUk7O0FBRVosdUJBQXVCLDBEQUFJLGFBQWEsMERBQUk7QUFDNUMsWUFBWSwwREFBSSx3QkFBd0IsMERBQUk7QUFDNUM7QUFDQSxZQUFZLDBEQUFJLHNCQUFzQiwwREFBSSxVQUFVLDBEQUFJO0FBQ3hELFlBQVksMERBQUksVUFBVSwwREFBSTtBQUM5QixhO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7O0FDckVELFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsMEhBQXdEOztBQUUxRjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiAgY2FudmFzIHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDEwMDNkLCAjMWIwMDkyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIm1haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IscURBQXFEO0lBQ3JELGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQlwiLFwiZmlsZVwiOlwibWFpbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuICBjYW52YXMge1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMTAwM2QsICMxYjAwOTIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBjYW52YXMsIGN0eCwgZ2FtZSB9IGZyb20gJy4vY29uZmlnLmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQge1xuICAgIGNvbnN0cnVjdG9yIChpbWdTb3VyY2UsIHhQb3MsIHlQb3MsIHdpZHRoLCBoZWlnaHQsIHNjcm9sbFNwZWVkKSB7ICAgICAgIFxuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlO1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IGltZ1NvdXJjZTtcbiAgICAgICAgdGhpcy54UG9zID0geFBvcztcbiAgICAgICAgdGhpcy55UG9zID0geVBvcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5zY3JvbGxTcGVlZCA9IHNjcm9sbFNwZWVkO1xuICAgIH1cbiAgICBcbiAgICBTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLnhQb3MgPD0gLXRoaXMud2lkdGggKyBnYW1lLnNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnhQb3MgPSB0aGlzLndpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54UG9zIC09IHRoaXMuc2Nyb2xsU3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5EcmF3KCk7XG4gICAgfVxuXG4gICAgQWNjZWxlcmF0ZWRTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLnhQb3MgPD0gLWNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy54UG9zID0gY2FudmFzLndpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54UG9zIC09IGdhbWUuc3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5EcmF3KCk7XG4gICAgfVxuICAgIFxuICAgIERyYXcoKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54UG9zLCB0aGlzLnlQb3MsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY2FudmFzLCBjdHgsIGdhbWUgfSBmcm9tICcuL2NvbmZpZy5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tDb2xsaXNpb24gKHBsYXllciwgb2JzdCkge1xuXG4gICAgaWYgKCBcbiAgICAgICAgcGxheWVyLnhQb3MgICAgICAgICAgICAgICAgIDwgb2JzdC54UG9zICsgb2JzdC53aWR0aCAmJlxuICAgICAgICBwbGF5ZXIueFBvcyArIHBsYXllci53aWR0aCAgPiBvYnN0LnhQb3MgICAgICAgICAgJiZcbiAgICAgICAgcGxheWVyLnlQb3MgICAgICAgICAgICAgICAgIDwgb2JzdC55UG9zICsgb2JzdC5oZWlnaHQgJiZcbiAgICAgICAgcGxheWVyLnlQb3MgKyBwbGF5ZXIuaGVpZ2h0ID4gb2JzdC55UG9zXG4gICAgKSB7XG4gICAgICAgIC8vQXV0b21hdGljYWxseSByZXN0YXJ0IGdhbWVcbiAgICAgICAgLy9UTyBETzogZ2FtZSBvdmVyIHNjcmVlblxuICAgICAgICBnYW1lLm9ic3RhY2xlcyA9IFtdO1xuICAgICAgICBnYW1lLnNjb3JlID0gMDtcbiAgICAgICAgZ2FtZS5zcGF3blRpbWVyID0gZ2FtZS5pbml0aWFsVGltZXI7XG4gICAgICAgIGdhbWUuc3BlZWQgPSAxMDtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoU2NvcmUnLCBnYW1lLmhpZ2hTY29yZSk7XG4gICAgICAgIGdhbWUub3ZlciA9IHRydWU7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IHtcbiAgICBncmF2aXR5OiAxLFxuICAgIHNwZWVkOiAxMCxcbiAgICBzY29yZTogMCxcbiAgICBoaWdoU2NvcmU6IDAsXG4gICAgb2JzdGFjbGVzOiBbXSxcbiAgICBzcGVlZEluYzogLjA1LFxuICAgIHNwZWVkTWF4OiAzMCxcbiAgICBpbml0aWFsVGltZXI6IDEwMCxcbiAgICBzcGF3blRpbWVyOiAxMDAsXG4gICAgb3ZlcjogZmFsc2Vcbn0iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCwgZ2FtZSB9IGZyb20gJy4vY29uZmlnLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZSB7XG4gICAgY29uc3RydWN0b3IgKHhQb3MsIHlQb3MsIHdpZHRoLCBoZWlnaHQsIGNvbG9yKXtcbiAgICAgICAgdGhpcy54UG9zID0geFBvcztcbiAgICAgICAgdGhpcy55UG9zID0geVBvcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH0gICAgICBcbiAgICBBbmltYXRlICgpIHtcbiAgICAgICAgdGhpcy54UG9zIC09IGdhbWUuc3BlZWQ7XG4gICAgICAgIHRoaXMuRHJhdygpO1xuICAgIH1cbiAgICBEcmF3ICgpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGg7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU3Bhd24gKCkge1xuICAgIGlmIChnYW1lLnNwYXduVGltZXIgPD0gMCkge1xuICAgIGxldCBzaXplID0gNTA7XG4gICAgLy9DaGFuZ2UgdG8gaHVtYW5vaWQgd2l0aCBzaG90XG4gICAgbGV0IG9ic3RhY2xlID0gbmV3IE9ic3RhY2xlKGNhbnZhcy53aWR0aCArIHNpemUsIGNhbnZhcy5oZWlnaHQgLSBzaXplIC0gMTAsIHNpemUsIHNpemUsICcjRkYwMDAwJyk7XG4gICAgXG4gICAgZ2FtZS5vYnN0YWNsZXMucHVzaChvYnN0YWNsZSk7O1xuICAgIC8vTWFrZSBzcGF3blRpbWVyIHJhbmRvbVxuICAgIGdhbWUuc3Bhd25UaW1lciA9IDYwO1xuICAgIH1cbiAgICBnYW1lLnNwYXduVGltZXItLTtcblxuICAgIGlmIChnYW1lLm9ic3RhY2xlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmIChnYW1lLm9ic3RhY2xlc1swXS54UG9zICsgZ2FtZS5vYnN0YWNsZXNbMF0ud2lkdGggPCAwKSB7XG4gICAgICAgICAgICBnYW1lLm9ic3RhY2xlcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IGNhbnZhcywgY3R4LCBnYW1lIH0gZnJvbSAnLi9jb25maWcuanMnXG5cbmxldCBrZXlzID0ge307XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGtleXNbZXZ0LmNvZGVdID0gdHJ1ZTtcbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAga2V5c1tldnQuY29kZV0gPSBmYWxzZTtcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IgKHhQb3MsIHlQb3MsIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMueFBvcyA9IHhQb3M7XG4gICAgICAgIHRoaXMueVBvcyA9IHlQb3M7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy55U3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmp1bXBGb3JjZSA9IDE1O1xuICAgICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcFRpbWVyID0gMDtcbiAgICB9XG4gICAgXG4gICAgQW5pbWF0ZSAoKSB7XG5cbiAgICAgICAgaWYgKGtleXNbJ1NwYWNlJ10gfHwga2V5c1snQXJyb3dVcCddKSB7XG4gICAgICAgICAgICB0aGlzLkp1bXAoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuanVtcFRpbWVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnlQb3MgKz0gdGhpcy55U3BlZWQ7XG5cbiAgICAgICAgLy9HcmF2aXR5XG4gICAgICAgIGlmICh0aGlzLnlQb3MgKyB0aGlzLmhlaWdodCA8IGNhbnZhcy5oZWlnaHQgLSAxMCkge1xuICAgICAgICAgICAgdGhpcy55U3BlZWQgKz0gZ2FtZS5ncmF2aXR5O1xuICAgICAgICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55U3BlZWQgPSAwO1xuICAgICAgICAgICAgdGhpcy5ncm91bmRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnlQb3MgPSBjYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuRHJhdygpO1xuICAgIH1cblxuICAgIEp1bXAgKCkge1xuICAgICAgICBpZiAodGhpcy5ncm91bmRlZCAmJiB0aGlzLmp1bXBUaW1lciA9PSAwKXtcbiAgICAgICAgICAgIHRoaXMuanVtcFRpbWVyID0gMTtcbiAgICAgICAgICAgIHRoaXMueVNwZWVkID0gLXRoaXMuanVtcEZvcmNlO1xuICAgICAgICB9IFxuICAgICAgICAvLyBPUFRJT05BTCBDT0RFOiBhZGQgY29kZSBiZWxvd1xuICAgICAgICAvLyB0byBtYWtlIFBsYXllciBqdW1wIGhpZ2hlciB3aGVuIHNwYWNlL0Fycm93VXAga2V5IGlzIGhlbGQgZG93blxuICAgICAgICAvL19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgICAgICAgIC8vZWxzZSBpZiAodGhpcy5qdW1wVGltZXIgPiAwICYmIHRoaXMuanVtcFRpbWVyIDwgMTUpIHtcbiAgICAgICAgICAgIC8vdGhpcy5qdW1wVGltZXIrKztcbiAgICAgICAgICAgIC8vdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZSAtICh0aGlzLmp1bXBUaW1lciAvIDUwKTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAvL19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICB9ICAgIFxuICAgIERyYXcgKCkge1xuICAgIC8vQ2hhbmdlIHRvIGEgaHVtYW5vaWQgZmlndXJlIGxhdGVyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBjdHguY2xvc2VQYXRoO1xuICAgIH1cblxufSIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9jb25maWcuanMnIFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IHtcbiAgICBjb25zdHJ1Y3RvciAodGV4dCwgeFBvcywgeVBvcywgYWxpZ25tZW50LCBjb2xvciwgc2l6ZSl7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMueFBvcyA9IHhQb3M7XG4gICAgICAgIHRoaXMueVBvcyA9IHlQb3M7XG4gICAgICAgIHRoaXMuYWxpZ25tZW50ID0gYWxpZ25tZW50O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuICAgIERyYXcgKCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IHRoaXMuc2l6ZSArIFwicHggbW9ub3NwYWNlXCI7IFxuICAgICAgICBjdHgudGV4dEFsaWduID0gdGhpcy5hbGlnbm1lbnQ7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnRleHQsIHRoaXMueFBvcywgdGhpcy55UG9zKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGE4YTM2YTgxOTJjNThhOTg2NjdkZGZiMmI5NjQxMWMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY5YjJjMWRmMjcyZDNiNGFhMjRlNjhhMjU5MzNmMzZhLnBuZ1wiOyIsImltcG9ydCB7IGNhbnZhcywgY3R4LCBnYW1lIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpZy5qcydcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9jb21wb25lbnRzL3BsYXllci5qcydcbmltcG9ydCBPYnN0YWNsZSwgeyBTcGF3biB9IGZyb20gJy4vY29tcG9uZW50cy9vYnN0YWNsZS5qcydcbmltcG9ydCBjaGVja0NvbGxpc2lvbiBmcm9tICcuL2NvbXBvbmVudHMvY29sbGlzaW9uLmpzJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnXG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IGJ1aWxkaW5nc0ltZyBmcm9tIFwiLi9pbWcvc29iZXItcnVuLWJ1aWxkaW5ncy5wbmdcIlxuaW1wb3J0IHNpZGV3YWxrSW1nIGZyb20gXCIuL2ltZy9zb2Jlci1ydW4tc2lkZXdhbGsyLnBuZ1wiXG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9jb21wb25lbnRzL2JhY2tncm91bmQuanNcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBjYW52YXMud2lkdGggPSA4MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDQwMDtcbiAgICBsZXQgc2NvcmVUZXh0O1xuICAgIGxldCBwbGF5ZXI7XG4gICAgbGV0IGJ1aWxkaW5ncztcbiAgICBsZXQgc2lkZXdhbGs7XG5cbiAgICBmdW5jdGlvbiBTdGFydCgpIHtcblxuICAgICAgICBwbGF5ZXIgPSBuZXcgUGxheWVyKDI1LCBjYW52YXMuaGVpZ2h0IC0gMTUwLCA1MCwgNTAsICcjRkZGRkZGJyk7XG4gICAgICAgIGJ1aWxkaW5ncyA9IFtcbiAgICAgICAgICAgIG5ldyBCYWNrZ3JvdW5kKGJ1aWxkaW5nc0ltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCAzKSxcbiAgICAgICAgICAgIG5ldyBCYWNrZ3JvdW5kKGJ1aWxkaW5nc0ltZywgY2FudmFzLndpZHRoLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIDMpXG4gICAgICAgIF1cbiAgICAgICAgc2lkZXdhbGsgPSBbXG4gICAgICAgICAgICBuZXcgQmFja2dyb3VuZChzaWRld2Fsa0ltZywgMCwgY2FudmFzLmhlaWdodCAtIDMwLCAxMDAwLCAzMCwgZ2FtZS5zcGVlZCksXG4gICAgICAgICAgICBuZXcgQmFja2dyb3VuZChzaWRld2Fsa0ltZywgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LTMwLCAxMDAwLCAzMCwgZ2FtZS5zcGVlZClcbiAgICAgICAgXVxuICAgICAgICBcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoU2NvcmUnKSkge1xuICAgICAgICAgICAgZ2FtZS5oaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaFNjb3JlJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNjb3JlVGV4dCA9IG5ldyBUZXh0KFwiU2NvcmU6IFwiICsgZ2FtZS5zY29yZSArIFwiIEhpZ2hTY29yZTogXCIgKyBnYW1lLmhpZ2hTY29yZSwgY2FudmFzLndpZHRoIC0gMzUsIDQwLCBcInJpZ2h0XCIsICcjRkZGRkZGJywgMzUpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBVcGRhdGUgKCkge1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGJ1aWxkaW5nc1swXS5TY3JvbGwoKTtcbiAgICAgICAgYnVpbGRpbmdzWzFdLlNjcm9sbCgpO1xuICAgICAgICBzaWRld2Fsa1swXS5BY2NlbGVyYXRlZFNjcm9sbCgpO1xuICAgICAgICBzaWRld2Fsa1sxXS5BY2NlbGVyYXRlZFNjcm9sbCgpO1xuICAgICAgICBTcGF3bigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZS5vYnN0YWNsZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgZ2FtZS5vYnN0YWNsZXNbaV0uQW5pbWF0ZSgpO1xuICAgICAgICAgICAgY2hlY2tDb2xsaXNpb24ocGxheWVyLCBnYW1lLm9ic3RhY2xlc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXIuQW5pbWF0ZSgpO1xuXG4gICAgICAgIHNjb3JlVGV4dC5EcmF3KCk7XG4gICAgICAgIHNjb3JlVGV4dC50ZXh0ID0gXCJTY29yZTogXCIgKyBNYXRoLnRydW5jKGdhbWUuc2NvcmUvMTApICsgXCIgSGlnaFNjb3JlOiBcIiArIGdhbWUuaGlnaFNjb3JlO1xuICAgICAgICBnYW1lLnNjb3JlKys7XG5cbiAgICAgICAgaWYgKE1hdGgudHJ1bmMoZ2FtZS5zY29yZS8xMCkgPiBnYW1lLmhpZ2hTY29yZSkge1xuICAgICAgICAgICAgZ2FtZS5oaWdoU2NvcmUgPSBNYXRoLnRydW5jKGdhbWUuc2NvcmUvMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnYW1lLnNjb3JlICUgMjAwID09ICAwICYmIGdhbWUuc3BlZWQgPD0gZ2FtZS5zcGVlZE1heCkge1xuICAgICAgICAgICAgZ2FtZS5zcGVlZCArPSBnYW1lLnNwZWVkSW5jO1xuICAgICAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICBTdGFydCgpO1xufSk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9