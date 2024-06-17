const MIN = 1;
const MAX = 100;
let rand = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let attempts = 0;
let guess;
let running = true;

while (running) {
    // window.alert(`DEBUGGING: Random Number = ${rand}`)
    guess = window.prompt(`Attempt: ${attempts}   Enter a guess between ${MIN} - ${MAX}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert(`${guess} is mot a number, please enter a valid number.`);
    } else if (guess < MIN || guess > MAX) {
        window.alert(`Your guess is out of bounds!`);
    } else {
        attempts++;
        if (guess > rand) {
            window.alert(`Your guess too high!`);
        } else if (guess < rand) {
            window.alert(`Your guess too low!`);
        } else if (guess == rand) {
            window.alert(
                `You guessed the correct number (${rand}) in ${attempts} attempts!`
            );
            running = false;
        }
    }
}
