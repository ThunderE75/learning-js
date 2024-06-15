let display = document.getElementById("display");
let btnDec = document.getElementById("decrement");
let btnReset = document.getElementById("reset");
let btnInc = document.getElementById("increment");

let count = 0;

btnDec.onclick = function () {
  count--;
  display.textContent = count;
};

btnReset.onclick = function () {
  display.textContent = 0;
};

btnInc.onclick = function () {
  count++;
  display.textContent = count;
};
