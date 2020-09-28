import PropTypes from 'prop-types';
import React, { Component } from 'react';

class startNewChatButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.startNewChat}
        className="sc-start-new-chat-button"
      >
          Start new chat
      </button>
    );
  }
}

startNewChatButton.propTypes = {
  startNewChat: PropTypes.bool,
};

export default startNewChatButton;
