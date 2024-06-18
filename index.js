let ctf = document.getElementById("ctf");
let ftc = document.getElementById("ftc");
let dis = document.getElementById("dis1");
let result;

function convert() {
    let data = document.getElementById("txtbox").value;
    if (ctf.checked) {
        result = (data * 9) / 5 + 32;
        dis.textContent = result.toFixed(2) + "°F";
    } else if (ftc.checked) {
        result = (data - 32) * (5 / 9);
        dis.textContent = result.toFixed(2) + "°C";
    } else dis.textContent = "Please select a unit.";
}
