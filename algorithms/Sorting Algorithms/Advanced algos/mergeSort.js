// Merge Sort - a combination of splitting up, sorting, and merging
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
// Uses a divide and conquer approach.
// We split up until we get arrays of one element, once there, merge neighbors while sorting it to too, then continue
// bubbling up, comparing and merging.

// Merging arrays
// Pseudocode
// implement a funciton responsible for merging two sorted arrays
// Given two arrays are sorted, this helper funciton should create a new array which is also sorted, and consists of all
// of the elements in the two input arrays
// This function should run in O(n+m) time and same in space and should not modify the parameters passed to it.

// Create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't looked at..
    // If the value in the first array is smaller than the value in the second array, push the value in the first
    // array into our results and move onto the next value in the first array
    // If the value in the first array is larger than the value in the second array, push teh value in the second array intour
    // results and move on to the next value in the second array
    // Once we exhaust one array, push in all remianing values from the other array.


// This example merge function only works with sorted arrays. Below is a traditional merge sort algorithm
function merge(arr1, arr2) {
    let results = []
    // Set up our pointers
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}
console.log(merge([1,10,50], [2,14,99,100]))

// Sorting part of merge sort
// Most merge sort solutions use recursion
// Goal, break up the array into halves until you have arrays that are empty or have one element
// use .slice at middle
// then you continue doing so for each smaller slice recursively
// until array length is 1,
// then use the merge function to return a merged (and sorted) array.

function merge(arr1, arr2) {
    let results = []
    // Set up our pointers
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    // mergeSort() on each split half
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([1,99,3,84,5,46,47,46,2,7]))

// Big O of merge sort
// Time complexity worst O(n log n) (same average and best)
// Space complexity O(n)