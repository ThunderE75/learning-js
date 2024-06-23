let display = document.getElementById("input");
setTimeout(()=>{display.value = ``},2000);

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = `Cleared!`;
    setTimeout(() => { display.value = ``; }, 500)
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'ERR0R~';
    }
}