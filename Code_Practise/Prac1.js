const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
for (let i = 1; i <= 10; i++)
{
    console.log(data + " x " +i +" = " + data * i);
}

console.log("Table of "+data+" is printed successfully.");