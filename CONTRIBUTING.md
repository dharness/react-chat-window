## Prerequisites

[Node.js](http://nodejs.org/) >= v4 must be installed.

## Installation

- Running `npm install` in the components's root directory will install everything you need for development.

## Demo Development Server

- `npm start` will run a development server with the component's demo app at [http://localhost:8080](http://localhost:8080) with hot module reloading.

## Building

- `npm run build` will build the component for publishing to npm.

- `npm run build-demo` will build the demo for publishing to github-pages.

- `npm run clean` will delete built resources.

## PRs

Thanks for wanting to contribute to RCW! Here are some pull request guidelines:

- Follow current code structure
- Keep all changes in one PR related to a single topic
- Include a description
- Using the demo, ensure that it still functions as expected
- Don't forget to update readme/docs
- Ensure `npm run lint` passes
  - `npm run lint -- --fix` will autofix where possible (in general, `--` passes any flags following it)
