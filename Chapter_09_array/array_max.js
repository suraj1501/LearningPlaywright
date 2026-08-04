let s=[90,65,101,99,78,99,34,67,89,100,99,78];

let max=s[0];

for(let i=1;i<s.length;i++)
{
    if(s[i]>max)
    {
        max=s[i];
    }
}
console.log("Maximum number in the array is: " + max);
let count=0;
for(let i=0;i<s.length;i++)
{
    for(let j=i+1;j<s.length;j++)
    {
        if(s[i]===s[j])
        {
            count++;
        }
    }
console.log(s[i] + " is repeated " + count + " times");
}
