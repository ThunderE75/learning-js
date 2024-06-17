let s1 = "Thunder Emperor";
let display = document.getElementById("display");
// let dis1 = document.getElementById("dis1");
// let dis2 = document.getElementById("dis2");

let input = window.prompt("Enter a Name");
input = input.trim().charAt(0).toUpperCase() + input.trim().slice(1).toLowerCase();

display.textContent = input; 
