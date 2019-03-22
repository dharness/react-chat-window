import React, { Component } from 'react';
import closeIcon from './../assets/close-icon.png';
import sendVideoIcon from '../assets/send_video.svg';
import audioCall from '../assets/audio_call.svg';
import shareScreen from '../assets/share_screen.svg';

class Header extends Component {

  render() {
    return (
      <div className="sc-header">
        <img className="sc-header--img" src={this.props.imageUrl} alt="" />
        <div className="sc-header--team-name"> {this.props.teamName} </div>
        <div className="sc-header--custom-button" data-tooltip="Send Video" onClick={this.props.sendVideo}>
          <img src={sendVideoIcon} alt="" />
        </div>
        <div className="sc-header--custom-button" data-tooltip="Audio Call" onClick={this.props.audioCall}>
          <img src={audioCall} alt="" />
        </div>
        <div className="sc-header--custom-button" data-tooltip="Share Screen" onClick={this.props.shareScreen}>
          <img src={shareScreen} alt="" />
        </div>
        <div className="sc-header--close-button" onClick={this.props.onClose}>
          <img src={closeIcon} alt="" />
        </div>
      </div>
    );
  }
}

export default Header;
