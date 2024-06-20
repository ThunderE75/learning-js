// Static   This keyword defines property & func. of a class
//          itself rather than the property of objects
//          Basically, you can access that property without
//          making an object of that class

class mathUtils {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

//  No need to make object of that class
//  const obj = new mathUtils();

console.log(mathUtils.PI); // using it directly
console.log(mathUtils.getDiameter(10));
console.log(mathUtils.getCircumference(10).toFixed(2));
console.log(mathUtils.getArea(10).toFixed(2));
