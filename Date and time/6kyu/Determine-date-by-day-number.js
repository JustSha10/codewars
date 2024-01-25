// What date corresponds to the nth day of the year?
// The answer depends on whether the year is a leap year or not.

// Write a function that will help you determine the date 
// if you know the number of the day in the year, as well 
// as whether the year is a leap year or not.
// The function accepts the day number and a boolean value 
// isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
// Only valid combinations of a day number and isLeap will be tested.

// Examples:
// * With input `41, false` => return "February, 10"
// * With input `60, false` => return "March, 1


function getDay(day, isLeap){

    let monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    let dateLeap = new Date(2017 + isLeap, 0, day);
    return dateLeap.toLocaleString(`en`, {month: `long`}) +  `, ` + dateLeap.getDate();

}

console.log(getDay(60, false));

const date = new Date(2009, 10, 10);  // 2009-11-10
const month = date.toLocaleString('default', { month: 'long' });


// 'long' uses the full name of the month, 
// 'short' for the short name, and 'narrow' for a more minimal version, 
// such as the first letter in alphabetical languages.

// You can change the locale from browser's 'default' to any that you please 
// (e.g. 'en-us'), and it will use the right name for that language/country.

// With toLocaleStringapi you have to pass in the locale and options each time. 
// If you are going do use the same locale info and formatting options on multiple 
// different dates, you can use Intl.DateTimeFormat instead:

// const formatter = new Intl.DateTimeFormat('fr', { month: 'short' });
// const month1 = formatter.format(new Date());
// const month2 = formatter.format(new Date(2003, 5, 12));
// console.log(`${month1} and ${month2}`); // current month in
