# maxstache-stream
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

[maxstache][0] transform stream. Faster and simpler than `{mu,min}stache`.

## Installation
```sh
$ npm install maxstache-stream
```

## Usage
```js
const maxstache = require('maxstache-stream')
const fs = require('fs')

fs.createReadStream('./foobar.txt')
  .pipe(maxstache({ name: 'jjjohnny', occupation: 'wizard' }))
  .pipe(process.stdout)
```

## API
### transformStream = maxstache(vars)
Create a maxstache transform stream that injects an object of variables. Uses
the `{{varName}}` syntax to mark variables in templates.

## See Also
- [maxstache][0]

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/maxstache-stream.svg?style=flat-square
[npm-url]: https://npmjs.org/package/maxstache-stream
[travis-image]: https://img.shields.io/travis/yoshuawuyts/maxstache-stream/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/maxstache-stream
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/maxstache-stream/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/maxstache-stream
[downloads-image]: http://img.shields.io/npm/dm/maxstache-stream.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/maxstache-stream
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

[0]: https://github.com/yoshuawuyts/maxstache
[1]: https://github.com/yoshuawuyts/maxstache-stream
