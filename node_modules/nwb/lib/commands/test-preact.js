'use strict';

exports.__esModule = true;
exports.default = testPreact;

var _karmaServer = require('../karmaServer');

var _karmaServer2 = _interopRequireDefault(_karmaServer);

var _preact = require('../preact');

var _preact2 = _interopRequireDefault(_preact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function testPreact(args, cb) {
  (0, _karmaServer2.default)(args, (0, _preact2.default)(args).getKarmaTestConfig(), cb);
}
module.exports = exports['default'];