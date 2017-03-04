#!/usr/bin/env node

const isValueOdd = require('..');

console.log(Boolean(isValueOdd(process.argv[2])));
