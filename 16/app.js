"use strict";

const guestList = ["Mohammad Ali", "Babar Azam", "Arnold Schwarzeneggera"];

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `i am inviting you as my guest "${guestList[i]}" for having dinner with me.`
  );
}

console.log(`${guestList[1]} can't make it to the dinner due to some reasons.`);

guestList.splice(1, 1, "Shahid Afridi");

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `i am inviting you as my guest "${guestList[i]}" for having dinner with me.`
  );
}

console.log(`I have found a bigger dinner table.`);

guestList.unshift("Imran Khan");
guestList.splice(3, 0, "Sachin Tendulkar");
guestList.push("Saeed Anwar");

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `i am inviting you as my guest "${guestList[i]}" for having dinner with me.`
  );
}
