import React, { Component } from 'react';
import EmojiConvertor from 'emoji-js';
import emojiData from './emojiData';


class EmojiPicker extends Component {

  constructor() {
    super();
    this.emojiConvertor = new EmojiConvertor();
    this.emojiConvertor.init_env();
  }

  render() {
    return (
      <div className="sc-emoji-picker">
        {emojiData.map((category) => {
          return (
            <div className="sc-emoji-picker--category" key={category.name}>
              <div className="sc-emoji-picker--category-title">{category.name}</div>
              {category.emojis.map((emoji) => {
                return (
                  <span
                    key={emoji}
                    className="sc-emoji-picker--emoji"
                    onClick={() => {
                      this.props.onEmojiPicked(emoji);
                      this.domNode.blur();
                    }}
                  >
                    {emoji}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default EmojiPicker;
