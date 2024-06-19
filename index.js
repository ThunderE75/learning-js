// .reduce()    Reduce the elements of am array into a single value
//              After first iteration, the returned value is passed 
//              as the first argument in the next iteration 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = arr.reduce(sum);
console.log(result);

function sum(accumulator, current) {
    return accumulator + current;
}
