'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _closeIcon = require('./../assets/close-icon.png');

var _closeIcon2 = _interopRequireDefault(_closeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'sc-header' },
      _react2.default.createElement('img', { className: 'sc-header--img', src: this.props.imageUrl, alt: '' }),
      _react2.default.createElement(
        'div',
        { className: 'sc-header--team-name' },
        ' ',
        this.props.teamName,
        ' '
      ),
      _react2.default.createElement(
        'div',
        { className: 'sc-header--close-button', onClick: this.props.onClose },
        _react2.default.createElement('img', { src: _closeIcon2.default, alt: '' })
      )
    );
  };

  return Header;
}(_react.Component);

exports.default = Header;
module.exports = exports['default'];