import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from './../assets/logo-no-bg.svg';
import launcherIconActive from './../assets/close-icon.png';


class Launcher extends Component {

  constructor() {
    super();
    this.state = {
      launcherIcon
    };
  }

  displayNewMessagesCount() {
    if (this.props.newMessagesCount !== 0) {
      return (
        <div className={"sc-new-messsages-count"}>
          {this.props.newMessagesCount}
        </div>
      )
    } 
  }

  render() {
    const classList = [
      'sc-launcher',
      (this.props.isActive ? ' active' : ''),
    ];
    return (
      <div>
        <div>
        </div>
        <div className={classList.join(' ')} onClick={this.props.handleClick.bind(this)}>
          {this.displayNewMessagesCount()}
          <img className={"sc-open-icon"} src={launcherIconActive} />
          <img className={"sc-closed-icon"} src={launcherIcon} />
        </div>
        <ChatWindow
          messageList={this.props.messageList}
          onUserInputSubmit={this.props.onMessageWasSent}
          agentProfile={this.props.agentProfile}
          active={this.props.isActive}
          onClose={this.props.handleClick}
        />
      </div>
    );
  }
}

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
};

export default Launcher;
