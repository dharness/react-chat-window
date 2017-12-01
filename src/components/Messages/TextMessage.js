import React, { Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.svg';

const TextMessage = (props) => {
  return <div className="sc-message--text">{props.data.text}</div>
}

export default TextMessage