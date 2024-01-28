// Задача: выбрать чётные, вычислить их квадраты и отобрать из них числа больше 50.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filterEven(num) {
  return num % 2 === 0
}

function square(num) {
  return num * num
}

function filterGreaterThanFifty(num) {
  return num > 50
}

const result = numbers
  .filter(filterEven)
  .map(square)
  .filter(filterGreaterThanFifty)

console.log(result)
// [64, 100]



const result1 = numbers.reduce(function (res, num) {
  if (filterEven(num)) {
    const squared = square(num)

    if (filterGreaterThanFifty(squared)) {
      res.push(squared)
    }
  }

  return res
}, [])

console.log(result)
// [64, 100]