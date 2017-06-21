import React, { Component } from 'react';
import chatIconUrl from './../assets/chat-icon.svg';

class Message extends Component {

  render() {
    console.log(chatIconUrl);
    let contentClassList = [
      "sc-message--content",
      (this.props.message.author === "me" ? "sent" : "received")
    ];
    return (
      <div className="sc-message">
        <div className={contentClassList.join(" ")}>
          <div className="sc-message--avatar" style={{
            backgroundImage: `url(${chatIconUrl})`
          }}></div>
          <div className="sc-message--body" >{this.props.message.body}</div>
        </div>
      </div>)
  }
}

export default Message