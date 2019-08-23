'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopupWindow = function (_Component) {
  _inherits(PopupWindow, _Component);

  function PopupWindow() {
    var _temp, _this, _ret;

    _classCallCheck(this, PopupWindow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.interceptLauncherClick = function (e) {
      var isOpen = _this.props.isOpen;

      var clickedOutside = !_this.emojiPopup.contains(e.target) && isOpen;
      clickedOutside && _this.props.onClickedOutside(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PopupWindow.prototype.componentDidMount = function componentDidMount() {
    this.scLauncher = document.querySelector('#sc-launcher');
    this.scLauncher.addEventListener('click', this.interceptLauncherClick);
  };

  PopupWindow.prototype.componentWillUnmount = function componentWillUnmount() {
    this.scLauncher.removeEventListener('click', this.interceptLauncherClick);
  };

  PopupWindow.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        isOpen = _props.isOpen,
        children = _props.children;

    return _react2.default.createElement(
      'div',
      { className: 'sc-popup-window', ref: function ref(e) {
          return _this2.emojiPopup = e;
        } },
      _react2.default.createElement(
        'div',
        { className: 'sc-popup-window--cointainer ' + (isOpen ? '' : 'closed') },
        _react2.default.createElement('input', {
          onChange: this.props.onInputChange,
          className: 'sc-popup-window--search',
          placeholder: 'Search emoji...'
        }),
        children
      )
    );
  };

  return PopupWindow;
}(_react.Component);

exports.default = PopupWindow;
module.exports = exports['default'];