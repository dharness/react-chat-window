'use strict';

exports.__esModule = true;
exports.default = buildPreact;

var _preact = require('../preact');

var _preact2 = _interopRequireDefault(_preact);

var _quickCommands = require('../quickCommands');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build a standalone Preact entry module, component or element.
 */
function buildPreact(args, cb) {
  (0, _quickCommands.build)(args, (0, _preact2.default)(args), cb);
}
module.exports = exports['default'];