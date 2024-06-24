// eventListener (Keyboard)     Listen to specific events to create interactive webpages
//                              events: keyup, keydown
//                              document.addEventListener(event, callback)

// const myBox = document.getElementById('myBox');

// To access the keys that are being pressed
// document.addEventListener('keydown', event => {
//     console.log(`Key down: ${event.key}`);
// });
// document.addEventListener('keyup', event => {
//     console.log(`Key up: ${event.key}`);
// });


// Changing attributes based on keys 
// document.addEventListener('keydown', event => {
//     myBox.style.backgroundColor = `coral`;
//     myBox.textContent = `😂`;
// });
// document.addEventListener('keyup', event => {
//     myBox.style.backgroundColor = `lightgreen`;
//     myBox.textContent = `😃`;
// });



const myBox = document.getElementById('myBox');
let x = 0;
let y = 0;
let movePosition = 10;

document.addEventListener('keydown', event => {
    if (event.key.startsWith('Arrow')) {
        myBox.style.backgroundColor = `coral`;
        event.preventDefault();     // Makes it so the screen doesn't scroll to follow the object
        switch (event.key) {
            case 'ArrowUp':
                y -= movePosition;
                myBox.textContent = `⬆`;
                break;
            case 'ArrowDown':
                y += movePosition;
                myBox.textContent = `⬇`;
                break;
            case 'ArrowLeft':
                x -= movePosition;
                myBox.textContent = `⬅️`;
                break;
            case 'ArrowRight':
                x += movePosition;
                myBox.textContent = `➡️`;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    } else {
        myBox.textContent = `⭕`;
        myBox.style.backgroundColor = `yellow`;
    }

});

document.addEventListener('keyup', event => {
    myBox.style.backgroundColor = `lightgreen`;
    myBox.textContent = `😃`;
});