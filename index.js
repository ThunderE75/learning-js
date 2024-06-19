const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChar = "!@#$%^&*()-=";

let size=24;
let includeLower = true;
let includeUpper = true;
let includeNumbers = true;
let includeSpecial = true;

let possible ="";
possible += includeLower ? lowerCase : "";
possible += includeSpecial ? specialChar : "";
possible += includeNumbers ? numbers : "";
possible += includeUpper ? upperCase : "";
function generatePassword(size,possible) {
    let max = possible.length-1;
    let password="";
    for (let i = 0; i < size; i++) {
        let rand = Math.floor(Math.random()* (max));
        // console.log(i, rand, possible[rand]);
        password+=possible[rand];
    }
    console.log(`Generated Password: ${password}`);
    // return password;
}
generatePassword(size,possible)