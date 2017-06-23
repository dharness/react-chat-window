import React, {Component} from 'react'
import {render} from 'react-dom'
import {Launcher} from '../../src'
import messageHistory from './messageHistory';
import TestArea from './TestArea';
import imgUrl from "./../assets/intercom.png";
import './../assets/styles.css'



class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messageList: messageHistory
    };
  }

  _onMessageWasSent(messageText) {
    this.setState({
      messageList: [...this.state.messageList, {
        author: 'me',
        body: messageText
      }]
    })
  }

  _sendMessage(messageText) {
    this.setState({
      messageList: [...this.state.messageList, {
        author: 'them',
        body: messageText
      }]
    })
  }

  render() {
    return <div>
      <h1>react-live-chat Demo</h1>
      <TestArea
        onMessage={this._sendMessage.bind(this)}
      />
      <Launcher
        agentProfile={{
          teamName: 'react-live-chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
