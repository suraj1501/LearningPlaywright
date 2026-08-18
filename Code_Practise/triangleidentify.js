const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
const values = data.trim().split(/\s+/);

// 2. Destructure the array into three separate variables
const val1 = values[0];
const val2 = values[1];
const val3 = values[2];

if (val1 === val2 && val1 === val3) {
    console.log("Equilateral");
} else {
    console.log("Isosceles");
}