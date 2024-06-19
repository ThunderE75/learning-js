// Function Expression      A way to define a function as a value or variable
//                          Used when we only need to use that function few times,
//                          Prevents polluting the global namespace

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Normal Way 
// ################################
let result1 = arr.map(square);
console.log(result1);

function square(element) {
    return Math.pow(element,2);
}

// The Function Expression way
// ################################
let result2 = arr.map(function(element) {
    return Math.pow(element,2);
});
console.log(result2);



// Normal function
function square(element) {
    return Math.pow(element,2);
}

// Function Expression
//  - no name needed for function
//  - instead of saving it as a variable, just pass it as is
let sqr = function(element) {
    return Math.pow(element,2);
}
