// Объект, представляющий калькулятор
const Calculator = {
    currentValue: 0,
  
    // Метод для выполнения операции
    executeOperation: function(operation, operand) {
      if (typeof operation === 'function') {
        // Используем метод apply для выполнения функции обратного вызова с контекстом this объекта Calculator
        operation.apply(this, [operand]);
      } else {
        console.log('Invalid operation');
      }
    },
  
    // Функция обратного вызова для выполнения операции сложения
    addition: function(operand) {
      this.currentValue += operand;
      console.log('Result:', this.currentValue);
    },
  
    // Функция обратного вызова для выполнения операции вычитания
    subtraction: function(operand) {
      this.currentValue -= operand;
      console.log('Result:', this.currentValue);
    }
  };
  
  // Выполнение операции сложения
  Calculator.executeOperation(Calculator.addition, 5); // Ожидаемый вывод: Result: 5
  
  // Изменение операции на вычитание
  Calculator.executeOperation(Calculator.subtraction, 3); // Ожидаемый вывод: Result: 2