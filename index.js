//  Nested Objects      Objects inside Objects
//                      the assign them to variables in a different way
//                      [] = Array destructuring
//                      {} = Object destructuring

// const person1 = {
//     name: "Spongebob Squarepants",
//     age: 24,
//     isEmployed: true,
//     hobbies: ["Karate","Jelly Fishing","Cooking"],
//     address:{
//         house:"Pineapple under the sea",
//         city: "Bikini Bottom"
//     }
// };

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.isEmployed);
// console.log(person1.hobbies[1]);
// console.log(person1.address);
// console.log(person1.address.house);
// console.log(person1.address.city);

// console.log('');
// // To  loop through properties of a nested object
// for (const prop in person1.address) {
//     console.log(person1.address[prop]);
// }

// YT Link: https://youtu.be/lfmg-EJ8gm4?t=22477

class person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address {
    constructor(house, city) {
        this.house = house;
        this.city = city;
    }
}

const person1 = new person("Spongebob", 24, "Pineapple", "Bikini Bottom");
console.log(person1.name);
console.log(person1.age);
console.log(person1.address.house);
console.log(person1.address.city);
