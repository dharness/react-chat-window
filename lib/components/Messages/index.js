'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextMessage = require('./TextMessage');

var _TextMessage2 = _interopRequireDefault(_TextMessage);

var _EmojiMessage = require('./EmojiMessage');

var _EmojiMessage2 = _interopRequireDefault(_EmojiMessage);

var _FileMessage = require('./FileMessage');

var _FileMessage2 = _interopRequireDefault(_FileMessage);

var _chatIcon = require('./../../assets/chat-icon.svg');

var _chatIcon2 = _interopRequireDefault(_chatIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Message.prototype._renderMessageOfType = function _renderMessageOfType(type) {
    switch (type) {
      case 'text':
        return _react2.default.createElement(_TextMessage2.default, this.props.message);
      case 'emoji':
        return _react2.default.createElement(_EmojiMessage2.default, this.props.message);
      case 'file':
        return _react2.default.createElement(_FileMessage2.default, this.props.message);
      default:
        console.error('Attempting to load message with unsupported file type \'' + type + '\'');
    }
  };

  Message.prototype.render = function render() {
    var contentClassList = ["sc-message--content", this.props.message.author === "me" ? "sent" : "received"];
    return _react2.default.createElement(
      'div',
      { className: 'sc-message' },
      _react2.default.createElement(
        'div',
        { className: contentClassList.join(" ") },
        _react2.default.createElement('div', { className: 'sc-message--avatar', style: {
            backgroundImage: 'url(' + _chatIcon2.default + ')'
          } }),
        this._renderMessageOfType(this.props.message.type)
      )
    );
  };

  return Message;
}(_react.Component);

exports.default = Message;
module.exports = exports['default'];