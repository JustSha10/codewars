
// Задача: Вы разрабатываете приложение для управления умным домом. 
// У вас есть объект SmartHome, который представляет умный дом и 
// содержит информацию о состоянии различных устройств, таких как свет, 
// кондиционер и система безопасности. Вам необходимо реализовать возможность выполнения 
// сценариев, которые могут включать или выключать несколько устройств одновременно. 
// Каждый сценарий представляет собой набор действий, которые нужно выполнить. 
// Для этого вы решаете использовать функции обратного вызова и метод apply для 
// связывания этих функций с объектом SmartHome.

const SmartHome = {
  lights: {
    livingRoom: false,
    kitchen: false,
    bedroom: false
  },
  airConditioner: false,
  securitySystem: false,

  // Метод для включения или выключения света
  toggleLights: function(location, action) {
    if (this.lights.hasOwnProperty(location)) {
      this.lights[location] = action;
      console.log(`${location} lights ${action ? 'turned on' : 'turned off'}`);
    } else {
      console.log(`Invalid location: ${location}`);
    }
  },

  // Метод для включения или выключения кондиционера
  toggleAirConditioner: function(action) {
    this.airConditioner = action;
    console.log(`Air conditioner ${action ? 'turned on' : 'turned off'}`);
  },

  // Метод для включения или выключения системы безопасности
  toggleSecuritySystem: function(action) {
    this.securitySystem = action;
    console.log(`Security system ${action ? 'activated' : 'deactivated'}`);
  },

  // Метод для выполнения сценария
  executeScenario: function(scenario) {
    console.log('Executing scenario:', scenario.name);
    scenario.actions.forEach(action => {
      const functionName = action[0];
      const parameters = action.slice(1);
      if (typeof this[functionName] === 'function') {
        // Используем метод apply для выполнения функции обратного вызова с контекстом this объекта SmartHome
        this[functionName].apply(this, parameters);
      } else {
        console.log(`Invalid action: ${functionName}`);
      }
    });
    console.log('Scenario execution completed.');
  }
};

// Сценарий для вечерней подготовки к сну
const bedtimeScenario = {
  name: 'Bedtime',
  actions: [
    ['toggleLights', 'livingRoom', true],
    ['toggleLights', 'kitchen', false],
    ['toggleLights', 'bedroom', true],
    ['toggleAirConditioner', true],
    ['toggleSecuritySystem', true]
  ]
};

// Выполнение сценария для вечерней подготовки к сну
SmartHome.executeScenario(bedtimeScenario);
// В этой задаче метод executeScenario принимает объект сценария, содержащий массив действий. 
// Для каждого действия он определяет имя метода и его параметры, а затем использует метод apply, 
// чтобы вызвать этот метод с соответствующими параметрами, связывая его с объектом SmartHome как контекстом this. 
// Таким образом, при выполнении сценария умного дома, 
// каждое действие будет применено к устройствам согласно описанным правилам.