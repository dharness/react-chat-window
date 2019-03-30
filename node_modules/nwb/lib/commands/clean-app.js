'use strict';

exports.__esModule = true;
exports.default = cleanApp;

var _utils = require('../utils');

function cleanApp(args, cb) {
  var dist = args._[1] || 'dist';
  (0, _utils.clean)('app', ['coverage', dist], cb);
}
module.exports = exports['default'];