import React, { Component } from 'react';
import EmojiConvertor from 'emoji-js';
import emojiData from './emojiData';


class EmojiPicker extends Component {

  constructor() {
    super();
    this.emojiConvertor = new EmojiConvertor();
    this.emojiConvertor.init_env();
  }

  componentDidMount() {
    // Get the components DOM node
    const elem = this.domNode;
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(() => {
      // Now set a transition on the opacity
      elem.style.transition = 'opacity 350ms';
      // and set the opacity to 1
      elem.style.opacity = 1;
    });
  }

  render() {
    return (
      <div className="sc-emoji-picker" ref={(e) => { this.domNode = e; }} >
        <div className="sc-emoji-picker--content">
          {emojiData.map((category) => {
            return (
              <div className="sc-emoji-picker--category" key={category.name}>
                <div className="sc-emoji-picker--category-title">{category.name}</div>
                {category.emojis.map((emoji) => {
                  return (
                    <span key={emoji} className="sc-emoji-picker--emoji">{emoji}</span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EmojiPicker;
