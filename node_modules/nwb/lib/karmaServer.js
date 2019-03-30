'use strict';

exports.__esModule = true;
exports.default = karmaServer;

var _karma = require('karma');

var _createKarmaConfig = require('./createKarmaConfig');

var _createKarmaConfig2 = _interopRequireDefault(_createKarmaConfig);

var _errors = require('./errors');

var _getPluginConfig = require('./getPluginConfig');

var _getPluginConfig2 = _interopRequireDefault(_getPluginConfig);

var _getUserConfig = require('./getUserConfig');

var _getUserConfig2 = _interopRequireDefault(_getUserConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function karmaServer(args, buildConfig, cb) {
  // Force the environment to test
  process.env.NODE_ENV = 'test';

  var pluginConfig = (0, _getPluginConfig2.default)(args);
  var userConfig = (0, _getUserConfig2.default)(args, { pluginConfig });
  var karmaConfig = (0, _createKarmaConfig2.default)(args, buildConfig, pluginConfig, userConfig);

  new _karma.Server(karmaConfig, function (exitCode) {
    if (exitCode !== 0) return cb(new _errors.KarmaExitCodeError(exitCode));
    cb();
  }).start();
}
module.exports = exports['default'];