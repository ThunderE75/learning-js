/* Async / Await 
    Async    : makes a function return a promise          
    Await    : makes an async function wait for a promise
      
    Allows you to write asynchronous code in a synchronous manner
    Async doesn't have resolve or reject parameter
    Everything after await is placed in an event queue    

*/

function walkDog() {
        const dogWalked = true;
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
        const kitchenCleaned = true;
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        kitchenCleaned ? resolve(`🟢 You cleaned the kitchen! 🧹`) : reject(`⭕ You didn't clean the kitchen! 🧹`);
                }, 2000);
        });

}

function takeoutTrash() {
        const tookTrashOut = true;
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        tookTrashOut ? resolve(`🟢 You took the trash out! 🗑️`) : reject(`⭕ You didn't take the trash out! 🗑️`);
                }, 2000);
        });
}

async function doTasks() {
        try {
                console.log(await walkDog());
                console.log(await cleanKitchen());
                console.log(await takeoutTrash());
                console.log(`You finished all the task.`);
        } catch (error) {
                console.error(error);
        }
}

doTasks();