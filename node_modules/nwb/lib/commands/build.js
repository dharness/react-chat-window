'use strict';

exports.__esModule = true;
exports.default = build;

var _constants = require('../constants');

var _getUserConfig = require('../getUserConfig');

var _buildInfernoApp = require('./build-inferno-app');

var _buildInfernoApp2 = _interopRequireDefault(_buildInfernoApp);

var _buildPreactApp = require('./build-preact-app');

var _buildPreactApp2 = _interopRequireDefault(_buildPreactApp);

var _buildReactApp = require('./build-react-app');

var _buildReactApp2 = _interopRequireDefault(_buildReactApp);

var _buildReactComponent = require('./build-react-component');

var _buildReactComponent2 = _interopRequireDefault(_buildReactComponent);

var _buildWebApp = require('./build-web-app');

var _buildWebApp2 = _interopRequireDefault(_buildWebApp);

var _buildWebModule = require('./build-web-module');

var _buildWebModule2 = _interopRequireDefault(_buildWebModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BUILD_COMMANDS = {
  [_constants.INFERNO_APP]: _buildInfernoApp2.default,
  [_constants.PREACT_APP]: _buildPreactApp2.default,
  [_constants.REACT_APP]: _buildReactApp2.default,
  [_constants.REACT_COMPONENT]: _buildReactComponent2.default,
  [_constants.WEB_APP]: _buildWebApp2.default,
  [_constants.WEB_MODULE]: _buildWebModule2.default

  /**
   * Generic build command, invokes the appropriate project type-specific command.
   */
};function build(args, cb) {
  var projectType = void 0;
  try {
    projectType = (0, _getUserConfig.getProjectType)(args);
  } catch (e) {
    return cb(e);
  }

  BUILD_COMMANDS[projectType](args, cb);
}
module.exports = exports['default'];