'use strict';

exports.__esModule = true;
exports.default = clean;

var _constants = require('../constants');

var _getUserConfig = require('../getUserConfig');

var _cleanApp = require('./clean-app');

var _cleanApp2 = _interopRequireDefault(_cleanApp);

var _cleanModule = require('./clean-module');

var _cleanModule2 = _interopRequireDefault(_cleanModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLEAN_COMMANDS = {
  [_constants.INFERNO_APP]: _cleanApp2.default,
  [_constants.PREACT_APP]: _cleanApp2.default,
  [_constants.REACT_APP]: _cleanApp2.default,
  [_constants.REACT_COMPONENT]: _cleanModule2.default,
  [_constants.WEB_APP]: _cleanApp2.default,
  [_constants.WEB_MODULE]: _cleanModule2.default

  /**
   * Generic clean command, invokes the appropriate project type-specific command.
   */
};function clean(args, cb) {
  var projectType = void 0;
  try {
    projectType = (0, _getUserConfig.getProjectType)(args);
  } catch (e) {
    return cb(e);
  }

  CLEAN_COMMANDS[projectType](args, cb);
}
module.exports = exports['default'];