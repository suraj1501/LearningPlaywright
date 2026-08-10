// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes()
url.includes("staging");  
url.includes("production");

// startsWith / endsWith
console.log(url.startsWith("https"));
console.log(url.startsWith("http://")); 
console.log(url.endsWith("truee")); 

// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));

// ASCII -> A -> 65
//jyyhggvgbygtgvggfgaq    aageerre4errr5zxxzxo\'saasg'
let p1=["Hello","test"];