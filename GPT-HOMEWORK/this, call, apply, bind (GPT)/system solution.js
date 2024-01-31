
// Задача: Вы разрабатываете систему управления задачами. У вас есть объект TaskManager, 
// который хранит список задач и предоставляет методы для их добавления, удаления и выполнения. 
// Вам необходимо реализовать возможность создания аналитического отчета, который
// будет собирать информацию о выполненных задачах за определенный период времени. 
// Для этого вы решаете использовать функции обратного вызова и метод call для связывания 
// этих функций с объектом TaskManager.

// Объект, представляющий менеджер задач
const TaskManager = {
  tasks: [],

  // Метод для добавления задачи
  addTask: function(task) {
    this.tasks.push(task);
  },

  // Метод для удаления задачи
  deleteTask: function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  },

  // Метод для выполнения задачи
  completeTask: function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    }
  },

  // Метод для создания аналитического отчета
  generateReport: function(startDate, endDate) {
    const completedTasks = this.tasks.filter(task => task.completed && task.date >= startDate && task.date <= endDate);
    let report = `Completed tasks from ${startDate} to ${endDate}:\n`;
    completedTasks.forEach((task, index) => {
      report += `${index + 1}. ${task.name}\n`;
    });
    return report;
  },

  // Метод для вывода аналитического отчета
  printReport: function(startDate, endDate) {
    const report = this.generateReport(startDate, endDate);
    console.log(report);
  }
};

// Пример использования

// Добавление задач
TaskManager.addTask({ name: "Task 1", date: new Date('2024-01-20'), completed: true });
TaskManager.addTask({ name: "Task 2", date: new Date('2024-01-21'), completed: false });
TaskManager.addTask({ name: "Task 3", date: new Date('2024-01-22'), completed: true });

// Генерация и вывод аналитического отчета за определенный период
const startDate = new Date('2024-01-20');
const endDate = new Date('2024-01-22');
const report = TaskManager.generateReport(startDate, endDate);
console.log(report);


// В этой задаче метод generateReport принимает начальную и конечную дату и использует их для фильтрации 
// выполненных задач за указанный период времени. Затем он создает отчет, перечисляя имена выполненных задач 
// в указанном диапазоне дат. Метод printReport используется для вывода этого отчета в консоль.