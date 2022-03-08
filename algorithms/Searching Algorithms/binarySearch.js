// Can be much faster than linear search
// Rather than eliminating one element at at ime, you can eliminiate half of the remaining elements at a time
// But, it only works on SORTED arrays (with alphanumeric characters)

// The idea behind binary search is Divide and Conquer, pick a point in the middle and check against desired value, 
// array must be sorted, based on outcome, throw out half the array you dont need and iterate until you arrive at the value
// you are looking for.

// Binary Search Pseudocode Example
// function accepts a sorted array and value
// create a left pointer at the start of the array, and a right pointer at the end of the array
// while the left pointer comes before the right pointer: 
    // Create a pointer in the middle
    // If you find the value you want, return the index
    // if the value is too small, move the left pointer up
    // if the value is too large, move the right pointer down
    // if you never find the value, return -1

function binarySearch(arr, val){
    let start = arr[0];
    let end = arr.length - 1;
    // The middle is what you'll be able to use to set the new index of the start or end
    let middle = Math.floor(start + end / 2)
    while (arr[middle] !== val && start <= end) {
        console.log(start, middle, end)
        if(val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor(start + end / 2)
    }
    if(arr[middle] === val) {
        return middle;
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 100))

// Remember to think about edge cases, what if the value is NOT in the array, run through checks on thought process...

// Big O of binary search
// Worst and Average case is O(log n)
// Best case: O(1) because you might find the right value on the first time.


// Naive String Search, looking for a string within a larger string (Still binary search)
// Suppose you want to count the number of times a smaller string appears in a longer string
// A straightforward approach involves checking checking pairs of characters individually

// Loop over the longer string
// Loop over the shorter string
// If the characters dont math, break out of the inner loop
// if the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// return the count.

function naiveSearch(long, short) {
    let count = 0;
    for(let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if(short[j] !== long[i+j]) {
                break;
            }
            if(j === short.length -1) {
                count ++;
            }
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")