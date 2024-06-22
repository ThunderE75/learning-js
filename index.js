// ES6 Modules      External files that contains reusable code

// we will use object destructuring to get all the variables 
// & functions that we wanna use from the module
// use the import keyword 
import { PI, getCircumference, getArea } from './mathUtils.js'

console.log(PI);
console.log(`${getCircumference(10).toFixed(2)}cm`);
console.log(`${getArea(10).toFixed(2)}cm^2`);

