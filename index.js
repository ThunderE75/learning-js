let btn = document.getElementById("btn");
let display = document.getElementById("display");

btn.onclick = function () {
    let age = Number(document.getElementById("input").value);

    if (age >= 60) {
        display.textContent = "You are too old for this ride";
    } else if (age == 0) {
        display.textContent = "You were just born, you can't ride";
    } else if (age < 0) {
        display.textContent = "Please enter correct age!";
    } else if (age <= 12) {
        display.textContent = "You are too young, you can't ride";
    } else display.textContent = "You go on this ride";
};
