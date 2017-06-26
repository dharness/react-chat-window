import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from './../assets/logo-no-bg.svg';
import launcherIconActive from './../assets/close-icon.png';


class Launcher extends Component {

  constructor() {
    super();
    this.state = {
      active: false,
      launcherIcon
    };
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const classList = [
      'sc-launcher',
      (this.state.active ? ' active' : ''),
    ];
    return (
      <div>
        <div className={classList.join(' ')} onClick={this.handleClick.bind(this)}>
          <img className={"sc-open-icon"} src={launcherIconActive} />
          <img className={"sc-closed-icon"} src={launcherIcon} />
        </div>
        <ChatWindow
          messageList={this.props.messageList}
          onUserInputSubmit={this.props.onMessageWasSent}
          agentProfile={this.props.agentProfile}
          active={this.state.active}
          onClose={this.handleClick.bind(this)}
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
