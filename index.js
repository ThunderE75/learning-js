// Objects      A collection of properties & methods 
//              object = {key:value,
//                        function(),} 
//              They can be invoked using dot notation

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    greet:()=>{return "Hello, I am Spongebob!"}
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    greet:()=>{return "Hi, i'm Patrick!"}
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
console.log(person1.greet());

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
console.log(person2.greet());