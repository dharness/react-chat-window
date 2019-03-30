'use strict';

exports.__esModule = true;
exports.default = serve;

var _constants = require('../constants');

var _errors = require('../errors');

var _getUserConfig = require('../getUserConfig');

var _serveInfernoApp = require('./serve-inferno-app');

var _serveInfernoApp2 = _interopRequireDefault(_serveInfernoApp);

var _servePreactApp = require('./serve-preact-app');

var _servePreactApp2 = _interopRequireDefault(_servePreactApp);

var _serveReactApp = require('./serve-react-app');

var _serveReactApp2 = _interopRequireDefault(_serveReactApp);

var _serveReactDemo = require('./serve-react-demo');

var _serveReactDemo2 = _interopRequireDefault(_serveReactDemo);

var _serveWebApp = require('./serve-web-app');

var _serveWebApp2 = _interopRequireDefault(_serveWebApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SERVE_COMMANDS = {
  [_constants.INFERNO_APP]: _serveInfernoApp2.default,
  [_constants.PREACT_APP]: _servePreactApp2.default,
  [_constants.REACT_APP]: _serveReactApp2.default,
  [_constants.REACT_COMPONENT]: _serveReactDemo2.default,
  [_constants.WEB_APP]: _serveWebApp2.default

  /**
   * Generic serve command, invokes the appropriate project type-specific command.
   */
};function serve(args, cb) {
  var projectType = void 0;
  try {
    projectType = (0, _getUserConfig.getProjectType)(args);
  } catch (e) {
    return cb(e);
  }

  if (!SERVE_COMMANDS[projectType]) {
    return cb(new _errors.UserError(`Unable to serve anything for a ${projectType} project.`));
  }

  SERVE_COMMANDS[projectType](args, cb);
}
module.exports = exports['default'];