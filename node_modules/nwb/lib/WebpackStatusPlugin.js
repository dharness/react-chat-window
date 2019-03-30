'use strict';

exports.__esModule = true;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _utils = require('./utils');

var _webpackUtils = require('./webpackUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Display build status for a Webpack watching build.
 */
var StatusPlugin = function () {
  function StatusPlugin() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, StatusPlugin);

    this.watchRun = function (compiler, cb) {
      _this.clearConsole();
      if (_this.isInitialBuild) {
        _this.log(_chalk2.default.cyan('Starting Webpack compilation...'));
        _this.isInitialBuild = false;
      } else {
        _this.log('Recompiling...');
      }
      cb();
    };

    this.done = function (stats) {
      _this.clearConsole();

      var hasErrors = stats.hasErrors();
      var hasWarnings = stats.hasWarnings();

      if (!hasErrors && !hasWarnings) {
        var time = stats.endTime - stats.startTime;
        _this.log(_chalk2.default.green(`Compiled successfully in ${time} ms.`));
      } else {
        (0, _webpackUtils.logErrorsAndWarnings)(stats);
        if (hasErrors) return;
      }

      if (_this.successMessage) {
        _this.log('');
        _this.log(_this.successMessage);
      }
    };

    var _options$disableClear = options.disableClearConsole,
        disableClearConsole = _options$disableClear === undefined ? false : _options$disableClear,
        _options$quiet = options.quiet,
        quiet = _options$quiet === undefined ? false : _options$quiet,
        _options$successMessa = options.successMessage,
        successMessage = _options$successMessa === undefined ? '' : _options$successMessa;


    this.disableClearConsole = disableClearConsole;
    this.quiet = quiet;
    this.successMessage = successMessage;

    // We only want to display the "Starting..." message once
    this.isInitialBuild = true;
  }

  StatusPlugin.prototype.apply = function apply(compiler) {
    compiler.plugin('watch-run', this.watchRun);
    compiler.plugin('done', this.done);
  };

  StatusPlugin.prototype.clearConsole = function clearConsole() {
    if (!this.quiet && !this.disableClearConsole) {
      (0, _utils.clearConsole)();
    }
  };

  StatusPlugin.prototype.log = function log(message) {
    if (!this.quiet) {
      console.log(message);
    }
  };

  return StatusPlugin;
}();

exports.default = StatusPlugin;
module.exports = exports['default'];