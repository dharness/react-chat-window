import React, { Component } from 'react'
import Highlight from './Highlight'
import cn from 'classnames'
import styles from './Highlight.example.css'

export default class HighlightDemoDemo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      language: 'javascript',
      content: 'var three = 1 + 2; // This is a comment'
    }

    this._debouncedSetState = this._debouncedSetState.bind(this)
  }

  _debouncedSetState (property, value) {
    if (this._debouncedSetStateTimeoutId) {
      clearTimeout(this._debouncedSetStateTimeoutId)
    }

    if (!this._pendingState) {
      this._pendingState = { ...this.state }
    }

    this._pendingState[property] = value

    this._debouncedSetStateTimeoutId = setTimeout(() => {
      this.setState(this._pendingState)
    }, 500)
  }

  render () {
    const { content, language } = this.state

    return (
      <div {...this.props}>
        <div className='form-group'>
          <label>Pick a language</label>
          <input
            className='form-control'
            type='text'
            name='language'
            defaultValue={language}
            onChange={event => this._debouncedSetState('language', event.target.value)} />
        </div>
        <div className='form-group'>
          <label>Enter text to be formatted</label>
          <textarea
            className={cn('form-control', styles.codeInput)}
            type='text'
            name='content'
            defaultValue={content}
            onChange={event => this._debouncedSetState('content', event.target.value)} />
        </div>
        <label>Output</label>
        <Highlight
          className={styles.pre}
          language={language}
        >
          {content}
        </Highlight>
      </div>
    )
  }
}
