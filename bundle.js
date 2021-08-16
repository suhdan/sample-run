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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n  canvas {\n    width: 800px;\n    height: 400px;\n    background: linear-gradient(180deg, #01003d, #402aa1);\n  }\n\n  .center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }", "",{"version":3,"sources":["main.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;EACE;IACE,YAAY;IACZ,aAAa;IACb,qDAAqD;EACvD;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;EAClC","file":"main.css","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n  canvas {\n    width: 800px;\n    height: 400px;\n    background: linear-gradient(180deg, #01003d, #402aa1);\n  }\n\n  .center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }"]}]);
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
    
    scroll() {
        if (this.xPos <= -this.width + _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed) {
            this.xPos = this.width;
        } else {
            this.xPos -= this.scrollSpeed;
        }
        this.draw();
    }

    acceleratedScroll() {
        if (this.xPos <= -1000) {
            this.xPos = 800;
        } else {
            this.xPos -= _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed;
        }
        this.draw();
    }
    
    draw() {
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
        player.xFrame = 4;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].state = 'over';
        return true;
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

canvas.width = 800;
canvas.height = 400;

const game = {
    gravity: 1,
    speed: 10,
    frame: 0,
    score: 0,
    highScore: 0,
    level: 1,
    levelInc: 500,
    obstacles: [],
    speedInc: .25,
    speedMax: 30,
    initialTimer: 100,
    spawnTimer: 100,
    state: 'startScreen'
}

/***/ }),

/***/ "./src/components/gameover.js":
/*!************************************!*\
  !*** ./src/components/gameover.js ***!
  \************************************/
/*! exports provided: default, gamePlaying */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gameOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamePlaying", function() { return gamePlaying; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/components/config.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.js */ "./src/components/text.js");


let gameOverText = new _text_js__WEBPACK_IMPORTED_MODULE_1__["default"]("GAME OVER", _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width/2, _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height/2, "center", 'gray', 45);
let restartText = new _text_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Hit 'r' to play again", _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width/2, _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height/2 + 50, "center", 'gray', 25);
let key = {};
document.addEventListener('keydown', function (evt) {
    key[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
    key[evt.code] = false;
});
function gameOver (buildings, sidewalk, player, scoreText, highscoreText) {
    
    if (key['KeyR']) {
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].state = 'playing';
        window.localStorage.setItem('highScore', _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore); 
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles = [];
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].frame = 0;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score =  0;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].spawnTimer = _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].initialTimer;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed = 10;
    }  
    _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].clearRect(0, 0, _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
    buildings[0].draw();
    buildings[1].draw();
    sidewalk[0].draw();
    sidewalk[1].draw();
    player.draw();
    scoreText.draw();
    highscoreText.draw();
    for (let j = 0 ; j < _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles.length; j++)
    _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles[j].draw();
    gameOverText.draw();
    restartText.draw(); 
    //option to view leaderboard
}
//fill in later
function gamePlaying () {

}

/***/ }),

/***/ "./src/components/obstacle.js":
/*!************************************!*\
  !*** ./src/components/obstacle.js ***!
  \************************************/
/*! exports provided: default, spawnObstacle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Obstacle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawnObstacle", function() { return spawnObstacle; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/components/config.js");
/* harmony import */ var _img_obstacle3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/obstacle3.png */ "./src/img/obstacle3.png");
/* harmony import */ var _img_obstacle1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/obstacle1.png */ "./src/img/obstacle1.png");
/* harmony import */ var _img_obstacle2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/obstacle2.png */ "./src/img/obstacle2.png");






class Obstacle {
    constructor (imgSource, xPos, yPos, width, height,imgWidth,color){
        this.image = new Image()
        this.image.src = imgSource;
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.imgWidth = imgWidth;
        this.color = color;
    }      
    animate () {
        this.xPos -= _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed;
        this.draw();
    }
    draw () {
        /* for testing hidden collision box
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
        ctx.closePath;
        */
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(this.image, 0, 0, this.imgWidth, this.height, this.xPos-(this.imgWidth-this.width)/2, this.yPos, this.imgWidth, this.height)

    }
}

function spawnObstacle () {
    if (_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].spawnTimer <= 0) {
        let obstacle;
        let obstaclePicker = Math.floor(Math.random() * 3);
        switch(obstaclePicker) {
            case 0:
                obstacle = new Obstacle(_img_obstacle3_png__WEBPACK_IMPORTED_MODULE_1__["default"], _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width + 55, _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 120 - 10, 32, 120, 55, '#FF0000');
                break;
            case 1:
                obstacle = new Obstacle(_img_obstacle1_png__WEBPACK_IMPORTED_MODULE_2__["default"], _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width + 47, _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 112 - 10, 32, 112, 47, '#FF0000');
                break;
            case 2:
                obstacle = new Obstacle(_img_obstacle2_png__WEBPACK_IMPORTED_MODULE_3__["default"], _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width + 33, _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 100 - 10, 30, 110, 33, '#FF0000')
        }
 
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles.push(obstacle);
        _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].spawnTimer = Math.floor(Math.random() * 30 + 30);
        //if more than 2 obstacles are within 40 frames of the other than set the next obstacle to spawn in 60s
        if(_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles.length > 1){
            //console.log(game.obstacles[game.obstacles.length-1].xPos - game.obstacles[game.obstacles.length-2].xPos)
            if(_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles[_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles.length-1].xPos - _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles[_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles.length-2].xPos < 400 && _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].spawnTimer < 40){
            _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].spawnTimer = 60;
            }
        };
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
    constructor (imgSource, xPos, yPos, width, height) {
        this.image = new Image();
        this.image.src = imgSource;
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.xFrame = 0;
        this.ySpeed = 0;
        this.jumpForce = 18;
        this.grounded = false;
        this.jumpTimer = 0;
    }
    
    animate () {

        if (keys['Space'] || keys['ArrowUp']) {
            this.jump();
        } else {
            this.jumpTimer = 0;
        }
        this.yPos += this.ySpeed;

        //Gravity
        if (this.yPos + this.height < _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 10) {
            this.ySpeed += _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].gravity;
            this.grounded = false;
            this.xFrame = 3;
        } else {
            this.ySpeed = 0;
            this.grounded = true;
            this.yPos = _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - this.height - 10;
            if(_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].frame % 5 == 0) this.xFrame++;
            if (this.xFrame > 2) this.xFrame = 1;
            //console.log(this.xFrame, game.score);
        }

        this.draw();
    }

    startScreen() {
        if (keys['Space'] || keys['ArrowUp']) {
            _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].state = 'playing';
            this.jump();
        } else {
            this.jumpTimer = 0;
        }
        this.yPos += this.ySpeed;

        //Gravity
        if (this.yPos + this.height < _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 10) {
            this.ySpeed += _config_js__WEBPACK_IMPORTED_MODULE_0__["game"].gravity - .75;
            this.grounded = false;
            this.xFrame = 3;
        } else {
            this.ySpeed = 0;
            this.grounded = true;
            this.yPos = _config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - this.height - 10;
            this.xFrame = 0;
        }

        this.draw();
    }

    jump () {
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
    draw () {
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(this.image, this.xFrame * 40, 0, 40, 112, this.xPos, this.yPos, this.width, this.height);
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
    constructor (text, xPos, yPos, alignment, color, size, fontFamily){
        this.text = text;
        this.xPos = xPos;
        this.yPos = yPos;
        this.alignment = alignment;
        this.color = color;
        this.size = size;
        this.fontFamily = 'Orbitron';
    }
    update(newText) {
        this.text = newText;
    }

    draw () {
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = this.color;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = this.size + "px " + this.fontFamily; 
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].textAlign = this.alignment;
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(this.text, this.xPos, this.yPos);
        _config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath();
    }
}

/***/ }),

/***/ "./src/img/buildings.png":
/*!*******************************!*\
  !*** ./src/img/buildings.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4a8a36a8192c58a98667ddfb2b96411c.png");

/***/ }),

/***/ "./src/img/obstacle1.png":
/*!*******************************!*\
  !*** ./src/img/obstacle1.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b3ff9b3b72620e0314ee93cca6dcbd91.png");

/***/ }),

/***/ "./src/img/obstacle2.png":
/*!*******************************!*\
  !*** ./src/img/obstacle2.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1c0940c6bc806ea9aef2704b663ed018.png");

/***/ }),

/***/ "./src/img/obstacle3.png":
/*!*******************************!*\
  !*** ./src/img/obstacle3.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6384390171c13d48d174c0b4d7281664.png");

/***/ }),

/***/ "./src/img/playersprite.png":
/*!**********************************!*\
  !*** ./src/img/playersprite.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "85265a27dee6e9594fe1101aa6c88e01.png");

/***/ }),

/***/ "./src/img/sidewalk.png":
/*!******************************!*\
  !*** ./src/img/sidewalk.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f562b86c98c9b612caf681936c7a8439.png");

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
/* harmony import */ var _img_buildings_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/buildings.png */ "./src/img/buildings.png");
/* harmony import */ var _img_sidewalk_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/sidewalk.png */ "./src/img/sidewalk.png");
/* harmony import */ var _img_playersprite_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/playersprite.png */ "./src/img/playersprite.png");
/* harmony import */ var _components_background_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/background.js */ "./src/components/background.js");
/* harmony import */ var _components_gameover_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/gameover.js */ "./src/components/gameover.js");












document.addEventListener("DOMContentLoaded", () => {

    let scoreText;
    let highscoreText;
    let levelText;
    let startText;
    let player;
    let buildings;
    let sidewalk;

    function initialize() {
        player = new _components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](_img_playersprite_png__WEBPACK_IMPORTED_MODULE_8__["default"], 25, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 250, 40, 112);
        buildings = [
            new _components_background_js__WEBPACK_IMPORTED_MODULE_9__["default"](_img_buildings_png__WEBPACK_IMPORTED_MODULE_6__["default"], 0, -15, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height, 3),
            new _components_background_js__WEBPACK_IMPORTED_MODULE_9__["default"](_img_buildings_png__WEBPACK_IMPORTED_MODULE_6__["default"], _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, -15, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height, 3)
        ]
        sidewalk = [
            new _components_background_js__WEBPACK_IMPORTED_MODULE_9__["default"](_img_sidewalk_png__WEBPACK_IMPORTED_MODULE_7__["default"], -100, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 30, 1000, 30, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed),
            new _components_background_js__WEBPACK_IMPORTED_MODULE_9__["default"](_img_sidewalk_png__WEBPACK_IMPORTED_MODULE_7__["default"], _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height-30, 1000, 30, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed)
        ]
        if (localStorage.getItem('highScore')) {
            _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore = localStorage.getItem('highScore');
        }
        scoreText = new _components_text_js__WEBPACK_IMPORTED_MODULE_4__["default"]("Score: " + _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width - 250, 40, "left", '#FFFFFF', 35);
        highscoreText = new _components_text_js__WEBPACK_IMPORTED_MODULE_4__["default"]("HighScore: " + _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width - 335, 80, "left", '#FFFFFF', 35);
        levelText = new _components_text_js__WEBPACK_IMPORTED_MODULE_4__["default"]("Level " + _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].level, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2, "center", 'yellow', 45);
        startText = new _components_text_js__WEBPACK_IMPORTED_MODULE_4__["default"]("Hit the 'Space Bar' or 'Arrow Up' key to play.", _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2, "center", 'white', 25);       
    }

    function startScreen() {
        if (_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].state == 'playing') {
            requestAnimationFrame(update);
        }
        else {
            _components_config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].clearRect(0, 0, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
            buildings[0].draw();
            sidewalk[0].draw();
            startText.draw();
            player.startScreen();
            requestAnimationFrame(startScreen);
        }
    }

    function update () {

        if (_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].state == 'playing') {

            _components_config_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].clearRect(0, 0, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
            buildings[0].scroll();
            buildings[1].scroll();
            sidewalk[0].acceleratedScroll();
            sidewalk[1].acceleratedScroll();
            scoreText.draw();
            highscoreText.draw();
            scoreText.text = "Score: " + _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score;
            highscoreText.update("HighScore: " + _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore);
            player.animate();
            Object(_components_obstacle_js__WEBPACK_IMPORTED_MODULE_2__["spawnObstacle"])();
            for (let i = 0; i < _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles.length; i++) {
                _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles[i].animate();
                Object(_components_collision_js__WEBPACK_IMPORTED_MODULE_3__["default"])(player, _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].obstacles[i])
            }
            _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].frame++;
            if (_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].frame % 10 == 0) {
                _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score++;
            }
            if (_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score > _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore) {
                _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].highScore = _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].score;
            }
            //give player a 80 frame break, 50 frames before each level increase
            if (_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].frame % (_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].levelIncr * _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].level - 50) == 0) {
                _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].spawnTimer = 80;
            }
            if (_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].frame % 500 == 0 && _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed <= _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speedMax) {
                _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speed += _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].speedInc;
                _components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].level++;
                //game.spawnTimer = 80;
                //play game increase sound
            }
        }
        if (_components_config_js__WEBPACK_IMPORTED_MODULE_0__["game"].state == 'over') {
            Object(_components_gameover_js__WEBPACK_IMPORTED_MODULE_10__["default"])(buildings, sidewalk, player, scoreText, highscoreText);
        }  
        requestAnimationFrame(update);
    }
    
    initialize();
    startScreen();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FtZW92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9idWlsZGluZ3MucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvb2JzdGFjbGUxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL29ic3RhY2xlMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9vYnN0YWNsZTMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvcGxheWVyc3ByaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3NpZGV3YWxrLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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WUFBWSw2RUFBYTtBQUN6QiwyQkFBMkIsS0FBSywwREFBSSxrQkFBa0I7QUFDdEQsZ0JBQWdCLDBEQUFJO0FBQ3BCLGdCQUFnQix3RUFBYyxTQUFTLDBEQUFJO0FBQzNDO0FBQ0EsWUFBWSwwREFBSTtBQUNoQixnQkFBZ0IsMERBQUk7QUFDcEIsZ0JBQWdCLDBEQUFJO0FBQ3BCO0FBQ0EsZ0JBQWdCLDBEQUFJLFNBQVMsMERBQUk7QUFDakMsZ0JBQWdCLDBEQUFJLGFBQWEsMERBQUk7QUFDckM7QUFDQTtBQUNBLGdCQUFnQiwwREFBSSxVQUFVLDBEQUFJLGFBQWEsMERBQUk7QUFDbkQsZ0JBQWdCLDBEQUFJO0FBQ3BCO0FBQ0EsZ0JBQWdCLDBEQUFJLHFCQUFxQiwwREFBSSxVQUFVLDBEQUFJO0FBQzNELGdCQUFnQiwwREFBSSxVQUFVLDBEQUFJO0FBQ2xDLGdCQUFnQiwwREFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQUk7QUFDaEIsWUFBWSx3RUFBUTtBQUNwQixTO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7OztBQ3BHRCxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDBIQUF3RDs7QUFFMUY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4gIGNhbnZhcyB7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAxMDAzZCwgIzQwMmFhMSk7XFxuICB9XFxuXFxuICAuY2VudGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJtYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFEQUFxRDtFQUN2RDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztFQUNsQ1wiLFwiZmlsZVwiOlwibWFpbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuICBjYW52YXMge1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMTAwM2QsICM0MDJhYTEpO1xcbiAgfVxcblxcbiAgLmNlbnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB9XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBjYW52YXMsIGN0eCwgZ2FtZSB9IGZyb20gJy4vY29uZmlnLmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQge1xuICAgIGNvbnN0cnVjdG9yIChpbWdTb3VyY2UsIHhQb3MsIHlQb3MsIHdpZHRoLCBoZWlnaHQsIHNjcm9sbFNwZWVkKSB7ICAgICAgIFxuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlO1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IGltZ1NvdXJjZTtcbiAgICAgICAgdGhpcy54UG9zID0geFBvcztcbiAgICAgICAgdGhpcy55UG9zID0geVBvcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5zY3JvbGxTcGVlZCA9IHNjcm9sbFNwZWVkO1xuICAgIH1cbiAgICBcbiAgICBzY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLnhQb3MgPD0gLXRoaXMud2lkdGggKyBnYW1lLnNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnhQb3MgPSB0aGlzLndpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54UG9zIC09IHRoaXMuc2Nyb2xsU3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgYWNjZWxlcmF0ZWRTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLnhQb3MgPD0gLTEwMDApIHtcbiAgICAgICAgICAgIHRoaXMueFBvcyA9IDgwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueFBvcyAtPSBnYW1lLnNwZWVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufSIsImltcG9ydCB7IGNhbnZhcywgY3R4LCBnYW1lIH0gZnJvbSAnLi9jb25maWcuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrQ29sbGlzaW9uIChwbGF5ZXIsIG9ic3QpIHtcblxuICAgIGlmICggXG4gICAgICAgIHBsYXllci54UG9zICAgICAgICAgICAgICAgICA8IG9ic3QueFBvcyArIG9ic3Qud2lkdGggJiZcbiAgICAgICAgcGxheWVyLnhQb3MgKyBwbGF5ZXIud2lkdGggID4gb2JzdC54UG9zICAgICAgICAgICYmXG4gICAgICAgIHBsYXllci55UG9zICAgICAgICAgICAgICAgICA8IG9ic3QueVBvcyArIG9ic3QuaGVpZ2h0ICYmXG4gICAgICAgIHBsYXllci55UG9zICsgcGxheWVyLmhlaWdodCA+IG9ic3QueVBvc1xuICAgICkge1xuICAgICAgICBwbGF5ZXIueEZyYW1lID0gNDtcbiAgICAgICAgZ2FtZS5zdGF0ZSA9ICdvdmVyJztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jYW52YXMud2lkdGggPSA4MDA7XG5jYW52YXMuaGVpZ2h0ID0gNDAwO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IHtcbiAgICBncmF2aXR5OiAxLFxuICAgIHNwZWVkOiAxMCxcbiAgICBmcmFtZTogMCxcbiAgICBzY29yZTogMCxcbiAgICBoaWdoU2NvcmU6IDAsXG4gICAgbGV2ZWw6IDEsXG4gICAgbGV2ZWxJbmM6IDUwMCxcbiAgICBvYnN0YWNsZXM6IFtdLFxuICAgIHNwZWVkSW5jOiAuMjUsXG4gICAgc3BlZWRNYXg6IDMwLFxuICAgIGluaXRpYWxUaW1lcjogMTAwLFxuICAgIHNwYXduVGltZXI6IDEwMCxcbiAgICBzdGF0ZTogJ3N0YXJ0U2NyZWVuJ1xufSIsImltcG9ydCB7IGNhbnZhcywgY3R4LCBnYW1lIH0gZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnXG5sZXQgZ2FtZU92ZXJUZXh0ID0gbmV3IFRleHQoXCJHQU1FIE9WRVJcIiwgY2FudmFzLndpZHRoLzIsIGNhbnZhcy5oZWlnaHQvMiwgXCJjZW50ZXJcIiwgJ2dyYXknLCA0NSk7XG5sZXQgcmVzdGFydFRleHQgPSBuZXcgVGV4dChcIkhpdCAncicgdG8gcGxheSBhZ2FpblwiLCBjYW52YXMud2lkdGgvMiwgY2FudmFzLmhlaWdodC8yICsgNTAsIFwiY2VudGVyXCIsICdncmF5JywgMjUpO1xubGV0IGtleSA9IHt9O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBrZXlbZXZ0LmNvZGVdID0gdHJ1ZTtcbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAga2V5W2V2dC5jb2RlXSA9IGZhbHNlO1xufSk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lT3ZlciAoYnVpbGRpbmdzLCBzaWRld2FsaywgcGxheWVyLCBzY29yZVRleHQsIGhpZ2hzY29yZVRleHQpIHtcbiAgICBcbiAgICBpZiAoa2V5WydLZXlSJ10pIHtcbiAgICAgICAgZ2FtZS5zdGF0ZSA9ICdwbGF5aW5nJztcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoU2NvcmUnLCBnYW1lLmhpZ2hTY29yZSk7IFxuICAgICAgICBnYW1lLm9ic3RhY2xlcyA9IFtdO1xuICAgICAgICBnYW1lLmZyYW1lID0gMDtcbiAgICAgICAgZ2FtZS5zY29yZSA9ICAwO1xuICAgICAgICBnYW1lLnNwYXduVGltZXIgPSBnYW1lLmluaXRpYWxUaW1lcjtcbiAgICAgICAgZ2FtZS5zcGVlZCA9IDEwO1xuICAgIH0gIFxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBidWlsZGluZ3NbMF0uZHJhdygpO1xuICAgIGJ1aWxkaW5nc1sxXS5kcmF3KCk7XG4gICAgc2lkZXdhbGtbMF0uZHJhdygpO1xuICAgIHNpZGV3YWxrWzFdLmRyYXcoKTtcbiAgICBwbGF5ZXIuZHJhdygpO1xuICAgIHNjb3JlVGV4dC5kcmF3KCk7XG4gICAgaGlnaHNjb3JlVGV4dC5kcmF3KCk7XG4gICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgZ2FtZS5vYnN0YWNsZXMubGVuZ3RoOyBqKyspXG4gICAgZ2FtZS5vYnN0YWNsZXNbal0uZHJhdygpO1xuICAgIGdhbWVPdmVyVGV4dC5kcmF3KCk7XG4gICAgcmVzdGFydFRleHQuZHJhdygpOyBcbiAgICAvL29wdGlvbiB0byB2aWV3IGxlYWRlcmJvYXJkXG59XG4vL2ZpbGwgaW4gbGF0ZXJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lUGxheWluZyAoKSB7XG5cbn0iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCwgZ2FtZSB9IGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0IG9mZmljZXJJbWcgZnJvbSBcIi4uL2ltZy9vYnN0YWNsZTMucG5nXCJcbmltcG9ydCBtYW5JbWcgZnJvbSBcIi4uL2ltZy9vYnN0YWNsZTEucG5nXCJcbmltcG9ydCBnaXJsSW1nIGZyb20gXCIuLi9pbWcvb2JzdGFjbGUyLnBuZ1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzdGFjbGUge1xuICAgIGNvbnN0cnVjdG9yIChpbWdTb3VyY2UsIHhQb3MsIHlQb3MsIHdpZHRoLCBoZWlnaHQsaW1nV2lkdGgsY29sb3Ipe1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKClcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBpbWdTb3VyY2U7XG4gICAgICAgIHRoaXMueFBvcyA9IHhQb3M7XG4gICAgICAgIHRoaXMueVBvcyA9IHlQb3M7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSBpbWdXaWR0aDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH0gICAgICBcbiAgICBhbmltYXRlICgpIHtcbiAgICAgICAgdGhpcy54UG9zIC09IGdhbWUuc3BlZWQ7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3ICgpIHtcbiAgICAgICAgLyogZm9yIHRlc3RpbmcgaGlkZGVuIGNvbGxpc2lvbiBib3hcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGg7XG4gICAgICAgICovXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgdGhpcy5pbWdXaWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueFBvcy0odGhpcy5pbWdXaWR0aC10aGlzLndpZHRoKS8yLCB0aGlzLnlQb3MsIHRoaXMuaW1nV2lkdGgsIHRoaXMuaGVpZ2h0KVxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Bhd25PYnN0YWNsZSAoKSB7XG4gICAgaWYgKGdhbWUuc3Bhd25UaW1lciA8PSAwKSB7XG4gICAgICAgIGxldCBvYnN0YWNsZTtcbiAgICAgICAgbGV0IG9ic3RhY2xlUGlja2VyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XG4gICAgICAgIHN3aXRjaChvYnN0YWNsZVBpY2tlcikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG9ic3RhY2xlID0gbmV3IE9ic3RhY2xlKG9mZmljZXJJbWcsIGNhbnZhcy53aWR0aCArIDU1LCBjYW52YXMuaGVpZ2h0IC0gMTIwIC0gMTAsIDMyLCAxMjAsIDU1LCAnI0ZGMDAwMCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIG9ic3RhY2xlID0gbmV3IE9ic3RhY2xlKG1hbkltZywgY2FudmFzLndpZHRoICsgNDcsIGNhbnZhcy5oZWlnaHQgLSAxMTIgLSAxMCwgMzIsIDExMiwgNDcsICcjRkYwMDAwJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgb2JzdGFjbGUgPSBuZXcgT2JzdGFjbGUoZ2lybEltZywgY2FudmFzLndpZHRoICsgMzMsIGNhbnZhcy5oZWlnaHQgLSAxMDAgLSAxMCwgMzAsIDExMCwgMzMsICcjRkYwMDAwJylcbiAgICAgICAgfVxuIFxuICAgICAgICBnYW1lLm9ic3RhY2xlcy5wdXNoKG9ic3RhY2xlKTtcbiAgICAgICAgZ2FtZS5zcGF3blRpbWVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzAgKyAzMCk7XG4gICAgICAgIC8vaWYgbW9yZSB0aGFuIDIgb2JzdGFjbGVzIGFyZSB3aXRoaW4gNDAgZnJhbWVzIG9mIHRoZSBvdGhlciB0aGFuIHNldCB0aGUgbmV4dCBvYnN0YWNsZSB0byBzcGF3biBpbiA2MHNcbiAgICAgICAgaWYoZ2FtZS5vYnN0YWNsZXMubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGdhbWUub2JzdGFjbGVzW2dhbWUub2JzdGFjbGVzLmxlbmd0aC0xXS54UG9zIC0gZ2FtZS5vYnN0YWNsZXNbZ2FtZS5vYnN0YWNsZXMubGVuZ3RoLTJdLnhQb3MpXG4gICAgICAgICAgICBpZihnYW1lLm9ic3RhY2xlc1tnYW1lLm9ic3RhY2xlcy5sZW5ndGgtMV0ueFBvcyAtIGdhbWUub2JzdGFjbGVzW2dhbWUub2JzdGFjbGVzLmxlbmd0aC0yXS54UG9zIDwgNDAwICYmIGdhbWUuc3Bhd25UaW1lciA8IDQwKXtcbiAgICAgICAgICAgIGdhbWUuc3Bhd25UaW1lciA9IDYwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnYW1lLnNwYXduVGltZXItLTtcblxuICAgIGlmIChnYW1lLm9ic3RhY2xlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmIChnYW1lLm9ic3RhY2xlc1swXS54UG9zICsgZ2FtZS5vYnN0YWNsZXNbMF0ud2lkdGggPCAwKSB7XG4gICAgICAgICAgICBnYW1lLm9ic3RhY2xlcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IGNhbnZhcywgY3R4LCBnYW1lIH0gZnJvbSAnLi9jb25maWcuanMnXG5cbmxldCBrZXlzID0ge307XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGtleXNbZXZ0LmNvZGVdID0gdHJ1ZTtcbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAga2V5c1tldnQuY29kZV0gPSBmYWxzZTtcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IgKGltZ1NvdXJjZSwgeFBvcywgeVBvcywgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gaW1nU291cmNlO1xuICAgICAgICB0aGlzLnhQb3MgPSB4UG9zO1xuICAgICAgICB0aGlzLnlQb3MgPSB5UG9zO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnhGcmFtZSA9IDA7XG4gICAgICAgIHRoaXMueVNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5qdW1wRm9yY2UgPSAxODtcbiAgICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBUaW1lciA9IDA7XG4gICAgfVxuICAgIFxuICAgIGFuaW1hdGUgKCkge1xuXG4gICAgICAgIGlmIChrZXlzWydTcGFjZSddIHx8IGtleXNbJ0Fycm93VXAnXSkge1xuICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBUaW1lciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55UG9zICs9IHRoaXMueVNwZWVkO1xuXG4gICAgICAgIC8vR3Jhdml0eVxuICAgICAgICBpZiAodGhpcy55UG9zICsgdGhpcy5oZWlnaHQgPCBjYW52YXMuaGVpZ2h0IC0gMTApIHtcbiAgICAgICAgICAgIHRoaXMueVNwZWVkICs9IGdhbWUuZ3Jhdml0eTtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMueEZyYW1lID0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueVNwZWVkID0gMDtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy55UG9zID0gY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMTA7XG4gICAgICAgICAgICBpZihnYW1lLmZyYW1lICUgNSA9PSAwKSB0aGlzLnhGcmFtZSsrO1xuICAgICAgICAgICAgaWYgKHRoaXMueEZyYW1lID4gMikgdGhpcy54RnJhbWUgPSAxO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnhGcmFtZSwgZ2FtZS5zY29yZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBzdGFydFNjcmVlbigpIHtcbiAgICAgICAgaWYgKGtleXNbJ1NwYWNlJ10gfHwga2V5c1snQXJyb3dVcCddKSB7XG4gICAgICAgICAgICBnYW1lLnN0YXRlID0gJ3BsYXlpbmcnO1xuICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBUaW1lciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55UG9zICs9IHRoaXMueVNwZWVkO1xuXG4gICAgICAgIC8vR3Jhdml0eVxuICAgICAgICBpZiAodGhpcy55UG9zICsgdGhpcy5oZWlnaHQgPCBjYW52YXMuaGVpZ2h0IC0gMTApIHtcbiAgICAgICAgICAgIHRoaXMueVNwZWVkICs9IGdhbWUuZ3Jhdml0eSAtIC43NTtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMueEZyYW1lID0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueVNwZWVkID0gMDtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy55UG9zID0gY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMTA7XG4gICAgICAgICAgICB0aGlzLnhGcmFtZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBqdW1wICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5qdW1wVGltZXIgPT0gMCl7XG4gICAgICAgICAgICB0aGlzLmp1bXBUaW1lciA9IDE7XG4gICAgICAgICAgICB0aGlzLnlTcGVlZCA9IC10aGlzLmp1bXBGb3JjZTtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gT1BUSU9OQUwgQ09ERTogYWRkIGNvZGUgYmVsb3dcbiAgICAgICAgLy8gdG8gbWFrZSBQbGF5ZXIganVtcCBoaWdoZXIgd2hlbiBzcGFjZS9BcnJvd1VwIGtleSBpcyBoZWxkIGRvd25cbiAgICAgICAgLy9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgICAgICAvL2Vsc2UgaWYgKHRoaXMuanVtcFRpbWVyID4gMCAmJiB0aGlzLmp1bXBUaW1lciA8IDE1KSB7XG4gICAgICAgICAgICAvL3RoaXMuanVtcFRpbWVyKys7XG4gICAgICAgICAgICAvL3RoaXMuZHkgPSAtdGhpcy5qdW1wRm9yY2UgLSAodGhpcy5qdW1wVGltZXIgLyA1MCk7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgLy9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgfSAgICBcbiAgICBkcmF3ICgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnhGcmFtZSAqIDQwLCAwLCA0MCwgMTEyLCB0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vY29uZmlnLmpzJyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCB7XG4gICAgY29uc3RydWN0b3IgKHRleHQsIHhQb3MsIHlQb3MsIGFsaWdubWVudCwgY29sb3IsIHNpemUsIGZvbnRGYW1pbHkpe1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnhQb3MgPSB4UG9zO1xuICAgICAgICB0aGlzLnlQb3MgPSB5UG9zO1xuICAgICAgICB0aGlzLmFsaWdubWVudCA9IGFsaWdubWVudDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmZvbnRGYW1pbHkgPSAnT3JiaXRyb24nO1xuICAgIH1cbiAgICB1cGRhdGUobmV3VGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSBuZXdUZXh0O1xuICAgIH1cblxuICAgIGRyYXcgKCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IHRoaXMuc2l6ZSArIFwicHggXCIgKyB0aGlzLmZvbnRGYW1pbHk7IFxuICAgICAgICBjdHgudGV4dEFsaWduID0gdGhpcy5hbGlnbm1lbnQ7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnRleHQsIHRoaXMueFBvcywgdGhpcy55UG9zKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGE4YTM2YTgxOTJjNThhOTg2NjdkZGZiMmI5NjQxMWMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIzZmY5YjNiNzI2MjBlMDMxNGVlOTNjY2E2ZGNiZDkxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYzA5NDBjNmJjODA2ZWE5YWVmMjcwNGI2NjNlZDAxOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjM4NDM5MDE3MWMxM2Q0OGQxNzRjMGI0ZDcyODE2NjQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg1MjY1YTI3ZGVlNmU5NTk0ZmUxMTAxYWE2Yzg4ZTAxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmNTYyYjg2Yzk4YzliNjEyY2FmNjgxOTM2YzdhODQzOS5wbmdcIjsiLCJpbXBvcnQgeyBjYW52YXMsIGN0eCwgZ2FtZSB9IGZyb20gJy4vY29tcG9uZW50cy9jb25maWcuanMnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vY29tcG9uZW50cy9wbGF5ZXIuanMnXG5pbXBvcnQgT2JzdGFjbGUsIHsgc3Bhd25PYnN0YWNsZSB9IGZyb20gJy4vY29tcG9uZW50cy9vYnN0YWNsZS5qcydcbmltcG9ydCBjaGVja0NvbGxpc2lvbiBmcm9tICcuL2NvbXBvbmVudHMvY29sbGlzaW9uLmpzJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnXG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IGJ1aWxkaW5nc0ltZyBmcm9tIFwiLi9pbWcvYnVpbGRpbmdzLnBuZ1wiXG5pbXBvcnQgc2lkZXdhbGtJbWcgZnJvbSBcIi4vaW1nL3NpZGV3YWxrLnBuZ1wiXG5pbXBvcnQgcGxheWVyU3ByaXRlIGZyb20gXCIuL2ltZy9wbGF5ZXJzcHJpdGUucG5nXCJcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL2NvbXBvbmVudHMvYmFja2dyb3VuZC5qc1wiXG5pbXBvcnQgZ2FtZU92ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lb3Zlci5qc1wiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIGxldCBzY29yZVRleHQ7XG4gICAgbGV0IGhpZ2hzY29yZVRleHQ7XG4gICAgbGV0IGxldmVsVGV4dDtcbiAgICBsZXQgc3RhcnRUZXh0O1xuICAgIGxldCBwbGF5ZXI7XG4gICAgbGV0IGJ1aWxkaW5ncztcbiAgICBsZXQgc2lkZXdhbGs7XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgICAgICBwbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllclNwcml0ZSwgMjUsIGNhbnZhcy5oZWlnaHQgLSAyNTAsIDQwLCAxMTIpO1xuICAgICAgICBidWlsZGluZ3MgPSBbXG4gICAgICAgICAgICBuZXcgQmFja2dyb3VuZChidWlsZGluZ3NJbWcsIDAsIC0xNSwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCAzKSxcbiAgICAgICAgICAgIG5ldyBCYWNrZ3JvdW5kKGJ1aWxkaW5nc0ltZywgY2FudmFzLndpZHRoLCAtMTUsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgMylcbiAgICAgICAgXVxuICAgICAgICBzaWRld2FsayA9IFtcbiAgICAgICAgICAgIG5ldyBCYWNrZ3JvdW5kKHNpZGV3YWxrSW1nLCAtMTAwLCBjYW52YXMuaGVpZ2h0IC0gMzAsIDEwMDAsIDMwLCBnYW1lLnNwZWVkKSxcbiAgICAgICAgICAgIG5ldyBCYWNrZ3JvdW5kKHNpZGV3YWxrSW1nLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQtMzAsIDEwMDAsIDMwLCBnYW1lLnNwZWVkKVxuICAgICAgICBdXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaFNjb3JlJykpIHtcbiAgICAgICAgICAgIGdhbWUuaGlnaFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hTY29yZScpO1xuICAgICAgICB9XG4gICAgICAgIHNjb3JlVGV4dCA9IG5ldyBUZXh0KFwiU2NvcmU6IFwiICsgZ2FtZS5zY29yZSwgY2FudmFzLndpZHRoIC0gMjUwLCA0MCwgXCJsZWZ0XCIsICcjRkZGRkZGJywgMzUpO1xuICAgICAgICBoaWdoc2NvcmVUZXh0ID0gbmV3IFRleHQoXCJIaWdoU2NvcmU6IFwiICsgZ2FtZS5oaWdoU2NvcmUsIGNhbnZhcy53aWR0aCAtIDMzNSwgODAsIFwibGVmdFwiLCAnI0ZGRkZGRicsIDM1KTtcbiAgICAgICAgbGV2ZWxUZXh0ID0gbmV3IFRleHQoXCJMZXZlbCBcIiArIGdhbWUubGV2ZWwsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyLCBcImNlbnRlclwiLCAneWVsbG93JywgNDUpO1xuICAgICAgICBzdGFydFRleHQgPSBuZXcgVGV4dChcIkhpdCB0aGUgJ1NwYWNlIEJhcicgb3IgJ0Fycm93IFVwJyBrZXkgdG8gcGxheS5cIiwgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIsIFwiY2VudGVyXCIsICd3aGl0ZScsIDI1KTsgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRTY3JlZW4oKSB7XG4gICAgICAgIGlmIChnYW1lLnN0YXRlID09ICdwbGF5aW5nJykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBidWlsZGluZ3NbMF0uZHJhdygpO1xuICAgICAgICAgICAgc2lkZXdhbGtbMF0uZHJhdygpO1xuICAgICAgICAgICAgc3RhcnRUZXh0LmRyYXcoKTtcbiAgICAgICAgICAgIHBsYXllci5zdGFydFNjcmVlbigpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0YXJ0U2NyZWVuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG5cbiAgICAgICAgaWYgKGdhbWUuc3RhdGUgPT0gJ3BsYXlpbmcnKSB7XG5cbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGJ1aWxkaW5nc1swXS5zY3JvbGwoKTtcbiAgICAgICAgICAgIGJ1aWxkaW5nc1sxXS5zY3JvbGwoKTtcbiAgICAgICAgICAgIHNpZGV3YWxrWzBdLmFjY2VsZXJhdGVkU2Nyb2xsKCk7XG4gICAgICAgICAgICBzaWRld2Fsa1sxXS5hY2NlbGVyYXRlZFNjcm9sbCgpO1xuICAgICAgICAgICAgc2NvcmVUZXh0LmRyYXcoKTtcbiAgICAgICAgICAgIGhpZ2hzY29yZVRleHQuZHJhdygpO1xuICAgICAgICAgICAgc2NvcmVUZXh0LnRleHQgPSBcIlNjb3JlOiBcIiArIGdhbWUuc2NvcmU7XG4gICAgICAgICAgICBoaWdoc2NvcmVUZXh0LnVwZGF0ZShcIkhpZ2hTY29yZTogXCIgKyBnYW1lLmhpZ2hTY29yZSk7XG4gICAgICAgICAgICBwbGF5ZXIuYW5pbWF0ZSgpO1xuICAgICAgICAgICAgc3Bhd25PYnN0YWNsZSgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lLm9ic3RhY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGdhbWUub2JzdGFjbGVzW2ldLmFuaW1hdGUoKTtcbiAgICAgICAgICAgICAgICBjaGVja0NvbGxpc2lvbihwbGF5ZXIsIGdhbWUub2JzdGFjbGVzW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZS5mcmFtZSsrO1xuICAgICAgICAgICAgaWYgKGdhbWUuZnJhbWUgJSAxMCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5zY29yZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdhbWUuc2NvcmUgPiBnYW1lLmhpZ2hTY29yZSkge1xuICAgICAgICAgICAgICAgIGdhbWUuaGlnaFNjb3JlID0gZ2FtZS5zY29yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZ2l2ZSBwbGF5ZXIgYSA4MCBmcmFtZSBicmVhaywgNTAgZnJhbWVzIGJlZm9yZSBlYWNoIGxldmVsIGluY3JlYXNlXG4gICAgICAgICAgICBpZiAoZ2FtZS5mcmFtZSAlIChnYW1lLmxldmVsSW5jciAqIGdhbWUubGV2ZWwgLSA1MCkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGdhbWUuc3Bhd25UaW1lciA9IDgwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdhbWUuZnJhbWUgJSA1MDAgPT0gMCAmJiBnYW1lLnNwZWVkIDw9IGdhbWUuc3BlZWRNYXgpIHtcbiAgICAgICAgICAgICAgICBnYW1lLnNwZWVkICs9IGdhbWUuc3BlZWRJbmM7XG4gICAgICAgICAgICAgICAgZ2FtZS5sZXZlbCsrO1xuICAgICAgICAgICAgICAgIC8vZ2FtZS5zcGF3blRpbWVyID0gODA7XG4gICAgICAgICAgICAgICAgLy9wbGF5IGdhbWUgaW5jcmVhc2Ugc291bmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZS5zdGF0ZSA9PSAnb3ZlcicpIHtcbiAgICAgICAgICAgIGdhbWVPdmVyKGJ1aWxkaW5ncywgc2lkZXdhbGssIHBsYXllciwgc2NvcmVUZXh0LCBoaWdoc2NvcmVUZXh0KTtcbiAgICAgICAgfSAgXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIH1cbiAgICBcbiAgICBpbml0aWFsaXplKCk7XG4gICAgc3RhcnRTY3JlZW4oKTtcbn0pOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==