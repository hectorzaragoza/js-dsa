/* 
    Create pointers or values that correspond to an index or position and move towards the beginning,
    end, or middle based on a certain condition

    very efficient for solving problems with minimal space complexity as well
*/

// Example
/* 
    Write a function called sumZero which accepts a sorted array of integers. The function should find
    the first pair where the sum is 0. Return an array that inclueds both values that sum to zero or undefined if a pair
    does not exist.
*/

// Naive solution
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}
// Time complexity of O of N squared
// Space complexity of O of 1. (constant)
// We start at the beginning of the array, go into the nested loop that will check
// for a value in the remaining values whose sum with the first value is 0,
// so that is a lot of operations especially with large arrays.
// I can increase the efficiency by starting a pointer at the beginning and one at the end
// because we know the array is sorted from smallest to largest, we can start at the ends to 
// try and cancel out the values and use conditional statements to determine which point to 
// move to the next value based on the outcome of the sum. If the sum is positive, we need
// to move the right pointer to the left. If the outcome is negative, we need to move the left
// pointer to the right...until we get two values that cancel out.

// Refactored code
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
// This has a time complexity of O of N
// Space complexity of O of 1. (constant)

// Second example - countUniqueValues
/*
    Implement a function called countUniqueValues, which accepts a sorted array,
    and counts the unique values in the array. 
    There can be negative numbers in the array, but it will always be sorted.
*/

// Solution using two pointers starting from the left. using the same array to store the unique values
// and use the index of the first pointer to keep count of unique values based on its index at the end.

function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}