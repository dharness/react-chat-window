'use strict';

exports.__esModule = true;
exports.default = buildModule;

var _moduleBuild = require('../moduleBuild');

var _moduleBuild2 = _interopRequireDefault(_moduleBuild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a web module's ES5, ES6 modules and UMD builds.
 */
function buildModule(args, cb) {
  (0, _moduleBuild2.default)(args, {
    babel: {
      stage: 1
    }
  }, cb);
}
module.exports = exports['default'];