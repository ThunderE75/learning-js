let display = document.getElementById("timer");
display.textContent = '00:00:00:00';
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        // display.textContent = 'hello';
        startTime = Date.now() - elapsedTime; // To continue a stopped timer
        isRunning = true;
        timer = setInterval(update, 10);
        // setInterval :    Repeatedly calls a function or executes a
        //                  code snippet, with a fixed time delay between
        //                  each call.
    }
}
function stop() {
    if (isRunning) {
        clearInterval(timer);   // tops the timer var started by setInterval;
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset() {
    // this stops the case when reset is pressed while running
    isRunning ? stop() : stop();
    timer = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '00:00:00:00';
}

function update() {
    // Current time = the global time rn
    // Elapsed time = the time that has passed till start time (displayed time)
    // Start Time   = the exact time when the timer was started
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    console.log(currentTime);
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    let secs = Math.floor(elapsedTime / (1000) % 60);
    let msec = Math.floor(elapsedTime % (1000) / 10);

    hours = String(hours).padStart(2, '0');
    mins = String(mins).padStart(2, '0');
    secs = String(secs).padStart(2, '0');
    msec = String(msec).padStart(2, '0');

    let displayedTime = `${hours}:${mins}:${secs}:${msec}`;
    display.textContent = displayedTime;
}
