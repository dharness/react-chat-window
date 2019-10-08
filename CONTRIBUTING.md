## Prerequisites

[Node.js](http://nodejs.org/) >= v4 must be installed.

## Installation

`npm install` from the components's root directory will install everything you need for development.

## Demo Development Server

`npm start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Building

`npm run build` will build the component for publishing to npm and also bundle the demo app.

`npm run clean` will delete built resources.

## PRs

Thanks for wanting to contribute to RCW! Here are some pull request guidelines:

- Follow current code structure
- Keep all changes in one PR related to a single topic
- Include a description
- Using the demo, ensure that it still functions as expected
- Don't forget to update readme/docs
- Ensure `npm run lint` passes
  - `npm run lint -- --fix` will autofix where possible (in general, `--` passes any flags following it)

## Releasing

On a new branch (it can't be done on `master` as it is protected):

`npm version [major | minor | patch]` to bump version (use [semantic versioning](https://semver.org/))

`git push —-tags` to keep tags up to date on github

`npm publish` to release to the world! (use with `--dry-run` to test it out)

Then, push your branch as normal and open a PR to merge it into master.

`npm run gh:publish` to update the demo hosted on github pages.
