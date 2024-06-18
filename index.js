let dis1 = document.getElementById("dis1");

let arr = ["Apple", "Banana", "Coconut"]

console.log(arr.length);        // Size

arr.push('Pineapple');          // Adds at end
console.log(arr);
arr.pop();                      // Removes from end
console.log(arr);

arr.sort().reverse();


arr.unshift('Pineapple');       // Adds from front
console.log(arr);               
arr.shift();                    // Removes from front
console.log(arr);           

arr.sort();
console.log(arr);           

console.log(arr.indexOf('Banana'));

console.log(...arr);            // Spread Operator (...)
                                // unpacks an array


/* // BASICS
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(arr);
arr[4] = "Guava";

console.log(arr[3]);
console.log(arr[4]);

console.log(arr);
*/





// dis1.textContent = "Hello";