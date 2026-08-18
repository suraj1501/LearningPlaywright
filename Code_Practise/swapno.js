//let [a, b] = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let a = 5;
let b = 10;

// Swap a and b WITHOUT a third variable, then print: a b
a = b + a;
b = a - b;
a = a - b;
console.log(a);
console.log(b);