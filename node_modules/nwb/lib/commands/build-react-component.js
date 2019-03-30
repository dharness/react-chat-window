'use strict';

exports.__esModule = true;
exports.default = buildModule;

var _runSeries = require('run-series');

var _runSeries2 = _interopRequireDefault(_runSeries);

var _moduleBuild = require('../moduleBuild');

var _moduleBuild2 = _interopRequireDefault(_moduleBuild);

var _utils = require('../utils');

var _buildDemo = require('./build-demo');

var _buildDemo2 = _interopRequireDefault(_buildDemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a React component's CommonJS and ES6 modules and UMD builds, and build
 * its demo app if it has one.
 */
function buildModule(args, cb) {
  var config = {
    babel: {
      presets: [require.resolve('babel-preset-react')],
      stage: 1
    }

    // Disable removal of propTypes in production builds with --[keep-]proptypes
  };if (args.proptypes !== true && args['keep-proptypes'] !== true) {
    // Wrap propTypes with an environment check in development builds
    config.babelDev = {
      removePropTypes: {
        mode: 'wrap'
      }
      // Strip propTypes and prop-type imports from UMD production build
    };config.babelProd = {
      removePropTypes: {
        removeImport: true
      }
    };
  }

  var tasks = [function (cb) {
    return (0, _moduleBuild2.default)(args, config, cb);
  }];
  // Disable demo build with --no-demo or --no-demo-build
  if (args.demo !== false && args['demo-build'] !== false && (0, _utils.directoryExists)('demo')) {
    tasks.push(function (cb) {
      return (0, _buildDemo2.default)(args, cb);
    });
  }
  (0, _runSeries2.default)(tasks, cb);
}
module.exports = exports['default'];