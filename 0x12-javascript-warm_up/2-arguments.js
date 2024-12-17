#!/usr/bin/node
const { argv } = require('node:process');

// Calculate the number of arguments passed (excluding the script and Node paths) and prints a message
const argCount = argv.length - 2;

if (argCount === 0) {
  console.log('No argument');
} else if (argCount === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
