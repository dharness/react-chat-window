'use strict';

exports.__esModule = true;
exports.default = cleanDemo;

var _utils = require('../utils');

function cleanDemo(args, cb) {
  (0, _utils.clean)('demo', ['demo/dist'], cb);
}
module.exports = exports['default'];