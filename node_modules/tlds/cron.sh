#!/bin/sh

export EDITOR=true

if [ "x$NODE" = "x" ]; then
  NODE="node"
fi
if [ "x$NPM" = "x" ]; then
  NPM=$(which npm)
fi
if [ "x$SEMVER" = "x" ]; then
  SEMVER="$NODE $($NPM bin)/semver"
fi

# update `index.js`
$NODE update >/dev/null

# check if the working tree is "dirty"
git diff --quiet index.js
DIRTY=$?

# make sure the tests still pass
$NPM test >/dev/null 2>&1
TESTS_PASS=$?

if [ $DIRTY = "1" ] && [ $TESTS_PASS = "0" ]; then
  # commit the changes to the `index.js` file
  git add index.js
  git commit -m "index: update list from ICANN"
  VERSION=$($NODE -p "require('./package').version")
  INCREMENT=$($SEMVER --increment minor $VERSION)

  # update changelog
  git changelog
  sed -i.bak "s/n.n.n/$INCREMENT/" History.md
  rm History.md.bak

  # update package.json verison number
  $NODE -e "var fs = require('fs'); \
    var json = require('./package'); \
    json.version = '$INCREMENT'; \
    fs.writeFileSync('package.json', JSON.stringify(json, null, 2) + '\n');"

  # stage files and publish the new tag to git and npm
  git add History.md package.json
  git release $INCREMENT
  $NPM publish
fi;
