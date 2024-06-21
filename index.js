// Digital clock
let display = document.getElementById("dis2");

function updateTime() {
    const clk = new Date();
    let hour = clk.getHours();
    hour = hour > 12 ? (hour -= 12) : hour;
    let meridian = hour > 12 ? "AM" : "PM";
    //hour = hour % 12 || 12;
    hour = hour.toString().padStart(2, 0);
    let mins = clk.getMinutes().toString().padStart(2, 0);
    let secs = clk.getSeconds().toString().padStart(2, 0);

    let finalDisplay = hour + ":" + mins + ":" + secs + " " + meridian;
    display.textContent = finalDisplay;
    setTimeout(updateTime, 1000);
}
updateTime();
