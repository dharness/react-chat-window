'use strict';

exports.__esModule = true;
exports.default = serveReact;

var _appCommands = require('../appCommands');

var _react = require('../react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Serve a React app.
 */
function serveReact(args, cb) {
  (0, _appCommands.serve)(args, (0, _react2.default)(args), cb);
}
module.exports = exports['default'];