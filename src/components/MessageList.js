import React, { Component } from 'react';
import Message from './Messages'
import Typing from './Typing'

class MessageList extends Component {

  componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render () {
    return (
      <div className="sc-message-list" ref={el => this.scrollList = el}>
        {this.props.messages.map((message, i) => {
          return <Message message={message} key={i} />
        })}
        {this.props.typing && <Typing />}
      </div>)
  }
}

export default MessageList
