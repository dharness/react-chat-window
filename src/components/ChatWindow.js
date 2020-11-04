import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import UserOptions from './UserOptions';
import UserDetails from './UserDetails';
import StartNewChat from './startNewChat';
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

  onUserStartTyping() {
    this.props.onUserStartTyping();
  }

  render() {
    let messageList = this.props.messageList || [];
    let classList = [
      'sc-chat-window',
      (this.props.isOpen ? 'opened' : 'closed'),
      (this.props.userDetailsPopulated ? 'show-chat' : 'show-user-details-screen'),
    ];
    return (
      <div className={classList.join(' ')}>
        <Header
          teamName={this.props.agentProfile.teamName}
          imageUrl={this.props.agentProfile.imageUrl}
          onClose={this.props.onClose}
          displayCloseChatButton={this.props.displayCloseChatButton}
          chatHeaderText={this.props.chatHeaderText}
        />
        {this.props.userDetailsPopulated ?
          (
            <Fragment>
              <MessageList
                messages={messageList}
                imageUrl={this.props.agentProfile.imageUrl}
              />
              {this.props.showStartNewChatButton
                ?  (
                  <StartNewChat
                    startNewChat={this.props.startNewChat}
                  />
                )  
                : (
                  <Fragment>
                    <UserInput
                      onSubmit={this.onUserInputSubmit.bind(this)}
                      onFilesSelected={this.onFilesSelected.bind(this)}
                      onUserStartTyping={this.onUserStartTyping.bind(this)}
                      showEmoji={this.props.showEmoji}
                      showChatInputUi={this.props.showChatInputUi}
                    />
                    <UserOptions 
                      endChat={this.props.onUserEndChat}
                    />
                  </Fragment>
                )}
            </Fragment>
          ) : (
            <UserDetails
              detailsSubmitted={this.props.onUserDetailsSubmitted}
              startScreenFields={this.props.startScreenFields}
              startChatButtonValue={this.props.startChatButtonValue}
            />
          )
        }
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
  onUserEndChat: PropTypes.func,
  onUserDetailsSubmitted: PropTypes.func,
  userDetailsPopulated: PropTypes.bool, 
  showStartNewChatButton: PropTypes.bool,
  startNewChat: PropTypes.func,
  startScreenFields: PropTypes.object,
  startChatButtonValue: PropTypes.string,
  showChatInputUi: PropTypes.bool,
  chatHeaderText: PropTypes.string,
  displayCloseChatButton: PropTypes.bool,
  displayOpenChatButton: PropTypes.bool,
};

export default ChatWindow;
