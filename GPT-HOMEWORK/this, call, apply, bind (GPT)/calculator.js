// Task: Create a calculator object that has two properties: `num1` and `num2`. 
// Implement a method called `add` that calculates the sum of `num1` and `num2` and returns the result. 
// However, instead of directly accessing the properties `num1` and `num2` within the `add` method, 
// use the `call` method to access them.


const calculator = {
  num1: 0,
  num2: 0,
  add: function() {
    return this.num1 + this.num2;
  }
};

const num1 = 5;
const num2 = 10;

const result = calculator.add.call({ num1, num2 });
console.log(result); // Output: 15


// In this task, we create a `calculator` object with two properties: 
// `num1` and `num2`. The `add` method uses `this` to access the `num1` and `num2` properties 
// of the object. We then use the `call` method to invoke the `add` method on a different object 
// that has its own `num1` and `num2` properties. This allows us to perform the addition operation 
// using the values from the different object.
