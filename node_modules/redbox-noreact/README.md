# redbox-noreact

[![npm package][npm-badge]][npm]

A fork of [redbox-react](https://github.com/KeywordBrain/redbox-react) which doesn't import React, as this can be problematic for global tools which manage React hot loading such as [nwb](https://github.com/insin/nwb) and [react-heatpack](https://github.com/insin/react-heatpack).

Only for React >=0.14, as it uses stateless functional components and inline object literals instead of calls to `React.createElement()`.

## MIT Licensed

[npm-badge]: https://img.shields.io/npm/v/redbox-noreact.svg
[npm]: https://www.npmjs.org/package/redbox-noreact
