// Создайте функцию конструктора Inventory, которая будет создавать объекты инвентаря для управления товарами на складе.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод addItem(name, quantity), который добавляет товар на склад. 
// Метод должен принимать название товара name и количество quantity.

function Inventory() {
    this.items = {};

    this.addItem = function(name, quantity) {
        this.items[name] = (this.items[name] || 0) + quantity;
    };

    this.removeItem = function(name, quantity) {
        if (!this.items[name]) {
            console.log("Item not found in inventory.");
            return;
        }
        if (this.items[name] < quantity) {
            console.log("Not enough items in inventory.");
            return;
        }
        this.items[name] -= quantity;
    };
}


let store = new Inventory();

console.log(store);
store.addItem("Apples", 10);
store.addItem("Bananas", 20);
// Затем добавьте метод removeItem(name, quantity), который удаляет товар с склада. 
// Метод должен принимать название товара name и количество quantity.

store.removeItem("Apples", 5); // Удаляем 5 яблок со склада

// Для данной задачи необходимо учитывать наличие товара на складе и корректно обрабатывать случаи, 
// когда количество товара для удаления превышает количество доступного товара.