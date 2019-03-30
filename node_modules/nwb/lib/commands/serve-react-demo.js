'use strict';

exports.__esModule = true;
exports.default = serveReactDemo;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _utils = require('../utils');

var _webpackServer = require('../webpackServer');

var _webpackServer2 = _interopRequireDefault(_webpackServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Serve a React demo app from demo/src/index.js.
 */
function serveReactDemo(args, cb) {
  var pkg = require(_path2.default.resolve('package.json'));

  var dist = _path2.default.resolve('demo/dist');

  var config = {
    babel: {
      presets: [require.resolve('babel-preset-react')],
      stage: 1
    },
    entry: [_path2.default.resolve('demo/src/index.js')],
    output: {
      filename: 'demo.js',
      path: dist,
      publicPath: '/'
    },
    plugins: {
      html: {
        mountId: 'demo',
        title: `${pkg.name} ${pkg.version} Demo`
      }
    }
  };

  if (args.hmr !== false && args.hmre !== false) {
    config.babel.presets.push(require.resolve('../react/react-hmre-preset'));
  }

  if ((0, _utils.directoryExists)('demo/public')) {
    config.plugins.copy = [{ from: _path2.default.resolve('demo/public'), to: dist }];
  }

  (0, _webpackServer2.default)(args, config, cb);
}
module.exports = exports['default'];