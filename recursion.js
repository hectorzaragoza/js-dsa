// What is recursion (a stack data structure)
/*
A process that calls itself (a function in our case)

In almost all program languages, there is a built in data structure that manages what 
happens when functions are invoked...
The CALL STACK

When a function is invoked, it is placed (pushed) on the top of the call stack
When a JS sees the return keyword or when the function ends, the compiler will remove (pop)
(You can use Chrome Dev Tools, sources, Call Stack)

When we write recursive functions, we keep pushing new functions onto the call stack!
*/

// How recursive functions work (Two essential parts: Different Input for recursive call and Base Case)
// Invoke the SAME function with a different input until you reach your base case!
// Base case is the condition that makes recursion stop.

// Our first recursive function
function countDown(num) {
    if(num <= 0) {
        console.log("all done!")
        return;
    }
    console.log(num)
    num--
    countDown(num)
}
countDown(10)

// Base case is when num is <= 0.
// Different input for each recursive call happens because we decrement num on each iteration.

// Our second recursive function
function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1)
}

// The base case is num === 1, base case almost always is a conditional that returns something. (Bottom of the well)
// Different input (always a smaller problem than principal problem?) num - 1.

// sumRange(3)
//     return 3 + sumRange(2)
//         return 2 + sumRange (1)
//             return 1;
//         return 2 + 1
//     return 3 + 3
// return 6.

// Writing Recursion with Factorials
// 4! is 4 * 3 * 2 * 1
// Iterative way to do factorials
function factorial(num) {
    let total = 1;
    for (let i = num; i > 0 ; i--) {
        total *= i
    }
    return total;
}

console.log(factorial(5))

// Recursive way with factorials
function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num -1)
}
//at base case, return values will bubble up
console.log(factorial(10))

// Where things go wrong:
//      There is no base case...infinite loop. Stack overflow.
//      Forgetting to return or returning the wrong thing.

// HELPER METHOD RECURSION
// Two functions
function outer(input) {
    var outerScopedVariable = []
    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)
    return outerScopedVariable;
}

// One function is defined that we call...that function has a nested function that is called within the function we call.

// Example of Helper Method for Recursion
function collectOddValues(arr) {
    let result = []

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }

    helper(arr)
    return result
}

// We use the helper method because we need the result array, that is manipulated, to change with each recursive call instead of starting clean each time.

// PURE RECURSION
function collectOddValues(arr) {
    let newArr = []
    if(arr.length === 0) {
        return newArr
    } 
    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr
}

// For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
// Strings are immutable so you will need to use methods like slice, substr, or substring to make copies of Strings
// To make copies of objects use Object.assign, or the spread operator
