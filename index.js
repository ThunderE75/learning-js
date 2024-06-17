let s1 = "Thunder Emperor";
// let display = document.getElementById("display");
let dis1 = document.getElementById("dis1");
let dis2 = document.getElementById("dis2");

// Hard Coded indices
// dis1.textContent = s1.slice(0,7);
// dis1.textContent = s1.slice(8,15);
// dis1.textContent = s1.slice(8);
// dis1.textContent = s1.slice(-7);

// Dynamic Indices
dis1.textContent = s1.slice(0,s1.indexOf(' '));
dis2.textContent = s1.slice(s1.indexOf(' ')+1);

