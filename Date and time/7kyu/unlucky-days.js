// DESCRIPTION:
// Friday 13th or Black Friday is considered as unlucky day. 
// Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1


// Creating a new Date object every iteration is not best practice. 
// (Imagine if you have to do this for every day!)

// Since you only ever need one for this kata, you can pull 
// the Date object outside the for loop and instead use setMonth().

function unluckyDays1(year) {
    let unluckyDays = 0;
    let date = new Date(year, 0, 13);
    for (let i = 0; i < 12; i++) {
        date.setMonth(i);
        if (date.getDay() == 5){
            unluckyDays++;
        }
    }
    return unluckyDays;
}


console.log(unluckyDays1(2015));
