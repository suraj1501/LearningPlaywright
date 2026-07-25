let str="Hello Suraj Kajari";
let v="aeiouAEIOU";
let count=0;
for(let i=1;i<str.length-1;i++){
if(v.includes(str[i]))
{
    console.log(str[i]);
    count += 1;
}

}
console.log("Total number of vowels in the string: " + count);
console.log("Total number of letters in the string: " + (str.length-count));