import React, { Component } from 'react'

class TestArea extends Component {
  render () {
    return (
      <form className="demo-test-area" onSubmit={(e)=> {
          e.preventDefault();
          this.props.onMessage(this.textArea.value);
          this.textArea.value = '';
        }}>
        <textarea
          ref={(e) => { this.textArea = e; }}
          className="demo-test-area--text"
          placeholder="Write a test message...."
        />
        <button className="demo-test-area--button"> Test! </button>
      </form>
    )
  }
}

export default TestArea