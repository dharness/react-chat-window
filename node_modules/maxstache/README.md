# maxstache [![stability][0]][1]
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Minimalist mustache template replacement. Works extremely fast on one-off
replacements and doesn't escape any values.

## Installation
```sh
$ npm install maxstache
```

## Usage
```js
const maxstache = require('maxstache')

const str = 'My name is {{name}}'
const ctx = { name: 'jjjohnny' }
maxstache(str, ctx)
// => 'My name is jjjohnny'
```

## API
### nwStr = maxstache(str, ctx)
Replace `{{<var>}}` style variables in a string with values from a context.
Variable replacement doesn't escape values.

## FAQ
### Why not use {mus,min}stache?
`minstache` was built as a minimalist replacement for `mustache`, but is
unfortunately no longer maintained. This package is built as a smaller, faster
alternative to `minstache` that makes no assumptions about the file types (e.g.
no HTML-style escaping by default).

### Why doesn't maxstache escape values?
Template string escaping is useful for more than HTML. When building templates
for a variety of languages, escaping assumptions merely get in the way. If you
want to escape values, it's easy to pass the string result through an escape
function or escape the variable values before passing them into this function.
Hurray for composition!

### 25 lines is too much, make it shorter!
:rotating_light: CODE GOLF INITIATED :rotating_light:
```js
module.exports = function maxstache (str, ctx) {
  return str.split(/\{\{|\}\}/).map((t, i) => !(i % 2) ? t : ctx[t]).join('')
}
```
Shout out to [@divinegod](https://github.com/divinegod) and
[@someoneweird](https://github.com/SomeoneWeird) for thinking of ways to do
this in less lines.

## See Also
- [maxstache-stream][2]

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[npm-image]: https://img.shields.io/npm/v/maxstache.svg?style=flat-square
[npm-url]: https://npmjs.org/package/maxstache
[travis-image]: https://img.shields.io/travis/yoshuawuyts/maxstache/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/maxstache
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/maxstache/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/maxstache
[downloads-image]: http://img.shields.io/npm/dm/maxstache.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/maxstache
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

[2]: https://github.com/yoshuawuyts/maxstache-stream
