/* Callback hell  
        Situation in JS where callbacks are nested within another callbacks
        to the degree where the code is difficult to read.
        It's an old pattern to handle asynchronous operation
                Tasks 
                1 - Walk dog
                2 - Clean Kitchen
                3 - Take out trash
*/

function walkDog(callback) {
        setTimeout(() => {
                console.log(`You walked the dog! 🐕`);
                callback();
        }, 1500);
}

function cleanKitchen(callback) {
        setTimeout(() => {
                console.log(`You cleaned the kitchen! 🧹`);
                callback();
        }, 2000);
}

function takeoutTrash(callback) {
        setTimeout(() => {
                console.log(`You took the trash out! 🗑️`);
                callback();
        }, 2000);
}

// Example of callback hell !
walkDog(() => {
        cleanKitchen(() => {
                takeoutTrash(() => {
                        console.log('You completed all the task!');
                })
        })
});