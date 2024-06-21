//  Destructuring       A way extract value from arrays & objects
//                      the assign them to variables in a different way
//                      [] = Array destructuring
//                      {} = Object destructuring

// Example 1 : Swap variables
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b);

// Example 2 : Swap elements of array
let numbers = ["zero", "one", "two", "three", "four", "five"];
[numbers[1], numbers[3]] = [numbers[3], numbers[1]];
console.log(numbers);

// Example 3 : Extract elements of array
let colors = ["red", "green", "blue", "yellow", "black", "white"];
const [primaryOne, primaryTwo, primaryThree, ...otherColors] = colors;
console.log(primaryOne, primaryTwo, primaryThree);
console.log(otherColors);

// Example 4 : Object destructuring
const person1 = {
    fName: "Spongebob",
    lName: "Squarepants",
    age: 24,
    job: "Cook",
};
const person2 = {
    fName: "Patrick",
    lName: "Star",
    age: 26,
};

// const { fName, lName, age, job = "Unemployed" } = person1;
const { fName, lName, age, job = "Unemployed" } = person2;      
// here 'unemployed is a default value incase the property doesn't exist'
console.log(fName, lName, age, job);

// Example 5 : Destructuring in function parameter
function displayPerson({first,last,age,job='Unemployed'}) {
    console.log(`First Name: ${first}`);
    console.log(`Last Name: ${last}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}
displayPerson(person1);
displayPerson(person2);