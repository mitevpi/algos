# Algos

[![Generic badge](https://img.shields.io/badge/Docs-Web-Green.svg)](https://mitevpi.github.io/algos/) [![Generic badge](https://img.shields.io/badge/Docs-MD-Green.svg)](docs/README.md) [![Generic badge](https://img.shields.io/badge/Samples-JS-Green.svg)](samples)

[![GitHub issues](https://img.shields.io/github/issues/mitevpi/algos.svg)](https://github.com/mitevpi/algos/issues) [![GitHub last commit](https://img.shields.io/github/last-commit/mitevpi/algos.svg)](https://github.com/mitevpi/algos/commits/master)

[![npm](https://img.shields.io/npm/v/@mitevpi/algos.svg)](https://www.npmjs.com/package/@mitevpi/algos) [![npm bundle size](https://img.shields.io/bundlephobia/min/@mitevpi/algos.svg)](https://bundlephobia.com/result?p=@mitevpi/algos) [![npm](https://img.shields.io/npm/dw/@mitevpi/algos.svg)](https://www.npmjs.com/package/@mitevpi/algos) [![npm2](https://img.shields.io/npm/dt/@mitevpi/algos.svg)](https://www.npmjs.com/package/@mitevpi/algos)

[![GitHub issues](https://img.shields.io/github/issues/mitevpi/algos.svg)](https://github.com/mitevpi/algos/issues) ![David](https://img.shields.io/david/dev/mitevpi/algos.svg) [![GitHub last commit](https://img.shields.io/github/last-commit/mitevpi/algos.svg)](https://github.com/mitevpi/algos/commits/master)

Low-level JavaScript algorithms as shorthand for everyday use in frontend & backend code.

## Usage

To use this module, install locally using the command below, or clone this repository and import the .js files directly from source.

```cmd
npm i @mitevpi/algos
```

### Imports

Imports can be done through the aggregating index.js file or via individual members.

#### Full Import

```js
// es5
const algos = require('./index.js'); // from source
const algos = require('@mitevpi/algos') // from npm

// es6
import * as Algos from "../src"; // from source
import * as Algos from from "@mitevpi/algos"; // from npm
```

#### Individual Import

```js
// from source
const Arrays = require("./Arrays");
const Numbers = require("./Numbers");

// from npm
const { Arrays } = require("@mitevpi/algos");
const { Numbers } = require("@mitevpi/algos");
import { Arrays, Numbers } from "@mitevpi/algos"; // es6
```

#### CDN

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- import minified script from CDN or copy it locally -->
    <script src="../dist/algos.umd.min.js"></script> 
  </head>

  <body>
    <script>
      var arr = [1, 2, 3, 4, 5]; // create array
      var result = algos.Arrays.sum(arr); // sum the array
      console.log("LIBRARY", algos); // imported lib object: classes, functions
      console.log("RESULT", result); // 15
    </script>
  </body>
</html>;
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
