import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import highlight from 'highlight.js'

export default class Highlight extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    language: PropTypes.string,
    style: PropTypes.object
  }

  componentDidMount () {
    highlight.highlightBlock(findDOMNode(this.refs.code))
  }

  componentDidUpdate () {
    highlight.initHighlighting.called = false
    highlight.highlightBlock(findDOMNode(this.refs.code))
  }

  render () {
    const { children, className, language, style } = this.props

    return (
      <pre
        className={className}
        style={style}
      >
        <code
          className={language}
          ref='code'
        >
          {children}
        </code>
      </pre>
    )
  }
}
