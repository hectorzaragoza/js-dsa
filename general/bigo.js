// Suppose we want to write a function that calculates the sum of all numbers from 1 up to and including some number n.
const addUp = (n) => {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUp(6))

function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(6))

// Which one is better? Faster? Less memory Intensive? More readable?
// Performance.now() is a built in method that serves as a timer.
// Timing will be different across different machines...Even on the same machine!
// So, instead of measuring performance with time, becuase it can be variable,
// You could measure the number of simple operations that a computer has to perform
// The second solution has 3 operations to perform, *, +, and /.
// The first solution, the number of operations in the first solution,
// are dependent on the size of n because it is in a loop!
// We care about general trends...As n grows, what happens roughly to the number
// of operations that your solution has to perform to solve the issue.

function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    console.log("At the top!\nGoing Down...");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back Down, Bye!")
}

countUpAndDown(20)
// This example, the number of operations increases as n increases
// So it is O(n)

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// This gives us a nested for loop, so an O(n) operation inside of an 
// O(n) operation. Which means it is O(n^2)

// SPACE COMPLEXITY
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
} 
// In terms of space, we are only creating two variables..
// So, no matter the size of the input, space complexity is O(1)
// 1 for total and 1 for i assignments.

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

// The size of the variable increases directly in proportion to N. 
// Array is growing as N grows, proportionally. So, its O(n)

