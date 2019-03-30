import React, { Component } from 'react';

var EmojiMessage = function EmojiMessage(props) {
  return React.createElement(
    "div",
    { className: "sc-message--emoji" },
    props.data.emoji
  );
};

export default EmojiMessage;