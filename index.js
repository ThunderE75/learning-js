/*  classList

    .add()      :   Adds classes
    .remove()   :   Removes class
    .toggle()   :   remove if present, add if not
    .replace()  :   (old-class, new-class)
    .contains() :   Returns boolean
*/

let btn = document.getElementById('btn');
btn.classList.add("active");

btn.addEventListener('mouseover', event => {
    // btn.classList.add("hover");  // don't directly access, use event target
    event.target.classList.add("hover");
})
btn.addEventListener('mouseout', event => {
    event.target.classList.remove("hover");
})
