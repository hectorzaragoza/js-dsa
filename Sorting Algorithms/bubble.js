// Not that efficient or commonly used.
// A sorting algorithm where the largest values bubble to the top.
// You begin at the start and swap elements if the first is larger than the second and you repeat 
// that over and over until you reach the end, then you start over.

function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

// pseudocode
// start looping from a variable called i tthe end of the array towards the beginning
// start an inner loop with a variable called j from the beginning until i-1
// if arr[j] is greater than arr[j+1], swap those two values
// return the sorted array

// Implementation
// Less optimize way with two nested loops
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                //Swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log(bubbleSort([37,45,29,8]))


// This version incorporates a type of sliding window where we won't compare to the end
// each time given that the last iteration already has the biggest value in the end. So the array,
// that is being sorted on each iteration is getting smaller.
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                //Swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

// Bubble Sort Optimization (Optimized with noSwaps check.)
// If our data is almost sorted or already sorted...Our bubble sort as it stands, it would still run through
// the same even if the array is already sorted because it needs to do its due dilligence and check.
// So, we would need to interrupt the sort by inserting a check that breaks the process if there were no swaps in the
// previous runthrough. (meaning that the data is sorted, so there is no need to continue).

function bubbleSort(arr) {
    let noSwaps
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                //Swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                // If there is a swap, sorting needs to get done, so DONT break out of bubble sort
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

// What is the time complexity of bubble sort?
// In general, it is O(n^2) because of the nested loops.
// But, if it is sorted or almost sorted, at best it could be O(n), linear time.