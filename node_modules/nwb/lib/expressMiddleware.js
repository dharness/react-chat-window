'use strict';

exports.__esModule = true;
exports.default = nwbMiddleware;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _appCommands = require('./appCommands');

var _constants = require('./constants');

var _createServerWebpackConfig = require('./createServerWebpackConfig');

var _createServerWebpackConfig2 = _interopRequireDefault(_createServerWebpackConfig);

var _debug = require('./debug');

var _debug2 = _interopRequireDefault(_debug);

var _getUserConfig = require('./getUserConfig');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_TYPE_CONFIG = {
  [_constants.INFERNO_APP]: './inferno',
  [_constants.PREACT_APP]: './preact',
  [_constants.REACT_APP]: './react',
  [_constants.WEB_APP]: './web'

  /**
   * Express middleware for serving an app with hot reloading - equivalent to
   * having run `nwb serve`, but from your own server.
   */
};function nwbMiddleware(express) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  (0, _assert2.default)(express && typeof express.Router === 'function', 'The express module must be passed as the first argument to nwb middleware');

  var projectType = options.type;
  if (projectType == null) {
    projectType = (0, _getUserConfig.getProjectType)({ _: ['serve'], config: options.config });
  }
  if (!APP_TYPE_CONFIG[projectType]) {
    throw new Error(`nwb Express middleware is unable to handle '${projectType}' projects, only ` + (0, _utils.joinAnd)(Object.keys(APP_TYPE_CONFIG).map(function (s) {
      return `'${s}'`;
    }), 'or'));
  }

  // Use options to create an object equivalent to CLI args parsed by minimist
  var args = {
    _: [`serve-${projectType}`, options.entry],
    config: options.config,
    hmre: !(options.hmr === false || options.hmre === false),
    install: !!options.install || !!options.autoInstall,
    reload: !!options.reload
  };

  var appTypeConfig = require(APP_TYPE_CONFIG[projectType])(args);

  var webpackConfig = (0, _createServerWebpackConfig2.default)(args, (0, _appCommands.createServeConfig)(args, appTypeConfig.getServeConfig(), {
    plugins: {
      status: {
        disableClearConsole: true,
        successMessage: null
      }
    }
  }));

  (0, _debug2.default)('webpack config: %s', (0, _utils.deepToString)(webpackConfig));

  var compiler = (0, _webpack2.default)(webpackConfig);

  var router = express.Router();

  router.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }));

  router.use(require('webpack-hot-middleware')(compiler, {
    log: false
  }));

  return router;
}
module.exports = exports['default'];