
// У вас есть массив объектов salesData, 
// содержащий информацию о продажах различных товаров за разные месяцы.
// Каждый объект представляет собой данные о продажах за один месяц и включает в себя месяц,
// товар, цену за единицу, количество проданных единиц и общую выручку от продаж.
// Вам нужно написать функцию monthlySalesAnalysis, которая принимает этот массив данных и возвращает объект, 
// содержащий анализ продаж по месяцам:

// Общую выручку за каждый месяц.
// Общее количество проданных единиц за каждый месяц.
// Среднюю цену продажи товара за каждый месяц.
// Пример использования функции:

const salesData = [
  { month: 'Январь', product: 'Футболка', price: 15, quantity: 100, revenue: 1500 },
  { month: 'Январь', product: 'Джинсы', price: 50, quantity: 80, revenue: 4000 },
  { month: 'Февраль', product: 'Футболка', price: 15, quantity: 50, revenue: 750 },
  { month: 'Февраль', product: 'Джинсы', price: 50, quantity: 40, revenue: 2000 },
  { month: 'Февраль', product: 'Кроссовки', price: 80, quantity: 30, revenue: 2400 }
];


function monthlySalesAnalysis1(salesData) {
    return salesData.reduce((analysisResult, { month, revenue, quantity }) => {
      // Если месяц уже присутствует в объекте analysisResult, добавляем данные к существующим значениям
      analysisResult[month] = analysisResult[month] || { totalRevenue: 0, totalQuantity: 0 }
        analysisResult[month].totalRevenue += revenue;
        analysisResult[month].totalQuantity += quantity;
  
      // Вычисляем среднюю цену за единицу товара
      analysisResult[month].averagePrice = analysisResult[month].totalRevenue / analysisResult[month].totalQuantity;
      
      return analysisResult;
    }, {});
  }

const analysisResult = monthlySalesAnalysis1(salesData);
console.log(analysisResult);


/*
{
  Январь: { totalRevenue: 5500, totalQuantity: 180, averagePrice: 32.22222222222222 },
  Февраль: { totalRevenue: 5150, totalQuantity: 120, averagePrice: 42.916666666666664 }
}
*/