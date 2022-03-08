// We don't make direct comparisons.
// Special sorting algorithm that works on lists of numbers

// It exploits the fact that information about the size of a number is encoded in the number of digits
// More digits mean a bigger number
// The number of times you have to iterate depends on the number of digits of the largest number.

// In order to implement radix sort, it's helpful to build a few helper functions first:
// getDigit(num,place) - returns the digit in num at the given place value
// our 0 index is the right most integer

// Getting the index correctly
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10
}

//