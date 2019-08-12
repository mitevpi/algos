# JS Util

[![Generic badge](https://img.shields.io/badge/Docs-Web-Green.svg)](https://mitevpi.github.io/js-util/) [![Generic badge](https://img.shields.io/badge/Docs-MD-Green.svg)](docs/README.md) [![Generic badge](https://img.shields.io/badge/Samples-JS-Green.svg)](samples)

[![GitHub issues](https://img.shields.io/github/issues/mitevpi/js-util.svg)](https://github.com/mitevpi/js-util/issues) [![GitHub last commit](https://img.shields.io/github/last-commit/mitevpi/js-util.svg)](https://github.com/mitevpi/js-util/commits/master)

Low-level JavaScript algorithms as shorthand for everyday use in frontend & backend code.

## Usage

To use this module, install locally using the command below, or clone this repository and import the .js files directly from source.

```cmd
npm i @mitevpi/jsutil
```

### Imports

Imports can be done through the aggregating index.js file or via individual members.

#### Full Import

```js
const jsutil = require('./index.js'); // from source
const jsutil = require('@mitevpi/jsutil') // from npm

// es6
import * as JsUtil from "../src"; // from source
import * as JsUtil from from "@mitevpi/jsutil"; // from npm
```

#### Individual Import

```js
// from source
const Arrays = require("./Color");
const Numbers = require("./Place");

const { Arrays } = require("@mitevpi/jsutil");
const { Numbers } = require("@mitevpi/jsutil");
import { Arrays, Numbers } from "@mitevpi/jsutil"; // es6
```

## Development

### Building

The module can be built by running `npm run build` in the root directory of this repository. Documentation is built using the [Documentation module](https://www.npmjs.com/package/documentation) from npm, and by running `npm run docs` in the root directory of this repository. This will create [markdown](docs/README.md) and [HTML documentaion](docs/index.html).

### Testing

Testing is handled using [jest](https://jestjs.io/) and code coverage is evaluated using [nyc](https://www.npmjs.com/package/nyc). Tests can be initiated by running `npm test` in the root directory of this repository (be sure to first set your required env variables such as GMAPS_KEY).

## Commands

The following commands are available during development.

```sh
npm test # run tests with Jest
npm run coverage # run tests with coverage and open it on browser
npm run lint # lint code
npm run docs # generate docs
npm run build # transpile code
```
