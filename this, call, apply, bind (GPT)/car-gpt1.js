// Задача: У вас есть объект Car, который представляет автомобиль. 
// Вам нужно добавить возможность изменять скорость автомобиля с 
// помощью различных действий, таких как ускорение или замедление. 

const Car = {
  speed: 0,

  // Метод для изменения скорости автомобиля
  changeSpeed: function(change) {
    this.speed += change;
    console.log('Current speed:', this.speed);
  }
};

// Функция обратного вызова для ускорения автомобиля
function accelerate(change) {
  this.changeSpeed(change);
}

// Функция обратного вызова для замедления автомобиля
function decelerate(change) {
  this.changeSpeed(-change);
}

// Привязываем функции обратного вызова к объекту Car с помощью метода bind
const accelerateCar = accelerate.bind(Car);
const decelerateCar = decelerate.bind(Car);

// Ускоряем автомобиль на 50 единиц скорости
accelerateCar(50); // Ожидаемый вывод: Current speed: 50

// Замедляем автомобиль на 20 единиц скорости
decelerateCar(20); // Ожидаемый вывод: Current speed: 30

// В этой задаче мы создаем функции обратного вызова accelerate и decelerate, 
// которые изменяют скорость автомобиля. Затем мы используем метод bind, чтобы 
// привязать эти функции к объекту Car, создавая новые функции accelerateCar и decelerateCar, 
// которые применяются к объекту Car при вызове. Таким образом, при вызове accelerateCar(50) 
// скорость автомобиля увеличится на 50 единиц, а при вызове decelerateCar(20) скорость уменьшится на 20 единиц.