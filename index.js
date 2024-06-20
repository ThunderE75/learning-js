// Class      A more structured way to make instance of an objects
//            Inside class, when making a constructor, we use the
//            constructor keyword, amd for func. we don't need to
//            write the function keyword.

const salesTax = 0.05;

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTotal(salesTax) {
        return this.price + this.price * salesTax;
    }
}

// Making an instance of a product
const product1 = new Product("Shirt", 19.95);
product1.display();
console.log(product1.calculateTotal(salesTax).toFixed(2));