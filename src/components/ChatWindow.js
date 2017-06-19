import React, { Component } from 'react';
import MessageList from './MessageList'
import UserInput from './UserInput'
import Header from './Header'
import messageBroker from './../services/messageBroker';


class ChatWindow extends Component {
    constructor() {
      super();
      this.state = { messages: [] };
      this.messageBroker = messageBroker;
      this.messageBroker.init();
      this.messageBroker.onMessageReceived(this.onMessageReceived.bind(this));
    }

    onUserInputSubmit(userInput) {
      const msg = {author: 'me', body: userInput};
      this.setState({messages: [...this.state.messages, msg]});
      this.messageBroker.sendMessage(msg);
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
            <Header teamName={messageBroker.getTeamName()} imageUrl={messageBroker.getImageUrl()} onClose={this.props.onClose} />
            <MessageList messages={this.state.messages}/>
            <UserInput onSubmit={this.onUserInputSubmit.bind(this)}/>
          </div>
        );
    }
}

export default ChatWindow;
