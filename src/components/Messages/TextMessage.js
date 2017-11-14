import React, { Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.svg';
import Linkify from 'react-linkify';


const TextMessage = (props) => {
  return <div className="sc-message--text">{
    <Linkify properties={{ target: '_blank' }}>{props.data.text}</Linkify>
  }</div>
}

export default TextMessage
