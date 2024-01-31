// У вас есть массив объектов bookSales, 
// содержащий информацию о продажах книг различных жанров за разные месяцы.
//  Каждый объект содержит данные о жанре книги, месяце, количестве проданных книг и общей выручке от продаж. 
//  Вам нужно написать функцию genreSalesAnalysis, 
//  которая анализирует продажи книг по жанрам и возвращает объект, содержащий следующую информацию:

// Для каждого жанра книг (уникальных жанров):
// Общее количество проданных книг.
// Общая выручка от продаж.


const bookSales = [
  { genre: 'Фантастика', month: 'Январь', sold: 100, revenue: 1000 },
  { genre: 'Фантастика', month: 'Февраль', sold: 150, revenue: 1500 },
  { genre: 'Детектив', month: 'Январь', sold: 80, revenue: 800 },
  { genre: 'Детектив', month: 'Февраль', sold: 120, revenue: 1200 }
];

function genreSalesAnalysis (booksales) {
   return booksales.reduce((saleAnalysis, {genre, sold, revenue}) => {
        saleAnalysis[genre] = (saleAnalysis[genre] || {totalSold: 0, totalRevenue: 0});
        saleAnalysis[genre].totalRevenue += revenue;
        saleAnalysis[genre].totalSold += sold;
        return saleAnalysis;
    }, {})
}


const analysisResult = genreSalesAnalysis(bookSales);
console.log(analysisResult);

// {
//   'Фантастика': { totalSold: 250, totalRevenue: 2500 },
//   'Детектив': { totalSold: 200, totalRevenue: 2000 }
// }
