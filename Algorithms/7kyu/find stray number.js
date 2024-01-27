// You are given an odd-length array of integers, 
// in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)


function stray(numbers) {
    numbers = numbers.sort((a, b) => a - b);
    if (numbers[0] !== numbers[1]) {
      return numbers[0];
    }
    else {
      return numbers[numbers.length - 1];
    }
  }

  function stray(numbers){
    for (let i of numbers) {
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i]))
        return numbers[i];
    }
  }