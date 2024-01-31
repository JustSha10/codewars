// Задача: Вы разрабатываете систему для учета книг в библиотеке. 
// У вас есть объект Library, который хранит информацию о книгах и 
// предоставляет методы для их добавления, удаления и поиска. 
// Вам необходимо реализовать возможность поиска книг по различным критериям, 
// таким как автор, название и жанр. Для этого вы решаете использовать функции 
// обратного вызова и метод apply для связывания этих функций с объектом Library.


// Добавление книги
const newBook = { title: "1984", author: "George Orwell", genre: "Dystopian" };
Library.addBook(newBook);

// Поиск книг по различным критериям
const searchCriteria = { title: "1984" };
const foundBooks = Library.searchBooks(searchCriteria);
console.log(foundBooks);

// Объект, представляющий библиотеку
const Library = {
  books: [],

  // Метод для добавления книги
  addBook: function(book) {
    this.books.push(book);
  },

  // Метод для удаления книги
  removeBook: function(title) {
    this.books = this.books.filter(book => book.title !== title);
  },

  // Метод для поиска книги по различным критериям
  searchBooks: function(criteria) {
    const { title, author, genre } = criteria;
    let result = this.books;
    if (title) {
      result = result.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (author) {
      result = result.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }
    if (genre) {
      result = result.filter(book => book.genre.toLowerCase().includes(genre.toLowerCase()));
    }
    return result;
  }
};

// Пример использования с деструктурирующим присваиванием




// В этой задаче метод searchBooks принимает объект criteria, 
// содержащий критерии поиска книги (например, название, автор и жанр). 
// С помощью деструктурирующего присваивания мы извлекаем эти критерии и 
// используем их для фильтрации списка книг в библиотеке.