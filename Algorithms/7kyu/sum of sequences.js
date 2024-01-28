// n the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits 
// found within the number given. The number will be passed in as a string of only digits. 
// It should return a five digit integer. The number passed may be as large as 1000 digits.


function solution(digits){
    let splited = `${digits}`.split(``);
    let arrOfMax = [];
    let maxDigit = Math.max(...splited);
    splited.forEach((number, index) => {
        if (number == maxDigit && splited.length > 10) {
            arrOfMax.push(splited.slice(index, index + 5).join(``));
        }
    }); 
    return Math.max(...arrOfMax);
}


function solution1(digits) {
    let result = 0;
    for (let index = 0; index < digits.length; index++) {
        let str = ``;
        for (let index2 = index; index2 < index + 5; index2++) {
            str += digits[index2]
        }
        if (Number(str) > result) {
            result = Number(str)
        }
    }
    return result;
}


function solution2(digits){
    let s = [];
    for (let i = 0; i < digits.length - 4; i++){
        s.push(digits.substr(i,5));
    };
    return Math.max(...s);
}



console.log(solution1(567985349876534985638));