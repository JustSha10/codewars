// Create an object called `calculator` with the following properties and methods:

// - `total`: A number representing the current total value.
// - `add`: A method that takes in a variable number of arguments and adds them to the total.
// - `subtract`: A method that takes in a variable number of arguments and subtracts them from the total.
// - `multiply`: A method that takes in a variable number of arguments and multiplies them with the total.
// - `divide`: A method that takes in a variable number of arguments and divides the total by them.

// Here's an example of how the `calculator` object should work:

calculator.add(5, 10); // Adds 5 and 10 to the total (initially 0)
console.log(calculator.total); // Output: 15

calculator.subtract(3, 2); // Subtracts 3 and 2 from the total (currently 15)
console.log(calculator.total); // Output: 10

calculator.multiply(2, 3); // Multiplies the total by 2 and 3 (currently 10)
console.log(calculator.total); // Output: 60

calculator.divide(4, 2); // Divides the total by 4 and 2 (currently 60)
console.log(calculator.total); // Output: 15


// Your task is to implement the `calculator` object using `this`, `call`, `apply`, 
// or `bind` to correctly update the `total` property based on the provided methods.

// Good luck!

const calculator = {
    total: 0,
  
    add: function(num) {
      this.total += num;
    },
  
    subtract: function(num) {
      this.total -= num;
    },
  
    multiply: function(num) {
      this.total *= num;
    },
  
    divide: function(num) {
      this.total /= num;
    },
  
    clear: function() {
      this.total = 0;
    }
  };