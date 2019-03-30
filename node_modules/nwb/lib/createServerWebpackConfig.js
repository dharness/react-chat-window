'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createServerWebpackConfig;

var _createWebpackConfig = require('./createWebpackConfig');

var _createWebpackConfig2 = _interopRequireDefault(_createWebpackConfig);

var _getPluginConfig = require('./getPluginConfig');

var _getPluginConfig2 = _interopRequireDefault(_getPluginConfig);

var _getUserConfig = require('./getUserConfig');

var _getUserConfig2 = _interopRequireDefault(_getUserConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Create Webpack entry config for the client which will subscribe to Hot Module
 * Replacement updates.
 */
function getHMRClientEntries(args, serverConfig) {
  // null config indicates we're creating config for use in Express middleware,
  // where the server config is out of our hands and we're using
  // webpack-hot-middleware for HMR.
  if (serverConfig == null) {
    var hotMiddlewareOptions = args.reload ? '?reload=true' : '';
    return [
    // Polyfill EventSource for IE, as webpack-hot-middleware/client uses it
    require.resolve('eventsource-polyfill'), require.resolve('webpack-hot-middleware/client') + hotMiddlewareOptions];
  }
  // Otherwise, we're using webpack-dev-server's client
  var hmrURL = '/';
  // Set full HMR URL if the user customised it (#279)
  if (args.host || args.port) {
    hmrURL = `http://${serverConfig.host || 'localhost'}:${serverConfig.port}/`;
  }

  return [require.resolve('webpack-dev-server/client') + `?${hmrURL}`, require.resolve(`webpack/hot/${args.reload ? '' : 'only-'}dev-server`)];
}

/**
 * Creates Webpack config for serving a watch build with Hot Module Replacement.
 */
function createServerWebpackConfig(args, commandConfig, serverConfig) {
  var pluginConfig = (0, _getPluginConfig2.default)(args);
  var userConfig = (0, _getUserConfig2.default)(args, { pluginConfig });

  var entry = commandConfig.entry,
      _commandConfig$plugin = commandConfig.plugins,
      plugins = _commandConfig$plugin === undefined ? {} : _commandConfig$plugin,
      otherCommandConfig = _objectWithoutProperties(commandConfig, ['entry', 'plugins']);

  if (args['auto-install'] || args.install) {
    plugins.autoInstall = true;
  }

  return (0, _createWebpackConfig2.default)(_extends({
    server: true,
    devtool: 'cheap-module-source-map',
    entry: getHMRClientEntries(args, serverConfig).concat(entry),
    plugins
  }, otherCommandConfig), pluginConfig, userConfig);
}
module.exports = exports['default'];