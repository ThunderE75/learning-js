let display1 = document.getElementById("dis1");
let display2 = document.getElementById("dis2");

let checkbox = document.getElementById("myCheckbox");

let visa = document.getElementById("visaBtn");
let mc = document.getElementById("mcBtn");
let rupay = document.getElementById("rupayBtn");

let submit = document.getElementById("subBtn");

submit.onclick = function () {
    if (checkbox.checked) {
        display1.textContent = "You are subscribed!";
    } else display1.textContent = "You are not subscribed!";

    if (visa.checked) {
        display2.textContent = "You have Visa";
    } else if (mc.checked) {
        display2.textContent = "You have Mastercard";
    } else if (rupay.checked) {
        display2.textContent = "You have Rupay";
    } else display2.textContent = "You don't have a card";
};
