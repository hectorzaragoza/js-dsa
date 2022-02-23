
// Searching algos
// Linear search on arrays; binary search on sorted arrays; naive string searching algorithm; KMP string searching algorithm

// Linear Search
// Searching an array.
// The simplest and most obvious way, is to look at each element in the array and check to see if it is what we want.
// Are things sorted or not?
// By checking each element, they are linear search. Methods like, .indexOf, .includes, .find, .findIndex are all
// Using a linear search algorithm

// Pseudocode
// function takes an array and a value, loop through the array and check if the current array element is equalto the value
// if true, return the index at which the element is found, if not, return -1

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i
        }
    }
    return -1
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

console.log(linearSearch(arr,13))

// This does not require the array to be sorted. It has a time complexity of O(n) because the time is proportional to the size of N. Linear.
// Linear Search Big O - remember to think of best and worst case scenarios...also Average case. Which with linear search, we just care about trends
// which is O(n)

