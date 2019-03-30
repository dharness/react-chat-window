'use strict';

exports.__esModule = true;
exports.build = build;
exports.createBuildConfig = createBuildConfig;
exports.createServeConfig = createServeConfig;
exports.getDefaultHTMLConfig = getDefaultHTMLConfig;
exports.serve = serve;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _runSeries = require('run-series');

var _runSeries2 = _interopRequireDefault(_runSeries);

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

var _cleanApp = require('./commands/clean-app');

var _cleanApp2 = _interopRequireDefault(_cleanApp);

var _utils = require('./utils');

var _webpackBuild = require('./webpackBuild');

var _webpackBuild2 = _interopRequireDefault(_webpackBuild);

var _webpackServer = require('./webpackServer');

var _webpackServer2 = _interopRequireDefault(_webpackServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_HTML_PATH = 'src/index.html';

/**
 * Create a build, installing any required dependencies first if they're not
 * resolvable.
 */
function build(args, appConfig, cb) {
  var dist = args._[2] || 'dist';

  var tasks = [function (cb) {
    return (0, _cleanApp2.default)({ _: ['clean-app', dist] }, cb);
  }, function (cb) {
    return (0, _webpackBuild2.default)(`${appConfig.getName()} app`, args, function () {
      return createBuildConfig(args, appConfig.getBuildConfig());
    }, cb);
  }];

  var buildDependencies = appConfig.getBuildDependencies();
  if (buildDependencies.length > 0) {
    tasks.unshift(function (cb) {
      return (0, _utils.install)(buildDependencies, { check: true }, cb);
    });
  }

  (0, _runSeries2.default)(tasks, cb);
}

/**
 * Create default command config for building an app and merge any extra config
 * provided into it.
 */
function createBuildConfig(args) {
  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var entry = _path2.default.resolve(args._[1] || 'src/index.js');
  var dist = _path2.default.resolve(args._[2] || 'dist');

  var production = process.env.NODE_ENV === 'production';
  var filenamePattern = production ? '[name].[chunkhash:8].js' : '[name].js';

  var config = {
    devtool: 'source-map',
    entry: {
      app: [entry]
    },
    output: {
      filename: filenamePattern,
      chunkFilename: filenamePattern,
      path: dist,
      publicPath: '/'
    },
    plugins: {
      html: args.html !== false && getDefaultHTMLConfig(),
      vendor: args.vendor !== false
    }
  };

  if ((0, _utils.directoryExists)('public')) {
    config.plugins.copy = [{ from: _path2.default.resolve('public'), to: dist, ignore: '.gitkeep' }];
  }

  return (0, _webpackMerge2.default)(config, extra);
}

/**
 * Create default command config for serving an app and merge any extra config
 * objects provided into it.
 */
function createServeConfig(args) {
  var entry = _path2.default.resolve(args._[1] || 'src/index.js');
  var dist = _path2.default.resolve(args._[2] || 'dist');

  var config = {
    entry: [entry],
    output: {
      path: dist,
      filename: 'app.js',
      publicPath: '/'
    },
    plugins: {
      html: getDefaultHTMLConfig()
    }
  };

  if ((0, _utils.directoryExists)('public')) {
    config.plugins.copy = [{ from: _path2.default.resolve('public'), to: dist, ignore: '.gitkeep' }];
  }

  for (var _len = arguments.length, extra = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extra[_key - 1] = arguments[_key];
  }

  return _webpackMerge2.default.apply(undefined, [config].concat(extra));
}

/**
 * Create default config for html-webpack-plugin.
 */
function getDefaultHTMLConfig() {
  var cwd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.cwd();

  // Use the default HTML template path if it exists
  if (_fs2.default.existsSync(_path2.default.join(cwd, DEFAULT_HTML_PATH))) {
    return {
      template: DEFAULT_HTML_PATH
    };
  }
  // Otherwise provide default variables for the internal template, in case we
  // fall back to it.
  return {
    mountId: 'app',
    title: require(_path2.default.join(cwd, 'package.json')).name
  };
}

/**
 * Run a development server.
 */
function serve(args, appConfig, cb) {
  (0, _webpackServer2.default)(args, function () {
    return createServeConfig(args, appConfig.getServeConfig());
  }, cb);
}