import React, { Component } from 'react';


class Message extends Component {


  render (props, state) {
    let contentClassList = [
      "sc-message--content",
      (props.message.author === "me" ? "sent" : "received")
    ];
    return (
      <div className="sc-message">
        <div className={contentClassList.join(" ")}>
          <div className="sc-message--avatar"></div>
          <div className="sc-message--body" >{props.message.body}</div>
        </div>
      </div>)
  }
}

export default Message