'use strict';

exports.__esModule = true;
exports.default = buildPreactApp;

var _appCommands = require('../appCommands');

var _preact = require('../preact');

var _preact2 = _interopRequireDefault(_preact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build a Preact app.
 */
function buildPreactApp(args, cb) {
  (0, _appCommands.build)(args, (0, _preact2.default)(args), cb);
}
module.exports = exports['default'];