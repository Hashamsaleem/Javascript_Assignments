"use strict";

const guestList = ["Mohammad Ali", "Babar Azam", "Arnold Schwarzeneggera"];

guestList.splice(1, 1, "Shahid Afridi");

guestList.unshift("Imran Khan");
guestList.splice(3, 0, "Sachin Tendulkar");
guestList.push("Saeed Anwar");

console.log(
  `Number of people that i invited for dinner are ${guestList.length}`
);
