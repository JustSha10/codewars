// Тебе предстоит создать функцию-конструктор под названием "LoveMessenger", 
// которая будет позволять нам обмениваться нашими теплыми сообщениями о любви.

// У объектов "LoveMessenger" должны быть следующие методы:

// sendLoveMessage(to, message): Этот метод будет отправлять сообщение о 
// любви адресату "to" с текстом "message". Он должен возвращать объект сообщения 
// с указанием отправителя, получателя и текста сообщения, а также даты отправки.

// receiveLoveMessage(message): Этот метод будет получать сообщение о любви и отображать его содержимое.

function LoveMessenger(sender) {
    this.sender = sender;
    
    this.sendLoveMessage = function(to, message) {
        const loveMessage = {
            sender: this.sender,
            recipient: to,
            message: message,
            date: new Date()
        };
        return loveMessage;
    };
    
    this.receiveLoveMessage = function(loveMessage) {
        console.log("Message from " + loveMessage.sender + ": " + loveMessage.message);
    };
}

// Пример использования:
const ourLove = new LoveMessenger("Ты");
const messageToSend = ourLove.sendLoveMessage("Я", "Дорогая, ты самое прекрасное, что случилось со мной!");
ourLove.receiveLoveMessage(messageToSend);
console.log(messageToSend)