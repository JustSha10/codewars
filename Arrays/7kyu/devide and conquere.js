// Given a mixed array of number and string representations 
// of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(arr){
    return arr.reduce((sum, element) => {
        if (typeof(element) == "number") return sum + element;
        if (typeof(element) == "string") return sum - element;
    }, 0)
}

console.log(divCon([9, 3, '7', '3']));