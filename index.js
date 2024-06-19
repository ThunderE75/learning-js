/*
    Rest Paraeater (...rest):   
        Packs multiple variables in one array
        useful when we need variable number of parameters in a function
        
*/

function fridge(...fruits) {    // Rest parameter
    console.log(...fruits);     // Spread Parameter
}

// when its used in a function parameter, its 'rest'
// When used with an array, its 'spread'


let food1 = "apple";
let food2 = "banana";
let food3 = "coconut";
let food4 = "dewberry";
let food5 = "pineapple";

fridge(food1, food2, food3, food4)