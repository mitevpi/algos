# NodeJS ES6 Module Template

NodeJS module boilerplate. Use this as a starting point for your next `npm` package/module.

## Features

- [**Babel**](https://babeljs.io/) - Write next generation JavaScript today.
- [**Jest**](https://facebook.github.io/jest) - JavaScript testing framework used by Facebook.
- [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code.
- [**Prettier**](https://prettier.io/) - Enforces a consistent style by parsing your code and re-printing it.
- [**Flow**](https://flowtype.org/) - A static type checker for JavaScript used heavily within Facebook.
- [**Travis CI**](https://travis-ci.org) - Automate tests and linting for every push or pull request.
- [**Documentation**](http://documentation.js.org/) - A documentation system so good, you'll actually write documentation.
- [**Standard Version**](https://github.com/conventional-changelog/standard-version) - Automate versioning and CHANGELOG generation.

## Usage

Clone the repository, and use it as the starting point of your project.

```sh
cd my-module
git clone https://github.com/mitevpi/node-module-template.git
rm -rf .git
npm i
```

Just make sure to edit `package.json`, `README.md` and `LICENSE` files accordingly with your module's info.

## Commands

```sh
npm test # run tests with Jest
npm run coverage # run tests with coverage and open it on browser
npm run lint # lint code
npm run docs # generate docs
npm run build # transpile code and build module
```

### Publish

```sh
npm release
npm publish
```

It'll automatically run `test`, `lint`, `docs`, `build`, generate `CHANGELOG.md`, and push commits and tags to the remote repository.

## Removing stuff

<details><summary><strong>Flow</strong></summary>

1.  Remove `.flowconfig` file.

2.  Remove `flow` from `package.json`

    ```diff
      "scripts": {
    -   "flow": "flow check",
    -   "flowbuild": "flow-copy-source src dist",
    -   "prebuild": "npm run docs && npm run clean && npm run flowbuild",
    +   "prebuild": "npm run docs && npm run clean",
      },
      "devDependencies": {
    -   "@babel/preset-flow": "^7.0.0",
    -   "eslint-plugin-flowtype": "^2.50.0",
    -   "eslint-plugin-flowtype-errors": "^3.5.1",
    -   "flow-bin": "^0.81.0",
    -   "flow-copy-source": "^2.0.2",
      }
    ```

3.  Remove `flow` from `.babelrc`:

    ```diff
      "presets": [
    -   "@babel/preset-flow"
      ]
    ```

4.  Remove `flow` from `.eslintrc`:

    ```diff
      "extends": [
    -   "plugin:flowtype/recommended",
    -   "prettier/flowtype"
      ],
      "plugins": [
    -   "flowtype",
    -   "flowtype-errors"
      ],
      "rules": {
    -   "flowtype-errors/show-errors": "error"
      }
    ```

5.  Run `yarn`.

</details>

<details><summary><strong>Documentation</strong></summary>

1.  Remove `documentation` from `package.json`:

    ```diff
      "scripts": {
    -   "docs": "documentation readme src --section=API",
    -   "postdocs": "git add README.md",
    -   "prebuild": "npm run docs && npm run clean",
    +   "prebuild": "npm run clean",
      },
      "devDependencies": {
    -   "documentation": "^8.0.0",
      }
    ```

2.  Run `yarn`.

</details>

## Adding stuff

<details><summary><strong>TypeScript</strong></summary>
  
1. Install dependencies:

    ```sh
    yarn add -D @babel/preset-typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
    ```

2.  Update `package.json`:

    ```diff
    + "types": "dist/ts/src",
      "scripts": {
    +   "type-check": "tsc --noEmit",
    -   "lint": "eslint .",
    +   "lint": "eslint . --ext js,ts,tsx",
    -   "build": "babel src -d dist",
    +   "build": "tsc --emitDeclarationOnly && babel src -d dist -x .js,.ts,.tsx",
      },
      "lint-staged": {
    -   "*.js": [
    +   "*.{js,ts,tsx}": [
    -     "eslint --fix",
    +     "eslint --fix --ext js,ts,tsx",
          "git add"
        ]
      }
    ```

3.  Create `tsconfig.json`

    ```json
    {
      "compilerOptions": {
        "outDir": "dist/ts",
        "target": "esnext",
        "module": "esnext",
        "moduleResolution": "node",
        "jsx": "react",
        "strict": true,
        "declaration": true,
        "noFallthroughCasesInSwitch": true,
        "noImplicitReturns": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "stripInternal": true
      }
    }
    ```

4.  Update `.babelrc`:

    ```diff
      "presets": [
    +   "@babel/preset-typescript"
      ]
    ```

5.  Update `.eslintrc` with these settings:

    ```json
      "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          }
        }
      },
      "overrides": [
        {
          "files": ["**/*.ts", "**/*.tsx"],
          "parser": "@typescript-eslint/parser",
          "parserOptions": {
            "project": "./tsconfig.json"
          },
          "plugins": [
            "@typescript-eslint"
          ],
          "rules": {
            "no-undef": "off",
            "no-unused-vars": "off",
            "no-restricted-globals": "off"
          }
        }
      ]
    ```

</details>
