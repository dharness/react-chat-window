const assert = require('assert')

module.exports = maxstache

// Minimalist mustache template replacement
// (str, obj) -> null
function maxstache (str, ctx) {
  ctx = ctx || {}

  assert.equal(typeof str, 'string')
  assert.equal(typeof ctx, 'object')

  const tokens = str.split(/\{\{|\}\}/)
  const res = tokens.map(parse(ctx))
  return res.join('')
}

// parse a token
// obj -> (str, num) -> str
function parse (ctx) {
  return function parse (token, i) {
    if (i % 2 === 0) return token
    return ctx[token]
  }
}
