/*
 This component is a text message component that will render data that 
 contains text content.
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const TextMessage = (props) => {
  return <div className="sc-message--text">{props.data.text}</div>
}

TextMessage.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  })
}

export default TextMessage