'use strict';

exports.__esModule = true;
exports.default = buildWE;

var _quickCommands = require('../quickCommands');

var _web = require('../web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build a vanilla JavaScript app.
 */
function buildWE(args, cb) {
  (0, _quickCommands.build)(args, (0, _web2.default)(args), cb);
}
module.exports = exports['default'];