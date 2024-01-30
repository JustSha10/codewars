// Допустим, у вас есть компания, 
// которая управляет рядом региональных складов. 
// Каждый склад имеет свой уникальный идентификатор и хранит информацию о товарах. 
// Каждый товар имеет свой уникальный идентификатор, наименование, количество и цену за единицу. 
// Необходимо разработать функцию, которая принимает на вход массив объектов, представляющих информацию о складах,
//  и возвращает общую стоимость товаров на всех складах.

const warehouses = [
    {
        id: "WH1",
        inventory: [
            { id: "item1", name: "Товар 1", quantity: 10, pricePerUnit: 5 },
            { id: "item2", name: "Товар 2", quantity: 20, pricePerUnit: 8 },
            { id: "item3", name: "Товар 3", quantity: 15, pricePerUnit: 12 }
        ]
    },
    {
        id: "WH2",
        inventory: [
            { id: "item4", name: "Товар 4", quantity: 30, pricePerUnit: 10 },
            { id: "item5", name: "Товар 5", quantity: 25, pricePerUnit: 6 }
        ]
    },
    {
        id: "WH3",
        inventory: [
            { id: "item6", name: "Товар 6", quantity: 5, pricePerUnit: 15 }
        ]
    }
];



function wareHouseSum(warehouseArr) { 
    let itemTotalPrice = (sum, item) => sum + item.quantity * item.pricePerUnit;

    return warehouseArr.reduce((total, warehouse) => {
        return total + warehouse.inventory.reduce(itemTotalPrice, 0);
    }, 0);
}




console.log(wareHouseSum(warehouses));