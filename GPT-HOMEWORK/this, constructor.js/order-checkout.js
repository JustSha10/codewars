// Задача: Управление заказами в интернет-магазине

// Реализуйте систему управления заказами в интернет-магазине с использованием функций-конструкторов и методов массивов.
//  Каждый заказ представляется объектом с информацией о товарах, их количестве и общей стоимости.
//   Необходимо создать функцию-конструктор Order, которая будет содержать следующие методы:

// addProduct(name, price, quantity): Добавляет товар в заказ с указанным названием, ценой и количеством.
// getTotalCost(): Возвращает общую стоимость всех товаров в заказе.
// getProducts(): Возвращает список всех товаров в заказе.
// filterProducts(condition): Возвращает массив товаров, отфильтрованных по заданному условию.
// updateQuantity(name, newQuantity): Обновляет количество товаров с указанным названием в заказе на новое значение.


// Функция-конструктор для создания заказа
function Order() {
    this.products = [];

    // Метод для добавления товаров в заказ
    this.addProduct = function(name, price, quantity) {
        this.products.push({ name, price, quantity });
    };

    // Метод для вычисления общей стоимости заказа
    this.getTotalCost = function() {
        return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    // Метод для получения списка товаров в заказе
    this.getProducts = function() {
        return this.products;
    };

    // Метод для фильтрации товаров по заданному условию
    this.filterProducts = function(condition) {
        return this.products.filter(condition);
    };

    // Метод для обновления количества товаров в заказе
    this.updateQuantity = function(name, newQuantity) {
        const productIndex = this.products.findIndex(product => product.name === name);
        if (productIndex !== -1) {
            this.products[productIndex].quantity = newQuantity;
        }
    };
}

// Создание заказа
const order = new Order();

// Добавление товаров в заказ
order.addProduct("Футболка", 20, 2);
order.addProduct("Джинсы", 50, 1);
order.addProduct("Кроссовки", 80, 1);

// Вывод информации о заказе
console.log("Товары в заказе:", order.getProducts());
console.log("Общая стоимость заказа:", order.getTotalCost());

// Фильтрация товаров в заказе
const expensiveProducts = order.filterProducts((product) => product.price > 30);
console.log("Дорогие товары:", expensiveProducts);

// Обновление количества товаров в заказе
order.updateQuantity("Футболка", 3);
console.log("Обновленные товары в заказе:", order.getProducts());
console.log("Обновленная общая стоимость заказа:", order.getTotalCost());




// Задача: Учет книг в библиотеке

// Создайте программу для учета книг в библиотеке с использованием функции-конструктора и методов массивов. Каждая книга будет представлена объектом с информацией о названии, авторе, жанре и количестве экземпляров. Реализуйте функцию-конструктор Library, которая будет содержать следующие методы:

// addBook(title, author, genre, quantity): Добавляет книгу в библиотеку с указанным названием, автором, жанром и количеством экземпляров.
// getBooksByGenre(genre): Возвращает массив книг определенного жанра.
// getBooksByAuthor(author): Возвращает массив книг определенного автора.
// getBook(title): Возвращает информацию о книге по ее названию.
// updateQuantity(title, newQuantity): Обновляет количество экземпляров книги с указанным названием.
// Пример использования:

// javascript
// Copy code
// // Создание библиотеки
// const library = new Library();

// // Добавление книг в библиотеку
// library.addBook("1984", "Джордж Оруэлл", "Фантастика", 5);
// library.addBook("Преступление и наказание", "Федор Достоевский", "Роман", 3);
// library.addBook("Война и мир", "Лев Толстой", "Роман", 7);
// library.addBook("Гарри Поттер и Философский камень", "Дж. К. Роулинг", "Фэнтези", 4);

// // Вывод информации о книгах определенного жанра
// console.log("Книги жанра 'Роман':", library.getBooksByGenre("Роман"));

// // Вывод информации о книгах определенного автора
// console.log("Книги автора 'Федор Достоевский':", library.getBooksByAuthor("Федор Достоевский"));

// // Вывод информации о книге по ее названию
// console.log("Информация о книге '1984':", library.getBook("1984"));

// // Обновление количества экземпляров книги
// library.updateQuantity("1984", 7);
// console.log("Обновленная информация о книге '1984':", library.getBook("1984"));




