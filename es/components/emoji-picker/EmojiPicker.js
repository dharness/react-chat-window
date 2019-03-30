import React, { Component } from 'react';
import EmojiConvertor from 'emoji-js';
import emojiData from './emojiData';

var emojiConvertor = new EmojiConvertor();
emojiConvertor.init_env();

export default (function (_ref) {
  var onEmojiPicked = _ref.onEmojiPicked,
      filter = _ref.filter;
  return React.createElement(
    'div',
    { className: 'sc-emoji-picker' },
    emojiData.map(function (category) {
      var filteredEmojis = category.emojis.filter(function (_ref2) {
        var name = _ref2.name;
        return name.includes(filter);
      });
      return React.createElement(
        'div',
        { className: 'sc-emoji-picker--category', key: category.name },
        filteredEmojis.length > 0 && React.createElement(
          'div',
          { className: 'sc-emoji-picker--category-title' },
          category.name
        ),
        filteredEmojis.map(function (_ref3) {
          var char = _ref3.char,
              name = _ref3.name;

          return React.createElement(
            'span',
            {
              key: char,
              className: 'sc-emoji-picker--emoji',
              onClick: function onClick() {
                return onEmojiPicked(char);
              }
            },
            char
          );
        })
      );
    })
  );
});