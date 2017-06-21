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
      emojiPickerOpen: false,
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

  toggleEmojiMenu() {
    this.setState({ emojiPickerOpen: !this.state.emojiPickerOpen });
  }

  render() {
    return (
      <form className={`sc-user-input ${(this.state.inputActive ? 'active' : '')}`}>
        {
          this.state.emojiPickerOpen &&
          <EmojiPicker />
        }
      {/*<div
          role="input"
          tabIndex="0"
          onFocus={() => { this.setState({ inputActive: true }); }}
          onBlur={() => { this.setState({ inputActive: false }); }}
          ref={(e) => { this.userInput = e; }}
          onKeyDown={this.handleKey.bind(this)}
          contentEditable="true"
          placeholder="Write a reply..."
          className="sc-input-field--input"
        ></div>*/}
        <div
          role="input"
          tabIndex="0"
          onFocus={() => { this.setState({ inputActive: true }); }}
          onBlur={() => { this.setState({ inputActive: false }); }}
          ref={(e) => { this.userInput = e; }}
          onKeyDown={this.handleKey.bind(this)}
          contentEditable="true"
          placeholder="Write a reply..."
          className="sc-user-input--text-input"
        ></div>
        <div className="sc-user-input--buttons" style={{display: 'none'}}>
          <EmojiIcon
            onClick={this.toggleEmojiMenu.bind(this)}
            isActive={this.state.emojiPickerOpen}
            onFocus={this.toggleEmojiMenu.bind(this)}
            onBlur={this.toggleEmojiMenu.bind(this)}
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
