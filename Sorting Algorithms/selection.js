// Similar to bubble sort, but instead of first placing large values into sorted position, 
// it places small values into sorted position

// Find the minimum and do the swap at the end by putting the minium at the start.

// Pseudocode
// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// You save the index of the number to do the swap
// If the smaller number is found, designate that smaller number ot be the new min and continue until the end of the array
// if the min is not the value(index) you initially begain with, swap the two values
// repeat this with the next element until the array is sorted.

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++) {
            console.log(i,j)
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
            console.log(arr)
            console.log("Swapping to: ")
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
            console.log(arr)
        }
    }
    return arr;
}

selectionSort([34,22,10,19,17])


// Big(O) for selection sort is O(n^2) because of the nested for loops.