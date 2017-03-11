# is-value-odd

[![Build Status](https://travis-ci.org/alexpoltava/isvalueodd.svg?branch=master)](https://travis-ci.org/alexpoltava/isvalueodd)

Performs checking if passed value is odd or not.
Returns `true` if value is odd, otherwise `false`.
Floors float numbers, throws error if value is not a number.
Arrays are considered to be not valid numbers.

## Installation

Using npm:
```shell
$ npm i -g is-value-odd
$ npm i --save is-value-odd
```

## Usage

Using module:
```js
const isValueOdd = require('is-value-odd');

const result = isValueOdd(value);
```

Using shell:
```shell
$ isvalueodd value
```
