// У вас есть список студентов, представленный в виде массива объектов, 
// где каждый объект содержит имя студента и его оценки по различным предметам. 
// Вам нужно создать функцию calculateAverageGradeBySubject, 
// которая будет принимать название предмета в качестве аргумента и 
// возвращать функцию. Эта возвращаемая функция должна принимать массив студентов 
// и возвращать среднюю оценку по указанному предмету для всех студентов.

let students = [
    { name: "Алексей", grades: { math: 90, physics: 85, chemistry: 88 } },
    { name: "Мария", grades: { math: 80, physics: 75, chemistry: 82 } },
    { name: "Иван", grades: { math: 70, physics: 65, chemistry: 72 } }
  ];

function calculateAverageGradeBySubject (subject) {
    return studentsArr => studentsArr.reduce((averageMark, information) => 
        averageMark += information.grades[subject] , 0) / studentsArr.length;
}


  let averageMathGrade = calculateAverageGradeBySubject('math');
  console.log(averageMathGrade(students)); // Ожидаемый вывод: 80
  
  let averagePhysicsGrade = calculateAverageGradeBySubject('physics');
  console.log(averagePhysicsGrade(students)); // Ожидаемый вывод: 75