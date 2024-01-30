function outerFunction() {
    let outerVariable = 'Я внешняя переменная';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  let myClosure1 = outerFunction();
  myClosure1(); 
  
//==============================================================================================================

function outerFunction() {
    let outerVariable = 'Я внешняя переменная';
  
    function innerFunction1() {
      let innerVariable1 = 'Я первая внутренняя переменная';
  
      function innerFunction2() {
        let innerVariable2 = 'Я вторая внутренняя переменная';
  


        function innerFunction3() {
          console.log(outerVariable);
          console.log(innerVariable1);
          console.log(innerVariable2);
        }
  
        return innerFunction3;
      }
  
      return innerFunction2;
    }
  
    return innerFunction1;
  }
  
  let myClosure = outerFunction()()();
  myClosure(); 


//==============================================================================================================


function createMultiplierFunction(factor) {
    return function(numbers) {
      return numbers.map(number => number * factor);
    };
  }
  
  let double = createMultiplierFunction(2);
  let triple = createMultiplierFunction(3);
  
  let numbers = [1, 2, 3, 4, 5];
  console.log(double(numbers)); // Вывод: [2, 4, 6, 8, 10]
  console.log(triple(numbers)); // Вывод: [3, 6, 9, 12, 15]