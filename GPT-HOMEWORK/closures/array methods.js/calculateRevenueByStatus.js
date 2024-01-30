
// Хорошо, вот более сложная задача:

// Предположим, у вас есть список заказов в интернет-магазине, 
// каждый из которых представлен объектом с информацией о заказе, 
// включая номер заказа, сумму и статус заказа. 
// Также у каждого заказа есть массив товаров, содержащий объекты с информацией о товаре, 
// включая название и цену. Вам нужно создать функцию calculateTotalRevenueByStatus, 
// которая будет принимать массив заказов и статус заказа в качестве аргументов и 
// возвращать суммарную выручку по всем заказам с указанным статусом.


let orders = [
  { 
    orderNumber: 1, 
    status: "completed", 
    items: [
      { name: "Футболка", price: 20 },
      { name: "Джинсы", price: 50 }
    ]
  },
  { 
    orderNumber: 2, 
    status: "completed", 
    items: [
      { name: "Кроссовки", price: 80 },
      { name: "Шорты", price: 40 }
    ]
  },
  { 
    orderNumber: 3, 
    status: "shipped", 
    items: [
      { name: "Рубашка", price: 30 },
      { name: "Носки", price: 5 }
    ]
  }
];

function calculateTotalRevenueByStatus(orders, status) {
    return orders.reduce((totalRevenue, order) => {
      if (order.status === status) {
        return totalRevenue + order.items.reduce((total, item) => total + item.price, 0);
      } else {
        return totalRevenue;
      }
    }, 0);
  }
  
  // Пример использования:
  let totalRevenueCompleted = calculateTotalRevenueByStatus(orders, "completed");
  console.log(totalRevenueCompleted); // Ожидаемый вывод: 190
  
  let totalRevenueShipped = calculateTotalRevenueByStatus(orders, "shipped");
  console.log(totalRevenueShipped); // Ожидаемый вывод: 35