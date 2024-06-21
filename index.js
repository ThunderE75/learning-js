// Super    Keyword used to access properties of parent class
//          We can call the constructor of the parent class 
//          this = this object
//          super = the parent


class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}


const rabbit1 = new rabbit("Bugs", 5, 25);
const hawk1 = new hawk("hawksnest", 4, 43);

console.log(rabbit1.name);
console.log(rabbit1.age);
console.log(rabbit1.runSpeed);