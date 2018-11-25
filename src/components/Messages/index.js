import React, { Component } from 'react'
import TextMessage from './TextMessage'
import EmojiMessage from './EmojiMessage'
import LinkMessage from './LinkMessage'
import MixedMessage from './MixedMessage'
import chatIconUrl from './../../assets/chat-icon.svg'


class Message extends Component {

  _renderMessageOfType(type) {
    switch(type) {
      case 'text':
        return <TextMessage {...this.props.message} />
      case 'emoji':
        return <EmojiMessage {...this.props.message} />
      case 'link':
        return <LinkMessage {...this.props.message} />
      case 'mixed': 
        return <MixedMessage {...this.props.message} />
    }
  }

  render () {
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
          {this._renderMessageOfType(this.props.message.type)}
        </div>
      </div>)
  }
}

export default Message