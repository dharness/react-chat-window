import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SendIcon from './icons/SendIcon';
import FileIcon from './icons/FileIcon';
import EmojiIcon from './icons/EmojiIcon';
import PopupWindow from './popups/PopupWindow';
import EmojiPicker from './emoji-picker/EmojiPicker';


class UserInput extends Component {

  constructor() {
    super();
    this.state = {
      inputActive: false,
      inputHasText: false,
      emojiPickerIsOpen: false,
      emojiFilter: ''
    };
  }

  componentDidMount() {
    this.emojiPickerButton = document.querySelector('#sc-emoji-picker-button'); 
  }

  handleKeyDown(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      return this._submitText(event);
    }
  }

  handleKeyUp(event) {
    const inputHasText = event.target.innerHTML.length !== 0 &&
      event.target.innerText !== '\n';
    this.setState({ inputHasText });
  }

  _showFilePicker() {
    this._fileUploadButton.click();
  }

  toggleEmojiPicker = (e) => {
    e.preventDefault();
    if (!this.state.emojiPickerIsOpen) {
      this.setState({ emojiPickerIsOpen: true });
    }
  }

  closeEmojiPicker = (e) => {
    if (this.emojiPickerButton.contains(e.target)) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ emojiPickerIsOpen: false });
  }

  _submitText(event) {
    event.preventDefault();
    const text = this.userInput.textContent;
    if (text && text.length > 0) {
      this.props.onSubmit({
        author: 'me',
        type: 'text',
        data: { text }
      });
      this.userInput.innerHTML = '';
    }
  }

  _onFilesSelected(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.props.onFilesSelected(event.target.files);
    }
  }

  _handleEmojiPicked = (emoji) => {
    this.setState({ emojiPickerIsOpen: false });
    if(this.state.inputHasText) {
      this.userInput.innerHTML += emoji;
    } else {
      this.props.onSubmit({
        author: 'me',
        type: 'emoji',
        data: { emoji }
      });
    }
  }

  handleEmojiFilterChange = (event) => {
    const emojiFilter = event.target.value;
    this.setState({ emojiFilter });
  }

  _renderEmojiPopup = () => (
    <PopupWindow
      isOpen={this.state.emojiPickerIsOpen}
      onClickedOutside={this.closeEmojiPicker}
      onInputChange={this.handleEmojiFilterChange}
    >
      <EmojiPicker
        onEmojiPicked={this._handleEmojiPicked}
        filter={this.state.emojiFilter}
      />
    </PopupWindow>
  )

  _renderSendOrFileIcon() {
    if (this.state.inputHasText) {
      return (
        <div className="sc-user-input--button">
          <SendIcon onClick={this._submitText.bind(this)} />
        </div>
      );
    }
    return (
      <div className="sc-user-input--button">
        <FileIcon onClick={this._showFilePicker.bind(this)} />
        <input
          type="file"
          name="files[]"
          multiple
          ref={(e) => { this._fileUploadButton = e; }}
          onChange={this._onFilesSelected.bind(this)}
        />
      </div>
    );
  }

  render() {
    const { emojiPickerIsOpen, inputActive } = this.state;
    return (
      <form className={`sc-user-input ${(inputActive ? 'active' : '')}`}>
        <div
          role="button"
          tabIndex="0"
          onFocus={() => { this.setState({ inputActive: true }); }}
          onBlur={() => { this.setState({ inputActive: false }); }}
          ref={(e) => { this.userInput = e; }}
          onKeyDown={this.handleKeyDown.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
          contentEditable="true"
          placeholder="Write a reply..."
          className="sc-user-input--text"
        >
        </div>
        <div className="sc-user-input--buttons">
          <div className="sc-user-input--button"></div>
          <div className="sc-user-input--button">
            {this.props.showEmoji && <EmojiIcon
              onClick={this.toggleEmojiPicker}
              isActive={emojiPickerIsOpen}
              tooltip={this._renderEmojiPopup()}
            />}
          </div>
          {this._renderSendOrFileIcon()}
        </div>
      </form>
    );
  }
}

UserInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func.isRequired,
  showEmoji: PropTypes.bool
};

export default UserInput;
