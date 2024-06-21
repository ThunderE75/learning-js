//  Sort()      use to sort elements of an array in place
//              Sort elements as a string in  lexicographic fashion
//

let fruits = ["Pineapple", "Guava", "Apple", "Blueberry", "Banana"];
let nums = [5, 3, 1, 8, 10, 6, 4];

fruits.sort();
nums.sort();

console.log(fruits);
console.log(nums); // due to lexicographic sort, 1 is next to 10.

// we can use functions inside sort
// we can use this to fix lexicographic sort
nums = [5, 3, 1, 8, 10, 6, 4];

nums.sort((a, b) => a - b);     // a referst to 1st element & b to 2nd
// nums.sort((a, b) => b - a);  // To sort in reverse
console.log(nums);

// We can also sort array of objects
let persons = [
    { name: "Spongebob", age: 30, salary: 100 },
    { name: "Mr Krabs", age: 65, salary: 1000 },
    { name: "Patrick", age: 35, salary: 0 },
    { name: "Squidward", age: 56, salary: 120 },
];

console.log(persons);
persons.sort((a, b) => a.salary - b.salary);
console.log(persons);

persons.sort((a, b) => a.name - b.name); // doesn't work with strings
// We use .localCompare() for lexicographic string sort
persons.sort((a, b) => a.name.localeCompare(b.name)); 