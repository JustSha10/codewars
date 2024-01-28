// Объект, представляющий банковский счет
const Account = {
    balance: 1000,
    transactionHistory: [],
  
    // Метод для выполнения транзакции на счете
    performTransaction: function(amount, callback) {
      if (typeof callback === 'function') {
        // Используем метод call для выполнения функции обратного вызова с контекстом this объекта Account
        callback.call(this, amount);
      } else {
        console.log('Invalid callback function');
      }
    },
  
    // Функция обратного вызова для обработки стандартной логики транзакции
    standardTransaction: function(amount) {
      if (typeof amount === 'number' && !isNaN(amount)) {
        if (this.balance + amount >= 0) {
          this.balance += amount;
          this.transactionHistory.push({ type: amount >= 0 ? 'Deposit' : 'Withdrawal', amount: Math.abs(amount) });
          console.log('Transaction successful');
        } else {
          console.log('Insufficient funds');
        }
      } else {
        console.log('Invalid amount');
      }
    }
  };
  
  // Выполнение стандартной транзакции
  Account.performTransaction(500, Account.standardTransaction);
  console.log('Current balance:', Account.balance); // Ожидаемый вывод: 1500
  
  // Пользовательский сценарий: Допустим, нам нужно добавить комиссию за каждую транзакцию
  // Создаем функцию обратного вызова для включения комиссии
  function transactionWithFee(amount) {
    const fee = 10;
    const totalAmount = amount - fee;
    Account.standardTransaction(totalAmount);
  }
  
  // Привязываем функцию обратного вызова с комиссией к объекту Account с помощью метода call
  Account.performTransaction(200, transactionWithFee.call(Account));
  console.log('Current balance:', Account.balance); // Ожидаемый вывод: 1690 (с учетом комиссии)


//   В этой задаче метод performTransaction принимает аргумент callback, который должен быть функцией.
//    Метод performTransaction использует метод call, чтобы вызвать эту функцию, связав ее с текущим 
//    контекстом this (т.е. объектом Account). Таким образом, при вызове callback.call(this, amount), 
//    функция callback будет выполнена с контекстом this,
//    указывающим на объект Account, что позволяет ей взаимодействовать с его свойствами и методами.