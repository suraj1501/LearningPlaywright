let age = 20;
let is_pramod_will_go_to_goa = age > 18 ? "Yes" : "No";
console.log("This person can go goa ? ", is_pramod_will_go_to_goa);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);

let environment = "prod";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");

let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);
// Template Literal
console.log(`What is the SLA time ? - ${sla}`);

console.log("------------------------------------");
let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);

console.log("-------------Nested Ternary-----------------------");
let age = 26;
//   age > 18 -> he will goa, else not else
// drink > 25  yes, else no 
let is_pramod_enjoy = age > 18 ? (age > 26 ? "Drink" : "No") : false;
console.log(`Can pramod Drink? : ${is_pramod_enjoy}`);


