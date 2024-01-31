// У вас есть массив объектов salesData, содержащий информацию о продажах различных товаров в разные периоды времени.
//  Каждый объект представляет собой данные о продажах за определенный месяц, и включает в себя месяц, 
//  товар, категорию товара, цену за единицу, количество проданных единиц и общую выручку от продаж. 
//  Вам нужно написать функцию salesAnalysisByCategory, которая принимает этот 
//  массив данных и возвращает объект, содержащий анализ продаж по категориям:

// Общую выручку, общее количество проданных единиц и среднюю цену продажи товара для каждой категории товара.

const salesData = [
  { month: 'Январь', product: 'Футболка', category: 'Одежда', price: 15, quantity: 100, revenue: 1500 },
  { month: 'Январь', product: 'Джинсы', category: 'Одежда', price: 50, quantity: 80, revenue: 4000 },
  { month: 'Январь', product: 'Телевизор', category: 'Электроника', price: 500, quantity: 5, revenue: 2500 },
  { month: 'Февраль', product: 'Кроссовки', category: 'Обувь', price: 80, quantity: 50, revenue: 4000 },
  { month: 'Февраль', product: 'Ноутбук', category: 'Электроника', price: 800, quantity: 10, revenue: 8000 }
];

function salesAnalysisByCategory (sales) {
    return sales.reduce((analysData, { category, quantity, revenue}) => {
        if(!analysData[category]) {
            analysData[category] = { totalRevenue: revenue, totalQuantity: quantity }
        } else {
                analysData[category].totalRevenue += revenue;
                analysData[category].totalQuantity += quantity 
            }
            analysData[category].averagePrice = analysData[category].totalRevenue / analysData[category].totalQuantity;
            return analysData;
    }, {})
    
}



const analysisResult = salesAnalysisByCategory(salesData);
console.log(analysisResult);

// {
//   Одежда: { totalRevenue: 5500, totalQuantity: 180, averagePrice: 33.333333333333336 },
//   Электроника: { totalRevenue: 10500, totalQuantity: 15, averagePrice: 700 },
//   Обувь: { totalRevenue: 4000, totalQuantity: 50, averagePrice: 80 }
// }