import React, { Component } from 'react';


class Message extends Component {

  render() {
    let contentClassList = [
      "sc-message--content",
      (this.props.message.author === "me" ? "sent" : "received")
    ];
    return (
      <div className="sc-message">
        <div className={contentClassList.join(" ")}>
          <div className="sc-message--avatar"></div>
          <div className="sc-message--body" >{this.props.message.body}</div>
        </div>
      </div>)
  }
}

export default Message