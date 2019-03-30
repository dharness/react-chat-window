"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmojiMessage = function EmojiMessage(props) {
  return _react2.default.createElement(
    "div",
    { className: "sc-message--emoji" },
    props.data.emoji
  );
};

exports.default = EmojiMessage;
module.exports = exports["default"];