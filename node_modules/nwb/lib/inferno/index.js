'use strict';

exports.__esModule = true;

var _utils = require('../utils');

function getBaseConfig() {
  return {
    babel: {
      presets: [require.resolve('./inferno-preset')]
    },
    // Allow compatible React components to be used
    resolve: {
      alias: {
        'react': 'inferno-compat',
        'react-dom': 'inferno-compat'
      }
    }
  };
}


function getDependencies() {
  return ['inferno', 'inferno-component', 'inferno-compat'];
}

function getQuickConfig() {
  return {
    commandConfig: getBaseConfig(),
    defaultTitle: 'Inferno App',
    renderShim: require.resolve('./renderShim'),
    renderShimAliases: {
      'inferno': (0, _utils.modulePath)('inferno')
    }
  };
}

exports.default = function (args) {
  return {
    getName: function getName() {
      return 'Inferno';
    },
    getProjectDependencies: getDependencies,
    getBuildDependencies: function getBuildDependencies() {
      return [];
    },
    getBuildConfig: getBaseConfig,
    getServeConfig: getBaseConfig,
    getQuickDependencies: getDependencies,
    getQuickBuildConfig: getQuickConfig,
    getQuickServeConfig: getQuickConfig,
    getKarmaTestConfig: getBaseConfig
  };
};

module.exports = exports['default'];