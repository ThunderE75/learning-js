const MIN = 50;
const MAX = 100;
let ans;
// ans = Math.trunc(Math.random()*100);

let btn = document.getElementById("rand");
let dis = document.getElementById("display");

btn.onclick = function(){
  ans = Math.floor(Math.random() * (MAX - MIN) ) + MIN;
  dis.textContent = ans;
}


