//  date Objects
//

const date = new Date();
console.log(date);

// Date(year, month, day, hour, min, sec, ms)
// The Months are zero indexed, so 0 = Jan, 11 = Dec
const date1 = new Date(2024, 6, 21, 16, 56, 24);
console.log(date1);

const date2 = new Date("2024-06-21T16:57:49Z");
console.log(date2);

// we can also just use epoch time in seconds
const date3 = new Date(0);
console.log(date3);

// getters for Date object
const date4 = new Date();
console.log(date4.getFullYear());
console.log(date4.getMonth());
console.log(date4.getDate());
console.log(date4.getDay());
console.log(date4.getHours());
console.log(date4.getMinutes());
console.log(date4.getSeconds());
console.log(date4.getTime()); // Epoch time

// Setters for Date Object
const date5 = new Date();
date5.setFullYear(2020);
date5.setMonth(10); // 10 = november - zero indexed
date5.setDate(27); 
date5.setHours(17);
date5.setMinutes(5);
date5.setSeconds(32);

console.log(date5);
