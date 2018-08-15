import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="demo-header">
        <div className="demo-header--title">react-chat-window</div>
        <div className="demo-header--links">
          <a href="https://github.com/dharness/react-chat-window">Usage</a>
        </div>
      </div>
    )
  }
}

export default Header