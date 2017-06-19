import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SendIcon from './icons/SendIcon';
import EmojiIcon from './icons/EmojiIcon';
import EmojiPicker from './emoji-picker/EmojiPicker';


class UserInput extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      inputActive: false,
      emojiPickerOpen: false,
    };
  }

  handleKey(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      const messageText = this.userInput.textContent;
      this.props.onSubmit(messageText);
      this.setState({ inputValue: '' });
    }
  }

  toggleEmojiMenu() {
    this.setState({ emojiPickerOpen: !this.state.emojiPickerOpen });
  }

  render() {
    return (
      <form className={`sc-input-field ${(this.state.inputActive ? 'active' : '')}`}>
        {
          this.state.emojiPickerOpen &&
          <EmojiPicker />
        }
        <div
          role="button"
          tabIndex="0"
          onFocus={() => { this.setState({ inputActive: true }); }}
          onBlur={() => { this.setState({ inputActive: false }); }}
          ref={(e) => { this.userInput = e; }}
          onKeyDown={this.handleKey}
          contentEditable="true"
          placeholder="Write a reply..."
          className="sc-input-field--input"
        >
          {/* this.state.inputValue */}
        </div>
        <div className="sc-input-field--buttons">
          <EmojiIcon
            onClick={this.toggleEmojiMenu}
            isActive={this.state.emojiPickerOpen}
            onFocus={this.toggleEmojiMenu}
            onBlur={this.toggleEmojiMenu}
          />
          <SendIcon />
        </div>
      </form>
    );
  }
}

UserInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserInput;
