import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="demo-header">
        <div className="demo-header--title">react-chat-window</div>
        <div className="demo-header--links">
          <a href="https://github.com/kingofthestack/react-live-chat">Usage</a>
          <a href="https://slackchat.io/">Go to Slackchat</a>
        </div>
      </div>
    )
  }
}

export default Header