'use strict';

exports.__esModule = true;
exports.default = checkConfig;

var _getUserConfig = require('../getUserConfig');

var _getUserConfig2 = _interopRequireDefault(_getUserConfig);

var _getPluginConfig = require('../getPluginConfig');

var _getPluginConfig2 = _interopRequireDefault(_getPluginConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFullEnv(env) {
  if (env === 'dev') return 'development';
  if (env === 'prod') return 'production';
  return env;
}

function checkConfig(args) {
  if (args.e || args.env) {
    process.env.NODE_ENV = getFullEnv(args.e || args.env);
  }
  var pluginConfig = (0, _getPluginConfig2.default)(args);
  try {
    (0, _getUserConfig2.default)({ _: [args.command || 'check-config'], config: args._[1] }, { check: true, pluginConfig, required: true });
  } catch (report) {
    if (!(report instanceof _getUserConfig.UserConfigReport)) throw report;
    report.log();
  }
}
module.exports = exports['default'];