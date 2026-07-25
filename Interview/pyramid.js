// const data = require('fs').readFileSync(0, 'utf8');
// const n = parseInt(data.trim(), 10);
// // Write your solution here
// for (let i = n; i >= 1; i--)
// {
//     let output = "*".repeat(i);
//     console.log(output);
    
// }


console.log("-----------------")

// for (let i = 1; i <= n; i++)
// {
//     let output = "*".repeat(i);

//     console.log(output);
// }

const n = 5; // Total rows
for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(n - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}