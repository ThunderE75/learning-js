// Setter   A special method that makes a property writeable.
// Getter   A special method that makes a property Readable.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // _varName = it means that it's an internal variable &
    // others should not access it directly, but you can

    set width(inputWidth) {
        if (inputWidth > 0) {
            this._width = inputWidth;
        } else {
            console.error("Width should be positive.");
        }
    }

    set height(inputHeight) {
        if (inputHeight > 0) {
            this._height = inputHeight;
        } else {
            console.error("Height should be positive.");
        }
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get area() {
        return this._height * this._width;
    }
}

const rect1 = new Rectangle(10, 20);

// rect1.height=-5;
// rect1._height=-5;

console.log(rect1.width);
console.log(rect1.height);
console.log(rect1.area);

// const rect2 = new Rectangle(-6900, "Pizza"); // Shouldn't be possible
// console.log(rect2.width);
// console.log(rect2.height);
