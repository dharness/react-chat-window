# copy-template-dir
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

High throughput template dir writes. Supports variable injection using the
mustache `{{ }}` syntax.

## Installation
```sh
$ npm install copy-template-dir
```

## Usage
```js
const copy = require('copy-template-dir')
const path = require('path.join')

const vars = { foo: 'bar' }
const inDir = path.join(process.cwd(), 'templates')
const outDir = path.join(process.cwd(), 'dist')

copy(inDir, outDir, vars, (err, createdFiles) => {
  if (err) throw err
  createdFiles.forEach(filePath => console.log(`Created ${filePath}`))
  console.log('done!')
})
```

## API
### copyTemplateDir(templateDir, targetDir, vars, cb)
Copy a directory of files over to the target directory, and inject the files
with variables. Takes the following arguments:
- __templateDir__: The directory that holds the templates. Filenames prepended
  with a `_` will have it removed when copying. Dotfiles need to be prepended
  with a `_`. Files and filenames are populated with variables using the
  `{{varName}}` syntax.
- __targetDir__: the output directory
- __vars__: An object with variables that are injected into the template files
  and file names.
- __cb(err, createdFiles)__: A callback that is called on completion, with
paths to created files if there were no errors.

## See Also
- [maxstache-stream](https://github.com/yoshuawuyts/maxstache-stream)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/copy-template-dir.svg?style=flat-square
[npm-url]: https://npmjs.org/package/copy-template-dir
[travis-image]: https://img.shields.io/travis/yoshuawuyts/copy-template-dir/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/copy-template-dir
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/copy-template-dir/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/copy-template-dir
[downloads-image]: http://img.shields.io/npm/dm/copy-template-dir.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/copy-template-dir
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
