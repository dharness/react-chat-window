import React, {Component} from 'react'
import {render} from 'react-dom'
import {Launcher} from '../../src'
import messageHistory from './messageHistory';



class Demo extends Component {

  onMessageWasSent() {
    console.log('onMessageWasSent');
  }

  render() {
    return <div>
      <h1>react-live-chat Demo</h1>
      <img src="./../assets/intercom.png" alt=""/>
      <Launcher
        agentProfile={{
          teamName: 'react-live-chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this.onMessageWasSent}
        messageHistory={messageHistory}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
