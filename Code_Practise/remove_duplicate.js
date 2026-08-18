const str = "hello world";
let text = "";
// Write your solution here
for (let i = 0; i < str.length ; i++)
{
    if (!text.includes(str.charAt(i))) {
        text = text + str.charAt(i);;
    } else {
        null;
    }
}
console.log(text);
