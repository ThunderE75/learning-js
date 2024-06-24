/* NodeList
        Static collection of HTML Elements (id, class, tags)
        Can be created using querySelectorAll();
        Similar to an Array, but no function like map, filter, reduce
        but it does have the .forEach();
        NodeList won't update to automatically reflect changes 
*/


//To perform operation on all the elements of a nodelist

// let btnList = document.querySelectorAll('.btn');
/* btnList.forEach(element => {
    // console.log(element);
    element.style.backgroundColor = 'lightblue';
    element.textContent += ` ⭕`;
    });
    */


// To alter html properties based on mouse events   
/*
let btnList = document.querySelectorAll('.btn');
btnList.forEach(element => {
    element.addEventListener('click', event => {
        event.target.style.backgroundColor = `lightblue`;
    })
});

btnList.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'yellow';
    })
});

btnList.forEach(element => {
    element.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = 'white';
    })
});
*/

// Adding a new element in node list

let btnList = document.querySelectorAll('.btn');

// Step 1 : Create element
const newBtn = document.createElement('button')
// Step 2 : Add necessary Attributes
newBtn.textContent = 'Button 5';
// newBtn.innerHTML = ' class = "btn"';     // Not the proper way
newBtn.classList = 'btn';
// Step 3 : Append to the body
document.body.appendChild(newBtn);
// Step 4 : Append to Node list by re-initializing 
btnList = document.querySelectorAll('.btn');



// how to remove elements from the DOM & NodeList
btnList.forEach(element => {
    element.addEventListener('click', event => {
        event.target.remove();
        btnList = document.querySelectorAll('.btn');
    })
});

