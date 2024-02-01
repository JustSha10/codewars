

function Book(title, author, year, pages) {
    this.date = new Date();

    this.book = {
        title,
        author,
        year,
        pages,
    };

    return this.book;
}

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 218);
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 281);
const book2 = new Book("1984", "George Orwell", 1949, 328);
const book3 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951, 277);
const book4 = new Book("Moby-Dick", "Herman Melville", 1851, 624);



function Library (name) {
    this.name = name;
    this.books = [];
    this.addBook = function (book) {
        this.books.push(book);
    }

    this.filter = function (filterName, value) {
        return this.books.filter (book => book[filterName] == value);
    }

    this.issueBook = function(filterName, value) {

        const bookIndex = this.books.findIndex(book => book[filterName] === value);

        if (bookIndex === -1) {
            return "В библиотеке нет такой книги";
        }

        const [book] = this.books.splice(bookIndex, 1);

        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 30);
        const formattedDueDate = dueDate.toLocaleDateString('default', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }
}


let library = new Library (`School library`);
library.addBook(myBook);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log(library.issueBook(`year`, 1960))
console.log(library.books)




