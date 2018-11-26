/*
 This component is a generic message component that will render data that 
 contains custom content i.e. text, emoji, link etc. The implementation
 is left to the user
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const CustomMessage = (props) => {
  return (
    <div className={"sc-message--custom"}>
      {props.data.content}
    </div>
  )
}

CustomMessage.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.any
  })
}

export default CustomMessage