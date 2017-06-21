import React, { Component } from 'react';
import MessageList from './MessageList'
import UserInput from './UserInput'
import Header from './Header'


class ChatWindow extends Component {
    constructor(props) {
      super(props);
      const messages = props.messageHistory || [];
      this.state = { messages };
    }

    onUserInputSubmit(userInput) {
      const msg = {author: 'me', body: userInput};
      this.setState({messages: [...this.state.messages, msg]});
      this.props.onUserInputSubmit(userInput);
    }

    onMessageReceived(msg) {
      this.setState({messages: [...this.state.messages, msg]});
    }

    render() {
        let classList = [
          "sc-chat-window",
          (this.props.active ? " active" : " inactive")
        ];
        return (
          <div className={classList.join(' ')}>
            <Header
              teamName={this.props.agentProfile.teamName}
              imageUrl={this.props.agentProfile.imageUrl}
              onClose={this.props.onClose}
            />
            <MessageList
              messages={this.state.messages}
              imageUrl={this.props.agentProfile.imageUrl}
            />
            <UserInput onSubmit={this.onUserInputSubmit.bind(this)}/>
          </div>
        );
    }
}

export default ChatWindow;
