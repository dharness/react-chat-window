import PropTypes from 'prop-types';
import React, { Component } from 'react';

class startNewChatButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.startNewChat}
        className="sc-start-new-chat-button"
      >
        {this.props.startNewChatButtonText ? this.props.startNewChatButtonText : 'Start new chat'}
      </button>
    );
  }
}

startNewChatButton.propTypes = {
  startNewChatButtonText: PropTypes.any,
};

export default startNewChatButton;
