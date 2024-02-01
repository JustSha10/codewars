// Создайте функцию конструктора Library, которая будет создавать объекты библиотеки для управления книгами.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод addBook(title, author), 
// который добавляет новую книгу в библиотеку. Метод должен принимать название книги title и имя автора author.

// Затем добавьте метод findBooksByAuthor(author), который возвращает массив книг, написанных указанным автором.



function Library () {
    this.books = [];

    this.addBook = function (title, author) {
        this.books.push({ title, author });
    }

    this.findBooksByAuthor = function (author) {
        return this.books.filter(book => book.author === author);
    }
}

let library = new Library();


library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.addBook("To Kill a Mockingbird", "Harper Lee");
library.addBook("1984", "George Orwell");
library.addBook("Animal Farm", "George Orwell");

console.log(library.books);

let orwellBooks = library.findBooksByAuthor("George Orwell");
console.log(orwellBooks); // ["1984", "Animal Farm"]
// Для данной задачи необходимо учитывать, что один и тот же автор может написать несколько книг.



function Library1 () {
    this.authors = {}; // Объект для хранения книг по авторам

    this.addBook = function (title, author) {
        if (!this.authors[author]) {
            this.authors[author] = []; // Создаем массив книг для нового автора
        }
        this.authors[author].push(title); // Добавляем книгу в массив книг для данного автора
    }

    this.findBooksByAuthor = function (author) {
        return this.authors[author] || []; // Возвращаем массив книг для данного автора или пустой массив, если автор не найден
    }
}

let library1 = new Library1();

library1.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library1.addBook("To Kill a Mockingbird", "Harper Lee");
library1.addBook("1984", "George Orwell");
library1.addBook("Animal Farm", "George Orwell");

console.log(library1.authors);

let orwellBooks1 = library1.findBooksByAuthor("George Orwell");
console.log(orwellBooks1); // ["1984", "Animal Farm"]
// Для данной задачи необходимо учитывать, что один и тот же автор может написать несколько книг.