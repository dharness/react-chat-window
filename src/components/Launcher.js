import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from './../assets/logo-no-bg.svg';
import incomingMessageSound from './../assets/sounds/notification.mp3';
import launcherIconActive from './../assets/close-icon.png';

class Launcher extends Component {

  constructor() {
    super();
    this.state = {
      launcherIcon,
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mute) { return; }
    const nextMessage = nextProps.messageList[nextProps.messageList.length - 1];
    const isIncoming = (nextMessage || {}).author === 'them';
    const isNew = nextProps.messageList.length > this.props.messageList.length;
    if (isIncoming && isNew && this.props.incomingMessageSound) {
      this.playIncomingMessageSound();
    }
  }

  playIncomingMessageSound() {
    var audio = new Audio(incomingMessageSound);
    audio.play();
  }

  handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }
  render() {
    const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    const classList = [
      'sc-launcher',
      (isOpen ? 'opened' : ''),
    ];

    return (
      <div id="sc-launcher">
        {this.props.displayCloseChatButton ? (
          <div className={classList.join(' ')} onClick={this.handleClick.bind(this)}>
            <MessageCount count={this.props.newMessagesCount} isOpen={isOpen} />
            <img className={'sc-open-icon'} src={launcherIconActive} />
            <img className={'sc-closed-icon'} src={launcherIcon} />
          </div>
        ): null}
        <ChatWindow
          messageList={this.props.messageList}
          onUserInputSubmit={this.props.onMessageWasSent}
          onUserStartTyping={this.props.onUserStartTyping}
          onUserEndChat={this.props.onUserEndChat}
          onFilesSelected={this.props.onFilesSelected}
          agentProfile={this.props.agentProfile}
          isOpen={isOpen}
          onClose={this.handleClick.bind(this)}
          showEmoji={this.props.showEmoji}
          onUserDetailsSubmitted={this.props.onUserDetailsSubmitted}
          userDetailsPopulated={this.props.userDetailsPopulated}
          showStartNewChatButton={this.props.showStartNewChatButton}
          startNewChat={this.props.startNewChat}
          startScreenFields={this.props.startScreenFields}
          startChatButtonValue={this.props.startChatButtonValue}
          showChatInputUi={this.props.showChatInputUi}
          chatHeaderText={this.props.chatHeaderText}
          displayOpenChatButton={this.props.displayOpenChatButton}
          startNewChatButtonText={this.props.startNewChatButtonText}
          fieldLabels={this.props.fieldLabels}
          richContentComponent={this.props.richContentComponent}
          richContentCallback={this.props.richContentCallback}
          richContentCustomHTML={this.props.children}
        />
      </div>
    );
  }
}

const MessageCount = (props) => {
  if (props.count === 0 || props.isOpen === true) { return null; }
  return (
    <div className={'sc-new-messages-count'}>
      {props.count}
    </div>
  );
};

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  onUserStartTyping: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object),
  mute: PropTypes.bool,
  showEmoji: PropTypes.bool,
  onUserEndChat: PropTypes.func,
  onUserDetailsSubmitted: PropTypes.func,
  userDetailsPopulated: PropTypes.func,
  showStartNewChatButton: PropTypes.bool,
  startNewChat: PropTypes.func,
  startScreenFields: PropTypes.object,
  startChatButtonValue: PropTypes.string,
  showChatInputUi: PropTypes.bool,
  displayCloseChatButton: PropTypes.bool,
  displayOpenChatButton: PropTypes.bool,
  playMessageSound: PropTypes.bool,
  targetDOMNodeId: PropTypes.any,
  chatHeaderText: PropTypes.any,
  startNewChatButtonText: PropTypes.any,
  fieldLabels: PropTypes.object,
};

Launcher.defaultProps = {
  newMessagesCount: 0,
  showEmoji: true
};

export default Launcher;
