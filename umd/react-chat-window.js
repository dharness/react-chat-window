/*!
 * react-chat-window v1.2.0
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["liveChat"] = factory(require("react"));
	else
		root["liveChat"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(35)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FileIcon = function (_Component) {
  _inherits(FileIcon, _Component);

  function FileIcon() {
    _classCallCheck(this, FileIcon);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  FileIcon.prototype._handleClick = function _handleClick(e) {
    e.preventDefault();
    this.props.onClick && this.props.onClick(e);
  };

  FileIcon.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      {
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        onClick: this._handleClick.bind(this),
        className: 'sc-user-input--file-icon-wrapper'
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        {
          version: '1.1',
          className: 'sc-user-input--file-icon',
          xmlns: 'http://www.w3.org/2000/svg',
          x: '0px',
          y: '0px',
          width: '60px',
          height: '60px',
          viewBox: '0 0 55 55',
          enableBackground: 'new 0 0 60 60' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'g',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M43.922,6.653c-2.643-2.644-6.201-4.107-9.959-4.069c-3.774,0.019-7.32,1.497-9.983,4.161l-12.3,12.3l-8.523,8.521 c-4.143,4.144-4.217,10.812-0.167,14.862c1.996,1.996,4.626,2.989,7.277,2.989c2.73,0,5.482-1.055,7.583-3.156l15.547-15.545 c0.002-0.002,0.002-0.004,0.004-0.005l5.358-5.358c1.394-1.393,2.176-3.24,2.201-5.2c0.026-1.975-0.716-3.818-2.09-5.192 c-2.834-2.835-7.496-2.787-10.394,0.108L9.689,29.857c-0.563,0.563-0.563,1.474,0,2.036c0.281,0.28,0.649,0.421,1.018,0.421 c0.369,0,0.737-0.141,1.018-0.421l18.787-18.788c1.773-1.774,4.609-1.824,6.322-0.11c0.82,0.82,1.263,1.928,1.247,3.119 c-0.017,1.205-0.497,2.342-1.357,3.201l-5.55,5.551c-0.002,0.002-0.002,0.004-0.004,0.005L15.814,40.225 c-3.02,3.02-7.86,3.094-10.789,0.167c-2.928-2.929-2.854-7.77,0.167-10.791l0.958-0.958c0.001-0.002,0.004-0.002,0.005-0.004 L26.016,8.78c2.123-2.124,4.951-3.303,7.961-3.317c2.998,0.02,5.814,1.13,7.91,3.226c4.35,4.351,4.309,11.472-0.093,15.873 L25.459,40.895c-0.563,0.562-0.563,1.473,0,2.035c0.281,0.281,0.65,0.422,1.018,0.422c0.369,0,0.737-0.141,1.018-0.422 L43.83,26.596C49.354,21.073,49.395,12.126,43.922,6.653z' })
        )
      )
    );
  };

  return FileIcon;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (FileIcon);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(3);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "close-icon.c30463a5.png";

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Launcher__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Launcher", function() { return __WEBPACK_IMPORTED_MODULE_2__components_Launcher__["a"]; });






/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MessageList__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserInput__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__(10);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ChatWindow = function (_Component) {
  _inherits(ChatWindow, _Component);

  function ChatWindow(props) {
    _classCallCheck(this, ChatWindow);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  ChatWindow.prototype.onUserInputSubmit = function onUserInputSubmit(message) {
    this.props.onUserInputSubmit(message);
  };

  ChatWindow.prototype.onFilesSelected = function onFilesSelected(filesList) {
    this.props.onFilesSelected(filesList);
  };

  ChatWindow.prototype.render = function render() {
    var messageList = this.props.messageList || [];
    var classList = ["sc-chat-window", this.props.isOpen ? "opened" : "closed"];
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { className: classList.join(' ') },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* default */], {
        teamName: this.props.agentProfile.teamName,
        imageUrl: this.props.agentProfile.imageUrl,
        onClose: this.props.onClose
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__MessageList__["a" /* default */], {
        messages: messageList,
        imageUrl: this.props.agentProfile.imageUrl
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__UserInput__["a" /* default */], {
        onSubmit: this.onUserInputSubmit.bind(this),
        onFilesSelected: this.onFilesSelected.bind(this),
        showEmoji: this.props.showEmoji
      })
    );
  };

  return ChatWindow;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ChatWindow.propTypes = {
  agentProfile: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,
  isOpen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool.isRequired,
  onClose: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  onFilesSelected: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onUserInputSubmit: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  showEmoji: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (ChatWindow);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_close_icon_png__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_close_icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_close_icon_png__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'sc-header' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'sc-header--img', src: this.props.imageUrl, alt: '' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'sc-header--team-name' },
        ' ',
        this.props.teamName,
        ' '
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'sc-header--close-button', onClick: this.props.onClose },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_1__assets_close_icon_png___default.a, alt: '' })
      )
    );
  };

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ChatWindow__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_logo_no_bg_svg__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_logo_no_bg_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_logo_no_bg_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_sounds_notification_mp3__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_sounds_notification_mp3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_sounds_notification_mp3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_close_icon_png__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_close_icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_close_icon_png__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Launcher = function (_Component) {
  _inherits(Launcher, _Component);

  function Launcher() {
    _classCallCheck(this, Launcher);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      launcherIcon: __WEBPACK_IMPORTED_MODULE_3__assets_logo_no_bg_svg___default.a,
      isOpen: false
    };
    return _this;
  }

  Launcher.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.mute) {
      return;
    }
    var nextMessage = nextProps.messageList[nextProps.messageList.length - 1];
    var isIncoming = (nextMessage || {}).author === 'them';
    var isNew = nextProps.messageList.length > this.props.messageList.length;
    if (isIncoming && isNew) {
      this.playIncomingMessageSound();
    }
  };

  Launcher.prototype.playIncomingMessageSound = function playIncomingMessageSound() {
    var audio = new Audio(__WEBPACK_IMPORTED_MODULE_4__assets_sounds_notification_mp3___default.a);
    audio.play();
  };

  Launcher.prototype.handleClick = function handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  };

  Launcher.prototype.render = function render() {
    var isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    var classList = ['sc-launcher', isOpen ? 'opened' : ''];
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { id: 'sc-launcher' },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: classList.join(' '), onClick: this.handleClick.bind(this) },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(MessageCount, { count: this.props.newMessagesCount, isOpen: isOpen }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: "sc-open-icon", src: __WEBPACK_IMPORTED_MODULE_5__assets_close_icon_png___default.a }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: "sc-closed-icon", src: __WEBPACK_IMPORTED_MODULE_3__assets_logo_no_bg_svg___default.a })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ChatWindow__["a" /* default */], {
        messageList: this.props.messageList,
        onUserInputSubmit: this.props.onMessageWasSent,
        onFilesSelected: this.props.onFilesSelected,
        agentProfile: this.props.agentProfile,
        isOpen: isOpen,
        onClose: this.handleClick.bind(this),
        showEmoji: this.props.showEmoji
      })
    );
  };

  return Launcher;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var MessageCount = function MessageCount(props) {
  if (props.count === 0 || props.isOpen === true) {
    return null;
  }
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { className: "sc-new-messages-count" },
    props.count
  );
};

Launcher.propTypes = {
  onMessageWasReceived: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onMessageWasSent: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  newMessagesCount: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  isOpen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  handleClick: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  messageList: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object),
  mute: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  showEmoji: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

Launcher.defaultProps = {
  newMessagesCount: 0,
  showEmoji: true
};

/* harmony default export */ __webpack_exports__["a"] = (Launcher);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Messages__ = __webpack_require__(16);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MessageList = function (_Component) {
  _inherits(MessageList, _Component);

  function MessageList() {
    _classCallCheck(this, MessageList);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MessageList.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  };

  MessageList.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'sc-message-list', ref: function ref(el) {
          return _this2.scrollList = el;
        } },
      this.props.messages.map(function (message, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Messages__["a" /* default */], { message: message, key: i });
      })
    );
  };

  return MessageList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MessageList);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var EmojiMessage = function EmojiMessage(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "sc-message--emoji" },
    props.data.emoji
  );
};

/* harmony default export */ __webpack_exports__["a"] = (EmojiMessage);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_FileIcon__ = __webpack_require__(2);



var FileMessage = function FileMessage(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'sc-message--file', href: props.data.url, download: props.data.fileName },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__icons_FileIcon__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            props.data.fileName
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (FileMessage);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_linkify__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_linkify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_linkify__);



var TextMessage = function TextMessage(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'sc-message--text' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_linkify___default.a,
      { properties: { target: '_blank' } },
      props.data.text
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (TextMessage);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TextMessage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EmojiMessage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FileMessage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_chat_icon_svg__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_chat_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_chat_icon_svg__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Message.prototype._renderMessageOfType = function _renderMessageOfType(type) {
    switch (type) {
      case 'text':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__TextMessage__["a" /* default */], this.props.message);
      case 'emoji':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__EmojiMessage__["a" /* default */], this.props.message);
      case 'file':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FileMessage__["a" /* default */], this.props.message);
      default:
        console.error('Attempting to load message with unsupported file type \'' + type + '\'');
    }
  };

  Message.prototype.render = function render() {
    var contentClassList = ["sc-message--content", this.props.message.author === "me" ? "sent" : "received"];
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'sc-message' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: contentClassList.join(" ") },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sc-message--avatar', style: {
            backgroundImage: 'url(' + __WEBPACK_IMPORTED_MODULE_4__assets_chat_icon_svg___default.a + ')'
          } }),
        this._renderMessageOfType(this.props.message.type)
      )
    );
  };

  return Message;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Message);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons_SendIcon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons_FileIcon__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_EmojiIcon__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_PopupWindow__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__emoji_picker_EmojiPicker__ = __webpack_require__(18);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var UserInput = function (_Component) {
  _inherits(UserInput, _Component);

  function UserInput() {
    _classCallCheck(this, UserInput);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.toggleEmojiPicker = function (e) {
      e.preventDefault();
      if (!_this.state.emojiPickerIsOpen) {
        _this.setState({ emojiPickerIsOpen: true });
      }
    };

    _this.closeEmojiPicker = function (e) {
      if (_this.emojiPickerButton.contains(e.target)) {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.setState({ emojiPickerIsOpen: false });
    };

    _this._handleEmojiPicked = function (emoji) {
      _this.setState({ emojiPickerIsOpen: false });
      if (_this.state.inputHasText) {
        _this.userInput.innerHTML += emoji;
      } else {
        _this.props.onSubmit({
          author: 'me',
          type: 'emoji',
          data: { emoji: emoji }
        });
      }
    };

    _this.handleEmojiFilterChange = function (event) {
      var emojiFilter = event.target.value;
      _this.setState({ emojiFilter: emojiFilter });
    };

    _this._renderEmojiPopup = function () {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__popups_PopupWindow__["a" /* default */],
        {
          isOpen: _this.state.emojiPickerIsOpen,
          onClickedOutside: _this.closeEmojiPicker,
          onInputChange: _this.handleEmojiFilterChange
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__emoji_picker_EmojiPicker__["a" /* default */], {
          onEmojiPicked: _this._handleEmojiPicked,
          filter: _this.state.emojiFilter
        })
      );
    };

    _this.state = {
      inputActive: false,
      inputHasText: false,
      emojiPickerIsOpen: false,
      emojiFilter: ''
    };
    return _this;
  }

  UserInput.prototype.componentDidMount = function componentDidMount() {
    this.emojiPickerButton = document.querySelector('#sc-emoji-picker-button');
  };

  UserInput.prototype.handleKeyDown = function handleKeyDown(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      return this._submitText(event);
    }
  };

  UserInput.prototype.handleKeyUp = function handleKeyUp(event) {
    var inputHasText = event.target.innerHTML.length !== 0 && event.target.innerText !== '\n';
    this.setState({ inputHasText: inputHasText });
  };

  UserInput.prototype._showFilePicker = function _showFilePicker() {
    this._fileUploadButton.click();
  };

  UserInput.prototype._submitText = function _submitText(event) {
    event.preventDefault();
    var text = this.userInput.textContent;
    if (text && text.length > 0) {
      this.props.onSubmit({
        author: 'me',
        type: 'text',
        data: { text: text }
      });
      this.userInput.innerHTML = '';
    }
  };

  UserInput.prototype._onFilesSelected = function _onFilesSelected(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.props.onFilesSelected(event.target.files);
    }
  };

  UserInput.prototype._renderSendOrFileIcon = function _renderSendOrFileIcon() {
    var _this2 = this;

    if (this.state.inputHasText) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'sc-user-input--button' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icons_SendIcon__["a" /* default */], { onClick: this._submitText.bind(this) })
      );
    }
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { className: 'sc-user-input--button' },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__icons_FileIcon__["a" /* default */], { onClick: this._showFilePicker.bind(this) }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
        type: 'file',
        name: 'files[]',
        multiple: true,
        ref: function ref(e) {
          _this2._fileUploadButton = e;
        },
        onChange: this._onFilesSelected.bind(this)
      })
    );
  };

  UserInput.prototype.render = function render() {
    var _this3 = this;

    var _state = this.state,
        emojiPickerIsOpen = _state.emojiPickerIsOpen,
        inputActive = _state.inputActive;

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'form',
      { className: 'sc-user-input ' + (inputActive ? 'active' : '') },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
        role: 'button',
        tabIndex: '0',
        onFocus: function onFocus() {
          _this3.setState({ inputActive: true });
        },
        onBlur: function onBlur() {
          _this3.setState({ inputActive: false });
        },
        ref: function ref(e) {
          _this3.userInput = e;
        },
        onKeyDown: this.handleKeyDown.bind(this),
        onKeyUp: this.handleKeyUp.bind(this),
        contentEditable: 'true',
        placeholder: 'Write a reply...',
        className: 'sc-user-input--text'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'sc-user-input--buttons' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'sc-user-input--button' }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'sc-user-input--button' },
          this.props.showEmoji && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icons_EmojiIcon__["a" /* default */], {
            onClick: this.toggleEmojiPicker,
            isActive: emojiPickerIsOpen,
            tooltip: this._renderEmojiPopup()
          })
        ),
        this._renderSendOrFileIcon()
      )
    );
  };

  return UserInput;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

UserInput.propTypes = {
  onSubmit: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  onFilesSelected: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  showEmoji: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (UserInput);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emoji_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emoji_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_emoji_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emojiData__ = __webpack_require__(19);




var emojiConvertor = new __WEBPACK_IMPORTED_MODULE_1_emoji_js___default.a();
emojiConvertor.init_env();

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var onEmojiPicked = _ref.onEmojiPicked,
      filter = _ref.filter;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'sc-emoji-picker' },
    __WEBPACK_IMPORTED_MODULE_2__emojiData__["a" /* default */].map(function (category) {
      var filteredEmojis = category.emojis.filter(function (_ref2) {
        var name = _ref2.name;
        return name.includes(filter);
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'sc-emoji-picker--category', key: category.name },
        filteredEmojis.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'sc-emoji-picker--category-title' },
          category.name
        ),
        filteredEmojis.map(function (_ref3) {
          var char = _ref3.char,
              name = _ref3.name;

          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              key: char,
              className: 'sc-emoji-picker--emoji',
              onClick: function onClick() {
                return onEmojiPicked(char);
              }
            },
            char
          );
        })
      );
    })
  );
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{ "name": "People", "emojis": [{ "no": 6, "code": "1F604", "char": "😄", "name": "grinning face with smiling eyes" }, { "no": 5, "code": "1F603", "char": "😃", "name": "grinning face with big eyes" }, { "no": 1, "code": "1F600", "char": "😀", "name": "grinning face" }, { "no": 10, "code": "1F60A", "char": "😊", "name": "smiling face with smiling eyes" }, { "no": 9, "code": "1F609", "char": "😉", "name": "winking face" }, { "no": 13, "code": "1F60D", "char": "😍", "name": "smiling face with heart-eyes" }, { "no": 14, "code": "1F618", "char": "😘", "name": "face blowing a kiss" }, { "no": 17, "code": "1F61A", "char": "😚", "name": "kissing face with closed eyes" }, { "no": 15, "code": "1F617", "char": "😗", "name": "kissing face" }, { "no": 16, "code": "1F619", "char": "😙", "name": "kissing face with smiling eyes" }, { "no": 39, "code": "1F61C", "char": "😜", "name": "winking face with tongue" }, { "no": 40, "code": "1F61D", "char": "😝", "name": "squinting face with tongue" }, { "no": 38, "code": "1F61B", "char": "😛", "name": "face with tongue" }, { "no": 65, "code": "1F633", "char": "😳", "name": "flushed face" }, { "no": 2, "code": "1F601", "char": "😁", "name": "beaming face with smiling eyes" }, { "no": 44, "code": "1F614", "char": "😔", "name": "pensive face" }, { "no": 37, "code": "1F60C", "char": "😌", "name": "relieved face" }, { "no": 42, "code": "1F612", "char": "😒", "name": "unamused face" }, { "no": 52, "code": "1F61E", "char": "😞", "name": "disappointed face" }, { "no": 29, "code": "1F623", "char": "😣", "name": "persevering face" }, { "no": 55, "code": "1F622", "char": "😢", "name": "crying face" }, { "no": 3, "code": "1F602", "char": "😂", "name": "face with tears of joy" }, { "no": 56, "code": "1F62D", "char": "😭", "name": "loudly crying face" }, { "no": 34, "code": "1F62A", "char": "😪", "name": "sleepy face" }, { "no": 30, "code": "1F625", "char": "😥", "name": "sad but relieved face" }, { "no": 63, "code": "1F630", "char": "😰", "name": "anxious face with sweat" }, { "no": 7, "code": "1F605", "char": "😅", "name": "grinning face with sweat" }, { "no": 43, "code": "1F613", "char": "😓", "name": "downcast face with sweat" }, { "no": 60, "code": "1F629", "char": "😩", "name": "weary face" }, { "no": 35, "code": "1F62B", "char": "😫", "name": "tired face" }, { "no": 59, "code": "1F628", "char": "😨", "name": "fearful face" }, { "no": 64, "code": "1F631", "char": "😱", "name": "face screaming in fear" }, { "no": 69, "code": "1F620", "char": "😠", "name": "angry face" }, { "no": 68, "code": "1F621", "char": "😡", "name": "pouting face" }, { "no": 54, "code": "1F624", "char": "😤", "name": "face with steam from nose" }, { "no": 51, "code": "1F616", "char": "😖", "name": "confounded face" }, { "no": 8, "code": "1F606", "char": "😆", "name": "grinning squinting face" }, { "no": 11, "code": "1F60B", "char": "😋", "name": "face savoring food" }, { "no": 71, "code": "1F637", "char": "😷", "name": "face with medical mask" }, { "no": 12, "code": "1F60E", "char": "😎", "name": "smiling face with sunglasses" }, { "no": 36, "code": "1F634", "char": "😴", "name": "sleeping face" }, { "no": 67, "code": "1F635", "char": "😵", "name": "dizzy face" }, { "no": 48, "code": "1F632", "char": "😲", "name": "astonished face" }, { "no": 53, "code": "1F61F", "char": "😟", "name": "worried face" }, { "no": 57, "code": "1F626", "char": "😦", "name": "frowning face with open mouth" }, { "no": 58, "code": "1F627", "char": "😧", "name": "anguished face" }, { "no": 86, "code": "1F47F", "char": "👿", "name": "angry face with horns" }, { "no": 31, "code": "1F62E", "char": "😮", "name": "face with open mouth" }, { "no": 62, "code": "1F62C", "char": "😬", "name": "grimacing face" }, { "no": 24, "code": "1F610", "char": "😐", "name": "neutral face" }, { "no": 45, "code": "1F615", "char": "😕", "name": "confused face" }, { "no": 33, "code": "1F62F", "char": "😯", "name": "hushed face" }, { "no": 28, "code": "1F60F", "char": "😏", "name": "smirking face" }, { "no": 25, "code": "1F611", "char": "😑", "name": "expressionless face" }, { "no": 462, "code": "1F472", "char": "👲", "name": "man with Chinese cap" }, { "no": 444, "code": "1F473", "char": "👳", "name": "person wearing turban" }, { "no": 360, "code": "1F46E", "char": "👮", "name": "police officer" }, { "no": 414, "code": "1F477", "char": "👷", "name": "construction worker" }, { "no": 396, "code": "1F482", "char": "💂", "name": "guard" }, { "no": 108, "code": "1F476", "char": "👶", "name": "baby" }, { "no": 120, "code": "1F466", "char": "👦", "name": "boy" }, { "no": 126, "code": "1F467", "char": "👧", "name": "girl" }, { "no": 138, "code": "1F468", "char": "👨", "name": "man" }, { "no": 144, "code": "1F469", "char": "👩", "name": "woman" }, { "no": 156, "code": "1F474", "char": "👴", "name": "old man" }, { "no": 162, "code": "1F475", "char": "👵", "name": "old woman" }, { "no": 480, "code": "1F471", "char": "👱", "name": "blond-haired person" }, { "no": 522, "code": "1F47C", "char": "👼", "name": "baby angel" }, { "no": 438, "code": "1F478", "char": "👸", "name": "princess" }, { "no": 96, "code": "1F63A", "char": "😺", "name": "grinning cat face" }, { "no": 97, "code": "1F638", "char": "😸", "name": "grinning cat face with smiling eyes" }, { "no": 99, "code": "1F63B", "char": "😻", "name": "smiling cat face with heart-eyes" }, { "no": 101, "code": "1F63D", "char": "😽", "name": "kissing cat face" }, { "no": 100, "code": "1F63C", "char": "😼", "name": "cat face with wry smile" }, { "no": 102, "code": "1F640", "char": "🙀", "name": "weary cat face" }, { "no": 103, "code": "1F63F", "char": "😿", "name": "crying cat face" }, { "no": 98, "code": "1F639", "char": "😹", "name": "cat face with tears of joy" }, { "no": 104, "code": "1F63E", "char": "😾", "name": "pouting cat face" }, { "no": 87, "code": "1F479", "char": "👹", "name": "ogre" }, { "no": 88, "code": "1F47A", "char": "👺", "name": "goblin" }, { "no": 105, "code": "1F648", "char": "🙈", "name": "see-no-evil monkey" }, { "no": 106, "code": "1F649", "char": "🙉", "name": "hear-no-evil monkey" }, { "no": 107, "code": "1F64A", "char": "🙊", "name": "speak-no-evil monkey" }, { "no": 89, "code": "1F480", "char": "💀", "name": "skull" }, { "no": 92, "code": "1F47D", "char": "👽", "name": "alien" }, { "no": 95, "code": "1F4A9", "char": "💩", "name": "pile of poo" }, { "no": 1927, "code": "1F525", "char": "🔥", "name": "fire" }, { "no": 1934, "code": "2728", "char": "✨", "name": "sparkles" }, { "no": 1902, "code": "1F31F", "char": "🌟", "name": "glowing star" }, { "no": 1469, "code": "1F4AB", "char": "💫", "name": "dizzy" }, { "no": 1466, "code": "1F4A5", "char": "💥", "name": "collision" }, { "no": 1464, "code": "1F4A2", "char": "💢", "name": "anger symbol" }, { "no": 1467, "code": "1F4A6", "char": "💦", "name": "sweat droplets" }, { "no": 1928, "code": "1F4A7", "char": "💧", "name": "droplet" }, { "no": 1463, "code": "1F4A4", "char": "💤", "name": "zzz" }, { "no": 1468, "code": "1F4A8", "char": "💨", "name": "dashing away" }, { "no": 1425, "code": "1F442", "char": "👂", "name": "ear" }, { "no": 1438, "code": "1F440", "char": "👀", "name": "eyes" }, { "no": 1431, "code": "1F443", "char": "👃", "name": "nose" }, { "no": 1442, "code": "1F445", "char": "👅", "name": "tongue" }, { "no": 1443, "code": "1F444", "char": "👄", "name": "mouth" }, { "no": 1328, "code": "1F44D", "char": "👍", "name": "thumbs up" }, { "no": 1334, "code": "1F44E", "char": "👎", "name": "thumbs down" }, { "no": 1322, "code": "1F44C", "char": "👌", "name": "OK hand" }, { "no": 1346, "code": "1F44A", "char": "👊", "name": "oncoming fist" }, { "no": 1340, "code": "270A", "char": "✊", "name": "raised fist" }, { "no": 1370, "code": "1F44B", "char": "👋", "name": "waving hand" }, { "no": 1316, "code": "270B", "char": "✋", "name": "raised hand" }, { "no": 1394, "code": "1F450", "char": "👐", "name": "open hands" }, { "no": 1262, "code": "1F446", "char": "👆", "name": "backhand index pointing up" }, { "no": 1274, "code": "1F447", "char": "👇", "name": "backhand index pointing down" }, { "no": 1250, "code": "1F449", "char": "👉", "name": "backhand index pointing right" }, { "no": 1244, "code": "1F448", "char": "👈", "name": "backhand index pointing left" }, { "no": 1400, "code": "1F64C", "char": "🙌", "name": "raising hands" }, { "no": 1412, "code": "1F64F", "char": "🙏", "name": "folded hands" }, { "no": 1388, "code": "1F44F", "char": "👏", "name": "clapping hands" }, { "no": 1238, "code": "1F4AA", "char": "💪", "name": "flexed biceps" }, { "no": 834, "code": "1F6B6", "char": "🚶", "name": "person walking" }, { "no": 852, "code": "1F3C3", "char": "🏃", "name": "person running" }, { "no": 870, "code": "1F483", "char": "💃", "name": "woman dancing" }, { "no": 1195, "code": "1F46B", "char": "👫", "name": "man and woman holding hands" }, { "no": 1206, "code": "1F46A", "char": "👪", "name": "family" }, { "no": 1198, "code": "1F48F", "char": "💏", "name": "kiss" }, { "no": 1202, "code": "1F491", "char": "💑", "name": "couple with heart" }, { "no": 882, "code": "1F46F", "char": "👯", "name": "people with bunny ears" }, { "no": 690, "code": "1F646", "char": "🙆", "name": "person gesturing OK" }, { "no": 672, "code": "1F645", "char": "🙅", "name": "person gesturing NO" }, { "no": 708, "code": "1F481", "char": "💁", "name": "person tipping hand" }, { "no": 726, "code": "1F64B", "char": "🙋", "name": "person raising hand" }, { "no": 798, "code": "1F486", "char": "💆", "name": "person getting massage" }, { "no": 816, "code": "1F487", "char": "💇", "name": "person getting haircut" }, { "no": 1419, "code": "1F485", "char": "💅", "name": "nail polish" }, { "no": 504, "code": "1F470", "char": "👰", "name": "bride with veil" }, { "no": 654, "code": "1F64E", "char": "🙎", "name": "person pouting" }, { "no": 636, "code": "1F64D", "char": "🙍", "name": "person frowning" }, { "no": 744, "code": "1F647", "char": "🙇", "name": "person bowing" }, { "no": 1500, "code": "1F3A9", "char": "🎩", "name": "top hat" }, { "no": 1498, "code": "1F451", "char": "👑", "name": "crown" }, { "no": 1499, "code": "1F452", "char": "👒", "name": "woman’s hat" }, { "no": 1494, "code": "1F45F", "char": "👟", "name": "running shoe" }, { "no": 1493, "code": "1F45E", "char": "👞", "name": "man’s shoe" }, { "no": 1496, "code": "1F461", "char": "👡", "name": "woman’s sandal" }, { "no": 1495, "code": "1F460", "char": "👠", "name": "high-heeled shoe" }, { "no": 1497, "code": "1F462", "char": "👢", "name": "woman’s boot" }, { "no": 1478, "code": "1F455", "char": "👕", "name": "t-shirt" }, { "no": 1477, "code": "1F454", "char": "👔", "name": "necktie" }, { "no": 1487, "code": "1F45A", "char": "👚", "name": "woman’s clothes" }, { "no": 1484, "code": "1F457", "char": "👗", "name": "dress" }, { "no": 1976, "code": "1F3BD", "char": "🎽", "name": "running shirt" }, { "no": 1479, "code": "1F456", "char": "👖", "name": "jeans" }, { "no": 1485, "code": "1F458", "char": "👘", "name": "kimono" }, { "no": 1486, "code": "1F459", "char": "👙", "name": "bikini" }, { "no": 2097, "code": "1F4BC", "char": "💼", "name": "briefcase" }, { "no": 1489, "code": "1F45C", "char": "👜", "name": "handbag" }, { "no": 1490, "code": "1F45D", "char": "👝", "name": "clutch bag" }, { "no": 1488, "code": "1F45B", "char": "👛", "name": "purse" }, { "no": 1475, "code": "1F453", "char": "👓", "name": "glasses" }, { "no": 1944, "code": "1F380", "char": "🎀", "name": "ribbon" }, { "no": 1918, "code": "1F302", "char": "🌂", "name": "closed umbrella" }, { "no": 1505, "code": "1F484", "char": "💄", "name": "lipstick" }, { "no": 1454, "code": "1F49B", "char": "💛", "name": "yellow heart" }, { "no": 1452, "code": "1F499", "char": "💙", "name": "blue heart" }, { "no": 1456, "code": "1F49C", "char": "💜", "name": "purple heart" }, { "no": 1453, "code": "1F49A", "char": "💚", "name": "green heart" }, { "no": 1448, "code": "1F494", "char": "💔", "name": "broken heart" }, { "no": 1451, "code": "1F497", "char": "💗", "name": "growing heart" }, { "no": 1447, "code": "1F493", "char": "💓", "name": "beating heart" }, { "no": 1449, "code": "1F495", "char": "💕", "name": "two hearts" }, { "no": 1450, "code": "1F496", "char": "💖", "name": "sparkling heart" }, { "no": 1459, "code": "1F49E", "char": "💞", "name": "revolving hearts" }, { "no": 1445, "code": "1F498", "char": "💘", "name": "heart with arrow" }, { "no": 1462, "code": "1F48C", "char": "💌", "name": "love letter" }, { "no": 1444, "code": "1F48B", "char": "💋", "name": "kiss mark" }, { "no": 1506, "code": "1F48D", "char": "💍", "name": "ring" }, { "no": 1507, "code": "1F48E", "char": "💎", "name": "gem stone" }, { "no": 958, "code": "1F464", "char": "👤", "name": "bust in silhouette" }, { "no": 1470, "code": "1F4AC", "char": "💬", "name": "speech balloon" }, { "no": 1437, "code": "1F463", "char": "👣", "name": "footprints" }] }, { "name": "Nature", "emojis": [{ "no": 1511, "code": "1F436", "char": "🐶", "name": "dog face" }, { "no": 1514, "code": "1F43A", "char": "🐺", "name": "wolf face" }, { "no": 1516, "code": "1F431", "char": "🐱", "name": "cat face" }, { "no": 1543, "code": "1F42D", "char": "🐭", "name": "mouse face" }, { "no": 1546, "code": "1F439", "char": "🐹", "name": "hamster face" }, { "no": 1547, "code": "1F430", "char": "🐰", "name": "rabbit face" }, { "no": 1568, "code": "1F438", "char": "🐸", "name": "frog face" }, { "no": 1519, "code": "1F42F", "char": "🐯", "name": "tiger face" }, { "no": 1553, "code": "1F428", "char": "🐨", "name": "koala" }, { "no": 1552, "code": "1F43B", "char": "🐻", "name": "bear face" }, { "no": 1531, "code": "1F437", "char": "🐷", "name": "pig face" }, { "no": 1534, "code": "1F43D", "char": "🐽", "name": "pig nose" }, { "no": 1527, "code": "1F42E", "char": "🐮", "name": "cow face" }, { "no": 1533, "code": "1F417", "char": "🐗", "name": "boar" }, { "no": 1508, "code": "1F435", "char": "🐵", "name": "monkey face" }, { "no": 1509, "code": "1F412", "char": "🐒", "name": "monkey" }, { "no": 1522, "code": "1F434", "char": "🐴", "name": "horse face" }, { "no": 1536, "code": "1F411", "char": "🐑", "name": "ewe" }, { "no": 1541, "code": "1F418", "char": "🐘", "name": "elephant" }, { "no": 1554, "code": "1F43C", "char": "🐼", "name": "panda face" }, { "no": 1563, "code": "1F427", "char": "🐧", "name": "penguin" }, { "no": 1562, "code": "1F426", "char": "🐦", "name": "bird" }, { "no": 1560, "code": "1F424", "char": "🐤", "name": "baby chick" }, { "no": 1561, "code": "1F425", "char": "🐥", "name": "front-facing baby chick" }, { "no": 1559, "code": "1F423", "char": "🐣", "name": "hatching chick" }, { "no": 1557, "code": "1F414", "char": "🐔", "name": "chicken" }, { "no": 1572, "code": "1F40D", "char": "🐍", "name": "snake" }, { "no": 1570, "code": "1F422", "char": "🐢", "name": "turtle" }, { "no": 1591, "code": "1F41B", "char": "🐛", "name": "bug" }, { "no": 1593, "code": "1F41D", "char": "🐝", "name": "honeybee" }, { "no": 1592, "code": "1F41C", "char": "🐜", "name": "ant" }, { "no": 1594, "code": "1F41E", "char": "🐞", "name": "lady beetle" }, { "no": 1589, "code": "1F40C", "char": "🐌", "name": "snail" }, { "no": 1584, "code": "1F419", "char": "🐙", "name": "octopus" }, { "no": 1585, "code": "1F41A", "char": "🐚", "name": "spiral shell" }, { "no": 1581, "code": "1F420", "char": "🐠", "name": "tropical fish" }, { "no": 1580, "code": "1F41F", "char": "🐟", "name": "fish" }, { "no": 1579, "code": "1F42C", "char": "🐬", "name": "dolphin" }, { "no": 1577, "code": "1F433", "char": "🐳", "name": "spouting whale" }, { "no": 1523, "code": "1F40E", "char": "🐎", "name": "horse" }, { "no": 1573, "code": "1F432", "char": "🐲", "name": "dragon face" }, { "no": 1582, "code": "1F421", "char": "🐡", "name": "blowfish" }, { "no": 1539, "code": "1F42B", "char": "🐫", "name": "two-hump camel" }, { "no": 1513, "code": "1F429", "char": "🐩", "name": "poodle" }, { "no": 1555, "code": "1F43E", "char": "🐾", "name": "paw prints" }, { "no": 1599, "code": "1F490", "char": "💐", "name": "bouquet" }, { "no": 1600, "code": "1F338", "char": "🌸", "name": "cherry blossom" }, { "no": 1608, "code": "1F337", "char": "🌷", "name": "tulip" }, { "no": 1617, "code": "1F340", "char": "🍀", "name": "four leaf clover" }, { "no": 1603, "code": "1F339", "char": "🌹", "name": "rose" }, { "no": 1606, "code": "1F33B", "char": "🌻", "name": "sunflower" }, { "no": 1605, "code": "1F33A", "char": "🌺", "name": "hibiscus" }, { "no": 1618, "code": "1F341", "char": "🍁", "name": "maple leaf" }, { "no": 1620, "code": "1F343", "char": "🍃", "name": "leaf fluttering in wind" }, { "no": 1619, "code": "1F342", "char": "🍂", "name": "fallen leaf" }, { "no": 1615, "code": "1F33F", "char": "🌿", "name": "herb" }, { "no": 1614, "code": "1F33E", "char": "🌾", "name": "sheaf of rice" }, { "no": 1645, "code": "1F344", "char": "🍄", "name": "mushroom" }, { "no": 1613, "code": "1F335", "char": "🌵", "name": "cactus" }, { "no": 1612, "code": "1F334", "char": "🌴", "name": "palm tree" }, { "no": 1647, "code": "1F330", "char": "🌰", "name": "chestnut" }, { "no": 1609, "code": "1F331", "char": "🌱", "name": "seedling" }, { "no": 1607, "code": "1F33C", "char": "🌼", "name": "blossom" }, { "no": 1885, "code": "1F311", "char": "🌑", "name": "new moon" }, { "no": 1887, "code": "1F313", "char": "🌓", "name": "first quarter moon" }, { "no": 1888, "code": "1F314", "char": "🌔", "name": "waxing gibbous moon" }, { "no": 1889, "code": "1F315", "char": "🌕", "name": "full moon" }, { "no": 1895, "code": "1F31B", "char": "🌛", "name": "first quarter moon face" }, { "no": 1893, "code": "1F319", "char": "🌙", "name": "crescent moon" }, { "no": 1725, "code": "1F30F", "char": "🌏", "name": "globe showing Asia-Australia" }, { "no": 1731, "code": "1F30B", "char": "🌋", "name": "volcano" }, { "no": 1777, "code": "1F30C", "char": "🌌", "name": "milky way" }, { "no": 1903, "code": "1F320", "char": "🌠", "name": "shooting star" }, { "no": 1905, "code": "26C5", "char": "⛅", "name": "sun behind cloud" }, { "no": 1925, "code": "26C4", "char": "⛄", "name": "snowman without snow" }, { "no": 1916, "code": "1F300", "char": "🌀", "name": "cyclone" }, { "no": 1769, "code": "1F301", "char": "🌁", "name": "foggy" }, { "no": 1917, "code": "1F308", "char": "🌈", "name": "rainbow" }, { "no": 1929, "code": "1F30A", "char": "🌊", "name": "water wave" }] }, { "name": "Objects", "emojis": [{ "no": 1939, "code": "1F38D", "char": "🎍", "name": "pine decoration" }, { "no": 1458, "code": "1F49D", "char": "💝", "name": "heart with ribbon" }, { "no": 1940, "code": "1F38E", "char": "🎎", "name": "Japanese dolls" }, { "no": 1492, "code": "1F392", "char": "🎒", "name": "school backpack" }, { "no": 1501, "code": "1F393", "char": "🎓", "name": "graduation cap" }, { "no": 1941, "code": "1F38F", "char": "🎏", "name": "carp streamer" }, { "no": 1932, "code": "1F386", "char": "🎆", "name": "fireworks" }, { "no": 1933, "code": "1F387", "char": "🎇", "name": "sparkler" }, { "no": 1942, "code": "1F390", "char": "🎐", "name": "wind chime" }, { "no": 1943, "code": "1F391", "char": "🎑", "name": "moon viewing ceremony" }, { "no": 1930, "code": "1F383", "char": "🎃", "name": "jack-o-lantern" }, { "no": 91, "code": "1F47B", "char": "👻", "name": "ghost" }, { "no": 528, "code": "1F385", "char": "🎅", "name": "Santa Claus" }, { "no": 1931, "code": "1F384", "char": "🎄", "name": "Christmas tree" }, { "no": 1945, "code": "1F381", "char": "🎁", "name": "wrapped gift" }, { "no": 1938, "code": "1F38B", "char": "🎋", "name": "tanabata tree" }, { "no": 1936, "code": "1F389", "char": "🎉", "name": "party popper" }, { "no": 1937, "code": "1F38A", "char": "🎊", "name": "confetti ball" }, { "no": 1935, "code": "1F388", "char": "🎈", "name": "balloon" }, { "no": 2359, "code": "1F38C", "char": "🎌", "name": "crossed flags" }, { "no": 2150, "code": "1F52E", "char": "🔮", "name": "crystal ball" }, { "no": 2032, "code": "1F3A5", "char": "🎥", "name": "movie camera" }, { "no": 2037, "code": "1F4F7", "char": "📷", "name": "camera" }, { "no": 2039, "code": "1F4F9", "char": "📹", "name": "video camera" }, { "no": 2040, "code": "1F4FC", "char": "📼", "name": "videocassette" }, { "no": 2030, "code": "1F4BF", "char": "💿", "name": "optical disk" }, { "no": 2031, "code": "1F4C0", "char": "📀", "name": "dvd" }, { "no": 2028, "code": "1F4BD", "char": "💽", "name": "computer disk" }, { "no": 2029, "code": "1F4BE", "char": "💾", "name": "floppy disk" }, { "no": 2022, "code": "1F4BB", "char": "💻", "name": "laptop computer" }, { "no": 2014, "code": "1F4F1", "char": "📱", "name": "mobile phone" }, { "no": 2017, "code": "1F4DE", "char": "📞", "name": "telephone receiver" }, { "no": 2018, "code": "1F4DF", "char": "📟", "name": "pager" }, { "no": 2019, "code": "1F4E0", "char": "📠", "name": "fax machine" }, { "no": 2045, "code": "1F4E1", "char": "📡", "name": "satellite antenna" }, { "no": 2036, "code": "1F4FA", "char": "📺", "name": "television" }, { "no": 2007, "code": "1F4FB", "char": "📻", "name": "radio" }, { "no": 1993, "code": "1F50A", "char": "🔊", "name": "speaker high volume" }, { "no": 1997, "code": "1F514", "char": "🔔", "name": "bell" }, { "no": 1994, "code": "1F4E2", "char": "📢", "name": "loudspeaker" }, { "no": 1995, "code": "1F4E3", "char": "📣", "name": "megaphone" }, { "no": 1855, "code": "23F3", "char": "⏳", "name": "hourglass not done" }, { "no": 1854, "code": "231B", "char": "⌛", "name": "hourglass done" }, { "no": 1857, "code": "23F0", "char": "⏰", "name": "alarm clock" }, { "no": 1856, "code": "231A", "char": "⌚", "name": "watch" }, { "no": 2121, "code": "1F513", "char": "🔓", "name": "unlocked" }, { "no": 2120, "code": "1F512", "char": "🔒", "name": "locked" }, { "no": 2122, "code": "1F50F", "char": "🔏", "name": "locked with pen" }, { "no": 2123, "code": "1F510", "char": "🔐", "name": "locked with key" }, { "no": 2124, "code": "1F511", "char": "🔑", "name": "key" }, { "no": 2042, "code": "1F50E", "char": "🔎", "name": "magnifying glass tilted right" }, { "no": 2047, "code": "1F4A1", "char": "💡", "name": "light bulb" }, { "no": 2048, "code": "1F526", "char": "🔦", "name": "flashlight" }, { "no": 2021, "code": "1F50C", "char": "🔌", "name": "electric plug" }, { "no": 2020, "code": "1F50B", "char": "🔋", "name": "battery" }, { "no": 2041, "code": "1F50D", "char": "🔍", "name": "magnifying glass tilted left" }, { "no": 939, "code": "1F6C0", "char": "🛀", "name": "person taking bath" }, { "no": 1851, "code": "1F6BD", "char": "🚽", "name": "toilet" }, { "no": 2135, "code": "1F527", "char": "🔧", "name": "wrench" }, { "no": 2136, "code": "1F529", "char": "🔩", "name": "nut and bolt" }, { "no": 2126, "code": "1F528", "char": "🔨", "name": "hammer" }, { "no": 1848, "code": "1F6AA", "char": "🚪", "name": "door" }, { "no": 2145, "code": "1F6AC", "char": "🚬", "name": "cigarette" }, { "no": 1465, "code": "1F4A3", "char": "💣", "name": "bomb" }, { "no": 2132, "code": "1F52B", "char": "🔫", "name": "pistol" }, { "no": 1721, "code": "1F52A", "char": "🔪", "name": "kitchen knife" }, { "no": 2144, "code": "1F48A", "char": "💊", "name": "pill" }, { "no": 2143, "code": "1F489", "char": "💉", "name": "syringe" }, { "no": 2067, "code": "1F4B0", "char": "💰", "name": "money bag" }, { "no": 2068, "code": "1F4B4", "char": "💴", "name": "yen banknote" }, { "no": 2069, "code": "1F4B5", "char": "💵", "name": "dollar banknote" }, { "no": 2073, "code": "1F4B3", "char": "💳", "name": "credit card" }, { "no": 2072, "code": "1F4B8", "char": "💸", "name": "money with wings" }, { "no": 2015, "code": "1F4F2", "char": "📲", "name": "mobile phone with arrow" }, { "no": 2078, "code": "1F4E7", "char": "📧", "name": "e-mail" }, { "no": 2082, "code": "1F4E5", "char": "📥", "name": "inbox tray" }, { "no": 2081, "code": "1F4E4", "char": "📤", "name": "outbox tray" }, { "no": 2080, "code": "1F4E9", "char": "📩", "name": "envelope with arrow" }, { "no": 2079, "code": "1F4E8", "char": "📨", "name": "incoming envelope" }, { "no": 2084, "code": "1F4EB", "char": "📫", "name": "closed mailbox with raised flag" }, { "no": 2085, "code": "1F4EA", "char": "📪", "name": "closed mailbox with lowered flag" }, { "no": 2088, "code": "1F4EE", "char": "📮", "name": "postbox" }, { "no": 2083, "code": "1F4E6", "char": "📦", "name": "package" }, { "no": 2096, "code": "1F4DD", "char": "📝", "name": "memo" }, { "no": 2061, "code": "1F4C4", "char": "📄", "name": "page facing up" }, { "no": 2059, "code": "1F4C3", "char": "📃", "name": "page with curl" }, { "no": 2064, "code": "1F4D1", "char": "📑", "name": "bookmark tabs" }, { "no": 2108, "code": "1F4CA", "char": "📊", "name": "bar chart" }, { "no": 2106, "code": "1F4C8", "char": "📈", "name": "chart increasing" }, { "no": 2107, "code": "1F4C9", "char": "📉", "name": "chart decreasing" }, { "no": 2060, "code": "1F4DC", "char": "📜", "name": "scroll" }, { "no": 2109, "code": "1F4CB", "char": "📋", "name": "clipboard" }, { "no": 2101, "code": "1F4C5", "char": "📅", "name": "calendar" }, { "no": 2102, "code": "1F4C6", "char": "📆", "name": "tear-off calendar" }, { "no": 2105, "code": "1F4C7", "char": "📇", "name": "card index" }, { "no": 2098, "code": "1F4C1", "char": "📁", "name": "file folder" }, { "no": 2099, "code": "1F4C2", "char": "📂", "name": "open file folder" }, { "no": 2110, "code": "1F4CC", "char": "📌", "name": "pushpin" }, { "no": 2112, "code": "1F4CE", "char": "📎", "name": "paperclip" }, { "no": 2114, "code": "1F4CF", "char": "📏", "name": "straight ruler" }, { "no": 2115, "code": "1F4D0", "char": "📐", "name": "triangular ruler" }, { "no": 2051, "code": "1F4D5", "char": "📕", "name": "closed book" }, { "no": 2053, "code": "1F4D7", "char": "📗", "name": "green book" }, { "no": 2054, "code": "1F4D8", "char": "📘", "name": "blue book" }, { "no": 2055, "code": "1F4D9", "char": "📙", "name": "orange book" }, { "no": 2057, "code": "1F4D3", "char": "📓", "name": "notebook" }, { "no": 2050, "code": "1F4D4", "char": "📔", "name": "notebook with decorative cover" }, { "no": 2058, "code": "1F4D2", "char": "📒", "name": "ledger" }, { "no": 2056, "code": "1F4DA", "char": "📚", "name": "books" }, { "no": 2052, "code": "1F4D6", "char": "📖", "name": "open book" }, { "no": 2065, "code": "1F516", "char": "🔖", "name": "bookmark" }, { "no": 2254, "code": "1F4DB", "char": "📛", "name": "name badge" }, { "no": 2062, "code": "1F4F0", "char": "📰", "name": "newspaper" }, { "no": 1785, "code": "1F3A8", "char": "🎨", "name": "artist palette" }, { "no": 2035, "code": "1F3AC", "char": "🎬", "name": "clapper board" }, { "no": 2005, "code": "1F3A4", "char": "🎤", "name": "microphone" }, { "no": 2006, "code": "1F3A7", "char": "🎧", "name": "headphone" }, { "no": 1999, "code": "1F3BC", "char": "🎼", "name": "musical score" }, { "no": 2000, "code": "1F3B5", "char": "🎵", "name": "musical note" }, { "no": 2001, "code": "1F3B6", "char": "🎶", "name": "musical notes" }, { "no": 2010, "code": "1F3B9", "char": "🎹", "name": "musical keyboard" }, { "no": 2012, "code": "1F3BB", "char": "🎻", "name": "violin" }, { "no": 2011, "code": "1F3BA", "char": "🎺", "name": "trumpet" }, { "no": 2008, "code": "1F3B7", "char": "🎷", "name": "saxophone" }, { "no": 2009, "code": "1F3B8", "char": "🎸", "name": "guitar" }, { "no": 93, "code": "1F47E", "char": "👾", "name": "alien monster" }, { "no": 1980, "code": "1F3AE", "char": "🎮", "name": "video game" }, { "no": 1987, "code": "1F0CF", "char": "🃏", "name": "joker" }, { "no": 1989, "code": "1F3B4", "char": "🎴", "name": "flower playing cards" }, { "no": 1988, "code": "1F004", "char": "🀄", "name": "mahjong red dragon" }, { "no": 1982, "code": "1F3B2", "char": "🎲", "name": "game die" }, { "no": 1972, "code": "1F3AF", "char": "🎯", "name": "direct hit" }, { "no": 1959, "code": "1F3C8", "char": "🏈", "name": "american football" }, { "no": 1957, "code": "1F3C0", "char": "🏀", "name": "basketball" }, { "no": 1955, "code": "26BD", "char": "⚽", "name": "soccer ball" }, { "no": 1956, "code": "26BE", "char": "⚾", "name": "baseball" }, { "no": 1961, "code": "1F3BE", "char": "🎾", "name": "tennis" }, { "no": 1962, "code": "1F3B1", "char": "🎱", "name": "pool 8 ball" }, { "no": 1963, "code": "1F3B3", "char": "🎳", "name": "bowling" }, { "no": 1973, "code": "26F3", "char": "⛳", "name": "flag in hole" }, { "no": 2357, "code": "1F3C1", "char": "🏁", "name": "chequered flag" }, { "no": 1950, "code": "1F3C6", "char": "🏆", "name": "trophy" }, { "no": 1977, "code": "1F3BF", "char": "🎿", "name": "skis" }, { "no": 968, "code": "1F3C2", "char": "🏂", "name": "snowboarder" }, { "no": 1028, "code": "1F3CA", "char": "🏊", "name": "person swimming" }, { "no": 992, "code": "1F3C4", "char": "🏄", "name": "person surfing" }, { "no": 1975, "code": "1F3A3", "char": "🎣", "name": "fishing pole" }, { "no": 1706, "code": "1F375", "char": "🍵", "name": "teacup without handle" }, { "no": 1707, "code": "1F376", "char": "🍶", "name": "sake" }, { "no": 1712, "code": "1F37A", "char": "🍺", "name": "beer mug" }, { "no": 1713, "code": "1F37B", "char": "🍻", "name": "clinking beer mugs" }, { "no": 1710, "code": "1F378", "char": "🍸", "name": "cocktail glass" }, { "no": 1711, "code": "1F379", "char": "🍹", "name": "tropical drink" }, { "no": 1709, "code": "1F377", "char": "🍷", "name": "wine glass" }, { "no": 1719, "code": "1F374", "char": "🍴", "name": "fork and knife" }, { "no": 1660, "code": "1F355", "char": "🍕", "name": "pizza" }, { "no": 1658, "code": "1F354", "char": "🍔", "name": "hamburger" }, { "no": 1659, "code": "1F35F", "char": "🍟", "name": "french fries" }, { "no": 1655, "code": "1F357", "char": "🍗", "name": "poultry leg" }, { "no": 1654, "code": "1F356", "char": "🍖", "name": "meat on bone" }, { "no": 1680, "code": "1F35D", "char": "🍝", "name": "spaghetti" }, { "no": 1678, "code": "1F35B", "char": "🍛", "name": "curry rice" }, { "no": 1684, "code": "1F364", "char": "🍤", "name": "fried shrimp" }, { "no": 1674, "code": "1F371", "char": "🍱", "name": "bento box" }, { "no": 1683, "code": "1F363", "char": "🍣", "name": "sushi" }, { "no": 1685, "code": "1F365", "char": "🍥", "name": "fish cake with swirl" }, { "no": 1676, "code": "1F359", "char": "🍙", "name": "rice ball" }, { "no": 1675, "code": "1F358", "char": "🍘", "name": "rice cracker" }, { "no": 1677, "code": "1F35A", "char": "🍚", "name": "cooked rice" }, { "no": 1679, "code": "1F35C", "char": "🍜", "name": "steaming bowl" }, { "no": 1669, "code": "1F372", "char": "🍲", "name": "pot of food" }, { "no": 1682, "code": "1F362", "char": "🍢", "name": "oden" }, { "no": 1686, "code": "1F361", "char": "🍡", "name": "dango" }, { "no": 1667, "code": "1F373", "char": "🍳", "name": "cooking" }, { "no": 1648, "code": "1F35E", "char": "🍞", "name": "bread" }, { "no": 1693, "code": "1F369", "char": "🍩", "name": "doughnut" }, { "no": 1701, "code": "1F36E", "char": "🍮", "name": "custard" }, { "no": 1690, "code": "1F366", "char": "🍦", "name": "soft ice cream" }, { "no": 1692, "code": "1F368", "char": "🍨", "name": "ice cream" }, { "no": 1691, "code": "1F367", "char": "🍧", "name": "shaved ice" }, { "no": 1695, "code": "1F382", "char": "🎂", "name": "birthday cake" }, { "no": 1696, "code": "1F370", "char": "🍰", "name": "shortcake" }, { "no": 1694, "code": "1F36A", "char": "🍪", "name": "cookie" }, { "no": 1698, "code": "1F36B", "char": "🍫", "name": "chocolate bar" }, { "no": 1699, "code": "1F36C", "char": "🍬", "name": "candy" }, { "no": 1700, "code": "1F36D", "char": "🍭", "name": "lollipop" }, { "no": 1702, "code": "1F36F", "char": "🍯", "name": "honey pot" }, { "no": 1628, "code": "1F34E", "char": "🍎", "name": "red apple" }, { "no": 1629, "code": "1F34F", "char": "🍏", "name": "green apple" }, { "no": 1624, "code": "1F34A", "char": "🍊", "name": "tangerine" }, { "no": 1632, "code": "1F352", "char": "🍒", "name": "cherries" }, { "no": 1621, "code": "1F347", "char": "🍇", "name": "grapes" }, { "no": 1623, "code": "1F349", "char": "🍉", "name": "watermelon" }, { "no": 1633, "code": "1F353", "char": "🍓", "name": "strawberry" }, { "no": 1631, "code": "1F351", "char": "🍑", "name": "peach" }, { "no": 1622, "code": "1F348", "char": "🍈", "name": "melon" }, { "no": 1626, "code": "1F34C", "char": "🍌", "name": "banana" }, { "no": 1627, "code": "1F34D", "char": "🍍", "name": "pineapple" }, { "no": 1681, "code": "1F360", "char": "🍠", "name": "roasted sweet potato" }, { "no": 1638, "code": "1F346", "char": "🍆", "name": "eggplant" }, { "no": 1635, "code": "1F345", "char": "🍅", "name": "tomato" }, { "no": 1641, "code": "1F33D", "char": "🌽", "name": "ear of corn" }] }, { "name": "Places", "emojis": [{ "no": 1744, "code": "1F3E0", "char": "🏠", "name": "house" }, { "no": 1745, "code": "1F3E1", "char": "🏡", "name": "house with garden" }, { "no": 1754, "code": "1F3EB", "char": "🏫", "name": "school" }, { "no": 1746, "code": "1F3E2", "char": "🏢", "name": "office building" }, { "no": 1747, "code": "1F3E3", "char": "🏣", "name": "Japanese post office" }, { "no": 1749, "code": "1F3E5", "char": "🏥", "name": "hospital" }, { "no": 1750, "code": "1F3E6", "char": "🏦", "name": "bank" }, { "no": 1753, "code": "1F3EA", "char": "🏪", "name": "convenience store" }, { "no": 1752, "code": "1F3E9", "char": "🏩", "name": "love hotel" }, { "no": 1751, "code": "1F3E8", "char": "🏨", "name": "hotel" }, { "no": 1759, "code": "1F492", "char": "💒", "name": "wedding" }, { "no": 1762, "code": "26EA", "char": "⛪", "name": "church" }, { "no": 1755, "code": "1F3EC", "char": "🏬", "name": "department store" }, { "no": 1774, "code": "1F307", "char": "🌇", "name": "sunset" }, { "no": 1773, "code": "1F306", "char": "🌆", "name": "cityscape at dusk" }, { "no": 1757, "code": "1F3EF", "char": "🏯", "name": "Japanese castle" }, { "no": 1758, "code": "1F3F0", "char": "🏰", "name": "castle" }, { "no": 1768, "code": "26FA", "char": "⛺", "name": "tent" }, { "no": 1756, "code": "1F3ED", "char": "🏭", "name": "factory" }, { "no": 1760, "code": "1F5FC", "char": "🗼", "name": "Tokyo tower" }, { "no": 1728, "code": "1F5FE", "char": "🗾", "name": "map of Japan" }, { "no": 1732, "code": "1F5FB", "char": "🗻", "name": "mount fuji" }, { "no": 1771, "code": "1F304", "char": "🌄", "name": "sunrise over mountains" }, { "no": 1772, "code": "1F305", "char": "🌅", "name": "sunrise" }, { "no": 1770, "code": "1F303", "char": "🌃", "name": "night with stars" }, { "no": 1761, "code": "1F5FD", "char": "🗽", "name": "Statue of Liberty" }, { "no": 1775, "code": "1F309", "char": "🌉", "name": "bridge at night" }, { "no": 1778, "code": "1F3A0", "char": "🎠", "name": "carousel horse" }, { "no": 1779, "code": "1F3A1", "char": "🎡", "name": "ferris wheel" }, { "no": 1767, "code": "26F2", "char": "⛲", "name": "fountain" }, { "no": 1780, "code": "1F3A2", "char": "🎢", "name": "roller coaster" }, { "no": 1834, "code": "1F6A2", "char": "🚢", "name": "ship" }, { "no": 1828, "code": "26F5", "char": "⛵", "name": "sailboat" }, { "no": 1830, "code": "1F6A4", "char": "🚤", "name": "speedboat" }, { "no": 1845, "code": "1F680", "char": "🚀", "name": "rocket" }, { "no": 1839, "code": "1F4BA", "char": "💺", "name": "seat" }, { "no": 1794, "code": "1F689", "char": "🚉", "name": "station" }, { "no": 1789, "code": "1F684", "char": "🚄", "name": "high-speed train" }, { "no": 1790, "code": "1F685", "char": "🚅", "name": "bullet train" }, { "no": 1792, "code": "1F687", "char": "🚇", "name": "metro" }, { "no": 1788, "code": "1F683", "char": "🚃", "name": "railway car" }, { "no": 1799, "code": "1F68C", "char": "🚌", "name": "bus" }, { "no": 1811, "code": "1F699", "char": "🚙", "name": "sport utility vehicle" }, { "no": 1809, "code": "1F697", "char": "🚗", "name": "automobile" }, { "no": 1807, "code": "1F695", "char": "🚕", "name": "taxi" }, { "no": 1812, "code": "1F69A", "char": "🚚", "name": "delivery truck" }, { "no": 1822, "code": "1F6A8", "char": "🚨", "name": "police car light" }, { "no": 1805, "code": "1F693", "char": "🚓", "name": "police car" }, { "no": 1804, "code": "1F692", "char": "🚒", "name": "fire engine" }, { "no": 1803, "code": "1F691", "char": "🚑", "name": "ambulance" }, { "no": 1815, "code": "1F6B2", "char": "🚲", "name": "bicycle" }, { "no": 1781, "code": "1F488", "char": "💈", "name": "barber pole" }, { "no": 1818, "code": "1F68F", "char": "🚏", "name": "bus stop" }, { "no": 1948, "code": "1F3AB", "char": "🎫", "name": "ticket" }, { "no": 1823, "code": "1F6A5", "char": "🚥", "name": "horizontal traffic light" }, { "no": 1825, "code": "1F6A7", "char": "🚧", "name": "construction" }, { "no": 2255, "code": "1F530", "char": "🔰", "name": "Japanese symbol for beginner" }, { "no": 1821, "code": "26FD", "char": "⛽", "name": "fuel pump" }, { "no": 2049, "code": "1F3EE", "char": "🏮", "name": "red paper lantern" }, { "no": 1786, "code": "1F3B0", "char": "🎰", "name": "slot machine" }, { "no": 2148, "code": "1F5FF", "char": "🗿", "name": "moai" }, { "no": 1782, "code": "1F3AA", "char": "🎪", "name": "circus tent" }, { "no": 1783, "code": "1F3AD", "char": "🎭", "name": "performing arts" }, { "no": 2111, "code": "1F4CD", "char": "📍", "name": "round pushpin" }, { "no": 2358, "code": "1F6A9", "char": "🚩", "name": "triangular flag" }] }, { "name": "Symbols", "emojis": [{ "no": 2294, "code": "1F51F", "char": "🔟", "name": "keycap 10" }, { "no": 2298, "code": "1F522", "char": "🔢", "name": "input numbers" }, { "no": 2299, "code": "1F523", "char": "🔣", "name": "input symbols" }, { "no": 2296, "code": "1F520", "char": "🔠", "name": "input latin uppercase" }, { "no": 2297, "code": "1F521", "char": "🔡", "name": "input latin lowercase" }, { "no": 2300, "code": "1F524", "char": "🔤", "name": "input latin letters" }, { "no": 2234, "code": "1F53C", "char": "🔼", "name": "up button" }, { "no": 2236, "code": "1F53D", "char": "🔽", "name": "down button" }, { "no": 2232, "code": "23EA", "char": "⏪", "name": "fast reverse button" }, { "no": 2228, "code": "23E9", "char": "⏩", "name": "fast-forward button" }, { "no": 2235, "code": "23EB", "char": "⏫", "name": "fast up button" }, { "no": 2237, "code": "23EC", "char": "⏬", "name": "fast down button" }, { "no": 2313, "code": "1F197", "char": "🆗", "name": "OK button" }, { "no": 2310, "code": "1F195", "char": "🆕", "name": "NEW button" }, { "no": 2316, "code": "1F199", "char": "🆙", "name": "UP! button" }, { "no": 2305, "code": "1F192", "char": "🆒", "name": "COOL button" }, { "no": 2306, "code": "1F193", "char": "🆓", "name": "FREE button" }, { "no": 2311, "code": "1F196", "char": "🆖", "name": "NG button" }, { "no": 2245, "code": "1F4F6", "char": "📶", "name": "antenna bars" }, { "no": 2242, "code": "1F3A6", "char": "🎦", "name": "cinema" }, { "no": 2318, "code": "1F201", "char": "🈁", "name": "Japanese “here” button" }, { "no": 2322, "code": "1F22F", "char": "🈯", "name": "Japanese “reserved” button" }, { "no": 2330, "code": "1F233", "char": "🈳", "name": "Japanese “vacancy” button" }, { "no": 2334, "code": "1F235", "char": "🈵", "name": "Japanese “no vacancy” button" }, { "no": 2329, "code": "1F234", "char": "🈴", "name": "Japanese “passing grade” button" }, { "no": 2326, "code": "1F232", "char": "🈲", "name": "Japanese “prohibited” button" }, { "no": 2323, "code": "1F250", "char": "🉐", "name": "Japanese “bargain” button" }, { "no": 2324, "code": "1F239", "char": "🈹", "name": "Japanese “discount” button" }, { "no": 2333, "code": "1F23A", "char": "🈺", "name": "Japanese “open for business” button" }, { "no": 2321, "code": "1F236", "char": "🈶", "name": "Japanese “not free of charge” button" }, { "no": 2325, "code": "1F21A", "char": "🈚", "name": "Japanese “free of charge” button" }, { "no": 2158, "code": "1F6BB", "char": "🚻", "name": "restroom" }, { "no": 2156, "code": "1F6B9", "char": "🚹", "name": "men’s room" }, { "no": 2157, "code": "1F6BA", "char": "🚺", "name": "women’s room" }, { "no": 2159, "code": "1F6BC", "char": "🚼", "name": "baby symbol" }, { "no": 2160, "code": "1F6BE", "char": "🚾", "name": "water closet" }, { "no": 2170, "code": "1F6AD", "char": "🚭", "name": "no smoking" }, { "no": 2328, "code": "1F238", "char": "🈸", "name": "Japanese “application” button" }, { "no": 2327, "code": "1F251", "char": "🉑", "name": "Japanese “acceptable” button" }, { "no": 2304, "code": "1F191", "char": "🆑", "name": "CL button" }, { "no": 2315, "code": "1F198", "char": "🆘", "name": "SOS button" }, { "no": 2308, "code": "1F194", "char": "🆔", "name": "ID button" }, { "no": 2168, "code": "1F6AB", "char": "🚫", "name": "prohibited" }, { "no": 2175, "code": "1F51E", "char": "🔞", "name": "no one under eighteen" }, { "no": 2167, "code": "26D4", "char": "⛔", "name": "no entry" }, { "no": 2262, "code": "274E", "char": "❎", "name": "cross mark button" }, { "no": 2257, "code": "2705", "char": "✅", "name": "white heavy check mark" }, { "no": 1460, "code": "1F49F", "char": "💟", "name": "heart decoration" }, { "no": 2317, "code": "1F19A", "char": "🆚", "name": "VS button" }, { "no": 2246, "code": "1F4F3", "char": "📳", "name": "vibration mode" }, { "no": 2247, "code": "1F4F4", "char": "📴", "name": "mobile phone off" }, { "no": 2302, "code": "1F18E", "char": "🆎", "name": "AB button (blood type)" }, { "no": 2349, "code": "1F4A0", "char": "💠", "name": "diamond with a dot" }, { "no": 2223, "code": "26CE", "char": "⛎", "name": "Ophiuchus" }, { "no": 2210, "code": "1F52F", "char": "🔯", "name": "dotted six-pointed star" }, { "no": 2152, "code": "1F3E7", "char": "🏧", "name": "ATM sign" }, { "no": 2074, "code": "1F4B9", "char": "💹", "name": "chart increasing with yen" }, { "no": 2076, "code": "1F4B2", "char": "💲", "name": "heavy dollar sign" }, { "no": 2075, "code": "1F4B1", "char": "💱", "name": "currency exchange" }, { "no": 2261, "code": "274C", "char": "❌", "name": "cross mark" }, { "no": 2277, "code": "2757", "char": "❗", "name": "exclamation mark" }, { "no": 2274, "code": "2753", "char": "❓", "name": "question mark" }, { "no": 2276, "code": "2755", "char": "❕", "name": "white exclamation mark" }, { "no": 2275, "code": "2754", "char": "❔", "name": "white question mark" }, { "no": 2256, "code": "2B55", "char": "⭕", "name": "heavy large circle" }, { "no": 2198, "code": "1F51D", "char": "🔝", "name": "TOP arrow" }, { "no": 2195, "code": "1F51A", "char": "🔚", "name": "END arrow" }, { "no": 2194, "code": "1F519", "char": "🔙", "name": "BACK arrow" }, { "no": 2196, "code": "1F51B", "char": "🔛", "name": "ON! arrow" }, { "no": 2197, "code": "1F51C", "char": "🔜", "name": "SOON arrow" }, { "no": 2192, "code": "1F503", "char": "🔃", "name": "clockwise vertical arrows" }, { "no": 1861, "code": "1F55B", "char": "🕛", "name": "twelve o’clock" }, { "no": 1863, "code": "1F550", "char": "🕐", "name": "one o’clock" }, { "no": 1865, "code": "1F551", "char": "🕑", "name": "two o’clock" }, { "no": 1867, "code": "1F552", "char": "🕒", "name": "three o’clock" }, { "no": 1869, "code": "1F553", "char": "🕓", "name": "four o’clock" }, { "no": 1871, "code": "1F554", "char": "🕔", "name": "five o’clock" }, { "no": 1873, "code": "1F555", "char": "🕕", "name": "six o’clock" }, { "no": 1875, "code": "1F556", "char": "🕖", "name": "seven o’clock" }, { "no": 1877, "code": "1F557", "char": "🕗", "name": "eight o’clock" }, { "no": 1879, "code": "1F558", "char": "🕘", "name": "nine o’clock" }, { "no": 1881, "code": "1F559", "char": "🕙", "name": "ten o’clock" }, { "no": 1883, "code": "1F55A", "char": "🕚", "name": "eleven o’clock" }, { "no": 2263, "code": "2795", "char": "➕", "name": "heavy plus sign" }, { "no": 2264, "code": "2796", "char": "➖", "name": "heavy minus sign" }, { "no": 2265, "code": "2797", "char": "➗", "name": "heavy division sign" }, { "no": 1601, "code": "1F4AE", "char": "💮", "name": "white flower" }, { "no": 2295, "code": "1F4AF", "char": "💯", "name": "hundred points" }, { "no": 2350, "code": "1F518", "char": "🔘", "name": "radio button" }, { "no": 2141, "code": "1F517", "char": "🔗", "name": "link" }, { "no": 2266, "code": "27B0", "char": "➰", "name": "curly loop" }, { "no": 2253, "code": "1F531", "char": "🔱", "name": "trident emblem" }, { "no": 2347, "code": "1F53A", "char": "🔺", "name": "red triangle pointed up" }, { "no": 2351, "code": "1F532", "char": "🔲", "name": "black square button" }, { "no": 2352, "code": "1F533", "char": "🔳", "name": "white square button" }, { "no": 2355, "code": "1F534", "char": "🔴", "name": "red circle" }, { "no": 2356, "code": "1F535", "char": "🔵", "name": "blue circle" }, { "no": 2348, "code": "1F53B", "char": "🔻", "name": "red triangle pointed down" }, { "no": 2342, "code": "2B1C", "char": "⬜", "name": "white large square" }, { "no": 2341, "code": "2B1B", "char": "⬛", "name": "black large square" }, { "no": 2343, "code": "1F536", "char": "🔶", "name": "large orange diamond" }, { "no": 2344, "code": "1F537", "char": "🔷", "name": "large blue diamond" }, { "no": 2345, "code": "1F538", "char": "🔸", "name": "small orange diamond" }, { "no": 2346, "code": "1F539", "char": "🔹", "name": "small blue diamond" }] }]);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var tooltip = _ref.tooltip,
      onClick = _ref.onClick,
      isActive = _ref.isActive;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "sc-user-input--picker-wrapper" },
    tooltip,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "button",
      { id: "sc-emoji-picker-button", className: "sc-user-input--emoji-icon-wrapper", onClick: onClick },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        {
          className: "sc-user-input--emoji-icon " + (isActive ? 'active' : ''),
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "100%",
          height: "10px",
          viewBox: "0 0 37 37",
          enableBackground: "new 0 0 37 37"
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "g",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M18.696,37C8.387,37,0,29.006,0,18.696C0,8.387,8.387,0,18.696,0c10.31,0,18.696,8.387,18.696,18.696 C37,29.006,29.006,37,18.696,37z M18.696,2C9.49,2,2,9.49,2,18.696c0,9.206,7.49,16.696,16.696,16.696 c9.206,0,16.696-7.49,16.696-16.696C35.393,9.49,27.902,2,18.696,2z"
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "g",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { cx: "12.379", cy: "14.359", r: "1.938" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "g",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { cx: "24.371", cy: "14.414", r: "1.992" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "g",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M18.035,27.453c-5.748,0-8.342-4.18-8.449-4.357c-0.286-0.473-0.135-1.087,0.338-1.373 c0.471-0.286,1.084-0.136,1.372,0.335c0.094,0.151,2.161,3.396,6.74,3.396c4.713,0,7.518-3.462,7.545-3.497 c0.343-0.432,0.973-0.504,1.405-0.161c0.433,0.344,0.505,0.973,0.161,1.405C27.009,23.374,23.703,27.453,18.035,27.453z"
          })
        )
      )
    )
  );
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SendIcon = function (_Component) {
  _inherits(SendIcon, _Component);

  function SendIcon() {
    _classCallCheck(this, SendIcon);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SendIcon.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      {
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        onClick: function onClick(e) {
          e.preventDefault();_this2.props.onClick(e);
        },
        className: 'sc-user-input--send-icon-wrapper'
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        {
          version: '1.1',
          className: 'sc-user-input--send-icon',
          xmlns: 'http://www.w3.org/2000/svg',
          x: '0px',
          y: '0px',
          width: '37.393px',
          height: '37.393px',
          viewBox: '0 0 37.393 37.393',
          enableBackground: 'new 0 0 37.393 37.393' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'g',
          { id: 'Layer_2' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M36.511,17.594L2.371,2.932c-0.374-0.161-0.81-0.079-1.1,0.21C0.982,3.43,0.896,3.865,1.055,4.241l5.613,13.263 L2.082,32.295c-0.115,0.372-0.004,0.777,0.285,1.038c0.188,0.169,0.427,0.258,0.67,0.258c0.132,0,0.266-0.026,0.392-0.08 l33.079-14.078c0.368-0.157,0.607-0.519,0.608-0.919S36.879,17.752,36.511,17.594z M4.632,30.825L8.469,18.45h8.061 c0.552,0,1-0.448,1-1s-0.448-1-1-1H8.395L3.866,5.751l29.706,12.757L4.632,30.825z' })
        )
      )
    );
  };

  return SendIcon;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SendIcon);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var PopupWindow = function (_Component) {
  _inherits(PopupWindow, _Component);

  function PopupWindow() {
    var _temp, _this, _ret;

    _classCallCheck(this, PopupWindow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.interceptLauncherClick = function (e) {
      var isOpen = _this.props.isOpen;

      var clickedOutside = !_this.emojiPopup.contains(e.target) && isOpen;
      clickedOutside && _this.props.onClickedOutside(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PopupWindow.prototype.componentDidMount = function componentDidMount() {
    this.scLauncher = document.querySelector('#sc-launcher');
    this.scLauncher.addEventListener('click', this.interceptLauncherClick);
  };

  PopupWindow.prototype.componentWillUnmount = function componentWillUnmount() {
    this.scLauncher.removeEventListener('click', this.interceptLauncherClick);
  };

  PopupWindow.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        isOpen = _props.isOpen,
        children = _props.children;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'sc-popup-window', ref: function ref(e) {
          return _this2.emojiPopup = e;
        } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'sc-popup-window--cointainer ' + (isOpen ? '' : 'closed') },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          onChange: this.props.onInputChange,
          className: 'sc-popup-window--search',
          placeholder: 'Search emoji...'
        }),
        children
      )
    );
  };

  return PopupWindow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PopupWindow);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emojiPicker_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emojiPicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emojiPicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_window_css__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_window_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__chat_window_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__launcher_css__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__launcher_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__launcher_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_css__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__message_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_input_css__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__user_input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popup_window_css__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popup_window_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__popup_window_css__);








/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

;(function() {

	var root = this;
	var previous_emoji = root.EmojiConvertor;


	/**
	 * @global
	 * @namespace
	 */

	var emoji = function(){

		var self = this;

		/**
		 * The set of images to use for graphical emoji.
		 *
		 * @memberof emoji
		 * @type {string}
		 */
		self.img_set = 'apple';

		/**
		 * Configuration details for different image sets. This includes a path to a directory containing the
		 * individual images (`path`) and a URL to sprite sheets (`sheet`). All of these images can be found
		 * in the [emoji-data repository]{@link https://github.com/iamcal/emoji-data}. Using a CDN for these
		 * is not a bad idea.
		 *
		 * @memberof emoji
		 * @type {object}
		 */
		self.img_sets = {
			'apple' : {'path' : '/emoji-data/img-apple-64/', 'sheet' : '/emoji-data/sheet_apple_64.png', 'mask' : 1},
			'google' : {'path' : '/emoji-data/img-google-64/', 'sheet' : '/emoji-data/sheet_google_64.png', 'mask' : 2},
			'twitter' : {'path' : '/emoji-data/img-twitter-64/', 'sheet' : '/emoji-data/sheet_twitter_64.png', 'mask' : 4},
			'emojione' : {'path' : '/emoji-data/img-emojione-64/', 'sheet' : '/emoji-data/sheet_emojione_64.png', 'mask' : 8},
			'facebook' : {'path' : '/emoji-data/img-facebook-64/', 'sheet' : '/emoji-data/sheet_facebook_64.png', 'mask' : 16},
			'messenger' : {'path' : '/emoji-data/img-messenger-64/', 'sheet' : '/emoji-data/sheet_messenger_64.png', 'mask' : 32},
		};

		/**
		 * Use a CSS class instead of specifying a sprite or background image for
		 * the span representing the emoticon. This requires a CSS sheet with
		 * emoticon data-uris.
		 *
		 * @memberof emoji
		 * @type bool
		 * @todo document how to build the CSS stylesheet self requires.
		 */
		self.use_css_imgs = false;

		/**
		 * Instead of replacing emoticons with the appropriate representations,
		 * replace them with their colon string representation.
		 * @memberof emoji
		 * @type bool
		 */
		self.colons_mode = false;
		self.text_mode = false;

		/**
		 * If true, sets the "title" property on the span or image that gets
		 * inserted for the emoticon.
		 * @memberof emoji
		 * @type bool
		 */
		self.include_title = false;

		/**
		 * If true, sets the text of the span or image that gets inserted for the
		 * emoticon.
		 * @memberof emoji
		 * @type bool
		 */
		self.include_text = false;

		/**
		 * If the platform supports native emoticons, use those instead
		 * of the fallbacks.
		 * @memberof emoji
		 * @type bool
		 */
		self.allow_native = true;

		/**
		 * Set to true to use CSS sprites instead of individual images on 
		 * platforms that support it.
		 *
		 * @memberof emoji
		 * @type bool
		 */
		self.use_sheet = false;

		/**
		 *
		 * Set to true to avoid black & white native Windows emoji being used.
		 *
		 * @memberof emoji
		 * @type bool
		 */
		self.avoid_ms_emoji = true;

		/**
		 *
		 * Set to true to allow :CAPITALIZATION:
		 *
		 * @memberof emoji
		 * @type bool
		 */
		self.allow_caps = false;


		/**
		 *
		 * Suffix to allow for individual image cache busting
		 *
		 * @memberof emoji
		 * @type string
		 */
		self.img_suffix = '';


		// Keeps track of what has been initialized.
		/** @private */
		self.inits = {};
		self.map = {};

		// discover the environment settings
		self.init_env();

		return self;
	}

	emoji.prototype.noConflict = function(){
		root.EmojiConvertor = previous_emoji;
		return emoji;
	}


	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing ascii emoticons
	 * (ie. `:)`)
	 *
	 * @returns {string} A new string with all emoticons in `str`
	 * replaced by a representatation that's supported by the current
	 * environtment.
	 */
	emoji.prototype.replace_emoticons = function(str){
		var self = this;
		var colonized = self.replace_emoticons_with_colons(str);
		return self.replace_colons(colonized);
	};

	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing ascii emoticons
	 * (ie. `:)`)
	 *
	 * @returns {string} A new string with all emoticons in `str`
	 * replaced by their colon string representations (ie. `:smile:`)
	 */
	emoji.prototype.replace_emoticons_with_colons = function(str){
		var self = this;
		self.init_emoticons();
		var _prev_offset = 0;
		var emoticons_with_parens = [];
		var str_replaced = str.replace(self.rx_emoticons, function(m, $1, emoticon, offset){
			var prev_offset = _prev_offset;
			_prev_offset = offset + m.length;

			var has_open_paren = emoticon.indexOf('(') !== -1;
			var has_close_paren = emoticon.indexOf(')') !== -1;

			/*
			 * Track paren-having emoticons for fixing later
			 */
			if ((has_open_paren || has_close_paren) && emoticons_with_parens.indexOf(emoticon) == -1) {
				emoticons_with_parens.push(emoticon);
			}

			/*
			 * Look for preceding open paren for emoticons that contain a close paren
			 * This prevents matching "8)" inside "(around 7 - 8)"
			 */
			if (has_close_paren && !has_open_paren) {
				var piece = str.substring(prev_offset, offset);
				if (piece.indexOf('(') !== -1 && piece.indexOf(')') === -1) return m;
			}

			/*
			 * See if we're in a numbered list
			 * This prevents matching "8)" inside "7) foo\n8) bar"
			 */
			if (m === '\n8)') {
				var before_match = str.substring(0, offset);
				if (/\n?(6\)|7\))/.test(before_match)) return m;
			}

			var val = self.data[self.map.emoticons[emoticon]][3][0];
			return val ? $1+':'+val+':' : m;
		});

		/*
		 * Come back and fix emoticons we ignored because they were inside parens.
		 * It's useful to do self at the end so we don't get tripped up by other,
		 * normal emoticons
		 */
		if (emoticons_with_parens.length) {
			var escaped_emoticons = emoticons_with_parens.map(self.escape_rx);
			var parenthetical_rx = new RegExp('(\\(.+)('+escaped_emoticons.join('|')+')(.+\\))', 'g');

			str_replaced = str_replaced.replace(parenthetical_rx, function(m, $1, emoticon, $2) {
				var val = self.data[self.map.emoticons[emoticon]][3][0];
				return val ? $1+':'+val+':'+$2 : m;
			});
		}

		return str_replaced;
	};

	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing colon string
	 * representations of emoticons (ie. `:smile:`)
	 *
	 * @returns {string} A new string with all colon string emoticons replaced
	 * with the appropriate representation.
	 */
	emoji.prototype.replace_colons = function(str){
		var self = this;
		self.init_colons();

		return str.replace(self.rx_colons, function(m){
			var idx = m.substr(1, m.length-2);
			if (self.allow_caps) idx = idx.toLowerCase();

			// special case - an emoji with a skintone modified
			if (idx.indexOf('::skin-tone-') > -1){

				var skin_tone = idx.substr(-1, 1);
				var skin_idx = 'skin-tone-'+skin_tone;
				var skin_val = self.map.colons[skin_idx];

				idx = idx.substr(0, idx.length - 13);

				var val = self.map.colons[idx];
				if (val){
					return self.replacement(val, idx, ':', {
						'idx'		: skin_val,
						'actual'	: skin_idx,
						'wrapper'	: ':'
					});
				}else{
					return ':' + idx + ':' + self.replacement(skin_val, skin_idx, ':');
				}
			}else{
				var val = self.map.colons[idx];
				return val ? self.replacement(val, idx, ':') : m;
			}
		});
	};

	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing unified unicode
	 * emoticons. (ie. 😄)
	 *
	 * @returns {string} A new string with all unicode emoticons replaced with
	 * the appropriate representation for the current environment.
	 */
	emoji.prototype.replace_unified = function(str){
		var self = this;
		self.init_unified();
		return str.replace(self.rx_unified, function(m, p1, p2){

			var val = self.map.unified[p1];
			if (val){
				var idx = null;
				if (p2 == '\uD83C\uDFFB') idx = '1f3fb';
				if (p2 == '\uD83C\uDFFC') idx = '1f3fc';
				if (p2 == '\uD83C\uDFFD') idx = '1f3fd';
				if (p2 == '\uD83C\uDFFE') idx = '1f3fe';
				if (p2 == '\uD83C\uDFFF') idx = '1f3ff';
				if (idx){
					return self.replacement(val, null, null, {
						idx	: idx,
						actual	: p2,
						wrapper	: ''
					});
					}
				return self.replacement(val);
			}

			val = self.map.unified_vars[p1];
			if (val){
				return self.replacement(val[0], null, null, {
					'idx'		: val[1],
					'actual'	: '',
					'wrapper'	: '',
				});
			}

			return m;
		});
	};

	emoji.prototype.addAliases = function(map){
		var self = this;

		self.init_colons();
		for (var i in map){
			self.map.colons[i] = map[i];
		}
	};

	emoji.prototype.removeAliases = function(list){
		var self = this;

		for (var i=0; i<list.length; i++){
			var alias = list[i];

			// first, delete the alias mapping
			delete self.map.colons[alias];

			// now reset it to the default, if one exists
			finder_block: {
				for (var j in self.data){
					for (var k=0; k<self.data[j][3].length; k++){
						if (alias == self.data[j][3][k]){
							self.map.colons[alias] = j;
							break finder_block;
						}
					}
				}
			}
		}
	};


	// Does the actual replacement of a character with the appropriate
	/** @private */
	emoji.prototype.replacement = function(idx, actual, wrapper, variation){
		var self = this;

		var full_idx = idx;

		// for emoji with variation modifiers, set `extra` to the standalone output for the
		// modifier (used if we can't combine the glyph) and set variation_idx to key of the
		// variation modifier (used below)
		var extra = '';
		var var_idx = null;
		if (typeof variation === 'object'){
			extra = self.replacement(variation.idx, variation.actual, variation.wrapper);
			var_idx = variation.idx;
		}

		// deal with simple modes (colons and text) first
		wrapper = wrapper || '';
		if (self.colons_mode) return ':'+self.data[idx][3][0]+':'+extra;
		var text_name = (actual) ? wrapper+actual+wrapper : self.data[idx][8] || wrapper+self.data[idx][3][0]+wrapper;
		if (self.text_mode) return text_name + extra;

		// native modes next.
		// for variations selectors, we just need to output them raw, which `extra` will contain.
		self.init_env();
		if (self.replace_mode == 'unified'  && self.allow_native && self.data[idx][0][0]) return self.data[idx][0][0] + extra;
		if (self.replace_mode == 'softbank' && self.allow_native && self.data[idx][1]) return self.data[idx][1] + extra;
		if (self.replace_mode == 'google'   && self.allow_native && self.data[idx][2]) return self.data[idx][2] + extra;

		// finally deal with image modes.
		// variation selectors are more complex here - if the image set and particular emoji supports variations, then
		// use the variation image. otherwise, return it as a separate image (already calculated in `extra`).
		// first we set up the params we'll use if we can't use a variation.
		var img = self.find_image(idx, var_idx);
		var title = self.include_title ? ' title="'+(actual || self.data[idx][3][0])+'"' : '';
		var text  = self.include_text  ? wrapper+(actual || self.data[idx][3][0])+wrapper : '';

		// custom image for this glyph?
		if (self.data[idx][7]){
			img.path = self.data[idx][7];
			img.px = null;
			img.py = null;
			img.is_var = false;
		}

		// if we're displaying a variation, include it in the text and remove the extra
		if (img.is_var){
			extra = '';
			// add variation text
			if (self.include_text && variation && variation.actual && variation.wrapper) {
				text += variation.wrapper+variation.actual+variation.wrapper;
			}
		}

		// output
		if (self.supports_css) {
			if (self.use_sheet && img.px != null && img.py != null){
				var mul = 100 / (self.sheet_size - 1);
				var style = 'background: url('+img.sheet+');background-position:'+(mul*img.px)+'% '+(mul*img.py)+'%;background-size:'+self.sheet_size+'00%';
				return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="'+style+'"'+title+' data-codepoints="'+img.full_idx+'">'+text+'</span></span>'+extra;
			}else if (self.use_css_imgs){
				return '<span class="emoji emoji-'+idx+'"'+title+' data-codepoints="'+img.full_idx+'">'+text+'</span>'+extra;
			}else{
				return '<span class="emoji emoji-sizer" style="background-image:url('+img.path+')"'+title+' data-codepoints="'+img.full_idx+'">'+text+'</span>'+extra;
			}
		}
		return '<img src="'+img.path+'" class="emoji" data-codepoints="'+img.full_idx+'" '+title+'/>'+extra;
	};

	// Finds the best image to display, taking into account image set precedence and obsoletes
	/** @private */
	emoji.prototype.find_image = function(idx, var_idx){
		var self = this;

		// set up some initial state
		var out = {
			'path'		: '',
			'sheet'		: '',
			'px'		: self.data[idx][4],
			'py'		: self.data[idx][5],
			'full_idx'	: idx,
			'is_var'	: false
		};
		var use_mask = self.data[idx][6];

		// can we use a variation?
		if (var_idx && self.variations_data[idx] && self.variations_data[idx][var_idx]){
			var var_data = self.variations_data[idx][var_idx];

			out.px = var_data[1];
			out.py = var_data[2];
			out.full_idx = var_data[0];
			out.is_var = true;
			use_mask = var_data[3];
		}

		// this matches `build/build_image.php` `in emoji-data`, so that sheet and images modes always
		// agree about the image to use.
		var try_order = [self.img_set, 'apple', 'emojione', 'google', 'twitter', 'facebook', 'messenger'];

		// for each image set, see if we have the image we need. otherwise check for an obsolete in
		// that image set
		for (var j=0; j<try_order.length; j++){
			if (use_mask & self.img_sets[try_order[j]].mask){
				out.path = self.img_sets[try_order[j]].path+out.full_idx+'.png' + self.img_suffix;
				// if we're not changing glyph, use our base set for sheets - it has every glyph
				out.sheet = self.img_sets[self.img_set].sheet;
				return out;
			}
			if (self.obsoletes_data[out.full_idx]){
				var ob_data = self.obsoletes_data[out.full_idx];

				if (ob_data[3] & self.img_sets[try_order[j]].mask){
					out.path = self.img_sets[try_order[j]].path+ob_data[0]+'.png' + self.img_suffix;
					out.sheet = self.img_sets[try_order[j]].sheet;
					out.px = ob_data[1];
					out.py = ob_data[2];
					return out;
				}
			}
		}

		return out;
	};

	// Initializes the text emoticon data
	/** @private */
	emoji.prototype.init_emoticons = function(){
		var self = this;
		if (self.inits.emoticons) return;
		self.init_colons(); // we require this for the emoticons map
		self.inits.emoticons = 1;
		
		var a = [];
		self.map.emoticons = {};
		for (var i in self.emoticons_data){
			// because we never see some characters in our text except as entities, we must do some replacing
			var emoticon = i.replace(/\&/g, '&amp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
			
			if (!self.map.colons[self.emoticons_data[i]]) continue;

			self.map.emoticons[emoticon] = self.map.colons[self.emoticons_data[i]];
			a.push(self.escape_rx(emoticon));
		}
		self.rx_emoticons = new RegExp(('(^|\\s)('+a.join('|')+')(?=$|[\\s|\\?\\.,!])'), 'g');
	};

	// Initializes the colon string data
	/** @private */
	emoji.prototype.init_colons = function(){
		var self = this;
		if (self.inits.colons) return;
		self.inits.colons = 1;
		self.rx_colons = new RegExp('\:[a-zA-Z0-9-_+]+\:(\:skin-tone-[2-6]\:)?', 'g');
		self.map.colons = {};
		for (var i in self.data){
			for (var j=0; j<self.data[i][3].length; j++){
				self.map.colons[self.data[i][3][j]] = i;
			}
		}
	};

	// initializes the unified unicode emoticon data
	/** @private */
	emoji.prototype.init_unified = function(){
		var self = this;
		if (self.inits.unified) return;
		self.inits.unified = 1;

		var a = [];
		self.map.unified = {};
		self.map.unified_vars = {};

		for (var i in self.data){
			for (var j=0; j<self.data[i][0].length; j++){
				a.push(self.data[i][0][j].replace('*', '\\*'));
				self.map.unified[self.data[i][0][j]] = i;
			}
		}
		for (var i in self.variations_data){
			// skip simple append-style skin tones
			if (self.variations_data[i]['1f3fb'][0] == i+'-1f3fb') continue;

			for (var k in self.variations_data[i]){
				for (var j=0; j<self.variations_data[i][k][4].length; j++){
					a.push(self.variations_data[i][k][4][j].replace('*', '\\*'));
					self.map.unified_vars[self.variations_data[i][k][4][j]] = [i, k];
				}
			}
		}

		a = a.sort(function(a,b){
			 return b.length - a.length;
		});

		self.rx_unified = new RegExp('('+a.join('|')+')(\uD83C[\uDFFB-\uDFFF])?', "g");
	};

	// initializes the environment, figuring out what representation
	// of emoticons is best.
	/** @private */
	emoji.prototype.init_env = function(){
		var self = this;
		if (self.inits.env) return;
		self.inits.env = 1;
		self.replace_mode = 'img';
		self.supports_css = false;
		if (typeof(navigator) !== 'undefined') {
			var ua = navigator.userAgent;
			if (window.getComputedStyle){
				try {
					var st = window.getComputedStyle(document.body);
					if (st['background-size'] || st['backgroundSize']){
						self.supports_css = true;
					}
				} catch(e){
					// Swallow an exception caused by hidden iFrames on Firefox
					// https://github.com/iamcal/js-emoji/issues/73
					if (ua.match(/Firefox/i)){
						self.supports_css = true;
					}
				}
			}
			if (ua.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)){
				if (ua.match(/OS\s+[12345]/i)){
					self.replace_mode = 'softbank';
					return;
				}
				if (ua.match(/OS\s+[6789]/i)){
					self.replace_mode = 'unified';
					return;
				}
			}
			if (ua.match(/Mac OS X 10[._ ](?:[789]|1\d)/i)){
				self.replace_mode = 'unified';
				return;
			}
			if (!self.avoid_ms_emoji){
				if (ua.match(/Windows NT 6.[1-9]/i) || ua.match(/Windows NT 10.[0-9]/i)){
					if (!ua.match(/Chrome/i) && !ua.match(/MSIE 8/i)){
						self.replace_mode = 'unified';
						return;
					}
				}
			}
		}

		// Need a better way to detect android devices that actually
		// support emoji.
		if (false){
			self.replace_mode = 'google';
			return;
		}
		if (self.supports_css){
			self.replace_mode = 'css';
		}
		// nothing fancy detected - use images
	};
	/** @private */
	emoji.prototype.escape_rx = function(text){
		return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	};
	emoji.prototype.sheet_size = 49;
	/** @private */
	emoji.prototype.data = {
		"00a9":[["\u00A9\uFE0F","\u00A9"],"\uE24E","\uDBBA\uDF29",["copyright"],0,0,11,0],
		"00ae":[["\u00AE\uFE0F","\u00AE"],"\uE24F","\uDBBA\uDF2D",["registered"],0,1,11,0],
		"203c":[["\u203C\uFE0F","\u203C"],"","\uDBBA\uDF06",["bangbang"],0,2,63,0],
		"2049":[["\u2049\uFE0F","\u2049"],"","\uDBBA\uDF05",["interrobang"],0,3,63,0],
		"2122":[["\u2122\uFE0F","\u2122"],"\uE537","\uDBBA\uDF2A",["tm"],0,4,63,0],
		"2139":[["\u2139\uFE0F","\u2139"],"","\uDBBA\uDF47",["information_source"],0,5,63,0],
		"2194":[["\u2194\uFE0F","\u2194"],"","\uDBBA\uDEF6",["left_right_arrow"],0,6,63,0],
		"2195":[["\u2195\uFE0F","\u2195"],"","\uDBBA\uDEF7",["arrow_up_down"],0,7,63,0],
		"2196":[["\u2196\uFE0F","\u2196"],"\uE237","\uDBBA\uDEF2",["arrow_upper_left"],0,8,63,0],
		"2197":[["\u2197\uFE0F","\u2197"],"\uE236","\uDBBA\uDEF0",["arrow_upper_right"],0,9,63,0],
		"2198":[["\u2198\uFE0F","\u2198"],"\uE238","\uDBBA\uDEF1",["arrow_lower_right"],0,10,63,0],
		"2199":[["\u2199\uFE0F","\u2199"],"\uE239","\uDBBA\uDEF3",["arrow_lower_left"],0,11,63,0],
		"21a9":[["\u21A9\uFE0F","\u21A9"],"","\uDBBA\uDF83",["leftwards_arrow_with_hook"],0,12,63,0],
		"21aa":[["\u21AA\uFE0F","\u21AA"],"","\uDBBA\uDF88",["arrow_right_hook"],0,13,63,0],
		"231a":[["\u231A\uFE0F","\u231A"],"","\uDBB8\uDC1D",["watch"],0,14,63,0],
		"231b":[["\u231B\uFE0F","\u231B"],"","\uDBB8\uDC1C",["hourglass"],0,15,63,0],
		"2328":[["\u2328\uFE0F","\u2328"],"","",["keyboard"],0,16,31,0],
		"23cf":[["\u23CF"],"","",["eject"],0,17,30,0],
		"23e9":[["\u23E9"],"\uE23C","\uDBBA\uDEFE",["fast_forward"],0,18,63,0],
		"23ea":[["\u23EA"],"\uE23D","\uDBBA\uDEFF",["rewind"],0,19,63,0],
		"23eb":[["\u23EB"],"","\uDBBA\uDF03",["arrow_double_up"],0,20,63,0],
		"23ec":[["\u23EC"],"","\uDBBA\uDF02",["arrow_double_down"],0,21,63,0],
		"23ed":[["\u23ED"],"","",["black_right_pointing_double_triangle_with_vertical_bar"],0,22,31,0],
		"23ee":[["\u23EE"],"","",["black_left_pointing_double_triangle_with_vertical_bar"],0,23,31,0],
		"23ef":[["\u23EF"],"","",["black_right_pointing_triangle_with_double_vertical_bar"],0,24,31,0],
		"23f0":[["\u23F0"],"\uE02D","\uDBB8\uDC2A",["alarm_clock"],0,25,63,0],
		"23f1":[["\u23F1"],"","",["stopwatch"],0,26,31,0],
		"23f2":[["\u23F2"],"","",["timer_clock"],0,27,31,0],
		"23f3":[["\u23F3"],"","\uDBB8\uDC1B",["hourglass_flowing_sand"],0,28,63,0],
		"23f8":[["\u23F8"],"","",["double_vertical_bar"],0,29,31,0],
		"23f9":[["\u23F9"],"","",["black_square_for_stop"],0,30,31,0],
		"23fa":[["\u23FA"],"","",["black_circle_for_record"],0,31,31,0],
		"24c2":[["\u24C2\uFE0F","\u24C2"],"\uE434","\uDBB9\uDFE1",["m"],0,32,63,0],
		"25aa":[["\u25AA\uFE0F","\u25AA"],"\uE21A","\uDBBA\uDF6E",["black_small_square"],0,33,63,0],
		"25ab":[["\u25AB\uFE0F","\u25AB"],"\uE21B","\uDBBA\uDF6D",["white_small_square"],0,34,63,0],
		"25b6":[["\u25B6\uFE0F","\u25B6"],"\uE23A","\uDBBA\uDEFC",["arrow_forward"],0,35,63,0],
		"25c0":[["\u25C0\uFE0F","\u25C0"],"\uE23B","\uDBBA\uDEFD",["arrow_backward"],0,36,63,0],
		"25fb":[["\u25FB\uFE0F","\u25FB"],"\uE21B","\uDBBA\uDF71",["white_medium_square"],0,37,63,0],
		"25fc":[["\u25FC\uFE0F","\u25FC"],"\uE21A","\uDBBA\uDF72",["black_medium_square"],0,38,63,0],
		"25fd":[["\u25FD\uFE0F","\u25FD"],"\uE21B","\uDBBA\uDF6F",["white_medium_small_square"],0,39,63,0],
		"25fe":[["\u25FE\uFE0F","\u25FE"],"\uE21A","\uDBBA\uDF70",["black_medium_small_square"],0,40,63,0],
		"2600":[["\u2600\uFE0F","\u2600"],"\uE04A","\uDBB8\uDC00",["sunny"],0,41,63,0],
		"2601":[["\u2601\uFE0F","\u2601"],"\uE049","\uDBB8\uDC01",["cloud"],0,42,63,0],
		"2602":[["\u2602\uFE0F","\u2602"],"","",["umbrella"],0,43,31,0],
		"2603":[["\u2603\uFE0F","\u2603"],"","",["snowman"],0,44,31,0],
		"2604":[["\u2604\uFE0F","\u2604"],"","",["comet"],0,45,31,0],
		"260e":[["\u260E\uFE0F","\u260E"],"\uE009","\uDBB9\uDD23",["phone","telephone"],0,46,63,0],
		"2611":[["\u2611\uFE0F","\u2611"],"","\uDBBA\uDF8B",["ballot_box_with_check"],0,47,63,0],
		"2614":[["\u2614\uFE0F","\u2614"],"\uE04B","\uDBB8\uDC02",["umbrella_with_rain_drops"],0,48,63,0],
		"2615":[["\u2615\uFE0F","\u2615"],"\uE045","\uDBBA\uDD81",["coffee"],1,0,63,0],
		"2618":[["\u2618\uFE0F","\u2618"],"","",["shamrock"],1,1,31,0],
		"261d":[["\u261D\uFE0F","\u261D"],"\uE00F","\uDBBA\uDF98",["point_up"],1,2,63,0],
		"2620":[["\u2620\uFE0F","\u2620"],"","",["skull_and_crossbones"],1,8,31,0],
		"2622":[["\u2622\uFE0F","\u2622"],"","",["radioactive_sign"],1,9,31,0],
		"2623":[["\u2623\uFE0F","\u2623"],"","",["biohazard_sign"],1,10,31,0],
		"2626":[["\u2626\uFE0F","\u2626"],"","",["orthodox_cross"],1,11,31,0],
		"262a":[["\u262A\uFE0F","\u262A"],"","",["star_and_crescent"],1,12,31,0],
		"262e":[["\u262E\uFE0F","\u262E"],"","",["peace_symbol"],1,13,31,0],
		"262f":[["\u262F\uFE0F","\u262F"],"","",["yin_yang"],1,14,31,0],
		"2638":[["\u2638\uFE0F","\u2638"],"","",["wheel_of_dharma"],1,15,31,0],
		"2639":[["\u2639\uFE0F","\u2639"],"","",["white_frowning_face"],1,16,31,0],
		"263a":[["\u263A\uFE0F","\u263A"],"\uE414","\uDBB8\uDF36",["relaxed"],1,17,63,0],
		"2640":[["\u2640"],"","",["female_sign"],1,18,22,0],
		"2642":[["\u2642"],"","",["male_sign"],1,19,22,0],
		"2648":[["\u2648\uFE0F","\u2648"],"\uE23F","\uDBB8\uDC2B",["aries"],1,20,63,0],
		"2649":[["\u2649\uFE0F","\u2649"],"\uE240","\uDBB8\uDC2C",["taurus"],1,21,63,0],
		"264a":[["\u264A\uFE0F","\u264A"],"\uE241","\uDBB8\uDC2D",["gemini"],1,22,63,0],
		"264b":[["\u264B\uFE0F","\u264B"],"\uE242","\uDBB8\uDC2E",["cancer"],1,23,63,0],
		"264c":[["\u264C\uFE0F","\u264C"],"\uE243","\uDBB8\uDC2F",["leo"],1,24,63,0],
		"264d":[["\u264D\uFE0F","\u264D"],"\uE244","\uDBB8\uDC30",["virgo"],1,25,63,0],
		"264e":[["\u264E\uFE0F","\u264E"],"\uE245","\uDBB8\uDC31",["libra"],1,26,63,0],
		"264f":[["\u264F\uFE0F","\u264F"],"\uE246","\uDBB8\uDC32",["scorpius"],1,27,63,0],
		"2650":[["\u2650\uFE0F","\u2650"],"\uE247","\uDBB8\uDC33",["sagittarius"],1,28,63,0],
		"2651":[["\u2651\uFE0F","\u2651"],"\uE248","\uDBB8\uDC34",["capricorn"],1,29,63,0],
		"2652":[["\u2652\uFE0F","\u2652"],"\uE249","\uDBB8\uDC35",["aquarius"],1,30,63,0],
		"2653":[["\u2653\uFE0F","\u2653"],"\uE24A","\uDBB8\uDC36",["pisces"],1,31,63,0],
		"2660":[["\u2660\uFE0F","\u2660"],"\uE20E","\uDBBA\uDF1B",["spades"],1,32,63,0],
		"2663":[["\u2663\uFE0F","\u2663"],"\uE20F","\uDBBA\uDF1D",["clubs"],1,33,63,0],
		"2665":[["\u2665\uFE0F","\u2665"],"\uE20C","\uDBBA\uDF1A",["hearts"],1,34,63,0],
		"2666":[["\u2666\uFE0F","\u2666"],"\uE20D","\uDBBA\uDF1C",["diamonds"],1,35,63,0],
		"2668":[["\u2668\uFE0F","\u2668"],"\uE123","\uDBB9\uDFFA",["hotsprings"],1,36,63,0],
		"267b":[["\u267B\uFE0F","\u267B"],"","\uDBBA\uDF2C",["recycle"],1,37,63,0],
		"267f":[["\u267F\uFE0F","\u267F"],"\uE20A","\uDBBA\uDF20",["wheelchair"],1,38,63,0],
		"2692":[["\u2692"],"","",["hammer_and_pick"],1,39,31,0],
		"2693":[["\u2693\uFE0F","\u2693"],"\uE202","\uDBB9\uDCC1",["anchor"],1,40,63,0],
		"2694":[["\u2694\uFE0F","\u2694"],"","",["crossed_swords"],1,41,31,0],
		"2695":[["\u2695"],"","",["staff_of_aesculapius"],1,42,7,0],
		"2696":[["\u2696\uFE0F","\u2696"],"","",["scales"],1,43,31,0],
		"2697":[["\u2697\uFE0F","\u2697"],"","",["alembic"],1,44,31,0],
		"2699":[["\u2699\uFE0F","\u2699"],"","",["gear"],1,45,31,0],
		"269b":[["\u269B\uFE0F","\u269B"],"","",["atom_symbol"],1,46,31,0],
		"269c":[["\u269C\uFE0F","\u269C"],"","",["fleur_de_lis"],1,47,31,0],
		"26a0":[["\u26A0\uFE0F","\u26A0"],"\uE252","\uDBBA\uDF23",["warning"],1,48,63,0],
		"26a1":[["\u26A1\uFE0F","\u26A1"],"\uE13D","\uDBB8\uDC04",["zap"],2,0,63,0],
		"26aa":[["\u26AA\uFE0F","\u26AA"],"\uE219","\uDBBA\uDF65",["white_circle"],2,1,63,0],
		"26ab":[["\u26AB\uFE0F","\u26AB"],"\uE219","\uDBBA\uDF66",["black_circle"],2,2,63,0],
		"26b0":[["\u26B0\uFE0F","\u26B0"],"","",["coffin"],2,3,31,0],
		"26b1":[["\u26B1\uFE0F","\u26B1"],"","",["funeral_urn"],2,4,31,0],
		"26bd":[["\u26BD\uFE0F","\u26BD"],"\uE018","\uDBB9\uDFD4",["soccer"],2,5,63,0],
		"26be":[["\u26BE\uFE0F","\u26BE"],"\uE016","\uDBB9\uDFD1",["baseball"],2,6,63,0],
		"26c4":[["\u26C4\uFE0F","\u26C4"],"\uE048","\uDBB8\uDC03",["snowman_without_snow"],2,7,63,0],
		"26c5":[["\u26C5\uFE0F","\u26C5"],"\uE04A\uE049","\uDBB8\uDC0F",["partly_sunny"],2,8,63,0],
		"26c8":[["\u26C8"],"","",["thunder_cloud_and_rain"],2,9,31,0],
		"26ce":[["\u26CE"],"\uE24B","\uDBB8\uDC37",["ophiuchus"],2,10,63,0],
		"26cf":[["\u26CF"],"","",["pick"],2,11,31,0],
		"26d1":[["\u26D1"],"","",["helmet_with_white_cross"],2,12,31,0],
		"26d3":[["\u26D3"],"","",["chains"],2,13,31,0],
		"26d4":[["\u26D4\uFE0F","\u26D4"],"\uE137","\uDBBA\uDF26",["no_entry"],2,14,63,0],
		"26e9":[["\u26E9"],"","",["shinto_shrine"],2,15,31,0],
		"26ea":[["\u26EA\uFE0F","\u26EA"],"\uE037","\uDBB9\uDCBB",["church"],2,16,63,0],
		"26f0":[["\u26F0"],"","",["mountain"],2,17,31,0],
		"26f1":[["\u26F1"],"","",["umbrella_on_ground"],2,18,31,0],
		"26f2":[["\u26F2\uFE0F","\u26F2"],"\uE121","\uDBB9\uDCBC",["fountain"],2,19,63,0],
		"26f3":[["\u26F3\uFE0F","\u26F3"],"\uE014","\uDBB9\uDFD2",["golf"],2,20,63,0],
		"26f4":[["\u26F4"],"","",["ferry"],2,21,31,0],
		"26f5":[["\u26F5\uFE0F","\u26F5"],"\uE01C","\uDBB9\uDFEA",["boat","sailboat"],2,22,63,0],
		"26f7":[["\u26F7"],"","",["skier"],2,23,31,0],
		"26f8":[["\u26F8"],"","",["ice_skate"],2,24,31,0],
		"26fa":[["\u26FA\uFE0F","\u26FA"],"\uE122","\uDBB9\uDFFB",["tent"],2,31,63,0],
		"26fd":[["\u26FD\uFE0F","\u26FD"],"\uE03A","\uDBB9\uDFF5",["fuelpump"],2,32,63,0],
		"2702":[["\u2702\uFE0F","\u2702"],"\uE313","\uDBB9\uDD3E",["scissors"],2,33,63,0],
		"2705":[["\u2705"],"","\uDBBA\uDF4A",["white_check_mark"],2,34,63,0],
		"2708":[["\u2708\uFE0F","\u2708"],"\uE01D","\uDBB9\uDFE9",["airplane"],2,35,63,0],
		"2709":[["\u2709\uFE0F","\u2709"],"\uE103","\uDBB9\uDD29",["email","envelope"],2,36,63,0],
		"270a":[["\u270A"],"\uE010","\uDBBA\uDF93",["fist"],2,37,63,0],
		"270b":[["\u270B"],"\uE012","\uDBBA\uDF95",["hand","raised_hand"],2,43,63,0],
		"270c":[["\u270C\uFE0F","\u270C"],"\uE011","\uDBBA\uDF94",["v"],3,0,63,0],
		"270d":[["\u270D\uFE0F","\u270D"],"","",["writing_hand"],3,6,31,0],
		"270f":[["\u270F\uFE0F","\u270F"],"\uE301","\uDBB9\uDD39",["pencil2"],3,12,63,0],
		"2712":[["\u2712\uFE0F","\u2712"],"","\uDBB9\uDD36",["black_nib"],3,13,63,0],
		"2714":[["\u2714\uFE0F","\u2714"],"","\uDBBA\uDF49",["heavy_check_mark"],3,14,63,0],
		"2716":[["\u2716\uFE0F","\u2716"],"\uE333","\uDBBA\uDF53",["heavy_multiplication_x"],3,15,63,0],
		"271d":[["\u271D\uFE0F","\u271D"],"","",["latin_cross"],3,16,31,0],
		"2721":[["\u2721\uFE0F","\u2721"],"","",["star_of_david"],3,17,31,0],
		"2728":[["\u2728"],"\uE32E","\uDBBA\uDF60",["sparkles"],3,18,63,0],
		"2733":[["\u2733\uFE0F","\u2733"],"\uE206","\uDBBA\uDF62",["eight_spoked_asterisk"],3,19,63,0],
		"2734":[["\u2734\uFE0F","\u2734"],"\uE205","\uDBBA\uDF61",["eight_pointed_black_star"],3,20,63,0],
		"2744":[["\u2744\uFE0F","\u2744"],"","\uDBB8\uDC0E",["snowflake"],3,21,63,0],
		"2747":[["\u2747\uFE0F","\u2747"],"\uE32E","\uDBBA\uDF77",["sparkle"],3,22,63,0],
		"274c":[["\u274C"],"\uE333","\uDBBA\uDF45",["x"],3,23,63,0],
		"274e":[["\u274E"],"\uE333","\uDBBA\uDF46",["negative_squared_cross_mark"],3,24,63,0],
		"2753":[["\u2753"],"\uE020","\uDBBA\uDF09",["question"],3,25,63,0],
		"2754":[["\u2754"],"\uE336","\uDBBA\uDF0A",["grey_question"],3,26,63,0],
		"2755":[["\u2755"],"\uE337","\uDBBA\uDF0B",["grey_exclamation"],3,27,63,0],
		"2757":[["\u2757\uFE0F","\u2757"],"\uE021","\uDBBA\uDF04",["exclamation","heavy_exclamation_mark"],3,28,63,0],
		"2763":[["\u2763\uFE0F","\u2763"],"","",["heavy_heart_exclamation_mark_ornament"],3,29,31,0],
		"2764":[["\u2764\uFE0F","\u2764"],"\uE022","\uDBBA\uDF0C",["heart"],3,30,63,0,"<3"],
		"2795":[["\u2795"],"","\uDBBA\uDF51",["heavy_plus_sign"],3,31,63,0],
		"2796":[["\u2796"],"","\uDBBA\uDF52",["heavy_minus_sign"],3,32,63,0],
		"2797":[["\u2797"],"","\uDBBA\uDF54",["heavy_division_sign"],3,33,63,0],
		"27a1":[["\u27A1\uFE0F","\u27A1"],"\uE234","\uDBBA\uDEFA",["arrow_right"],3,34,63,0],
		"27b0":[["\u27B0"],"","\uDBBA\uDF08",["curly_loop"],3,35,63,0],
		"27bf":[["\u27BF"],"\uE211","\uDBBA\uDC2B",["loop"],3,36,63,0],
		"2934":[["\u2934\uFE0F","\u2934"],"\uE236","\uDBBA\uDEF4",["arrow_heading_up"],3,37,63,0],
		"2935":[["\u2935\uFE0F","\u2935"],"\uE238","\uDBBA\uDEF5",["arrow_heading_down"],3,38,63,0],
		"2b05":[["\u2B05\uFE0F","\u2B05"],"\uE235","\uDBBA\uDEFB",["arrow_left"],3,39,63,0],
		"2b06":[["\u2B06\uFE0F","\u2B06"],"\uE232","\uDBBA\uDEF8",["arrow_up"],3,40,63,0],
		"2b07":[["\u2B07\uFE0F","\u2B07"],"\uE233","\uDBBA\uDEF9",["arrow_down"],3,41,63,0],
		"2b1b":[["\u2B1B\uFE0F","\u2B1B"],"\uE21A","\uDBBA\uDF6C",["black_large_square"],3,42,63,0],
		"2b1c":[["\u2B1C\uFE0F","\u2B1C"],"\uE21B","\uDBBA\uDF6B",["white_large_square"],3,43,63,0],
		"2b50":[["\u2B50\uFE0F","\u2B50"],"\uE32F","\uDBBA\uDF68",["star"],3,44,63,0],
		"2b55":[["\u2B55\uFE0F","\u2B55"],"\uE332","\uDBBA\uDF44",["o"],3,45,63,0],
		"3030":[["\u3030\uFE0F","\u3030"],"","\uDBBA\uDF07",["wavy_dash"],3,46,63,0],
		"303d":[["\u303D\uFE0F","\u303D"],"\uE12C","\uDBBA\uDC1B",["part_alternation_mark"],3,47,63,0],
		"3297":[["\u3297\uFE0F","\u3297"],"\uE30D","\uDBBA\uDF43",["congratulations"],3,48,63,0],
		"3299":[["\u3299\uFE0F","\u3299"],"\uE315","\uDBBA\uDF2B",["secret"],4,0,63,0],
		"1f004":[["\uD83C\uDC04\uFE0F","\uD83C\uDC04"],"\uE12D","\uDBBA\uDC0B",["mahjong"],4,1,63,0],
		"1f0cf":[["\uD83C\uDCCF"],"","\uDBBA\uDC12",["black_joker"],4,2,63,0],
		"1f170":[["\uD83C\uDD70\uFE0F","\uD83C\uDD70"],"\uE532","\uDBB9\uDD0B",["a"],4,3,63,0],
		"1f171":[["\uD83C\uDD71\uFE0F","\uD83C\uDD71"],"\uE533","\uDBB9\uDD0C",["b"],4,4,63,0],
		"1f17e":[["\uD83C\uDD7E\uFE0F","\uD83C\uDD7E"],"\uE535","\uDBB9\uDD0E",["o2"],4,5,63,0],
		"1f17f":[["\uD83C\uDD7F\uFE0F","\uD83C\uDD7F"],"\uE14F","\uDBB9\uDFF6",["parking"],4,6,63,0],
		"1f18e":[["\uD83C\uDD8E"],"\uE534","\uDBB9\uDD0D",["ab"],4,7,63,0],
		"1f191":[["\uD83C\uDD91"],"","\uDBBA\uDF84",["cl"],4,8,63,0],
		"1f192":[["\uD83C\uDD92"],"\uE214","\uDBBA\uDF38",["cool"],4,9,63,0],
		"1f193":[["\uD83C\uDD93"],"","\uDBBA\uDF21",["free"],4,10,63,0],
		"1f194":[["\uD83C\uDD94"],"\uE229","\uDBBA\uDF81",["id"],4,11,63,0],
		"1f195":[["\uD83C\uDD95"],"\uE212","\uDBBA\uDF36",["new"],4,12,63,0],
		"1f196":[["\uD83C\uDD96"],"","\uDBBA\uDF28",["ng"],4,13,63,0],
		"1f197":[["\uD83C\uDD97"],"\uE24D","\uDBBA\uDF27",["ok"],4,14,63,0],
		"1f198":[["\uD83C\uDD98"],"","\uDBBA\uDF4F",["sos"],4,15,63,0],
		"1f199":[["\uD83C\uDD99"],"\uE213","\uDBBA\uDF37",["up"],4,16,63,0],
		"1f19a":[["\uD83C\uDD9A"],"\uE12E","\uDBBA\uDF32",["vs"],4,17,63,0],
		"1f201":[["\uD83C\uDE01"],"\uE203","\uDBBA\uDF24",["koko"],4,18,63,0],
		"1f202":[["\uD83C\uDE02\uFE0F","\uD83C\uDE02"],"\uE228","\uDBBA\uDF3F",["sa"],4,19,63,0],
		"1f21a":[["\uD83C\uDE1A\uFE0F","\uD83C\uDE1A"],"\uE216","\uDBBA\uDF3A",["u7121"],4,20,63,0],
		"1f22f":[["\uD83C\uDE2F\uFE0F","\uD83C\uDE2F"],"\uE22C","\uDBBA\uDF40",["u6307"],4,21,63,0],
		"1f232":[["\uD83C\uDE32"],"","\uDBBA\uDF2E",["u7981"],4,22,63,0],
		"1f233":[["\uD83C\uDE33"],"\uE22B","\uDBBA\uDF2F",["u7a7a"],4,23,63,0],
		"1f234":[["\uD83C\uDE34"],"","\uDBBA\uDF30",["u5408"],4,24,63,0],
		"1f235":[["\uD83C\uDE35"],"\uE22A","\uDBBA\uDF31",["u6e80"],4,25,63,0],
		"1f236":[["\uD83C\uDE36"],"\uE215","\uDBBA\uDF39",["u6709"],4,26,63,0],
		"1f237":[["\uD83C\uDE37\uFE0F","\uD83C\uDE37"],"\uE217","\uDBBA\uDF3B",["u6708"],4,27,63,0],
		"1f238":[["\uD83C\uDE38"],"\uE218","\uDBBA\uDF3C",["u7533"],4,28,63,0],
		"1f239":[["\uD83C\uDE39"],"\uE227","\uDBBA\uDF3E",["u5272"],4,29,63,0],
		"1f23a":[["\uD83C\uDE3A"],"\uE22D","\uDBBA\uDF41",["u55b6"],4,30,63,0],
		"1f250":[["\uD83C\uDE50"],"\uE226","\uDBBA\uDF3D",["ideograph_advantage"],4,31,63,0],
		"1f251":[["\uD83C\uDE51"],"","\uDBBA\uDF50",["accept"],4,32,63,0],
		"1f300":[["\uD83C\uDF00"],"\uE443","\uDBB8\uDC05",["cyclone"],4,33,63,0],
		"1f301":[["\uD83C\uDF01"],"","\uDBB8\uDC06",["foggy"],4,34,63,0],
		"1f302":[["\uD83C\uDF02"],"\uE43C","\uDBB8\uDC07",["closed_umbrella"],4,35,63,0],
		"1f303":[["\uD83C\uDF03"],"\uE44B","\uDBB8\uDC08",["night_with_stars"],4,36,63,0],
		"1f304":[["\uD83C\uDF04"],"\uE04D","\uDBB8\uDC09",["sunrise_over_mountains"],4,37,63,0],
		"1f305":[["\uD83C\uDF05"],"\uE449","\uDBB8\uDC0A",["sunrise"],4,38,63,0],
		"1f306":[["\uD83C\uDF06"],"\uE146","\uDBB8\uDC0B",["city_sunset"],4,39,63,0],
		"1f307":[["\uD83C\uDF07"],"\uE44A","\uDBB8\uDC0C",["city_sunrise"],4,40,63,0],
		"1f308":[["\uD83C\uDF08"],"\uE44C","\uDBB8\uDC0D",["rainbow"],4,41,63,0],
		"1f309":[["\uD83C\uDF09"],"\uE44B","\uDBB8\uDC10",["bridge_at_night"],4,42,63,0],
		"1f30a":[["\uD83C\uDF0A"],"\uE43E","\uDBB8\uDC38",["ocean"],4,43,63,0],
		"1f30b":[["\uD83C\uDF0B"],"","\uDBB8\uDC3A",["volcano"],4,44,63,0],
		"1f30c":[["\uD83C\uDF0C"],"\uE44B","\uDBB8\uDC3B",["milky_way"],4,45,63,0],
		"1f30d":[["\uD83C\uDF0D"],"","",["earth_africa"],4,46,63,0],
		"1f30e":[["\uD83C\uDF0E"],"","",["earth_americas"],4,47,63,0],
		"1f30f":[["\uD83C\uDF0F"],"","\uDBB8\uDC39",["earth_asia"],4,48,63,0],
		"1f310":[["\uD83C\uDF10"],"","",["globe_with_meridians"],5,0,63,0],
		"1f311":[["\uD83C\uDF11"],"","\uDBB8\uDC11",["new_moon"],5,1,63,0],
		"1f312":[["\uD83C\uDF12"],"","",["waxing_crescent_moon"],5,2,63,0],
		"1f313":[["\uD83C\uDF13"],"\uE04C","\uDBB8\uDC13",["first_quarter_moon"],5,3,63,0],
		"1f314":[["\uD83C\uDF14"],"\uE04C","\uDBB8\uDC12",["moon","waxing_gibbous_moon"],5,4,63,0],
		"1f315":[["\uD83C\uDF15"],"","\uDBB8\uDC15",["full_moon"],5,5,63,0],
		"1f316":[["\uD83C\uDF16"],"","",["waning_gibbous_moon"],5,6,63,0],
		"1f317":[["\uD83C\uDF17"],"","",["last_quarter_moon"],5,7,63,0],
		"1f318":[["\uD83C\uDF18"],"","",["waning_crescent_moon"],5,8,63,0],
		"1f319":[["\uD83C\uDF19"],"\uE04C","\uDBB8\uDC14",["crescent_moon"],5,9,63,0],
		"1f31a":[["\uD83C\uDF1A"],"","",["new_moon_with_face"],5,10,63,0],
		"1f31b":[["\uD83C\uDF1B"],"\uE04C","\uDBB8\uDC16",["first_quarter_moon_with_face"],5,11,63,0],
		"1f31c":[["\uD83C\uDF1C"],"","",["last_quarter_moon_with_face"],5,12,63,0],
		"1f31d":[["\uD83C\uDF1D"],"","",["full_moon_with_face"],5,13,63,0],
		"1f31e":[["\uD83C\uDF1E"],"","",["sun_with_face"],5,14,63,0],
		"1f31f":[["\uD83C\uDF1F"],"\uE335","\uDBBA\uDF69",["star2"],5,15,63,0],
		"1f320":[["\uD83C\uDF20"],"","\uDBBA\uDF6A",["stars"],5,16,63,0],
		"1f321":[["\uD83C\uDF21"],"","",["thermometer"],5,17,31,0],
		"1f324":[["\uD83C\uDF24"],"","",["mostly_sunny","sun_small_cloud"],5,18,31,0],
		"1f325":[["\uD83C\uDF25"],"","",["barely_sunny","sun_behind_cloud"],5,19,31,0],
		"1f326":[["\uD83C\uDF26"],"","",["partly_sunny_rain","sun_behind_rain_cloud"],5,20,31,0],
		"1f327":[["\uD83C\uDF27"],"","",["rain_cloud"],5,21,31,0],
		"1f328":[["\uD83C\uDF28"],"","",["snow_cloud"],5,22,31,0],
		"1f329":[["\uD83C\uDF29"],"","",["lightning","lightning_cloud"],5,23,31,0],
		"1f32a":[["\uD83C\uDF2A"],"","",["tornado","tornado_cloud"],5,24,31,0],
		"1f32b":[["\uD83C\uDF2B"],"","",["fog"],5,25,31,0],
		"1f32c":[["\uD83C\uDF2C"],"","",["wind_blowing_face"],5,26,31,0],
		"1f32d":[["\uD83C\uDF2D"],"","",["hotdog"],5,27,31,0],
		"1f32e":[["\uD83C\uDF2E"],"","",["taco"],5,28,31,0],
		"1f32f":[["\uD83C\uDF2F"],"","",["burrito"],5,29,31,0],
		"1f330":[["\uD83C\uDF30"],"","\uDBB8\uDC4C",["chestnut"],5,30,63,0],
		"1f331":[["\uD83C\uDF31"],"\uE110","\uDBB8\uDC3E",["seedling"],5,31,63,0],
		"1f332":[["\uD83C\uDF32"],"","",["evergreen_tree"],5,32,63,0],
		"1f333":[["\uD83C\uDF33"],"","",["deciduous_tree"],5,33,63,0],
		"1f334":[["\uD83C\uDF34"],"\uE307","\uDBB8\uDC47",["palm_tree"],5,34,63,0],
		"1f335":[["\uD83C\uDF35"],"\uE308","\uDBB8\uDC48",["cactus"],5,35,63,0],
		"1f336":[["\uD83C\uDF36"],"","",["hot_pepper"],5,36,31,0],
		"1f337":[["\uD83C\uDF37"],"\uE304","\uDBB8\uDC3D",["tulip"],5,37,63,0],
		"1f338":[["\uD83C\uDF38"],"\uE030","\uDBB8\uDC40",["cherry_blossom"],5,38,63,0],
		"1f339":[["\uD83C\uDF39"],"\uE032","\uDBB8\uDC41",["rose"],5,39,63,0],
		"1f33a":[["\uD83C\uDF3A"],"\uE303","\uDBB8\uDC45",["hibiscus"],5,40,63,0],
		"1f33b":[["\uD83C\uDF3B"],"\uE305","\uDBB8\uDC46",["sunflower"],5,41,63,0],
		"1f33c":[["\uD83C\uDF3C"],"\uE305","\uDBB8\uDC4D",["blossom"],5,42,63,0],
		"1f33d":[["\uD83C\uDF3D"],"","\uDBB8\uDC4A",["corn"],5,43,63,0],
		"1f33e":[["\uD83C\uDF3E"],"\uE444","\uDBB8\uDC49",["ear_of_rice"],5,44,63,0],
		"1f33f":[["\uD83C\uDF3F"],"\uE110","\uDBB8\uDC4E",["herb"],5,45,63,0],
		"1f340":[["\uD83C\uDF40"],"\uE110","\uDBB8\uDC3C",["four_leaf_clover"],5,46,63,0],
		"1f341":[["\uD83C\uDF41"],"\uE118","\uDBB8\uDC3F",["maple_leaf"],5,47,63,0],
		"1f342":[["\uD83C\uDF42"],"\uE119","\uDBB8\uDC42",["fallen_leaf"],5,48,63,0],
		"1f343":[["\uD83C\uDF43"],"\uE447","\uDBB8\uDC43",["leaves"],6,0,63,0],
		"1f344":[["\uD83C\uDF44"],"","\uDBB8\uDC4B",["mushroom"],6,1,63,0],
		"1f345":[["\uD83C\uDF45"],"\uE349","\uDBB8\uDC55",["tomato"],6,2,63,0],
		"1f346":[["\uD83C\uDF46"],"\uE34A","\uDBB8\uDC56",["eggplant"],6,3,63,0],
		"1f347":[["\uD83C\uDF47"],"","\uDBB8\uDC59",["grapes"],6,4,63,0],
		"1f348":[["\uD83C\uDF48"],"","\uDBB8\uDC57",["melon"],6,5,63,0],
		"1f349":[["\uD83C\uDF49"],"\uE348","\uDBB8\uDC54",["watermelon"],6,6,63,0],
		"1f34a":[["\uD83C\uDF4A"],"\uE346","\uDBB8\uDC52",["tangerine"],6,7,63,0],
		"1f34b":[["\uD83C\uDF4B"],"","",["lemon"],6,8,63,0],
		"1f34c":[["\uD83C\uDF4C"],"","\uDBB8\uDC50",["banana"],6,9,63,0],
		"1f34d":[["\uD83C\uDF4D"],"","\uDBB8\uDC58",["pineapple"],6,10,63,0],
		"1f34e":[["\uD83C\uDF4E"],"\uE345","\uDBB8\uDC51",["apple"],6,11,63,0],
		"1f34f":[["\uD83C\uDF4F"],"\uE345","\uDBB8\uDC5B",["green_apple"],6,12,63,0],
		"1f350":[["\uD83C\uDF50"],"","",["pear"],6,13,63,0],
		"1f351":[["\uD83C\uDF51"],"","\uDBB8\uDC5A",["peach"],6,14,63,0],
		"1f352":[["\uD83C\uDF52"],"","\uDBB8\uDC4F",["cherries"],6,15,63,0],
		"1f353":[["\uD83C\uDF53"],"\uE347","\uDBB8\uDC53",["strawberry"],6,16,63,0],
		"1f354":[["\uD83C\uDF54"],"\uE120","\uDBBA\uDD60",["hamburger"],6,17,63,0],
		"1f355":[["\uD83C\uDF55"],"","\uDBBA\uDD75",["pizza"],6,18,63,0],
		"1f356":[["\uD83C\uDF56"],"","\uDBBA\uDD72",["meat_on_bone"],6,19,63,0],
		"1f357":[["\uD83C\uDF57"],"","\uDBBA\uDD76",["poultry_leg"],6,20,63,0],
		"1f358":[["\uD83C\uDF58"],"\uE33D","\uDBBA\uDD69",["rice_cracker"],6,21,63,0],
		"1f359":[["\uD83C\uDF59"],"\uE342","\uDBBA\uDD61",["rice_ball"],6,22,63,0],
		"1f35a":[["\uD83C\uDF5A"],"\uE33E","\uDBBA\uDD6A",["rice"],6,23,63,0],
		"1f35b":[["\uD83C\uDF5B"],"\uE341","\uDBBA\uDD6C",["curry"],6,24,63,0],
		"1f35c":[["\uD83C\uDF5C"],"\uE340","\uDBBA\uDD63",["ramen"],6,25,63,0],
		"1f35d":[["\uD83C\uDF5D"],"\uE33F","\uDBBA\uDD6B",["spaghetti"],6,26,63,0],
		"1f35e":[["\uD83C\uDF5E"],"\uE339","\uDBBA\uDD64",["bread"],6,27,63,0],
		"1f35f":[["\uD83C\uDF5F"],"\uE33B","\uDBBA\uDD67",["fries"],6,28,63,0],
		"1f360":[["\uD83C\uDF60"],"","\uDBBA\uDD74",["sweet_potato"],6,29,63,0],
		"1f361":[["\uD83C\uDF61"],"\uE33C","\uDBBA\uDD68",["dango"],6,30,63,0],
		"1f362":[["\uD83C\uDF62"],"\uE343","\uDBBA\uDD6D",["oden"],6,31,63,0],
		"1f363":[["\uD83C\uDF63"],"\uE344","\uDBBA\uDD6E",["sushi"],6,32,63,0],
		"1f364":[["\uD83C\uDF64"],"","\uDBBA\uDD7F",["fried_shrimp"],6,33,63,0],
		"1f365":[["\uD83C\uDF65"],"","\uDBBA\uDD73",["fish_cake"],6,34,63,0],
		"1f366":[["\uD83C\uDF66"],"\uE33A","\uDBBA\uDD66",["icecream"],6,35,63,0],
		"1f367":[["\uD83C\uDF67"],"\uE43F","\uDBBA\uDD71",["shaved_ice"],6,36,63,0],
		"1f368":[["\uD83C\uDF68"],"","\uDBBA\uDD77",["ice_cream"],6,37,63,0],
		"1f369":[["\uD83C\uDF69"],"","\uDBBA\uDD78",["doughnut"],6,38,63,0],
		"1f36a":[["\uD83C\uDF6A"],"","\uDBBA\uDD79",["cookie"],6,39,63,0],
		"1f36b":[["\uD83C\uDF6B"],"","\uDBBA\uDD7A",["chocolate_bar"],6,40,63,0],
		"1f36c":[["\uD83C\uDF6C"],"","\uDBBA\uDD7B",["candy"],6,41,63,0],
		"1f36d":[["\uD83C\uDF6D"],"","\uDBBA\uDD7C",["lollipop"],6,42,63,0],
		"1f36e":[["\uD83C\uDF6E"],"","\uDBBA\uDD7D",["custard"],6,43,63,0],
		"1f36f":[["\uD83C\uDF6F"],"","\uDBBA\uDD7E",["honey_pot"],6,44,63,0],
		"1f370":[["\uD83C\uDF70"],"\uE046","\uDBBA\uDD62",["cake"],6,45,63,0],
		"1f371":[["\uD83C\uDF71"],"\uE34C","\uDBBA\uDD6F",["bento"],6,46,63,0],
		"1f372":[["\uD83C\uDF72"],"\uE34D","\uDBBA\uDD70",["stew"],6,47,63,0],
		"1f373":[["\uD83C\uDF73"],"\uE147","\uDBBA\uDD65",["fried_egg","cooking"],6,48,63,0],
		"1f374":[["\uD83C\uDF74"],"\uE043","\uDBBA\uDD80",["fork_and_knife"],7,0,63,0],
		"1f375":[["\uD83C\uDF75"],"\uE338","\uDBBA\uDD84",["tea"],7,1,63,0],
		"1f376":[["\uD83C\uDF76"],"\uE30B","\uDBBA\uDD85",["sake"],7,2,63,0],
		"1f377":[["\uD83C\uDF77"],"\uE044","\uDBBA\uDD86",["wine_glass"],7,3,63,0],
		"1f378":[["\uD83C\uDF78"],"\uE044","\uDBBA\uDD82",["cocktail"],7,4,63,0],
		"1f379":[["\uD83C\uDF79"],"\uE044","\uDBBA\uDD88",["tropical_drink"],7,5,63,0],
		"1f37a":[["\uD83C\uDF7A"],"\uE047","\uDBBA\uDD83",["beer"],7,6,63,0],
		"1f37b":[["\uD83C\uDF7B"],"\uE30C","\uDBBA\uDD87",["beers"],7,7,63,0],
		"1f37c":[["\uD83C\uDF7C"],"","",["baby_bottle"],7,8,63,0],
		"1f37d":[["\uD83C\uDF7D"],"","",["knife_fork_plate"],7,9,31,0],
		"1f37e":[["\uD83C\uDF7E"],"","",["champagne"],7,10,31,0],
		"1f37f":[["\uD83C\uDF7F"],"","",["popcorn"],7,11,31,0],
		"1f380":[["\uD83C\uDF80"],"\uE314","\uDBB9\uDD0F",["ribbon"],7,12,63,0],
		"1f381":[["\uD83C\uDF81"],"\uE112","\uDBB9\uDD10",["gift"],7,13,63,0],
		"1f382":[["\uD83C\uDF82"],"\uE34B","\uDBB9\uDD11",["birthday"],7,14,63,0],
		"1f383":[["\uD83C\uDF83"],"\uE445","\uDBB9\uDD1F",["jack_o_lantern"],7,15,63,0],
		"1f384":[["\uD83C\uDF84"],"\uE033","\uDBB9\uDD12",["christmas_tree"],7,16,63,0],
		"1f385":[["\uD83C\uDF85"],"\uE448","\uDBB9\uDD13",["santa"],7,17,63,0],
		"1f386":[["\uD83C\uDF86"],"\uE117","\uDBB9\uDD15",["fireworks"],7,23,63,0],
		"1f387":[["\uD83C\uDF87"],"\uE440","\uDBB9\uDD1D",["sparkler"],7,24,63,0],
		"1f388":[["\uD83C\uDF88"],"\uE310","\uDBB9\uDD16",["balloon"],7,25,63,0],
		"1f389":[["\uD83C\uDF89"],"\uE312","\uDBB9\uDD17",["tada"],7,26,63,0],
		"1f38a":[["\uD83C\uDF8A"],"","\uDBB9\uDD20",["confetti_ball"],7,27,63,0],
		"1f38b":[["\uD83C\uDF8B"],"","\uDBB9\uDD21",["tanabata_tree"],7,28,63,0],
		"1f38c":[["\uD83C\uDF8C"],"\uE143","\uDBB9\uDD14",["crossed_flags"],7,29,63,0],
		"1f38d":[["\uD83C\uDF8D"],"\uE436","\uDBB9\uDD18",["bamboo"],7,30,63,0],
		"1f38e":[["\uD83C\uDF8E"],"\uE438","\uDBB9\uDD19",["dolls"],7,31,63,0],
		"1f38f":[["\uD83C\uDF8F"],"\uE43B","\uDBB9\uDD1C",["flags"],7,32,63,0],
		"1f390":[["\uD83C\uDF90"],"\uE442","\uDBB9\uDD1E",["wind_chime"],7,33,63,0],
		"1f391":[["\uD83C\uDF91"],"\uE446","\uDBB8\uDC17",["rice_scene"],7,34,63,0],
		"1f392":[["\uD83C\uDF92"],"\uE43A","\uDBB9\uDD1B",["school_satchel"],7,35,63,0],
		"1f393":[["\uD83C\uDF93"],"\uE439","\uDBB9\uDD1A",["mortar_board"],7,36,63,0],
		"1f396":[["\uD83C\uDF96"],"","",["medal"],7,37,31,0],
		"1f397":[["\uD83C\uDF97"],"","",["reminder_ribbon"],7,38,31,0],
		"1f399":[["\uD83C\uDF99"],"","",["studio_microphone"],7,39,31,0],
		"1f39a":[["\uD83C\uDF9A"],"","",["level_slider"],7,40,31,0],
		"1f39b":[["\uD83C\uDF9B"],"","",["control_knobs"],7,41,31,0],
		"1f39e":[["\uD83C\uDF9E"],"","",["film_frames"],7,42,31,0],
		"1f39f":[["\uD83C\uDF9F"],"","",["admission_tickets"],7,43,31,0],
		"1f3a0":[["\uD83C\uDFA0"],"","\uDBB9\uDFFC",["carousel_horse"],7,44,63,0],
		"1f3a1":[["\uD83C\uDFA1"],"\uE124","\uDBB9\uDFFD",["ferris_wheel"],7,45,63,0],
		"1f3a2":[["\uD83C\uDFA2"],"\uE433","\uDBB9\uDFFE",["roller_coaster"],7,46,63,0],
		"1f3a3":[["\uD83C\uDFA3"],"\uE019","\uDBB9\uDFFF",["fishing_pole_and_fish"],7,47,63,0],
		"1f3a4":[["\uD83C\uDFA4"],"\uE03C","\uDBBA\uDC00",["microphone"],7,48,63,0],
		"1f3a5":[["\uD83C\uDFA5"],"\uE03D","\uDBBA\uDC01",["movie_camera"],8,0,63,0],
		"1f3a6":[["\uD83C\uDFA6"],"\uE507","\uDBBA\uDC02",["cinema"],8,1,63,0],
		"1f3a7":[["\uD83C\uDFA7"],"\uE30A","\uDBBA\uDC03",["headphones"],8,2,63,0],
		"1f3a8":[["\uD83C\uDFA8"],"\uE502","\uDBBA\uDC04",["art"],8,3,63,0],
		"1f3a9":[["\uD83C\uDFA9"],"\uE503","\uDBBA\uDC05",["tophat"],8,4,63,0],
		"1f3aa":[["\uD83C\uDFAA"],"","\uDBBA\uDC06",["circus_tent"],8,5,63,0],
		"1f3ab":[["\uD83C\uDFAB"],"\uE125","\uDBBA\uDC07",["ticket"],8,6,63,0],
		"1f3ac":[["\uD83C\uDFAC"],"\uE324","\uDBBA\uDC08",["clapper"],8,7,63,0],
		"1f3ad":[["\uD83C\uDFAD"],"\uE503","\uDBBA\uDC09",["performing_arts"],8,8,63,0],
		"1f3ae":[["\uD83C\uDFAE"],"","\uDBBA\uDC0A",["video_game"],8,9,63,0],
		"1f3af":[["\uD83C\uDFAF"],"\uE130","\uDBBA\uDC0C",["dart"],8,10,63,0],
		"1f3b0":[["\uD83C\uDFB0"],"\uE133","\uDBBA\uDC0D",["slot_machine"],8,11,63,0],
		"1f3b1":[["\uD83C\uDFB1"],"\uE42C","\uDBBA\uDC0E",["8ball"],8,12,63,0],
		"1f3b2":[["\uD83C\uDFB2"],"","\uDBBA\uDC0F",["game_die"],8,13,63,0],
		"1f3b3":[["\uD83C\uDFB3"],"","\uDBBA\uDC10",["bowling"],8,14,63,0],
		"1f3b4":[["\uD83C\uDFB4"],"","\uDBBA\uDC11",["flower_playing_cards"],8,15,63,0],
		"1f3b5":[["\uD83C\uDFB5"],"\uE03E","\uDBBA\uDC13",["musical_note"],8,16,63,0],
		"1f3b6":[["\uD83C\uDFB6"],"\uE326","\uDBBA\uDC14",["notes"],8,17,63,0],
		"1f3b7":[["\uD83C\uDFB7"],"\uE040","\uDBBA\uDC15",["saxophone"],8,18,63,0],
		"1f3b8":[["\uD83C\uDFB8"],"\uE041","\uDBBA\uDC16",["guitar"],8,19,63,0],
		"1f3b9":[["\uD83C\uDFB9"],"","\uDBBA\uDC17",["musical_keyboard"],8,20,63,0],
		"1f3ba":[["\uD83C\uDFBA"],"\uE042","\uDBBA\uDC18",["trumpet"],8,21,63,0],
		"1f3bb":[["\uD83C\uDFBB"],"","\uDBBA\uDC19",["violin"],8,22,63,0],
		"1f3bc":[["\uD83C\uDFBC"],"\uE326","\uDBBA\uDC1A",["musical_score"],8,23,63,0],
		"1f3bd":[["\uD83C\uDFBD"],"","\uDBB9\uDFD0",["running_shirt_with_sash"],8,24,63,0],
		"1f3be":[["\uD83C\uDFBE"],"\uE015","\uDBB9\uDFD3",["tennis"],8,25,63,0],
		"1f3bf":[["\uD83C\uDFBF"],"\uE013","\uDBB9\uDFD5",["ski"],8,26,63,0],
		"1f3c0":[["\uD83C\uDFC0"],"\uE42A","\uDBB9\uDFD6",["basketball"],8,27,63,0],
		"1f3c1":[["\uD83C\uDFC1"],"\uE132","\uDBB9\uDFD7",["checkered_flag"],8,28,63,0],
		"1f3c2":[["\uD83C\uDFC2"],"","\uDBB9\uDFD8",["snowboarder"],8,29,63,0],
		"1f3c5":[["\uD83C\uDFC5"],"","",["sports_medal"],8,47,31,0],
		"1f3c6":[["\uD83C\uDFC6"],"\uE131","\uDBB9\uDFDB",["trophy"],8,48,63,0],
		"1f3c7":[["\uD83C\uDFC7"],"","",["horse_racing"],9,0,63,0],
		"1f3c8":[["\uD83C\uDFC8"],"\uE42B","\uDBB9\uDFDD",["football"],9,6,63,0],
		"1f3c9":[["\uD83C\uDFC9"],"","",["rugby_football"],9,7,63,0],
		"1f3cd":[["\uD83C\uDFCD"],"","",["racing_motorcycle"],9,26,31,0],
		"1f3ce":[["\uD83C\uDFCE"],"","",["racing_car"],9,27,31,0],
		"1f3cf":[["\uD83C\uDFCF"],"","",["cricket_bat_and_ball"],9,28,31,0],
		"1f3d0":[["\uD83C\uDFD0"],"","",["volleyball"],9,29,31,0],
		"1f3d1":[["\uD83C\uDFD1"],"","",["field_hockey_stick_and_ball"],9,30,31,0],
		"1f3d2":[["\uD83C\uDFD2"],"","",["ice_hockey_stick_and_puck"],9,31,31,0],
		"1f3d3":[["\uD83C\uDFD3"],"","",["table_tennis_paddle_and_ball"],9,32,31,0],
		"1f3d4":[["\uD83C\uDFD4"],"","",["snow_capped_mountain"],9,33,31,0],
		"1f3d5":[["\uD83C\uDFD5"],"","",["camping"],9,34,31,0],
		"1f3d6":[["\uD83C\uDFD6"],"","",["beach_with_umbrella"],9,35,31,0],
		"1f3d7":[["\uD83C\uDFD7"],"","",["building_construction"],9,36,31,0],
		"1f3d8":[["\uD83C\uDFD8"],"","",["house_buildings"],9,37,31,0],
		"1f3d9":[["\uD83C\uDFD9"],"","",["cityscape"],9,38,31,0],
		"1f3da":[["\uD83C\uDFDA"],"","",["derelict_house_building"],9,39,31,0],
		"1f3db":[["\uD83C\uDFDB"],"","",["classical_building"],9,40,31,0],
		"1f3dc":[["\uD83C\uDFDC"],"","",["desert"],9,41,31,0],
		"1f3dd":[["\uD83C\uDFDD"],"","",["desert_island"],9,42,31,0],
		"1f3de":[["\uD83C\uDFDE"],"","",["national_park"],9,43,31,0],
		"1f3df":[["\uD83C\uDFDF"],"","",["stadium"],9,44,31,0],
		"1f3e0":[["\uD83C\uDFE0"],"\uE036","\uDBB9\uDCB0",["house"],9,45,63,0],
		"1f3e1":[["\uD83C\uDFE1"],"\uE036","\uDBB9\uDCB1",["house_with_garden"],9,46,63,0],
		"1f3e2":[["\uD83C\uDFE2"],"\uE038","\uDBB9\uDCB2",["office"],9,47,63,0],
		"1f3e3":[["\uD83C\uDFE3"],"\uE153","\uDBB9\uDCB3",["post_office"],9,48,63,0],
		"1f3e4":[["\uD83C\uDFE4"],"","",["european_post_office"],10,0,63,0],
		"1f3e5":[["\uD83C\uDFE5"],"\uE155","\uDBB9\uDCB4",["hospital"],10,1,63,0],
		"1f3e6":[["\uD83C\uDFE6"],"\uE14D","\uDBB9\uDCB5",["bank"],10,2,63,0],
		"1f3e7":[["\uD83C\uDFE7"],"\uE154","\uDBB9\uDCB6",["atm"],10,3,63,0],
		"1f3e8":[["\uD83C\uDFE8"],"\uE158","\uDBB9\uDCB7",["hotel"],10,4,63,0],
		"1f3e9":[["\uD83C\uDFE9"],"\uE501","\uDBB9\uDCB8",["love_hotel"],10,5,63,0],
		"1f3ea":[["\uD83C\uDFEA"],"\uE156","\uDBB9\uDCB9",["convenience_store"],10,6,63,0],
		"1f3eb":[["\uD83C\uDFEB"],"\uE157","\uDBB9\uDCBA",["school"],10,7,63,0],
		"1f3ec":[["\uD83C\uDFEC"],"\uE504","\uDBB9\uDCBD",["department_store"],10,8,63,0],
		"1f3ed":[["\uD83C\uDFED"],"\uE508","\uDBB9\uDCC0",["factory"],10,9,63,0],
		"1f3ee":[["\uD83C\uDFEE"],"\uE30B","\uDBB9\uDCC2",["izakaya_lantern","lantern"],10,10,63,0],
		"1f3ef":[["\uD83C\uDFEF"],"\uE505","\uDBB9\uDCBE",["japanese_castle"],10,11,63,0],
		"1f3f0":[["\uD83C\uDFF0"],"\uE506","\uDBB9\uDCBF",["european_castle"],10,12,63,0],
		"1f3f3":[["\uD83C\uDFF3\uFE0F","\uD83C\uDFF3"],"","",["waving_white_flag"],10,13,31,0],
		"1f3f4":[["\uD83C\uDFF4"],"","",["waving_black_flag"],10,14,31,0],
		"1f3f5":[["\uD83C\uDFF5"],"","",["rosette"],10,15,31,0],
		"1f3f7":[["\uD83C\uDFF7"],"","",["label"],10,16,31,0],
		"1f3f8":[["\uD83C\uDFF8"],"","",["badminton_racquet_and_shuttlecock"],10,17,31,0],
		"1f3f9":[["\uD83C\uDFF9"],"","",["bow_and_arrow"],10,18,31,0],
		"1f3fa":[["\uD83C\uDFFA"],"","",["amphora"],10,19,31,0],
		"1f3fb":[["\uD83C\uDFFB"],"","",["skin-tone-2"],10,20,31,0],
		"1f3fc":[["\uD83C\uDFFC"],"","",["skin-tone-3"],10,21,31,0],
		"1f3fd":[["\uD83C\uDFFD"],"","",["skin-tone-4"],10,22,31,0],
		"1f3fe":[["\uD83C\uDFFE"],"","",["skin-tone-5"],10,23,31,0],
		"1f3ff":[["\uD83C\uDFFF"],"","",["skin-tone-6"],10,24,31,0],
		"1f400":[["\uD83D\uDC00"],"","",["rat"],10,25,63,0],
		"1f401":[["\uD83D\uDC01"],"","",["mouse2"],10,26,63,0],
		"1f402":[["\uD83D\uDC02"],"","",["ox"],10,27,63,0],
		"1f403":[["\uD83D\uDC03"],"","",["water_buffalo"],10,28,63,0],
		"1f404":[["\uD83D\uDC04"],"","",["cow2"],10,29,63,0],
		"1f405":[["\uD83D\uDC05"],"","",["tiger2"],10,30,63,0],
		"1f406":[["\uD83D\uDC06"],"","",["leopard"],10,31,63,0],
		"1f407":[["\uD83D\uDC07"],"","",["rabbit2"],10,32,63,0],
		"1f408":[["\uD83D\uDC08"],"","",["cat2"],10,33,63,0],
		"1f409":[["\uD83D\uDC09"],"","",["dragon"],10,34,63,0],
		"1f40a":[["\uD83D\uDC0A"],"","",["crocodile"],10,35,63,0],
		"1f40b":[["\uD83D\uDC0B"],"","",["whale2"],10,36,63,0],
		"1f40c":[["\uD83D\uDC0C"],"","\uDBB8\uDDB9",["snail"],10,37,63,0],
		"1f40d":[["\uD83D\uDC0D"],"\uE52D","\uDBB8\uDDD3",["snake"],10,38,63,0],
		"1f40e":[["\uD83D\uDC0E"],"\uE134","\uDBB9\uDFDC",["racehorse"],10,39,63,0],
		"1f40f":[["\uD83D\uDC0F"],"","",["ram"],10,40,63,0],
		"1f410":[["\uD83D\uDC10"],"","",["goat"],10,41,63,0],
		"1f411":[["\uD83D\uDC11"],"\uE529","\uDBB8\uDDCF",["sheep"],10,42,63,0],
		"1f412":[["\uD83D\uDC12"],"\uE528","\uDBB8\uDDCE",["monkey"],10,43,63,0],
		"1f413":[["\uD83D\uDC13"],"","",["rooster"],10,44,63,0],
		"1f414":[["\uD83D\uDC14"],"\uE52E","\uDBB8\uDDD4",["chicken"],10,45,63,0],
		"1f415":[["\uD83D\uDC15"],"","",["dog2"],10,46,63,0],
		"1f416":[["\uD83D\uDC16"],"","",["pig2"],10,47,63,0],
		"1f417":[["\uD83D\uDC17"],"\uE52F","\uDBB8\uDDD5",["boar"],10,48,63,0],
		"1f418":[["\uD83D\uDC18"],"\uE526","\uDBB8\uDDCC",["elephant"],11,0,63,0],
		"1f419":[["\uD83D\uDC19"],"\uE10A","\uDBB8\uDDC5",["octopus"],11,1,63,0],
		"1f41a":[["\uD83D\uDC1A"],"\uE441","\uDBB8\uDDC6",["shell"],11,2,63,0],
		"1f41b":[["\uD83D\uDC1B"],"\uE525","\uDBB8\uDDCB",["bug"],11,3,63,0],
		"1f41c":[["\uD83D\uDC1C"],"","\uDBB8\uDDDA",["ant"],11,4,63,0],
		"1f41d":[["\uD83D\uDC1D"],"","\uDBB8\uDDE1",["bee","honeybee"],11,5,63,0],
		"1f41e":[["\uD83D\uDC1E"],"","\uDBB8\uDDE2",["beetle"],11,6,63,0],
		"1f41f":[["\uD83D\uDC1F"],"\uE019","\uDBB8\uDDBD",["fish"],11,7,63,0],
		"1f420":[["\uD83D\uDC20"],"\uE522","\uDBB8\uDDC9",["tropical_fish"],11,8,63,0],
		"1f421":[["\uD83D\uDC21"],"\uE019","\uDBB8\uDDD9",["blowfish"],11,9,63,0],
		"1f422":[["\uD83D\uDC22"],"","\uDBB8\uDDDC",["turtle"],11,10,63,0],
		"1f423":[["\uD83D\uDC23"],"\uE523","\uDBB8\uDDDD",["hatching_chick"],11,11,63,0],
		"1f424":[["\uD83D\uDC24"],"\uE523","\uDBB8\uDDBA",["baby_chick"],11,12,63,0],
		"1f425":[["\uD83D\uDC25"],"\uE523","\uDBB8\uDDBB",["hatched_chick"],11,13,63,0],
		"1f426":[["\uD83D\uDC26"],"\uE521","\uDBB8\uDDC8",["bird"],11,14,63,0],
		"1f427":[["\uD83D\uDC27"],"\uE055","\uDBB8\uDDBC",["penguin"],11,15,63,0],
		"1f428":[["\uD83D\uDC28"],"\uE527","\uDBB8\uDDCD",["koala"],11,16,63,0],
		"1f429":[["\uD83D\uDC29"],"\uE052","\uDBB8\uDDD8",["poodle"],11,17,63,0],
		"1f42a":[["\uD83D\uDC2A"],"","",["dromedary_camel"],11,18,63,0],
		"1f42b":[["\uD83D\uDC2B"],"\uE530","\uDBB8\uDDD6",["camel"],11,19,63,0],
		"1f42c":[["\uD83D\uDC2C"],"\uE520","\uDBB8\uDDC7",["dolphin","flipper"],11,20,63,0],
		"1f42d":[["\uD83D\uDC2D"],"\uE053","\uDBB8\uDDC2",["mouse"],11,21,63,0],
		"1f42e":[["\uD83D\uDC2E"],"\uE52B","\uDBB8\uDDD1",["cow"],11,22,63,0],
		"1f42f":[["\uD83D\uDC2F"],"\uE050","\uDBB8\uDDC0",["tiger"],11,23,63,0],
		"1f430":[["\uD83D\uDC30"],"\uE52C","\uDBB8\uDDD2",["rabbit"],11,24,63,0],
		"1f431":[["\uD83D\uDC31"],"\uE04F","\uDBB8\uDDB8",["cat"],11,25,63,0],
		"1f432":[["\uD83D\uDC32"],"","\uDBB8\uDDDE",["dragon_face"],11,26,63,0],
		"1f433":[["\uD83D\uDC33"],"\uE054","\uDBB8\uDDC3",["whale"],11,27,63,0],
		"1f434":[["\uD83D\uDC34"],"\uE01A","\uDBB8\uDDBE",["horse"],11,28,63,0],
		"1f435":[["\uD83D\uDC35"],"\uE109","\uDBB8\uDDC4",["monkey_face"],11,29,63,0],
		"1f436":[["\uD83D\uDC36"],"\uE052","\uDBB8\uDDB7",["dog"],11,30,63,0],
		"1f437":[["\uD83D\uDC37"],"\uE10B","\uDBB8\uDDBF",["pig"],11,31,63,0],
		"1f438":[["\uD83D\uDC38"],"\uE531","\uDBB8\uDDD7",["frog"],11,32,63,0],
		"1f439":[["\uD83D\uDC39"],"\uE524","\uDBB8\uDDCA",["hamster"],11,33,63,0],
		"1f43a":[["\uD83D\uDC3A"],"\uE52A","\uDBB8\uDDD0",["wolf"],11,34,63,0],
		"1f43b":[["\uD83D\uDC3B"],"\uE051","\uDBB8\uDDC1",["bear"],11,35,63,0],
		"1f43c":[["\uD83D\uDC3C"],"","\uDBB8\uDDDF",["panda_face"],11,36,63,0],
		"1f43d":[["\uD83D\uDC3D"],"\uE10B","\uDBB8\uDDE0",["pig_nose"],11,37,63,0],
		"1f43e":[["\uD83D\uDC3E"],"\uE536","\uDBB8\uDDDB",["feet","paw_prints"],11,38,63,0],
		"1f43f":[["\uD83D\uDC3F"],"","",["chipmunk"],11,39,31,0],
		"1f440":[["\uD83D\uDC40"],"\uE419","\uDBB8\uDD90",["eyes"],11,40,63,0],
		"1f441":[["\uD83D\uDC41"],"","",["eye"],11,41,31,0],
		"1f442":[["\uD83D\uDC42"],"\uE41B","\uDBB8\uDD91",["ear"],11,42,63,0],
		"1f443":[["\uD83D\uDC43"],"\uE41A","\uDBB8\uDD92",["nose"],11,48,63,0],
		"1f444":[["\uD83D\uDC44"],"\uE41C","\uDBB8\uDD93",["lips"],12,5,63,0],
		"1f445":[["\uD83D\uDC45"],"\uE409","\uDBB8\uDD94",["tongue"],12,6,63,0],
		"1f446":[["\uD83D\uDC46"],"\uE22E","\uDBBA\uDF99",["point_up_2"],12,7,63,0],
		"1f447":[["\uD83D\uDC47"],"\uE22F","\uDBBA\uDF9A",["point_down"],12,13,63,0],
		"1f448":[["\uD83D\uDC48"],"\uE230","\uDBBA\uDF9B",["point_left"],12,19,63,0],
		"1f449":[["\uD83D\uDC49"],"\uE231","\uDBBA\uDF9C",["point_right"],12,25,63,0],
		"1f44a":[["\uD83D\uDC4A"],"\uE00D","\uDBBA\uDF96",["facepunch","punch"],12,31,63,0],
		"1f44b":[["\uD83D\uDC4B"],"\uE41E","\uDBBA\uDF9D",["wave"],12,37,63,0],
		"1f44c":[["\uD83D\uDC4C"],"\uE420","\uDBBA\uDF9F",["ok_hand"],12,43,63,0],
		"1f44d":[["\uD83D\uDC4D"],"\uE00E","\uDBBA\uDF97",["+1","thumbsup"],13,0,63,0],
		"1f44e":[["\uD83D\uDC4E"],"\uE421","\uDBBA\uDFA0",["-1","thumbsdown"],13,6,63,0],
		"1f44f":[["\uD83D\uDC4F"],"\uE41F","\uDBBA\uDF9E",["clap"],13,12,63,0],
		"1f450":[["\uD83D\uDC50"],"\uE422","\uDBBA\uDFA1",["open_hands"],13,18,63,0],
		"1f451":[["\uD83D\uDC51"],"\uE10E","\uDBB9\uDCD1",["crown"],13,24,63,0],
		"1f452":[["\uD83D\uDC52"],"\uE318","\uDBB9\uDCD4",["womans_hat"],13,25,63,0],
		"1f453":[["\uD83D\uDC53"],"","\uDBB9\uDCCE",["eyeglasses"],13,26,63,0],
		"1f454":[["\uD83D\uDC54"],"\uE302","\uDBB9\uDCD3",["necktie"],13,27,63,0],
		"1f455":[["\uD83D\uDC55"],"\uE006","\uDBB9\uDCCF",["shirt","tshirt"],13,28,63,0],
		"1f456":[["\uD83D\uDC56"],"","\uDBB9\uDCD0",["jeans"],13,29,63,0],
		"1f457":[["\uD83D\uDC57"],"\uE319","\uDBB9\uDCD5",["dress"],13,30,63,0],
		"1f458":[["\uD83D\uDC58"],"\uE321","\uDBB9\uDCD9",["kimono"],13,31,63,0],
		"1f459":[["\uD83D\uDC59"],"\uE322","\uDBB9\uDCDA",["bikini"],13,32,63,0],
		"1f45a":[["\uD83D\uDC5A"],"\uE006","\uDBB9\uDCDB",["womans_clothes"],13,33,63,0],
		"1f45b":[["\uD83D\uDC5B"],"","\uDBB9\uDCDC",["purse"],13,34,63,0],
		"1f45c":[["\uD83D\uDC5C"],"\uE323","\uDBB9\uDCF0",["handbag"],13,35,63,0],
		"1f45d":[["\uD83D\uDC5D"],"","\uDBB9\uDCF1",["pouch"],13,36,63,0],
		"1f45e":[["\uD83D\uDC5E"],"\uE007","\uDBB9\uDCCC",["mans_shoe","shoe"],13,37,63,0],
		"1f45f":[["\uD83D\uDC5F"],"\uE007","\uDBB9\uDCCD",["athletic_shoe"],13,38,63,0],
		"1f460":[["\uD83D\uDC60"],"\uE13E","\uDBB9\uDCD6",["high_heel"],13,39,63,0],
		"1f461":[["\uD83D\uDC61"],"\uE31A","\uDBB9\uDCD7",["sandal"],13,40,63,0],
		"1f462":[["\uD83D\uDC62"],"\uE31B","\uDBB9\uDCD8",["boot"],13,41,63,0],
		"1f463":[["\uD83D\uDC63"],"\uE536","\uDBB9\uDD53",["footprints"],13,42,63,0],
		"1f464":[["\uD83D\uDC64"],"","\uDBB8\uDD9A",["bust_in_silhouette"],13,43,63,0],
		"1f465":[["\uD83D\uDC65"],"","",["busts_in_silhouette"],13,44,63,0],
		"1f466":[["\uD83D\uDC66"],"\uE001","\uDBB8\uDD9B",["boy"],13,45,63,0],
		"1f467":[["\uD83D\uDC67"],"\uE002","\uDBB8\uDD9C",["girl"],14,2,63,0],
		"1f468":[["\uD83D\uDC68"],"\uE004","\uDBB8\uDD9D",["man"],14,8,63,0],
		"1f469":[["\uD83D\uDC69"],"\uE005","\uDBB8\uDD9E",["woman"],14,14,63,0],
		"1f46b":[["\uD83D\uDC6B"],"\uE428","\uDBB8\uDDA0",["couple","man_and_woman_holding_hands"],14,21,63,0],
		"1f46c":[["\uD83D\uDC6C"],"","",["two_men_holding_hands"],14,22,63,0],
		"1f46d":[["\uD83D\uDC6D"],"","",["two_women_holding_hands"],14,23,63,0],
		"1f470":[["\uD83D\uDC70"],"","\uDBB8\uDDA3",["bride_with_veil"],14,31,63,0],
		"1f472":[["\uD83D\uDC72"],"\uE516","\uDBB8\uDDA5",["man_with_gua_pi_mao"],14,43,63,0],
		"1f474":[["\uD83D\uDC74"],"\uE518","\uDBB8\uDDA7",["older_man"],15,6,63,0],
		"1f475":[["\uD83D\uDC75"],"\uE519","\uDBB8\uDDA8",["older_woman"],15,12,63,0],
		"1f476":[["\uD83D\uDC76"],"\uE51A","\uDBB8\uDDA9",["baby"],15,18,63,0],
		"1f478":[["\uD83D\uDC78"],"\uE51C","\uDBB8\uDDAB",["princess"],15,30,63,0],
		"1f479":[["\uD83D\uDC79"],"","\uDBB8\uDDAC",["japanese_ogre"],15,36,63,0],
		"1f47a":[["\uD83D\uDC7A"],"","\uDBB8\uDDAD",["japanese_goblin"],15,37,63,0],
		"1f47b":[["\uD83D\uDC7B"],"\uE11B","\uDBB8\uDDAE",["ghost"],15,38,63,0],
		"1f47c":[["\uD83D\uDC7C"],"\uE04E","\uDBB8\uDDAF",["angel"],15,39,63,0],
		"1f47d":[["\uD83D\uDC7D"],"\uE10C","\uDBB8\uDDB0",["alien"],15,45,63,0],
		"1f47e":[["\uD83D\uDC7E"],"\uE12B","\uDBB8\uDDB1",["space_invader"],15,46,63,0],
		"1f47f":[["\uD83D\uDC7F"],"\uE11A","\uDBB8\uDDB2",["imp"],15,47,63,0],
		"1f480":[["\uD83D\uDC80"],"\uE11C","\uDBB8\uDDB3",["skull"],15,48,63,0],
		"1f483":[["\uD83D\uDC83"],"\uE51F","\uDBB8\uDDB6",["dancer"],16,12,63,0],
		"1f484":[["\uD83D\uDC84"],"\uE31C","\uDBB8\uDD95",["lipstick"],16,18,63,0],
		"1f485":[["\uD83D\uDC85"],"\uE31D","\uDBB8\uDD96",["nail_care"],16,19,63,0],
		"1f488":[["\uD83D\uDC88"],"\uE320","\uDBB8\uDD99",["barber"],16,37,63,0],
		"1f489":[["\uD83D\uDC89"],"\uE13B","\uDBB9\uDD09",["syringe"],16,38,63,0],
		"1f48a":[["\uD83D\uDC8A"],"\uE30F","\uDBB9\uDD0A",["pill"],16,39,63,0],
		"1f48b":[["\uD83D\uDC8B"],"\uE003","\uDBBA\uDC23",["kiss"],16,40,63,0],
		"1f48c":[["\uD83D\uDC8C"],"\uE103\uE328","\uDBBA\uDC24",["love_letter"],16,41,63,0],
		"1f48d":[["\uD83D\uDC8D"],"\uE034","\uDBBA\uDC25",["ring"],16,42,63,0],
		"1f48e":[["\uD83D\uDC8E"],"\uE035","\uDBBA\uDC26",["gem"],16,43,63,0],
		"1f490":[["\uD83D\uDC90"],"\uE306","\uDBBA\uDC28",["bouquet"],16,45,63,0],
		"1f492":[["\uD83D\uDC92"],"\uE43D","\uDBBA\uDC2A",["wedding"],16,47,63,0],
		"1f493":[["\uD83D\uDC93"],"\uE327","\uDBBA\uDF0D",["heartbeat"],16,48,63,0],
		"1f494":[["\uD83D\uDC94"],"\uE023","\uDBBA\uDF0E",["broken_heart"],17,0,63,0,"<\/3"],
		"1f495":[["\uD83D\uDC95"],"\uE327","\uDBBA\uDF0F",["two_hearts"],17,1,63,0],
		"1f496":[["\uD83D\uDC96"],"\uE327","\uDBBA\uDF10",["sparkling_heart"],17,2,63,0],
		"1f497":[["\uD83D\uDC97"],"\uE328","\uDBBA\uDF11",["heartpulse"],17,3,63,0],
		"1f498":[["\uD83D\uDC98"],"\uE329","\uDBBA\uDF12",["cupid"],17,4,63,0],
		"1f499":[["\uD83D\uDC99"],"\uE32A","\uDBBA\uDF13",["blue_heart"],17,5,63,0,"<3"],
		"1f49a":[["\uD83D\uDC9A"],"\uE32B","\uDBBA\uDF14",["green_heart"],17,6,63,0,"<3"],
		"1f49b":[["\uD83D\uDC9B"],"\uE32C","\uDBBA\uDF15",["yellow_heart"],17,7,63,0,"<3"],
		"1f49c":[["\uD83D\uDC9C"],"\uE32D","\uDBBA\uDF16",["purple_heart"],17,8,63,0,"<3"],
		"1f49d":[["\uD83D\uDC9D"],"\uE437","\uDBBA\uDF17",["gift_heart"],17,9,63,0],
		"1f49e":[["\uD83D\uDC9E"],"\uE327","\uDBBA\uDF18",["revolving_hearts"],17,10,63,0],
		"1f49f":[["\uD83D\uDC9F"],"\uE204","\uDBBA\uDF19",["heart_decoration"],17,11,63,0],
		"1f4a0":[["\uD83D\uDCA0"],"","\uDBBA\uDF55",["diamond_shape_with_a_dot_inside"],17,12,63,0],
		"1f4a1":[["\uD83D\uDCA1"],"\uE10F","\uDBBA\uDF56",["bulb"],17,13,63,0],
		"1f4a2":[["\uD83D\uDCA2"],"\uE334","\uDBBA\uDF57",["anger"],17,14,63,0],
		"1f4a3":[["\uD83D\uDCA3"],"\uE311","\uDBBA\uDF58",["bomb"],17,15,63,0],
		"1f4a4":[["\uD83D\uDCA4"],"\uE13C","\uDBBA\uDF59",["zzz"],17,16,63,0],
		"1f4a5":[["\uD83D\uDCA5"],"","\uDBBA\uDF5A",["boom","collision"],17,17,63,0],
		"1f4a6":[["\uD83D\uDCA6"],"\uE331","\uDBBA\uDF5B",["sweat_drops"],17,18,63,0],
		"1f4a7":[["\uD83D\uDCA7"],"\uE331","\uDBBA\uDF5C",["droplet"],17,19,63,0],
		"1f4a8":[["\uD83D\uDCA8"],"\uE330","\uDBBA\uDF5D",["dash"],17,20,63,0],
		"1f4a9":[["\uD83D\uDCA9"],"\uE05A","\uDBB9\uDCF4",["hankey","poop","shit"],17,21,63,0],
		"1f4aa":[["\uD83D\uDCAA"],"\uE14C","\uDBBA\uDF5E",["muscle"],17,22,63,0],
		"1f4ab":[["\uD83D\uDCAB"],"\uE407","\uDBBA\uDF5F",["dizzy"],17,28,63,0],
		"1f4ac":[["\uD83D\uDCAC"],"","\uDBB9\uDD32",["speech_balloon"],17,29,63,0],
		"1f4ad":[["\uD83D\uDCAD"],"","",["thought_balloon"],17,30,63,0],
		"1f4ae":[["\uD83D\uDCAE"],"","\uDBBA\uDF7A",["white_flower"],17,31,63,0],
		"1f4af":[["\uD83D\uDCAF"],"","\uDBBA\uDF7B",["100"],17,32,63,0],
		"1f4b0":[["\uD83D\uDCB0"],"\uE12F","\uDBB9\uDCDD",["moneybag"],17,33,63,0],
		"1f4b1":[["\uD83D\uDCB1"],"\uE149","\uDBB9\uDCDE",["currency_exchange"],17,34,63,0],
		"1f4b2":[["\uD83D\uDCB2"],"\uE12F","\uDBB9\uDCE0",["heavy_dollar_sign"],17,35,63,0],
		"1f4b3":[["\uD83D\uDCB3"],"","\uDBB9\uDCE1",["credit_card"],17,36,63,0],
		"1f4b4":[["\uD83D\uDCB4"],"","\uDBB9\uDCE2",["yen"],17,37,63,0],
		"1f4b5":[["\uD83D\uDCB5"],"\uE12F","\uDBB9\uDCE3",["dollar"],17,38,63,0],
		"1f4b6":[["\uD83D\uDCB6"],"","",["euro"],17,39,63,0],
		"1f4b7":[["\uD83D\uDCB7"],"","",["pound"],17,40,63,0],
		"1f4b8":[["\uD83D\uDCB8"],"","\uDBB9\uDCE4",["money_with_wings"],17,41,63,0],
		"1f4b9":[["\uD83D\uDCB9"],"\uE14A","\uDBB9\uDCDF",["chart"],17,42,63,0],
		"1f4ba":[["\uD83D\uDCBA"],"\uE11F","\uDBB9\uDD37",["seat"],17,43,63,0],
		"1f4bb":[["\uD83D\uDCBB"],"\uE00C","\uDBB9\uDD38",["computer"],17,44,63,0],
		"1f4bc":[["\uD83D\uDCBC"],"\uE11E","\uDBB9\uDD3B",["briefcase"],17,45,63,0],
		"1f4bd":[["\uD83D\uDCBD"],"\uE316","\uDBB9\uDD3C",["minidisc"],17,46,63,0],
		"1f4be":[["\uD83D\uDCBE"],"\uE316","\uDBB9\uDD3D",["floppy_disk"],17,47,63,0],
		"1f4bf":[["\uD83D\uDCBF"],"\uE126","\uDBBA\uDC1D",["cd"],17,48,63,0],
		"1f4c0":[["\uD83D\uDCC0"],"\uE127","\uDBBA\uDC1E",["dvd"],18,0,63,0],
		"1f4c1":[["\uD83D\uDCC1"],"","\uDBB9\uDD43",["file_folder"],18,1,63,0],
		"1f4c2":[["\uD83D\uDCC2"],"","\uDBB9\uDD44",["open_file_folder"],18,2,63,0],
		"1f4c3":[["\uD83D\uDCC3"],"\uE301","\uDBB9\uDD40",["page_with_curl"],18,3,63,0],
		"1f4c4":[["\uD83D\uDCC4"],"\uE301","\uDBB9\uDD41",["page_facing_up"],18,4,63,0],
		"1f4c5":[["\uD83D\uDCC5"],"","\uDBB9\uDD42",["date"],18,5,63,0],
		"1f4c6":[["\uD83D\uDCC6"],"","\uDBB9\uDD49",["calendar"],18,6,63,0],
		"1f4c7":[["\uD83D\uDCC7"],"\uE148","\uDBB9\uDD4D",["card_index"],18,7,63,0],
		"1f4c8":[["\uD83D\uDCC8"],"\uE14A","\uDBB9\uDD4B",["chart_with_upwards_trend"],18,8,63,0],
		"1f4c9":[["\uD83D\uDCC9"],"","\uDBB9\uDD4C",["chart_with_downwards_trend"],18,9,63,0],
		"1f4ca":[["\uD83D\uDCCA"],"\uE14A","\uDBB9\uDD4A",["bar_chart"],18,10,63,0],
		"1f4cb":[["\uD83D\uDCCB"],"\uE301","\uDBB9\uDD48",["clipboard"],18,11,63,0],
		"1f4cc":[["\uD83D\uDCCC"],"","\uDBB9\uDD4E",["pushpin"],18,12,63,0],
		"1f4cd":[["\uD83D\uDCCD"],"","\uDBB9\uDD3F",["round_pushpin"],18,13,63,0],
		"1f4ce":[["\uD83D\uDCCE"],"","\uDBB9\uDD3A",["paperclip"],18,14,63,0],
		"1f4cf":[["\uD83D\uDCCF"],"","\uDBB9\uDD50",["straight_ruler"],18,15,63,0],
		"1f4d0":[["\uD83D\uDCD0"],"","\uDBB9\uDD51",["triangular_ruler"],18,16,63,0],
		"1f4d1":[["\uD83D\uDCD1"],"\uE301","\uDBB9\uDD52",["bookmark_tabs"],18,17,63,0],
		"1f4d2":[["\uD83D\uDCD2"],"\uE148","\uDBB9\uDD4F",["ledger"],18,18,63,0],
		"1f4d3":[["\uD83D\uDCD3"],"\uE148","\uDBB9\uDD45",["notebook"],18,19,63,0],
		"1f4d4":[["\uD83D\uDCD4"],"\uE148","\uDBB9\uDD47",["notebook_with_decorative_cover"],18,20,63,0],
		"1f4d5":[["\uD83D\uDCD5"],"\uE148","\uDBB9\uDD02",["closed_book"],18,21,63,0],
		"1f4d6":[["\uD83D\uDCD6"],"\uE148","\uDBB9\uDD46",["book","open_book"],18,22,63,0],
		"1f4d7":[["\uD83D\uDCD7"],"\uE148","\uDBB9\uDCFF",["green_book"],18,23,63,0],
		"1f4d8":[["\uD83D\uDCD8"],"\uE148","\uDBB9\uDD00",["blue_book"],18,24,63,0],
		"1f4d9":[["\uD83D\uDCD9"],"\uE148","\uDBB9\uDD01",["orange_book"],18,25,63,0],
		"1f4da":[["\uD83D\uDCDA"],"\uE148","\uDBB9\uDD03",["books"],18,26,63,0],
		"1f4db":[["\uD83D\uDCDB"],"","\uDBB9\uDD04",["name_badge"],18,27,63,0],
		"1f4dc":[["\uD83D\uDCDC"],"","\uDBB9\uDCFD",["scroll"],18,28,63,0],
		"1f4dd":[["\uD83D\uDCDD"],"\uE301","\uDBB9\uDD27",["memo","pencil"],18,29,63,0],
		"1f4de":[["\uD83D\uDCDE"],"\uE009","\uDBB9\uDD24",["telephone_receiver"],18,30,63,0],
		"1f4df":[["\uD83D\uDCDF"],"","\uDBB9\uDD22",["pager"],18,31,63,0],
		"1f4e0":[["\uD83D\uDCE0"],"\uE00B","\uDBB9\uDD28",["fax"],18,32,63,0],
		"1f4e1":[["\uD83D\uDCE1"],"\uE14B","\uDBB9\uDD31",["satellite_antenna"],18,33,63,0],
		"1f4e2":[["\uD83D\uDCE2"],"\uE142","\uDBB9\uDD2F",["loudspeaker"],18,34,63,0],
		"1f4e3":[["\uD83D\uDCE3"],"\uE317","\uDBB9\uDD30",["mega"],18,35,63,0],
		"1f4e4":[["\uD83D\uDCE4"],"","\uDBB9\uDD33",["outbox_tray"],18,36,63,0],
		"1f4e5":[["\uD83D\uDCE5"],"","\uDBB9\uDD34",["inbox_tray"],18,37,63,0],
		"1f4e6":[["\uD83D\uDCE6"],"\uE112","\uDBB9\uDD35",["package"],18,38,63,0],
		"1f4e7":[["\uD83D\uDCE7"],"\uE103","\uDBBA\uDF92",["e-mail"],18,39,63,0],
		"1f4e8":[["\uD83D\uDCE8"],"\uE103","\uDBB9\uDD2A",["incoming_envelope"],18,40,63,0],
		"1f4e9":[["\uD83D\uDCE9"],"\uE103","\uDBB9\uDD2B",["envelope_with_arrow"],18,41,63,0],
		"1f4ea":[["\uD83D\uDCEA"],"\uE101","\uDBB9\uDD2C",["mailbox_closed"],18,42,63,0],
		"1f4eb":[["\uD83D\uDCEB"],"\uE101","\uDBB9\uDD2D",["mailbox"],18,43,63,0],
		"1f4ec":[["\uD83D\uDCEC"],"","",["mailbox_with_mail"],18,44,63,0],
		"1f4ed":[["\uD83D\uDCED"],"","",["mailbox_with_no_mail"],18,45,63,0],
		"1f4ee":[["\uD83D\uDCEE"],"\uE102","\uDBB9\uDD2E",["postbox"],18,46,63,0],
		"1f4ef":[["\uD83D\uDCEF"],"","",["postal_horn"],18,47,63,0],
		"1f4f0":[["\uD83D\uDCF0"],"","\uDBBA\uDC22",["newspaper"],18,48,63,0],
		"1f4f1":[["\uD83D\uDCF1"],"\uE00A","\uDBB9\uDD25",["iphone"],19,0,63,0],
		"1f4f2":[["\uD83D\uDCF2"],"\uE104","\uDBB9\uDD26",["calling"],19,1,63,0],
		"1f4f3":[["\uD83D\uDCF3"],"\uE250","\uDBBA\uDC39",["vibration_mode"],19,2,63,0],
		"1f4f4":[["\uD83D\uDCF4"],"\uE251","\uDBBA\uDC3A",["mobile_phone_off"],19,3,63,0],
		"1f4f5":[["\uD83D\uDCF5"],"","",["no_mobile_phones"],19,4,63,0],
		"1f4f6":[["\uD83D\uDCF6"],"\uE20B","\uDBBA\uDC38",["signal_strength"],19,5,63,0],
		"1f4f7":[["\uD83D\uDCF7"],"\uE008","\uDBB9\uDCEF",["camera"],19,6,63,0],
		"1f4f8":[["\uD83D\uDCF8"],"","",["camera_with_flash"],19,7,31,0],
		"1f4f9":[["\uD83D\uDCF9"],"\uE03D","\uDBB9\uDCF9",["video_camera"],19,8,63,0],
		"1f4fa":[["\uD83D\uDCFA"],"\uE12A","\uDBBA\uDC1C",["tv"],19,9,63,0],
		"1f4fb":[["\uD83D\uDCFB"],"\uE128","\uDBBA\uDC1F",["radio"],19,10,63,0],
		"1f4fc":[["\uD83D\uDCFC"],"\uE129","\uDBBA\uDC20",["vhs"],19,11,63,0],
		"1f4fd":[["\uD83D\uDCFD"],"","",["film_projector"],19,12,31,0],
		"1f4ff":[["\uD83D\uDCFF"],"","",["prayer_beads"],19,13,31,0],
		"1f500":[["\uD83D\uDD00"],"","",["twisted_rightwards_arrows"],19,14,63,0],
		"1f501":[["\uD83D\uDD01"],"","",["repeat"],19,15,63,0],
		"1f502":[["\uD83D\uDD02"],"","",["repeat_one"],19,16,63,0],
		"1f503":[["\uD83D\uDD03"],"","\uDBBA\uDF91",["arrows_clockwise"],19,17,63,0],
		"1f504":[["\uD83D\uDD04"],"","",["arrows_counterclockwise"],19,18,63,0],
		"1f505":[["\uD83D\uDD05"],"","",["low_brightness"],19,19,63,0],
		"1f506":[["\uD83D\uDD06"],"","",["high_brightness"],19,20,63,0],
		"1f507":[["\uD83D\uDD07"],"","",["mute"],19,21,63,0],
		"1f508":[["\uD83D\uDD08"],"","",["speaker"],19,22,63,0],
		"1f509":[["\uD83D\uDD09"],"","",["sound"],19,23,63,0],
		"1f50a":[["\uD83D\uDD0A"],"\uE141","\uDBBA\uDC21",["loud_sound"],19,24,63,0],
		"1f50b":[["\uD83D\uDD0B"],"","\uDBB9\uDCFC",["battery"],19,25,63,0],
		"1f50c":[["\uD83D\uDD0C"],"","\uDBB9\uDCFE",["electric_plug"],19,26,63,0],
		"1f50d":[["\uD83D\uDD0D"],"\uE114","\uDBBA\uDF85",["mag"],19,27,63,0],
		"1f50e":[["\uD83D\uDD0E"],"\uE114","\uDBBA\uDF8D",["mag_right"],19,28,63,0],
		"1f50f":[["\uD83D\uDD0F"],"\uE144","\uDBBA\uDF90",["lock_with_ink_pen"],19,29,63,0],
		"1f510":[["\uD83D\uDD10"],"\uE144","\uDBBA\uDF8A",["closed_lock_with_key"],19,30,63,0],
		"1f511":[["\uD83D\uDD11"],"\uE03F","\uDBBA\uDF82",["key"],19,31,63,0],
		"1f512":[["\uD83D\uDD12"],"\uE144","\uDBBA\uDF86",["lock"],19,32,63,0],
		"1f513":[["\uD83D\uDD13"],"\uE145","\uDBBA\uDF87",["unlock"],19,33,63,0],
		"1f514":[["\uD83D\uDD14"],"\uE325","\uDBB9\uDCF2",["bell"],19,34,63,0],
		"1f515":[["\uD83D\uDD15"],"","",["no_bell"],19,35,63,0],
		"1f516":[["\uD83D\uDD16"],"","\uDBBA\uDF8F",["bookmark"],19,36,63,0],
		"1f517":[["\uD83D\uDD17"],"","\uDBBA\uDF4B",["link"],19,37,63,0],
		"1f518":[["\uD83D\uDD18"],"","\uDBBA\uDF8C",["radio_button"],19,38,63,0],
		"1f519":[["\uD83D\uDD19"],"\uE235","\uDBBA\uDF8E",["back"],19,39,63,0],
		"1f51a":[["\uD83D\uDD1A"],"","\uDBB8\uDC1A",["end"],19,40,63,0],
		"1f51b":[["\uD83D\uDD1B"],"","\uDBB8\uDC19",["on"],19,41,63,0],
		"1f51c":[["\uD83D\uDD1C"],"","\uDBB8\uDC18",["soon"],19,42,63,0],
		"1f51d":[["\uD83D\uDD1D"],"\uE24C","\uDBBA\uDF42",["top"],19,43,63,0],
		"1f51e":[["\uD83D\uDD1E"],"\uE207","\uDBBA\uDF25",["underage"],19,44,63,0],
		"1f51f":[["\uD83D\uDD1F"],"","\uDBBA\uDC3B",["keycap_ten"],19,45,63,0],
		"1f520":[["\uD83D\uDD20"],"","\uDBBA\uDF7C",["capital_abcd"],19,46,63,0],
		"1f521":[["\uD83D\uDD21"],"","\uDBBA\uDF7D",["abcd"],19,47,63,0],
		"1f522":[["\uD83D\uDD22"],"","\uDBBA\uDF7E",["1234"],19,48,63,0],
		"1f523":[["\uD83D\uDD23"],"","\uDBBA\uDF7F",["symbols"],20,0,63,0],
		"1f524":[["\uD83D\uDD24"],"","\uDBBA\uDF80",["abc"],20,1,63,0],
		"1f525":[["\uD83D\uDD25"],"\uE11D","\uDBB9\uDCF6",["fire"],20,2,63,0],
		"1f526":[["\uD83D\uDD26"],"","\uDBB9\uDCFB",["flashlight"],20,3,63,0],
		"1f527":[["\uD83D\uDD27"],"","\uDBB9\uDCC9",["wrench"],20,4,63,0],
		"1f528":[["\uD83D\uDD28"],"\uE116","\uDBB9\uDCCA",["hammer"],20,5,63,0],
		"1f529":[["\uD83D\uDD29"],"","\uDBB9\uDCCB",["nut_and_bolt"],20,6,63,0],
		"1f52a":[["\uD83D\uDD2A"],"","\uDBB9\uDCFA",["hocho","knife"],20,7,63,0],
		"1f52b":[["\uD83D\uDD2B"],"\uE113","\uDBB9\uDCF5",["gun"],20,8,63,0],
		"1f52c":[["\uD83D\uDD2C"],"","",["microscope"],20,9,63,0],
		"1f52d":[["\uD83D\uDD2D"],"","",["telescope"],20,10,63,0],
		"1f52e":[["\uD83D\uDD2E"],"\uE23E","\uDBB9\uDCF7",["crystal_ball"],20,11,63,0],
		"1f52f":[["\uD83D\uDD2F"],"\uE23E","\uDBB9\uDCF8",["six_pointed_star"],20,12,63,0],
		"1f530":[["\uD83D\uDD30"],"\uE209","\uDBB8\uDC44",["beginner"],20,13,63,0],
		"1f531":[["\uD83D\uDD31"],"\uE031","\uDBB9\uDCD2",["trident"],20,14,63,0],
		"1f532":[["\uD83D\uDD32"],"\uE21A","\uDBBA\uDF64",["black_square_button"],20,15,63,0],
		"1f533":[["\uD83D\uDD33"],"\uE21B","\uDBBA\uDF67",["white_square_button"],20,16,63,0],
		"1f534":[["\uD83D\uDD34"],"\uE219","\uDBBA\uDF63",["red_circle"],20,17,63,0],
		"1f535":[["\uD83D\uDD35"],"\uE21A","\uDBBA\uDF64",["large_blue_circle"],20,18,63,0],
		"1f536":[["\uD83D\uDD36"],"\uE21B","\uDBBA\uDF73",["large_orange_diamond"],20,19,63,0],
		"1f537":[["\uD83D\uDD37"],"\uE21B","\uDBBA\uDF74",["large_blue_diamond"],20,20,63,0],
		"1f538":[["\uD83D\uDD38"],"\uE21B","\uDBBA\uDF75",["small_orange_diamond"],20,21,63,0],
		"1f539":[["\uD83D\uDD39"],"\uE21B","\uDBBA\uDF76",["small_blue_diamond"],20,22,63,0],
		"1f53a":[["\uD83D\uDD3A"],"","\uDBBA\uDF78",["small_red_triangle"],20,23,63,0],
		"1f53b":[["\uD83D\uDD3B"],"","\uDBBA\uDF79",["small_red_triangle_down"],20,24,63,0],
		"1f53c":[["\uD83D\uDD3C"],"","\uDBBA\uDF01",["arrow_up_small"],20,25,63,0],
		"1f53d":[["\uD83D\uDD3D"],"","\uDBBA\uDF00",["arrow_down_small"],20,26,63,0],
		"1f549":[["\uD83D\uDD49"],"","",["om_symbol"],20,27,31,0],
		"1f54a":[["\uD83D\uDD4A"],"","",["dove_of_peace"],20,28,31,0],
		"1f54b":[["\uD83D\uDD4B"],"","",["kaaba"],20,29,31,0],
		"1f54c":[["\uD83D\uDD4C"],"","",["mosque"],20,30,31,0],
		"1f54d":[["\uD83D\uDD4D"],"","",["synagogue"],20,31,31,0],
		"1f54e":[["\uD83D\uDD4E"],"","",["menorah_with_nine_branches"],20,32,31,0],
		"1f550":[["\uD83D\uDD50"],"\uE024","\uDBB8\uDC1E",["clock1"],20,33,63,0],
		"1f551":[["\uD83D\uDD51"],"\uE025","\uDBB8\uDC1F",["clock2"],20,34,63,0],
		"1f552":[["\uD83D\uDD52"],"\uE026","\uDBB8\uDC20",["clock3"],20,35,63,0],
		"1f553":[["\uD83D\uDD53"],"\uE027","\uDBB8\uDC21",["clock4"],20,36,63,0],
		"1f554":[["\uD83D\uDD54"],"\uE028","\uDBB8\uDC22",["clock5"],20,37,63,0],
		"1f555":[["\uD83D\uDD55"],"\uE029","\uDBB8\uDC23",["clock6"],20,38,63,0],
		"1f556":[["\uD83D\uDD56"],"\uE02A","\uDBB8\uDC24",["clock7"],20,39,63,0],
		"1f557":[["\uD83D\uDD57"],"\uE02B","\uDBB8\uDC25",["clock8"],20,40,63,0],
		"1f558":[["\uD83D\uDD58"],"\uE02C","\uDBB8\uDC26",["clock9"],20,41,63,0],
		"1f559":[["\uD83D\uDD59"],"\uE02D","\uDBB8\uDC27",["clock10"],20,42,63,0],
		"1f55a":[["\uD83D\uDD5A"],"\uE02E","\uDBB8\uDC28",["clock11"],20,43,63,0],
		"1f55b":[["\uD83D\uDD5B"],"\uE02F","\uDBB8\uDC29",["clock12"],20,44,63,0],
		"1f55c":[["\uD83D\uDD5C"],"","",["clock130"],20,45,63,0],
		"1f55d":[["\uD83D\uDD5D"],"","",["clock230"],20,46,63,0],
		"1f55e":[["\uD83D\uDD5E"],"","",["clock330"],20,47,63,0],
		"1f55f":[["\uD83D\uDD5F"],"","",["clock430"],20,48,63,0],
		"1f560":[["\uD83D\uDD60"],"","",["clock530"],21,0,63,0],
		"1f561":[["\uD83D\uDD61"],"","",["clock630"],21,1,63,0],
		"1f562":[["\uD83D\uDD62"],"","",["clock730"],21,2,63,0],
		"1f563":[["\uD83D\uDD63"],"","",["clock830"],21,3,63,0],
		"1f564":[["\uD83D\uDD64"],"","",["clock930"],21,4,63,0],
		"1f565":[["\uD83D\uDD65"],"","",["clock1030"],21,5,63,0],
		"1f566":[["\uD83D\uDD66"],"","",["clock1130"],21,6,63,0],
		"1f567":[["\uD83D\uDD67"],"","",["clock1230"],21,7,63,0],
		"1f56f":[["\uD83D\uDD6F"],"","",["candle"],21,8,31,0],
		"1f570":[["\uD83D\uDD70"],"","",["mantelpiece_clock"],21,9,31,0],
		"1f573":[["\uD83D\uDD73"],"","",["hole"],21,10,31,0],
		"1f574":[["\uD83D\uDD74"],"","",["man_in_business_suit_levitating"],21,11,31,0],
		"1f576":[["\uD83D\uDD76"],"","",["dark_sunglasses"],21,23,31,0],
		"1f577":[["\uD83D\uDD77"],"","",["spider"],21,24,31,0],
		"1f578":[["\uD83D\uDD78"],"","",["spider_web"],21,25,31,0],
		"1f579":[["\uD83D\uDD79"],"","",["joystick"],21,26,31,0],
		"1f57a":[["\uD83D\uDD7A"],"","",["man_dancing"],21,27,31,0],
		"1f587":[["\uD83D\uDD87"],"","",["linked_paperclips"],21,33,31,0],
		"1f58a":[["\uD83D\uDD8A"],"","",["lower_left_ballpoint_pen"],21,34,31,0],
		"1f58b":[["\uD83D\uDD8B"],"","",["lower_left_fountain_pen"],21,35,31,0],
		"1f58c":[["\uD83D\uDD8C"],"","",["lower_left_paintbrush"],21,36,31,0],
		"1f58d":[["\uD83D\uDD8D"],"","",["lower_left_crayon"],21,37,31,0],
		"1f590":[["\uD83D\uDD90"],"","",["raised_hand_with_fingers_splayed"],21,38,31,0],
		"1f595":[["\uD83D\uDD95"],"","",["middle_finger","reversed_hand_with_middle_finger_extended"],21,44,31,0],
		"1f596":[["\uD83D\uDD96"],"","",["spock-hand"],22,1,31,0],
		"1f5a4":[["\uD83D\uDDA4"],"","",["black_heart"],22,7,31,0],
		"1f5a5":[["\uD83D\uDDA5"],"","",["desktop_computer"],22,8,31,0],
		"1f5a8":[["\uD83D\uDDA8"],"","",["printer"],22,9,31,0],
		"1f5b1":[["\uD83D\uDDB1"],"","",["three_button_mouse"],22,10,31,0],
		"1f5b2":[["\uD83D\uDDB2"],"","",["trackball"],22,11,31,0],
		"1f5bc":[["\uD83D\uDDBC"],"","",["frame_with_picture"],22,12,31,0],
		"1f5c2":[["\uD83D\uDDC2"],"","",["card_index_dividers"],22,13,31,0],
		"1f5c3":[["\uD83D\uDDC3"],"","",["card_file_box"],22,14,31,0],
		"1f5c4":[["\uD83D\uDDC4"],"","",["file_cabinet"],22,15,31,0],
		"1f5d1":[["\uD83D\uDDD1"],"","",["wastebasket"],22,16,31,0],
		"1f5d2":[["\uD83D\uDDD2"],"","",["spiral_note_pad"],22,17,31,0],
		"1f5d3":[["\uD83D\uDDD3"],"","",["spiral_calendar_pad"],22,18,31,0],
		"1f5dc":[["\uD83D\uDDDC"],"","",["compression"],22,19,31,0],
		"1f5dd":[["\uD83D\uDDDD"],"","",["old_key"],22,20,31,0],
		"1f5de":[["\uD83D\uDDDE"],"","",["rolled_up_newspaper"],22,21,31,0],
		"1f5e1":[["\uD83D\uDDE1"],"","",["dagger_knife"],22,22,31,0],
		"1f5e3":[["\uD83D\uDDE3"],"","",["speaking_head_in_silhouette"],22,23,31,0],
		"1f5e8":[["\uD83D\uDDE8"],"","",["left_speech_bubble"],22,24,31,0],
		"1f5ef":[["\uD83D\uDDEF"],"","",["right_anger_bubble"],22,25,31,0],
		"1f5f3":[["\uD83D\uDDF3"],"","",["ballot_box_with_ballot"],22,26,31,0],
		"1f5fa":[["\uD83D\uDDFA"],"","",["world_map"],22,27,31,0],
		"1f5fb":[["\uD83D\uDDFB"],"\uE03B","\uDBB9\uDCC3",["mount_fuji"],22,28,63,0],
		"1f5fc":[["\uD83D\uDDFC"],"\uE509","\uDBB9\uDCC4",["tokyo_tower"],22,29,63,0],
		"1f5fd":[["\uD83D\uDDFD"],"\uE51D","\uDBB9\uDCC6",["statue_of_liberty"],22,30,63,0],
		"1f5fe":[["\uD83D\uDDFE"],"","\uDBB9\uDCC7",["japan"],22,31,63,0],
		"1f5ff":[["\uD83D\uDDFF"],"","\uDBB9\uDCC8",["moyai"],22,32,63,0],
		"1f600":[["\uD83D\uDE00"],"","",["grinning"],22,33,63,0,":D"],
		"1f601":[["\uD83D\uDE01"],"\uE404","\uDBB8\uDF33",["grin"],22,34,63,0],
		"1f602":[["\uD83D\uDE02"],"\uE412","\uDBB8\uDF34",["joy"],22,35,63,0],
		"1f603":[["\uD83D\uDE03"],"\uE057","\uDBB8\uDF30",["smiley"],22,36,63,0,":)"],
		"1f604":[["\uD83D\uDE04"],"\uE415","\uDBB8\uDF38",["smile"],22,37,63,0,":)"],
		"1f605":[["\uD83D\uDE05"],"\uE415\uE331","\uDBB8\uDF31",["sweat_smile"],22,38,63,0],
		"1f606":[["\uD83D\uDE06"],"\uE40A","\uDBB8\uDF32",["laughing","satisfied"],22,39,63,0],
		"1f607":[["\uD83D\uDE07"],"","",["innocent"],22,40,63,0],
		"1f608":[["\uD83D\uDE08"],"","",["smiling_imp"],22,41,63,0],
		"1f609":[["\uD83D\uDE09"],"\uE405","\uDBB8\uDF47",["wink"],22,42,63,0,";)"],
		"1f60a":[["\uD83D\uDE0A"],"\uE056","\uDBB8\uDF35",["blush"],22,43,63,0,":)"],
		"1f60b":[["\uD83D\uDE0B"],"\uE056","\uDBB8\uDF2B",["yum"],22,44,63,0],
		"1f60c":[["\uD83D\uDE0C"],"\uE40A","\uDBB8\uDF3E",["relieved"],22,45,63,0],
		"1f60d":[["\uD83D\uDE0D"],"\uE106","\uDBB8\uDF27",["heart_eyes"],22,46,63,0],
		"1f60e":[["\uD83D\uDE0E"],"","",["sunglasses"],22,47,63,0],
		"1f60f":[["\uD83D\uDE0F"],"\uE402","\uDBB8\uDF43",["smirk"],22,48,63,0],
		"1f610":[["\uD83D\uDE10"],"","",["neutral_face"],23,0,63,0],
		"1f611":[["\uD83D\uDE11"],"","",["expressionless"],23,1,63,0],
		"1f612":[["\uD83D\uDE12"],"\uE40E","\uDBB8\uDF26",["unamused"],23,2,63,0,":("],
		"1f613":[["\uD83D\uDE13"],"\uE108","\uDBB8\uDF44",["sweat"],23,3,63,0],
		"1f614":[["\uD83D\uDE14"],"\uE403","\uDBB8\uDF40",["pensive"],23,4,63,0],
		"1f615":[["\uD83D\uDE15"],"","",["confused"],23,5,63,0],
		"1f616":[["\uD83D\uDE16"],"\uE407","\uDBB8\uDF3F",["confounded"],23,6,63,0],
		"1f617":[["\uD83D\uDE17"],"","",["kissing"],23,7,63,0],
		"1f618":[["\uD83D\uDE18"],"\uE418","\uDBB8\uDF2C",["kissing_heart"],23,8,63,0],
		"1f619":[["\uD83D\uDE19"],"","",["kissing_smiling_eyes"],23,9,63,0],
		"1f61a":[["\uD83D\uDE1A"],"\uE417","\uDBB8\uDF2D",["kissing_closed_eyes"],23,10,63,0],
		"1f61b":[["\uD83D\uDE1B"],"","",["stuck_out_tongue"],23,11,63,0,":p"],
		"1f61c":[["\uD83D\uDE1C"],"\uE105","\uDBB8\uDF29",["stuck_out_tongue_winking_eye"],23,12,63,0,";p"],
		"1f61d":[["\uD83D\uDE1D"],"\uE409","\uDBB8\uDF2A",["stuck_out_tongue_closed_eyes"],23,13,63,0],
		"1f61e":[["\uD83D\uDE1E"],"\uE058","\uDBB8\uDF23",["disappointed"],23,14,63,0,":("],
		"1f61f":[["\uD83D\uDE1F"],"","",["worried"],23,15,63,0],
		"1f620":[["\uD83D\uDE20"],"\uE059","\uDBB8\uDF20",["angry"],23,16,63,0],
		"1f621":[["\uD83D\uDE21"],"\uE416","\uDBB8\uDF3D",["rage"],23,17,63,0],
		"1f622":[["\uD83D\uDE22"],"\uE413","\uDBB8\uDF39",["cry"],23,18,63,0,":'("],
		"1f623":[["\uD83D\uDE23"],"\uE406","\uDBB8\uDF3C",["persevere"],23,19,63,0],
		"1f624":[["\uD83D\uDE24"],"\uE404","\uDBB8\uDF28",["triumph"],23,20,63,0],
		"1f625":[["\uD83D\uDE25"],"\uE401","\uDBB8\uDF45",["disappointed_relieved"],23,21,63,0],
		"1f626":[["\uD83D\uDE26"],"","",["frowning"],23,22,63,0],
		"1f627":[["\uD83D\uDE27"],"","",["anguished"],23,23,63,0],
		"1f628":[["\uD83D\uDE28"],"\uE40B","\uDBB8\uDF3B",["fearful"],23,24,63,0],
		"1f629":[["\uD83D\uDE29"],"\uE403","\uDBB8\uDF21",["weary"],23,25,63,0],
		"1f62a":[["\uD83D\uDE2A"],"\uE408","\uDBB8\uDF42",["sleepy"],23,26,63,0],
		"1f62b":[["\uD83D\uDE2B"],"\uE406","\uDBB8\uDF46",["tired_face"],23,27,63,0],
		"1f62c":[["\uD83D\uDE2C"],"","",["grimacing"],23,28,63,0],
		"1f62d":[["\uD83D\uDE2D"],"\uE411","\uDBB8\uDF3A",["sob"],23,29,63,0,":'("],
		"1f62e":[["\uD83D\uDE2E"],"","",["open_mouth"],23,30,63,0],
		"1f62f":[["\uD83D\uDE2F"],"","",["hushed"],23,31,63,0],
		"1f630":[["\uD83D\uDE30"],"\uE40F","\uDBB8\uDF25",["cold_sweat"],23,32,63,0],
		"1f631":[["\uD83D\uDE31"],"\uE107","\uDBB8\uDF41",["scream"],23,33,63,0],
		"1f632":[["\uD83D\uDE32"],"\uE410","\uDBB8\uDF22",["astonished"],23,34,63,0],
		"1f633":[["\uD83D\uDE33"],"\uE40D","\uDBB8\uDF2F",["flushed"],23,35,63,0],
		"1f634":[["\uD83D\uDE34"],"","",["sleeping"],23,36,63,0],
		"1f635":[["\uD83D\uDE35"],"\uE406","\uDBB8\uDF24",["dizzy_face"],23,37,63,0],
		"1f636":[["\uD83D\uDE36"],"","",["no_mouth"],23,38,63,0],
		"1f637":[["\uD83D\uDE37"],"\uE40C","\uDBB8\uDF2E",["mask"],23,39,63,0],
		"1f638":[["\uD83D\uDE38"],"\uE404","\uDBB8\uDF49",["smile_cat"],23,40,63,0],
		"1f639":[["\uD83D\uDE39"],"\uE412","\uDBB8\uDF4A",["joy_cat"],23,41,63,0],
		"1f63a":[["\uD83D\uDE3A"],"\uE057","\uDBB8\uDF48",["smiley_cat"],23,42,63,0],
		"1f63b":[["\uD83D\uDE3B"],"\uE106","\uDBB8\uDF4C",["heart_eyes_cat"],23,43,63,0],
		"1f63c":[["\uD83D\uDE3C"],"\uE404","\uDBB8\uDF4F",["smirk_cat"],23,44,63,0],
		"1f63d":[["\uD83D\uDE3D"],"\uE418","\uDBB8\uDF4B",["kissing_cat"],23,45,63,0],
		"1f63e":[["\uD83D\uDE3E"],"\uE416","\uDBB8\uDF4E",["pouting_cat"],23,46,63,0],
		"1f63f":[["\uD83D\uDE3F"],"\uE413","\uDBB8\uDF4D",["crying_cat_face"],23,47,63,0],
		"1f640":[["\uD83D\uDE40"],"\uE403","\uDBB8\uDF50",["scream_cat"],23,48,63,0],
		"1f641":[["\uD83D\uDE41"],"","",["slightly_frowning_face"],24,0,31,0],
		"1f642":[["\uD83D\uDE42"],"","",["slightly_smiling_face"],24,1,63,0],
		"1f643":[["\uD83D\uDE43"],"","",["upside_down_face"],24,2,31,0],
		"1f644":[["\uD83D\uDE44"],"","",["face_with_rolling_eyes"],24,3,31,0],
		"1f648":[["\uD83D\uDE48"],"","\uDBB8\uDF54",["see_no_evil"],24,22,63,0],
		"1f649":[["\uD83D\uDE49"],"","\uDBB8\uDF56",["hear_no_evil"],24,23,63,0],
		"1f64a":[["\uD83D\uDE4A"],"","\uDBB8\uDF55",["speak_no_evil"],24,24,63,0],
		"1f64c":[["\uD83D\uDE4C"],"\uE427","\uDBB8\uDF58",["raised_hands"],24,31,63,0],
		"1f64f":[["\uD83D\uDE4F"],"\uE41D","\uDBB8\uDF5B",["pray"],25,0,63,0],
		"1f680":[["\uD83D\uDE80"],"\uE10D","\uDBB9\uDFED",["rocket"],25,6,63,0],
		"1f681":[["\uD83D\uDE81"],"","",["helicopter"],25,7,63,0],
		"1f682":[["\uD83D\uDE82"],"","",["steam_locomotive"],25,8,63,0],
		"1f683":[["\uD83D\uDE83"],"\uE01E","\uDBB9\uDFDF",["railway_car"],25,9,63,0],
		"1f684":[["\uD83D\uDE84"],"\uE435","\uDBB9\uDFE2",["bullettrain_side"],25,10,63,0],
		"1f685":[["\uD83D\uDE85"],"\uE01F","\uDBB9\uDFE3",["bullettrain_front"],25,11,63,0],
		"1f686":[["\uD83D\uDE86"],"","",["train2"],25,12,63,0],
		"1f687":[["\uD83D\uDE87"],"\uE434","\uDBB9\uDFE0",["metro"],25,13,63,0],
		"1f688":[["\uD83D\uDE88"],"","",["light_rail"],25,14,63,0],
		"1f689":[["\uD83D\uDE89"],"\uE039","\uDBB9\uDFEC",["station"],25,15,63,0],
		"1f68a":[["\uD83D\uDE8A"],"","",["tram"],25,16,63,0],
		"1f68b":[["\uD83D\uDE8B"],"","",["train"],25,17,63,0],
		"1f68c":[["\uD83D\uDE8C"],"\uE159","\uDBB9\uDFE6",["bus"],25,18,63,0],
		"1f68d":[["\uD83D\uDE8D"],"","",["oncoming_bus"],25,19,63,0],
		"1f68e":[["\uD83D\uDE8E"],"","",["trolleybus"],25,20,63,0],
		"1f68f":[["\uD83D\uDE8F"],"\uE150","\uDBB9\uDFE7",["busstop"],25,21,63,0],
		"1f690":[["\uD83D\uDE90"],"","",["minibus"],25,22,63,0],
		"1f691":[["\uD83D\uDE91"],"\uE431","\uDBB9\uDFF3",["ambulance"],25,23,63,0],
		"1f692":[["\uD83D\uDE92"],"\uE430","\uDBB9\uDFF2",["fire_engine"],25,24,63,0],
		"1f693":[["\uD83D\uDE93"],"\uE432","\uDBB9\uDFF4",["police_car"],25,25,63,0],
		"1f694":[["\uD83D\uDE94"],"","",["oncoming_police_car"],25,26,63,0],
		"1f695":[["\uD83D\uDE95"],"\uE15A","\uDBB9\uDFEF",["taxi"],25,27,63,0],
		"1f696":[["\uD83D\uDE96"],"","",["oncoming_taxi"],25,28,63,0],
		"1f697":[["\uD83D\uDE97"],"\uE01B","\uDBB9\uDFE4",["car","red_car"],25,29,63,0],
		"1f698":[["\uD83D\uDE98"],"","",["oncoming_automobile"],25,30,63,0],
		"1f699":[["\uD83D\uDE99"],"\uE42E","\uDBB9\uDFE5",["blue_car"],25,31,63,0],
		"1f69a":[["\uD83D\uDE9A"],"\uE42F","\uDBB9\uDFF1",["truck"],25,32,63,0],
		"1f69b":[["\uD83D\uDE9B"],"","",["articulated_lorry"],25,33,63,0],
		"1f69c":[["\uD83D\uDE9C"],"","",["tractor"],25,34,63,0],
		"1f69d":[["\uD83D\uDE9D"],"","",["monorail"],25,35,63,0],
		"1f69e":[["\uD83D\uDE9E"],"","",["mountain_railway"],25,36,63,0],
		"1f69f":[["\uD83D\uDE9F"],"","",["suspension_railway"],25,37,63,0],
		"1f6a0":[["\uD83D\uDEA0"],"","",["mountain_cableway"],25,38,63,0],
		"1f6a1":[["\uD83D\uDEA1"],"","",["aerial_tramway"],25,39,63,0],
		"1f6a2":[["\uD83D\uDEA2"],"\uE202","\uDBB9\uDFE8",["ship"],25,40,63,0],
		"1f6a4":[["\uD83D\uDEA4"],"\uE135","\uDBB9\uDFEE",["speedboat"],25,47,63,0],
		"1f6a5":[["\uD83D\uDEA5"],"\uE14E","\uDBB9\uDFF7",["traffic_light"],25,48,63,0],
		"1f6a6":[["\uD83D\uDEA6"],"","",["vertical_traffic_light"],26,0,63,0],
		"1f6a7":[["\uD83D\uDEA7"],"\uE137","\uDBB9\uDFF8",["construction"],26,1,63,0],
		"1f6a8":[["\uD83D\uDEA8"],"\uE432","\uDBB9\uDFF9",["rotating_light"],26,2,63,0],
		"1f6a9":[["\uD83D\uDEA9"],"","\uDBBA\uDF22",["triangular_flag_on_post"],26,3,63,0],
		"1f6aa":[["\uD83D\uDEAA"],"","\uDBB9\uDCF3",["door"],26,4,63,0],
		"1f6ab":[["\uD83D\uDEAB"],"","\uDBBA\uDF48",["no_entry_sign"],26,5,63,0],
		"1f6ac":[["\uD83D\uDEAC"],"\uE30E","\uDBBA\uDF1E",["smoking"],26,6,63,0],
		"1f6ad":[["\uD83D\uDEAD"],"\uE208","\uDBBA\uDF1F",["no_smoking"],26,7,63,0],
		"1f6ae":[["\uD83D\uDEAE"],"","",["put_litter_in_its_place"],26,8,63,0],
		"1f6af":[["\uD83D\uDEAF"],"","",["do_not_litter"],26,9,63,0],
		"1f6b0":[["\uD83D\uDEB0"],"","",["potable_water"],26,10,63,0],
		"1f6b1":[["\uD83D\uDEB1"],"","",["non-potable_water"],26,11,63,0],
		"1f6b2":[["\uD83D\uDEB2"],"\uE136","\uDBB9\uDFEB",["bike"],26,12,63,0],
		"1f6b3":[["\uD83D\uDEB3"],"","",["no_bicycles"],26,13,63,0],
		"1f6b7":[["\uD83D\uDEB7"],"","",["no_pedestrians"],26,32,63,0],
		"1f6b8":[["\uD83D\uDEB8"],"","",["children_crossing"],26,33,63,0],
		"1f6b9":[["\uD83D\uDEB9"],"\uE138","\uDBBA\uDF33",["mens"],26,34,63,0],
		"1f6ba":[["\uD83D\uDEBA"],"\uE139","\uDBBA\uDF34",["womens"],26,35,63,0],
		"1f6bb":[["\uD83D\uDEBB"],"\uE151","\uDBB9\uDD06",["restroom"],26,36,63,0],
		"1f6bc":[["\uD83D\uDEBC"],"\uE13A","\uDBBA\uDF35",["baby_symbol"],26,37,63,0],
		"1f6bd":[["\uD83D\uDEBD"],"\uE140","\uDBB9\uDD07",["toilet"],26,38,63,0],
		"1f6be":[["\uD83D\uDEBE"],"\uE309","\uDBB9\uDD08",["wc"],26,39,63,0],
		"1f6bf":[["\uD83D\uDEBF"],"","",["shower"],26,40,63,0],
		"1f6c0":[["\uD83D\uDEC0"],"\uE13F","\uDBB9\uDD05",["bath"],26,41,63,0],
		"1f6c1":[["\uD83D\uDEC1"],"","",["bathtub"],26,47,63,0],
		"1f6c2":[["\uD83D\uDEC2"],"","",["passport_control"],26,48,63,0],
		"1f6c3":[["\uD83D\uDEC3"],"","",["customs"],27,0,63,0],
		"1f6c4":[["\uD83D\uDEC4"],"","",["baggage_claim"],27,1,63,0],
		"1f6c5":[["\uD83D\uDEC5"],"","",["left_luggage"],27,2,63,0],
		"1f6cb":[["\uD83D\uDECB"],"","",["couch_and_lamp"],27,3,31,0],
		"1f6cc":[["\uD83D\uDECC"],"","",["sleeping_accommodation"],27,4,31,0],
		"1f6cd":[["\uD83D\uDECD"],"","",["shopping_bags"],27,10,31,0],
		"1f6ce":[["\uD83D\uDECE"],"","",["bellhop_bell"],27,11,31,0],
		"1f6cf":[["\uD83D\uDECF"],"","",["bed"],27,12,31,0],
		"1f6d0":[["\uD83D\uDED0"],"","",["place_of_worship"],27,13,31,0],
		"1f6d1":[["\uD83D\uDED1"],"","",["octagonal_sign"],27,14,31,0],
		"1f6d2":[["\uD83D\uDED2"],"","",["shopping_trolley"],27,15,31,0],
		"1f6e0":[["\uD83D\uDEE0"],"","",["hammer_and_wrench"],27,16,31,0],
		"1f6e1":[["\uD83D\uDEE1"],"","",["shield"],27,17,31,0],
		"1f6e2":[["\uD83D\uDEE2"],"","",["oil_drum"],27,18,31,0],
		"1f6e3":[["\uD83D\uDEE3"],"","",["motorway"],27,19,31,0],
		"1f6e4":[["\uD83D\uDEE4"],"","",["railway_track"],27,20,31,0],
		"1f6e5":[["\uD83D\uDEE5"],"","",["motor_boat"],27,21,31,0],
		"1f6e9":[["\uD83D\uDEE9"],"","",["small_airplane"],27,22,31,0],
		"1f6eb":[["\uD83D\uDEEB"],"","",["airplane_departure"],27,23,31,0],
		"1f6ec":[["\uD83D\uDEEC"],"","",["airplane_arriving"],27,24,31,0],
		"1f6f0":[["\uD83D\uDEF0"],"","",["satellite"],27,25,31,0],
		"1f6f3":[["\uD83D\uDEF3"],"","",["passenger_ship"],27,26,31,0],
		"1f6f4":[["\uD83D\uDEF4"],"","",["scooter"],27,27,31,0],
		"1f6f5":[["\uD83D\uDEF5"],"","",["motor_scooter"],27,28,31,0],
		"1f6f6":[["\uD83D\uDEF6"],"","",["canoe"],27,29,31,0],
		"1f910":[["\uD83E\uDD10"],"","",["zipper_mouth_face"],27,30,31,0],
		"1f911":[["\uD83E\uDD11"],"","",["money_mouth_face"],27,31,31,0],
		"1f912":[["\uD83E\uDD12"],"","",["face_with_thermometer"],27,32,31,0],
		"1f913":[["\uD83E\uDD13"],"","",["nerd_face"],27,33,31,0],
		"1f914":[["\uD83E\uDD14"],"","",["thinking_face"],27,34,31,0],
		"1f915":[["\uD83E\uDD15"],"","",["face_with_head_bandage"],27,35,31,0],
		"1f916":[["\uD83E\uDD16"],"","",["robot_face"],27,36,31,0],
		"1f917":[["\uD83E\uDD17"],"","",["hugging_face"],27,37,31,0],
		"1f918":[["\uD83E\uDD18"],"","",["the_horns","sign_of_the_horns"],27,38,31,0],
		"1f919":[["\uD83E\uDD19"],"","",["call_me_hand"],27,44,31,0],
		"1f91a":[["\uD83E\uDD1A"],"","",["raised_back_of_hand"],28,1,31,0],
		"1f91b":[["\uD83E\uDD1B"],"","",["left-facing_fist"],28,7,31,0],
		"1f91c":[["\uD83E\uDD1C"],"","",["right-facing_fist"],28,13,31,0],
		"1f91d":[["\uD83E\uDD1D"],"","",["handshake"],28,19,31,0],
		"1f91e":[["\uD83E\uDD1E"],"","",["hand_with_index_and_middle_fingers_crossed"],28,20,31,0],
		"1f920":[["\uD83E\uDD20"],"","",["face_with_cowboy_hat"],28,26,31,0],
		"1f921":[["\uD83E\uDD21"],"","",["clown_face"],28,27,31,0],
		"1f922":[["\uD83E\uDD22"],"","",["nauseated_face"],28,28,31,0],
		"1f923":[["\uD83E\uDD23"],"","",["rolling_on_the_floor_laughing"],28,29,31,0],
		"1f924":[["\uD83E\uDD24"],"","",["drooling_face"],28,30,31,0],
		"1f925":[["\uD83E\uDD25"],"","",["lying_face"],28,31,31,0],
		"1f926":[["\uD83E\uDD26"],"","",["face_palm"],28,32,31,0],
		"1f927":[["\uD83E\uDD27"],"","",["sneezing_face"],28,38,31,0],
		"1f930":[["\uD83E\uDD30"],"","",["pregnant_woman"],28,39,31,0],
		"1f933":[["\uD83E\uDD33"],"","",["selfie"],28,45,31,0],
		"1f934":[["\uD83E\uDD34"],"","",["prince"],29,2,31,0],
		"1f935":[["\uD83E\uDD35"],"","",["man_in_tuxedo"],29,8,31,0],
		"1f936":[["\uD83E\uDD36"],"","",["mother_christmas"],29,14,31,0],
		"1f937":[["\uD83E\uDD37"],"","",["shrug"],29,20,31,0],
		"1f938":[["\uD83E\uDD38"],"","",["person_doing_cartwheel"],29,26,31,0],
		"1f939":[["\uD83E\uDD39"],"","",["juggling"],29,32,31,0],
		"1f93a":[["\uD83E\uDD3A"],"","",["fencer"],29,38,31,0],
		"1f93c":[["\uD83E\uDD3C"],"","",["wrestlers"],29,39,31,0],
		"1f93d":[["\uD83E\uDD3D"],"","",["water_polo"],29,40,31,0],
		"1f93e":[["\uD83E\uDD3E"],"","",["handball"],29,46,31,0],
		"1f940":[["\uD83E\uDD40"],"","",["wilted_flower"],30,3,31,0],
		"1f941":[["\uD83E\uDD41"],"","",["drum_with_drumsticks"],30,4,31,0],
		"1f942":[["\uD83E\uDD42"],"","",["clinking_glasses"],30,5,31,0],
		"1f943":[["\uD83E\uDD43"],"","",["tumbler_glass"],30,6,31,0],
		"1f944":[["\uD83E\uDD44"],"","",["spoon"],30,7,31,0],
		"1f945":[["\uD83E\uDD45"],"","",["goal_net"],30,8,31,0],
		"1f947":[["\uD83E\uDD47"],"","",["first_place_medal"],30,9,31,0],
		"1f948":[["\uD83E\uDD48"],"","",["second_place_medal"],30,10,31,0],
		"1f949":[["\uD83E\uDD49"],"","",["third_place_medal"],30,11,31,0],
		"1f94a":[["\uD83E\uDD4A"],"","",["boxing_glove"],30,12,31,0],
		"1f94b":[["\uD83E\uDD4B"],"","",["martial_arts_uniform"],30,13,31,0],
		"1f950":[["\uD83E\uDD50"],"","",["croissant"],30,14,31,0],
		"1f951":[["\uD83E\uDD51"],"","",["avocado"],30,15,31,0],
		"1f952":[["\uD83E\uDD52"],"","",["cucumber"],30,16,31,0],
		"1f953":[["\uD83E\uDD53"],"","",["bacon"],30,17,31,0],
		"1f954":[["\uD83E\uDD54"],"","",["potato"],30,18,31,0],
		"1f955":[["\uD83E\uDD55"],"","",["carrot"],30,19,31,0],
		"1f956":[["\uD83E\uDD56"],"","",["baguette_bread"],30,20,31,0],
		"1f957":[["\uD83E\uDD57"],"","",["green_salad"],30,21,31,0],
		"1f958":[["\uD83E\uDD58"],"","",["shallow_pan_of_food"],30,22,31,0],
		"1f959":[["\uD83E\uDD59"],"","",["stuffed_flatbread"],30,23,31,0],
		"1f95a":[["\uD83E\uDD5A"],"","",["egg"],30,24,31,0],
		"1f95b":[["\uD83E\uDD5B"],"","",["glass_of_milk"],30,25,31,0],
		"1f95c":[["\uD83E\uDD5C"],"","",["peanuts"],30,26,31,0],
		"1f95d":[["\uD83E\uDD5D"],"","",["kiwifruit"],30,27,31,0],
		"1f95e":[["\uD83E\uDD5E"],"","",["pancakes"],30,28,31,0],
		"1f980":[["\uD83E\uDD80"],"","",["crab"],30,29,31,0],
		"1f981":[["\uD83E\uDD81"],"","",["lion_face"],30,30,31,0],
		"1f982":[["\uD83E\uDD82"],"","",["scorpion"],30,31,31,0],
		"1f983":[["\uD83E\uDD83"],"","",["turkey"],30,32,31,0],
		"1f984":[["\uD83E\uDD84"],"","",["unicorn_face"],30,33,31,0],
		"1f985":[["\uD83E\uDD85"],"","",["eagle"],30,34,31,0],
		"1f986":[["\uD83E\uDD86"],"","",["duck"],30,35,31,0],
		"1f987":[["\uD83E\uDD87"],"","",["bat"],30,36,31,0],
		"1f988":[["\uD83E\uDD88"],"","",["shark"],30,37,31,0],
		"1f989":[["\uD83E\uDD89"],"","",["owl"],30,38,31,0],
		"1f98a":[["\uD83E\uDD8A"],"","",["fox_face"],30,39,31,0],
		"1f98b":[["\uD83E\uDD8B"],"","",["butterfly"],30,40,31,0],
		"1f98c":[["\uD83E\uDD8C"],"","",["deer"],30,41,31,0],
		"1f98d":[["\uD83E\uDD8D"],"","",["gorilla"],30,42,31,0],
		"1f98e":[["\uD83E\uDD8E"],"","",["lizard"],30,43,31,0],
		"1f98f":[["\uD83E\uDD8F"],"","",["rhinoceros"],30,44,31,0],
		"1f990":[["\uD83E\uDD90"],"","",["shrimp"],30,45,31,0],
		"1f991":[["\uD83E\uDD91"],"","",["squid"],30,46,31,0],
		"1f9c0":[["\uD83E\uDDC0"],"","",["cheese_wedge"],30,47,31,0],
		"0023-20e3":[["\u0023\uFE0F\u20E3","\u0023\u20E3"],"\uE210","\uDBBA\uDC2C",["hash"],30,48,15,0],
		"002a-20e3":[["\u002A\uFE0F\u20E3","\u002A\u20E3"],"","",["keycap_star"],31,0,15,0],
		"0030-20e3":[["\u0030\uFE0F\u20E3","\u0030\u20E3"],"\uE225","\uDBBA\uDC37",["zero"],31,1,15,0],
		"0031-20e3":[["\u0031\uFE0F\u20E3","\u0031\u20E3"],"\uE21C","\uDBBA\uDC2E",["one"],31,2,15,0],
		"0032-20e3":[["\u0032\uFE0F\u20E3","\u0032\u20E3"],"\uE21D","\uDBBA\uDC2F",["two"],31,3,15,0],
		"0033-20e3":[["\u0033\uFE0F\u20E3","\u0033\u20E3"],"\uE21E","\uDBBA\uDC30",["three"],31,4,15,0],
		"0034-20e3":[["\u0034\uFE0F\u20E3","\u0034\u20E3"],"\uE21F","\uDBBA\uDC31",["four"],31,5,15,0],
		"0035-20e3":[["\u0035\uFE0F\u20E3","\u0035\u20E3"],"\uE220","\uDBBA\uDC32",["five"],31,6,15,0],
		"0036-20e3":[["\u0036\uFE0F\u20E3","\u0036\u20E3"],"\uE221","\uDBBA\uDC33",["six"],31,7,15,0],
		"0037-20e3":[["\u0037\uFE0F\u20E3","\u0037\u20E3"],"\uE222","\uDBBA\uDC34",["seven"],31,8,15,0],
		"0038-20e3":[["\u0038\uFE0F\u20E3","\u0038\u20E3"],"\uE223","\uDBBA\uDC35",["eight"],31,9,15,0],
		"0039-20e3":[["\u0039\uFE0F\u20E3","\u0039\u20E3"],"\uE224","\uDBBA\uDC36",["nine"],31,10,15,0],
		"1f1e6-1f1e8":[["\uD83C\uDDE6\uD83C\uDDE8"],"","",["flag-ac"],31,11,63,0],
		"1f1e6-1f1e9":[["\uD83C\uDDE6\uD83C\uDDE9"],"","",["flag-ad"],31,12,63,0],
		"1f1e6-1f1ea":[["\uD83C\uDDE6\uD83C\uDDEA"],"","",["flag-ae"],31,13,63,0],
		"1f1e6-1f1eb":[["\uD83C\uDDE6\uD83C\uDDEB"],"","",["flag-af"],31,14,63,0],
		"1f1e6-1f1ec":[["\uD83C\uDDE6\uD83C\uDDEC"],"","",["flag-ag"],31,15,63,0],
		"1f1e6-1f1ee":[["\uD83C\uDDE6\uD83C\uDDEE"],"","",["flag-ai"],31,16,63,0],
		"1f1e6-1f1f1":[["\uD83C\uDDE6\uD83C\uDDF1"],"","",["flag-al"],31,17,63,0],
		"1f1e6-1f1f2":[["\uD83C\uDDE6\uD83C\uDDF2"],"","",["flag-am"],31,18,63,0],
		"1f1e6-1f1f4":[["\uD83C\uDDE6\uD83C\uDDF4"],"","",["flag-ao"],31,19,63,0],
		"1f1e6-1f1f6":[["\uD83C\uDDE6\uD83C\uDDF6"],"","",["flag-aq"],31,20,63,0],
		"1f1e6-1f1f7":[["\uD83C\uDDE6\uD83C\uDDF7"],"","",["flag-ar"],31,21,63,0],
		"1f1e6-1f1f8":[["\uD83C\uDDE6\uD83C\uDDF8"],"","",["flag-as"],31,22,63,0],
		"1f1e6-1f1f9":[["\uD83C\uDDE6\uD83C\uDDF9"],"","",["flag-at"],31,23,63,0],
		"1f1e6-1f1fa":[["\uD83C\uDDE6\uD83C\uDDFA"],"","",["flag-au"],31,24,63,0],
		"1f1e6-1f1fc":[["\uD83C\uDDE6\uD83C\uDDFC"],"","",["flag-aw"],31,25,63,0],
		"1f1e6-1f1fd":[["\uD83C\uDDE6\uD83C\uDDFD"],"","",["flag-ax"],31,26,63,0],
		"1f1e6-1f1ff":[["\uD83C\uDDE6\uD83C\uDDFF"],"","",["flag-az"],31,27,63,0],
		"1f1e7-1f1e6":[["\uD83C\uDDE7\uD83C\uDDE6"],"","",["flag-ba"],31,28,31,0],
		"1f1e7-1f1e7":[["\uD83C\uDDE7\uD83C\uDDE7"],"","",["flag-bb"],31,29,63,0],
		"1f1e7-1f1e9":[["\uD83C\uDDE7\uD83C\uDDE9"],"","",["flag-bd"],31,30,63,0],
		"1f1e7-1f1ea":[["\uD83C\uDDE7\uD83C\uDDEA"],"","",["flag-be"],31,31,63,0],
		"1f1e7-1f1eb":[["\uD83C\uDDE7\uD83C\uDDEB"],"","",["flag-bf"],31,32,63,0],
		"1f1e7-1f1ec":[["\uD83C\uDDE7\uD83C\uDDEC"],"","",["flag-bg"],31,33,63,0],
		"1f1e7-1f1ed":[["\uD83C\uDDE7\uD83C\uDDED"],"","",["flag-bh"],31,34,63,0],
		"1f1e7-1f1ee":[["\uD83C\uDDE7\uD83C\uDDEE"],"","",["flag-bi"],31,35,63,0],
		"1f1e7-1f1ef":[["\uD83C\uDDE7\uD83C\uDDEF"],"","",["flag-bj"],31,36,63,0],
		"1f1e7-1f1f1":[["\uD83C\uDDE7\uD83C\uDDF1"],"","",["flag-bl"],31,37,61,0],
		"1f1e7-1f1f2":[["\uD83C\uDDE7\uD83C\uDDF2"],"","",["flag-bm"],31,38,63,0],
		"1f1e7-1f1f3":[["\uD83C\uDDE7\uD83C\uDDF3"],"","",["flag-bn"],31,39,31,0],
		"1f1e7-1f1f4":[["\uD83C\uDDE7\uD83C\uDDF4"],"","",["flag-bo"],31,40,63,0],
		"1f1e7-1f1f6":[["\uD83C\uDDE7\uD83C\uDDF6"],"","",["flag-bq"],31,41,61,0],
		"1f1e7-1f1f7":[["\uD83C\uDDE7\uD83C\uDDF7"],"","",["flag-br"],31,42,63,0],
		"1f1e7-1f1f8":[["\uD83C\uDDE7\uD83C\uDDF8"],"","",["flag-bs"],31,43,63,0],
		"1f1e7-1f1f9":[["\uD83C\uDDE7\uD83C\uDDF9"],"","",["flag-bt"],31,44,63,0],
		"1f1e7-1f1fb":[["\uD83C\uDDE7\uD83C\uDDFB"],"","",["flag-bv"],31,45,61,0],
		"1f1e7-1f1fc":[["\uD83C\uDDE7\uD83C\uDDFC"],"","",["flag-bw"],31,46,63,0],
		"1f1e7-1f1fe":[["\uD83C\uDDE7\uD83C\uDDFE"],"","",["flag-by"],31,47,63,0],
		"1f1e7-1f1ff":[["\uD83C\uDDE7\uD83C\uDDFF"],"","",["flag-bz"],31,48,63,0],
		"1f1e8-1f1e6":[["\uD83C\uDDE8\uD83C\uDDE6"],"","",["flag-ca"],32,0,63,0],
		"1f1e8-1f1e8":[["\uD83C\uDDE8\uD83C\uDDE8"],"","",["flag-cc"],32,1,63,0],
		"1f1e8-1f1e9":[["\uD83C\uDDE8\uD83C\uDDE9"],"","",["flag-cd"],32,2,63,0],
		"1f1e8-1f1eb":[["\uD83C\uDDE8\uD83C\uDDEB"],"","",["flag-cf"],32,3,63,0],
		"1f1e8-1f1ec":[["\uD83C\uDDE8\uD83C\uDDEC"],"","",["flag-cg"],32,4,63,0],
		"1f1e8-1f1ed":[["\uD83C\uDDE8\uD83C\uDDED"],"","",["flag-ch"],32,5,63,0],
		"1f1e8-1f1ee":[["\uD83C\uDDE8\uD83C\uDDEE"],"","",["flag-ci"],32,6,63,0],
		"1f1e8-1f1f0":[["\uD83C\uDDE8\uD83C\uDDF0"],"","",["flag-ck"],32,7,63,0],
		"1f1e8-1f1f1":[["\uD83C\uDDE8\uD83C\uDDF1"],"","",["flag-cl"],32,8,63,0],
		"1f1e8-1f1f2":[["\uD83C\uDDE8\uD83C\uDDF2"],"","",["flag-cm"],32,9,63,0],
		"1f1e8-1f1f3":[["\uD83C\uDDE8\uD83C\uDDF3"],"\uE513","\uDBB9\uDCED",["flag-cn","cn"],32,10,63,0],
		"1f1e8-1f1f4":[["\uD83C\uDDE8\uD83C\uDDF4"],"","",["flag-co"],32,11,63,0],
		"1f1e8-1f1f5":[["\uD83C\uDDE8\uD83C\uDDF5"],"","",["flag-cp"],32,12,29,0],
		"1f1e8-1f1f7":[["\uD83C\uDDE8\uD83C\uDDF7"],"","",["flag-cr"],32,13,63,0],
		"1f1e8-1f1fa":[["\uD83C\uDDE8\uD83C\uDDFA"],"","",["flag-cu"],32,14,63,0],
		"1f1e8-1f1fb":[["\uD83C\uDDE8\uD83C\uDDFB"],"","",["flag-cv"],32,15,63,0],
		"1f1e8-1f1fc":[["\uD83C\uDDE8\uD83C\uDDFC"],"","",["flag-cw"],32,16,63,0],
		"1f1e8-1f1fd":[["\uD83C\uDDE8\uD83C\uDDFD"],"","",["flag-cx"],32,17,63,0],
		"1f1e8-1f1fe":[["\uD83C\uDDE8\uD83C\uDDFE"],"","",["flag-cy"],32,18,63,0],
		"1f1e8-1f1ff":[["\uD83C\uDDE8\uD83C\uDDFF"],"","",["flag-cz"],32,19,63,0],
		"1f1e9-1f1ea":[["\uD83C\uDDE9\uD83C\uDDEA"],"\uE50E","\uDBB9\uDCE8",["flag-de","de"],32,20,63,0],
		"1f1e9-1f1ec":[["\uD83C\uDDE9\uD83C\uDDEC"],"","",["flag-dg"],32,21,61,0],
		"1f1e9-1f1ef":[["\uD83C\uDDE9\uD83C\uDDEF"],"","",["flag-dj"],32,22,63,0],
		"1f1e9-1f1f0":[["\uD83C\uDDE9\uD83C\uDDF0"],"","",["flag-dk"],32,23,63,0],
		"1f1e9-1f1f2":[["\uD83C\uDDE9\uD83C\uDDF2"],"","",["flag-dm"],32,24,63,0],
		"1f1e9-1f1f4":[["\uD83C\uDDE9\uD83C\uDDF4"],"","",["flag-do"],32,25,63,0],
		"1f1e9-1f1ff":[["\uD83C\uDDE9\uD83C\uDDFF"],"","",["flag-dz"],32,26,63,0],
		"1f1ea-1f1e6":[["\uD83C\uDDEA\uD83C\uDDE6"],"","",["flag-ea"],32,27,61,0],
		"1f1ea-1f1e8":[["\uD83C\uDDEA\uD83C\uDDE8"],"","",["flag-ec"],32,28,63,0],
		"1f1ea-1f1ea":[["\uD83C\uDDEA\uD83C\uDDEA"],"","",["flag-ee"],32,29,63,0],
		"1f1ea-1f1ec":[["\uD83C\uDDEA\uD83C\uDDEC"],"","",["flag-eg"],32,30,63,0],
		"1f1ea-1f1ed":[["\uD83C\uDDEA\uD83C\uDDED"],"","",["flag-eh"],32,31,61,0],
		"1f1ea-1f1f7":[["\uD83C\uDDEA\uD83C\uDDF7"],"","",["flag-er"],32,32,63,0],
		"1f1ea-1f1f8":[["\uD83C\uDDEA\uD83C\uDDF8"],"\uE511","\uDBB9\uDCEB",["flag-es","es"],32,33,63,0],
		"1f1ea-1f1f9":[["\uD83C\uDDEA\uD83C\uDDF9"],"","",["flag-et"],32,34,63,0],
		"1f1ea-1f1fa":[["\uD83C\uDDEA\uD83C\uDDFA"],"","",["flag-eu"],32,35,63,0],
		"1f1eb-1f1ee":[["\uD83C\uDDEB\uD83C\uDDEE"],"","",["flag-fi"],32,36,63,0],
		"1f1eb-1f1ef":[["\uD83C\uDDEB\uD83C\uDDEF"],"","",["flag-fj"],32,37,63,0],
		"1f1eb-1f1f0":[["\uD83C\uDDEB\uD83C\uDDF0"],"","",["flag-fk"],32,38,61,0],
		"1f1eb-1f1f2":[["\uD83C\uDDEB\uD83C\uDDF2"],"","",["flag-fm"],32,39,63,0],
		"1f1eb-1f1f4":[["\uD83C\uDDEB\uD83C\uDDF4"],"","",["flag-fo"],32,40,63,0],
		"1f1eb-1f1f7":[["\uD83C\uDDEB\uD83C\uDDF7"],"\uE50D","\uDBB9\uDCE7",["flag-fr","fr"],32,41,63,0],
		"1f1ec-1f1e6":[["\uD83C\uDDEC\uD83C\uDDE6"],"","",["flag-ga"],32,42,63,0],
		"1f1ec-1f1e7":[["\uD83C\uDDEC\uD83C\uDDE7"],"\uE510","\uDBB9\uDCEA",["flag-gb","gb","uk"],32,43,63,0],
		"1f1ec-1f1e9":[["\uD83C\uDDEC\uD83C\uDDE9"],"","",["flag-gd"],32,44,63,0],
		"1f1ec-1f1ea":[["\uD83C\uDDEC\uD83C\uDDEA"],"","",["flag-ge"],32,45,63,0],
		"1f1ec-1f1eb":[["\uD83C\uDDEC\uD83C\uDDEB"],"","",["flag-gf"],32,46,61,0],
		"1f1ec-1f1ec":[["\uD83C\uDDEC\uD83C\uDDEC"],"","",["flag-gg"],32,47,63,0],
		"1f1ec-1f1ed":[["\uD83C\uDDEC\uD83C\uDDED"],"","",["flag-gh"],32,48,63,0],
		"1f1ec-1f1ee":[["\uD83C\uDDEC\uD83C\uDDEE"],"","",["flag-gi"],33,0,63,0],
		"1f1ec-1f1f1":[["\uD83C\uDDEC\uD83C\uDDF1"],"","",["flag-gl"],33,1,63,0],
		"1f1ec-1f1f2":[["\uD83C\uDDEC\uD83C\uDDF2"],"","",["flag-gm"],33,2,63,0],
		"1f1ec-1f1f3":[["\uD83C\uDDEC\uD83C\uDDF3"],"","",["flag-gn"],33,3,63,0],
		"1f1ec-1f1f5":[["\uD83C\uDDEC\uD83C\uDDF5"],"","",["flag-gp"],33,4,61,0],
		"1f1ec-1f1f6":[["\uD83C\uDDEC\uD83C\uDDF6"],"","",["flag-gq"],33,5,63,0],
		"1f1ec-1f1f7":[["\uD83C\uDDEC\uD83C\uDDF7"],"","",["flag-gr"],33,6,63,0],
		"1f1ec-1f1f8":[["\uD83C\uDDEC\uD83C\uDDF8"],"","",["flag-gs"],33,7,61,0],
		"1f1ec-1f1f9":[["\uD83C\uDDEC\uD83C\uDDF9"],"","",["flag-gt"],33,8,63,0],
		"1f1ec-1f1fa":[["\uD83C\uDDEC\uD83C\uDDFA"],"","",["flag-gu"],33,9,63,0],
		"1f1ec-1f1fc":[["\uD83C\uDDEC\uD83C\uDDFC"],"","",["flag-gw"],33,10,63,0],
		"1f1ec-1f1fe":[["\uD83C\uDDEC\uD83C\uDDFE"],"","",["flag-gy"],33,11,63,0],
		"1f1ed-1f1f0":[["\uD83C\uDDED\uD83C\uDDF0"],"","",["flag-hk"],33,12,63,0],
		"1f1ed-1f1f2":[["\uD83C\uDDED\uD83C\uDDF2"],"","",["flag-hm"],33,13,61,0],
		"1f1ed-1f1f3":[["\uD83C\uDDED\uD83C\uDDF3"],"","",["flag-hn"],33,14,63,0],
		"1f1ed-1f1f7":[["\uD83C\uDDED\uD83C\uDDF7"],"","",["flag-hr"],33,15,63,0],
		"1f1ed-1f1f9":[["\uD83C\uDDED\uD83C\uDDF9"],"","",["flag-ht"],33,16,63,0],
		"1f1ed-1f1fa":[["\uD83C\uDDED\uD83C\uDDFA"],"","",["flag-hu"],33,17,63,0],
		"1f1ee-1f1e8":[["\uD83C\uDDEE\uD83C\uDDE8"],"","",["flag-ic"],33,18,63,0],
		"1f1ee-1f1e9":[["\uD83C\uDDEE\uD83C\uDDE9"],"","",["flag-id"],33,19,63,0],
		"1f1ee-1f1ea":[["\uD83C\uDDEE\uD83C\uDDEA"],"","",["flag-ie"],33,20,63,0],
		"1f1ee-1f1f1":[["\uD83C\uDDEE\uD83C\uDDF1"],"","",["flag-il"],33,21,63,0],
		"1f1ee-1f1f2":[["\uD83C\uDDEE\uD83C\uDDF2"],"","",["flag-im"],33,22,63,0],
		"1f1ee-1f1f3":[["\uD83C\uDDEE\uD83C\uDDF3"],"","",["flag-in"],33,23,63,0],
		"1f1ee-1f1f4":[["\uD83C\uDDEE\uD83C\uDDF4"],"","",["flag-io"],33,24,63,0],
		"1f1ee-1f1f6":[["\uD83C\uDDEE\uD83C\uDDF6"],"","",["flag-iq"],33,25,63,0],
		"1f1ee-1f1f7":[["\uD83C\uDDEE\uD83C\uDDF7"],"","",["flag-ir"],33,26,63,0],
		"1f1ee-1f1f8":[["\uD83C\uDDEE\uD83C\uDDF8"],"","",["flag-is"],33,27,63,0],
		"1f1ee-1f1f9":[["\uD83C\uDDEE\uD83C\uDDF9"],"\uE50F","\uDBB9\uDCE9",["flag-it","it"],33,28,63,0],
		"1f1ef-1f1ea":[["\uD83C\uDDEF\uD83C\uDDEA"],"","",["flag-je"],33,29,63,0],
		"1f1ef-1f1f2":[["\uD83C\uDDEF\uD83C\uDDF2"],"","",["flag-jm"],33,30,63,0],
		"1f1ef-1f1f4":[["\uD83C\uDDEF\uD83C\uDDF4"],"","",["flag-jo"],33,31,63,0],
		"1f1ef-1f1f5":[["\uD83C\uDDEF\uD83C\uDDF5"],"\uE50B","\uDBB9\uDCE5",["flag-jp","jp"],33,32,63,0],
		"1f1f0-1f1ea":[["\uD83C\uDDF0\uD83C\uDDEA"],"","",["flag-ke"],33,33,63,0],
		"1f1f0-1f1ec":[["\uD83C\uDDF0\uD83C\uDDEC"],"","",["flag-kg"],33,34,63,0],
		"1f1f0-1f1ed":[["\uD83C\uDDF0\uD83C\uDDED"],"","",["flag-kh"],33,35,63,0],
		"1f1f0-1f1ee":[["\uD83C\uDDF0\uD83C\uDDEE"],"","",["flag-ki"],33,36,63,0],
		"1f1f0-1f1f2":[["\uD83C\uDDF0\uD83C\uDDF2"],"","",["flag-km"],33,37,63,0],
		"1f1f0-1f1f3":[["\uD83C\uDDF0\uD83C\uDDF3"],"","",["flag-kn"],33,38,63,0],
		"1f1f0-1f1f5":[["\uD83C\uDDF0\uD83C\uDDF5"],"","",["flag-kp"],33,39,63,0],
		"1f1f0-1f1f7":[["\uD83C\uDDF0\uD83C\uDDF7"],"\uE514","\uDBB9\uDCEE",["flag-kr","kr"],33,40,63,0],
		"1f1f0-1f1fc":[["\uD83C\uDDF0\uD83C\uDDFC"],"","",["flag-kw"],33,41,63,0],
		"1f1f0-1f1fe":[["\uD83C\uDDF0\uD83C\uDDFE"],"","",["flag-ky"],33,42,63,0],
		"1f1f0-1f1ff":[["\uD83C\uDDF0\uD83C\uDDFF"],"","",["flag-kz"],33,43,63,0],
		"1f1f1-1f1e6":[["\uD83C\uDDF1\uD83C\uDDE6"],"","",["flag-la"],33,44,63,0],
		"1f1f1-1f1e7":[["\uD83C\uDDF1\uD83C\uDDE7"],"","",["flag-lb"],33,45,63,0],
		"1f1f1-1f1e8":[["\uD83C\uDDF1\uD83C\uDDE8"],"","",["flag-lc"],33,46,63,0],
		"1f1f1-1f1ee":[["\uD83C\uDDF1\uD83C\uDDEE"],"","",["flag-li"],33,47,63,0],
		"1f1f1-1f1f0":[["\uD83C\uDDF1\uD83C\uDDF0"],"","",["flag-lk"],33,48,63,0],
		"1f1f1-1f1f7":[["\uD83C\uDDF1\uD83C\uDDF7"],"","",["flag-lr"],34,0,63,0],
		"1f1f1-1f1f8":[["\uD83C\uDDF1\uD83C\uDDF8"],"","",["flag-ls"],34,1,63,0],
		"1f1f1-1f1f9":[["\uD83C\uDDF1\uD83C\uDDF9"],"","",["flag-lt"],34,2,63,0],
		"1f1f1-1f1fa":[["\uD83C\uDDF1\uD83C\uDDFA"],"","",["flag-lu"],34,3,63,0],
		"1f1f1-1f1fb":[["\uD83C\uDDF1\uD83C\uDDFB"],"","",["flag-lv"],34,4,63,0],
		"1f1f1-1f1fe":[["\uD83C\uDDF1\uD83C\uDDFE"],"","",["flag-ly"],34,5,63,0],
		"1f1f2-1f1e6":[["\uD83C\uDDF2\uD83C\uDDE6"],"","",["flag-ma"],34,6,63,0],
		"1f1f2-1f1e8":[["\uD83C\uDDF2\uD83C\uDDE8"],"","",["flag-mc"],34,7,63,0],
		"1f1f2-1f1e9":[["\uD83C\uDDF2\uD83C\uDDE9"],"","",["flag-md"],34,8,63,0],
		"1f1f2-1f1ea":[["\uD83C\uDDF2\uD83C\uDDEA"],"","",["flag-me"],34,9,63,0],
		"1f1f2-1f1eb":[["\uD83C\uDDF2\uD83C\uDDEB"],"","",["flag-mf"],34,10,61,0],
		"1f1f2-1f1ec":[["\uD83C\uDDF2\uD83C\uDDEC"],"","",["flag-mg"],34,11,63,0],
		"1f1f2-1f1ed":[["\uD83C\uDDF2\uD83C\uDDED"],"","",["flag-mh"],34,12,63,0],
		"1f1f2-1f1f0":[["\uD83C\uDDF2\uD83C\uDDF0"],"","",["flag-mk"],34,13,63,0],
		"1f1f2-1f1f1":[["\uD83C\uDDF2\uD83C\uDDF1"],"","",["flag-ml"],34,14,63,0],
		"1f1f2-1f1f2":[["\uD83C\uDDF2\uD83C\uDDF2"],"","",["flag-mm"],34,15,63,0],
		"1f1f2-1f1f3":[["\uD83C\uDDF2\uD83C\uDDF3"],"","",["flag-mn"],34,16,63,0],
		"1f1f2-1f1f4":[["\uD83C\uDDF2\uD83C\uDDF4"],"","",["flag-mo"],34,17,63,0],
		"1f1f2-1f1f5":[["\uD83C\uDDF2\uD83C\uDDF5"],"","",["flag-mp"],34,18,63,0],
		"1f1f2-1f1f6":[["\uD83C\uDDF2\uD83C\uDDF6"],"","",["flag-mq"],34,19,61,0],
		"1f1f2-1f1f7":[["\uD83C\uDDF2\uD83C\uDDF7"],"","",["flag-mr"],34,20,63,0],
		"1f1f2-1f1f8":[["\uD83C\uDDF2\uD83C\uDDF8"],"","",["flag-ms"],34,21,63,0],
		"1f1f2-1f1f9":[["\uD83C\uDDF2\uD83C\uDDF9"],"","",["flag-mt"],34,22,63,0],
		"1f1f2-1f1fa":[["\uD83C\uDDF2\uD83C\uDDFA"],"","",["flag-mu"],34,23,63,0],
		"1f1f2-1f1fb":[["\uD83C\uDDF2\uD83C\uDDFB"],"","",["flag-mv"],34,24,63,0],
		"1f1f2-1f1fc":[["\uD83C\uDDF2\uD83C\uDDFC"],"","",["flag-mw"],34,25,63,0],
		"1f1f2-1f1fd":[["\uD83C\uDDF2\uD83C\uDDFD"],"","",["flag-mx"],34,26,63,0],
		"1f1f2-1f1fe":[["\uD83C\uDDF2\uD83C\uDDFE"],"","",["flag-my"],34,27,63,0],
		"1f1f2-1f1ff":[["\uD83C\uDDF2\uD83C\uDDFF"],"","",["flag-mz"],34,28,63,0],
		"1f1f3-1f1e6":[["\uD83C\uDDF3\uD83C\uDDE6"],"","",["flag-na"],34,29,63,0],
		"1f1f3-1f1e8":[["\uD83C\uDDF3\uD83C\uDDE8"],"","",["flag-nc"],34,30,61,0],
		"1f1f3-1f1ea":[["\uD83C\uDDF3\uD83C\uDDEA"],"","",["flag-ne"],34,31,63,0],
		"1f1f3-1f1eb":[["\uD83C\uDDF3\uD83C\uDDEB"],"","",["flag-nf"],34,32,63,0],
		"1f1f3-1f1ec":[["\uD83C\uDDF3\uD83C\uDDEC"],"","",["flag-ng"],34,33,63,0],
		"1f1f3-1f1ee":[["\uD83C\uDDF3\uD83C\uDDEE"],"","",["flag-ni"],34,34,63,0],
		"1f1f3-1f1f1":[["\uD83C\uDDF3\uD83C\uDDF1"],"","",["flag-nl"],34,35,63,0],
		"1f1f3-1f1f4":[["\uD83C\uDDF3\uD83C\uDDF4"],"","",["flag-no"],34,36,63,0],
		"1f1f3-1f1f5":[["\uD83C\uDDF3\uD83C\uDDF5"],"","",["flag-np"],34,37,63,0],
		"1f1f3-1f1f7":[["\uD83C\uDDF3\uD83C\uDDF7"],"","",["flag-nr"],34,38,63,0],
		"1f1f3-1f1fa":[["\uD83C\uDDF3\uD83C\uDDFA"],"","",["flag-nu"],34,39,63,0],
		"1f1f3-1f1ff":[["\uD83C\uDDF3\uD83C\uDDFF"],"","",["flag-nz"],34,40,63,0],
		"1f1f4-1f1f2":[["\uD83C\uDDF4\uD83C\uDDF2"],"","",["flag-om"],34,41,63,0],
		"1f1f5-1f1e6":[["\uD83C\uDDF5\uD83C\uDDE6"],"","",["flag-pa"],34,42,63,0],
		"1f1f5-1f1ea":[["\uD83C\uDDF5\uD83C\uDDEA"],"","",["flag-pe"],34,43,63,0],
		"1f1f5-1f1eb":[["\uD83C\uDDF5\uD83C\uDDEB"],"","",["flag-pf"],34,44,63,0],
		"1f1f5-1f1ec":[["\uD83C\uDDF5\uD83C\uDDEC"],"","",["flag-pg"],34,45,63,0],
		"1f1f5-1f1ed":[["\uD83C\uDDF5\uD83C\uDDED"],"","",["flag-ph"],34,46,63,0],
		"1f1f5-1f1f0":[["\uD83C\uDDF5\uD83C\uDDF0"],"","",["flag-pk"],34,47,63,0],
		"1f1f5-1f1f1":[["\uD83C\uDDF5\uD83C\uDDF1"],"","",["flag-pl"],34,48,63,0],
		"1f1f5-1f1f2":[["\uD83C\uDDF5\uD83C\uDDF2"],"","",["flag-pm"],35,0,61,0],
		"1f1f5-1f1f3":[["\uD83C\uDDF5\uD83C\uDDF3"],"","",["flag-pn"],35,1,63,0],
		"1f1f5-1f1f7":[["\uD83C\uDDF5\uD83C\uDDF7"],"","",["flag-pr"],35,2,63,0],
		"1f1f5-1f1f8":[["\uD83C\uDDF5\uD83C\uDDF8"],"","",["flag-ps"],35,3,63,0],
		"1f1f5-1f1f9":[["\uD83C\uDDF5\uD83C\uDDF9"],"","",["flag-pt"],35,4,63,0],
		"1f1f5-1f1fc":[["\uD83C\uDDF5\uD83C\uDDFC"],"","",["flag-pw"],35,5,63,0],
		"1f1f5-1f1fe":[["\uD83C\uDDF5\uD83C\uDDFE"],"","",["flag-py"],35,6,63,0],
		"1f1f6-1f1e6":[["\uD83C\uDDF6\uD83C\uDDE6"],"","",["flag-qa"],35,7,63,0],
		"1f1f7-1f1ea":[["\uD83C\uDDF7\uD83C\uDDEA"],"","",["flag-re"],35,8,61,0],
		"1f1f7-1f1f4":[["\uD83C\uDDF7\uD83C\uDDF4"],"","",["flag-ro"],35,9,63,0],
		"1f1f7-1f1f8":[["\uD83C\uDDF7\uD83C\uDDF8"],"","",["flag-rs"],35,10,63,0],
		"1f1f7-1f1fa":[["\uD83C\uDDF7\uD83C\uDDFA"],"\uE512","\uDBB9\uDCEC",["flag-ru","ru"],35,11,63,0],
		"1f1f7-1f1fc":[["\uD83C\uDDF7\uD83C\uDDFC"],"","",["flag-rw"],35,12,63,0],
		"1f1f8-1f1e6":[["\uD83C\uDDF8\uD83C\uDDE6"],"","",["flag-sa"],35,13,63,0],
		"1f1f8-1f1e7":[["\uD83C\uDDF8\uD83C\uDDE7"],"","",["flag-sb"],35,14,63,0],
		"1f1f8-1f1e8":[["\uD83C\uDDF8\uD83C\uDDE8"],"","",["flag-sc"],35,15,63,0],
		"1f1f8-1f1e9":[["\uD83C\uDDF8\uD83C\uDDE9"],"","",["flag-sd"],35,16,63,0],
		"1f1f8-1f1ea":[["\uD83C\uDDF8\uD83C\uDDEA"],"","",["flag-se"],35,17,63,0],
		"1f1f8-1f1ec":[["\uD83C\uDDF8\uD83C\uDDEC"],"","",["flag-sg"],35,18,63,0],
		"1f1f8-1f1ed":[["\uD83C\uDDF8\uD83C\uDDED"],"","",["flag-sh"],35,19,63,0],
		"1f1f8-1f1ee":[["\uD83C\uDDF8\uD83C\uDDEE"],"","",["flag-si"],35,20,63,0],
		"1f1f8-1f1ef":[["\uD83C\uDDF8\uD83C\uDDEF"],"","",["flag-sj"],35,21,61,0],
		"1f1f8-1f1f0":[["\uD83C\uDDF8\uD83C\uDDF0"],"","",["flag-sk"],35,22,63,0],
		"1f1f8-1f1f1":[["\uD83C\uDDF8\uD83C\uDDF1"],"","",["flag-sl"],35,23,63,0],
		"1f1f8-1f1f2":[["\uD83C\uDDF8\uD83C\uDDF2"],"","",["flag-sm"],35,24,63,0],
		"1f1f8-1f1f3":[["\uD83C\uDDF8\uD83C\uDDF3"],"","",["flag-sn"],35,25,63,0],
		"1f1f8-1f1f4":[["\uD83C\uDDF8\uD83C\uDDF4"],"","",["flag-so"],35,26,63,0],
		"1f1f8-1f1f7":[["\uD83C\uDDF8\uD83C\uDDF7"],"","",["flag-sr"],35,27,63,0],
		"1f1f8-1f1f8":[["\uD83C\uDDF8\uD83C\uDDF8"],"","",["flag-ss"],35,28,63,0],
		"1f1f8-1f1f9":[["\uD83C\uDDF8\uD83C\uDDF9"],"","",["flag-st"],35,29,63,0],
		"1f1f8-1f1fb":[["\uD83C\uDDF8\uD83C\uDDFB"],"","",["flag-sv"],35,30,63,0],
		"1f1f8-1f1fd":[["\uD83C\uDDF8\uD83C\uDDFD"],"","",["flag-sx"],35,31,63,0],
		"1f1f8-1f1fe":[["\uD83C\uDDF8\uD83C\uDDFE"],"","",["flag-sy"],35,32,63,0],
		"1f1f8-1f1ff":[["\uD83C\uDDF8\uD83C\uDDFF"],"","",["flag-sz"],35,33,63,0],
		"1f1f9-1f1e6":[["\uD83C\uDDF9\uD83C\uDDE6"],"","",["flag-ta"],35,34,63,0],
		"1f1f9-1f1e8":[["\uD83C\uDDF9\uD83C\uDDE8"],"","",["flag-tc"],35,35,63,0],
		"1f1f9-1f1e9":[["\uD83C\uDDF9\uD83C\uDDE9"],"","",["flag-td"],35,36,63,0],
		"1f1f9-1f1eb":[["\uD83C\uDDF9\uD83C\uDDEB"],"","",["flag-tf"],35,37,61,0],
		"1f1f9-1f1ec":[["\uD83C\uDDF9\uD83C\uDDEC"],"","",["flag-tg"],35,38,63,0],
		"1f1f9-1f1ed":[["\uD83C\uDDF9\uD83C\uDDED"],"","",["flag-th"],35,39,63,0],
		"1f1f9-1f1ef":[["\uD83C\uDDF9\uD83C\uDDEF"],"","",["flag-tj"],35,40,63,0],
		"1f1f9-1f1f0":[["\uD83C\uDDF9\uD83C\uDDF0"],"","",["flag-tk"],35,41,63,0],
		"1f1f9-1f1f1":[["\uD83C\uDDF9\uD83C\uDDF1"],"","",["flag-tl"],35,42,63,0],
		"1f1f9-1f1f2":[["\uD83C\uDDF9\uD83C\uDDF2"],"","",["flag-tm"],35,43,63,0],
		"1f1f9-1f1f3":[["\uD83C\uDDF9\uD83C\uDDF3"],"","",["flag-tn"],35,44,63,0],
		"1f1f9-1f1f4":[["\uD83C\uDDF9\uD83C\uDDF4"],"","",["flag-to"],35,45,63,0],
		"1f1f9-1f1f7":[["\uD83C\uDDF9\uD83C\uDDF7"],"","",["flag-tr"],35,46,63,0],
		"1f1f9-1f1f9":[["\uD83C\uDDF9\uD83C\uDDF9"],"","",["flag-tt"],35,47,63,0],
		"1f1f9-1f1fb":[["\uD83C\uDDF9\uD83C\uDDFB"],"","",["flag-tv"],35,48,63,0],
		"1f1f9-1f1fc":[["\uD83C\uDDF9\uD83C\uDDFC"],"","",["flag-tw"],36,0,63,0],
		"1f1f9-1f1ff":[["\uD83C\uDDF9\uD83C\uDDFF"],"","",["flag-tz"],36,1,63,0],
		"1f1fa-1f1e6":[["\uD83C\uDDFA\uD83C\uDDE6"],"","",["flag-ua"],36,2,63,0],
		"1f1fa-1f1ec":[["\uD83C\uDDFA\uD83C\uDDEC"],"","",["flag-ug"],36,3,63,0],
		"1f1fa-1f1f2":[["\uD83C\uDDFA\uD83C\uDDF2"],"","",["flag-um"],36,4,61,0],
		"1f1fa-1f1f3":[["\uD83C\uDDFA\uD83C\uDDF3"],"","",["flag-un"],36,5,6,0],
		"1f1fa-1f1f8":[["\uD83C\uDDFA\uD83C\uDDF8"],"\uE50C","\uDBB9\uDCE6",["flag-us","us"],36,6,63,0],
		"1f1fa-1f1fe":[["\uD83C\uDDFA\uD83C\uDDFE"],"","",["flag-uy"],36,7,63,0],
		"1f1fa-1f1ff":[["\uD83C\uDDFA\uD83C\uDDFF"],"","",["flag-uz"],36,8,63,0],
		"1f1fb-1f1e6":[["\uD83C\uDDFB\uD83C\uDDE6"],"","",["flag-va"],36,9,63,0],
		"1f1fb-1f1e8":[["\uD83C\uDDFB\uD83C\uDDE8"],"","",["flag-vc"],36,10,63,0],
		"1f1fb-1f1ea":[["\uD83C\uDDFB\uD83C\uDDEA"],"","",["flag-ve"],36,11,63,0],
		"1f1fb-1f1ec":[["\uD83C\uDDFB\uD83C\uDDEC"],"","",["flag-vg"],36,12,63,0],
		"1f1fb-1f1ee":[["\uD83C\uDDFB\uD83C\uDDEE"],"","",["flag-vi"],36,13,63,0],
		"1f1fb-1f1f3":[["\uD83C\uDDFB\uD83C\uDDF3"],"","",["flag-vn"],36,14,63,0],
		"1f1fb-1f1fa":[["\uD83C\uDDFB\uD83C\uDDFA"],"","",["flag-vu"],36,15,63,0],
		"1f1fc-1f1eb":[["\uD83C\uDDFC\uD83C\uDDEB"],"","",["flag-wf"],36,16,61,0],
		"1f1fc-1f1f8":[["\uD83C\uDDFC\uD83C\uDDF8"],"","",["flag-ws"],36,17,63,0],
		"1f1fd-1f1f0":[["\uD83C\uDDFD\uD83C\uDDF0"],"","",["flag-xk"],36,18,61,0],
		"1f1fe-1f1ea":[["\uD83C\uDDFE\uD83C\uDDEA"],"","",["flag-ye"],36,19,63,0],
		"1f1fe-1f1f9":[["\uD83C\uDDFE\uD83C\uDDF9"],"","",["flag-yt"],36,20,61,0],
		"1f1ff-1f1e6":[["\uD83C\uDDFF\uD83C\uDDE6"],"","",["flag-za"],36,21,63,0],
		"1f1ff-1f1f2":[["\uD83C\uDDFF\uD83C\uDDF2"],"","",["flag-zm"],36,22,63,0],
		"1f1ff-1f1fc":[["\uD83C\uDDFF\uD83C\uDDFC"],"","",["flag-zw"],36,23,63,0],
		"1f468-200d-1f33e":[["\uD83D\uDC68\u200D\uD83C\uDF3E"],"","",["male-farmer"],36,24,23,0],
		"1f468-200d-1f373":[["\uD83D\uDC68\u200D\uD83C\uDF73"],"","",["male-cook"],36,30,23,0],
		"1f468-200d-1f393":[["\uD83D\uDC68\u200D\uD83C\uDF93"],"","",["male-student"],36,36,23,0],
		"1f468-200d-1f3a4":[["\uD83D\uDC68\u200D\uD83C\uDFA4"],"","",["male-singer"],36,42,23,0],
		"1f468-200d-1f3a8":[["\uD83D\uDC68\u200D\uD83C\uDFA8"],"","",["male-artist"],36,48,23,0],
		"1f468-200d-1f3eb":[["\uD83D\uDC68\u200D\uD83C\uDFEB"],"","",["male-teacher"],37,5,23,0],
		"1f468-200d-1f3ed":[["\uD83D\uDC68\u200D\uD83C\uDFED"],"","",["male-factory-worker"],37,11,23,0],
		"1f468-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC66"],"","",["man-boy"],37,17,23,0],
		"1f468-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC67"],"","",["man-girl"],37,18,23,0],
		"1f468-200d-1f4bb":[["\uD83D\uDC68\u200D\uD83D\uDCBB"],"","",["male-technologist"],37,19,23,0],
		"1f468-200d-1f4bc":[["\uD83D\uDC68\u200D\uD83D\uDCBC"],"","",["male-office-worker"],37,25,23,0],
		"1f468-200d-1f527":[["\uD83D\uDC68\u200D\uD83D\uDD27"],"","",["male-mechanic"],37,31,23,0],
		"1f468-200d-1f52c":[["\uD83D\uDC68\u200D\uD83D\uDD2C"],"","",["male-scientist"],37,37,23,0],
		"1f468-200d-1f680":[["\uD83D\uDC68\u200D\uD83D\uDE80"],"","",["male-astronaut"],37,43,23,0],
		"1f468-200d-1f692":[["\uD83D\uDC68\u200D\uD83D\uDE92"],"","",["male-firefighter"],38,0,23,0],
		"1f469-200d-1f33e":[["\uD83D\uDC69\u200D\uD83C\uDF3E"],"","",["female-farmer"],38,6,23,0],
		"1f469-200d-1f373":[["\uD83D\uDC69\u200D\uD83C\uDF73"],"","",["female-cook"],38,12,23,0],
		"1f469-200d-1f393":[["\uD83D\uDC69\u200D\uD83C\uDF93"],"","",["female-student"],38,18,23,0],
		"1f469-200d-1f3a4":[["\uD83D\uDC69\u200D\uD83C\uDFA4"],"","",["female-singer"],38,24,23,0],
		"1f469-200d-1f3a8":[["\uD83D\uDC69\u200D\uD83C\uDFA8"],"","",["female-artist"],38,30,23,0],
		"1f469-200d-1f3eb":[["\uD83D\uDC69\u200D\uD83C\uDFEB"],"","",["female-teacher"],38,36,23,0],
		"1f469-200d-1f3ed":[["\uD83D\uDC69\u200D\uD83C\uDFED"],"","",["female-factory-worker"],38,42,23,0],
		"1f469-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC66"],"","",["woman-boy"],38,48,23,0],
		"1f469-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC67"],"","",["woman-girl"],39,0,23,0],
		"1f469-200d-1f4bb":[["\uD83D\uDC69\u200D\uD83D\uDCBB"],"","",["female-technologist"],39,1,23,0],
		"1f469-200d-1f4bc":[["\uD83D\uDC69\u200D\uD83D\uDCBC"],"","",["female-office-worker"],39,7,23,0],
		"1f469-200d-1f527":[["\uD83D\uDC69\u200D\uD83D\uDD27"],"","",["female-mechanic"],39,13,23,0],
		"1f469-200d-1f52c":[["\uD83D\uDC69\u200D\uD83D\uDD2C"],"","",["female-scientist"],39,19,23,0],
		"1f469-200d-1f680":[["\uD83D\uDC69\u200D\uD83D\uDE80"],"","",["female-astronaut"],39,25,23,0],
		"1f469-200d-1f692":[["\uD83D\uDC69\u200D\uD83D\uDE92"],"","",["female-firefighter"],39,31,23,0],
		"1f3c3-200d-2640-fe0f":[["\uD83C\uDFC3\u200D\u2640\uFE0F"],"","",["woman-running"],39,37,5,0],
		"1f3c3-200d-2642-fe0f":[["\uD83C\uDFC3\u200D\u2642\uFE0F","\uD83C\uDFC3"],"","",["man-running","runner","running"],39,43,5,0],
		"1f3c4-200d-2640-fe0f":[["\uD83C\uDFC4\u200D\u2640\uFE0F"],"","",["woman-surfing"],40,0,5,0],
		"1f3c4-200d-2642-fe0f":[["\uD83C\uDFC4\u200D\u2642\uFE0F","\uD83C\uDFC4"],"","",["man-surfing","surfer"],40,6,5,0],
		"1f3ca-200d-2640-fe0f":[["\uD83C\uDFCA\u200D\u2640\uFE0F"],"","",["woman-swimming"],40,12,5,0],
		"1f3ca-200d-2642-fe0f":[["\uD83C\uDFCA\u200D\u2642\uFE0F","\uD83C\uDFCA"],"","",["man-swimming","swimmer"],40,18,5,0],
		"1f3cb-fe0f-200d-2640-fe0f":[["\uD83C\uDFCB\uFE0F\u200D\u2640\uFE0F"],"","",["woman-lifting-weights"],40,24,5,0],
		"1f3cb-fe0f-200d-2642-fe0f":[["\uD83C\uDFCB\uFE0F\u200D\u2642\uFE0F","\uD83C\uDFCB\uFE0F","\uD83C\uDFCB"],"","",["man-lifting-weights","weight_lifter"],40,30,5,0],
		"1f3cc-fe0f-200d-2640-fe0f":[["\uD83C\uDFCC\uFE0F\u200D\u2640\uFE0F"],"","",["woman-golfing"],40,36,5,0],
		"1f3cc-fe0f-200d-2642-fe0f":[["\uD83C\uDFCC\uFE0F\u200D\u2642\uFE0F","\uD83C\uDFCC\uFE0F","\uD83C\uDFCC"],"","",["man-golfing","golfer"],40,42,5,0],
		"1f3f3-fe0f-200d-1f308":[["\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08"],"","",["rainbow-flag"],40,48,53,0],
		"1f441-fe0f-200d-1f5e8-fe0f":[["\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F"],"","",["eye-in-speech-bubble"],41,0,1,0],
		"1f468-200d-1f466-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["man-boy-boy"],41,1,23,0],
		"1f468-200d-1f467-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["man-girl-boy"],41,2,23,0],
		"1f468-200d-1f467-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["man-girl-girl"],41,3,23,0],
		"1f468-200d-1f468-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66"],"","",["man-man-boy"],41,4,63,0],
		"1f468-200d-1f468-200d-1f466-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["man-man-boy-boy"],41,5,63,0],
		"1f468-200d-1f468-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67"],"","",["man-man-girl"],41,6,63,0],
		"1f468-200d-1f468-200d-1f467-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["man-man-girl-boy"],41,7,63,0],
		"1f468-200d-1f468-200d-1f467-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["man-man-girl-girl"],41,8,63,0],
		"1f468-200d-1f469-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66","\uD83D\uDC6A"],"","",["man-woman-boy","family"],41,9,55,0],
		"1f468-200d-1f469-200d-1f466-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["man-woman-boy-boy"],41,10,63,0],
		"1f468-200d-1f469-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67"],"","",["man-woman-girl"],41,11,63,0],
		"1f468-200d-1f469-200d-1f467-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["man-woman-girl-boy"],41,12,63,0],
		"1f468-200d-1f469-200d-1f467-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["man-woman-girl-girl"],41,13,63,0],
		"1f468-200d-2695-fe0f":[["\uD83D\uDC68\u200D\u2695\uFE0F"],"","",["male-doctor"],41,14,5,0],
		"1f468-200d-2696-fe0f":[["\uD83D\uDC68\u200D\u2696\uFE0F"],"","",["male-judge"],41,20,5,0],
		"1f468-200d-2708-fe0f":[["\uD83D\uDC68\u200D\u2708\uFE0F"],"","",["male-pilot"],41,26,5,0],
		"1f468-200d-2764-fe0f-200d-1f468":[["\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68"],"","",["man-heart-man"],41,32,53,0],
		"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468":[["\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68"],"","",["man-kiss-man"],41,33,53,0],
		"1f469-200d-1f466-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["woman-boy-boy"],41,34,23,0],
		"1f469-200d-1f467-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["woman-girl-boy"],41,35,23,0],
		"1f469-200d-1f467-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["woman-girl-girl"],41,36,23,0],
		"1f469-200d-1f469-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66"],"","",["woman-woman-boy"],41,37,63,0],
		"1f469-200d-1f469-200d-1f466-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["woman-woman-boy-boy"],41,38,63,0],
		"1f469-200d-1f469-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67"],"","",["woman-woman-girl"],41,39,63,0],
		"1f469-200d-1f469-200d-1f467-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["woman-woman-girl-boy"],41,40,63,0],
		"1f469-200d-1f469-200d-1f467-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["woman-woman-girl-girl"],41,41,63,0],
		"1f469-200d-2695-fe0f":[["\uD83D\uDC69\u200D\u2695\uFE0F"],"","",["female-doctor"],41,42,5,0],
		"1f469-200d-2696-fe0f":[["\uD83D\uDC69\u200D\u2696\uFE0F"],"","",["female-judge"],41,48,5,0],
		"1f469-200d-2708-fe0f":[["\uD83D\uDC69\u200D\u2708\uFE0F"],"","",["female-pilot"],42,5,5,0],
		"1f469-200d-2764-fe0f-200d-1f468":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC68","\uD83D\uDC91"],"","",["woman-heart-man","couple_with_heart"],42,11,21,0],
		"1f469-200d-2764-fe0f-200d-1f469":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69"],"","",["woman-heart-woman"],42,12,53,0],
		"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68","\uD83D\uDC8F"],"","",["woman-kiss-man","couplekiss"],42,13,21,0],
		"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69"],"","",["woman-kiss-woman"],42,14,53,0],
		"1f46e-200d-2640-fe0f":[["\uD83D\uDC6E\u200D\u2640\uFE0F"],"","",["female-police-officer"],42,15,5,0],
		"1f46e-200d-2642-fe0f":[["\uD83D\uDC6E\u200D\u2642\uFE0F","\uD83D\uDC6E"],"","",["male-police-officer","cop"],42,21,5,0],
		"1f46f-200d-2640-fe0f":[["\uD83D\uDC6F\u200D\u2640\uFE0F","\uD83D\uDC6F"],"","",["woman-with-bunny-ears-partying","dancers"],42,27,5,0],
		"1f46f-200d-2642-fe0f":[["\uD83D\uDC6F\u200D\u2642\uFE0F"],"","",["man-with-bunny-ears-partying"],42,28,5,0],
		"1f471-200d-2640-fe0f":[["\uD83D\uDC71\u200D\u2640\uFE0F"],"","",["blond-haired-woman"],42,29,5,0],
		"1f471-200d-2642-fe0f":[["\uD83D\uDC71\u200D\u2642\uFE0F","\uD83D\uDC71"],"","",["blond-haired-man","person_with_blond_hair"],42,35,5,0],
		"1f473-200d-2640-fe0f":[["\uD83D\uDC73\u200D\u2640\uFE0F"],"","",["woman-wearing-turban"],42,41,5,0],
		"1f473-200d-2642-fe0f":[["\uD83D\uDC73\u200D\u2642\uFE0F","\uD83D\uDC73"],"","",["man-wearing-turban","man_with_turban"],42,47,5,0],
		"1f477-200d-2640-fe0f":[["\uD83D\uDC77\u200D\u2640\uFE0F"],"","",["female-construction-worker"],43,4,5,0],
		"1f477-200d-2642-fe0f":[["\uD83D\uDC77\u200D\u2642\uFE0F","\uD83D\uDC77"],"","",["male-construction-worker","construction_worker"],43,10,5,0],
		"1f481-200d-2640-fe0f":[["\uD83D\uDC81\u200D\u2640\uFE0F","\uD83D\uDC81"],"","",["woman-tipping-hand","information_desk_person"],43,16,5,0],
		"1f481-200d-2642-fe0f":[["\uD83D\uDC81\u200D\u2642\uFE0F"],"","",["man-tipping-hand"],43,22,5,0],
		"1f482-200d-2640-fe0f":[["\uD83D\uDC82\u200D\u2640\uFE0F"],"","",["female-guard"],43,28,5,0],
		"1f482-200d-2642-fe0f":[["\uD83D\uDC82\u200D\u2642\uFE0F","\uD83D\uDC82"],"","",["male-guard","guardsman"],43,34,5,0],
		"1f486-200d-2640-fe0f":[["\uD83D\uDC86\u200D\u2640\uFE0F","\uD83D\uDC86"],"","",["woman-getting-massage","massage"],43,40,5,0],
		"1f486-200d-2642-fe0f":[["\uD83D\uDC86\u200D\u2642\uFE0F"],"","",["man-getting-massage"],43,46,5,0],
		"1f487-200d-2640-fe0f":[["\uD83D\uDC87\u200D\u2640\uFE0F","\uD83D\uDC87"],"","",["woman-getting-haircut","haircut"],44,3,5,0],
		"1f487-200d-2642-fe0f":[["\uD83D\uDC87\u200D\u2642\uFE0F"],"","",["man-getting-haircut"],44,9,5,0],
		"1f575-fe0f-200d-2640-fe0f":[["\uD83D\uDD75\uFE0F\u200D\u2640\uFE0F"],"","",["female-detective"],44,15,5,0],
		"1f575-fe0f-200d-2642-fe0f":[["\uD83D\uDD75\uFE0F\u200D\u2642\uFE0F","\uD83D\uDD75\uFE0F","\uD83D\uDD75"],"","",["male-detective","sleuth_or_spy"],44,21,5,0],
		"1f645-200d-2640-fe0f":[["\uD83D\uDE45\u200D\u2640\uFE0F","\uD83D\uDE45"],"","",["woman-gesturing-no","no_good"],44,27,5,0],
		"1f645-200d-2642-fe0f":[["\uD83D\uDE45\u200D\u2642\uFE0F"],"","",["man-gesturing-no"],44,33,5,0],
		"1f646-200d-2640-fe0f":[["\uD83D\uDE46\u200D\u2640\uFE0F","\uD83D\uDE46"],"","",["woman-gesturing-ok","ok_woman"],44,39,5,0],
		"1f646-200d-2642-fe0f":[["\uD83D\uDE46\u200D\u2642\uFE0F"],"","",["man-gesturing-ok"],44,45,5,0],
		"1f647-200d-2640-fe0f":[["\uD83D\uDE47\u200D\u2640\uFE0F"],"","",["woman-bowing"],45,2,5,0],
		"1f647-200d-2642-fe0f":[["\uD83D\uDE47\u200D\u2642\uFE0F","\uD83D\uDE47"],"","",["man-bowing","bow"],45,8,5,0],
		"1f64b-200d-2640-fe0f":[["\uD83D\uDE4B\u200D\u2640\uFE0F","\uD83D\uDE4B"],"","",["woman-raising-hand","raising_hand"],45,14,5,0],
		"1f64b-200d-2642-fe0f":[["\uD83D\uDE4B\u200D\u2642\uFE0F"],"","",["man-raising-hand"],45,20,5,0],
		"1f64d-200d-2640-fe0f":[["\uD83D\uDE4D\u200D\u2640\uFE0F","\uD83D\uDE4D"],"","",["woman-frowning","person_frowning"],45,26,5,0],
		"1f64d-200d-2642-fe0f":[["\uD83D\uDE4D\u200D\u2642\uFE0F"],"","",["man-frowning"],45,32,5,0],
		"1f64e-200d-2640-fe0f":[["\uD83D\uDE4E\u200D\u2640\uFE0F","\uD83D\uDE4E"],"","",["woman-pouting","person_with_pouting_face"],45,38,5,0],
		"1f64e-200d-2642-fe0f":[["\uD83D\uDE4E\u200D\u2642\uFE0F"],"","",["man-pouting"],45,44,5,0],
		"1f6a3-200d-2640-fe0f":[["\uD83D\uDEA3\u200D\u2640\uFE0F"],"","",["woman-rowing-boat"],46,1,5,0],
		"1f6a3-200d-2642-fe0f":[["\uD83D\uDEA3\u200D\u2642\uFE0F","\uD83D\uDEA3"],"","",["man-rowing-boat","rowboat"],46,7,5,0],
		"1f6b4-200d-2640-fe0f":[["\uD83D\uDEB4\u200D\u2640\uFE0F"],"","",["woman-biking"],46,13,5,0],
		"1f6b4-200d-2642-fe0f":[["\uD83D\uDEB4\u200D\u2642\uFE0F","\uD83D\uDEB4"],"","",["man-biking","bicyclist"],46,19,5,0],
		"1f6b5-200d-2640-fe0f":[["\uD83D\uDEB5\u200D\u2640\uFE0F"],"","",["woman-mountain-biking"],46,25,5,0],
		"1f6b5-200d-2642-fe0f":[["\uD83D\uDEB5\u200D\u2642\uFE0F","\uD83D\uDEB5"],"","",["man-mountain-biking","mountain_bicyclist"],46,31,5,0],
		"1f6b6-200d-2640-fe0f":[["\uD83D\uDEB6\u200D\u2640\uFE0F"],"","",["woman-walking"],46,37,5,0],
		"1f6b6-200d-2642-fe0f":[["\uD83D\uDEB6\u200D\u2642\uFE0F","\uD83D\uDEB6"],"","",["man-walking","walking"],46,43,5,0],
		"1f926-200d-2640-fe0f":[["\uD83E\uDD26\u200D\u2640\uFE0F"],"","",["woman-facepalming"],47,0,5,0],
		"1f926-200d-2642-fe0f":[["\uD83E\uDD26\u200D\u2642\uFE0F"],"","",["man-facepalming"],47,6,5,0],
		"1f937-200d-2640-fe0f":[["\uD83E\uDD37\u200D\u2640\uFE0F"],"","",["woman-shrugging"],47,12,5,0],
		"1f937-200d-2642-fe0f":[["\uD83E\uDD37\u200D\u2642\uFE0F"],"","",["man-shrugging"],47,18,5,0],
		"1f938-200d-2640-fe0f":[["\uD83E\uDD38\u200D\u2640\uFE0F"],"","",["woman-cartwheeling"],47,24,5,0],
		"1f938-200d-2642-fe0f":[["\uD83E\uDD38\u200D\u2642\uFE0F"],"","",["man-cartwheeling"],47,30,5,0],
		"1f939-200d-2640-fe0f":[["\uD83E\uDD39\u200D\u2640\uFE0F"],"","",["woman-juggling"],47,36,5,0],
		"1f939-200d-2642-fe0f":[["\uD83E\uDD39\u200D\u2642\uFE0F"],"","",["man-juggling"],47,42,5,0],
		"1f93c-200d-2640-fe0f":[["\uD83E\uDD3C\u200D\u2640\uFE0F"],"","",["woman-wrestling"],47,48,5,0],
		"1f93c-200d-2642-fe0f":[["\uD83E\uDD3C\u200D\u2642\uFE0F"],"","",["man-wrestling"],48,0,5,0],
		"1f93d-200d-2640-fe0f":[["\uD83E\uDD3D\u200D\u2640\uFE0F"],"","",["woman-playing-water-polo"],48,1,5,0],
		"1f93d-200d-2642-fe0f":[["\uD83E\uDD3D\u200D\u2642\uFE0F"],"","",["man-playing-water-polo"],48,7,5,0],
		"1f93e-200d-2640-fe0f":[["\uD83E\uDD3E\u200D\u2640\uFE0F"],"","",["woman-playing-handball"],48,13,5,0],
		"1f93e-200d-2642-fe0f":[["\uD83E\uDD3E\u200D\u2642\uFE0F"],"","",["man-playing-handball"],48,19,5,0],
		"26f9-fe0f-200d-2640-fe0f":[["\u26F9\uFE0F\u200D\u2640\uFE0F"],"","",["woman-bouncing-ball"],48,25,5,0],
		"26f9-fe0f-200d-2642-fe0f":[["\u26F9\uFE0F\u200D\u2642\uFE0F","\u26F9\uFE0F","\u26F9"],"","",["man-bouncing-ball","person_with_ball"],48,31,5,0]
	};
	/** @private */
	emoji.prototype.emoticons_data = {
		"<3":"heart",
		":o)":"monkey_face",
		"<\/3":"broken_heart",
		"=)":"smiley",
		"=-)":"smiley",
		"C:":"smile",
		"c:":"smile",
		":D":"smile",
		":-D":"smile",
		":>":"laughing",
		":->":"laughing",
		";)":"wink",
		";-)":"wink",
		"8)":"sunglasses",
		":|":"neutral_face",
		":-|":"neutral_face",
		":\\":"confused",
		":-\\":"confused",
		":\/":"confused",
		":-\/":"confused",
		":*":"kissing_heart",
		":-*":"kissing_heart",
		":p":"stuck_out_tongue",
		":-p":"stuck_out_tongue",
		":P":"stuck_out_tongue",
		":-P":"stuck_out_tongue",
		":b":"stuck_out_tongue",
		":-b":"stuck_out_tongue",
		";p":"stuck_out_tongue_winking_eye",
		";-p":"stuck_out_tongue_winking_eye",
		";b":"stuck_out_tongue_winking_eye",
		";-b":"stuck_out_tongue_winking_eye",
		";P":"stuck_out_tongue_winking_eye",
		";-P":"stuck_out_tongue_winking_eye",
		"):":"disappointed",
		":(":"disappointed",
		":-(":"disappointed",
		">:(":"angry",
		">:-(":"angry",
		":'(":"cry",
		"D:":"anguished",
		":o":"open_mouth",
		":-o":"open_mouth",
		":O":"open_mouth",
		":-O":"open_mouth",
		":)":"slightly_smiling_face",
		"(:":"slightly_smiling_face",
		":-)":"slightly_smiling_face"
	};
	/** @private */
	emoji.prototype.variations_data = {
		"261d":{"1f3fb":["261d-1f3fb",1,3,63,["\u261D\uD83C\uDFFB"]],"1f3fc":["261d-1f3fc",1,4,63,["\u261D\uD83C\uDFFC"]],"1f3fd":["261d-1f3fd",1,5,63,["\u261D\uD83C\uDFFD"]],"1f3fe":["261d-1f3fe",1,6,63,["\u261D\uD83C\uDFFE"]],"1f3ff":["261d-1f3ff",1,7,63,["\u261D\uD83C\uDFFF"]]},
		"270a":{"1f3fb":["270a-1f3fb",2,38,63,["\u270A\uD83C\uDFFB"]],"1f3fc":["270a-1f3fc",2,39,63,["\u270A\uD83C\uDFFC"]],"1f3fd":["270a-1f3fd",2,40,63,["\u270A\uD83C\uDFFD"]],"1f3fe":["270a-1f3fe",2,41,63,["\u270A\uD83C\uDFFE"]],"1f3ff":["270a-1f3ff",2,42,63,["\u270A\uD83C\uDFFF"]]},
		"270b":{"1f3fb":["270b-1f3fb",2,44,63,["\u270B\uD83C\uDFFB"]],"1f3fc":["270b-1f3fc",2,45,63,["\u270B\uD83C\uDFFC"]],"1f3fd":["270b-1f3fd",2,46,63,["\u270B\uD83C\uDFFD"]],"1f3fe":["270b-1f3fe",2,47,63,["\u270B\uD83C\uDFFE"]],"1f3ff":["270b-1f3ff",2,48,63,["\u270B\uD83C\uDFFF"]]},
		"270c":{"1f3fb":["270c-1f3fb",3,1,63,["\u270C\uD83C\uDFFB"]],"1f3fc":["270c-1f3fc",3,2,63,["\u270C\uD83C\uDFFC"]],"1f3fd":["270c-1f3fd",3,3,63,["\u270C\uD83C\uDFFD"]],"1f3fe":["270c-1f3fe",3,4,63,["\u270C\uD83C\uDFFE"]],"1f3ff":["270c-1f3ff",3,5,63,["\u270C\uD83C\uDFFF"]]},
		"270d":{"1f3fb":["270d-1f3fb",3,7,31,["\u270D\uD83C\uDFFB"]],"1f3fc":["270d-1f3fc",3,8,31,["\u270D\uD83C\uDFFC"]],"1f3fd":["270d-1f3fd",3,9,31,["\u270D\uD83C\uDFFD"]],"1f3fe":["270d-1f3fe",3,10,31,["\u270D\uD83C\uDFFE"]],"1f3ff":["270d-1f3ff",3,11,31,["\u270D\uD83C\uDFFF"]]},
		"1f385":{"1f3fb":["1f385-1f3fb",7,18,63,["\uD83C\uDF85\uD83C\uDFFB"]],"1f3fc":["1f385-1f3fc",7,19,63,["\uD83C\uDF85\uD83C\uDFFC"]],"1f3fd":["1f385-1f3fd",7,20,63,["\uD83C\uDF85\uD83C\uDFFD"]],"1f3fe":["1f385-1f3fe",7,21,63,["\uD83C\uDF85\uD83C\uDFFE"]],"1f3ff":["1f385-1f3ff",7,22,63,["\uD83C\uDF85\uD83C\uDFFF"]]},
		"1f3c2":{"1f3fb":["1f3c2-1f3fb",8,30,53,["\uD83C\uDFC2\uD83C\uDFFB"]],"1f3fc":["1f3c2-1f3fc",8,31,53,["\uD83C\uDFC2\uD83C\uDFFC"]],"1f3fd":["1f3c2-1f3fd",8,32,53,["\uD83C\uDFC2\uD83C\uDFFD"]],"1f3fe":["1f3c2-1f3fe",8,33,53,["\uD83C\uDFC2\uD83C\uDFFE"]],"1f3ff":["1f3c2-1f3ff",8,34,53,["\uD83C\uDFC2\uD83C\uDFFF"]]},
		"1f3c7":{"1f3fb":["1f3c7-1f3fb",9,1,61,["\uD83C\uDFC7\uD83C\uDFFB"]],"1f3fc":["1f3c7-1f3fc",9,2,61,["\uD83C\uDFC7\uD83C\uDFFC"]],"1f3fd":["1f3c7-1f3fd",9,3,61,["\uD83C\uDFC7\uD83C\uDFFD"]],"1f3fe":["1f3c7-1f3fe",9,4,61,["\uD83C\uDFC7\uD83C\uDFFE"]],"1f3ff":["1f3c7-1f3ff",9,5,61,["\uD83C\uDFC7\uD83C\uDFFF"]]},
		"1f442":{"1f3fb":["1f442-1f3fb",11,43,63,["\uD83D\uDC42\uD83C\uDFFB"]],"1f3fc":["1f442-1f3fc",11,44,63,["\uD83D\uDC42\uD83C\uDFFC"]],"1f3fd":["1f442-1f3fd",11,45,63,["\uD83D\uDC42\uD83C\uDFFD"]],"1f3fe":["1f442-1f3fe",11,46,63,["\uD83D\uDC42\uD83C\uDFFE"]],"1f3ff":["1f442-1f3ff",11,47,63,["\uD83D\uDC42\uD83C\uDFFF"]]},
		"1f443":{"1f3fb":["1f443-1f3fb",12,0,63,["\uD83D\uDC43\uD83C\uDFFB"]],"1f3fc":["1f443-1f3fc",12,1,63,["\uD83D\uDC43\uD83C\uDFFC"]],"1f3fd":["1f443-1f3fd",12,2,63,["\uD83D\uDC43\uD83C\uDFFD"]],"1f3fe":["1f443-1f3fe",12,3,63,["\uD83D\uDC43\uD83C\uDFFE"]],"1f3ff":["1f443-1f3ff",12,4,63,["\uD83D\uDC43\uD83C\uDFFF"]]},
		"1f446":{"1f3fb":["1f446-1f3fb",12,8,63,["\uD83D\uDC46\uD83C\uDFFB"]],"1f3fc":["1f446-1f3fc",12,9,63,["\uD83D\uDC46\uD83C\uDFFC"]],"1f3fd":["1f446-1f3fd",12,10,63,["\uD83D\uDC46\uD83C\uDFFD"]],"1f3fe":["1f446-1f3fe",12,11,63,["\uD83D\uDC46\uD83C\uDFFE"]],"1f3ff":["1f446-1f3ff",12,12,63,["\uD83D\uDC46\uD83C\uDFFF"]]},
		"1f447":{"1f3fb":["1f447-1f3fb",12,14,63,["\uD83D\uDC47\uD83C\uDFFB"]],"1f3fc":["1f447-1f3fc",12,15,63,["\uD83D\uDC47\uD83C\uDFFC"]],"1f3fd":["1f447-1f3fd",12,16,63,["\uD83D\uDC47\uD83C\uDFFD"]],"1f3fe":["1f447-1f3fe",12,17,63,["\uD83D\uDC47\uD83C\uDFFE"]],"1f3ff":["1f447-1f3ff",12,18,63,["\uD83D\uDC47\uD83C\uDFFF"]]},
		"1f448":{"1f3fb":["1f448-1f3fb",12,20,63,["\uD83D\uDC48\uD83C\uDFFB"]],"1f3fc":["1f448-1f3fc",12,21,63,["\uD83D\uDC48\uD83C\uDFFC"]],"1f3fd":["1f448-1f3fd",12,22,63,["\uD83D\uDC48\uD83C\uDFFD"]],"1f3fe":["1f448-1f3fe",12,23,63,["\uD83D\uDC48\uD83C\uDFFE"]],"1f3ff":["1f448-1f3ff",12,24,63,["\uD83D\uDC48\uD83C\uDFFF"]]},
		"1f449":{"1f3fb":["1f449-1f3fb",12,26,63,["\uD83D\uDC49\uD83C\uDFFB"]],"1f3fc":["1f449-1f3fc",12,27,63,["\uD83D\uDC49\uD83C\uDFFC"]],"1f3fd":["1f449-1f3fd",12,28,63,["\uD83D\uDC49\uD83C\uDFFD"]],"1f3fe":["1f449-1f3fe",12,29,63,["\uD83D\uDC49\uD83C\uDFFE"]],"1f3ff":["1f449-1f3ff",12,30,63,["\uD83D\uDC49\uD83C\uDFFF"]]},
		"1f44a":{"1f3fb":["1f44a-1f3fb",12,32,63,["\uD83D\uDC4A\uD83C\uDFFB"]],"1f3fc":["1f44a-1f3fc",12,33,63,["\uD83D\uDC4A\uD83C\uDFFC"]],"1f3fd":["1f44a-1f3fd",12,34,63,["\uD83D\uDC4A\uD83C\uDFFD"]],"1f3fe":["1f44a-1f3fe",12,35,63,["\uD83D\uDC4A\uD83C\uDFFE"]],"1f3ff":["1f44a-1f3ff",12,36,63,["\uD83D\uDC4A\uD83C\uDFFF"]]},
		"1f44b":{"1f3fb":["1f44b-1f3fb",12,38,63,["\uD83D\uDC4B\uD83C\uDFFB"]],"1f3fc":["1f44b-1f3fc",12,39,63,["\uD83D\uDC4B\uD83C\uDFFC"]],"1f3fd":["1f44b-1f3fd",12,40,63,["\uD83D\uDC4B\uD83C\uDFFD"]],"1f3fe":["1f44b-1f3fe",12,41,63,["\uD83D\uDC4B\uD83C\uDFFE"]],"1f3ff":["1f44b-1f3ff",12,42,63,["\uD83D\uDC4B\uD83C\uDFFF"]]},
		"1f44c":{"1f3fb":["1f44c-1f3fb",12,44,63,["\uD83D\uDC4C\uD83C\uDFFB"]],"1f3fc":["1f44c-1f3fc",12,45,63,["\uD83D\uDC4C\uD83C\uDFFC"]],"1f3fd":["1f44c-1f3fd",12,46,63,["\uD83D\uDC4C\uD83C\uDFFD"]],"1f3fe":["1f44c-1f3fe",12,47,63,["\uD83D\uDC4C\uD83C\uDFFE"]],"1f3ff":["1f44c-1f3ff",12,48,63,["\uD83D\uDC4C\uD83C\uDFFF"]]},
		"1f44d":{"1f3fb":["1f44d-1f3fb",13,1,63,["\uD83D\uDC4D\uD83C\uDFFB"]],"1f3fc":["1f44d-1f3fc",13,2,63,["\uD83D\uDC4D\uD83C\uDFFC"]],"1f3fd":["1f44d-1f3fd",13,3,63,["\uD83D\uDC4D\uD83C\uDFFD"]],"1f3fe":["1f44d-1f3fe",13,4,63,["\uD83D\uDC4D\uD83C\uDFFE"]],"1f3ff":["1f44d-1f3ff",13,5,63,["\uD83D\uDC4D\uD83C\uDFFF"]]},
		"1f44e":{"1f3fb":["1f44e-1f3fb",13,7,63,["\uD83D\uDC4E\uD83C\uDFFB"]],"1f3fc":["1f44e-1f3fc",13,8,63,["\uD83D\uDC4E\uD83C\uDFFC"]],"1f3fd":["1f44e-1f3fd",13,9,63,["\uD83D\uDC4E\uD83C\uDFFD"]],"1f3fe":["1f44e-1f3fe",13,10,63,["\uD83D\uDC4E\uD83C\uDFFE"]],"1f3ff":["1f44e-1f3ff",13,11,63,["\uD83D\uDC4E\uD83C\uDFFF"]]},
		"1f44f":{"1f3fb":["1f44f-1f3fb",13,13,63,["\uD83D\uDC4F\uD83C\uDFFB"]],"1f3fc":["1f44f-1f3fc",13,14,63,["\uD83D\uDC4F\uD83C\uDFFC"]],"1f3fd":["1f44f-1f3fd",13,15,63,["\uD83D\uDC4F\uD83C\uDFFD"]],"1f3fe":["1f44f-1f3fe",13,16,63,["\uD83D\uDC4F\uD83C\uDFFE"]],"1f3ff":["1f44f-1f3ff",13,17,63,["\uD83D\uDC4F\uD83C\uDFFF"]]},
		"1f450":{"1f3fb":["1f450-1f3fb",13,19,63,["\uD83D\uDC50\uD83C\uDFFB"]],"1f3fc":["1f450-1f3fc",13,20,63,["\uD83D\uDC50\uD83C\uDFFC"]],"1f3fd":["1f450-1f3fd",13,21,63,["\uD83D\uDC50\uD83C\uDFFD"]],"1f3fe":["1f450-1f3fe",13,22,63,["\uD83D\uDC50\uD83C\uDFFE"]],"1f3ff":["1f450-1f3ff",13,23,63,["\uD83D\uDC50\uD83C\uDFFF"]]},
		"1f466":{"1f3fb":["1f466-1f3fb",13,46,63,["\uD83D\uDC66\uD83C\uDFFB"]],"1f3fc":["1f466-1f3fc",13,47,63,["\uD83D\uDC66\uD83C\uDFFC"]],"1f3fd":["1f466-1f3fd",13,48,63,["\uD83D\uDC66\uD83C\uDFFD"]],"1f3fe":["1f466-1f3fe",14,0,63,["\uD83D\uDC66\uD83C\uDFFE"]],"1f3ff":["1f466-1f3ff",14,1,63,["\uD83D\uDC66\uD83C\uDFFF"]]},
		"1f467":{"1f3fb":["1f467-1f3fb",14,3,63,["\uD83D\uDC67\uD83C\uDFFB"]],"1f3fc":["1f467-1f3fc",14,4,63,["\uD83D\uDC67\uD83C\uDFFC"]],"1f3fd":["1f467-1f3fd",14,5,63,["\uD83D\uDC67\uD83C\uDFFD"]],"1f3fe":["1f467-1f3fe",14,6,63,["\uD83D\uDC67\uD83C\uDFFE"]],"1f3ff":["1f467-1f3ff",14,7,63,["\uD83D\uDC67\uD83C\uDFFF"]]},
		"1f468":{"1f3fb":["1f468-1f3fb",14,9,63,["\uD83D\uDC68\uD83C\uDFFB"]],"1f3fc":["1f468-1f3fc",14,10,63,["\uD83D\uDC68\uD83C\uDFFC"]],"1f3fd":["1f468-1f3fd",14,11,63,["\uD83D\uDC68\uD83C\uDFFD"]],"1f3fe":["1f468-1f3fe",14,12,63,["\uD83D\uDC68\uD83C\uDFFE"]],"1f3ff":["1f468-1f3ff",14,13,63,["\uD83D\uDC68\uD83C\uDFFF"]]},
		"1f469":{"1f3fb":["1f469-1f3fb",14,15,63,["\uD83D\uDC69\uD83C\uDFFB"]],"1f3fc":["1f469-1f3fc",14,16,63,["\uD83D\uDC69\uD83C\uDFFC"]],"1f3fd":["1f469-1f3fd",14,17,63,["\uD83D\uDC69\uD83C\uDFFD"]],"1f3fe":["1f469-1f3fe",14,18,63,["\uD83D\uDC69\uD83C\uDFFE"]],"1f3ff":["1f469-1f3ff",14,19,63,["\uD83D\uDC69\uD83C\uDFFF"]]},
		"1f470":{"1f3fb":["1f470-1f3fb",14,32,63,["\uD83D\uDC70\uD83C\uDFFB"]],"1f3fc":["1f470-1f3fc",14,33,63,["\uD83D\uDC70\uD83C\uDFFC"]],"1f3fd":["1f470-1f3fd",14,34,63,["\uD83D\uDC70\uD83C\uDFFD"]],"1f3fe":["1f470-1f3fe",14,35,63,["\uD83D\uDC70\uD83C\uDFFE"]],"1f3ff":["1f470-1f3ff",14,36,63,["\uD83D\uDC70\uD83C\uDFFF"]]},
		"1f472":{"1f3fb":["1f472-1f3fb",14,44,63,["\uD83D\uDC72\uD83C\uDFFB"]],"1f3fc":["1f472-1f3fc",14,45,63,["\uD83D\uDC72\uD83C\uDFFC"]],"1f3fd":["1f472-1f3fd",14,46,63,["\uD83D\uDC72\uD83C\uDFFD"]],"1f3fe":["1f472-1f3fe",14,47,63,["\uD83D\uDC72\uD83C\uDFFE"]],"1f3ff":["1f472-1f3ff",14,48,63,["\uD83D\uDC72\uD83C\uDFFF"]]},
		"1f474":{"1f3fb":["1f474-1f3fb",15,7,63,["\uD83D\uDC74\uD83C\uDFFB"]],"1f3fc":["1f474-1f3fc",15,8,63,["\uD83D\uDC74\uD83C\uDFFC"]],"1f3fd":["1f474-1f3fd",15,9,63,["\uD83D\uDC74\uD83C\uDFFD"]],"1f3fe":["1f474-1f3fe",15,10,63,["\uD83D\uDC74\uD83C\uDFFE"]],"1f3ff":["1f474-1f3ff",15,11,63,["\uD83D\uDC74\uD83C\uDFFF"]]},
		"1f475":{"1f3fb":["1f475-1f3fb",15,13,63,["\uD83D\uDC75\uD83C\uDFFB"]],"1f3fc":["1f475-1f3fc",15,14,63,["\uD83D\uDC75\uD83C\uDFFC"]],"1f3fd":["1f475-1f3fd",15,15,63,["\uD83D\uDC75\uD83C\uDFFD"]],"1f3fe":["1f475-1f3fe",15,16,63,["\uD83D\uDC75\uD83C\uDFFE"]],"1f3ff":["1f475-1f3ff",15,17,63,["\uD83D\uDC75\uD83C\uDFFF"]]},
		"1f476":{"1f3fb":["1f476-1f3fb",15,19,63,["\uD83D\uDC76\uD83C\uDFFB"]],"1f3fc":["1f476-1f3fc",15,20,63,["\uD83D\uDC76\uD83C\uDFFC"]],"1f3fd":["1f476-1f3fd",15,21,63,["\uD83D\uDC76\uD83C\uDFFD"]],"1f3fe":["1f476-1f3fe",15,22,63,["\uD83D\uDC76\uD83C\uDFFE"]],"1f3ff":["1f476-1f3ff",15,23,63,["\uD83D\uDC76\uD83C\uDFFF"]]},
		"1f478":{"1f3fb":["1f478-1f3fb",15,31,63,["\uD83D\uDC78\uD83C\uDFFB"]],"1f3fc":["1f478-1f3fc",15,32,63,["\uD83D\uDC78\uD83C\uDFFC"]],"1f3fd":["1f478-1f3fd",15,33,63,["\uD83D\uDC78\uD83C\uDFFD"]],"1f3fe":["1f478-1f3fe",15,34,63,["\uD83D\uDC78\uD83C\uDFFE"]],"1f3ff":["1f478-1f3ff",15,35,63,["\uD83D\uDC78\uD83C\uDFFF"]]},
		"1f47c":{"1f3fb":["1f47c-1f3fb",15,40,63,["\uD83D\uDC7C\uD83C\uDFFB"]],"1f3fc":["1f47c-1f3fc",15,41,63,["\uD83D\uDC7C\uD83C\uDFFC"]],"1f3fd":["1f47c-1f3fd",15,42,63,["\uD83D\uDC7C\uD83C\uDFFD"]],"1f3fe":["1f47c-1f3fe",15,43,63,["\uD83D\uDC7C\uD83C\uDFFE"]],"1f3ff":["1f47c-1f3ff",15,44,63,["\uD83D\uDC7C\uD83C\uDFFF"]]},
		"1f483":{"1f3fb":["1f483-1f3fb",16,13,63,["\uD83D\uDC83\uD83C\uDFFB"]],"1f3fc":["1f483-1f3fc",16,14,63,["\uD83D\uDC83\uD83C\uDFFC"]],"1f3fd":["1f483-1f3fd",16,15,63,["\uD83D\uDC83\uD83C\uDFFD"]],"1f3fe":["1f483-1f3fe",16,16,63,["\uD83D\uDC83\uD83C\uDFFE"]],"1f3ff":["1f483-1f3ff",16,17,63,["\uD83D\uDC83\uD83C\uDFFF"]]},
		"1f485":{"1f3fb":["1f485-1f3fb",16,20,63,["\uD83D\uDC85\uD83C\uDFFB"]],"1f3fc":["1f485-1f3fc",16,21,63,["\uD83D\uDC85\uD83C\uDFFC"]],"1f3fd":["1f485-1f3fd",16,22,63,["\uD83D\uDC85\uD83C\uDFFD"]],"1f3fe":["1f485-1f3fe",16,23,63,["\uD83D\uDC85\uD83C\uDFFE"]],"1f3ff":["1f485-1f3ff",16,24,63,["\uD83D\uDC85\uD83C\uDFFF"]]},
		"1f4aa":{"1f3fb":["1f4aa-1f3fb",17,23,63,["\uD83D\uDCAA\uD83C\uDFFB"]],"1f3fc":["1f4aa-1f3fc",17,24,63,["\uD83D\uDCAA\uD83C\uDFFC"]],"1f3fd":["1f4aa-1f3fd",17,25,63,["\uD83D\uDCAA\uD83C\uDFFD"]],"1f3fe":["1f4aa-1f3fe",17,26,63,["\uD83D\uDCAA\uD83C\uDFFE"]],"1f3ff":["1f4aa-1f3ff",17,27,63,["\uD83D\uDCAA\uD83C\uDFFF"]]},
		"1f574":{"1f3fb":["1f574-1f3fb",21,12,21,["\uD83D\uDD74\uD83C\uDFFB"]],"1f3fc":["1f574-1f3fc",21,13,21,["\uD83D\uDD74\uD83C\uDFFC"]],"1f3fd":["1f574-1f3fd",21,14,21,["\uD83D\uDD74\uD83C\uDFFD"]],"1f3fe":["1f574-1f3fe",21,15,21,["\uD83D\uDD74\uD83C\uDFFE"]],"1f3ff":["1f574-1f3ff",21,16,21,["\uD83D\uDD74\uD83C\uDFFF"]]},
		"1f57a":{"1f3fb":["1f57a-1f3fb",21,28,31,["\uD83D\uDD7A\uD83C\uDFFB"]],"1f3fc":["1f57a-1f3fc",21,29,31,["\uD83D\uDD7A\uD83C\uDFFC"]],"1f3fd":["1f57a-1f3fd",21,30,31,["\uD83D\uDD7A\uD83C\uDFFD"]],"1f3fe":["1f57a-1f3fe",21,31,31,["\uD83D\uDD7A\uD83C\uDFFE"]],"1f3ff":["1f57a-1f3ff",21,32,31,["\uD83D\uDD7A\uD83C\uDFFF"]]},
		"1f590":{"1f3fb":["1f590-1f3fb",21,39,31,["\uD83D\uDD90\uD83C\uDFFB"]],"1f3fc":["1f590-1f3fc",21,40,31,["\uD83D\uDD90\uD83C\uDFFC"]],"1f3fd":["1f590-1f3fd",21,41,31,["\uD83D\uDD90\uD83C\uDFFD"]],"1f3fe":["1f590-1f3fe",21,42,31,["\uD83D\uDD90\uD83C\uDFFE"]],"1f3ff":["1f590-1f3ff",21,43,31,["\uD83D\uDD90\uD83C\uDFFF"]]},
		"1f595":{"1f3fb":["1f595-1f3fb",21,45,31,["\uD83D\uDD95\uD83C\uDFFB"]],"1f3fc":["1f595-1f3fc",21,46,31,["\uD83D\uDD95\uD83C\uDFFC"]],"1f3fd":["1f595-1f3fd",21,47,31,["\uD83D\uDD95\uD83C\uDFFD"]],"1f3fe":["1f595-1f3fe",21,48,31,["\uD83D\uDD95\uD83C\uDFFE"]],"1f3ff":["1f595-1f3ff",22,0,31,["\uD83D\uDD95\uD83C\uDFFF"]]},
		"1f596":{"1f3fb":["1f596-1f3fb",22,2,31,["\uD83D\uDD96\uD83C\uDFFB"]],"1f3fc":["1f596-1f3fc",22,3,31,["\uD83D\uDD96\uD83C\uDFFC"]],"1f3fd":["1f596-1f3fd",22,4,31,["\uD83D\uDD96\uD83C\uDFFD"]],"1f3fe":["1f596-1f3fe",22,5,31,["\uD83D\uDD96\uD83C\uDFFE"]],"1f3ff":["1f596-1f3ff",22,6,31,["\uD83D\uDD96\uD83C\uDFFF"]]},
		"1f64c":{"1f3fb":["1f64c-1f3fb",24,32,63,["\uD83D\uDE4C\uD83C\uDFFB"]],"1f3fc":["1f64c-1f3fc",24,33,63,["\uD83D\uDE4C\uD83C\uDFFC"]],"1f3fd":["1f64c-1f3fd",24,34,63,["\uD83D\uDE4C\uD83C\uDFFD"]],"1f3fe":["1f64c-1f3fe",24,35,63,["\uD83D\uDE4C\uD83C\uDFFE"]],"1f3ff":["1f64c-1f3ff",24,36,63,["\uD83D\uDE4C\uD83C\uDFFF"]]},
		"1f64f":{"1f3fb":["1f64f-1f3fb",25,1,63,["\uD83D\uDE4F\uD83C\uDFFB"]],"1f3fc":["1f64f-1f3fc",25,2,63,["\uD83D\uDE4F\uD83C\uDFFC"]],"1f3fd":["1f64f-1f3fd",25,3,63,["\uD83D\uDE4F\uD83C\uDFFD"]],"1f3fe":["1f64f-1f3fe",25,4,63,["\uD83D\uDE4F\uD83C\uDFFE"]],"1f3ff":["1f64f-1f3ff",25,5,63,["\uD83D\uDE4F\uD83C\uDFFF"]]},
		"1f6c0":{"1f3fb":["1f6c0-1f3fb",26,42,63,["\uD83D\uDEC0\uD83C\uDFFB"]],"1f3fc":["1f6c0-1f3fc",26,43,63,["\uD83D\uDEC0\uD83C\uDFFC"]],"1f3fd":["1f6c0-1f3fd",26,44,63,["\uD83D\uDEC0\uD83C\uDFFD"]],"1f3fe":["1f6c0-1f3fe",26,45,63,["\uD83D\uDEC0\uD83C\uDFFE"]],"1f3ff":["1f6c0-1f3ff",26,46,63,["\uD83D\uDEC0\uD83C\uDFFF"]]},
		"1f6cc":{"1f3fb":["1f6cc-1f3fb",27,5,21,["\uD83D\uDECC\uD83C\uDFFB"]],"1f3fc":["1f6cc-1f3fc",27,6,21,["\uD83D\uDECC\uD83C\uDFFC"]],"1f3fd":["1f6cc-1f3fd",27,7,21,["\uD83D\uDECC\uD83C\uDFFD"]],"1f3fe":["1f6cc-1f3fe",27,8,21,["\uD83D\uDECC\uD83C\uDFFE"]],"1f3ff":["1f6cc-1f3ff",27,9,21,["\uD83D\uDECC\uD83C\uDFFF"]]},
		"1f918":{"1f3fb":["1f918-1f3fb",27,39,31,["\uD83E\uDD18\uD83C\uDFFB"]],"1f3fc":["1f918-1f3fc",27,40,31,["\uD83E\uDD18\uD83C\uDFFC"]],"1f3fd":["1f918-1f3fd",27,41,31,["\uD83E\uDD18\uD83C\uDFFD"]],"1f3fe":["1f918-1f3fe",27,42,31,["\uD83E\uDD18\uD83C\uDFFE"]],"1f3ff":["1f918-1f3ff",27,43,31,["\uD83E\uDD18\uD83C\uDFFF"]]},
		"1f919":{"1f3fb":["1f919-1f3fb",27,45,31,["\uD83E\uDD19\uD83C\uDFFB"]],"1f3fc":["1f919-1f3fc",27,46,31,["\uD83E\uDD19\uD83C\uDFFC"]],"1f3fd":["1f919-1f3fd",27,47,31,["\uD83E\uDD19\uD83C\uDFFD"]],"1f3fe":["1f919-1f3fe",27,48,31,["\uD83E\uDD19\uD83C\uDFFE"]],"1f3ff":["1f919-1f3ff",28,0,31,["\uD83E\uDD19\uD83C\uDFFF"]]},
		"1f91a":{"1f3fb":["1f91a-1f3fb",28,2,31,["\uD83E\uDD1A\uD83C\uDFFB"]],"1f3fc":["1f91a-1f3fc",28,3,31,["\uD83E\uDD1A\uD83C\uDFFC"]],"1f3fd":["1f91a-1f3fd",28,4,31,["\uD83E\uDD1A\uD83C\uDFFD"]],"1f3fe":["1f91a-1f3fe",28,5,31,["\uD83E\uDD1A\uD83C\uDFFE"]],"1f3ff":["1f91a-1f3ff",28,6,31,["\uD83E\uDD1A\uD83C\uDFFF"]]},
		"1f91b":{"1f3fb":["1f91b-1f3fb",28,8,31,["\uD83E\uDD1B\uD83C\uDFFB"]],"1f3fc":["1f91b-1f3fc",28,9,31,["\uD83E\uDD1B\uD83C\uDFFC"]],"1f3fd":["1f91b-1f3fd",28,10,31,["\uD83E\uDD1B\uD83C\uDFFD"]],"1f3fe":["1f91b-1f3fe",28,11,31,["\uD83E\uDD1B\uD83C\uDFFE"]],"1f3ff":["1f91b-1f3ff",28,12,31,["\uD83E\uDD1B\uD83C\uDFFF"]]},
		"1f91c":{"1f3fb":["1f91c-1f3fb",28,14,31,["\uD83E\uDD1C\uD83C\uDFFB"]],"1f3fc":["1f91c-1f3fc",28,15,31,["\uD83E\uDD1C\uD83C\uDFFC"]],"1f3fd":["1f91c-1f3fd",28,16,31,["\uD83E\uDD1C\uD83C\uDFFD"]],"1f3fe":["1f91c-1f3fe",28,17,31,["\uD83E\uDD1C\uD83C\uDFFE"]],"1f3ff":["1f91c-1f3ff",28,18,31,["\uD83E\uDD1C\uD83C\uDFFF"]]},
		"1f91e":{"1f3fb":["1f91e-1f3fb",28,21,31,["\uD83E\uDD1E\uD83C\uDFFB"]],"1f3fc":["1f91e-1f3fc",28,22,31,["\uD83E\uDD1E\uD83C\uDFFC"]],"1f3fd":["1f91e-1f3fd",28,23,31,["\uD83E\uDD1E\uD83C\uDFFD"]],"1f3fe":["1f91e-1f3fe",28,24,31,["\uD83E\uDD1E\uD83C\uDFFE"]],"1f3ff":["1f91e-1f3ff",28,25,31,["\uD83E\uDD1E\uD83C\uDFFF"]]},
		"1f926":{"1f3fb":["1f926-1f3fb",28,33,31,["\uD83E\uDD26\uD83C\uDFFB"]],"1f3fc":["1f926-1f3fc",28,34,31,["\uD83E\uDD26\uD83C\uDFFC"]],"1f3fd":["1f926-1f3fd",28,35,31,["\uD83E\uDD26\uD83C\uDFFD"]],"1f3fe":["1f926-1f3fe",28,36,31,["\uD83E\uDD26\uD83C\uDFFE"]],"1f3ff":["1f926-1f3ff",28,37,31,["\uD83E\uDD26\uD83C\uDFFF"]]},
		"1f930":{"1f3fb":["1f930-1f3fb",28,40,31,["\uD83E\uDD30\uD83C\uDFFB"]],"1f3fc":["1f930-1f3fc",28,41,31,["\uD83E\uDD30\uD83C\uDFFC"]],"1f3fd":["1f930-1f3fd",28,42,31,["\uD83E\uDD30\uD83C\uDFFD"]],"1f3fe":["1f930-1f3fe",28,43,31,["\uD83E\uDD30\uD83C\uDFFE"]],"1f3ff":["1f930-1f3ff",28,44,31,["\uD83E\uDD30\uD83C\uDFFF"]]},
		"1f933":{"1f3fb":["1f933-1f3fb",28,46,31,["\uD83E\uDD33\uD83C\uDFFB"]],"1f3fc":["1f933-1f3fc",28,47,31,["\uD83E\uDD33\uD83C\uDFFC"]],"1f3fd":["1f933-1f3fd",28,48,31,["\uD83E\uDD33\uD83C\uDFFD"]],"1f3fe":["1f933-1f3fe",29,0,31,["\uD83E\uDD33\uD83C\uDFFE"]],"1f3ff":["1f933-1f3ff",29,1,31,["\uD83E\uDD33\uD83C\uDFFF"]]},
		"1f934":{"1f3fb":["1f934-1f3fb",29,3,31,["\uD83E\uDD34\uD83C\uDFFB"]],"1f3fc":["1f934-1f3fc",29,4,31,["\uD83E\uDD34\uD83C\uDFFC"]],"1f3fd":["1f934-1f3fd",29,5,31,["\uD83E\uDD34\uD83C\uDFFD"]],"1f3fe":["1f934-1f3fe",29,6,31,["\uD83E\uDD34\uD83C\uDFFE"]],"1f3ff":["1f934-1f3ff",29,7,31,["\uD83E\uDD34\uD83C\uDFFF"]]},
		"1f935":{"1f3fb":["1f935-1f3fb",29,9,31,["\uD83E\uDD35\uD83C\uDFFB"]],"1f3fc":["1f935-1f3fc",29,10,31,["\uD83E\uDD35\uD83C\uDFFC"]],"1f3fd":["1f935-1f3fd",29,11,31,["\uD83E\uDD35\uD83C\uDFFD"]],"1f3fe":["1f935-1f3fe",29,12,31,["\uD83E\uDD35\uD83C\uDFFE"]],"1f3ff":["1f935-1f3ff",29,13,31,["\uD83E\uDD35\uD83C\uDFFF"]]},
		"1f936":{"1f3fb":["1f936-1f3fb",29,15,31,["\uD83E\uDD36\uD83C\uDFFB"]],"1f3fc":["1f936-1f3fc",29,16,31,["\uD83E\uDD36\uD83C\uDFFC"]],"1f3fd":["1f936-1f3fd",29,17,31,["\uD83E\uDD36\uD83C\uDFFD"]],"1f3fe":["1f936-1f3fe",29,18,31,["\uD83E\uDD36\uD83C\uDFFE"]],"1f3ff":["1f936-1f3ff",29,19,31,["\uD83E\uDD36\uD83C\uDFFF"]]},
		"1f937":{"1f3fb":["1f937-1f3fb",29,21,31,["\uD83E\uDD37\uD83C\uDFFB"]],"1f3fc":["1f937-1f3fc",29,22,31,["\uD83E\uDD37\uD83C\uDFFC"]],"1f3fd":["1f937-1f3fd",29,23,31,["\uD83E\uDD37\uD83C\uDFFD"]],"1f3fe":["1f937-1f3fe",29,24,31,["\uD83E\uDD37\uD83C\uDFFE"]],"1f3ff":["1f937-1f3ff",29,25,31,["\uD83E\uDD37\uD83C\uDFFF"]]},
		"1f938":{"1f3fb":["1f938-1f3fb",29,27,31,["\uD83E\uDD38\uD83C\uDFFB"]],"1f3fc":["1f938-1f3fc",29,28,31,["\uD83E\uDD38\uD83C\uDFFC"]],"1f3fd":["1f938-1f3fd",29,29,31,["\uD83E\uDD38\uD83C\uDFFD"]],"1f3fe":["1f938-1f3fe",29,30,31,["\uD83E\uDD38\uD83C\uDFFE"]],"1f3ff":["1f938-1f3ff",29,31,31,["\uD83E\uDD38\uD83C\uDFFF"]]},
		"1f939":{"1f3fb":["1f939-1f3fb",29,33,31,["\uD83E\uDD39\uD83C\uDFFB"]],"1f3fc":["1f939-1f3fc",29,34,31,["\uD83E\uDD39\uD83C\uDFFC"]],"1f3fd":["1f939-1f3fd",29,35,31,["\uD83E\uDD39\uD83C\uDFFD"]],"1f3fe":["1f939-1f3fe",29,36,31,["\uD83E\uDD39\uD83C\uDFFE"]],"1f3ff":["1f939-1f3ff",29,37,31,["\uD83E\uDD39\uD83C\uDFFF"]]},
		"1f93d":{"1f3fb":["1f93d-1f3fb",29,41,31,["\uD83E\uDD3D\uD83C\uDFFB"]],"1f3fc":["1f93d-1f3fc",29,42,31,["\uD83E\uDD3D\uD83C\uDFFC"]],"1f3fd":["1f93d-1f3fd",29,43,31,["\uD83E\uDD3D\uD83C\uDFFD"]],"1f3fe":["1f93d-1f3fe",29,44,31,["\uD83E\uDD3D\uD83C\uDFFE"]],"1f3ff":["1f93d-1f3ff",29,45,31,["\uD83E\uDD3D\uD83C\uDFFF"]]},
		"1f93e":{"1f3fb":["1f93e-1f3fb",29,47,31,["\uD83E\uDD3E\uD83C\uDFFB"]],"1f3fc":["1f93e-1f3fc",29,48,31,["\uD83E\uDD3E\uD83C\uDFFC"]],"1f3fd":["1f93e-1f3fd",30,0,31,["\uD83E\uDD3E\uD83C\uDFFD"]],"1f3fe":["1f93e-1f3fe",30,1,31,["\uD83E\uDD3E\uD83C\uDFFE"]],"1f3ff":["1f93e-1f3ff",30,2,31,["\uD83E\uDD3E\uD83C\uDFFF"]]},
		"1f468-200d-1f33e":{"1f3fb":["1f468-1f3fb-200d-1f33e",36,25,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF3E"]],"1f3fc":["1f468-1f3fc-200d-1f33e",36,26,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF3E"]],"1f3fd":["1f468-1f3fd-200d-1f33e",36,27,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF3E"]],"1f3fe":["1f468-1f3fe-200d-1f33e",36,28,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF3E"]],"1f3ff":["1f468-1f3ff-200d-1f33e",36,29,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF3E"]]},
		"1f468-200d-1f373":{"1f3fb":["1f468-1f3fb-200d-1f373",36,31,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF73"]],"1f3fc":["1f468-1f3fc-200d-1f373",36,32,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF73"]],"1f3fd":["1f468-1f3fd-200d-1f373",36,33,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF73"]],"1f3fe":["1f468-1f3fe-200d-1f373",36,34,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF73"]],"1f3ff":["1f468-1f3ff-200d-1f373",36,35,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF73"]]},
		"1f468-200d-1f393":{"1f3fb":["1f468-1f3fb-200d-1f393",36,37,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF93"]],"1f3fc":["1f468-1f3fc-200d-1f393",36,38,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF93"]],"1f3fd":["1f468-1f3fd-200d-1f393",36,39,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF93"]],"1f3fe":["1f468-1f3fe-200d-1f393",36,40,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF93"]],"1f3ff":["1f468-1f3ff-200d-1f393",36,41,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF93"]]},
		"1f468-200d-1f3a4":{"1f3fb":["1f468-1f3fb-200d-1f3a4",36,43,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA4"]],"1f3fc":["1f468-1f3fc-200d-1f3a4",36,44,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA4"]],"1f3fd":["1f468-1f3fd-200d-1f3a4",36,45,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA4"]],"1f3fe":["1f468-1f3fe-200d-1f3a4",36,46,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA4"]],"1f3ff":["1f468-1f3ff-200d-1f3a4",36,47,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA4"]]},
		"1f468-200d-1f3a8":{"1f3fb":["1f468-1f3fb-200d-1f3a8",37,0,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA8"]],"1f3fc":["1f468-1f3fc-200d-1f3a8",37,1,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA8"]],"1f3fd":["1f468-1f3fd-200d-1f3a8",37,2,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA8"]],"1f3fe":["1f468-1f3fe-200d-1f3a8",37,3,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA8"]],"1f3ff":["1f468-1f3ff-200d-1f3a8",37,4,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA8"]]},
		"1f468-200d-1f3eb":{"1f3fb":["1f468-1f3fb-200d-1f3eb",37,6,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFEB"]],"1f3fc":["1f468-1f3fc-200d-1f3eb",37,7,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFEB"]],"1f3fd":["1f468-1f3fd-200d-1f3eb",37,8,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFEB"]],"1f3fe":["1f468-1f3fe-200d-1f3eb",37,9,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFEB"]],"1f3ff":["1f468-1f3ff-200d-1f3eb",37,10,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFEB"]]},
		"1f468-200d-1f3ed":{"1f3fb":["1f468-1f3fb-200d-1f3ed",37,12,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFED"]],"1f3fc":["1f468-1f3fc-200d-1f3ed",37,13,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFED"]],"1f3fd":["1f468-1f3fd-200d-1f3ed",37,14,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFED"]],"1f3fe":["1f468-1f3fe-200d-1f3ed",37,15,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFED"]],"1f3ff":["1f468-1f3ff-200d-1f3ed",37,16,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFED"]]},
		"1f468-200d-1f4bb":{"1f3fb":["1f468-1f3fb-200d-1f4bb",37,20,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB"]],"1f3fc":["1f468-1f3fc-200d-1f4bb",37,21,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBB"]],"1f3fd":["1f468-1f3fd-200d-1f4bb",37,22,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBB"]],"1f3fe":["1f468-1f3fe-200d-1f4bb",37,23,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBB"]],"1f3ff":["1f468-1f3ff-200d-1f4bb",37,24,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBB"]]},
		"1f468-200d-1f4bc":{"1f3fb":["1f468-1f3fb-200d-1f4bc",37,26,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBC"]],"1f3fc":["1f468-1f3fc-200d-1f4bc",37,27,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBC"]],"1f3fd":["1f468-1f3fd-200d-1f4bc",37,28,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBC"]],"1f3fe":["1f468-1f3fe-200d-1f4bc",37,29,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBC"]],"1f3ff":["1f468-1f3ff-200d-1f4bc",37,30,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBC"]]},
		"1f468-200d-1f527":{"1f3fb":["1f468-1f3fb-200d-1f527",37,32,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD27"]],"1f3fc":["1f468-1f3fc-200d-1f527",37,33,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD27"]],"1f3fd":["1f468-1f3fd-200d-1f527",37,34,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD27"]],"1f3fe":["1f468-1f3fe-200d-1f527",37,35,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD27"]],"1f3ff":["1f468-1f3ff-200d-1f527",37,36,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD27"]]},
		"1f468-200d-1f52c":{"1f3fb":["1f468-1f3fb-200d-1f52c",37,38,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD2C"]],"1f3fc":["1f468-1f3fc-200d-1f52c",37,39,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD2C"]],"1f3fd":["1f468-1f3fd-200d-1f52c",37,40,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD2C"]],"1f3fe":["1f468-1f3fe-200d-1f52c",37,41,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD2C"]],"1f3ff":["1f468-1f3ff-200d-1f52c",37,42,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD2C"]]},
		"1f468-200d-1f680":{"1f3fb":["1f468-1f3fb-200d-1f680",37,44,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE80"]],"1f3fc":["1f468-1f3fc-200d-1f680",37,45,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE80"]],"1f3fd":["1f468-1f3fd-200d-1f680",37,46,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE80"]],"1f3fe":["1f468-1f3fe-200d-1f680",37,47,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE80"]],"1f3ff":["1f468-1f3ff-200d-1f680",37,48,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE80"]]},
		"1f468-200d-1f692":{"1f3fb":["1f468-1f3fb-200d-1f692",38,1,23,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE92"]],"1f3fc":["1f468-1f3fc-200d-1f692",38,2,23,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE92"]],"1f3fd":["1f468-1f3fd-200d-1f692",38,3,23,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE92"]],"1f3fe":["1f468-1f3fe-200d-1f692",38,4,23,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE92"]],"1f3ff":["1f468-1f3ff-200d-1f692",38,5,23,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE92"]]},
		"1f469-200d-1f33e":{"1f3fb":["1f469-1f3fb-200d-1f33e",38,7,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF3E"]],"1f3fc":["1f469-1f3fc-200d-1f33e",38,8,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF3E"]],"1f3fd":["1f469-1f3fd-200d-1f33e",38,9,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF3E"]],"1f3fe":["1f469-1f3fe-200d-1f33e",38,10,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF3E"]],"1f3ff":["1f469-1f3ff-200d-1f33e",38,11,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF3E"]]},
		"1f469-200d-1f373":{"1f3fb":["1f469-1f3fb-200d-1f373",38,13,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF73"]],"1f3fc":["1f469-1f3fc-200d-1f373",38,14,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF73"]],"1f3fd":["1f469-1f3fd-200d-1f373",38,15,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF73"]],"1f3fe":["1f469-1f3fe-200d-1f373",38,16,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF73"]],"1f3ff":["1f469-1f3ff-200d-1f373",38,17,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF73"]]},
		"1f469-200d-1f393":{"1f3fb":["1f469-1f3fb-200d-1f393",38,19,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF93"]],"1f3fc":["1f469-1f3fc-200d-1f393",38,20,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF93"]],"1f3fd":["1f469-1f3fd-200d-1f393",38,21,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF93"]],"1f3fe":["1f469-1f3fe-200d-1f393",38,22,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF93"]],"1f3ff":["1f469-1f3ff-200d-1f393",38,23,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF93"]]},
		"1f469-200d-1f3a4":{"1f3fb":["1f469-1f3fb-200d-1f3a4",38,25,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA4"]],"1f3fc":["1f469-1f3fc-200d-1f3a4",38,26,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA4"]],"1f3fd":["1f469-1f3fd-200d-1f3a4",38,27,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA4"]],"1f3fe":["1f469-1f3fe-200d-1f3a4",38,28,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA4"]],"1f3ff":["1f469-1f3ff-200d-1f3a4",38,29,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA4"]]},
		"1f469-200d-1f3a8":{"1f3fb":["1f469-1f3fb-200d-1f3a8",38,31,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA8"]],"1f3fc":["1f469-1f3fc-200d-1f3a8",38,32,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA8"]],"1f3fd":["1f469-1f3fd-200d-1f3a8",38,33,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA8"]],"1f3fe":["1f469-1f3fe-200d-1f3a8",38,34,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA8"]],"1f3ff":["1f469-1f3ff-200d-1f3a8",38,35,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA8"]]},
		"1f469-200d-1f3eb":{"1f3fb":["1f469-1f3fb-200d-1f3eb",38,37,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFEB"]],"1f3fc":["1f469-1f3fc-200d-1f3eb",38,38,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFEB"]],"1f3fd":["1f469-1f3fd-200d-1f3eb",38,39,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFEB"]],"1f3fe":["1f469-1f3fe-200d-1f3eb",38,40,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFEB"]],"1f3ff":["1f469-1f3ff-200d-1f3eb",38,41,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFEB"]]},
		"1f469-200d-1f3ed":{"1f3fb":["1f469-1f3fb-200d-1f3ed",38,43,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFED"]],"1f3fc":["1f469-1f3fc-200d-1f3ed",38,44,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFED"]],"1f3fd":["1f469-1f3fd-200d-1f3ed",38,45,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFED"]],"1f3fe":["1f469-1f3fe-200d-1f3ed",38,46,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFED"]],"1f3ff":["1f469-1f3ff-200d-1f3ed",38,47,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFED"]]},
		"1f469-200d-1f4bb":{"1f3fb":["1f469-1f3fb-200d-1f4bb",39,2,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB"]],"1f3fc":["1f469-1f3fc-200d-1f4bb",39,3,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBB"]],"1f3fd":["1f469-1f3fd-200d-1f4bb",39,4,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBB"]],"1f3fe":["1f469-1f3fe-200d-1f4bb",39,5,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBB"]],"1f3ff":["1f469-1f3ff-200d-1f4bb",39,6,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBB"]]},
		"1f469-200d-1f4bc":{"1f3fb":["1f469-1f3fb-200d-1f4bc",39,8,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBC"]],"1f3fc":["1f469-1f3fc-200d-1f4bc",39,9,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBC"]],"1f3fd":["1f469-1f3fd-200d-1f4bc",39,10,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBC"]],"1f3fe":["1f469-1f3fe-200d-1f4bc",39,11,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBC"]],"1f3ff":["1f469-1f3ff-200d-1f4bc",39,12,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBC"]]},
		"1f469-200d-1f527":{"1f3fb":["1f469-1f3fb-200d-1f527",39,14,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD27"]],"1f3fc":["1f469-1f3fc-200d-1f527",39,15,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD27"]],"1f3fd":["1f469-1f3fd-200d-1f527",39,16,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD27"]],"1f3fe":["1f469-1f3fe-200d-1f527",39,17,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD27"]],"1f3ff":["1f469-1f3ff-200d-1f527",39,18,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD27"]]},
		"1f469-200d-1f52c":{"1f3fb":["1f469-1f3fb-200d-1f52c",39,20,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD2C"]],"1f3fc":["1f469-1f3fc-200d-1f52c",39,21,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD2C"]],"1f3fd":["1f469-1f3fd-200d-1f52c",39,22,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD2C"]],"1f3fe":["1f469-1f3fe-200d-1f52c",39,23,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD2C"]],"1f3ff":["1f469-1f3ff-200d-1f52c",39,24,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD2C"]]},
		"1f469-200d-1f680":{"1f3fb":["1f469-1f3fb-200d-1f680",39,26,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE80"]],"1f3fc":["1f469-1f3fc-200d-1f680",39,27,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE80"]],"1f3fd":["1f469-1f3fd-200d-1f680",39,28,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE80"]],"1f3fe":["1f469-1f3fe-200d-1f680",39,29,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE80"]],"1f3ff":["1f469-1f3ff-200d-1f680",39,30,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE80"]]},
		"1f469-200d-1f692":{"1f3fb":["1f469-1f3fb-200d-1f692",39,32,23,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE92"]],"1f3fc":["1f469-1f3fc-200d-1f692",39,33,23,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE92"]],"1f3fd":["1f469-1f3fd-200d-1f692",39,34,23,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE92"]],"1f3fe":["1f469-1f3fe-200d-1f692",39,35,23,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE92"]],"1f3ff":["1f469-1f3ff-200d-1f692",39,36,23,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE92"]]},
		"1f3c3-200d-2640-fe0f":{"1f3fb":["1f3c3-1f3fb-200d-2640-fe0f",39,38,5,["\uD83C\uDFC3\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3c3-1f3fc-200d-2640-fe0f",39,39,5,["\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3c3-1f3fd-200d-2640-fe0f",39,40,5,["\uD83C\uDFC3\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3c3-1f3fe-200d-2640-fe0f",39,41,5,["\uD83C\uDFC3\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3c3-1f3ff-200d-2640-fe0f",39,42,5,["\uD83C\uDFC3\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3c3-200d-2642-fe0f":{"1f3fb":["1f3c3-1f3fb-200d-2642-fe0f",39,44,5,["\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFB"]],"1f3fc":["1f3c3-1f3fc-200d-2642-fe0f",39,45,5,["\uD83C\uDFC3\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFC"]],"1f3fd":["1f3c3-1f3fd-200d-2642-fe0f",39,46,5,["\uD83C\uDFC3\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFD"]],"1f3fe":["1f3c3-1f3fe-200d-2642-fe0f",39,47,5,["\uD83C\uDFC3\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFE"]],"1f3ff":["1f3c3-1f3ff-200d-2642-fe0f",39,48,5,["\uD83C\uDFC3\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFF"]]},
		"1f3c4-200d-2640-fe0f":{"1f3fb":["1f3c4-1f3fb-200d-2640-fe0f",40,1,5,["\uD83C\uDFC4\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3c4-1f3fc-200d-2640-fe0f",40,2,5,["\uD83C\uDFC4\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3c4-1f3fd-200d-2640-fe0f",40,3,5,["\uD83C\uDFC4\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3c4-1f3fe-200d-2640-fe0f",40,4,5,["\uD83C\uDFC4\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3c4-1f3ff-200d-2640-fe0f",40,5,5,["\uD83C\uDFC4\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3c4-200d-2642-fe0f":{"1f3fb":["1f3c4-1f3fb-200d-2642-fe0f",40,7,5,["\uD83C\uDFC4\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFB"]],"1f3fc":["1f3c4-1f3fc-200d-2642-fe0f",40,8,5,["\uD83C\uDFC4\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFC"]],"1f3fd":["1f3c4-1f3fd-200d-2642-fe0f",40,9,5,["\uD83C\uDFC4\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFD"]],"1f3fe":["1f3c4-1f3fe-200d-2642-fe0f",40,10,5,["\uD83C\uDFC4\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFE"]],"1f3ff":["1f3c4-1f3ff-200d-2642-fe0f",40,11,5,["\uD83C\uDFC4\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFF"]]},
		"1f3ca-200d-2640-fe0f":{"1f3fb":["1f3ca-1f3fb-200d-2640-fe0f",40,13,5,["\uD83C\uDFCA\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3ca-1f3fc-200d-2640-fe0f",40,14,5,["\uD83C\uDFCA\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3ca-1f3fd-200d-2640-fe0f",40,15,5,["\uD83C\uDFCA\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3ca-1f3fe-200d-2640-fe0f",40,16,5,["\uD83C\uDFCA\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3ca-1f3ff-200d-2640-fe0f",40,17,5,["\uD83C\uDFCA\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3ca-200d-2642-fe0f":{"1f3fb":["1f3ca-1f3fb-200d-2642-fe0f",40,19,5,["\uD83C\uDFCA\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFB"]],"1f3fc":["1f3ca-1f3fc-200d-2642-fe0f",40,20,5,["\uD83C\uDFCA\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFC"]],"1f3fd":["1f3ca-1f3fd-200d-2642-fe0f",40,21,5,["\uD83C\uDFCA\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFD"]],"1f3fe":["1f3ca-1f3fe-200d-2642-fe0f",40,22,5,["\uD83C\uDFCA\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFE"]],"1f3ff":["1f3ca-1f3ff-200d-2642-fe0f",40,23,5,["\uD83C\uDFCA\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFF"]]},
		"1f3cb-fe0f-200d-2640-fe0f":{"1f3fb":["1f3cb-1f3fb-200d-2640-fe0f",40,25,5,["\uD83C\uDFCB\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3cb-1f3fc-200d-2640-fe0f",40,26,5,["\uD83C\uDFCB\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3cb-1f3fd-200d-2640-fe0f",40,27,5,["\uD83C\uDFCB\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3cb-1f3fe-200d-2640-fe0f",40,28,5,["\uD83C\uDFCB\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3cb-1f3ff-200d-2640-fe0f",40,29,5,["\uD83C\uDFCB\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3cb-fe0f-200d-2642-fe0f":{"1f3fb":["1f3cb-1f3fb-200d-2642-fe0f",40,31,5,["\uD83C\uDFCB\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFB"]],"1f3fc":["1f3cb-1f3fc-200d-2642-fe0f",40,32,5,["\uD83C\uDFCB\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFC"]],"1f3fd":["1f3cb-1f3fd-200d-2642-fe0f",40,33,5,["\uD83C\uDFCB\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFD"]],"1f3fe":["1f3cb-1f3fe-200d-2642-fe0f",40,34,5,["\uD83C\uDFCB\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFE"]],"1f3ff":["1f3cb-1f3ff-200d-2642-fe0f",40,35,5,["\uD83C\uDFCB\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFF"]]},
		"1f3cc-fe0f-200d-2640-fe0f":{"1f3fb":["1f3cc-1f3fb-200d-2640-fe0f",40,37,5,["\uD83C\uDFCC\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3cc-1f3fc-200d-2640-fe0f",40,38,5,["\uD83C\uDFCC\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3cc-1f3fd-200d-2640-fe0f",40,39,5,["\uD83C\uDFCC\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3cc-1f3fe-200d-2640-fe0f",40,40,5,["\uD83C\uDFCC\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3cc-1f3ff-200d-2640-fe0f",40,41,5,["\uD83C\uDFCC\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3cc-fe0f-200d-2642-fe0f":{"1f3fb":["1f3cc-1f3fb-200d-2642-fe0f",40,43,5,["\uD83C\uDFCC\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFB"]],"1f3fc":["1f3cc-1f3fc-200d-2642-fe0f",40,44,5,["\uD83C\uDFCC\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFC"]],"1f3fd":["1f3cc-1f3fd-200d-2642-fe0f",40,45,5,["\uD83C\uDFCC\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFD"]],"1f3fe":["1f3cc-1f3fe-200d-2642-fe0f",40,46,5,["\uD83C\uDFCC\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFE"]],"1f3ff":["1f3cc-1f3ff-200d-2642-fe0f",40,47,5,["\uD83C\uDFCC\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFF"]]},
		"1f468-200d-2695-fe0f":{"1f3fb":["1f468-1f3fb-200d-2695-fe0f",41,15,5,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2695\uFE0F"]],"1f3fc":["1f468-1f3fc-200d-2695-fe0f",41,16,5,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2695\uFE0F"]],"1f3fd":["1f468-1f3fd-200d-2695-fe0f",41,17,5,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2695\uFE0F"]],"1f3fe":["1f468-1f3fe-200d-2695-fe0f",41,18,5,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2695\uFE0F"]],"1f3ff":["1f468-1f3ff-200d-2695-fe0f",41,19,5,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2695\uFE0F"]]},
		"1f468-200d-2696-fe0f":{"1f3fb":["1f468-1f3fb-200d-2696-fe0f",41,21,5,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2696\uFE0F"]],"1f3fc":["1f468-1f3fc-200d-2696-fe0f",41,22,5,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2696\uFE0F"]],"1f3fd":["1f468-1f3fd-200d-2696-fe0f",41,23,5,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2696\uFE0F"]],"1f3fe":["1f468-1f3fe-200d-2696-fe0f",41,24,5,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2696\uFE0F"]],"1f3ff":["1f468-1f3ff-200d-2696-fe0f",41,25,5,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2696\uFE0F"]]},
		"1f468-200d-2708-fe0f":{"1f3fb":["1f468-1f3fb-200d-2708-fe0f",41,27,5,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2708\uFE0F"]],"1f3fc":["1f468-1f3fc-200d-2708-fe0f",41,28,5,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2708\uFE0F"]],"1f3fd":["1f468-1f3fd-200d-2708-fe0f",41,29,5,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2708\uFE0F"]],"1f3fe":["1f468-1f3fe-200d-2708-fe0f",41,30,5,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2708\uFE0F"]],"1f3ff":["1f468-1f3ff-200d-2708-fe0f",41,31,5,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2708\uFE0F"]]},
		"1f469-200d-2695-fe0f":{"1f3fb":["1f469-1f3fb-200d-2695-fe0f",41,43,5,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2695\uFE0F"]],"1f3fc":["1f469-1f3fc-200d-2695-fe0f",41,44,5,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2695\uFE0F"]],"1f3fd":["1f469-1f3fd-200d-2695-fe0f",41,45,5,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2695\uFE0F"]],"1f3fe":["1f469-1f3fe-200d-2695-fe0f",41,46,5,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2695\uFE0F"]],"1f3ff":["1f469-1f3ff-200d-2695-fe0f",41,47,5,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2695\uFE0F"]]},
		"1f469-200d-2696-fe0f":{"1f3fb":["1f469-1f3fb-200d-2696-fe0f",42,0,5,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2696\uFE0F"]],"1f3fc":["1f469-1f3fc-200d-2696-fe0f",42,1,5,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2696\uFE0F"]],"1f3fd":["1f469-1f3fd-200d-2696-fe0f",42,2,5,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2696\uFE0F"]],"1f3fe":["1f469-1f3fe-200d-2696-fe0f",42,3,5,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2696\uFE0F"]],"1f3ff":["1f469-1f3ff-200d-2696-fe0f",42,4,5,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2696\uFE0F"]]},
		"1f469-200d-2708-fe0f":{"1f3fb":["1f469-1f3fb-200d-2708-fe0f",42,6,5,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2708\uFE0F"]],"1f3fc":["1f469-1f3fc-200d-2708-fe0f",42,7,5,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2708\uFE0F"]],"1f3fd":["1f469-1f3fd-200d-2708-fe0f",42,8,5,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2708\uFE0F"]],"1f3fe":["1f469-1f3fe-200d-2708-fe0f",42,9,5,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2708\uFE0F"]],"1f3ff":["1f469-1f3ff-200d-2708-fe0f",42,10,5,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2708\uFE0F"]]},
		"1f46e-200d-2640-fe0f":{"1f3fb":["1f46e-1f3fb-200d-2640-fe0f",42,16,5,["\uD83D\uDC6E\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f46e-1f3fc-200d-2640-fe0f",42,17,5,["\uD83D\uDC6E\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f46e-1f3fd-200d-2640-fe0f",42,18,5,["\uD83D\uDC6E\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f46e-1f3fe-200d-2640-fe0f",42,19,5,["\uD83D\uDC6E\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f46e-1f3ff-200d-2640-fe0f",42,20,5,["\uD83D\uDC6E\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f46e-200d-2642-fe0f":{"1f3fb":["1f46e-1f3fb-200d-2642-fe0f",42,22,5,["\uD83D\uDC6E\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFB"]],"1f3fc":["1f46e-1f3fc-200d-2642-fe0f",42,23,5,["\uD83D\uDC6E\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFC"]],"1f3fd":["1f46e-1f3fd-200d-2642-fe0f",42,24,5,["\uD83D\uDC6E\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFD"]],"1f3fe":["1f46e-1f3fe-200d-2642-fe0f",42,25,5,["\uD83D\uDC6E\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFE"]],"1f3ff":["1f46e-1f3ff-200d-2642-fe0f",42,26,5,["\uD83D\uDC6E\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFF"]]},
		"1f471-200d-2640-fe0f":{"1f3fb":["1f471-1f3fb-200d-2640-fe0f",42,30,5,["\uD83D\uDC71\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f471-1f3fc-200d-2640-fe0f",42,31,5,["\uD83D\uDC71\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f471-1f3fd-200d-2640-fe0f",42,32,5,["\uD83D\uDC71\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f471-1f3fe-200d-2640-fe0f",42,33,5,["\uD83D\uDC71\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f471-1f3ff-200d-2640-fe0f",42,34,5,["\uD83D\uDC71\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f471-200d-2642-fe0f":{"1f3fb":["1f471-1f3fb-200d-2642-fe0f",42,36,5,["\uD83D\uDC71\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFB"]],"1f3fc":["1f471-1f3fc-200d-2642-fe0f",42,37,5,["\uD83D\uDC71\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFC"]],"1f3fd":["1f471-1f3fd-200d-2642-fe0f",42,38,5,["\uD83D\uDC71\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFD"]],"1f3fe":["1f471-1f3fe-200d-2642-fe0f",42,39,5,["\uD83D\uDC71\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFE"]],"1f3ff":["1f471-1f3ff-200d-2642-fe0f",42,40,5,["\uD83D\uDC71\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFF"]]},
		"1f473-200d-2640-fe0f":{"1f3fb":["1f473-1f3fb-200d-2640-fe0f",42,42,5,["\uD83D\uDC73\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f473-1f3fc-200d-2640-fe0f",42,43,5,["\uD83D\uDC73\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f473-1f3fd-200d-2640-fe0f",42,44,5,["\uD83D\uDC73\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f473-1f3fe-200d-2640-fe0f",42,45,5,["\uD83D\uDC73\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f473-1f3ff-200d-2640-fe0f",42,46,5,["\uD83D\uDC73\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f473-200d-2642-fe0f":{"1f3fb":["1f473-1f3fb-200d-2642-fe0f",42,48,5,["\uD83D\uDC73\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFB"]],"1f3fc":["1f473-1f3fc-200d-2642-fe0f",43,0,5,["\uD83D\uDC73\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFC"]],"1f3fd":["1f473-1f3fd-200d-2642-fe0f",43,1,5,["\uD83D\uDC73\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFD"]],"1f3fe":["1f473-1f3fe-200d-2642-fe0f",43,2,5,["\uD83D\uDC73\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFE"]],"1f3ff":["1f473-1f3ff-200d-2642-fe0f",43,3,5,["\uD83D\uDC73\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFF"]]},
		"1f477-200d-2640-fe0f":{"1f3fb":["1f477-1f3fb-200d-2640-fe0f",43,5,5,["\uD83D\uDC77\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f477-1f3fc-200d-2640-fe0f",43,6,5,["\uD83D\uDC77\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f477-1f3fd-200d-2640-fe0f",43,7,5,["\uD83D\uDC77\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f477-1f3fe-200d-2640-fe0f",43,8,5,["\uD83D\uDC77\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f477-1f3ff-200d-2640-fe0f",43,9,5,["\uD83D\uDC77\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f477-200d-2642-fe0f":{"1f3fb":["1f477-1f3fb-200d-2642-fe0f",43,11,5,["\uD83D\uDC77\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFB"]],"1f3fc":["1f477-1f3fc-200d-2642-fe0f",43,12,5,["\uD83D\uDC77\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFC"]],"1f3fd":["1f477-1f3fd-200d-2642-fe0f",43,13,5,["\uD83D\uDC77\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFD"]],"1f3fe":["1f477-1f3fe-200d-2642-fe0f",43,14,5,["\uD83D\uDC77\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFE"]],"1f3ff":["1f477-1f3ff-200d-2642-fe0f",43,15,5,["\uD83D\uDC77\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFF"]]},
		"1f481-200d-2640-fe0f":{"1f3fb":["1f481-1f3fb-200d-2640-fe0f",43,17,5,["\uD83D\uDC81\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFB"]],"1f3fc":["1f481-1f3fc-200d-2640-fe0f",43,18,5,["\uD83D\uDC81\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFC"]],"1f3fd":["1f481-1f3fd-200d-2640-fe0f",43,19,5,["\uD83D\uDC81\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFD"]],"1f3fe":["1f481-1f3fe-200d-2640-fe0f",43,20,5,["\uD83D\uDC81\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFE"]],"1f3ff":["1f481-1f3ff-200d-2640-fe0f",43,21,5,["\uD83D\uDC81\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFF"]]},
		"1f481-200d-2642-fe0f":{"1f3fb":["1f481-1f3fb-200d-2642-fe0f",43,23,5,["\uD83D\uDC81\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f481-1f3fc-200d-2642-fe0f",43,24,5,["\uD83D\uDC81\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f481-1f3fd-200d-2642-fe0f",43,25,5,["\uD83D\uDC81\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f481-1f3fe-200d-2642-fe0f",43,26,5,["\uD83D\uDC81\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f481-1f3ff-200d-2642-fe0f",43,27,5,["\uD83D\uDC81\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f482-200d-2640-fe0f":{"1f3fb":["1f482-1f3fb-200d-2640-fe0f",43,29,5,["\uD83D\uDC82\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f482-1f3fc-200d-2640-fe0f",43,30,5,["\uD83D\uDC82\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f482-1f3fd-200d-2640-fe0f",43,31,5,["\uD83D\uDC82\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f482-1f3fe-200d-2640-fe0f",43,32,5,["\uD83D\uDC82\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f482-1f3ff-200d-2640-fe0f",43,33,5,["\uD83D\uDC82\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f482-200d-2642-fe0f":{"1f3fb":["1f482-1f3fb-200d-2642-fe0f",43,35,5,["\uD83D\uDC82\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFB"]],"1f3fc":["1f482-1f3fc-200d-2642-fe0f",43,36,5,["\uD83D\uDC82\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFC"]],"1f3fd":["1f482-1f3fd-200d-2642-fe0f",43,37,5,["\uD83D\uDC82\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFD"]],"1f3fe":["1f482-1f3fe-200d-2642-fe0f",43,38,5,["\uD83D\uDC82\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFE"]],"1f3ff":["1f482-1f3ff-200d-2642-fe0f",43,39,5,["\uD83D\uDC82\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFF"]]},
		"1f486-200d-2640-fe0f":{"1f3fb":["1f486-1f3fb-200d-2640-fe0f",43,41,5,["\uD83D\uDC86\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFB"]],"1f3fc":["1f486-1f3fc-200d-2640-fe0f",43,42,5,["\uD83D\uDC86\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFC"]],"1f3fd":["1f486-1f3fd-200d-2640-fe0f",43,43,5,["\uD83D\uDC86\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFD"]],"1f3fe":["1f486-1f3fe-200d-2640-fe0f",43,44,5,["\uD83D\uDC86\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFE"]],"1f3ff":["1f486-1f3ff-200d-2640-fe0f",43,45,5,["\uD83D\uDC86\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFF"]]},
		"1f486-200d-2642-fe0f":{"1f3fb":["1f486-1f3fb-200d-2642-fe0f",43,47,5,["\uD83D\uDC86\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f486-1f3fc-200d-2642-fe0f",43,48,5,["\uD83D\uDC86\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f486-1f3fd-200d-2642-fe0f",44,0,5,["\uD83D\uDC86\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f486-1f3fe-200d-2642-fe0f",44,1,5,["\uD83D\uDC86\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f486-1f3ff-200d-2642-fe0f",44,2,5,["\uD83D\uDC86\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f487-200d-2640-fe0f":{"1f3fb":["1f487-1f3fb-200d-2640-fe0f",44,4,5,["\uD83D\uDC87\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFB"]],"1f3fc":["1f487-1f3fc-200d-2640-fe0f",44,5,5,["\uD83D\uDC87\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFC"]],"1f3fd":["1f487-1f3fd-200d-2640-fe0f",44,6,5,["\uD83D\uDC87\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFD"]],"1f3fe":["1f487-1f3fe-200d-2640-fe0f",44,7,5,["\uD83D\uDC87\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFE"]],"1f3ff":["1f487-1f3ff-200d-2640-fe0f",44,8,5,["\uD83D\uDC87\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFF"]]},
		"1f487-200d-2642-fe0f":{"1f3fb":["1f487-1f3fb-200d-2642-fe0f",44,10,5,["\uD83D\uDC87\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f487-1f3fc-200d-2642-fe0f",44,11,5,["\uD83D\uDC87\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f487-1f3fd-200d-2642-fe0f",44,12,5,["\uD83D\uDC87\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f487-1f3fe-200d-2642-fe0f",44,13,5,["\uD83D\uDC87\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f487-1f3ff-200d-2642-fe0f",44,14,5,["\uD83D\uDC87\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f575-fe0f-200d-2640-fe0f":{"1f3fb":["1f575-1f3fb-200d-2640-fe0f",44,16,5,["\uD83D\uDD75\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f575-1f3fc-200d-2640-fe0f",44,17,5,["\uD83D\uDD75\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f575-1f3fd-200d-2640-fe0f",44,18,5,["\uD83D\uDD75\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f575-1f3fe-200d-2640-fe0f",44,19,5,["\uD83D\uDD75\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f575-1f3ff-200d-2640-fe0f",44,20,5,["\uD83D\uDD75\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f575-fe0f-200d-2642-fe0f":{"1f3fb":["1f575-1f3fb-200d-2642-fe0f",44,22,5,["\uD83D\uDD75\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFB"]],"1f3fc":["1f575-1f3fc-200d-2642-fe0f",44,23,5,["\uD83D\uDD75\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFC"]],"1f3fd":["1f575-1f3fd-200d-2642-fe0f",44,24,5,["\uD83D\uDD75\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFD"]],"1f3fe":["1f575-1f3fe-200d-2642-fe0f",44,25,5,["\uD83D\uDD75\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFE"]],"1f3ff":["1f575-1f3ff-200d-2642-fe0f",44,26,5,["\uD83D\uDD75\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFF"]]},
		"1f645-200d-2640-fe0f":{"1f3fb":["1f645-1f3fb-200d-2640-fe0f",44,28,5,["\uD83D\uDE45\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFB"]],"1f3fc":["1f645-1f3fc-200d-2640-fe0f",44,29,5,["\uD83D\uDE45\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFC"]],"1f3fd":["1f645-1f3fd-200d-2640-fe0f",44,30,5,["\uD83D\uDE45\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFD"]],"1f3fe":["1f645-1f3fe-200d-2640-fe0f",44,31,5,["\uD83D\uDE45\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFE"]],"1f3ff":["1f645-1f3ff-200d-2640-fe0f",44,32,5,["\uD83D\uDE45\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFF"]]},
		"1f645-200d-2642-fe0f":{"1f3fb":["1f645-1f3fb-200d-2642-fe0f",44,34,5,["\uD83D\uDE45\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f645-1f3fc-200d-2642-fe0f",44,35,5,["\uD83D\uDE45\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f645-1f3fd-200d-2642-fe0f",44,36,5,["\uD83D\uDE45\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f645-1f3fe-200d-2642-fe0f",44,37,5,["\uD83D\uDE45\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f645-1f3ff-200d-2642-fe0f",44,38,5,["\uD83D\uDE45\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f646-200d-2640-fe0f":{"1f3fb":["1f646-1f3fb-200d-2640-fe0f",44,40,5,["\uD83D\uDE46\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFB"]],"1f3fc":["1f646-1f3fc-200d-2640-fe0f",44,41,5,["\uD83D\uDE46\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFC"]],"1f3fd":["1f646-1f3fd-200d-2640-fe0f",44,42,5,["\uD83D\uDE46\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFD"]],"1f3fe":["1f646-1f3fe-200d-2640-fe0f",44,43,5,["\uD83D\uDE46\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFE"]],"1f3ff":["1f646-1f3ff-200d-2640-fe0f",44,44,5,["\uD83D\uDE46\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFF"]]},
		"1f646-200d-2642-fe0f":{"1f3fb":["1f646-1f3fb-200d-2642-fe0f",44,46,5,["\uD83D\uDE46\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f646-1f3fc-200d-2642-fe0f",44,47,5,["\uD83D\uDE46\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f646-1f3fd-200d-2642-fe0f",44,48,5,["\uD83D\uDE46\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f646-1f3fe-200d-2642-fe0f",45,0,5,["\uD83D\uDE46\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f646-1f3ff-200d-2642-fe0f",45,1,5,["\uD83D\uDE46\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f647-200d-2640-fe0f":{"1f3fb":["1f647-1f3fb-200d-2640-fe0f",45,3,5,["\uD83D\uDE47\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f647-1f3fc-200d-2640-fe0f",45,4,5,["\uD83D\uDE47\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f647-1f3fd-200d-2640-fe0f",45,5,5,["\uD83D\uDE47\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f647-1f3fe-200d-2640-fe0f",45,6,5,["\uD83D\uDE47\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f647-1f3ff-200d-2640-fe0f",45,7,5,["\uD83D\uDE47\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f647-200d-2642-fe0f":{"1f3fb":["1f647-1f3fb-200d-2642-fe0f",45,9,5,["\uD83D\uDE47\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFB"]],"1f3fc":["1f647-1f3fc-200d-2642-fe0f",45,10,5,["\uD83D\uDE47\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFC"]],"1f3fd":["1f647-1f3fd-200d-2642-fe0f",45,11,5,["\uD83D\uDE47\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFD"]],"1f3fe":["1f647-1f3fe-200d-2642-fe0f",45,12,5,["\uD83D\uDE47\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFE"]],"1f3ff":["1f647-1f3ff-200d-2642-fe0f",45,13,5,["\uD83D\uDE47\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFF"]]},
		"1f64b-200d-2640-fe0f":{"1f3fb":["1f64b-1f3fb-200d-2640-fe0f",45,15,5,["\uD83D\uDE4B\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFB"]],"1f3fc":["1f64b-1f3fc-200d-2640-fe0f",45,16,5,["\uD83D\uDE4B\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFC"]],"1f3fd":["1f64b-1f3fd-200d-2640-fe0f",45,17,5,["\uD83D\uDE4B\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFD"]],"1f3fe":["1f64b-1f3fe-200d-2640-fe0f",45,18,5,["\uD83D\uDE4B\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFE"]],"1f3ff":["1f64b-1f3ff-200d-2640-fe0f",45,19,5,["\uD83D\uDE4B\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFF"]]},
		"1f64b-200d-2642-fe0f":{"1f3fb":["1f64b-1f3fb-200d-2642-fe0f",45,21,5,["\uD83D\uDE4B\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f64b-1f3fc-200d-2642-fe0f",45,22,5,["\uD83D\uDE4B\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f64b-1f3fd-200d-2642-fe0f",45,23,5,["\uD83D\uDE4B\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f64b-1f3fe-200d-2642-fe0f",45,24,5,["\uD83D\uDE4B\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f64b-1f3ff-200d-2642-fe0f",45,25,5,["\uD83D\uDE4B\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f64d-200d-2640-fe0f":{"1f3fb":["1f64d-1f3fb-200d-2640-fe0f",45,27,5,["\uD83D\uDE4D\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFB"]],"1f3fc":["1f64d-1f3fc-200d-2640-fe0f",45,28,5,["\uD83D\uDE4D\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFC"]],"1f3fd":["1f64d-1f3fd-200d-2640-fe0f",45,29,5,["\uD83D\uDE4D\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFD"]],"1f3fe":["1f64d-1f3fe-200d-2640-fe0f",45,30,5,["\uD83D\uDE4D\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFE"]],"1f3ff":["1f64d-1f3ff-200d-2640-fe0f",45,31,5,["\uD83D\uDE4D\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFF"]]},
		"1f64d-200d-2642-fe0f":{"1f3fb":["1f64d-1f3fb-200d-2642-fe0f",45,33,5,["\uD83D\uDE4D\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f64d-1f3fc-200d-2642-fe0f",45,34,5,["\uD83D\uDE4D\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f64d-1f3fd-200d-2642-fe0f",45,35,5,["\uD83D\uDE4D\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f64d-1f3fe-200d-2642-fe0f",45,36,5,["\uD83D\uDE4D\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f64d-1f3ff-200d-2642-fe0f",45,37,5,["\uD83D\uDE4D\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f64e-200d-2640-fe0f":{"1f3fb":["1f64e-1f3fb-200d-2640-fe0f",45,39,5,["\uD83D\uDE4E\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFB"]],"1f3fc":["1f64e-1f3fc-200d-2640-fe0f",45,40,5,["\uD83D\uDE4E\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFC"]],"1f3fd":["1f64e-1f3fd-200d-2640-fe0f",45,41,5,["\uD83D\uDE4E\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFD"]],"1f3fe":["1f64e-1f3fe-200d-2640-fe0f",45,42,5,["\uD83D\uDE4E\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFE"]],"1f3ff":["1f64e-1f3ff-200d-2640-fe0f",45,43,5,["\uD83D\uDE4E\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFF"]]},
		"1f64e-200d-2642-fe0f":{"1f3fb":["1f64e-1f3fb-200d-2642-fe0f",45,45,5,["\uD83D\uDE4E\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f64e-1f3fc-200d-2642-fe0f",45,46,5,["\uD83D\uDE4E\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f64e-1f3fd-200d-2642-fe0f",45,47,5,["\uD83D\uDE4E\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f64e-1f3fe-200d-2642-fe0f",45,48,5,["\uD83D\uDE4E\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f64e-1f3ff-200d-2642-fe0f",46,0,5,["\uD83D\uDE4E\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f6a3-200d-2640-fe0f":{"1f3fb":["1f6a3-1f3fb-200d-2640-fe0f",46,2,5,["\uD83D\uDEA3\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6a3-1f3fc-200d-2640-fe0f",46,3,5,["\uD83D\uDEA3\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6a3-1f3fd-200d-2640-fe0f",46,4,5,["\uD83D\uDEA3\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6a3-1f3fe-200d-2640-fe0f",46,5,5,["\uD83D\uDEA3\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6a3-1f3ff-200d-2640-fe0f",46,6,5,["\uD83D\uDEA3\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6a3-200d-2642-fe0f":{"1f3fb":["1f6a3-1f3fb-200d-2642-fe0f",46,8,5,["\uD83D\uDEA3\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFB"]],"1f3fc":["1f6a3-1f3fc-200d-2642-fe0f",46,9,5,["\uD83D\uDEA3\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFC"]],"1f3fd":["1f6a3-1f3fd-200d-2642-fe0f",46,10,5,["\uD83D\uDEA3\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFD"]],"1f3fe":["1f6a3-1f3fe-200d-2642-fe0f",46,11,5,["\uD83D\uDEA3\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFE"]],"1f3ff":["1f6a3-1f3ff-200d-2642-fe0f",46,12,5,["\uD83D\uDEA3\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFF"]]},
		"1f6b4-200d-2640-fe0f":{"1f3fb":["1f6b4-1f3fb-200d-2640-fe0f",46,14,5,["\uD83D\uDEB4\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6b4-1f3fc-200d-2640-fe0f",46,15,5,["\uD83D\uDEB4\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6b4-1f3fd-200d-2640-fe0f",46,16,5,["\uD83D\uDEB4\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6b4-1f3fe-200d-2640-fe0f",46,17,5,["\uD83D\uDEB4\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6b4-1f3ff-200d-2640-fe0f",46,18,5,["\uD83D\uDEB4\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6b4-200d-2642-fe0f":{"1f3fb":["1f6b4-1f3fb-200d-2642-fe0f",46,20,5,["\uD83D\uDEB4\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFB"]],"1f3fc":["1f6b4-1f3fc-200d-2642-fe0f",46,21,5,["\uD83D\uDEB4\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFC"]],"1f3fd":["1f6b4-1f3fd-200d-2642-fe0f",46,22,5,["\uD83D\uDEB4\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFD"]],"1f3fe":["1f6b4-1f3fe-200d-2642-fe0f",46,23,5,["\uD83D\uDEB4\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFE"]],"1f3ff":["1f6b4-1f3ff-200d-2642-fe0f",46,24,5,["\uD83D\uDEB4\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFF"]]},
		"1f6b5-200d-2640-fe0f":{"1f3fb":["1f6b5-1f3fb-200d-2640-fe0f",46,26,5,["\uD83D\uDEB5\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6b5-1f3fc-200d-2640-fe0f",46,27,5,["\uD83D\uDEB5\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6b5-1f3fd-200d-2640-fe0f",46,28,5,["\uD83D\uDEB5\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6b5-1f3fe-200d-2640-fe0f",46,29,5,["\uD83D\uDEB5\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6b5-1f3ff-200d-2640-fe0f",46,30,5,["\uD83D\uDEB5\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6b5-200d-2642-fe0f":{"1f3fb":["1f6b5-1f3fb-200d-2642-fe0f",46,32,5,["\uD83D\uDEB5\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFB"]],"1f3fc":["1f6b5-1f3fc-200d-2642-fe0f",46,33,5,["\uD83D\uDEB5\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFC"]],"1f3fd":["1f6b5-1f3fd-200d-2642-fe0f",46,34,5,["\uD83D\uDEB5\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFD"]],"1f3fe":["1f6b5-1f3fe-200d-2642-fe0f",46,35,5,["\uD83D\uDEB5\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFE"]],"1f3ff":["1f6b5-1f3ff-200d-2642-fe0f",46,36,5,["\uD83D\uDEB5\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFF"]]},
		"1f6b6-200d-2640-fe0f":{"1f3fb":["1f6b6-1f3fb-200d-2640-fe0f",46,38,5,["\uD83D\uDEB6\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6b6-1f3fc-200d-2640-fe0f",46,39,5,["\uD83D\uDEB6\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6b6-1f3fd-200d-2640-fe0f",46,40,5,["\uD83D\uDEB6\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6b6-1f3fe-200d-2640-fe0f",46,41,5,["\uD83D\uDEB6\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6b6-1f3ff-200d-2640-fe0f",46,42,5,["\uD83D\uDEB6\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6b6-200d-2642-fe0f":{"1f3fb":["1f6b6-1f3fb-200d-2642-fe0f",46,44,5,["\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFB"]],"1f3fc":["1f6b6-1f3fc-200d-2642-fe0f",46,45,5,["\uD83D\uDEB6\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFC"]],"1f3fd":["1f6b6-1f3fd-200d-2642-fe0f",46,46,5,["\uD83D\uDEB6\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFD"]],"1f3fe":["1f6b6-1f3fe-200d-2642-fe0f",46,47,5,["\uD83D\uDEB6\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFE"]],"1f3ff":["1f6b6-1f3ff-200d-2642-fe0f",46,48,5,["\uD83D\uDEB6\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFF"]]},
		"1f926-200d-2640-fe0f":{"1f3fb":["1f926-1f3fb-200d-2640-fe0f",47,1,5,["\uD83E\uDD26\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f926-1f3fc-200d-2640-fe0f",47,2,5,["\uD83E\uDD26\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f926-1f3fd-200d-2640-fe0f",47,3,5,["\uD83E\uDD26\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f926-1f3fe-200d-2640-fe0f",47,4,5,["\uD83E\uDD26\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f926-1f3ff-200d-2640-fe0f",47,5,5,["\uD83E\uDD26\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f926-200d-2642-fe0f":{"1f3fb":["1f926-1f3fb-200d-2642-fe0f",47,7,5,["\uD83E\uDD26\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f926-1f3fc-200d-2642-fe0f",47,8,5,["\uD83E\uDD26\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f926-1f3fd-200d-2642-fe0f",47,9,5,["\uD83E\uDD26\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f926-1f3fe-200d-2642-fe0f",47,10,5,["\uD83E\uDD26\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f926-1f3ff-200d-2642-fe0f",47,11,5,["\uD83E\uDD26\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f937-200d-2640-fe0f":{"1f3fb":["1f937-1f3fb-200d-2640-fe0f",47,13,5,["\uD83E\uDD37\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f937-1f3fc-200d-2640-fe0f",47,14,5,["\uD83E\uDD37\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f937-1f3fd-200d-2640-fe0f",47,15,5,["\uD83E\uDD37\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f937-1f3fe-200d-2640-fe0f",47,16,5,["\uD83E\uDD37\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f937-1f3ff-200d-2640-fe0f",47,17,5,["\uD83E\uDD37\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f937-200d-2642-fe0f":{"1f3fb":["1f937-1f3fb-200d-2642-fe0f",47,19,5,["\uD83E\uDD37\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f937-1f3fc-200d-2642-fe0f",47,20,5,["\uD83E\uDD37\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f937-1f3fd-200d-2642-fe0f",47,21,5,["\uD83E\uDD37\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f937-1f3fe-200d-2642-fe0f",47,22,5,["\uD83E\uDD37\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f937-1f3ff-200d-2642-fe0f",47,23,5,["\uD83E\uDD37\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f938-200d-2640-fe0f":{"1f3fb":["1f938-1f3fb-200d-2640-fe0f",47,25,5,["\uD83E\uDD38\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f938-1f3fc-200d-2640-fe0f",47,26,5,["\uD83E\uDD38\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f938-1f3fd-200d-2640-fe0f",47,27,5,["\uD83E\uDD38\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f938-1f3fe-200d-2640-fe0f",47,28,5,["\uD83E\uDD38\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f938-1f3ff-200d-2640-fe0f",47,29,5,["\uD83E\uDD38\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f938-200d-2642-fe0f":{"1f3fb":["1f938-1f3fb-200d-2642-fe0f",47,31,5,["\uD83E\uDD38\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f938-1f3fc-200d-2642-fe0f",47,32,5,["\uD83E\uDD38\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f938-1f3fd-200d-2642-fe0f",47,33,5,["\uD83E\uDD38\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f938-1f3fe-200d-2642-fe0f",47,34,5,["\uD83E\uDD38\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f938-1f3ff-200d-2642-fe0f",47,35,5,["\uD83E\uDD38\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f939-200d-2640-fe0f":{"1f3fb":["1f939-1f3fb-200d-2640-fe0f",47,37,5,["\uD83E\uDD39\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f939-1f3fc-200d-2640-fe0f",47,38,5,["\uD83E\uDD39\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f939-1f3fd-200d-2640-fe0f",47,39,5,["\uD83E\uDD39\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f939-1f3fe-200d-2640-fe0f",47,40,5,["\uD83E\uDD39\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f939-1f3ff-200d-2640-fe0f",47,41,5,["\uD83E\uDD39\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f939-200d-2642-fe0f":{"1f3fb":["1f939-1f3fb-200d-2642-fe0f",47,43,5,["\uD83E\uDD39\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f939-1f3fc-200d-2642-fe0f",47,44,5,["\uD83E\uDD39\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f939-1f3fd-200d-2642-fe0f",47,45,5,["\uD83E\uDD39\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f939-1f3fe-200d-2642-fe0f",47,46,5,["\uD83E\uDD39\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f939-1f3ff-200d-2642-fe0f",47,47,5,["\uD83E\uDD39\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f93d-200d-2640-fe0f":{"1f3fb":["1f93d-1f3fb-200d-2640-fe0f",48,2,5,["\uD83E\uDD3D\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f93d-1f3fc-200d-2640-fe0f",48,3,5,["\uD83E\uDD3D\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f93d-1f3fd-200d-2640-fe0f",48,4,5,["\uD83E\uDD3D\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f93d-1f3fe-200d-2640-fe0f",48,5,5,["\uD83E\uDD3D\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f93d-1f3ff-200d-2640-fe0f",48,6,5,["\uD83E\uDD3D\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f93d-200d-2642-fe0f":{"1f3fb":["1f93d-1f3fb-200d-2642-fe0f",48,8,5,["\uD83E\uDD3D\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f93d-1f3fc-200d-2642-fe0f",48,9,5,["\uD83E\uDD3D\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f93d-1f3fd-200d-2642-fe0f",48,10,5,["\uD83E\uDD3D\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f93d-1f3fe-200d-2642-fe0f",48,11,5,["\uD83E\uDD3D\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f93d-1f3ff-200d-2642-fe0f",48,12,5,["\uD83E\uDD3D\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f93e-200d-2640-fe0f":{"1f3fb":["1f93e-1f3fb-200d-2640-fe0f",48,14,5,["\uD83E\uDD3E\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f93e-1f3fc-200d-2640-fe0f",48,15,5,["\uD83E\uDD3E\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f93e-1f3fd-200d-2640-fe0f",48,16,5,["\uD83E\uDD3E\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f93e-1f3fe-200d-2640-fe0f",48,17,5,["\uD83E\uDD3E\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f93e-1f3ff-200d-2640-fe0f",48,18,5,["\uD83E\uDD3E\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f93e-200d-2642-fe0f":{"1f3fb":["1f93e-1f3fb-200d-2642-fe0f",48,20,5,["\uD83E\uDD3E\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f93e-1f3fc-200d-2642-fe0f",48,21,5,["\uD83E\uDD3E\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f93e-1f3fd-200d-2642-fe0f",48,22,5,["\uD83E\uDD3E\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f93e-1f3fe-200d-2642-fe0f",48,23,5,["\uD83E\uDD3E\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f93e-1f3ff-200d-2642-fe0f",48,24,5,["\uD83E\uDD3E\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"26f9-fe0f-200d-2640-fe0f":{"1f3fb":["26f9-1f3fb-200d-2640-fe0f",48,26,5,["\u26F9\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["26f9-1f3fc-200d-2640-fe0f",48,27,5,["\u26F9\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["26f9-1f3fd-200d-2640-fe0f",48,28,5,["\u26F9\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["26f9-1f3fe-200d-2640-fe0f",48,29,5,["\u26F9\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["26f9-1f3ff-200d-2640-fe0f",48,30,5,["\u26F9\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"26f9-fe0f-200d-2642-fe0f":{"1f3fb":["26f9-1f3fb-200d-2642-fe0f",48,32,5,["\u26F9\uD83C\uDFFB\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFB"]],"1f3fc":["26f9-1f3fc-200d-2642-fe0f",48,33,5,["\u26F9\uD83C\uDFFC\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFC"]],"1f3fd":["26f9-1f3fd-200d-2642-fe0f",48,34,5,["\u26F9\uD83C\uDFFD\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFD"]],"1f3fe":["26f9-1f3fe-200d-2642-fe0f",48,35,5,["\u26F9\uD83C\uDFFE\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFE"]],"1f3ff":["26f9-1f3ff-200d-2642-fe0f",48,36,5,["\u26F9\uD83C\uDFFF\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFF"]]}
	};
	/** @private */
	emoji.prototype.obsoletes_data = {
		"26f9-fe0f-200d-2642-fe0f":["26f9",2,25,31],
		"26f9-1f3fb-200d-2642-fe0f":["26f9-1f3fb",2,26,31],
		"26f9-1f3fc-200d-2642-fe0f":["26f9-1f3fc",2,27,31],
		"26f9-1f3fd-200d-2642-fe0f":["26f9-1f3fd",2,28,31],
		"26f9-1f3fe-200d-2642-fe0f":["26f9-1f3fe",2,29,31],
		"26f9-1f3ff-200d-2642-fe0f":["26f9-1f3ff",2,30,31],
		"1f3c3-200d-2642-fe0f":["1f3c3",8,35,63],
		"1f3c3-1f3fb-200d-2642-fe0f":["1f3c3-1f3fb",8,36,63],
		"1f3c3-1f3fc-200d-2642-fe0f":["1f3c3-1f3fc",8,37,63],
		"1f3c3-1f3fd-200d-2642-fe0f":["1f3c3-1f3fd",8,38,63],
		"1f3c3-1f3fe-200d-2642-fe0f":["1f3c3-1f3fe",8,39,63],
		"1f3c3-1f3ff-200d-2642-fe0f":["1f3c3-1f3ff",8,40,63],
		"1f3c4-200d-2642-fe0f":["1f3c4",8,41,63],
		"1f3c4-1f3fb-200d-2642-fe0f":["1f3c4-1f3fb",8,42,63],
		"1f3c4-1f3fc-200d-2642-fe0f":["1f3c4-1f3fc",8,43,63],
		"1f3c4-1f3fd-200d-2642-fe0f":["1f3c4-1f3fd",8,44,63],
		"1f3c4-1f3fe-200d-2642-fe0f":["1f3c4-1f3fe",8,45,63],
		"1f3c4-1f3ff-200d-2642-fe0f":["1f3c4-1f3ff",8,46,63],
		"1f3ca-200d-2642-fe0f":["1f3ca",9,8,63],
		"1f3ca-1f3fb-200d-2642-fe0f":["1f3ca-1f3fb",9,9,63],
		"1f3ca-1f3fc-200d-2642-fe0f":["1f3ca-1f3fc",9,10,63],
		"1f3ca-1f3fd-200d-2642-fe0f":["1f3ca-1f3fd",9,11,63],
		"1f3ca-1f3fe-200d-2642-fe0f":["1f3ca-1f3fe",9,12,63],
		"1f3ca-1f3ff-200d-2642-fe0f":["1f3ca-1f3ff",9,13,63],
		"1f3cb-fe0f-200d-2642-fe0f":["1f3cb",9,14,31],
		"1f3cb-1f3fb-200d-2642-fe0f":["1f3cb-1f3fb",9,15,31],
		"1f3cb-1f3fc-200d-2642-fe0f":["1f3cb-1f3fc",9,16,31],
		"1f3cb-1f3fd-200d-2642-fe0f":["1f3cb-1f3fd",9,17,31],
		"1f3cb-1f3fe-200d-2642-fe0f":["1f3cb-1f3fe",9,18,31],
		"1f3cb-1f3ff-200d-2642-fe0f":["1f3cb-1f3ff",9,19,31],
		"1f3cc-fe0f-200d-2642-fe0f":["1f3cc",9,20,31],
		"1f3cc-1f3fb-200d-2642-fe0f":["1f3cc-1f3fb",9,21,21],
		"1f3cc-1f3fc-200d-2642-fe0f":["1f3cc-1f3fc",9,22,21],
		"1f3cc-1f3fd-200d-2642-fe0f":["1f3cc-1f3fd",9,23,21],
		"1f3cc-1f3fe-200d-2642-fe0f":["1f3cc-1f3fe",9,24,21],
		"1f3cc-1f3ff-200d-2642-fe0f":["1f3cc-1f3ff",9,25,21],
		"1f468-200d-1f469-200d-1f466":["1f46a",14,20,63],
		"1f46e-200d-2642-fe0f":["1f46e",14,24,63],
		"1f46e-1f3fb-200d-2642-fe0f":["1f46e-1f3fb",14,25,63],
		"1f46e-1f3fc-200d-2642-fe0f":["1f46e-1f3fc",14,26,63],
		"1f46e-1f3fd-200d-2642-fe0f":["1f46e-1f3fd",14,27,63],
		"1f46e-1f3fe-200d-2642-fe0f":["1f46e-1f3fe",14,28,63],
		"1f46e-1f3ff-200d-2642-fe0f":["1f46e-1f3ff",14,29,63],
		"1f46f-200d-2640-fe0f":["1f46f",14,30,63],
		"1f471-200d-2642-fe0f":["1f471",14,37,63],
		"1f471-1f3fb-200d-2642-fe0f":["1f471-1f3fb",14,38,63],
		"1f471-1f3fc-200d-2642-fe0f":["1f471-1f3fc",14,39,63],
		"1f471-1f3fd-200d-2642-fe0f":["1f471-1f3fd",14,40,63],
		"1f471-1f3fe-200d-2642-fe0f":["1f471-1f3fe",14,41,63],
		"1f471-1f3ff-200d-2642-fe0f":["1f471-1f3ff",14,42,63],
		"1f473-200d-2642-fe0f":["1f473",15,0,63],
		"1f473-1f3fb-200d-2642-fe0f":["1f473-1f3fb",15,1,63],
		"1f473-1f3fc-200d-2642-fe0f":["1f473-1f3fc",15,2,63],
		"1f473-1f3fd-200d-2642-fe0f":["1f473-1f3fd",15,3,63],
		"1f473-1f3fe-200d-2642-fe0f":["1f473-1f3fe",15,4,63],
		"1f473-1f3ff-200d-2642-fe0f":["1f473-1f3ff",15,5,63],
		"1f477-200d-2642-fe0f":["1f477",15,24,63],
		"1f477-1f3fb-200d-2642-fe0f":["1f477-1f3fb",15,25,63],
		"1f477-1f3fc-200d-2642-fe0f":["1f477-1f3fc",15,26,63],
		"1f477-1f3fd-200d-2642-fe0f":["1f477-1f3fd",15,27,63],
		"1f477-1f3fe-200d-2642-fe0f":["1f477-1f3fe",15,28,63],
		"1f477-1f3ff-200d-2642-fe0f":["1f477-1f3ff",15,29,63],
		"1f481-200d-2640-fe0f":["1f481",16,0,63],
		"1f481-1f3fb-200d-2640-fe0f":["1f481-1f3fb",16,1,63],
		"1f481-1f3fc-200d-2640-fe0f":["1f481-1f3fc",16,2,63],
		"1f481-1f3fd-200d-2640-fe0f":["1f481-1f3fd",16,3,63],
		"1f481-1f3fe-200d-2640-fe0f":["1f481-1f3fe",16,4,63],
		"1f481-1f3ff-200d-2640-fe0f":["1f481-1f3ff",16,5,63],
		"1f482-200d-2642-fe0f":["1f482",16,6,63],
		"1f482-1f3fb-200d-2642-fe0f":["1f482-1f3fb",16,7,63],
		"1f482-1f3fc-200d-2642-fe0f":["1f482-1f3fc",16,8,63],
		"1f482-1f3fd-200d-2642-fe0f":["1f482-1f3fd",16,9,63],
		"1f482-1f3fe-200d-2642-fe0f":["1f482-1f3fe",16,10,63],
		"1f482-1f3ff-200d-2642-fe0f":["1f482-1f3ff",16,11,63],
		"1f486-200d-2640-fe0f":["1f486",16,25,63],
		"1f486-1f3fb-200d-2640-fe0f":["1f486-1f3fb",16,26,63],
		"1f486-1f3fc-200d-2640-fe0f":["1f486-1f3fc",16,27,63],
		"1f486-1f3fd-200d-2640-fe0f":["1f486-1f3fd",16,28,63],
		"1f486-1f3fe-200d-2640-fe0f":["1f486-1f3fe",16,29,63],
		"1f486-1f3ff-200d-2640-fe0f":["1f486-1f3ff",16,30,63],
		"1f487-200d-2640-fe0f":["1f487",16,31,63],
		"1f487-1f3fb-200d-2640-fe0f":["1f487-1f3fb",16,32,63],
		"1f487-1f3fc-200d-2640-fe0f":["1f487-1f3fc",16,33,63],
		"1f487-1f3fd-200d-2640-fe0f":["1f487-1f3fd",16,34,63],
		"1f487-1f3fe-200d-2640-fe0f":["1f487-1f3fe",16,35,63],
		"1f487-1f3ff-200d-2640-fe0f":["1f487-1f3ff",16,36,63],
		"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468":["1f48f",16,44,61],
		"1f469-200d-2764-fe0f-200d-1f468":["1f491",16,46,61],
		"1f575-fe0f-200d-2642-fe0f":["1f575",21,17,31],
		"1f575-1f3fb-200d-2642-fe0f":["1f575-1f3fb",21,18,31],
		"1f575-1f3fc-200d-2642-fe0f":["1f575-1f3fc",21,19,31],
		"1f575-1f3fd-200d-2642-fe0f":["1f575-1f3fd",21,20,31],
		"1f575-1f3fe-200d-2642-fe0f":["1f575-1f3fe",21,21,31],
		"1f575-1f3ff-200d-2642-fe0f":["1f575-1f3ff",21,22,31],
		"1f645-200d-2640-fe0f":["1f645",24,4,63],
		"1f645-1f3fb-200d-2640-fe0f":["1f645-1f3fb",24,5,63],
		"1f645-1f3fc-200d-2640-fe0f":["1f645-1f3fc",24,6,63],
		"1f645-1f3fd-200d-2640-fe0f":["1f645-1f3fd",24,7,63],
		"1f645-1f3fe-200d-2640-fe0f":["1f645-1f3fe",24,8,63],
		"1f645-1f3ff-200d-2640-fe0f":["1f645-1f3ff",24,9,63],
		"1f646-200d-2640-fe0f":["1f646",24,10,63],
		"1f646-1f3fb-200d-2640-fe0f":["1f646-1f3fb",24,11,63],
		"1f646-1f3fc-200d-2640-fe0f":["1f646-1f3fc",24,12,63],
		"1f646-1f3fd-200d-2640-fe0f":["1f646-1f3fd",24,13,63],
		"1f646-1f3fe-200d-2640-fe0f":["1f646-1f3fe",24,14,63],
		"1f646-1f3ff-200d-2640-fe0f":["1f646-1f3ff",24,15,63],
		"1f647-200d-2642-fe0f":["1f647",24,16,63],
		"1f647-1f3fb-200d-2642-fe0f":["1f647-1f3fb",24,17,63],
		"1f647-1f3fc-200d-2642-fe0f":["1f647-1f3fc",24,18,63],
		"1f647-1f3fd-200d-2642-fe0f":["1f647-1f3fd",24,19,63],
		"1f647-1f3fe-200d-2642-fe0f":["1f647-1f3fe",24,20,63],
		"1f647-1f3ff-200d-2642-fe0f":["1f647-1f3ff",24,21,63],
		"1f64b-200d-2640-fe0f":["1f64b",24,25,63],
		"1f64b-1f3fb-200d-2640-fe0f":["1f64b-1f3fb",24,26,63],
		"1f64b-1f3fc-200d-2640-fe0f":["1f64b-1f3fc",24,27,63],
		"1f64b-1f3fd-200d-2640-fe0f":["1f64b-1f3fd",24,28,63],
		"1f64b-1f3fe-200d-2640-fe0f":["1f64b-1f3fe",24,29,63],
		"1f64b-1f3ff-200d-2640-fe0f":["1f64b-1f3ff",24,30,63],
		"1f64d-200d-2640-fe0f":["1f64d",24,37,63],
		"1f64d-1f3fb-200d-2640-fe0f":["1f64d-1f3fb",24,38,63],
		"1f64d-1f3fc-200d-2640-fe0f":["1f64d-1f3fc",24,39,63],
		"1f64d-1f3fd-200d-2640-fe0f":["1f64d-1f3fd",24,40,63],
		"1f64d-1f3fe-200d-2640-fe0f":["1f64d-1f3fe",24,41,63],
		"1f64d-1f3ff-200d-2640-fe0f":["1f64d-1f3ff",24,42,63],
		"1f64e-200d-2640-fe0f":["1f64e",24,43,63],
		"1f64e-1f3fb-200d-2640-fe0f":["1f64e-1f3fb",24,44,63],
		"1f64e-1f3fc-200d-2640-fe0f":["1f64e-1f3fc",24,45,63],
		"1f64e-1f3fd-200d-2640-fe0f":["1f64e-1f3fd",24,46,63],
		"1f64e-1f3fe-200d-2640-fe0f":["1f64e-1f3fe",24,47,63],
		"1f64e-1f3ff-200d-2640-fe0f":["1f64e-1f3ff",24,48,63],
		"1f6a3-200d-2642-fe0f":["1f6a3",25,41,63],
		"1f6a3-1f3fb-200d-2642-fe0f":["1f6a3-1f3fb",25,42,31],
		"1f6a3-1f3fc-200d-2642-fe0f":["1f6a3-1f3fc",25,43,31],
		"1f6a3-1f3fd-200d-2642-fe0f":["1f6a3-1f3fd",25,44,31],
		"1f6a3-1f3fe-200d-2642-fe0f":["1f6a3-1f3fe",25,45,31],
		"1f6a3-1f3ff-200d-2642-fe0f":["1f6a3-1f3ff",25,46,31],
		"1f6b4-200d-2642-fe0f":["1f6b4",26,14,63],
		"1f6b4-1f3fb-200d-2642-fe0f":["1f6b4-1f3fb",26,15,63],
		"1f6b4-1f3fc-200d-2642-fe0f":["1f6b4-1f3fc",26,16,63],
		"1f6b4-1f3fd-200d-2642-fe0f":["1f6b4-1f3fd",26,17,63],
		"1f6b4-1f3fe-200d-2642-fe0f":["1f6b4-1f3fe",26,18,63],
		"1f6b4-1f3ff-200d-2642-fe0f":["1f6b4-1f3ff",26,19,63],
		"1f6b5-200d-2642-fe0f":["1f6b5",26,20,63],
		"1f6b5-1f3fb-200d-2642-fe0f":["1f6b5-1f3fb",26,21,63],
		"1f6b5-1f3fc-200d-2642-fe0f":["1f6b5-1f3fc",26,22,63],
		"1f6b5-1f3fd-200d-2642-fe0f":["1f6b5-1f3fd",26,23,63],
		"1f6b5-1f3fe-200d-2642-fe0f":["1f6b5-1f3fe",26,24,63],
		"1f6b5-1f3ff-200d-2642-fe0f":["1f6b5-1f3ff",26,25,63],
		"1f6b6-200d-2642-fe0f":["1f6b6",26,26,63],
		"1f6b6-1f3fb-200d-2642-fe0f":["1f6b6-1f3fb",26,27,63],
		"1f6b6-1f3fc-200d-2642-fe0f":["1f6b6-1f3fc",26,28,63],
		"1f6b6-1f3fd-200d-2642-fe0f":["1f6b6-1f3fd",26,29,63],
		"1f6b6-1f3fe-200d-2642-fe0f":["1f6b6-1f3fe",26,30,63],
		"1f6b6-1f3ff-200d-2642-fe0f":["1f6b6-1f3ff",26,31,63]
	};


	// export
	if (true){
		if (typeof module !== 'undefined' && module.exports){
			exports = module.exports = emoji;
		}
		exports.EmojiConvertor = emoji;
	}else if (typeof define === 'function' && define.amd){
		define(function() { return emoji; })
	}else{
		root.EmojiConvertor = emoji;
	}

}).call(function(){
	return this || (typeof window !== 'undefined' ? window : global);
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) { return Object.prototype.toString.call(obj); }
function isString(obj) { return _class(obj) === '[object String]'; }
function isObject(obj) { return _class(obj) === '[object Object]'; }
function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
function isFunction(obj) { return _class(obj) === '[object Function]'; }


function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};


function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}


var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http =  new RegExp(
          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:':  'http:',
  'ftp:':    'http:',
  '//':      {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
      // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http =  new RegExp(
          '^' +
          self.re.src_auth +
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
          self.re.src_port +
          self.re.src_host_terminator +
          self.re.src_path,

          'i'
        );
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto =  new RegExp(
          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__   = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = assign({}, __webpack_require__(33));

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) { return; }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate =
      self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize =
      self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__)
                      .filter(function (name) {
                        // Filter disabled & fake schemas
                        return name.length > 0 && self.__compiled__[name];
                      })
                      .map(escapeRE)
                      .join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test   = RegExp('(^|(?!_)(?:[><]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search = RegExp('(^|(?!_)(?:[><]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');

  self.re.pretest       = RegExp(
                            '(' + self.re.schema_test.source + ')|' +
                            '(' + self.re.host_fuzzy_test.source + ')|' +
                            '@',
                            'i');

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end   = self.__last_index__,
      text  = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema    = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index     = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw       = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text      = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url       = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}


/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__           = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__          = -1;
  this.__last_index__     = -1; // Next scan position
  this.__schema__         = '';
  this.__text_cache__     = '';

  this.__schemas__        = assign({}, defaultSchemas, schemas);
  this.__compiled__       = {};

  this.__tlds__           = tlds_default;
  this.__tlds_replaced__  = false;

  this.re = {};

  compile(this);
}


/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};


/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};


/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) { return false; }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__     = m[2];
        this.__index__      = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__     = '';
            this.__index__      = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next  = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ ||
            (shift === this.__index__ && next > this.__last_index__)) {
          this.__schema__     = 'mailto:';
          this.__index__      = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};


/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};


/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};


/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt.prototype.match = function match(text) {
  var shift = 0, result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};


/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [ list ];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list)
                                  .sort()
                                  .filter(function (el, idx, arr) {
                                    return el !== arr[idx - 1];
                                  })
                                  .reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) { match.url = 'http://' + match.url; }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};


module.exports = LinkifyIt;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Use direct extract instead of `regenerate` to reduse browserified size
var src_Any = exports.src_Any = __webpack_require__(41).source;
var src_Cc  = exports.src_Cc = __webpack_require__(38).source;
var src_Z   = exports.src_Z  = __webpack_require__(40).source;
var src_P   = exports.src_P  = __webpack_require__(39).source;

// \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
var src_ZPCc = exports.src_ZPCc = [ src_Z, src_P, src_Cc ].join('|');

// \p{\Z\Cc} (white spaces + control)
var src_ZCc = exports.src_ZCc = [ src_Z, src_Cc ].join('|');

// All possible word characters (everything without punctuation, spaces & controls)
// Defined via punctuation & spaces to save space
// Should be something like \p{\L\N\S\M} (\w but without `_`)
var src_pseudo_letter       = '(?:(?!>|<|' + src_ZPCc + ')' + src_Any + ')';
// The same as abothe but without [0-9]
// var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

////////////////////////////////////////////////////////////////////////////////

var src_ip4 = exports.src_ip4 =

  '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

// Prohibit [@/] in user/pass to avoid wrong domain fetch.
exports.src_auth    = '(?:(?:(?!' + src_ZCc + '|[@/]).)+@)?';

var src_port = exports.src_port =

  '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

var src_host_terminator = exports.src_host_terminator =

  '(?=$|>|<|' + src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + src_ZPCc + '))';

var src_path = exports.src_path =

  '(?:' +
    '[/?#]' +
      '(?:' +
        '(?!' + src_ZCc + '|[()[\\]{}.,"\'?!\\-<>]).|' +
        '\\[(?:(?!' + src_ZCc + '|\\]).)*\\]|' +
        '\\((?:(?!' + src_ZCc + '|[)]).)*\\)|' +
        '\\{(?:(?!' + src_ZCc + '|[}]).)*\\}|' +
        '\\"(?:(?!' + src_ZCc + '|["]).)+\\"|' +
        "\\'(?:(?!" + src_ZCc + "|[']).)+\\'|" +
        "\\'(?=" + src_pseudo_letter + ').|' +  // allow `I'm_king` if no pair found
        '\\.{2,3}[a-zA-Z0-9%/]|' + // github has ... in commit range links. Restrict to
                                   // - english
                                   // - percent-encoded
                                   // - parts of file path
                                   // until more examples found.
        '\\.(?!' + src_ZCc + '|[.]).|' +
        '\\-(?!--(?:[^-]|$))(?:-*)|' +  // `---` => long dash, terminate
        '\\,(?!' + src_ZCc + ').|' +      // allow `,,,` in paths
        '\\!(?!' + src_ZCc + '|[!]).|' +
        '\\?(?!' + src_ZCc + '|[?]).' +
      ')+' +
    '|\\/' +
  ')?';

var src_email_name = exports.src_email_name =

  '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+';

var src_xn = exports.src_xn =

  'xn--[a-z0-9\\-]{1,59}';

// More to read about domain names
// http://serverfault.com/questions/638260/

var src_domain_root = exports.src_domain_root =

  // Allow letters & digits (http://test1)
  '(?:' +
    src_xn +
    '|' +
    src_pseudo_letter + '{1,63}' +
  ')';

var src_domain = exports.src_domain =

  '(?:' +
    src_xn +
    '|' +
    '(?:' + src_pseudo_letter + ')' +
    '|' +
    // don't allow `--` in domain names, because:
    // - that can conflict with markdown &mdash; / &ndash;
    // - nobody use those anyway
    '(?:' + src_pseudo_letter + '(?:-(?!-)|' + src_pseudo_letter + '){0,61}' + src_pseudo_letter + ')' +
  ')';

var src_host = exports.src_host =

  '(?:' +
  // Don't need IP check, because digits are already allowed in normal domain names
  //   src_ip4 +
  // '|' +
    '(?:(?:(?:' + src_domain + ')\\.)*' + src_domain_root + ')' +
  ')';

var tpl_host_fuzzy = exports.tpl_host_fuzzy =

  '(?:' +
    src_ip4 +
  '|' +
    '(?:(?:(?:' + src_domain + ')\\.)+(?:%TLDS%))' +
  ')';

var tpl_host_no_ip_fuzzy = exports.tpl_host_no_ip_fuzzy =

  '(?:(?:(?:' + src_domain + ')\\.)+(?:%TLDS%))';

exports.src_host_strict =

  src_host + src_host_terminator;

var tpl_host_fuzzy_strict = exports.tpl_host_fuzzy_strict =

  tpl_host_fuzzy + src_host_terminator;

exports.src_host_port_strict =

  src_host + src_port + src_host_terminator;

var tpl_host_port_fuzzy_strict = exports.tpl_host_port_fuzzy_strict =

  tpl_host_fuzzy + src_port + src_host_terminator;

var tpl_host_port_no_ip_fuzzy_strict = exports.tpl_host_port_no_ip_fuzzy_strict =

  tpl_host_no_ip_fuzzy + src_port + src_host_terminator;


////////////////////////////////////////////////////////////////////////////////
// Main rules

// Rude test fuzzy links by host, for quick deny
exports.tpl_host_fuzzy_test =

  'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + src_ZPCc + '|>|$))';

exports.tpl_email_fuzzy =

    '(^|<|>|\\(|' + src_ZCc + ')(' + src_email_name + '@' + tpl_host_fuzzy_strict + ')';

exports.tpl_link_fuzzy =
    // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    '(^|(?![.:/\\-_@])(?:[$+<=>^`|]|' + src_ZPCc + '))' +
    '((?![$+<=>^`|])' + tpl_host_port_fuzzy_strict + src_path + ')';

exports.tpl_link_no_ip_fuzzy =
    // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    '(^|(?![.:/\\-_@])(?:[$+<=>^`|]|' + src_ZPCc + '))' +
    '((?![$+<=>^`|])' + tpl_host_port_no_ip_fuzzy_strict + src_path + ')';


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (true) {
  var invariant = __webpack_require__(4);
  var warning = __webpack_require__(5);
  var ReactPropTypesSecret = __webpack_require__(6);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(3);
var invariant = __webpack_require__(4);
var warning = __webpack_require__(5);

var ReactPropTypesSecret = __webpack_require__(6);
var checkPropTypes = __webpack_require__(34);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkify = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _linkifyIt = __webpack_require__(32);

var _linkifyIt2 = _interopRequireDefault(_linkifyIt);

var _tlds = __webpack_require__(37);

var _tlds2 = _interopRequireDefault(_tlds);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var linkify = exports.linkify = new _linkifyIt2.default();
linkify.tlds(_tlds2.default);

var Linkify = function (_React$Component) {
  _inherits(Linkify, _React$Component);

  function Linkify() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Linkify);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Linkify.__proto__ || Object.getPrototypeOf(Linkify)).call.apply(_ref, [this].concat(args))), _this), _this.parseCounter = 0, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Linkify, [{
    key: 'getMatches',
    value: function getMatches(string) {
      return linkify.match(string);
    }
  }, {
    key: 'parseString',
    value: function parseString(string) {
      var _this2 = this;

      var elements = [];
      if (string === '') {
        return elements;
      }

      var matches = this.getMatches(string);
      if (!matches) {
        return string;
      }

      var lastIndex = 0;
      matches.forEach(function (match, idx) {
        // Push the preceding text if there is any
        if (match.index > lastIndex) {
          elements.push(string.substring(lastIndex, match.index));
        }
        // Shallow update values that specified the match
        var props = { href: match.url, key: 'parse' + _this2.parseCounter + 'match' + idx };
        for (var key in _this2.props.properties) {
          var val = _this2.props.properties[key];
          if (val === Linkify.MATCH) {
            val = match.url;
          }

          props[key] = val;
        }
        elements.push(_react2.default.createElement(_this2.props.component, props, match.text));
        lastIndex = match.lastIndex;
      });

      if (lastIndex < string.length) {
        elements.push(string.substring(lastIndex));
      }

      return elements.length === 1 ? elements[0] : elements;
    }
  }, {
    key: 'parse',
    value: function parse(children) {
      var _this3 = this;

      var parsed = children;

      if (typeof children === 'string') {
        parsed = this.parseString(children);
      } else if (_react2.default.isValidElement(children) && children.type !== 'a' && children.type !== 'button') {
        parsed = _react2.default.cloneElement(children, { key: 'parse' + ++this.parseCounter }, this.parse(children.props.children));
      } else if (children instanceof Array) {
        parsed = children.map(function (child) {
          return _this3.parse(child);
        });
      }

      return parsed;
    }
  }, {
    key: 'render',
    value: function render() {
      this.parseCounter = 0;
      var parsedChildren = this.parse(this.props.children);

      return _react2.default.createElement(
        'span',
        { className: this.props.className },
        parsedChildren
      );
    }
  }]);

  return Linkify;
}(_react2.default.Component);

Linkify.MATCH = 'LINKIFY_MATCH';
Linkify.propTypes = {
  className: _propTypes2.default.string,
  component: _propTypes2.default.any,
  properties: _propTypes2.default.object,
  urlRegex: _propTypes2.default.object,
  emailRegex: _propTypes2.default.object
};
Linkify.defaultProps = {
  className: 'Linkify',
  component: 'a',
  properties: {}
};
exports.default = Linkify;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = [
  "aaa",
  "aarp",
  "abarth",
  "abb",
  "abbott",
  "abbvie",
  "abc",
  "able",
  "abogado",
  "abudhabi",
  "ac",
  "academy",
  "accenture",
  "accountant",
  "accountants",
  "aco",
  "active",
  "actor",
  "ad",
  "adac",
  "ads",
  "adult",
  "ae",
  "aeg",
  "aero",
  "aetna",
  "af",
  "afamilycompany",
  "afl",
  "africa",
  "ag",
  "agakhan",
  "agency",
  "ai",
  "aig",
  "aigo",
  "airbus",
  "airforce",
  "airtel",
  "akdn",
  "al",
  "alfaromeo",
  "alibaba",
  "alipay",
  "allfinanz",
  "allstate",
  "ally",
  "alsace",
  "alstom",
  "am",
  "americanexpress",
  "americanfamily",
  "amex",
  "amfam",
  "amica",
  "amsterdam",
  "analytics",
  "android",
  "anquan",
  "anz",
  "ao",
  "aol",
  "apartments",
  "app",
  "apple",
  "aq",
  "aquarelle",
  "ar",
  "arab",
  "aramco",
  "archi",
  "army",
  "arpa",
  "art",
  "arte",
  "as",
  "asda",
  "asia",
  "associates",
  "at",
  "athleta",
  "attorney",
  "au",
  "auction",
  "audi",
  "audible",
  "audio",
  "auspost",
  "author",
  "auto",
  "autos",
  "avianca",
  "aw",
  "aws",
  "ax",
  "axa",
  "az",
  "azure",
  "ba",
  "baby",
  "baidu",
  "banamex",
  "bananarepublic",
  "band",
  "bank",
  "bar",
  "barcelona",
  "barclaycard",
  "barclays",
  "barefoot",
  "bargains",
  "baseball",
  "basketball",
  "bauhaus",
  "bayern",
  "bb",
  "bbc",
  "bbt",
  "bbva",
  "bcg",
  "bcn",
  "bd",
  "be",
  "beats",
  "beauty",
  "beer",
  "bentley",
  "berlin",
  "best",
  "bestbuy",
  "bet",
  "bf",
  "bg",
  "bh",
  "bharti",
  "bi",
  "bible",
  "bid",
  "bike",
  "bing",
  "bingo",
  "bio",
  "biz",
  "bj",
  "black",
  "blackfriday",
  "blanco",
  "blockbuster",
  "blog",
  "bloomberg",
  "blue",
  "bm",
  "bms",
  "bmw",
  "bn",
  "bnl",
  "bnpparibas",
  "bo",
  "boats",
  "boehringer",
  "bofa",
  "bom",
  "bond",
  "boo",
  "book",
  "booking",
  "boots",
  "bosch",
  "bostik",
  "boston",
  "bot",
  "boutique",
  "box",
  "br",
  "bradesco",
  "bridgestone",
  "broadway",
  "broker",
  "brother",
  "brussels",
  "bs",
  "bt",
  "budapest",
  "bugatti",
  "build",
  "builders",
  "business",
  "buy",
  "buzz",
  "bv",
  "bw",
  "by",
  "bz",
  "bzh",
  "ca",
  "cab",
  "cafe",
  "cal",
  "call",
  "calvinklein",
  "cam",
  "camera",
  "camp",
  "cancerresearch",
  "canon",
  "capetown",
  "capital",
  "capitalone",
  "car",
  "caravan",
  "cards",
  "care",
  "career",
  "careers",
  "cars",
  "cartier",
  "casa",
  "case",
  "caseih",
  "cash",
  "casino",
  "cat",
  "catering",
  "catholic",
  "cba",
  "cbn",
  "cbre",
  "cbs",
  "cc",
  "cd",
  "ceb",
  "center",
  "ceo",
  "cern",
  "cf",
  "cfa",
  "cfd",
  "cg",
  "ch",
  "chanel",
  "channel",
  "chase",
  "chat",
  "cheap",
  "chintai",
  "christmas",
  "chrome",
  "chrysler",
  "church",
  "ci",
  "cipriani",
  "circle",
  "cisco",
  "citadel",
  "citi",
  "citic",
  "city",
  "cityeats",
  "ck",
  "cl",
  "claims",
  "cleaning",
  "click",
  "clinic",
  "clinique",
  "clothing",
  "cloud",
  "club",
  "clubmed",
  "cm",
  "cn",
  "co",
  "coach",
  "codes",
  "coffee",
  "college",
  "cologne",
  "com",
  "comcast",
  "commbank",
  "community",
  "company",
  "compare",
  "computer",
  "comsec",
  "condos",
  "construction",
  "consulting",
  "contact",
  "contractors",
  "cooking",
  "cookingchannel",
  "cool",
  "coop",
  "corsica",
  "country",
  "coupon",
  "coupons",
  "courses",
  "cr",
  "credit",
  "creditcard",
  "creditunion",
  "cricket",
  "crown",
  "crs",
  "cruise",
  "cruises",
  "csc",
  "cu",
  "cuisinella",
  "cv",
  "cw",
  "cx",
  "cy",
  "cymru",
  "cyou",
  "cz",
  "dabur",
  "dad",
  "dance",
  "data",
  "date",
  "dating",
  "datsun",
  "day",
  "dclk",
  "dds",
  "de",
  "deal",
  "dealer",
  "deals",
  "degree",
  "delivery",
  "dell",
  "deloitte",
  "delta",
  "democrat",
  "dental",
  "dentist",
  "desi",
  "design",
  "dev",
  "dhl",
  "diamonds",
  "diet",
  "digital",
  "direct",
  "directory",
  "discount",
  "discover",
  "dish",
  "diy",
  "dj",
  "dk",
  "dm",
  "dnp",
  "do",
  "docs",
  "doctor",
  "dodge",
  "dog",
  "doha",
  "domains",
  "dot",
  "download",
  "drive",
  "dtv",
  "dubai",
  "duck",
  "dunlop",
  "duns",
  "dupont",
  "durban",
  "dvag",
  "dvr",
  "dz",
  "earth",
  "eat",
  "ec",
  "eco",
  "edeka",
  "edu",
  "education",
  "ee",
  "eg",
  "email",
  "emerck",
  "energy",
  "engineer",
  "engineering",
  "enterprises",
  "epost",
  "epson",
  "equipment",
  "er",
  "ericsson",
  "erni",
  "es",
  "esq",
  "estate",
  "esurance",
  "et",
  "etisalat",
  "eu",
  "eurovision",
  "eus",
  "events",
  "everbank",
  "exchange",
  "expert",
  "exposed",
  "express",
  "extraspace",
  "fage",
  "fail",
  "fairwinds",
  "faith",
  "family",
  "fan",
  "fans",
  "farm",
  "farmers",
  "fashion",
  "fast",
  "fedex",
  "feedback",
  "ferrari",
  "ferrero",
  "fi",
  "fiat",
  "fidelity",
  "fido",
  "film",
  "final",
  "finance",
  "financial",
  "fire",
  "firestone",
  "firmdale",
  "fish",
  "fishing",
  "fit",
  "fitness",
  "fj",
  "fk",
  "flickr",
  "flights",
  "flir",
  "florist",
  "flowers",
  "fly",
  "fm",
  "fo",
  "foo",
  "food",
  "foodnetwork",
  "football",
  "ford",
  "forex",
  "forsale",
  "forum",
  "foundation",
  "fox",
  "fr",
  "free",
  "fresenius",
  "frl",
  "frogans",
  "frontdoor",
  "frontier",
  "ftr",
  "fujitsu",
  "fujixerox",
  "fun",
  "fund",
  "furniture",
  "futbol",
  "fyi",
  "ga",
  "gal",
  "gallery",
  "gallo",
  "gallup",
  "game",
  "games",
  "gap",
  "garden",
  "gb",
  "gbiz",
  "gd",
  "gdn",
  "ge",
  "gea",
  "gent",
  "genting",
  "george",
  "gf",
  "gg",
  "ggee",
  "gh",
  "gi",
  "gift",
  "gifts",
  "gives",
  "giving",
  "gl",
  "glade",
  "glass",
  "gle",
  "global",
  "globo",
  "gm",
  "gmail",
  "gmbh",
  "gmo",
  "gmx",
  "gn",
  "godaddy",
  "gold",
  "goldpoint",
  "golf",
  "goo",
  "goodhands",
  "goodyear",
  "goog",
  "google",
  "gop",
  "got",
  "gov",
  "gp",
  "gq",
  "gr",
  "grainger",
  "graphics",
  "gratis",
  "green",
  "gripe",
  "grocery",
  "group",
  "gs",
  "gt",
  "gu",
  "guardian",
  "gucci",
  "guge",
  "guide",
  "guitars",
  "guru",
  "gw",
  "gy",
  "hair",
  "hamburg",
  "hangout",
  "haus",
  "hbo",
  "hdfc",
  "hdfcbank",
  "health",
  "healthcare",
  "help",
  "helsinki",
  "here",
  "hermes",
  "hgtv",
  "hiphop",
  "hisamitsu",
  "hitachi",
  "hiv",
  "hk",
  "hkt",
  "hm",
  "hn",
  "hockey",
  "holdings",
  "holiday",
  "homedepot",
  "homegoods",
  "homes",
  "homesense",
  "honda",
  "honeywell",
  "horse",
  "hospital",
  "host",
  "hosting",
  "hot",
  "hoteles",
  "hotels",
  "hotmail",
  "house",
  "how",
  "hr",
  "hsbc",
  "ht",
  "hu",
  "hughes",
  "hyatt",
  "hyundai",
  "ibm",
  "icbc",
  "ice",
  "icu",
  "id",
  "ie",
  "ieee",
  "ifm",
  "ikano",
  "il",
  "im",
  "imamat",
  "imdb",
  "immo",
  "immobilien",
  "in",
  "industries",
  "infiniti",
  "info",
  "ing",
  "ink",
  "institute",
  "insurance",
  "insure",
  "int",
  "intel",
  "international",
  "intuit",
  "investments",
  "io",
  "ipiranga",
  "iq",
  "ir",
  "irish",
  "is",
  "iselect",
  "ismaili",
  "ist",
  "istanbul",
  "it",
  "itau",
  "itv",
  "iveco",
  "iwc",
  "jaguar",
  "java",
  "jcb",
  "jcp",
  "je",
  "jeep",
  "jetzt",
  "jewelry",
  "jio",
  "jlc",
  "jll",
  "jm",
  "jmp",
  "jnj",
  "jo",
  "jobs",
  "joburg",
  "jot",
  "joy",
  "jp",
  "jpmorgan",
  "jprs",
  "juegos",
  "juniper",
  "kaufen",
  "kddi",
  "ke",
  "kerryhotels",
  "kerrylogistics",
  "kerryproperties",
  "kfh",
  "kg",
  "kh",
  "ki",
  "kia",
  "kim",
  "kinder",
  "kindle",
  "kitchen",
  "kiwi",
  "km",
  "kn",
  "koeln",
  "komatsu",
  "kosher",
  "kp",
  "kpmg",
  "kpn",
  "kr",
  "krd",
  "kred",
  "kuokgroup",
  "kw",
  "ky",
  "kyoto",
  "kz",
  "la",
  "lacaixa",
  "ladbrokes",
  "lamborghini",
  "lamer",
  "lancaster",
  "lancia",
  "lancome",
  "land",
  "landrover",
  "lanxess",
  "lasalle",
  "lat",
  "latino",
  "latrobe",
  "law",
  "lawyer",
  "lb",
  "lc",
  "lds",
  "lease",
  "leclerc",
  "lefrak",
  "legal",
  "lego",
  "lexus",
  "lgbt",
  "li",
  "liaison",
  "lidl",
  "life",
  "lifeinsurance",
  "lifestyle",
  "lighting",
  "like",
  "lilly",
  "limited",
  "limo",
  "lincoln",
  "linde",
  "link",
  "lipsy",
  "live",
  "living",
  "lixil",
  "lk",
  "loan",
  "loans",
  "locker",
  "locus",
  "loft",
  "lol",
  "london",
  "lotte",
  "lotto",
  "love",
  "lpl",
  "lplfinancial",
  "lr",
  "ls",
  "lt",
  "ltd",
  "ltda",
  "lu",
  "lundbeck",
  "lupin",
  "luxe",
  "luxury",
  "lv",
  "ly",
  "ma",
  "macys",
  "madrid",
  "maif",
  "maison",
  "makeup",
  "man",
  "management",
  "mango",
  "map",
  "market",
  "marketing",
  "markets",
  "marriott",
  "marshalls",
  "maserati",
  "mattel",
  "mba",
  "mc",
  "mckinsey",
  "md",
  "me",
  "med",
  "media",
  "meet",
  "melbourne",
  "meme",
  "memorial",
  "men",
  "menu",
  "meo",
  "merckmsd",
  "metlife",
  "mg",
  "mh",
  "miami",
  "microsoft",
  "mil",
  "mini",
  "mint",
  "mit",
  "mitsubishi",
  "mk",
  "ml",
  "mlb",
  "mls",
  "mm",
  "mma",
  "mn",
  "mo",
  "mobi",
  "mobile",
  "mobily",
  "moda",
  "moe",
  "moi",
  "mom",
  "monash",
  "money",
  "monster",
  "mopar",
  "mormon",
  "mortgage",
  "moscow",
  "moto",
  "motorcycles",
  "mov",
  "movie",
  "movistar",
  "mp",
  "mq",
  "mr",
  "ms",
  "msd",
  "mt",
  "mtn",
  "mtr",
  "mu",
  "museum",
  "mutual",
  "mv",
  "mw",
  "mx",
  "my",
  "mz",
  "na",
  "nab",
  "nadex",
  "nagoya",
  "name",
  "nationwide",
  "natura",
  "navy",
  "nba",
  "nc",
  "ne",
  "nec",
  "net",
  "netbank",
  "netflix",
  "network",
  "neustar",
  "new",
  "newholland",
  "news",
  "next",
  "nextdirect",
  "nexus",
  "nf",
  "nfl",
  "ng",
  "ngo",
  "nhk",
  "ni",
  "nico",
  "nike",
  "nikon",
  "ninja",
  "nissan",
  "nissay",
  "nl",
  "no",
  "nokia",
  "northwesternmutual",
  "norton",
  "now",
  "nowruz",
  "nowtv",
  "np",
  "nr",
  "nra",
  "nrw",
  "ntt",
  "nu",
  "nyc",
  "nz",
  "obi",
  "observer",
  "off",
  "office",
  "okinawa",
  "olayan",
  "olayangroup",
  "oldnavy",
  "ollo",
  "om",
  "omega",
  "one",
  "ong",
  "onl",
  "online",
  "onyourside",
  "ooo",
  "open",
  "oracle",
  "orange",
  "org",
  "organic",
  "origins",
  "osaka",
  "otsuka",
  "ott",
  "ovh",
  "pa",
  "page",
  "panasonic",
  "panerai",
  "paris",
  "pars",
  "partners",
  "parts",
  "party",
  "passagens",
  "pay",
  "pccw",
  "pe",
  "pet",
  "pf",
  "pfizer",
  "pg",
  "ph",
  "pharmacy",
  "phd",
  "philips",
  "phone",
  "photo",
  "photography",
  "photos",
  "physio",
  "piaget",
  "pics",
  "pictet",
  "pictures",
  "pid",
  "pin",
  "ping",
  "pink",
  "pioneer",
  "pizza",
  "pk",
  "pl",
  "place",
  "play",
  "playstation",
  "plumbing",
  "plus",
  "pm",
  "pn",
  "pnc",
  "pohl",
  "poker",
  "politie",
  "porn",
  "post",
  "pr",
  "pramerica",
  "praxi",
  "press",
  "prime",
  "pro",
  "prod",
  "productions",
  "prof",
  "progressive",
  "promo",
  "properties",
  "property",
  "protection",
  "pru",
  "prudential",
  "ps",
  "pt",
  "pub",
  "pw",
  "pwc",
  "py",
  "qa",
  "qpon",
  "quebec",
  "quest",
  "qvc",
  "racing",
  "radio",
  "raid",
  "re",
  "read",
  "realestate",
  "realtor",
  "realty",
  "recipes",
  "red",
  "redstone",
  "redumbrella",
  "rehab",
  "reise",
  "reisen",
  "reit",
  "reliance",
  "ren",
  "rent",
  "rentals",
  "repair",
  "report",
  "republican",
  "rest",
  "restaurant",
  "review",
  "reviews",
  "rexroth",
  "rich",
  "richardli",
  "ricoh",
  "rightathome",
  "ril",
  "rio",
  "rip",
  "rmit",
  "ro",
  "rocher",
  "rocks",
  "rodeo",
  "rogers",
  "room",
  "rs",
  "rsvp",
  "ru",
  "rugby",
  "ruhr",
  "run",
  "rw",
  "rwe",
  "ryukyu",
  "sa",
  "saarland",
  "safe",
  "safety",
  "sakura",
  "sale",
  "salon",
  "samsclub",
  "samsung",
  "sandvik",
  "sandvikcoromant",
  "sanofi",
  "sap",
  "sapo",
  "sarl",
  "sas",
  "save",
  "saxo",
  "sb",
  "sbi",
  "sbs",
  "sc",
  "sca",
  "scb",
  "schaeffler",
  "schmidt",
  "scholarships",
  "school",
  "schule",
  "schwarz",
  "science",
  "scjohnson",
  "scor",
  "scot",
  "sd",
  "se",
  "search",
  "seat",
  "secure",
  "security",
  "seek",
  "select",
  "sener",
  "services",
  "ses",
  "seven",
  "sew",
  "sex",
  "sexy",
  "sfr",
  "sg",
  "sh",
  "shangrila",
  "sharp",
  "shaw",
  "shell",
  "shia",
  "shiksha",
  "shoes",
  "shop",
  "shopping",
  "shouji",
  "show",
  "showtime",
  "shriram",
  "si",
  "silk",
  "sina",
  "singles",
  "site",
  "sj",
  "sk",
  "ski",
  "skin",
  "sky",
  "skype",
  "sl",
  "sling",
  "sm",
  "smart",
  "smile",
  "sn",
  "sncf",
  "so",
  "soccer",
  "social",
  "softbank",
  "software",
  "sohu",
  "solar",
  "solutions",
  "song",
  "sony",
  "soy",
  "space",
  "spiegel",
  "spot",
  "spreadbetting",
  "sr",
  "srl",
  "srt",
  "st",
  "stada",
  "staples",
  "star",
  "starhub",
  "statebank",
  "statefarm",
  "statoil",
  "stc",
  "stcgroup",
  "stockholm",
  "storage",
  "store",
  "stream",
  "studio",
  "study",
  "style",
  "su",
  "sucks",
  "supplies",
  "supply",
  "support",
  "surf",
  "surgery",
  "suzuki",
  "sv",
  "swatch",
  "swiftcover",
  "swiss",
  "sx",
  "sy",
  "sydney",
  "symantec",
  "systems",
  "sz",
  "tab",
  "taipei",
  "talk",
  "taobao",
  "target",
  "tatamotors",
  "tatar",
  "tattoo",
  "tax",
  "taxi",
  "tc",
  "tci",
  "td",
  "tdk",
  "team",
  "tech",
  "technology",
  "tel",
  "telecity",
  "telefonica",
  "temasek",
  "tennis",
  "teva",
  "tf",
  "tg",
  "th",
  "thd",
  "theater",
  "theatre",
  "tiaa",
  "tickets",
  "tienda",
  "tiffany",
  "tips",
  "tires",
  "tirol",
  "tj",
  "tjmaxx",
  "tjx",
  "tk",
  "tkmaxx",
  "tl",
  "tm",
  "tmall",
  "tn",
  "to",
  "today",
  "tokyo",
  "tools",
  "top",
  "toray",
  "toshiba",
  "total",
  "tours",
  "town",
  "toyota",
  "toys",
  "tr",
  "trade",
  "trading",
  "training",
  "travel",
  "travelchannel",
  "travelers",
  "travelersinsurance",
  "trust",
  "trv",
  "tt",
  "tube",
  "tui",
  "tunes",
  "tushu",
  "tv",
  "tvs",
  "tw",
  "tz",
  "ua",
  "ubank",
  "ubs",
  "uconnect",
  "ug",
  "uk",
  "unicom",
  "university",
  "uno",
  "uol",
  "ups",
  "us",
  "uy",
  "uz",
  "va",
  "vacations",
  "vana",
  "vanguard",
  "vc",
  "ve",
  "vegas",
  "ventures",
  "verisign",
  "versicherung",
  "vet",
  "vg",
  "vi",
  "viajes",
  "video",
  "vig",
  "viking",
  "villas",
  "vin",
  "vip",
  "virgin",
  "visa",
  "vision",
  "vista",
  "vistaprint",
  "viva",
  "vivo",
  "vlaanderen",
  "vn",
  "vodka",
  "volkswagen",
  "volvo",
  "vote",
  "voting",
  "voto",
  "voyage",
  "vu",
  "vuelos",
  "wales",
  "walmart",
  "walter",
  "wang",
  "wanggou",
  "warman",
  "watch",
  "watches",
  "weather",
  "weatherchannel",
  "webcam",
  "weber",
  "website",
  "wed",
  "wedding",
  "weibo",
  "weir",
  "wf",
  "whoswho",
  "wien",
  "wiki",
  "williamhill",
  "win",
  "windows",
  "wine",
  "winners",
  "wme",
  "wolterskluwer",
  "woodside",
  "work",
  "works",
  "world",
  "wow",
  "ws",
  "wtc",
  "wtf",
  "xbox",
  "xerox",
  "xfinity",
  "xihuan",
  "xin",
  "कॉम", // xn--11b4c3d
  "セール", // xn--1ck2e1b
  "佛山", // xn--1qqw23a
  "ಭಾರತ", // xn--2scrj9c
  "慈善", // xn--30rr7y
  "集团", // xn--3bst00m
  "在线", // xn--3ds443g
  "한국", // xn--3e0b707e
  "ଭାରତ", // xn--3hcrj9c
  "大众汽车", // xn--3oq18vl8pn36a
  "点看", // xn--3pxu8k
  "คอม", // xn--42c2d9a
  "ভাৰত", // xn--45br5cyl
  "ভারত", // xn--45brj9c
  "八卦", // xn--45q11c
  "موقع", // xn--4gbrim
  "বাংলা", // xn--54b7fta0cc
  "公益", // xn--55qw42g
  "公司", // xn--55qx5d
  "香格里拉", // xn--5su34j936bgsg
  "网站", // xn--5tzm5g
  "移动", // xn--6frz82g
  "我爱你", // xn--6qq986b3xl
  "москва", // xn--80adxhks
  "қаз", // xn--80ao21a
  "католик", // xn--80aqecdr1a
  "онлайн", // xn--80asehdb
  "сайт", // xn--80aswg
  "联通", // xn--8y0a063a
  "срб", // xn--90a3ac
  "бг", // xn--90ae
  "бел", // xn--90ais
  "קום", // xn--9dbq2a
  "时尚", // xn--9et52u
  "微博", // xn--9krt00a
  "淡马锡", // xn--b4w605ferd
  "ファッション", // xn--bck1b9a5dre4c
  "орг", // xn--c1avg
  "नेट", // xn--c2br7g
  "ストア", // xn--cck2b3b
  "삼성", // xn--cg4bki
  "சிங்கப்பூர்", // xn--clchc0ea0b2g2a9gcd
  "商标", // xn--czr694b
  "商店", // xn--czrs0t
  "商城", // xn--czru2d
  "дети", // xn--d1acj3b
  "мкд", // xn--d1alf
  "ею", // xn--e1a4c
  "ポイント", // xn--eckvdtc9d
  "新闻", // xn--efvy88h
  "工行", // xn--estv75g
  "家電", // xn--fct429k
  "كوم", // xn--fhbei
  "中文网", // xn--fiq228c5hs
  "中信", // xn--fiq64b
  "中国", // xn--fiqs8s
  "中國", // xn--fiqz9s
  "娱乐", // xn--fjq720a
  "谷歌", // xn--flw351e
  "భారత్", // xn--fpcrj9c3d
  "ලංකා", // xn--fzc2c9e2c
  "電訊盈科", // xn--fzys8d69uvgm
  "购物", // xn--g2xx48c
  "クラウド", // xn--gckr3f0f
  "ભારત", // xn--gecrj9c
  "通販", // xn--gk3at1e
  "भारतम्", // xn--h2breg3eve
  "भारत", // xn--h2brj9c
  "भारोत", // xn--h2brj9c8c
  "网店", // xn--hxt814e
  "संगठन", // xn--i1b6b1a6a2e
  "餐厅", // xn--imr513n
  "网络", // xn--io0a7i
  "ком", // xn--j1aef
  "укр", // xn--j1amh
  "香港", // xn--j6w193g
  "诺基亚", // xn--jlq61u9w7b
  "食品", // xn--jvr189m
  "飞利浦", // xn--kcrx77d1x4a
  "台湾", // xn--kprw13d
  "台灣", // xn--kpry57d
  "手表", // xn--kpu716f
  "手机", // xn--kput3i
  "мон", // xn--l1acc
  "الجزائر", // xn--lgbbat1ad8j
  "عمان", // xn--mgb9awbf
  "ارامكو", // xn--mgba3a3ejt
  "ایران", // xn--mgba3a4f16a
  "العليان", // xn--mgba7c0bbn0a
  "اتصالات", // xn--mgbaakc7dvf
  "امارات", // xn--mgbaam7a8h
  "بازار", // xn--mgbab2bd
  "پاکستان", // xn--mgbai9azgqp6j
  "الاردن", // xn--mgbayh7gpa
  "موبايلي", // xn--mgbb9fbpob
  "بارت", // xn--mgbbh1a
  "بھارت", // xn--mgbbh1a71e
  "المغرب", // xn--mgbc0a9azcg
  "ابوظبي", // xn--mgbca7dzdo
  "السعودية", // xn--mgberp4a5d4ar
  "ڀارت", // xn--mgbgu82a
  "كاثوليك", // xn--mgbi4ecexp
  "سودان", // xn--mgbpl2fh
  "همراه", // xn--mgbt3dhd
  "عراق", // xn--mgbtx2b
  "مليسيا", // xn--mgbx4cd0ab
  "澳門", // xn--mix891f
  "닷컴", // xn--mk1bu44c
  "政府", // xn--mxtq1m
  "شبكة", // xn--ngbc5azd
  "بيتك", // xn--ngbe9e0a
  "عرب", // xn--ngbrx
  "გე", // xn--node
  "机构", // xn--nqv7f
  "组织机构", // xn--nqv7fs00ema
  "健康", // xn--nyqy26a
  "ไทย", // xn--o3cw4h
  "سورية", // xn--ogbpf8fl
  "рус", // xn--p1acf
  "рф", // xn--p1ai
  "珠宝", // xn--pbt977c
  "تونس", // xn--pgbs0dh
  "大拿", // xn--pssy2u
  "みんな", // xn--q9jyb4c
  "グーグル", // xn--qcka1pmc
  "ελ", // xn--qxam
  "世界", // xn--rhqv96g
  "書籍", // xn--rovu88b
  "ഭാരതം", // xn--rvc1e0am3e
  "ਭਾਰਤ", // xn--s9brj9c
  "网址", // xn--ses554g
  "닷넷", // xn--t60b56a
  "コム", // xn--tckwe
  "天主教", // xn--tiq49xqyj
  "游戏", // xn--unup4y
  "vermögensberater", // xn--vermgensberater-ctb
  "vermögensberatung", // xn--vermgensberatung-pwb
  "企业", // xn--vhquv
  "信息", // xn--vuq861b
  "嘉里大酒店", // xn--w4r85el8fhu5dnra
  "嘉里", // xn--w4rs40l
  "مصر", // xn--wgbh1c
  "قطر", // xn--wgbl6a
  "广东", // xn--xhq521b
  "இலங்கை", // xn--xkc2al3hye2a
  "இந்தியா", // xn--xkc2dl3a5ee0h
  "հայ", // xn--y9a3aq
  "新加坡", // xn--yfro4i67o
  "فلسطين", // xn--ygbi2ammx
  "政务", // xn--zfr164b
  "xperia",
  "xxx",
  "xyz",
  "yachts",
  "yahoo",
  "yamaxun",
  "yandex",
  "ye",
  "yodobashi",
  "yoga",
  "yokohama",
  "you",
  "youtube",
  "yt",
  "yun",
  "za",
  "zappos",
  "zara",
  "zero",
  "zip",
  "zippo",
  "zm",
  "zone",
  "zuerich",
  "zw"
];


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports=/[\0-\x1F\x7F-\x9F]/

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports=/[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "chat-icon.e0d2b748.svg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo-no-bg.7718b3e3.svg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "notification.0d062b33.mp3";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ })
/******/ ]);
});