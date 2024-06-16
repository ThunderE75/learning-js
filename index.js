/* 
Ternary operator:	 	Shortcut of if & else
										Condition ? codeIfTrue : codeIfFalse
*/

let age = 26;
let display = document.getElementById("display");

let message = age > 18 ? "You are an adult" : "You are a Minor";

display.textContent = message;
