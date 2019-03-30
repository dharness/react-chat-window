'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * An error related to user input or configuration, or anything else the user is
 * responsible for and can fix.
 */
var UserError = exports.UserError = function UserError() {
  _classCallCheck(this, UserError);

  for (var _len = arguments.length, messages = Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }

  this.message = messages.join('\n');
};

var KarmaExitCodeError = exports.KarmaExitCodeError = function KarmaExitCodeError(exitCode) {
  _classCallCheck(this, KarmaExitCodeError);

  this.exitCode = exitCode;
};

var ConfigValidationError = exports.ConfigValidationError = function ConfigValidationError(report) {
  _classCallCheck(this, ConfigValidationError);

  this.report = report;
};