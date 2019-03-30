function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import closeIcon from './../assets/close-icon.png';

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'sc-header' },
      React.createElement('img', { className: 'sc-header--img', src: this.props.imageUrl, alt: '' }),
      React.createElement(
        'div',
        { className: 'sc-header--team-name' },
        ' ',
        this.props.teamName,
        ' '
      ),
      React.createElement(
        'div',
        { className: 'sc-header--close-button', onClick: this.props.onClose },
        React.createElement('img', { src: closeIcon, alt: '' })
      )
    );
  };

  return Header;
}(Component);

export default Header;