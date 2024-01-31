// Вот аналогичная задача, но на этот раз она связана с обработкой текста:

// Создайте функцию конструктор Highlighter, которая создает объекты для выделения определенных слов в тексте.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод highlight(text), который принимает строку текста и возвращает новую строку,
//  где определенные слова выделены. Метод должен понимать, какие слова нужно выделить и каким образом это сделать.

// Пример использования:

// let highlighter = new Highlighter;
// console.log(highlighter.highlight("Это текст с ключевыми словами:
//  JavaScript, программирование")); // "Это текст с ключевыми словами: <b>JavaScript</b>, <b>программирование</b>"

// Затем добавьте метод addKeyword(keyword), который добавляет новое ключевое слово, 
// которое будет выделяться при использовании метода highlight. Это ключевое слово должно быть уникальным и не зависеть от регистра букв.

// Например, давайте добавим ключевые слова "JavaScript" и "программирование":

let highlighter = new Highlighter;
highlighter.addKeyword("JavaScript");
highlighter.addKeyword("программирование");

console.log(highlighter.highlight("Это текст с ключевыми словами: JavaScript, программирование"));


// Для этой задачи не нужны сложные алгоритмы или операции над числами.
// Ключевые слова могут быть добавлены и использованы для выделения текста.
// Необходимо учитывать возможность добавления пустых или неправильных ключевых слов.

function Highlighter() {
  this.keywords = [];

  this.highlight = function(text) {
    let highlightedText = text;
    this.keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<b>${keyword}</b>`);
    });
    return highlightedText;
  };

  this.addKeyword = function(keyword) {
    if (typeof keyword === 'string' && keyword.trim() !== '') {
      this.keywords.push(keyword.toLowerCase());
    } else {
      console.error('Invalid keyword:', keyword);
    }
  };
}


// Представьте, что вы создаете систему для управления учебными предметами в учебном заведении. 
// Вам нужно реализовать функцию конструктор, которая будет обрабатывать информацию о предметах и 
// студентах, а также вычислять статистику.

// Задание состоит из трех частей.

// Во-первых, реализуйте метод addSubject(subjectName), который добавляет новый предмет в список доступных предметов.

// Пример использования:

let subjectManager = new SubjectManager;
subjectManager.addSubject("Математика");
subjectManager.addSubject("Физика");

// Затем реализуйте метод addStudent(studentName), который добавляет нового студента в систему.

// Пример использования:

subjectManager.addStudent("Иванов");
subjectManager.addStudent("Петров");

// Наконец, реализуйте метод addScore(subjectName, studentName, score),
//  который добавляет оценку для конкретного предмета и студента.

// Пример использования:

subjectManager.addScore("Математика", "Иванов", 4);
subjectManager.addScore("Физика", "Иванов", 5);
subjectManager.addScore("Математика", "Петров", 3);
subjectManager.addScore("Физика", "Петров", 4);

// После этого должна быть возможность вычислить средний 
// балл по каждому предмету и средний балл по всем предметам для каждого студента.

javascript
Copy code
function SubjectManager() {
  this.subjects = {};
  this.students = {};

  this.addSubject = function(subjectName) {
    if (!this.subjects[subjectName]) {
      this.subjects[subjectName] = [];
    }
  };

  this.addStudent = function(studentName) {
    if (!this.students[studentName]) {
      this.students[studentName] = {};
    }
  };

  this.addScore = function(subjectName, studentName, score) {
    if (this.subjects[subjectName] && this.students[studentName]) {
      if (!this.students[studentName][subjectName]) {
        this.students[studentName][subjectName] = [];
      }
      this.students[studentName][subjectName].push(score);
    } else {
      console.error('Invalid subject or student:', subjectName, studentName);
    }
  };

  this.calculateAverageScoreBySubject = function(subjectName) {
    if (this.subjects[subjectName]) {
      const scores = this.subjects[subjectName].flatMap(student => this.students[student][subjectName]);
      const averageScore = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
      return averageScore.toFixed(2);
    } else {
      console.error('Invalid subject:', subjectName);
      return NaN;
    }
  };

  this.calculateAverageScoreByStudent = function(studentName) {
    if (this.students[studentName]) {
      const subjects = Object.keys(this.students[studentName]);
      const scores = subjects.flatMap(subject => this.students[studentName][subject]);
      const averageScore = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
      return averageScore.toFixed(2);
    } else {
      console.error('Invalid student:', studentName);
      return NaN;
    }
  };
}
// В этом решении создается объект SubjectManager с методами для управления информацией о предметах, студентах и их оценках. Методы позволяют добавлять новые предметы и студентов, а также добавлять оценки и вычислять средний балл по каждому предмету и по всем предметам для каждого студента.






