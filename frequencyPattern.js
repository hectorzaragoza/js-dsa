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

// Refactored Code
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

// Two separate loops are vastly better than two nested loops. The former is O of N, the nested loops is O of n squared!.

// Anagrams
/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase,
or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

function validAnagram(first, second) {
    if(first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // Can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log("Is this an anagram?", validAnagram("hello","ollhde"))