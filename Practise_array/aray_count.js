let s=[90,65,101,78,99,99,34,67,89,100,90];
//console.log(s.length);
const count={};
for(const val of s)
{
    count[val] = (count[val] || 0) + 1;
}
for(const [key, value] of Object.entries(count))
{
    console.log(key + " appears " + value + " times");
}

//const a  = [1, 2, 3, 4, 5, 2, 3, 6];
let dupli = [];

for (let i in s) {
    for (let j in s) {
        if (i !== j && s[i] === s[j] && !dupli.includes(s[i])) {
            dupli.push(s[i]);
        }
    }
}

console.log(dupli);