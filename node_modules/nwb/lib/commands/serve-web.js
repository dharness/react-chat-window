'use strict';

exports.__esModule = true;
exports.default = serveWeb;

var _quickCommands = require('../quickCommands');

var _web = require('../web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Serve a standalone vanilla JavaScript app.
 */
function serveWeb(args, cb) {
  (0, _quickCommands.serve)(args, (0, _web2.default)(args), cb);
}
module.exports = exports['default'];