// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
    let nArr = n.toString().split(``);
    if (isFinite(nArr[0])) {
        return parseInt(nArr.reverse().join(``));
    }
    return parseInt(`-` + nArr.slice(1).reverse().join(``));
}

console.log(reverseNumber(-123));


function reverseNumber1(n) {
    let isNegative = n < 0;  
    let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
    let result = Number(reverseAsString);
    
    return isNegative ? -result : result;
  }


  function reverseNumber2(n) {
    return Math.sign(n) * Math.abs(n)
        .toString()
        .split``
      .reverse()
      .join``;
  }