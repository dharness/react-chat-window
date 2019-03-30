'use strict';

exports.__esModule = true;
exports.default = serveInferno;

var _inferno = require('../inferno');

var _inferno2 = _interopRequireDefault(_inferno);

var _appCommands = require('../appCommands');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Serve an Inferno app.
 */
function serveInferno(args, cb) {
  (0, _appCommands.serve)(args, (0, _inferno2.default)(args), cb);
}
module.exports = exports['default'];