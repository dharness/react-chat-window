import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SendIcon from './icons/SendIcon';
import FileIcon from './icons/FileIcon';
import EmojiIcon from './icons/EmojiIcon';
import EmojiPicker from './emoji-picker/EmojiPicker';


class UserInput extends Component {

  constructor() {
    super();
    this.state = {
      inputActive: false,
    };
  }

  handleKey(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      this._submitText(event);
    }
  }

  _showFilePicker() {
    this._fileUploadButton.click()
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
    this.props.onFilesSelected(event.target.files)
  }

  _handleEmojiPicked(emoji) {
    this.props.onSubmit({
      author: 'me',
      type: 'emoji',
      data: { emoji }
    });
  }

  render() {
    return (
      <form className={`sc-user-input ${(this.state.inputActive ? 'active' : '')}`}>
        <div
          role="button"
          tabIndex="0"
          onFocus={() => { this.setState({ inputActive: true }); }}
          onBlur={() => { this.setState({ inputActive: false }); }}
          ref={(e) => { this.userInput = e; }}
          onKeyDown={this.handleKey.bind(this)}
          contentEditable="true"
          placeholder="Write a reply..."
          className="sc-user-input--text"
        >
        </div>
        <div className="sc-user-input--buttons">
          <div className="sc-user-input--button">
            <EmojiIcon onEmojiPicked={this._handleEmojiPicked.bind(this)} />
          </div>
          <div className="sc-user-input--button">
            <SendIcon onClick={this._submitText.bind(this)} />
          </div>
          <div className="sc-user-input--button">
            <FileIcon onClick={this._showFilePicker.bind(this)} />
            <input
              type="file"
              name="files[]"
              multiple
              ref={(e) => {this._fileUploadButton =  e;}}
              onChange={this._onFilesSelected.bind(this)}
            />
          </div>
        </div>
      </form>
    );
  }
}

UserInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func.isRequired
};

export default UserInput;
