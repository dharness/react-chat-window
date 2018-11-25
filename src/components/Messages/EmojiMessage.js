/*
 This component is an emoji message component that will render data that 
 contains an emoji.
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const EmojiMessage = (props) => {
  return <div className="sc-message--emoji">{props.data.emoji}</div>
}

EmojiMessage.propTypes = {
  data: PropTypes.shape({
    emoji: PropTypes.string
  })
}

export default EmojiMessage