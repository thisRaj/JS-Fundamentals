#!/usr/bin/node

let x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  do {
    console.log("C is fun");
    i++;
  } while (i < x);
}
