'use strict';

exports.__esModule = true;
exports.default = serveWebApp;

var _web = require('../web');

var _web2 = _interopRequireDefault(_web);

var _appCommands = require('../appCommands');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Serve a plain JS app.
 */
function serveWebApp(args, cb) {
  (0, _appCommands.serve)(args, (0, _web2.default)(args), cb);
}
module.exports = exports['default'];