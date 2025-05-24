#!/usr/bin/node

const x = parseInt(process.argv[2]);

console.log(isNaN(x) ? "Missing number of occurrences" : Array(x).fill("C is fun").join("\n"));
