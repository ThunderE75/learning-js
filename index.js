/* Promise 
        An object that manages asynchronous operation 
        asynchronous operation - An operation that can take undermined amount of time  

        Wrap a promise object around {asynchronous code}
        - Promises to return a value

        - PENDING -> RESOLVED or REJECTED
        - new Promise((resolved, rejected) => {asynchronous code})

                Tasks 
                1 - Walk dog
                2 - Clean Kitchen
                3 - Take out trash
*/
const dogWalked = true;
const kitchenCleaned = false;
const tookTrashOut = true;


function walkDog() {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        dogWalked ? resolve(`🟢 You walked the dog! 🐕`) : reject(`⭕ You didn't walk the dog! 🐕`);
                        // if (dogWalked) {
                        //         resolve(`🟢 You walked the dog! 🐕`);
                        // } else {
                        //         reject(`⭕ You didn't walk the dog! 🐕`);
                        // }
                }, 1500);
        });
}

function cleanKitchen() {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        kitchenCleaned ? resolve(`🟢 You cleaned the kitchen! 🧹`) : reject(`⭕ You didn't clean the kitchen! 🧹`);
                }, 2000);
        });

}

function takeoutTrash() {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        tookTrashOut ? resolve(`🟢 You took the trash out! 🗑️`) : reject(`⭕ You didn't take the trash out! 🗑️`);
                }, 2000);
        });
}

// Promise using method chaining
// walkDog().then(value => console.log(value));   // Only for executing the 1st task
walkDog().then(value => { console.log(value); return cleanKitchen() })
        .then(value => { console.log(value); return takeoutTrash() })
        .then(value => { console.log(value); console.log(`All task Completed!`); })
        .catch(error => console.error(error));