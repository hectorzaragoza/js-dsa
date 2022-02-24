// Write a funciton which takes in a string and returns counts of each character in the string

charCount("aaaa"); // This should return {a: 4}
// Do we account for spaces? numbers?

// Colt's breaking it down.

function charCount(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string.
}

function charCount(str) {
    // make object to return at end
    let result = {}
    // loop over string, for each character...
        for (let i = 0; i < str.length; i++) {
            let char = str[i].toLowerCase()
            if (result[char] > 0) {
                result[char]++
            } else {
                result[char] = 1;
            }
        }
        return result
        // if the char is a number/letter AND  key in object, add one to count.
        // if the char is a number/letter AND not in the object, add it and set value to 1
        // if character is something else (space, period, etc.) don't do anything. 
    // return object at end
}

console.log(charCount("Whats up dude where is my car?")) 


// Rewrite solution with a regex and account only for alphanumeric characters.
function charCount(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

console.log(charCount("Hello!!! I am doing it"))