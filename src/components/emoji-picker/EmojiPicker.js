import React, { Component } from 'react';
import EmojiConvertor from 'emoji-js';
import emojiData from './emojiData';


const emojiConvertor = new EmojiConvertor();
emojiConvertor.init_env();

export default ({ onEmojiPicked }) => (
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
              onClick={() => onEmojiPicked(emoji)}
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
