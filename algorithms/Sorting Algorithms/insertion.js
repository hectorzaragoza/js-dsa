// Builds up the sort by gradually creating a larger left portion which is always sorted
// You start from the left as your sorted array with an element of 1 and then look at element two and sort depeneding on
// 1 and so on and so forth.

// Pseudocode
// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary
// Continue to the next element and if it is in the correct order, iterate through the sorted portion (i.e. the left side)
// to place the element in the correct place
// Repeat until the array is sorted.

// Implementation
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]))

// Insertion Sort Big O of O(n^2) because of nested for loops.  