'use strict';

exports.__esModule = true;
exports.default = buildPreactApp;

var _appCommands = require('../appCommands');

var _inferno = require('../inferno');

var _inferno2 = _interopRequireDefault(_inferno);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build an Inferno app.
 */
function buildPreactApp(args, cb) {
  (0, _appCommands.build)(args, (0, _inferno2.default)(args), cb);
}
module.exports = exports['default'];