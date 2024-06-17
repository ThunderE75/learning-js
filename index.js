let s1 = "Thunderized";
let display = document.getElementById("display");


// display.textContent = s1.charAt(0);
// display.textContent = s1.indexOf('e');
// display.textContent = s1.lastIndexOf('e');
// display.textContent = s1.length;

let s2 = "   Thunder Emperor   ";
// display.textContent = s2.trim();
// display.textContent = s2.toUpperCase();
// display.textContent = s2.toLowerCase();
// display.textContent = s2.repeat(3);

let s3 = "Thunder Emperor";
// display.textContent = s2.startsWith('T');       // Returns Boolean
// display.textContent = s2.endsWith('T');       // Returns Boolean
// display.textContent = s2.includes('Emperor');       // Returns Boolean

let pNum = '123-456-7890';
// display.textContent = pNum.replace('-','');
// display.textContent = pNum.replaceAll('-','');
// display.textContent = pNum.padStart(15,'x');
display.textContent = pNum.padEnd(15,'x');