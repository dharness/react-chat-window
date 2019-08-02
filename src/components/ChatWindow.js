import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import Header from './Header';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
  }

  onUserInputSubmit(message) {
    this.props.onUserInputSubmit(message);
  }

  onFilesSelected(filesList) {
    this.props.onFilesSelected(filesList);
  }

  render() {
    let messageList = this.props.messageList || [];
    let classList = ['sc-chat-window', this.props.isOpen ? 'opened' : 'closed'];
    const {
      headerComponent,
      userInputComponent,
      messageComponent,
    } = this.props;
    return (
      <div className={classList.join(' ')}>
        {headerComponent ? (
          headerComponent
        ) : (
          <Header
            teamName={this.props.agentProfile.teamName}
            imageUrl={this.props.agentProfile.imageUrl}
            onClose={this.props.onClose}
          />
        )}

        <MessageList
          messageComponent={messageComponent}
          messages={messageList}
          imageUrl={this.props.agentProfile.imageUrl}
        />
        {userInputComponent ? (
          userInputComponent
        ) : (
          <UserInput
            onSubmit={this.onUserInputSubmit.bind(this)}
            onFilesSelected={this.onFilesSelected.bind(this)}
            showEmoji={this.props.showEmoji}
          />
        )}
      </div>
    );
  }
}

ChatWindow.propTypes = {
  agentProfile: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func,
  onUserInputSubmit: PropTypes.func.isRequired,
  showEmoji: PropTypes.bool,
  userInputComponent: PropTypes.node,
  headerComponent: PropTypes.node,
  messageComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default ChatWindow;
