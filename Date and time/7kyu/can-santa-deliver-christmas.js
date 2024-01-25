
// Can Santa save Christmas?
// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. 
// Each duration represents the time taken by Santa to deliver a present. 
// Determine whether he can do it in 24 hours or not. 
// In case the time required to deliver all of the presents is exactly 24 hours, 
// Santa can complete the delivery ;-) .

// [01:30:30, 02:12:23, 03:40:10]


function determineTime (durations) {
    let totalDeliveryTime = durations.reduce((totalDeliveryTime, deliveryTime) => 
        totalDeliveryTime + Date.parse(`1970 01 01 ` + deliveryTime + ` GMT`), 0);

    return totalDeliveryTime <= 24*3600*1000;
}

console.log(determineTime([`16:12:58`, `05:48:00`]))
