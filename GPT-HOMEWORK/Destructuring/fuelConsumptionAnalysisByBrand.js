// У вас есть массив объектов fuelData, 
// содержащий информацию о расходе топлива различных марок автомобилей в разные месяцы. 
// Каждый объект содержит данные о марке автомобиля, месяце, пройденном расстоянии и 
// объеме израсходованного топлива. Вам нужно написать функцию fuelConsumptionAnalysisByBrand, 
// которая анализирует расход топлива по маркам автомобилей и возвращает объект, содержащий следующую информацию:

// Для каждой марки автомобилей (уникальных марок):
// Средний расход топлива за все месяцы.

const fuelData = [
  { brand: 'Toyota', month: 'Январь', distance: 1500, fuelConsumed: 150 },
  { brand: 'Toyota', month: 'Февраль', distance: 1700, fuelConsumed: 160 },
  { brand: 'BMW', month: 'Январь', distance: 1400, fuelConsumed: 40 },
  { brand: 'BMW', month: 'Февраль', distance: 1550, fuelConsumed: 55 }
];


function fuelConsumptionAnalysisByBrand(fuelData) {
  // Создаем объект для хранения суммы пройденного расстояния и объема израсходованного топлива для каждой марки
  const consumeInfo = fuelData.reduce((consumeInfo, { brand, distance, fuelConsumed }) => {
      consumeInfo[brand] = consumeInfo[brand] || { totalDistance: 0, totalFuelConsumed: 0 };
      consumeInfo[brand].totalDistance += distance;
      consumeInfo[brand].totalFuelConsumed += fuelConsumed;
      return consumeInfo;
  }, {});

  // Вычисляем средний расход топлива на километр для каждой марки
  const averageConsumptionByBrand = {};
  for (const brand in consumeInfo) {
      ({ totalDistance, totalFuelConsumed } = consumeInfo[brand]);
      averageConsumptionByBrand[brand] = totalFuelConsumed / totalDistance;
  }

  return averageConsumptionByBrand;
}

const analysisResult1 = fuelConsumptionAnalysisByBrand(fuelData);

console.log(analysisResult1);

// {
//   Toyota: 0.1,
//   BMW: 0.10555555555555556
// }