'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLinkify = require('react-linkify');

var _reactLinkify2 = _interopRequireDefault(_reactLinkify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextMessage = function TextMessage(props) {
  return _react2.default.createElement(
    'div',
    { className: 'sc-message--text' },
    _react2.default.createElement(
      _reactLinkify2.default,
      { properties: { target: '_blank' } },
      props.data.text
    )
  );
};

exports.default = TextMessage;
module.exports = exports['default'];