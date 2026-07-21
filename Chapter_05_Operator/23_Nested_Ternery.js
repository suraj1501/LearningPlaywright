let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";



console.log(`Status ${statusCode}: ${category}`);
console.log("Status :" + statusCode, category);

Console.log("-------------Nested Ternary-----------------------");

let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);

Console.log("-------------Nested Ternary-----------------------");


console.log(typeof "hello");
console.log(typeof 123); // int -> number
console.log(typeof 31.4); // float -> number
// typeof true
//typeof undefined
// typeof null -> object
console.log(typeof []);  // -> object

console.log("--------------Type of--------------");  // -> object



