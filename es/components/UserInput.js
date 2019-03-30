function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SendIcon from './icons/SendIcon';
import FileIcon from './icons/FileIcon';
import EmojiIcon from './icons/EmojiIcon';
import PopupWindow from './popups/PopupWindow';
import EmojiPicker from './emoji-picker/EmojiPicker';

var UserInput = function (_Component) {
  _inherits(UserInput, _Component);

  function UserInput() {
    _classCallCheck(this, UserInput);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.toggleEmojiPicker = function (e) {
      e.preventDefault();
      if (!_this.state.emojiPickerIsOpen) {
        _this.setState({ emojiPickerIsOpen: true });
      }
    };

    _this.closeEmojiPicker = function (e) {
      if (_this.emojiPickerButton.contains(e.target)) {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.setState({ emojiPickerIsOpen: false });
    };

    _this._handleEmojiPicked = function (emoji) {
      _this.setState({ emojiPickerIsOpen: false });
      if (_this.state.inputHasText) {
        _this.userInput.innerHTML += emoji;
      } else {
        _this.props.onSubmit({
          author: 'me',
          type: 'emoji',
          data: { emoji: emoji }
        });
      }
    };

    _this.handleEmojiFilterChange = function (event) {
      var emojiFilter = event.target.value;
      _this.setState({ emojiFilter: emojiFilter });
    };

    _this._renderEmojiPopup = function () {
      return React.createElement(
        PopupWindow,
        {
          isOpen: _this.state.emojiPickerIsOpen,
          onClickedOutside: _this.closeEmojiPicker,
          onInputChange: _this.handleEmojiFilterChange
        },
        React.createElement(EmojiPicker, {
          onEmojiPicked: _this._handleEmojiPicked,
          filter: _this.state.emojiFilter
        })
      );
    };

    _this.state = {
      inputActive: false,
      inputHasText: false,
      emojiPickerIsOpen: false,
      emojiFilter: ''
    };
    return _this;
  }

  UserInput.prototype.componentDidMount = function componentDidMount() {
    this.emojiPickerButton = document.querySelector('#sc-emoji-picker-button');
  };

  UserInput.prototype.handleKeyDown = function handleKeyDown(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      return this._submitText(event);
    }
  };

  UserInput.prototype.handleKeyUp = function handleKeyUp(event) {
    var inputHasText = event.target.innerHTML.length !== 0 && event.target.innerText !== '\n';
    this.setState({ inputHasText: inputHasText });
  };

  UserInput.prototype._showFilePicker = function _showFilePicker() {
    this._fileUploadButton.click();
  };

  UserInput.prototype._submitText = function _submitText(event) {
    event.preventDefault();
    var text = this.userInput.textContent;
    if (text && text.length > 0) {
      this.props.onSubmit({
        author: 'me',
        type: 'text',
        data: { text: text }
      });
      this.userInput.innerHTML = '';
    }
  };

  UserInput.prototype._onFilesSelected = function _onFilesSelected(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.props.onFilesSelected(event.target.files);
    }
  };

  UserInput.prototype._renderSendOrFileIcon = function _renderSendOrFileIcon() {
    var _this2 = this;

    if (this.state.inputHasText) {
      return React.createElement(
        'div',
        { className: 'sc-user-input--button' },
        React.createElement(SendIcon, { onClick: this._submitText.bind(this) })
      );
    }
    return React.createElement(
      'div',
      { className: 'sc-user-input--button' },
      React.createElement(FileIcon, { onClick: this._showFilePicker.bind(this) }),
      React.createElement('input', {
        type: 'file',
        name: 'files[]',
        multiple: true,
        ref: function ref(e) {
          _this2._fileUploadButton = e;
        },
        onChange: this._onFilesSelected.bind(this)
      })
    );
  };

  UserInput.prototype.render = function render() {
    var _this3 = this;

    var _state = this.state,
        emojiPickerIsOpen = _state.emojiPickerIsOpen,
        inputActive = _state.inputActive;

    return React.createElement(
      'form',
      { className: 'sc-user-input ' + (inputActive ? 'active' : '') },
      React.createElement('div', {
        role: 'button',
        tabIndex: '0',
        onFocus: function onFocus() {
          _this3.setState({ inputActive: true });
        },
        onBlur: function onBlur() {
          _this3.setState({ inputActive: false });
        },
        ref: function ref(e) {
          _this3.userInput = e;
        },
        onKeyDown: this.handleKeyDown.bind(this),
        onKeyUp: this.handleKeyUp.bind(this),
        contentEditable: 'true',
        placeholder: 'Write a reply...',
        className: 'sc-user-input--text'
      }),
      React.createElement(
        'div',
        { className: 'sc-user-input--buttons' },
        React.createElement('div', { className: 'sc-user-input--button' }),
        React.createElement(
          'div',
          { className: 'sc-user-input--button' },
          this.props.showEmoji && React.createElement(EmojiIcon, {
            onClick: this.toggleEmojiPicker,
            isActive: emojiPickerIsOpen,
            tooltip: this._renderEmojiPopup()
          })
        ),
        this._renderSendOrFileIcon()
      )
    );
  };

  return UserInput;
}(Component);

UserInput.propTypes = process.env.NODE_ENV !== "production" ? {
  onSubmit: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func.isRequired,
  showEmoji: PropTypes.bool
} : {};

export default UserInput;