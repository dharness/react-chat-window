'use strict';

exports.__esModule = true;
exports.default = buildWebApp;

var _appCommands = require('../appCommands');

var _web = require('../web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build a plain JS app.
 */
function buildWebApp(args, cb) {
  (0, _appCommands.build)(args, (0, _web2.default)(args), cb);
}
module.exports = exports['default'];