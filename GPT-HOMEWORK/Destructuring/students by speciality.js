// Напишите функцию filterStudentsBySpecialty(students, specialty), 
// которая принимает массив объектов студентов students и строку specialty, 
// представляющую специальность, и возвращает новый массив, содержащий только имена, 
// возрасты и списки курсов студентов с указанной специальностью.

// Каждый объект студента содержит следующие поля:

// name (строка): имя студента.
// age (число): возраст студента.
// specialty (строка): специальность студента.
// courses (массив строк): список курсов, которые студент изучает.

const students = [
    {
      name: 'Иван',
      age: 22,
      specialty: 'Информатика',
      courses: ['Алгоритмы', 'Базы данных', 'Веб-разработка']
    },
    {
      name: 'Елена',
      age: 20,
      specialty: 'Физика',
      courses: ['Механика', 'Электромагнетизм', 'Термодинамика']
    },
    {
      name: 'Петр',
      age: 21,
      specialty: 'Информатика',
      courses: ['Программирование на Python', 'Машинное обучение', 'Компьютерная графика']
    }
  ];



  function filterStudentsBySpecialty(students, specialty) {
    return students.filter(({ specialty: spec }) => spec === specialty)
                  .map(({ name, age, courses }) => ({ name, age, courses }));
  }
  
  
  const filteredStudents = filterStudentsBySpecialty(students, 'Информатика');
  console.log(filteredStudents);