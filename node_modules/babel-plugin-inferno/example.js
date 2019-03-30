'use strict';

var babel = require('babel-core');

var plugin = require('./lib');

var code = `
    <div>
        <button onClick={() => { i++; this.setStateSync({}); }}>Replace</button>
        <div>
        <B key={i} />
        </div>
    </div>
`;

console.log(
  babel.transform(code, {
    presets: [['es2015', {modules: false}]],
    plugins: [
      [plugin],
      'syntax-jsx'
    ]
  }).code
);
