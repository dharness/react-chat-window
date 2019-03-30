'use strict';

exports.__esModule = true;
exports.default = testInferno;

var _inferno = require('../inferno');

var _inferno2 = _interopRequireDefault(_inferno);

var _karmaServer = require('../karmaServer');

var _karmaServer2 = _interopRequireDefault(_karmaServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function testInferno(args, cb) {
  (0, _karmaServer2.default)(args, (0, _inferno2.default)(args).getKarmaTestConfig(), cb);
}
module.exports = exports['default'];