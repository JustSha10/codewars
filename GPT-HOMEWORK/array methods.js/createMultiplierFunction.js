// создайте функцию, createMultiplierFunctio(factor)
//которая может изменять каждый элемент массива, ипользуя множитель factor

function createMultiplierFunction(factor) {
    return (arr) => arr.map(number => number * factor)
}

let double = createMultiplierFunction(2);
let triple = createMultiplierFunction(3);


let numbers = [1, 2, 3, 4, 5];
console.log(double(numbers)); // Вывод: [2, 4, 6, 8, 10]
console.log(triple(numbers)); // Вывод: [3, 6, 9, 12, 15]






















