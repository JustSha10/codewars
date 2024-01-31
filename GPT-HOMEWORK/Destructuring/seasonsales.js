// У вас есть массив объектов salesData, представляющих данные 
// о продажах товаров в разные месяцы. Каждый объект содержит информацию о товаре, 
// его категории, месяце продажи, цене за единицу и количестве проданных единиц. 
// Вам нужно написать функцию seasonalSalesAnalysis, которая анализирует продажи 
// с учетом сезонности и возвращает объект, содержащий следующую информацию:

// Для каждой категории товаров (уникальных категорий):
// Общую выручку от продаж за каждый месяц.
// Общее количество проданных единиц за каждый месяц.

const salesData = [
  { product: 'Футболка', category: 'Одежда', month: 'Январь', price: 15, quantity: 100 },
  { product: 'Джинсы', category: 'Одежда', month: 'Январь', price: 50, quantity: 80 },
  { product: 'Телевизор', category: 'Электроника', month: 'Февраль', price: 500, quantity: 5 },
  { product: 'Кроссовки', category: 'Обувь', month: 'Февраль', price: 80, quantity: 50 },
  { product: 'Ноутбук', category: 'Электроника', month: 'Март', price: 800, quantity: 10 }
];

function seasonalSalesAnalysis(sales) {
    return sales.reduce((saleAnalysis, { category, month, price, quantity }) => {
        // Инициализируем объект для текущей категории, если он еще не существует
        saleAnalysis[category] = saleAnalysis[category] || {};
        
        // Инициализируем объект для текущего месяца, если он еще не существует
        saleAnalysis[category][month] = saleAnalysis[category][month] || { totalRevenue: 0, totalQuantity: 0 };
        
        // Обновляем значения totalRevenue и totalQuantity
        saleAnalysis[category][month].totalRevenue += price * quantity;
        saleAnalysis[category][month].totalQuantity += quantity;

        return saleAnalysis;
    }, {});
}










const analysisResult = seasonalSalesAnalysis(salesData);
console.log(analysisResult);


// {
//   Одежда: {
//     Январь: { totalRevenue: 6500, totalQuantity: 180 },
//     Март: { totalRevenue: 0, totalQuantity: 0 }
//   },
//   Электроника: {
//     Февраль: { totalRevenue: 2500, totalQuantity: 5 },
//     Март: { totalRevenue: 8000, totalQuantity: 10 },
//     Январь: { totalRevenue: 0, totalQuantity: 0 }
//   },
//   Обувь: {
//     Февраль: { totalRevenue: 4000, totalQuantity: 50 },
//     Январь: { totalRevenue: 0, totalQuantity: 0 },
//     Март: { totalRevenue: 0, totalQuantity: 0 }
//   }
// }





