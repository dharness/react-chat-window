'use strict';

exports.__esModule = true;
exports.default = getPluginConfig;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _resolve = require('resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

var _debug = require('./debug');

var _debug2 = _interopRequireDefault(_debug);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPackagePlugins(cwd) {
  var pkg = require(_path2.default.join(cwd, 'package.json'));
  return [].concat(Object.keys(pkg.dependencies || {}), Object.keys(pkg.devDependencies || {})).filter(function (dep) {
    return (/^nwb-/.test(dep)
    );
  });
}

/**
 * Look for nwb-* plugin dependencies in package.json and plugins specified as
 * arguments when supported, import them and merge the plugin config objects
 * they export.
 */
function getPluginConfig() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$cwd = _ref.cwd,
      cwd = _ref$cwd === undefined ? process.cwd() : _ref$cwd;

  var plugins = [];

  try {
    var pkgPlugins = plugins.concat(getPackagePlugins(cwd));
    (0, _debug2.default)('%s nwb-* dependencies in package.json', pkgPlugins.length);
    plugins = plugins.concat(pkgPlugins);
  } catch (e) {
    // pass
  }

  var argsPlugins = (0, _utils.getArgsPlugins)(args);
  if (argsPlugins.length !== 0) {
    (0, _debug2.default)('%s plugins in arguments', argsPlugins.length);
    plugins = plugins.concat(argsPlugins);
  }

  if (plugins.length === 0) {
    return {};
  }

  plugins = (0, _utils.unique)(plugins);
  (0, _debug2.default)('nwb plugins: %o', plugins);

  var pluginConfig = {};
  plugins.forEach(function (plugin) {
    var pluginModule = require(_resolve2.default.sync(plugin, { basedir: cwd }));
    pluginConfig = (0, _webpackMerge2.default)(pluginConfig, pluginModule);
  });

  (0, _debug2.default)('plugin config: %s', (0, _utils.deepToString)(pluginConfig));

  return pluginConfig;
}
module.exports = exports['default'];