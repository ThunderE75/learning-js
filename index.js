//  Closure     Function inside Function (Nested Function)
//              The inside function has access to all variables in outer
//              Used in JS Frameworks : React, Angular, Vue

function outer() {
    let msg = "hello";
    function inner() {
        console.log(msg);
    }
    inner();
}
// inner();     // can't call inner function directly
outer();

// It's also useful to maintain state
function createCounter() {
    let count = 0;
    function increment() {
        count += 1;
        console.log(`Current count : ${count}`);
    }
    function getCount() {
        return count;
    }
    return { increment, getCount };
    // Returning the increment as object
    // So it can be accessed
}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());
