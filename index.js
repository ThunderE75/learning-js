// Inheritance      Allows a new class to inherit properties & methods
//                  from its parent class.
//                  Allows easy code reusability

class Animal {
    isAlive = true;
    eat(){
        console.log(`${this.name} is eating!`);
    }
    sleep(){
        console.log(`${this.name} is sleeping!`);
    }
}

class rabbit extends Animal {
    name = "rabbit";
}
class hawk extends Animal {
    name = "hawk";
}

const rabbit1 = new rabbit();
const hawk1 = new hawk();

console.log(rabbit1.name);
rabbit1.eat();
