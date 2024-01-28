// Задача: У вас есть объект Player, 
// который представляет игрока в компьютерной игре. 
// Вам нужно добавить возможность изменять здоровье 
// игрока с помощью различных эффектов, таких как увеличение 
// или уменьшение здоровья. Для этого вы решаете использовать 
// функцию обратного вызова и метод call для связывания этой функции с объектом Player.


// Объект, представляющий игрока
const Player = {
  health: 100,

  // Метод для применения эффекта к здоровью игрока
  applyEffect: function(effect, value) {
    if (typeof effect === 'function') {
      // Используем метод call для выполнения функции обратного вызова с контекстом this объекта Player
      effect.call(this, value);
    } else {
      console.log('Invalid effect');
    }
  },

  // Функция обратного вызова для увеличения здоровья игрока
  increaseHealth: function(value) {
    this.health += value;
    console.log('Player health increased by', value, 'to', this.health);
  },

  // Функция обратного вызова для уменьшения здоровья игрока
  decreaseHealth: function(value) {
    this.health -= value;
    console.log('Player health decreased by', value, 'to', this.health);
  }
};

// Применение эффекта увеличения здоровья игрока
Player.applyEffect(Player.increaseHealth, 20); // Ожидаемый вывод: Player health increased by 20 to 120

// Применение эффекта уменьшения здоровья игрока
Player.applyEffect(Player.decreaseHealth, 30); // Ожидаемый вывод: Player health decreased by 30 to 90

// В этой задаче метод applyEffect принимает аргументы effect и value. Параметр effect должен быть функцией. 
// Метод applyEffect использует метод call, чтобы вызвать эту функцию, связав ее с текущим контекстом this 
// (т.е. объектом Player). Таким образом, при вызове effect.call(this, value), функция effect будет выполнена 
// с контекстом this, указывающим на объект Player, что позволяет ей взаимодействовать с его свойствами и методами.