const maxstache = require('maxstache')
const through = require('through2')
const assert = require('assert')
const split = require('split2')
const pump = require('pump')

module.exports = maxstacheStream

// split by newline and parse
// obj? -> stream
function maxstacheStream (args) {
  args = args || {}
  assert.equal(typeof args, 'object')
  return pump(split(), parse(args))
}

// Maxstache transform stream
// obj? -> stream
function parse (args) {
  return through(function (chunk, enc, cb) {
    const str = String(chunk)
    cb(null, maxstache(str, args))
  })
}
