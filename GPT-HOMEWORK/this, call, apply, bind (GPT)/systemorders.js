// Ты работаешь над системой учета заказов для интернет-магазина. Необходимо 
// создать функцию-конструктор OrderManager, которая будет создавать объекты заказов и содержать методы для управления ими.

// У объектов OrderManager должны быть следующие методы:

// createOrder(customer, products): Метод, который создает новый заказ на основе информации
//  о клиенте и списке продуктов. Возвращает объект заказа с уникальным идентификатором и общей стоимостью.

// calculateTotal(products): Метод, который принимает список продуктов и возвращает общую стоимость заказа.

// printOrder(order): Метод, который принимает объект заказа 
// и выводит в консоль информацию о нем (идентификатор, информация о клиенте, 
//     список продуктов и общая стоимость).

// setDiscount(order, discount): Метод, который устанавливает скидку на заказ.

// processOrder(order): Метод, который обрабатывает заказ, применяя скидку 
// (если она установлена) и выводя информацию о заказе в консоль.

// Учти потерю контекста при передаче методов объектов в качестве колбэков.


function OrderManager() {
    this.orders = [];

    this.createOrder = function(customer, products) {
        const order = {
            id: Math.floor(Math.random() * 1000) + 1,
            customer,
            products,
            totalCost: this.calculateTotal(products)
        };
        this.orders.push(order); // Добавление заказа в список заказов
        return order;
    };

    this.calculateTotal = function(products) {
        // Реализация расчета общей стоимости продуктов
        let totalCost = 0;
        for (let product of products) {
            totalCost += product.price;
        }
        return totalCost;
    };

    this.printOrder = function(order) {
        console.log("Order ID:", order.id);
        console.log("Customer:", order.customer.name);
        console.log("Products:");
        order.products.forEach(product => {
            console.log("-", product.name, "-", product.price);
        });
        console.log("Total Cost:", order.totalCost);
    };

    this.setDiscount = function(order, discount) {
        order.totalCost -= discount; // Применение скидки к общей стоимости заказа
    };

    this.processOrder = function(order) {
        if (order.totalCost) {
            console.log("Processing order...");
            if (order.discount) {
                console.log("Applying discount of", order.discount, "to the order...");
                this.setDiscount(order, order.discount); // Применение скидки к заказу
            }
            console.log("Order processed successfully!");
            console.log("Order details:");
            this.printOrder(order); // Вывод информации о заказе
        } else {
            console.log("Order is empty or invalid.");
        }
    };
}

// Пример использования:
const orderManager = new OrderManager();
const customer = { name: "John Doe", email: "john@example.com" };
const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 }
];
const newOrder = orderManager.createOrder(customer, products);
orderManager.processOrder(newOrder);