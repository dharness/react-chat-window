'use strict';

exports.__esModule = true;
var CONFIG_FILE_NAME = exports.CONFIG_FILE_NAME = 'nwb.config.js';

var DEFAULT_PORT = exports.DEFAULT_PORT = process.env.PORT || 3000;

var INFERNO_APP = exports.INFERNO_APP = 'inferno-app';
var PREACT_APP = exports.PREACT_APP = 'preact-app';
var REACT_APP = exports.REACT_APP = 'react-app';
var REACT_COMPONENT = exports.REACT_COMPONENT = 'react-component';
var WEB_APP = exports.WEB_APP = 'web-app';
var WEB_MODULE = exports.WEB_MODULE = 'web-module';

var PROJECT_TYPES = exports.PROJECT_TYPES = new Set([INFERNO_APP, PREACT_APP, REACT_APP, REACT_COMPONENT, WEB_APP, WEB_MODULE]);