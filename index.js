// This         Refers to the current object 
//              object.property === this.property
//              Useful because when using a using a property inside 
//              the object, we don't need to use the identifier of 
//              the object, which might change. 

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    greet:function() {return `Hello, I am ${this.firstName}!`},
    // Doesn't work with arrow func. 
    // https://stackoverflow.com/questions/28798330/arrow-functions-and-this

}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
console.log(person1.greet());
