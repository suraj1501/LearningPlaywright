const data = "Hello World";
const str = data.split('\n')[0];
// Write your solution here
const words = str.trim().split(/\s+/);
words.forEach((word, index) => {
    process.stdout.write(word[0]);
});
