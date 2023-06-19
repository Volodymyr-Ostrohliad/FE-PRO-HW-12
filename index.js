"use strict";

const sums = (function () {
  let total = null;

  function sum(x) {
    if (typeof x !== 'number' || !Number.isInteger(x) || x < 0) {
      console.error('Invalid n');
    } else {
      if (total === null) {
        total = x;
      } else {
        total += x;
      }
    }
    return total;
  }

  return sum;
})();

console.log(sums(3));   // 3
console.log(sums(5));   // 8
console.log(sums(20));  // 28
