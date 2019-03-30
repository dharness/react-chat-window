function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import FileMessage from './FileMessage';
import chatIconUrl from './../../assets/chat-icon.svg';

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Message.prototype._renderMessageOfType = function _renderMessageOfType(type) {
    switch (type) {
      case 'text':
        return React.createElement(TextMessage, this.props.message);
      case 'emoji':
        return React.createElement(EmojiMessage, this.props.message);
      case 'file':
        return React.createElement(FileMessage, this.props.message);
      default:
        console.error('Attempting to load message with unsupported file type \'' + type + '\'');
    }
  };

  Message.prototype.render = function render() {
    var contentClassList = ["sc-message--content", this.props.message.author === "me" ? "sent" : "received"];
    return React.createElement(
      'div',
      { className: 'sc-message' },
      React.createElement(
        'div',
        { className: contentClassList.join(" ") },
        React.createElement('div', { className: 'sc-message--avatar', style: {
            backgroundImage: 'url(' + chatIconUrl + ')'
          } }),
        this._renderMessageOfType(this.props.message.type)
      )
    );
  };

  return Message;
}(Component);

export default Message;