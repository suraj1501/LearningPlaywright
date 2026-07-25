const data = require('fs').readFileSync(0, 'utf8');
const num = parseInt(data.trim(), 10);
// Write your solution here
let a = "YES";
let b = "NO"

if (num <= 1) return console.log(b);
if (num == 2) return console.log(a);
if (num % 2 == 0) return console.log(b);

for (let i = 3; i<= num; i += 2)
{
    if (num % i  == 0)
    {
        return console.log(b);
    }
    return console.log(a);
}
