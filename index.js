//  array of objects

let fruits = [
    { name: "Apple", color: "Red", price: "50" },
    { name: "Orange", color: "Orange", price: "60" },
    { name: "Banana", color: "Yellow", price: "30" },
    { name: "Guava", color: "Green", price: "40" },
];

// How to access it
console.log(fruits);
console.log(fruits[2].color);

// Pushing & Popping
fruits.push({ name: "Blueberry", color: "Blue", price: "70" });
console.log(fruits);

// fruits.push("Blueberry", 'blue', 90);
// This will mot work & will pass it at different index

// fruits.pop();
// console.log(fruits);

// Splicing
// console.log(fruits.splice(1,3));

// for Each
// fruits.forEach(fruit => console.log(fruit));
// fruits.forEach(fruit => console.log(fruit.color));

// map
const fruitNames = fruits.map((fruit) => fruit.name);
console.log(fruitNames);

// filter
const belowFifty = fruits.filter((fruit) => fruit.price <= 50);
console.log(belowFifty);

// reduce()

const mostExpensive = fruits.reduce((max, fruit) =>
    fruit.price > max.price ? fruit : max
);
console.log(mostExpensive);
