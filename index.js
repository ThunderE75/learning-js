// eventListener      Listen to specific events to create interactive webpages
//                  events: click, mouseover, mouseout.
//                  .addEventListener(event, callback)

const myBox = document.getElementById('myBox');
const myButton = document.getElementById('button');
// myBox.textContent=`hello`;


// Method 1
// function changeColor(event) {
//     // target = the element that is being clicked 
//     event.target.style.backgroundColor = 'tomato';
//     event.target.textContent = 'Ouch!';
// }
// myBox.addEventListener('click', changeColor)

// Method 2
myBox.addEventListener('click', event => {
    event.target.style.backgroundColor = 'tomato';
    event.target.textContent = 'Ouch!';
});

myBox.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'yellow';
    event.target.textContent = 'Ayy!';
});

myBox.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'lightgreen';
    event.target.textContent = 'Click Me!';
});

myButton.addEventListener('click', event => {
    event.target.style.backgroundColor = 'tomato';
    event.target.textContent = 'Ouch!';
});

myButton.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'yellow';
    event.target.textContent = 'Ayy!';
});

myButton.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'white';
    event.target.textContent = 'Click Me!';
});

