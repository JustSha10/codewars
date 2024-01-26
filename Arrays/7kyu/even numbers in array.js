// Given an array of numbers, return a new array 
// of length number containing the last even numbers from the original 
// array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


function evenNumbers(array, length) {
    return array.filter(number => (number > 2 || number < -2) && number % 2 == 0).slice(-length);
}


console.log(evenNumbers([-27,39,23,22,57,27,91,-58,72,5,-57,-93,-29,-74,33,58,-84,92,-50,70,21,-86,-71,-79,-44,40,82,-75,-98,91,-58,-93,2,61,-63], 3))