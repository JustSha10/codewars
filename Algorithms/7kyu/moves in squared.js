// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
//  hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
// or printed:

// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop 
// efgh     hgfe     |efgh     ijkl 
// ijkl     lkji     |ijkl     efgh 
// mnop     ponm     |mnop     abcd 
// Task:
// Write these two functions
// and

// high-order function oper(fct, s) where

// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

// Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

// function vertMirror(strng) {
//     let arr = [];
//     let separator = '\n';
//     return strng.split(separator).map(string => string.split(``).reverse().join(``)).join(separator)
// }
// function horMirror(strng) {
//     let arr = [];
//     let separator = '\n';
//     return strng.split(separator).reverse().join(separator);
// }
// function oper(fct, s) {
//     return fct(s);
// }





function vertMirror1(strng) {
    return strng.split(this.separator).map(string => string.split(``).reverse().join(``)).join(this.separator)
}

function horMirror1(strng) {
    return strng.split(this.separator).reverse().join(this.separator);
}
  
  function oper1(fct, s) {
    let separator = '\n';
    return fct.call({ separator }, s);
}
  
  console.log(oper1(horMirror1,"abcd\nefgh\nijkl\nmnop"));