import React, { Component } from 'react';
import Message from './Messages';
import PropTypes from 'prop-types';

class MessageList extends Component {
  componentDidUpdate(_prevProps, _prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render() {
    const MessageComponent = this.props.messageComponent;
    return (
      <div className="sc-message-list" ref={(el) => (this.scrollList = el)}>
        {this.props.messages.map((message, i) => {
          if (MessageComponent) {
            return <MessageComponent key={i} message={message} />;
          }
          return <Message message={message} key={i} />;
        })}
      </div>
    );
  }
}

MessageList.propTypes = {
  messageComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default MessageList;
