let input = document.getElementById("num");
let rollResult = document.getElementById("rollResult");
let rollImages = document.getElementById("rollImages");
const MIN = 1;
const MAX = 6;

function rollDice(params) {
    let ROLL = input.value;
    let results = [];
    let images = [];
    // console.log(MAX);
    for (let i = 0; i < ROLL; i++) {
        let rand = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
        results[i] = rand;
        images[i]= `<image src='./Resources/Images/Dice/Dice-${rand}.png' alt='dice-${rand}'>`;
    }
    rollResult.textContent = `Dice: ${results}`;
    rollImages.innerHTML = images.join("");
    console.log(results);
}