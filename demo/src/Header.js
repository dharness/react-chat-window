import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div className="demo-header">
        <div className="demo-header--title"><a href="/">react-chat-window</a></div>
        <div className="demo-header--links">
          <a href="https://github.com/kingofthestack/react-chat-window">Usage</a>
        </div>
      </div>
    );
  }
}

export default Header;
