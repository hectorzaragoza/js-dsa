// Frequency Counters
// Uses objects or sets to collect values / frequencies of values

// This can avoid the need for nested loops or O(N^2) operations with arrays / strings

/* 
Write a function called same, which accepts two arrays. The function should return true 
if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
*/

// A naive solution
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

console.log(same([1,2,3,2], [9,1,4,4]))
// This approach has a time complexity of O(n^2) because of the nested loops.