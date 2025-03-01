<!--+ Warning: Content inside HTML comment blocks was generated by mdat and may be overwritten. +-->

<!-- title -->

# es-check-min

<!-- /title -->

<!-- badges -->

[![NPM Package es-check-min](https://img.shields.io/npm/v/es-check-min.svg)](https://npmjs.com/package/es-check-min)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- /badges -->

<!-- short-description -->

**A CLI tool and library to find the minimum compatible ECMAScript version of a JavaScript file.**

<!-- /short-description -->

## Overview

A simple tool built on [`es-check`](https://github.com/yowainwright/es-check) to find the lowest supported [ECMAScript version](https://en.wikipedia.org/wiki/ECMAScript_version_history) of a JavaScript file.

The `es-check-min` tool does not require any arguments, and simply runs a loop to determine the file's lowest compatible ECMAScript version. This is in slight contrast to `es-check` which checks a file against a _specified_ ECMAScript version.

Detection of the following ECMAScript versions is supported:

- ES5
- ES6 / ES2015
- ES7 / ES2016
- ES8 / ES2017
- ES9 / ES2018
- ES10 / ES2019
- ES11 / ES2020
- ES12 / ES2021
- ES13 / ES2022

_Note: The underlying `es-check` implementation technically supports ES3 and ES14 / ES2023, but certain tests aren't passing against these targets so they are not currently returned._

## Getting started

### Dependencies

The `es-check-min` CLI tool requires Node 20+. The exported APIs are ESM and share the Node 20+ requirement.

### Installation

Invoke directly:

```sh
npx es-check-min
```

Or, install locally to access the CLI commands in a single project or to import the provided APIs:

```sh
npm install es-check-min
```

Or, install globally for access across your system:

```sh
npm install --global es-check-min
```

## Usage

### CLI

### Example

```sh
es-check-min ./mystery-file.js
```

prints...

```sh
es6/es2015
```

### Command

```txt
es-check-min <file>
```

| Positional Argument | Description                           | Type     |
| ------------------- | ------------------------------------- | -------- |
| `file`              | Path to the JavaScript file to check. | `string` |

| Option      | Alias | Description         | Type      |
| ----------- | ----- | ------------------- | --------- |
| `--help`    | `-h`  | Show help           | `boolean` |
| `--version` | `-v`  | Show version number | `boolean` |

### Library

A single function is exported:

```ts
function esCheckMin(path: string): Promise<EsVersion | undefined>
```

## Background

Requests for something like this have come up once or twice:

- [Make babel tell me the minimum version of target that supports my code](https://github.com/babel/babel/issues/8008)
- [Feature Request: Wrapper command for "minimum ES version" for a file](https://github.com/dollarshaveclub/es-check/issues/101)

## Maintainers

[@kitschpatrol](https://github.com/kitschpatrol)

## Acknowledgments

`es-check-min` is just a trivial wrapper over `es-check`. All credit goes to [Jeff Wainwright](https://github.com/yowainwright) and [contributors](https://github.com/yowainwright/es-check?tab=readme-ov-file#contributors) for creating and maintaining [`es-check`](https://github.com/yowainwright/es-check).

<!-- contributing -->

## Contributing

[Issues](https://github.com/kitschpatrol/es-check-min/issues) and pull requests are welcome.

<!-- /contributing -->

<!-- license -->

## License

[MIT](license.txt) © Eric Mika

<!-- /license -->
