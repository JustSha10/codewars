// Представьте, что у вас есть список заказов в интернет-магазине, 
// каждый из которых представлен объектом с информацией о заказе, 
// включая номер заказа, сумму и статус заказа. 
// Вам нужно создать функцию calculateOrderStatistics, 
// которая будет принимать массив заказов в качестве аргумента и возвращать объект 
// со статистикой по заказам. Этот объект должен содержать следующие свойства:

// totalOrders: общее количество заказов,
// totalRevenue: общая выручка от всех заказов,
// averageOrderValue: средняя стоимость заказа,
// statusCounts: объект, содержащий количество заказов для каждого статуса заказа.
// Пример использования:


let orders = [
  { orderId: 1, amount: 50, status: "pending" },
  { orderId: 2, amount: 100, status: "completed" },
  { orderId: 3, amount: 75, status: "completed" },
  { orderId: 4, amount: 60, status: "shipped" }
];


/*
Ожидаемый вывод: 
{
  totalOrders: 4,
  totalRevenue: 285,
  averageOrderValue: 71.25,
  statusCounts: { pending: 1, completed: 2, shipped: 1 }
}
*/

let totalRev = (total, order) => total + order.amount;
let statCount = (object, order) => {
  if (!object[order.status]) {
    object[order.status] = 1
  } else {
    object[order.status]++
  };
  return object;
}


function calculateOrderStatistics (listOrder) {
  return { 
    totalOrders: listOrder.length,
    totalRevenue: listOrder.reduce(totalRev, 0),
    averageOrd: listOrder.reduce(totalRev, 0) / listOrder.length,
    statCounts: listOrder.reduce(statCount, {})
}
}


let statistics = calculateOrderStatistics(orders);
console.log(statistics);



function calculateOrderStatistics1(orders) {
  return orders.reduce((acc, order) => {
    // Увеличиваем общее количество заказов на 1
    acc.totalOrders++;

    // Добавляем сумму заказа к общей выручке
    acc.totalRevenue += order.amount;

    // Увеличиваем количество заказов для конкретного статуса
    acc.statusCounts[order.status] = (acc.statusCounts[order.status] || 0) + 1;

    return acc;
  }, {
    totalOrders: 0,
    totalRevenue: 0,
    statusCounts: {}
  });
}

let orders1 = [
  { orderId: 1, amount: 50, status: "pending" },
  { orderId: 2, amount: 100, status: "completed" },
  { orderId: 3, amount: 75, status: "completed" },
  { orderId: 4, amount: 60, status: "shipped" }
];

let statistics1 = calculateOrderStatistics(orders);
console.log(statistics1);
/*
Ожидаемый вывод: 
{
  totalOrders: 4,
  totalRevenue: 285,
  statusCounts: { pending: 1, completed: 2, shipped: 1 }
}
*/

// Вычисляем среднюю стоимость заказа
statistics.averageOrderValue = statistics.totalRevenue / statistics.totalOrders;
console.log(statistics.averageOrderValue); // Ожидаемый вывод: 71.25