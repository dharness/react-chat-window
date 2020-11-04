import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import closeIcon from './../assets/close-icon.png';

class Header extends Component {
  render() {
    return (
      <div className="sc-header">
        <img className="sc-header--img" src={this.props.imageUrl} alt="" />
        <div className="sc-header--team-name"> {this.props.chatHeaderText} </div>
        {this.props.displayCloseChatButton ? (
          <div className="sc-header--close-button" onClick={this.props.onClose}>
            <img src={closeIcon} alt="" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Header;
