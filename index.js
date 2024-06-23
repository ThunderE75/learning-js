// DOM Manipulation
// Overlooked chapters : 60 & 61
// Continuing from 62

// S1: Create the element
const newH1 = document.createElement("h1");

// S2: ADD Attributes & Properties 
newH1.textContent = `i love pizza`;
newH1.id = `newH1`;
newH1.style.color = `coral`;
newH1.style.textAlign = `center`;



// S3: Append elements to DOM
// document.body.append(newH1);  // Adds as the last child in the body
// document.body.prepend(newH1);  // Adds as the first child in the body
// document.getElementById('box1').append(newH1);      // To append it inside a box

//! NOT Working
// const box2 = document.getElementById("box2");
// // document.body.insertBefore(newElement,currentElement);
// box2.style.color = `green`;
// document.body.insertBefore(newH1, box2)     // Not working

//! NOT Working again
// // by using class + querySelectorAll
// const boxes =document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[2])
