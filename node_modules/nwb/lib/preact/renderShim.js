'use strict';

/* global NWB_QUICK_MOUNT_ID */

// h/t to @developit for this render shim module
var Preact = require('preact');
var h = Preact.h,
    render = Preact.render;

var parent = document.getElementById(NWB_QUICK_MOUNT_ID);
var root = parent.firstChild; // If #app already contains elements, hydrate from them (for SSR)
var vnode = null;

if (process.env.NODE_ENV === 'development') {
  // Enable preact devtools
  require('preact/devtools');
}

function renderEntry(exported) {
  if (exported.default) {
    exported = exported.default;
  }
  // Assumptions: the entry module either renders the app itself or exports a
  // Preact component (which is either a function or class) or VNode (which has
  // a children property).
  if (Object.prototype.toString.call(exported) === '[object Function]') {
    vnode = h(exported);
  } else if (exported.children) {
    vnode = exported;
  }
  root = render(vnode, parent, root);
}

function init() {
  // Hijack any inline render() from the entry module, but only the first one -
  // others may be from components like portals which need to render() their
  // contents.
  Preact.render = function (v) {
    vnode = v;
    Preact.render = render;
  };
  var entry = require('nwb-quick-entry');
  Preact.render = render;
  renderEntry(entry);
}

if (module.hot) {
  module.hot.accept('nwb-quick-entry', init);
}

init();