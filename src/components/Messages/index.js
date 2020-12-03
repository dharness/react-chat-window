import React, { Component } from 'react';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import FileMessage from './FileMessage';
import AgentTypingMessage from './AgentTypingMessage';
import StatusMessage from './StatusMessage';
import HtmlMessage from './HtmlMessage';
import chatIconUrl from './../../assets/chat-icon.svg';

class Message extends Component {

  _renderMessageOfType(type, richContentComponent, richContentCallback) {
    const RichContentComponent = richContentComponent;
    switch(type) {
    case 'text':
      return <TextMessage {...this.props.message} />;
    case 'emoji':
      return <EmojiMessage {...this.props.message} />;
    case 'AgentTyping':
      return <AgentTypingMessage {...this.props.message} />;
    case 'file':
      return <FileMessage {...this.props.message} />;
    case 'status':
      return <StatusMessage {...this.props.message} />;
    case 'html':
      return <HtmlMessage {...this.props.message} />;
    case 'richContentMessage':
      return <RichContentComponent {...this.props.message} callback={richContentCallback} />;
    default:
      console.error(`Attempting to load message with unsupported file type '${type}'`);
    }
  }

  render () {
    const {
      message,
      richContentComponent,
      richContentCallback,
    } = this.props;

    let contentClassList = [
      'sc-message--content',
      (this.props.message.author === 'me' ? 'sent' : 'received')
    ];
    const messageClassList = [
      'sc-message',
      (message.type && message.type)
    ];
    return (
      <div className={messageClassList.join(' ')}>
        <div className={contentClassList.join(' ')}>
          {!message.hideAvatar ? (
            <div className="sc-message--avatar" style={{
              backgroundImage: `url(${chatIconUrl})`
            }}></div>) : null 
          }
          {this._renderMessageOfType(message.type, richContentComponent, richContentCallback)}
        </div>
      </div>);
  }
}

export default Message;
