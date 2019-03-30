'use strict';

exports.__esModule = true;
exports.default = webpackBuild;

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _createWebpackConfig = require('./createWebpackConfig');

var _createWebpackConfig2 = _interopRequireDefault(_createWebpackConfig);

var _debug = require('./debug');

var _debug2 = _interopRequireDefault(_debug);

var _getPluginConfig = require('./getPluginConfig');

var _getPluginConfig2 = _interopRequireDefault(_getPluginConfig);

var _getUserConfig = require('./getUserConfig');

var _getUserConfig2 = _interopRequireDefault(_getUserConfig);

var _utils = require('./utils');

var _webpackUtils = require('./webpackUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * If you pass a non-falsy type, this will handle spinner display and output
 * logging itself, otherwise use the stats provided in the callback.
 */
function webpackBuild(type, args, buildConfig, cb) {
  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'production';
  }

  var pluginConfig = (0, _getPluginConfig2.default)(args);
  var userConfig = void 0;
  try {
    userConfig = (0, _getUserConfig2.default)(args, { pluginConfig });
  } catch (e) {
    return cb(e);
  }

  if (typeof buildConfig == 'function') {
    buildConfig = buildConfig(args);
  }

  var webpackConfig = void 0;
  try {
    webpackConfig = (0, _createWebpackConfig2.default)(buildConfig, pluginConfig, userConfig);
  } catch (e) {
    return cb(e);
  }

  (0, _debug2.default)('webpack config: %s', (0, _utils.deepToString)(webpackConfig));

  var spinner = void 0;
  if (type) {
    spinner = (0, _ora2.default)(`Building ${type}`).start();
  }
  var compiler = (0, _webpack2.default)(webpackConfig);
  compiler.run(function (err, stats) {
    if (err) {
      if (spinner) {
        spinner.fail();
      }
      return cb(err);
    }
    if (spinner || stats.hasErrors()) {
      (0, _webpackUtils.logBuildResults)(stats, spinner);
    }
    if (stats.hasErrors()) {
      return cb(new Error('Build failed with errors.'));
    }
    cb(null, stats);
  });
}
module.exports = exports['default'];