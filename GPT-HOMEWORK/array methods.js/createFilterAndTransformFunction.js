// Создайте функцию createFilterAndTransformFunction, 
// которая принимает две функции в качестве аргументов: 
// предикат и преобразователь. Функция createFilterAndTransformFunction 
// должна вернуть новую функцию, которая принимает массив строк и выполняет следующие действия:

// Фильтрует элементы массива с помощью предиката.
// Преобразует отфильтрованные элементы массива с помощью преобразователя.
// Возвращает новый массив, содержащий результаты преобразования.


// Условие для предиката: Предикат должен проверять, 
// содержит ли строка хотя бы одну гласную букву.

// Условие для преобразователя: 
// Преобразователь должен преобразовывать строки, содержащие только заглавные буквы, 
// в строки, содержащие только строчные буквы.

let isWovel = word => word.toLowerCase().split(``).some(char => [`a`, `e`, `i`, `o`, `u`, `y`].includes(char));

let toLowerCaseF = str => {
    if (str.split(``).every(char => char === char.toUpperCase()))
    return str.toLowerCase();
    return str;
}

function createFilterAndTransformFunction (predicat, transform) {
    return strArray => strArray.filter(isWovel).map(toLowerCaseF);
}

let toLowerandWovel = createFilterAndTransformFunction(isWovel, toLowerCaseF);

console.log(toLowerandWovel(["HELLO", "WORLD", "Apples", "Bananas", "grApE"]));

