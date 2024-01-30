// Предположим, у вас есть список товаров в интернет-магазине, 
// каждый из которых представлен объектом с информацией о товаре,
//  включая название, цену и количество на складе. 
//  Вам нужно создать функцию calculateProductStatistics, 
//  которая будет принимать массив товаров в качестве аргумента и возвращать объект 
//  с статистикой по товарам. Этот объект должен содержать следующие свойства:

// totalProducts: общее количество товаров,
// totalValue: общая стоимость всех товаров,
// mostExpensiveProduct: информация о самом дорогом товаре.
// Вам необходимо реализовать функцию calculateProductStatistics, используя замыкание и методы массивов.

let products = [
    { name: "Футболка", price: 20, quantity: 10 },
    { name: "Джинсы", price: 50, quantity: 5 },
    { name: "Кроссовки", price: 80, quantity: 8 },
    { name: "Рубашка", price: 30, quantity: 15 },
    { name: "Шорты", price: 25, quantity: 12 }
  ];


function calculateProductStatistics (productArr) {
    return productArr.reduce((acc, product) => {
        acc.totalProducts += product.quantity;

        acc.totalValue += (product.price * product.quantity);

        if (!acc.mostExpensiveProduct || product.price > acc.mostExpensiveProduct.price) {
            acc.mostExpensiveProduct = product;
        }
    
        return acc;
    },
    {
        totalProducts: 0,
        totalValue: 0,
        mostExpensiveProduct: null,
        
    })
}

let statistics = calculateProductStatistics(products)

console.log(statistics);