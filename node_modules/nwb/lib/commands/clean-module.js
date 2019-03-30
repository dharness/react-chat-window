'use strict';

exports.__esModule = true;
exports.default = cleanModule;

var _utils = require('../utils');

function cleanModule(args, cb) {
  (0, _utils.clean)('module', ['coverage', 'es', 'lib', 'umd'], cb);
}
module.exports = exports['default'];