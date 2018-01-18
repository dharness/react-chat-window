import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MessageList from './MessageList'
import UserInput from './UserInput'
import Header from './Header'


class ChatWindow extends Component {
    constructor(props) {
      super(props);
    }

    onUserInputSubmit(message) {
      this.props.onUserInputSubmit(message);
    }

    onMessageReceived(message) {
      this.setState({ messages: [...this.state.messages, message] });
    }

    render() {
      let messageList = this.props.messageList || [];
      let classList = [
        "sc-chat-window",
        (this.props.isOpen ? "opened" : "closed")
      ];
      return (
        <div className={classList.join(' ')}>
          <Header
            teamName={this.props.agentProfile.teamName}
            imageUrl={this.props.agentProfile.imageUrl}
            onClose={this.props.onClose}
          />
          <MessageList
            messages={messageList}
            imageUrl={this.props.agentProfile.imageUrl}
          />
          <UserInput showEmoji={this.props.showEmoji} onSubmit={this.onUserInputSubmit.bind(this)}/>
        </div>
      );
    }
}

ChatWindow.propTypes = {
  showEmoji: PropTypes.bool
}

export default ChatWindow;
