// Создайте функцию createArrayProcessor, 
// которая принимает две функции в качестве аргументов: 
// предикат и преобразователь. Функция createArrayProcessor 
// должна вернуть новую функцию, которая принимает массив чисел и выполняет следующие действия:

// Фильтрует элементы массива с помощью предиката.
// Преобразует отфильтрованные элементы массива с помощью преобразователя.
// Возвращает новый массив, содержащий результаты преобразования.

function isNegative(number) {
  return number < 0;
}

function absoluteValue(number) {
  return Math.abs(number);
}

function createArrayProcessor(predicate, transform) {
    return array => array.filter(predicate).map(transform);
}

let processNegativeAndAbsolute = createArrayProcessor(isNegative, absoluteValue);
let numbers = [-1, 2, -3, 4, -5];
console.log(processNegativeAndAbsolute(numbers)); // Вывод: [1, 3, 5]


