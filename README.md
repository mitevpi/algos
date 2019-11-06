# Algos

[![Generic badge](https://img.shields.io/badge/Docs-Web-Green.svg)](https://mitevpi.github.io/algos/) [![Generic badge](https://img.shields.io/badge/Docs-MD-Green.svg)](docs/README.md) [![Generic badge](https://img.shields.io/badge/Samples-JS-Green.svg)](samples)

[![npm](https://img.shields.io/npm/v/@mitevpi/algos.svg)](https://www.npmjs.com/package/@mitevpi/algos) [![npm bundle size](https://img.shields.io/bundlephobia/min/@mitevpi/algos.svg)](https://bundlephobia.com/result?p=@mitevpi/algos) [![npm](https://img.shields.io/npm/dw/@mitevpi/algos.svg)](https://www.npmjs.com/package/@mitevpi/algos) [![npm2](https://img.shields.io/npm/dt/@mitevpi/algos.svg)](https://www.npmjs.com/package/@mitevpi/algos)

[![GitHub issues](https://img.shields.io/github/issues/mitevpi/algos.svg)](https://github.com/mitevpi/algos/issues) ![David](https://img.shields.io/david/dev/mitevpi/algos.svg) [![GitHub last commit](https://img.shields.io/github/last-commit/mitevpi/algos.svg)](https://github.com/mitevpi/algos/commits/master)

Low-level JavaScript algorithms as shorthand for everyday use in frontend & backend code.

## Usage

To use this module, install locally using the command below, or clone this repository and import the .js files directly from source. Full documentation can be found on the [GitHub Pages Site](https://mitevpi.github.io/algos/) for this project.

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
</html>
```

### Sample Usage

For full examples of usage, please refer to the [test](/test) and [samples](/samples) folder which have a wide variety of use and test cases to learn from.

#### Arrays

This is a suite of functions to be used on Arrays of any kind and data type.

Considering the following input:

```js
import { Arrays } from "@mitevpi/algos";
```

##### Flatten

```js
// any level of nesting as an input
const array01 = [[1, 2, 3], [4, 5, 7]];
const array02 = [[[1, 2, 3]], [4, 5, 7]];
const array03 = [[[1, 2, 3]], [[4, 5, 7]]];
const array04 = [1, [0, [[1, [2, 3], 0]]], [[4, 5, 7]]];

const flat01 = Arrays.flatten(array01); // uniform nesting like array02/array03
// [1, 2, 3, 4, 5, 7] <- Expected Result

const flat04 = Arrays.flatten(array04); // non-uniform nesting
// [1, 0, 1, 2, 3, 0, 4, 5, 7] <- Expected Result
```

#### Summarize

```js
const array2 = ["tom", "peter", "mary", "tom", "mary", "mary", "jeremy"];
const res = Arrays.summarize(array2); // get a summary of the array contents
// {tom: 2, peter: 1, mary: 3, jeremy: 1} <- Expected Result
```

#### Object Arrays

This is a suite of functions to be used on Arrays which contain Objects.

Considering the following input:

```js
import { ArraysObjective } from "@mitevpi/algos";
const states = [
  { population: 10, size: 13, state: "OH", near: "KY" },
  { population: 20, size: 20, state: "KY", near: "TN" },
  { population: 60, size: 20, state: "IN", near: "PA" },
  { population: 40, size: 13, state: "PA", near: "NY" },
];
```

##### Auto Normalize

```js
// Auto Normalize all values between 0 to 1 on objects
// which have keys containing numerical value
const res = ArraysObjective.normalizeAuto(states);

// We expect the return object to look like this:
console.log(res);
0:Object {population: 0, size: 0, state: "OH", …}
1:Object {population: 0.2, size: 1, state: "KY", …}
2:Object {population: 1, size: 1, state: "IN", …}
3:Object {population: 0.6, size: 0, state: "PA", …}
```

##### Normalize By Key

```js
// Normalize all values between 0 to 1 on values of objects in the array
// which correspond to the input key
const res = ArraysObjective.normalizeByKey(states, "population");

// We expect the return object to look like this:
console.log(res);
0:Object {population: 0, size: 13, state: "OH", …}
1:Object {population: 0.2, size: 20, state: "KY", …}
2:Object {population: 1, size: 20, state: "IN", …}
3:Object {population: 0.6, size: 13, state: "PA", …}
```

##### Group By Key

```js
// reformat the array to be grouped by unique same values in a corresponding key
const res = ArraysObjective.groupBy(states, "size");

// We expect that the return object will be reformatted and grouped
// by the two unique values in the "size" key
console.log(res);
13:Array(2) [Object, Object]
0:Object {population: 10, size: 13, state: "OH", …}
1:Object {population: 40, size: 13, state: "PA", …}
20:Array(2) [Object, Object]
0:Object {population: 20, size: 20, state: "KY", …}
1:Object {population: 60, size: 20, state: "IN", …}
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
