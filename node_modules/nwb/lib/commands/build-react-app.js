'use strict';

exports.__esModule = true;
exports.default = buildReactApp;

var _appCommands = require('../appCommands');

var _react = require('../react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build a React app.
 */
function buildReactApp(args, cb) {
  (0, _appCommands.build)(args, (0, _react2.default)(args), cb);
}
module.exports = exports['default'];