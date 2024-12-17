#!/usr/bin/node
const { argv } = require('node:process');

// Checks 2 arguments passed and concatenate
const firstArg = argv[2];
const secondArg = argv[3];

console.log(firstArg, 'is', secondArg);
