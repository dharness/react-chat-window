import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';


class Launcher extends Component {

  constructor() {
    super();
    this.state = { active: false };
  }

  handleClick() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const classList = [
      'sc-launcher',
      (this.state.active ? ' active' : ''),
    ];
    return (
      <div>
        <div className={classList.join(' ')} onClick={this.handleClick.bind(this)} />
        <ChatWindow
          messageHistory={this.props.messageHistory}
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
