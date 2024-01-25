// DESCRIPTION:
// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time 
// (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

// You will have to define a function, which will be given an hour 
// (always in the range of 1 to 12, inclusive), a minute 
// (always in the range of 0 to 59, inclusive), and a period (either a.m. or p.m.) as input.

// Your task is to return a four-digit string that encodes that time in 24-hour time.


function to24hourtime(hour, minute, period) {
    if (period === 'pm'){
      return `${hour < 12 ? hour+12 : hour}${minute >= 10 ? minute : '0'+minute}`
    } else if (period === 'am') {
       if (hour === 12) return `00${minute >= 10 ? minute : '0'+minute}`
       else return `${hour >= 10 ? hour : '0'+hour}${minute >= 10 ? minute : '0'+minute}`      
    }
  }


console.log (to24hourtime(2, 2, `am`));