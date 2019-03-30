'use strict';

exports.__esModule = true;
exports.default = devServer;

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

var _debug = require('./debug');

var _debug2 = _interopRequireDefault(_debug);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Use Webpack Dev Server to build and serve assets using Webpack's watch mode,
 * hot reload changes in the browser and display compile error overlays.
 *
 * Static content is handled by CopyPlugin.
 */
function devServer(webpackConfig, serverConfig, cb) {
  var compiler = (0, _webpack2.default)(webpackConfig);

  var host = serverConfig.host,
      port = serverConfig.port,
      otherServerConfig = _objectWithoutProperties(serverConfig, ['host', 'port']);

  var webpackDevServerOptions = (0, _webpackMerge2.default)({
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    overlay: true,
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }, otherServerConfig);

  (0, _debug2.default)('webpack dev server options: %s', (0, _utils.deepToString)(webpackDevServerOptions));

  var server = new _webpackDevServer2.default(compiler, webpackDevServerOptions);

  function onServerStart(err) {
    if (err) cb(err);
  }

  // Only provide host config if it was explicitly specified by the user
  if (host) {
    server.listen(port, host, onServerStart);
  } else {
    server.listen(port, onServerStart);
  }
}
module.exports = exports['default'];