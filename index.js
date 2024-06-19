// Callbacks :  a function that is passed as an argument to another function

// 03: Example
sum(5, 9, display);
function sum(x, y, callback) {
    let result = x + y;
    callback(result);
}
function display(msg) {
    console.log(msg);
}

// 02: Callbacks

// hello(goodbye);             // <-- Pass the func name as args, mo brackets
// function hello(Callback) {  // store it as a callback
//     console.log("Hello");
//     Callback();             // call the callback again at the end of the program
// }
// function goodbye() {
//     console.log("Bye");
// }

// 01: The Problem //

// hello();
// goodbye();

// function hello() {
//     setTimeout(function(){console.log("Hello");}, 2000);
// }
// function goodbye() {
//     console.log("Bye");
// }
