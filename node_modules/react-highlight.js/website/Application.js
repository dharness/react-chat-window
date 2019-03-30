import React from 'react'
import HighlightDemo from '../src/Highlight.example'
import Highlight from '../src/Highlight'

export default class Application extends React.Component {
  render () {
    return (
      <div>
        <h1 className='page-header'>
          react-highlight.js
          &nbsp;
          <small>
            <a href='https://github.com/bvaughn/react-highlight.js'>view in Github</a>
          </small>
        </h1>
        <p className='lead'>
          A lightweight React wrapper around the&nbsp;<a href='https://highlightjs.org/'>Highlight.js</a>&nbsp;syntaxt highlighting library
        </p>
        <h2>Demo</h2>
        <HighlightDemo />
        <h2>Usage</h2>
        <p>Install react-highlight.js using NPM</p>
        <Highlight language='bash'>
          npm install react-highlight.js --save
        </Highlight>
        <p>Choose a highlight.js theme and make sure it's included in your index file.</p>
        <Highlight language='html'>
          {'<link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />'}
        </Highlight>
        <p>And then use react-highlight.js to display your text like so:</p>
        <Highlight language='html'>
{`<Highlight language={language}>
  {content}
</Highlight>`}
        </Highlight>
        <h2>License</h2>
        <p>react-highlight.js is available under the MIT License.</p>
      </div>
    )
  }
}
