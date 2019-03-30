'use strict';

exports.__esModule = true;
exports.default = init;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _constants = require('../constants');

var _createProject = require('../createProject');

var _createProject2 = _interopRequireDefault(_createProject);

var _errors = require('../errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(args, cb) {
  if (args._.length === 1) {
    return cb(new _errors.UserError(`usage: nwb init [${[].concat(_constants.PROJECT_TYPES).join('|')}] [name]`));
  }

  var projectType = args._[1];
  try {
    (0, _createProject.validateProjectType)(projectType);
  } catch (e) {
    return cb(e);
  }

  var name = args._[2];
  if (!name) {
    name = _path2.default.basename(process.cwd());
  }

  var initialVowel = /^[aeiou]/.test(projectType);
  console.log(`Initialising ${initialVowel ? 'an' : 'a'} ${projectType} project...`);
  (0, _createProject2.default)(args, projectType, name, process.cwd(), cb);
}
module.exports = exports['default'];