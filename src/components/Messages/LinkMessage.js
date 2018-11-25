/*
 This component is a link message component that will render data that 
 contains link content. It will display an anchor element that is clickable
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const LinkMessage = (props) => {
  return (
    <div className="sc-message--text sc-message--link">
      <a href={props.data.href} target={'_blank'}>
        {props.data.label || props.data.href}
      </a>
    </div>
  )
}

LinkMessage.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string
  })
}

export default LinkMessage