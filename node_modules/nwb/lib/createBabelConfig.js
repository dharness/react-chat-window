'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createBabelConfig;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_STAGE = 2;
var RUNTIME_PATH = _path2.default.dirname(require.resolve('babel-runtime/package'));

function createBabelConfig() {
  var buildConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var userConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var commonJSInterop = buildConfig.commonJSInterop,
      _buildConfig$modules = buildConfig.modules,
      modules = _buildConfig$modules === undefined ? false : _buildConfig$modules,
      _buildConfig$plugins = buildConfig.plugins,
      buildPlugins = _buildConfig$plugins === undefined ? [] : _buildConfig$plugins,
      buildPresets = buildConfig.presets,
      _buildConfig$removePr = buildConfig.removePropTypes,
      buildRemovePropTypes = _buildConfig$removePr === undefined ? false : _buildConfig$removePr,
      setRuntimePath = buildConfig.setRuntimePath,
      _buildConfig$stage = buildConfig.stage,
      buildStage = _buildConfig$stage === undefined ? DEFAULT_STAGE : _buildConfig$stage,
      _buildConfig$webpack = buildConfig.webpack,
      webpack = _buildConfig$webpack === undefined ? true : _buildConfig$webpack;
  var cherryPick = userConfig.cherryPick,
      loose = userConfig.loose,
      _userConfig$plugins = userConfig.plugins,
      userPlugins = _userConfig$plugins === undefined ? [] : _userConfig$plugins,
      userPresets = userConfig.presets,
      reactConstantElements = userConfig.reactConstantElements,
      userRemovePropTypes = userConfig.removePropTypes,
      userRuntime = userConfig.runtime,
      userStage = userConfig.stage;


  var presets = [];
  var plugins = [];

  // Default to loose mode unless explicitly configured
  if ((0, _utils.typeOf)(loose) === 'undefined') {
    loose = true;
  }

  // ES2015 and ES2016 presets
  presets.push([require.resolve('babel-preset-es2015'), { loose, modules }], require.resolve('babel-preset-es2016'));
  // Babel 6's stage-3 preset contains all the es2017 plugins, so only use the
  // es2017 preset if the user has disabled use of a stage preset.
  if (userStage === false) {
    presets.push(require.resolve('babel-preset-es2017'));
  }

  // Additional build presets
  if (Array.isArray(buildPresets)) {
    buildPresets.forEach(function (preset) {
      // Presets which are configurable via user config are specified by name so
      // customisation can be handled in this module.
      if (preset === 'react-prod') {
        // Hoist static element subtrees up so React can skip them when reconciling
        if (reactConstantElements !== false) {
          plugins.push(require.resolve('babel-plugin-transform-react-constant-elements'));
        }
        // Remove or wrap propTypes and optionally remove prop-types imports
        if (userRemovePropTypes !== false) {
          plugins.push([require.resolve('babel-plugin-transform-react-remove-prop-types'), typeof userRemovePropTypes === 'object' ? userRemovePropTypes : {}]);
        }
      }
      // All other presets are assumed to be paths to a preset module
      else {
          presets.push(preset);
        }
    });
  }

  // Stage preset
  var stage = userStage != null ? userStage : buildStage;
  if (typeof stage == 'number') {
    presets.push(require.resolve(`babel-preset-stage-${stage}`));
    // Decorators are stage 2 but not supported by Babel yet - add the legacy
    // transform for support in the meantime.
    if (stage <= 2) {
      plugins.push(require.resolve('babel-plugin-transform-decorators-legacy'));
    }
  }

  if (userPresets) {
    presets = presets.concat(userPresets);
  }

  var config = { presets };

  plugins = plugins.concat(buildPlugins, userPlugins);

  // App builds use the 'react-prod' preset to remove/wrap propTypes, component
  // builds use this config instead.
  if (buildRemovePropTypes) {
    // User config can disable removal of propTypes
    if (userRemovePropTypes !== false) {
      plugins.push([require.resolve('babel-plugin-transform-react-remove-prop-types'), _extends({}, typeof buildRemovePropTypes === 'object' ? buildRemovePropTypes : {}, typeof userRemovePropTypes === 'object' ? userRemovePropTypes : {})]);
    }
  }

  // The Runtime transform imports various things into a module based on usage.
  // Turn regenerator on by default to enable use of async/await and generators
  // without configuration.
  var runtimeTransformOptions = {
    helpers: false,
    polyfill: false,
    regenerator: true
  };
  if (setRuntimePath !== false) {
    runtimeTransformOptions.moduleName = RUNTIME_PATH;
  }
  if (userRuntime !== false) {
    if (userRuntime === true) {
      // Enable all features
      runtimeTransformOptions = {};
      if (setRuntimePath !== false) {
        runtimeTransformOptions.moduleName = RUNTIME_PATH;
      }
    } else if ((0, _utils.typeOf)(userRuntime) === 'string') {
      // Enable the named feature
      runtimeTransformOptions[userRuntime] = true;
    }
    plugins.push([require.resolve('babel-plugin-transform-runtime'), runtimeTransformOptions]);
  }

  // Allow Babel to parse (but not transform) import() when used with Webpack
  if (webpack) {
    plugins.push(require.resolve('babel-plugin-syntax-dynamic-import'));
  }

  // Provide CommonJS interop so users don't have to tag a .default onto their
  // imports if they're using vanilla Node.js require().
  if (commonJSInterop) {
    plugins.push(require.resolve('babel-plugin-add-module-exports'));
  }

  // The lodash plugin supports generic cherry-picking for named modules
  if (cherryPick) {
    plugins.push([require.resolve('babel-plugin-lodash'), { id: cherryPick }]);
  }

  if (plugins.length > 0) {
    config.plugins = plugins;
  }

  return config;
}
module.exports = exports['default'];