import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div className="demo-footer">
        <div>
          <div>Copyright {new Date().getFullYear()}. King of the Stack</div>
          <div>All rights reserved</div>
        </div>
        <div>
          <div>Made with Canadian Maple Syrup</div>
        </div>
      </div>
    );
  }
}

export default Footer;
