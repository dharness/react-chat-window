'use strict';

exports.__esModule = true;
exports.getNpmModulePrefs = getNpmModulePrefs;
exports.validateProjectType = validateProjectType;
exports.default = createProject;

var _child_process = require('child_process');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _copyTemplateDir = require('copy-template-dir');

var _copyTemplateDir2 = _interopRequireDefault(_copyTemplateDir);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _runSeries = require('run-series');

var _runSeries2 = _interopRequireDefault(_runSeries);

var _constants = require('./constants');

var _errors = require('./errors');

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO Change if >= 1.0.0 ever happens
var NWB_VERSION = _package2.default.version.split('.').slice(0, 2).concat('x').join('.');

/**
 * Copy a project template and log created files if successful.
 */
function copyTemplate(templateDir, targetDir, templateVars, cb) {
  (0, _copyTemplateDir2.default)(templateDir, targetDir, templateVars, function (err, createdFiles) {
    if (err) return cb(err);
    createdFiles.sort().forEach(function (createdFile) {
      var relativePath = _path2.default.relative(targetDir, createdFile);
      console.log(`  ${_chalk2.default.green('create')} ${relativePath}`);
    });
    cb();
  });
}

/**
 * Prompt the user for preferences related to publishing a module to npm, unless
 * they've asked us not to or have already provided all the possible options via
 * arguments.
 */
function getNpmModulePrefs(args, cb) {
  // An ES6 modules build is enabled by default, but can be disabled with
  // --no-es-modules or --es-modules=false (or a bunch of other undocumented
  // stuff)
  var esModules = args['es-modules'] !== false && !/^(0|false|no|nope|off)$/.test(args['es-modules']);
  // Pass a UMD global variable name with --umd=MyThing, or pass --no-umd to
  // indicate you don't want a UMD build.
  var umd = (0, _utils.typeOf)(args.umd) === 'string' ? args.umd : false;

  // Don't ask questions if the user doesn't want them, or already told us all
  // the answers.
  if (args.f || args.force || 'umd' in args && 'es-modules' in args) {
    return process.nextTick(cb, null, { umd, esModules });
  }

  _inquirer2.default.prompt([{
    when: function when() {
      return !('es-modules' in args);
    },
    type: 'confirm',
    name: 'esModules',
    message: 'Do you want to create an ES6 modules build for use by ES6 bundlers?',
    default: esModules
  }, {
    when: function when() {
      return !('umd' in args);
    },
    type: 'confirm',
    name: 'createUMD',
    message: 'Do you want to create a UMD build for global usage via <script> tag?',
    default: umd
  }, {
    when: function when(_ref) {
      var createUMD = _ref.createUMD;
      return createUMD;
    },
    type: 'input',
    name: 'umd',
    message: 'Which global variable should the UMD build set?',
    validate(input) {
      return input.trim() ? true : 'Required to create a UMD build';
    },
    default: umd || ''
  }]).then(function (answers) {
    return cb(null, answers);
  }, function (err) {
    return cb(err);
  });
}

/**
 * Initialise a Git repository if the user has Git, unless there's already one
 * present or the user has asked us could we not.
 */
function initGit(args, cwd, cb) {
  // Allow git init to be disabled with a --no-git flag
  if (args.git === false) {
    return process.nextTick(cb);
  }
  // Bail if a git repo already exists (e.g. nwb init in an existing repo)
  if ((0, _utils.directoryExists)(_path2.default.join(cwd, '.git'))) {
    return process.nextTick(cb);
  }

  (0, _child_process.exec)('git --version', { cwd, stdio: 'ignore' }, function (err) {
    if (err) return cb();
    var spinner = (0, _ora2.default)('Initing Git repo').start();
    (0, _runSeries2.default)([function (cb) {
      return (0, _child_process.exec)('git init', { cwd }, cb);
    }, function (cb) {
      return (0, _child_process.exec)('git add .', { cwd }, cb);
    }, function (cb) {
      return (0, _child_process.exec)(`git commit -m "Initial commit from nwb v${_package2.default.version}"`, { cwd }, cb);
    }], function (err) {
      if (err) {
        spinner.fail();
        console.log(_chalk2.default.red(err.message));
        return cb();
      }
      spinner.succeed();
      cb();
    });
  });
}

/**
 * Validate a user-supplied project type.
 */
function validateProjectType(projectType) {
  if (!projectType) {
    throw new _errors.UserError(`A project type must be provided, one of: ${[].concat(_constants.PROJECT_TYPES).join(', ')}`);
  }
  if (!_constants.PROJECT_TYPES.has(projectType)) {
    throw new _errors.UserError(`Project type must be one of: ${[].concat(_constants.PROJECT_TYPES).join(', ')}`);
  }
}

/**
 * Write an nwb config file.
 */
function writeConfigFile(dir, config, cb) {
  _fs2.default.writeFile(_path2.default.join(dir, _constants.CONFIG_FILE_NAME), `module.exports = ${(0, _utils.toSource)(config)}\n`, cb);
}

var APP_PROJECT_CONFIG = {
  [_constants.INFERNO_APP]: {
    dependencies: ['inferno', 'inferno-component', 'inferno-compat']
  },
  [_constants.PREACT_APP]: {
    dependencies: ['preact', 'preact-compat']
  },
  [_constants.REACT_APP]: {
    dependencies: ['react', 'react-dom']
  },
  [_constants.WEB_APP]: {}
};

var MODULE_PROJECT_CONFIG = {
  [_constants.REACT_COMPONENT]: {
    devDependencies: ['react', 'react-dom'],
    externals: { react: 'React' }
  },
  [_constants.WEB_MODULE]: {}

  /**
   * Create an app project skeleton.
   */
};function createAppProject(args, projectType, name, targetDir, cb) {
  var _APP_PROJECT_CONFIG$p = APP_PROJECT_CONFIG[projectType].dependencies,
      dependencies = _APP_PROJECT_CONFIG$p === undefined ? [] : _APP_PROJECT_CONFIG$p;

  if (dependencies.length !== 0) {
    var library = projectType.split('-')[0];
    if (args[library]) {
      dependencies = dependencies.map(function (pkg) {
        return `${pkg}@${args[library]}`;
      });
    }
  }
  var templateDir = _path2.default.join(__dirname, `../templates/${projectType}`);
  var templateVars = { name, nwbVersion: NWB_VERSION };
  (0, _runSeries2.default)([function (cb) {
    return copyTemplate(templateDir, targetDir, templateVars, cb);
  }, function (cb) {
    return (0, _utils.install)(dependencies, { cwd: targetDir, save: true }, cb);
  }, function (cb) {
    return initGit(args, targetDir, cb);
  }], cb);
}

/**
 * Create an npm module project skeleton.
 */
function createModuleProject(args, projectType, name, targetDir, cb) {
  var _MODULE_PROJECT_CONFI = MODULE_PROJECT_CONFIG[projectType],
      _MODULE_PROJECT_CONFI2 = _MODULE_PROJECT_CONFI.devDependencies,
      devDependencies = _MODULE_PROJECT_CONFI2 === undefined ? [] : _MODULE_PROJECT_CONFI2,
      _MODULE_PROJECT_CONFI3 = _MODULE_PROJECT_CONFI.externals,
      externals = _MODULE_PROJECT_CONFI3 === undefined ? {} : _MODULE_PROJECT_CONFI3;

  getNpmModulePrefs(args, function (err, prefs) {
    if (err) return cb(err);
    var umd = prefs.umd,
        esModules = prefs.esModules;

    var templateDir = _path2.default.join(__dirname, `../templates/${projectType}`);
    var templateVars = {
      name,
      esModules,
      esModulesPackageConfig: esModules ? '\n  "module": "es/index.js",' : '',
      nwbVersion: NWB_VERSION
    };
    var nwbConfig = {
      type: projectType,
      npm: {
        esModules,
        umd: umd ? { global: umd, externals } : false
      }

      // CBA making this part generic until it's needed
    };if (projectType === _constants.REACT_COMPONENT) {
      if (args.react) {
        devDependencies = devDependencies.map(function (pkg) {
          return `${pkg}@${args.react}`;
        });
        templateVars.reactPeerVersion = `^${args.react}`; // YOLO
      } else {
        // TODO Get from npm so we don't have to manually update on major releases
        templateVars.reactPeerVersion = '15.x';
      }
    }

    (0, _runSeries2.default)([function (cb) {
      return copyTemplate(templateDir, targetDir, templateVars, cb);
    }, function (cb) {
      return writeConfigFile(targetDir, nwbConfig, cb);
    }, function (cb) {
      return (0, _utils.install)(devDependencies, { cwd: targetDir, save: true, dev: true }, cb);
    }, function (cb) {
      return initGit(args, targetDir, cb);
    }], cb);
  });
}

function createProject(args, type, name, dir, cb) {
  if (type in APP_PROJECT_CONFIG) {
    return createAppProject(args, type, name, dir, cb);
  } else {
    createModuleProject(args, type, name, dir, cb);
  }
}