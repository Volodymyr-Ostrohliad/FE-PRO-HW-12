"use strict";

function sum(x) {
  if (typeof x !== 'number' || !Number.isInteger(x) || x < 0) {
    console.error('Invalid n');
  } else {
    if (total === null) {
      return total = x;
    }
    else {
      total += x;
      return total
    }
  }

}

let total = null
console.log(sum(3));   // 3
console.log(sum(5));   // 8
console.log(sum(20));  // 28
