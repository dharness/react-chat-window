'use strict';

exports.__esModule = true;
function getBaseConfig() {
  return {};
}

function getDependencies() {
  return [];
}

function getQuickConfig() {
  return {
    commandConfig: getBaseConfig(),
    defaultTitle: 'Web App'
  };
}

// Vanilla JavaScript apps just use the default config for everything

exports.default = function (args) {
  return {
    getName: function getName() {
      return 'Web';
    },
    getProjectDependencies: getDependencies,
    getBuildDependencies: getDependencies,
    getBuildConfig: getBaseConfig,
    getServeConfig: getBaseConfig,
    getQuickDependencies: getDependencies,
    getQuickBuildConfig: getQuickConfig,
    getQuickServeConfig() {
      // Reload on unaccepted HMR changes by default; disable with --no-reload
      if (args.reload !== false) {
        args.reload = true;
      }
      return getQuickConfig();
    },
    getKarmaTestConfig: getBaseConfig
  };
};

module.exports = exports['default'];