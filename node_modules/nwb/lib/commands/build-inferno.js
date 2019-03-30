'use strict';

exports.__esModule = true;
exports.default = buildInferno;

var _inferno = require('../inferno');

var _inferno2 = _interopRequireDefault(_inferno);

var _quickCommands = require('../quickCommands');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build a standalone Inferno app entry module, component or VNode.
 */
function buildInferno(args, cb) {
  (0, _quickCommands.build)(args, (0, _inferno2.default)(args), cb);
}
module.exports = exports['default'];