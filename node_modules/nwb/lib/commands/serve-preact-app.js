'use strict';

exports.__esModule = true;
exports.default = servePreact;

var _preact = require('../preact');

var _preact2 = _interopRequireDefault(_preact);

var _appCommands = require('../appCommands');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Serve a Preact app.
 */
function servePreact(args, cb) {
  (0, _appCommands.serve)(args, (0, _preact2.default)(args), cb);
}
module.exports = exports['default'];