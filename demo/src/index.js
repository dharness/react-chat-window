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
      <Launcher
        onMessageWasSent={this.onMessageWasSent}
        messageHistory={messageHistory}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
