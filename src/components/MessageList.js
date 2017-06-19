import React, { Component } from 'react';
import Message from './Message'

class MessageList extends Component {

  componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render () {
    return (
      <div className="sc-message-list" ref={el => this.scrollList = el}>
        {this.props.messages.map(msg => {
          return <Message message={msg}/>
        })}
      </div>)
  }
}

export default MessageList