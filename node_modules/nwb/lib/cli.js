'use strict';

exports.__esModule = true;
exports.default = cli;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _constants = require('./constants');

var _errors = require('./errors');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cli(argv, cb) {
  var args = (0, _minimist2.default)(argv, {
    alias: {
      c: 'config',
      h: 'help',
      v: 'version'
    },
    boolean: ['help', 'version']
  });

  var command = args._[0];

  if (args.version || /^v(ersion)?$/.test(command)) {
    var pkg = require('../package.json');
    console.log(`v${pkg.version}`);
    process.exit(0);
  }

  if (args.help || !command || /^h(elp)?$/.test(command)) {
    console.log(`Usage: ${(0, _chalk.green)('nwb')} ${(0, _chalk.yellow)('<command>')} ${(0, _chalk.cyan)('[options]')}

Options:
  ${(0, _chalk.cyan)('-c, --config')}   config file to use ${(0, _chalk.cyan)(`[default: ${_constants.CONFIG_FILE_NAME}]`)}
  ${(0, _chalk.cyan)('-h, --help')}     display this help message
  ${(0, _chalk.cyan)('-v, --version')}  print nwb's version

Quick development commands:
  ${(0, _chalk.green)('nwb inferno')} ${(0, _chalk.yellow)('(run|build) <entry>')}  run or build an Inferno app
  ${(0, _chalk.green)('nwb preact')} ${(0, _chalk.yellow)('(run|build) <entry>')}   run or build a Preact app
  ${(0, _chalk.green)('nwb react')} ${(0, _chalk.yellow)('(run|build) <entry>')}    run or build a React app
  ${(0, _chalk.green)('nwb react')} ${(0, _chalk.yellow)('(run|build) <entry>')}    run or build a vanilla JavaScript app

  Run ${(0, _chalk.green)('nwb (inferno|preact|react|web) help')} for options.

Project creation commands:
  ${(0, _chalk.green)('nwb new')} ${(0, _chalk.yellow)('<project_type> <dir_name>')} ${(0, _chalk.cyan)('[options]')}
    Create a project in a new directory.

    Arguments:
      ${(0, _chalk.yellow)('project_type')}  project type - see the list below
      ${(0, _chalk.yellow)('dir_name')}      project name / directory to create the project in

  ${(0, _chalk.green)('nwb init')} ${(0, _chalk.yellow)('<project_type>')} ${(0, _chalk.cyan)('[dir_name] [options]')}
    Initialise a project in the current directory.

    Arguments:
      ${(0, _chalk.yellow)('project_type')}  project type - see the list below
      ${(0, _chalk.cyan)('dir_name')}      project name ${(0, _chalk.cyan)('[default: current directory name]')}

  Options:
    ${(0, _chalk.cyan)('-f, --force')}   force project creation, don't ask questions
    ${(0, _chalk.cyan)('--es-modules')}  enable or disable (${(0, _chalk.cyan)('--no-es-modules')}) an ES6 modules build
    ${(0, _chalk.cyan)('--no-git')}      disable creation of a Git repo with an initial commit
    ${(0, _chalk.cyan)('--react')}       version of React to install for React apps & components
    ${(0, _chalk.cyan)('--umd=<var>')}   enable or disable (${(0, _chalk.cyan)('--no-umd')}) a UMD build

  Project types:
    ${(0, _chalk.yellow)('react-app')}        a React app
    ${(0, _chalk.yellow)('react-component')}  a React component or library npm module
    ${(0, _chalk.yellow)('preact-app')}       a Preact app
    ${(0, _chalk.yellow)('inferno-app')}      an Inferno app
    ${(0, _chalk.yellow)('web-app')}          a plain JavaScript app
    ${(0, _chalk.yellow)('web-module')}       a plain JavaScript npm module

Generic project development commands:
  Arguments for these commands depend on the type of project they're being run
  in. See the applicable project type-specific commands below.

  ${(0, _chalk.green)('nwb build')}
    Clean and build the project.

    Options:
      ${(0, _chalk.cyan)('--no-html')}    disable creation of an index.html if you don't need it
      ${(0, _chalk.cyan)('--no-vendor')}  disable creation of 'vendor' bundle for node_modules/ modules

  ${(0, _chalk.green)('nwb clean')}
    Delete built resources.

  ${(0, _chalk.green)('nwb serve')}
    Serve an app, or a component's demo app, with hot reloading.

    Options:
      ${(0, _chalk.cyan)('--install')}      automatically install missing npm dependencies
      ${(0, _chalk.cyan)('--host')}         hostname to bind the dev server to
      ${(0, _chalk.cyan)('--no-clear')}     don't clear the console when displaying build status
      ${(0, _chalk.cyan)('--no-fallback')}  disable serving of the index page from any path
      ${(0, _chalk.cyan)('--port')}         port to run the dev server on ${(0, _chalk.cyan)('[default: 3000]')}
      ${(0, _chalk.cyan)('--reload')}       auto reload the page if hot reloading fails

  ${(0, _chalk.green)('nwb test')}
    Run tests.

    Options:
      ${(0, _chalk.cyan)('--coverage')}  create a code coverage report
      ${(0, _chalk.cyan)('--server')}    keep running tests on every change

Project type-specific commands:
  ${(0, _chalk.green)('nwb build-demo')}
    Build a demo app from demo/src/index.js to demo/dist/.

  ${(0, _chalk.green)('nwb build-react-app')} ${(0, _chalk.cyan)('[entry] [dist_dir]')}
    Build a React app from ${(0, _chalk.cyan)('entry')} to ${(0, _chalk.cyan)('dist_dir')}.

  ${(0, _chalk.green)('nwb build-react-component')} ${(0, _chalk.cyan)('[umd_entry]')}
    Create ES5, ES6 modules and UMD builds for a React component.

    Options:
      ${(0, _chalk.cyan)('--copy-files')}        copy files which won't be transpiled by Babel (e.g. CSS)
      ${(0, _chalk.cyan)('--no-demo')}           don't build the demo app, if there is one
      ${(0, _chalk.cyan)('--[keep-]proptypes')}  keep component propTypes in production builds

  ${(0, _chalk.green)('nwb build-preact-app')} ${(0, _chalk.cyan)('[entry] [dist_dir]')}
    Build a Preact app from ${(0, _chalk.cyan)('entry')} to ${(0, _chalk.cyan)('dist_dir')}.

  ${(0, _chalk.green)('nwb build-inferno-app')} ${(0, _chalk.cyan)('[entry] [dist_dir]')}
    Build an Inferno app from ${(0, _chalk.cyan)('entry')} to ${(0, _chalk.cyan)('dist_dir')}.

  ${(0, _chalk.green)('nwb build-web-app')} ${(0, _chalk.cyan)('[entry] [dist_dir]')}
    Build a web app from ${(0, _chalk.cyan)('entry')} to ${(0, _chalk.cyan)('dist_dir')}.

  ${(0, _chalk.green)('nwb build-web-module')} ${(0, _chalk.cyan)('[umd_entry]')}
    Create ES5, ES6 modules and UMD builds for a web module.

  ${(0, _chalk.green)('nwb clean-app')} ${(0, _chalk.cyan)('[dist_dir]')}
    Delete ${(0, _chalk.cyan)('dist_dir')}.

  ${(0, _chalk.green)('nwb clean-demo')}
    Delete demo/dist/.

  ${(0, _chalk.green)('nwb clean-module')}
    Delete coverage/, es/, lib/ and umd/.

  ${(0, _chalk.green)('nwb serve-react-app')} ${(0, _chalk.cyan)('[entry]')}
    Serve a React app from ${(0, _chalk.cyan)('entry')}

    Options:
      ${(0, _chalk.cyan)('--no-hmre')}  disable use of React Transform for Hot Module Replacement & Errors

  ${(0, _chalk.green)('nwb serve-react-demo')}
    Serve a React demo app from demo/src/index.js.

    Options:
      ${(0, _chalk.cyan)('--no-hmre')}  disable use of React Transform for Hot Module Replacement & Errors

  ${(0, _chalk.green)('nwb serve-preact-app')} ${(0, _chalk.cyan)('[entry]')}
    Serve a Preact app from ${(0, _chalk.cyan)('entry')}

  ${(0, _chalk.green)('nwb serve-inferno-app')} ${(0, _chalk.cyan)('[entry]')}
    Serve an Inferno app from ${(0, _chalk.cyan)('entry')}

  ${(0, _chalk.green)('nwb serve-web-app')} ${(0, _chalk.cyan)('[entry]')}
    Serve a web app from ${(0, _chalk.cyan)('entry')}.

  ${(0, _chalk.green)('nwb test-react')}
    Tests a React project.

  ${(0, _chalk.green)('nwb test-preact')}
    Tests a Preact project.

  ${(0, _chalk.green)('nwb test-inferno')}
    Tests an Inferno project.

  Arguments:
    ${(0, _chalk.cyan)('entry')}      entry point ${(0, _chalk.cyan)('[default: src/index.js]')}
    ${(0, _chalk.cyan)('dist_dir')}   build output directory ${(0, _chalk.cyan)('[default: dist/]')}
    ${(0, _chalk.cyan)('umd_entry')}  entry point for UMD builds ${(0, _chalk.cyan)('[default: src/index.js]')}

Helper commands:
  ${(0, _chalk.green)('nwb check-config')} ${(0, _chalk.cyan)('[config]')} ${(0, _chalk.cyan)('[options]')}
    Check your configuration file for errors, deprecated config and usage hints.

    Arguments:
      ${(0, _chalk.cyan)('config')}     path to the file to validate ${(0, _chalk.cyan)(`[default: ${_constants.CONFIG_FILE_NAME}]`)}

    Options:
      ${(0, _chalk.cyan)('--command')}  nwb command name to use when checking your config
      ${(0, _chalk.cyan)('-e, --env')}  NODE_ENV to use when checking your config: dev, test or prod
`);
    process.exit(args.help || command ? 0 : 1);
  }

  var unknownCommand = function unknownCommand() {
    console.error(`${(0, _chalk.red)('Unknown command:')} ${(0, _chalk.yellow)(command)}`);
    process.exit(1);
  };

  // Validate the command is in foo-bar-baz format before trying to resolve a
  // module path with it.
  if (!/^[a-z]+(?:-[a-z]+)*$/.test(command)) {
    return unknownCommand();
  }

  var commandModulePath = void 0;
  try {
    commandModulePath = require.resolve(`./commands/${command}`);
  } catch (e) {
    // XXX Flow complains that commandModulePath might be uninitialised if we
    //     return from here.
  }
  if (commandModulePath == null) {
    return unknownCommand();
  }

  // Check if the user is running a version of nwb from outside their project
  // which doesn't satisfy what's specified in package.json (when available).
  if (/^(build|check|clean|serve|test)/.test(command)) {
    var localNwbPath = null;
    try {
      localNwbPath = (0, _utils.modulePath)('nwb');
    } catch (e) {
      // nwb isn't installed locally to where the command is being run
    }

    var runningNwbPath = _path2.default.dirname(require.resolve('../package'));

    if (localNwbPath !== runningNwbPath) {
      var _pkg = null;
      try {
        _pkg = require(_path2.default.resolve('package.json'));
      } catch (e) {
        // pass
      }
      var requiredNwbVersion = _pkg && (_pkg.devDependencies && _pkg.devDependencies.nwb || _pkg.dependencies && _pkg.dependencies.nwb);
      if (requiredNwbVersion) {
        var runningNwbVersion = require('../package').version;
        if (!_semver2.default.satisfies(runningNwbVersion, requiredNwbVersion)) {
          return cb(new _errors.UserError(`The version of nwb you're running (v${runningNwbVersion}, from ${runningNwbPath}) ` + `doesn't satisfy the version specified in ${_path2.default.resolve('package.json')} (${requiredNwbVersion}).`));
        }
      }
    }
  }

  var commandModule = require(commandModulePath);
  // Quick commands handle running themselves
  if (typeof commandModule === 'function') {
    commandModule(args, cb);
  }
}
module.exports = exports['default'];