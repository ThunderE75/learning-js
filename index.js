// User Input: Prompt Method

// let username;
// username = window.prompt("What's your username?");
// console.log(username);
// document.getElementById("p1").textContent = `Hello, ${username}!`;


// User Input: Textbox Method

let username;
document.getElementById("submitButton").onclick = function() {
    username = document.getElementById("myInput").value;
    console.log(username);
    document.getElementById("p1").textContent = `Hello, ${username}!`;
}