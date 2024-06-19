// For each :   Iterate over each element of the array and apply a function
//              Element, Index, Array are provided, so you can use it as args
//              function(element, index, array){....}

let arr = [1, 2, 3, 4, 5];
arr.forEach(triple);

function display(element) {
    console.log(element);
}

function double(element) {
    element *= 2;
    display(element);
}

function triple(element, index, array) {
    // array[index] === element (just a different way to assess it)
    array[index] = element * 3;
    display(array[index]);
}
// display(array);
