
// Задача: У вас есть объект order, представляющий заказ в интернет-магазине. 
// Внутри объекта order содержится объект product, описывающий товар, включая его название, цену и количество.
//  Вам необходимо реализовать функцию getOrderSummary, которая принимает объект заказа и возвращает строку, 
//  содержащую краткую сводку о заказе, 
// включая название товара, его цену за единицу и общее количество. 
// Используйте деструктуризацию для доступа к свойствам объекта product внутри объекта order.


// Объект заказа
const order = {
  orderNumber: '12345',
  date: '2024-01-30',
  product: {
    name: 'Футболка',
    pricePerUnit: 25,
    quantity: 2
  }
};

// Функция для получения краткой сводки о заказе
function getOrderSummary(orderData) {
  const { product: { name, pricePerUnit, quantity } } = orderData;
  const totalPrice = pricePerUnit * quantity;
  return `Заказ №${orderData.orderNumber} на ${orderData.date}: ${quantity} шт. "${name}" по цене ${pricePerUnit}$ за единицу. Общая стоимость: ${totalPrice}$.`;
}

// Пример использования

// Получение краткой сводки о заказе с помощью функции getOrderSummary
const orderSummary = getOrderSummary(order);
console.log(orderSummary);
// В этой задаче функция getOrderSummary принимает объект orderData, 
// содержащий информацию о заказе, включая объект product с информацией о товаре. 
// С помощью деструктуризации мы извлекаем свойства name, pricePerUnit и quantity 
// из объекта product внутри объекта order. Затем мы используем эти значения для формирования 
// строки с краткой сводкой о заказе, которая затем возвращается из функции.