import React, {Component} from 'react'
import {render} from 'react-dom'
import {Launcher} from '../../src'
import messageHistory from './messageHistory';
import TestArea from './TestArea';
import imgUrl from "./../assets/intercom.png";
import Highlight from "react-highlight.js";
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
      <div className="demo-description">
        <h1>react-live-chat demo</h1>
        <p>
          react-live-chat is a chat window that allows you to build and add custom
          live chat to your sites. It includes only the react chat widget - there is no backend,
          and no communication system baked in.
        </p>
        <p>
          If you are looking for a cheap, ready-made solution, check out <a href="https://slackchat.io/"> Slackchat </a>
        </p>
      </div>
      <TestArea
        onMessage={this._sendMessage.bind(this)}
      />
      <div className="demo-usage">
        <h3> Usage </h3>
        <p>
        For a full example see the <a href="https://github.com/kingofthestack/react-live-chat/blob/master/demo/src/index.js">demo</a>.
        <Highlight language={'javascript'}>
          {`
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
            
            // ...

            <Launcher
              agentProfile={{
                teamName: 'react-live-chat',
                imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
              }}
              onMessageWasSent={this._onMessageWasSent.bind(this)}
              messageList={this.state.messageList}
            />
          `}
        </Highlight>
        </p>
      </div>
      <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
    
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
