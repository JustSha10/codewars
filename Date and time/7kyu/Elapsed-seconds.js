// Complete the function so that it returns the number 
// of seconds that have elapsed between the start and end times given.

// The start/end times are given as Date (JS/CoffeeScript), 



function elapsedSeconds(startDate, endDate) {
    return (startDate.getTime() - endDate.getTime() )/1000
}
