// Find the sum of the odd numbers within an array, after cubing the initial integers. 
// The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    for (let number of arr) {
        if (typeof(number) !== "number") return;
    }

    return arr
        .map(number => Math.pow(number, 3))
        .filter(number => (number & 1))
        .reduce((sum, number) => sum + number, 0);
        
}

console.log(!isNaN(Math.pow(`a`, 3)))
console.log(cubeOdd([1, `a`, 3, 4]));