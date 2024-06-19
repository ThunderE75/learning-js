// map :        Iterate over each element of the array and apply a function
//              Same as forEach but returns a new array,
//              so it needs to be stored in a variable
//              Element, Index, Array are provided, so you can use it as args
//              function(element, index, array){....}

let arr = [1, 2, 3, 4, 5];

let tripled = arr.map(triple);

function triple(element) {
    return element * 3;
}
console.log(tripled);
