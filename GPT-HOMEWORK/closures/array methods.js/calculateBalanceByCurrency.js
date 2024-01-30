// Предположим, у вас есть список счетов клиентов банка, 
// каждый из которых представлен объектом с информацией о счете, включая номер счета, баланс и тип валюты. 
// Вам нужно создать функцию calculateTotalBalanceByCurrency, 
// которая будет принимать массив счетов и тип валюты в качестве аргументов и 
// возвращать суммарный баланс всех счетов в указанной валюте.


let accounts = [
  { accountNumber: "ACC001", balance: 1000, currency: "USD" },
  { accountNumber: "ACC002", balance: 2000, currency: "USD" },
  { accountNumber: "ACC003", balance: 1500, currency: "EUR" },
  { accountNumber: "ACC004", balance: 2500, currency: "EUR" },
  { accountNumber: "ACC005", balance: 1200, currency: "USD" }
];



function calculateTotalBalanceByCurrency (accountArr, curr) {
    
    let filterByCurr = account => account.currency === curr;

    let sum = (total, account) => total + account.balance;

    return accountArr.filter(filterByCurr).reduce(sum, 0);
}

let totalUSDBalance = calculateTotalBalanceByCurrency(accounts, "USD");
console.log(totalUSDBalance); // Ожидаемый вывод: 4300

let totalEURBalance = calculateTotalBalanceByCurrency(accounts, "EUR");
console.log(totalEURBalance); // Ожидаемый вывод: 4000

