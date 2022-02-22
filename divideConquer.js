// Divide and Conquer
// This pattern involves dividing a data set into smaller chunks and then repeating
// a process with a subset of data.

// This pattern can tremendously decrease time complexity

// An example,
// Given a sorted array of integers, write a function called search, that accepts a value and returns
// the index where the value passed ot the function is located. if the value is not found, return -1

// Naive solution (linear search)
function search(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}
// Time complexity O of N

// Refactor with Binary Search ( a Divide and Conquer algorithm that has Log(N))
function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.florr((min + max) / 2)
        let currentElement = array[middle]

        if (array[middle] < val) {
            min = middle + 1;
        } 
        else if (array[middle] > val) {
            max = middle - 1
        }
        else {
            return middle;
        }
    }
    return -1;
}