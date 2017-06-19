import React, { Component } from 'react';
import Message from './Message'

class MessageList extends Component {

  componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render () {
    return (
      <div className="sc-message-list" ref={el => this.scrollList = el}>
        {this.props.messages.map((msg, i) => {
          return <Message message={msg} key={i} />
        })}
      </div>)
  }
}

export default MessageList