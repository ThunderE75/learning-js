// filter :     Create a mew array by filtering them by using callback

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenEle = arr.filter(isEven);
console.log(evenEle);

function isEven(element) {
    return element % 2 === 0;
}
