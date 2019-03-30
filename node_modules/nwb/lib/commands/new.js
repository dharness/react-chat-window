'use strict';

exports.__esModule = true;
exports.default = new_;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _constants = require('../constants');

var _createProject = require('../createProject');

var _createProject2 = _interopRequireDefault(_createProject);

var _errors = require('../errors');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function new_(args, cb) {
  if (args._.length === 1) {
    return cb(new _errors.UserError(`usage: nwb new [${[].concat(_constants.PROJECT_TYPES).join('|')}] <name>`));
  }

  var projectType = args._[1];
  try {
    (0, _createProject.validateProjectType)(projectType);
  } catch (e) {
    return cb(e);
  }

  var name = args._[2];
  if (!name) {
    return cb(new _errors.UserError('A project name must be provided'));
  }
  if ((0, _utils.directoryExists)(name)) {
    return cb(new _errors.UserError(`A ${name}/ directory already exists`));
  }

  var targetDir = _path2.default.resolve(name);
  var initialVowel = /^[aeiou]/.test(projectType);
  console.log(`Creating ${initialVowel ? 'an' : 'a'} ${projectType} project...`);
  (0, _createProject2.default)(args, projectType, name, targetDir, cb);
}
module.exports = exports['default'];