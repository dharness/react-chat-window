import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from './../assets/logo-no-bg.svg';
import launcherIconActive from './../assets/close-icon.png';


class Launcher extends Component {

  constructor() {
    super();
    this.state = {
      launcherIcon,
      isOpen: false
    };
  }

  displayNewMessagesCount() {
    const isOpen = (this.props.isOpen === undefined) ? this.state.isOpen : this.props.isOpen;
    if (this.props.newMessagesCount !== 0 && isOpen === false) {
      return (
        <div className={"sc-new-messsages-count"}>
          {this.props.newMessagesCount}
        </div>
      )
    } 
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
    const isOpen = (this.props.isOpen === undefined) ? this.state.isOpen : this.props.isOpen;
    const classList = [
      'sc-launcher',
      (isOpen ? ' opened' : ''),
    ];
    return (
      <div>
        <div>
        </div>
        <div className={classList.join(' ')} onClick={this.handleClick.bind(this)}>
          {this.displayNewMessagesCount()}
          <img className={"sc-open-icon"} src={launcherIconActive} />
          <img className={"sc-closed-icon"} src={launcherIcon} />
        </div>
        <ChatWindow
          messageList={this.props.messageList}
          onUserInputSubmit={this.props.onMessageWasSent}
          agentProfile={this.props.agentProfile}
          isOpen={isOpen}
          onClose={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func
};

Launcher.defaultProps = {
  newMessagesCount: 0
}

export default Launcher;
