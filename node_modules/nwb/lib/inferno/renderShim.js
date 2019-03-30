'use strict';

/* global NWB_QUICK_MOUNT_ID */

var Inferno = require('inferno');
var createVNode = Inferno.createVNode,
    render = Inferno.render;

var parent = document.getElementById(NWB_QUICK_MOUNT_ID);
var vnode = null;

function renderEntry(exported) {
  if (exported.default) {
    exported = exported.default;
  }
  // Assumptions: the entry module either renders the app itself or exports an
  // Inferno component (which is either a function or class) or VNode (which has
  // a flags property).
  if (Object.prototype.toString.call(exported) === '[object Function]') {
    vnode = createVNode(1 << 4 /* === VNodeFlags.ComponentUnknown */, exported);
  } else if (exported.flags) {
    vnode = exported;
  }
  render(vnode, parent);
}

function init() {
  // Hijack any inline render() from the entry module, but only the first one -
  // others may be from components like portals which need to render() their
  // contents.
  Inferno.render = function (v) {
    vnode = v;
    Inferno.render = render;
  };
  var entry = require('nwb-quick-entry');
  Inferno.render = render;
  renderEntry(entry);
}

if (module.hot) {
  module.hot.accept('nwb-quick-entry', init);
}

init();