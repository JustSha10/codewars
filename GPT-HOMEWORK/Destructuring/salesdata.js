// У вас есть массив объектов salesData, представляющих данные о продажах различных товаров. 
// Каждый объект содержит информацию о товаре, его цене, количестве проданных единиц и общей выручке от продаж. 
// Вам нужно написать функцию calculateSalesSummary, которая принимает этот массив данных и возвращает объект 
// суммарной статистики по всем товарам, включая общую выручку, 
// общее количество проданных единиц и среднюю цену продажи товара.


const salesData = [
  { product: 'Футболка', price: 15, quantity: 100, revenue: 1500 },
  { product: 'Джинсы', price: 50, quantity: 80, revenue: 4000 },
  { product: 'Кроссовки', price: 80, quantity: 50, revenue: 4000 }
];

function calculateSalesSummary (sales) {
    return sales.reduce((total, {price, quantity, revenue}) => {
        total.totalRevenue += revenue;
        total.totalQuantity += quantity;
        total.sumPrice += price;
        return total;
    },
    {
        totalRevenue: 0,
        totalQuantity: 0,
        sumPrice: 0, 
    })
}

const summary = calculateSalesSummary(salesData);
summary.averagePrice = summary.sumPrice / salesData.length;

console.log(summary);

function calculateSalesSummary1(salesData) {
    let totalRevenue = 0;
    let totalQuantity = 0;
  
    salesData.forEach(({ price, quantity, revenue }) => {
      totalRevenue += revenue;
      totalQuantity += quantity;
    });
  
    const averagePrice = totalRevenue / totalQuantity;
  
    return {
      totalRevenue,
      totalQuantity,
      averagePrice
    };
  }
