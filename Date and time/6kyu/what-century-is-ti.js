
// DESCRIPTION:
// Return the century of the input year. 
// The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"


function whatCentury(year) {
    var century = Math.ceil(year / 100);
    if (century > 10 && century < 20) return century + "th";
    switch (century % 10) {
      case 1: return century + "st";
      case 2: return century + "nd";
      case 3: return century + "rd";
      default: return century + "th";
    }
  }