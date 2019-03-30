import React from 'react'
import { findDOMNode, render } from 'react-dom'
import expect from 'expect.js'
import Highlight from './Highlight'

describe('Highlight', () => {
  const language = 'javascript'
  const content = 'var foo = "Foo"; // comment'
  const node = document.createElement('div')
  const highlight = render(
    <Highlight
      className='custom'
      language={language}
      style={{
        color: 'red'
      }}
    >
      {content}
    </Highlight>,
    node
  )
  const highlightDOMNode = findDOMNode(highlight)

  it('should render content with basic markup', () => {
    const code = highlightDOMNode.querySelector('code')
    expect(code.className).to.contain('hljs')
    expect(code.className).to.contain('javascript')
    expect(highlightDOMNode.querySelector('.hljs-keyword').textContent).to.contain('var')
    expect(highlightDOMNode.textContent).to.contain('foo')
    expect(highlightDOMNode.querySelector('.hljs-string').textContent).to.contain('"Foo"')
    expect(highlightDOMNode.querySelector('.hljs-comment').textContent).to.contain('// comment')
  })

  it('should support additional props :className and :style', () => {
    expect(highlightDOMNode.className).to.contain('custom')
    expect(highlightDOMNode.style.color).to.equal('red')
  })
})
