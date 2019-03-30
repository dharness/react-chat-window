'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _emojiJs = require('emoji-js');

var _emojiJs2 = _interopRequireDefault(_emojiJs);

var _emojiData = require('./emojiData');

var _emojiData2 = _interopRequireDefault(_emojiData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojiConvertor = new _emojiJs2.default();
emojiConvertor.init_env();

exports.default = function (_ref) {
  var onEmojiPicked = _ref.onEmojiPicked,
      filter = _ref.filter;
  return _react2.default.createElement(
    'div',
    { className: 'sc-emoji-picker' },
    _emojiData2.default.map(function (category) {
      var filteredEmojis = category.emojis.filter(function (_ref2) {
        var name = _ref2.name;
        return name.includes(filter);
      });
      return _react2.default.createElement(
        'div',
        { className: 'sc-emoji-picker--category', key: category.name },
        filteredEmojis.length > 0 && _react2.default.createElement(
          'div',
          { className: 'sc-emoji-picker--category-title' },
          category.name
        ),
        filteredEmojis.map(function (_ref3) {
          var char = _ref3.char,
              name = _ref3.name;

          return _react2.default.createElement(
            'span',
            {
              key: char,
              className: 'sc-emoji-picker--emoji',
              onClick: function onClick() {
                return onEmojiPicked(char);
              }
            },
            char
          );
        })
      );
    })
  );
};

module.exports = exports['default'];