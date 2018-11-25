/*
 This component is a generic message component that will render data that 
 contains mixed content i.e. text, emoji, link etc. The implementation
 is left to the user
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const MixedMessage = (props) => {
  return (
    <div className={"sc-message--mixed"}>
      {props.data.content}
    </div>
  )
}

MixedMessage.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.any
  })
}

export default MixedMessage