#!/usr/bin/env node

var tlds = require('./');

for (var i = 0, len = tlds.length; i < len; i++) {
  console.log(tlds[i]);
}
