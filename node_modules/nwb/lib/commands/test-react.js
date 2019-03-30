'use strict';

exports.__esModule = true;
exports.default = testReact;

var _karmaServer = require('../karmaServer');

var _karmaServer2 = _interopRequireDefault(_karmaServer);

var _react = require('../react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function testReact(args, cb) {
  (0, _karmaServer2.default)(args, (0, _react2.default)(args).getKarmaTestConfig(), cb);
}
module.exports = exports['default'];