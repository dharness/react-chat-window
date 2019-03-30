'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FileIcon = require('./../icons/FileIcon');

var _FileIcon2 = _interopRequireDefault(_FileIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileMessage = function FileMessage(props) {
    return _react2.default.createElement(
        'a',
        { className: 'sc-message--file', href: props.data.url, download: props.data.fileName },
        _react2.default.createElement(_FileIcon2.default, null),
        _react2.default.createElement(
            'p',
            null,
            props.data.fileName
        )
    );
};

exports.default = FileMessage;
module.exports = exports['default'];