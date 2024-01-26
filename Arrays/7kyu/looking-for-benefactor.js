// The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. 
// The association is funded through financial donations from generous benefactors. 
// John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] 
// He wants to know how much the next benefactor should give to the association so 
// that the average of the first n + 1 donations should reach an average of 30. 
// After doing the math he found 149. He thinks that he could have made a mistake.

// if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

// Could you help him?

// Task
// The function new_avg(arr, navg) should return the expected donation 
// (rounded up to the next integer) that will permit to reach the average navg.

// Notes:
// all donations and navg are numbers (integers or floats), arr can be empty.
// See examples below and "Sample Tests" to see which return is to be done.
// new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
// 
// should raise an error (ValueError or invalid_argument or argument-error or DomainError or ... ) 
// or return `-1` or ERROR or Nothing or None depending on the language.

let newArr = [14, 30, 5, 7, 9, 11, 15];

function newAvg(arr, newavg) {
    let lastDonation = newavg * (arr.length + 1)  - arr.reduce((sum, number) => sum + number, 0);
    if (lastDonation < 0) {
        return -1;
    }
    return Math.ceil(lastDonation);
}

console.log(newAvg(newArr, 2));
