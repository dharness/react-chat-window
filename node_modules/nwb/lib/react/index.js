'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getBaseConfig() {
  return {
    babel: {
      presets: [require.resolve('babel-preset-react')]
    }
  };
}

function getBaseDependencies() {
  return ['react', 'react-dom'];
}

function getBuildConfig(args) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var config = getBaseConfig();

  if (process.env.NODE_ENV === 'production') {
    // User-configurable, so handled by createBabelConfig
    config.babel.presets.push('react-prod');
  }

  var aliasPath = options.useModulePath ? _utils.modulePath : function (alias) {
    return alias;
  };

  if (args.inferno || args['inferno-compat']) {
    config.resolve = {
      alias: {
        'react': aliasPath('inferno-compat'),
        'react-dom': aliasPath('inferno-compat')
      }
    };
  } else if (args.preact || args['preact-compat']) {
    // Use the path to preact-compat.js, as using the path to the preact-compat
    // module picks up the "module" build, which prevents hijacking the render()
    // function in the render shim.
    var preactCompathPath = _path2.default.join(aliasPath('preact-compat'), 'dist/preact-compat');
    config.resolve = {
      alias: {
        'react': preactCompathPath,
        'react-dom': preactCompathPath,
        'create-react-class': 'preact-compat/lib/create-react-class'
      }
    };
  }

  return config;
}

var ReactConfig = function () {
  function ReactConfig(args) {
    var _this = this;

    _classCallCheck(this, ReactConfig);

    this.getName = function () {
      if (/^build/.test(_this._args._[0])) {
        return _this._getCompatName();
      }
      return 'React';
    };

    this.getBuildDependencies = function () {
      return _this._getCompatDependencies();
    };

    this.getBuildConfig = function () {
      return getBuildConfig(_this._args);
    };

    this.getServeConfig = function () {
      var config = getBaseConfig();
      config.babel.presets.push(require.resolve('./react-dev-preset'));

      if (_this._args.hmr !== false && _this._args.hmre !== false) {
        config.babel.presets.push(require.resolve('./react-hmre-preset'));
      }

      return config;
    };

    this.getQuickDependencies = function () {
      var deps = getBaseDependencies();
      if (/^build/.test(_this._args._[0])) {
        deps = deps.concat(_this._getCompatDependencies());
      }
      return deps;
    };

    this.getQuickBuildConfig = function () {
      return _extends({
        commandConfig: getBuildConfig(_this._args, { useModulePath: true })
      }, _this._getQuickConfig());
    };

    this.getQuickServeConfig = function () {
      return _extends({
        commandConfig: _this.getServeConfig()
      }, _this._getQuickConfig());
    };

    this._args = args;
  }

  ReactConfig.prototype._getCompatDependencies = function _getCompatDependencies() {
    if (this._args.inferno || this._args['inferno-compat']) {
      return ['inferno', 'inferno-compat'];
    } else if (this._args.preact || this._args['preact-compat']) {
      return ['preact', 'preact-compat'];
    }
    return [];
  };

  ReactConfig.prototype._getCompatName = function _getCompatName() {
    if (this._args.inferno || this._args['inferno-compat']) {
      return 'Inferno (React compat)';
    } else if (this._args.preact || this._args['preact-compat']) {
      return 'Preact (React compat)';
    }
    return 'React';
  };

  ReactConfig.prototype._getQuickConfig = function _getQuickConfig() {
    return {
      defaultTitle: `${this.getName()} App`,
      renderShim: require.resolve('./renderShim'),
      renderShimAliases: {
        'react': (0, _utils.modulePath)('react'),
        'react-dom': (0, _utils.modulePath)('react-dom')
      }
    };
  };

  ReactConfig.prototype.getProjectDependencies = function getProjectDependencies() {
    return getBaseDependencies();
  };

  ReactConfig.prototype.getKarmaTestConfig = function getKarmaTestConfig() {
    return getBaseConfig();
  };

  return ReactConfig;
}();

exports.default = function (args) {
  return new ReactConfig(args);
};

module.exports = exports['default'];