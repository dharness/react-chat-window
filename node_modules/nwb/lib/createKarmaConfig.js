'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.processPluginConfig = processPluginConfig;
exports.findPlugin = findPlugin;
exports.getKarmaPluginConfig = getKarmaPluginConfig;
exports.default = createKarmaConfig;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

var _createWebpackConfig = require('./createWebpackConfig');

var _createWebpackConfig2 = _interopRequireDefault(_createWebpackConfig);

var _debug = require('./debug');

var _debug2 = _interopRequireDefault(_debug);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The following defaults are combined into a single extglob-style pattern to
// avoid generating "pattern ... does not match any file" warnings.

// Exclude top-level test dirs and __tests__ dirs under src/ from code coverage
// by default.
var DEFAULT_EXCLUDE_FROM_COVERAGE = ['test/', 'tests/', 'src/**/__tests__/'];
// Not every file in a test directory is a test and tests may also be co-located
// with the code they test, so determine test files by suffix.
var DEFAULT_TEST_FILES = ['+(src|test?(s))/**/*+(-test|.spec|.test).js'];

/**
 * Browser, framework and reporter config can be passed as strings or as plugin
 * objects. This handles figuring out which names and plugins have been provided
 * and automatically extracting the first browser/framework/reporter name from a
 * plugin object.
 */
function processPluginConfig(configs) {
  var names = [];
  var plugins = [];
  configs.forEach(function (config) {
    if ((0, _utils.typeOf)(config) === 'string') {
      names.push(config);
    } else {
      names.push(Object.keys(config)[0].split(':').pop());
      plugins.push(config);
    }
  });
  return [names, plugins];
}

/**
 * Finds a karma plugin with the given type:name id. If a plugin object contains
 * multiple plugins (e.g. karma-chai-plugins), only the first will be checked.
 */
function findPlugin(plugins, findId) {
  for (var i = 0, l = plugins.length; i < l; i++) {
    if ((0, _utils.typeOf)(plugins[i]) !== 'object') {
      continue;
    }
    if (Object.keys(plugins[i])[0] === findId) {
      return plugins[i];
    }
  }
  return null;
}

/**
 * Handles creation of Karma config based on Karma plugins.
 */
function getKarmaPluginConfig() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$codeCoverage = _ref.codeCoverage,
      codeCoverage = _ref$codeCoverage === undefined ? false : _ref$codeCoverage,
      _ref$userConfig = _ref.userConfig,
      userConfig = _ref$userConfig === undefined ? {} : _ref$userConfig;

  var browsers = ['PhantomJS'];
  var frameworks = ['mocha'];
  var plugins = [require('karma-sourcemap-loader'), require('karma-webpack')];
  // Default reporter if the user configure their own frameworks
  var reporters = ['dots'];

  // Browsers, frameworks and reporters can be configured as a list containing
  // names of bundled plugins, or plugin objects.
  if (userConfig.browsers) {
    var _processPluginConfig = processPluginConfig(userConfig.browsers),
        browserNames = _processPluginConfig[0],
        browserPlugins = _processPluginConfig[1];

    browsers = browserNames;
    plugins = plugins.concat(browserPlugins);
  }

  if (userConfig.frameworks) {
    var _processPluginConfig2 = processPluginConfig(userConfig.frameworks),
        frameworkNames = _processPluginConfig2[0],
        frameworkPlugins = _processPluginConfig2[1];

    frameworks = frameworkNames;
    plugins = plugins.concat(frameworkPlugins);
  } else {
    // Use the Mocha reporter by default if the user didn't configure frameworks
    reporters = ['mocha'];
  }

  if (userConfig.reporters) {
    var _processPluginConfig3 = processPluginConfig(userConfig.reporters),
        reporterNames = _processPluginConfig3[0],
        reporterPlugins = _processPluginConfig3[1];

    reporters = reporterNames;
    plugins = plugins.concat(reporterPlugins);
  }

  // Plugins can be provided as a list of imported plugin objects
  if (userConfig.plugins) {
    plugins = plugins.concat(userConfig.plugins);
  }

  // Ensure nwb's version of plugins get loaded if they're going to be used and =
  // haven't been provided by the user.
  if (frameworks.indexOf('mocha') !== -1 && !findPlugin(plugins, 'framework:mocha')) {
    plugins.push(require('karma-mocha'));
  }
  if (reporters.indexOf('mocha') !== -1 && !findPlugin(plugins, 'reporter:mocha')) {
    plugins.push(require('karma-mocha-reporter'));
  }
  if (browsers.indexOf('PhantomJS') !== -1 && !findPlugin(plugins, 'launcher:PhantomJS')) {
    plugins.push(require('karma-phantomjs-launcher'));
  }
  if (browsers.some(function matchChrom(b) {
    return (/Chrom/.test(b)
    );
  }) && !findPlugin(plugins, 'launcher:Chrome')) {
    plugins.push(require('karma-chrome-launcher'));
  }

  if (codeCoverage) {
    plugins.push(require('karma-coverage'));
    reporters.push('coverage');
  }

  return { browsers, frameworks, plugins, reporters };
}

function createKarmaConfig(args, buildConfig, pluginConfig, userConfig) {
  var isCi = process.env.CI || process.env.CONTINUOUS_INTEGRATION;
  var codeCoverage = isCi || !!args.coverage;

  var userKarma = userConfig.karma || {};

  var _getKarmaPluginConfig = getKarmaPluginConfig({
    codeCoverage,
    userConfig: userKarma
  }),
      browsers = _getKarmaPluginConfig.browsers,
      frameworks = _getKarmaPluginConfig.frameworks,
      plugins = _getKarmaPluginConfig.plugins,
      reporters = _getKarmaPluginConfig.reporters;

  var _userKarma$excludeFro = userKarma.excludeFromCoverage,
      excludeFromCoverage = _userKarma$excludeFro === undefined ? DEFAULT_EXCLUDE_FROM_COVERAGE : _userKarma$excludeFro;

  if ((0, _utils.typeOf)(excludeFromCoverage) === 'string') excludeFromCoverage = [excludeFromCoverage];
  var testFiles = userKarma.testFiles || DEFAULT_TEST_FILES;
  if ((0, _utils.typeOf)(testFiles) === 'string') testFiles = [testFiles];

  // Polyfill by default for browsers which lack features (hello PhantomJS)
  var files = [require.resolve('babel-polyfill/dist/polyfill.js')];
  var preprocessors = {};

  if (userKarma.testContext) {
    files.push(userKarma.testContext);
    preprocessors[userKarma.testContext] = ['webpack', 'sourcemap'];
  } else {
    testFiles.forEach(function (testGlob) {
      files.push(testGlob);
      preprocessors[testGlob] = ['webpack', 'sourcemap'];
    });
  }

  // Tweak Babel config for code coverage when necessary
  buildConfig = _extends({}, buildConfig);
  if (!buildConfig.babel) {
    buildConfig.babel = {};
  }
  if (codeCoverage) {
    var exclude = ['node_modules/'].concat(excludeFromCoverage, testFiles);
    if (userKarma.testContext) {
      exclude.push(userKarma.testContext);
    }
    buildConfig.babel.plugins = [[require.resolve('babel-plugin-istanbul'), { exclude }]];
  }

  var karmaConfig = (0, _webpackMerge2.default)({
    browsers,
    coverageReporter: {
      dir: _path2.default.resolve('coverage'),
      reporters: [{ type: 'html', subdir: 'html' }, { type: 'lcovonly', subdir: '.' }, { type: 'text-summary' }]
    },
    files,
    frameworks,
    mochaReporter: {
      showDiff: true
    },
    plugins,
    preprocessors,
    reporters,
    singleRun: isCi || !args.server,
    webpack: (0, _createWebpackConfig2.default)((0, _webpackMerge2.default)(buildConfig, {
      devtool: 'cheap-module-inline-source-map',
      node: {
        fs: 'empty'
      },
      plugins: {
        status: {
          quiet: true
        }
      },
      resolve: {
        alias: {
          expect: _path2.default.dirname(require.resolve('expect/package')),
          src: _path2.default.resolve('src')
        }
      },
      server: {
        hot: false
      }
    }), pluginConfig, userConfig),
    webpackMiddleware: {
      noInfo: true,
      quiet: true
    }
  }, userKarma.extra);

  (0, _debug2.default)('karma config: %s', (0, _utils.deepToString)(karmaConfig));
  return karmaConfig;
}