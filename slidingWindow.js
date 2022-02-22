// Sliding Window
/*
This pattern involves creating a window, which can either be an array or number from one position to another
depending on a certain condition, the window either increases or closes (and a new window is created)
Very useful for keeping track of a subset of data in an array/string etc.

Example:
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elementes in the array.
*/
// Naive approach
function maxSubarraySum(arr, num) {
    if(num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j=0; j < num; j++) {
            temp += arr[i+j];
        }
        if (temp > max) {
            max = temp
        }
    }
    return max;
}

// Time complexity of O of N^2


// Refactor with sliding window approach
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// Time complexity of O of N

// With the sliding window approach, you dont have to readd all the elements for the next set,
// you can just subtract the first element and then add the next element after the set...