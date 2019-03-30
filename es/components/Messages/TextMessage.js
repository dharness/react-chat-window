import React, { Component } from 'react';
import Linkify from 'react-linkify';

var TextMessage = function TextMessage(props) {
  return React.createElement(
    'div',
    { className: 'sc-message--text' },
    React.createElement(
      Linkify,
      { properties: { target: '_blank' } },
      props.data.text
    )
  );
};

export default TextMessage;