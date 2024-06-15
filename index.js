let students = 21;

// students = students + 1;
// students = students - 1;
// students = students / 3;
// students = students * 3;
students = students ** 2;  // ** is exponent
extraStudents = students % 3;


console.log(students);
console.log(extraStudents);

// This also works.

// students += 1;
// students -= 1;
// students *= 1;
// students /= 1;
// students **= 1;
// students %= 1;

// Also works.
students++;
students--;


// Operator Precedence 
/* 
    parenthesis
    exponent
    Multiply, Divide, Modulus
    Addition, Subtraction
 */

let r1 = 1+2*3+4**2

console.log(r1);
