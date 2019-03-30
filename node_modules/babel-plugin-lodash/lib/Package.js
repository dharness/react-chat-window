'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constant2 = require('lodash/constant');

var _constant3 = _interopRequireDefault(_constant2);

var _tail2 = require('lodash/tail');

var _tail3 = _interopRequireDefault(_tail2);

var _toString2 = require('lodash/toString');

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reLodash = /^lodash(?:-compat|-es)?$/;

/*----------------------------------------------------------------------------*/

var Package = function Package(pkgPath) {
  _classCallCheck(this, Package);

  pkgPath = (0, _toString3.default)(pkgPath);
  var parts = pkgPath.split('/');

  this.base = (0, _tail3.default)(parts).join('/');
  this.id = parts[0];
  this.isLodash = (0, _constant3.default)(reLodash.test(this.id));
  this.path = pkgPath;
};

exports.default = Package;
;
module.exports = exports['default'];