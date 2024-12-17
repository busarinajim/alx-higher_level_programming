#!/usr/bin/node
const { argv } = require('node:process');

// Converts the first argument to an integer
const firstArg = parseInt(argv[2]);

if (isNaN(firstArg)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < firstArg; i++) {
    console.log('C is fun');
  }
}
