// Synchronous      Sequential execution of code; Blocks the flow until complete
// Asynchronous     Multiple operations happens concurrently; Doesn't block the flow until complete
//                  We can handle async code by : Callback. Promise, Async/Await

// Synchronous 
// console.log('Synchronous');
// console.log('Task 1');
// console.log('Task 2');
// console.log('Task 3');


// Asynchronous 
// console.log('Asynchronous');
// setTimeout(() => console.log('Task 1'), 2000)
// console.log('Task 2');
// console.log('Task 3');


function f1(callback) {
    console.log('Synchronized using callbacks');
    setTimeout(
        () => {
            console.log('Task A');
            callback();
        }, 2000)

}
function f2() {
    console.log('Task B');
}

f1(f2);
