import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SendIcon from './icons/SendIcon';
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
      event.preventDefault();
      const messageText = this.userInput.textContent;
      this.props.onSubmit(messageText);
      this.userInput.innerHTML = '';
    }
  }

  _handleEmojiPicked(emoji) {
    this.userInput.innerHTML += emoji;
    this.userInput.focus();
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
          <div className="sc-user-input--button"></div>
          <div className="sc-user-input--button">
            <EmojiIcon onEmojiPicked={this._handleEmojiPicked.bind(this)} />
          </div>
          <div className="sc-user-input--button">
            <SendIcon />
          </div>
        </div>
      </form>
    );
  }
}

UserInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserInput;
