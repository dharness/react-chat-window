'use strict';

exports.__esModule = true;

var _utils = require('../utils');

function getBaseConfig() {
  return {
    babel: {
      presets: [require.resolve('./preact-preset')]
    },
    // Allow compatible React components to be used
    resolve: {
      alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat',
        'create-react-class': 'preact-compat/lib/create-react-class'
      }
    }
  };
}


function getDependencies() {
  return ['preact', 'preact-compat'];
}

function getQuickConfig() {
  return {
    commandConfig: getBaseConfig(),
    defaultTitle: 'Preact App',
    renderShim: require.resolve('./renderShim'),
    renderShimAliases: {
      'preact': (0, _utils.modulePath)('preact')
    }
  };
}

exports.default = function (args) {
  return {
    getName: function getName() {
      return 'Preact';
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