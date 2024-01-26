// Your task is to rewrite your own map function which takes :

// an array
// a predicate function func which returns true (boolean) with even arguments
// For example :

// map([1,2,3,4], func)
// produces
// [ false, true, false, true ]  
// The code also has to perform input validation, return :

// 'given argument is not a function' if func is not a function
// 'array should contain only numbers' if any elements are not numbers

let func = function(item){ 
    return (item & 1) == 0;
}

function map(arr, somefunction){
    if (!(typeof somefunction == 'function')) 
        return 'given argument is not a function';

    if (arr.every(isFinite)) 
        return arr.map(somefunction);

    return 'array should contain only numbers';
    }
    
console.log(map([1, 2, 3], func));