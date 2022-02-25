// Quick sort
// Easiest to solve through recursion

// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

// Pivot Helper Function
// 1st Part.
// In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
// Given an array, this helper function should designate an element as the pivot
// it should then rearrange elements in the array so that all values less than the pivot are moved to the left
// of the pivot, and all values greater than the pivot are moved to the right of the pivot
// the order of elements on either side of the pivot doesn't matter.
// The helper should do this in place, that is, it should not create a new array
// When complete, the helper should return the index of the pivot.


// Picking a pivot,
// The runtime of a quick sort depends in part on how we selects the pivot
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set yuou're sorting
// For simplicity, we'll always choose the first element(We'll talk about the consequences of this later)

// Pivot helper example

// Pseudo code
// It will help to accept three arguments, an array, a start and end indexes (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
    // if the pivot is greater than the current element, incremenet the pivot index variable and then swap the current element with the element at the pivot index
// swap the starting element(i.e. the pivot) with the pivot index)
// return the pivot index

// approach with helper function
function pivot(arr, start = 0, end = arr.length - 1) {
    // Swap function
    function swap(array, i ,j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    //pivot is the value of the first element, start is the index of the first element
    let pivot = arr[start]
    let swapIndex = start

    for(let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

console.log(pivot([4,8,2,1,5,7,6,3]))

//Quicksort pseudocode
// Call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursively 
// call the pivot helper on the subarray to the left of that index and the subarray to the right of that index.
// (We are not making new arrays...)


function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}

let arr = [3,2,5,6,1,4,8]
console.log(quickSort(arr))

// Time Complexity Best and Average is O(nlogn), worst is O(n^2)
// Space complexity O(log n)