let arr = [1, 2, 3, 2, 4, 1];

// Empty object to store the count
let count = {};

// Count each number
for (let i = 0; i < arr.length; i++) {

    let number = arr[i];

    if (count[number]) {
        count[number] = count[number] + 1;
    } else {
        count[number] = 1;
    }

}

// Print count of every number
console.log("Count of each number:");

for (let key in count) {
    console.log(key + " apears " + count[key] + " times");
}

// Print only repeated numbers
console.log("Repeated Numbers:");

for (let key in count) {
    if (count[key] > 1) {
        console.log(key + " = " + count[key] + " times");
    }
}