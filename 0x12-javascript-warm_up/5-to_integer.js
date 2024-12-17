#!/usr/bin/node
const { argv } = require('node:process');

// Access the first argument
const firstArg = argv[2];

// Convert to integer
const num = parseInt(firstArg);

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log('Not a number');
}
