"use strict";

const currentUsers = ["Ali", "Zain", "Malik", "Jibran", "Moiz"];

const newUsers = ["Jawwad", "Babar", "Sharjeel", "Ali", "Malik"];

for (let i = 0; i < newUsers.length; i++) {
  currentUsers[i] = currentUsers[i].toLowerCase();
  newUsers[i] = newUsers[i].toLowerCase();
  if (currentUsers.includes(newUsers[i])) {
    console.log(newUsers[i] + " Username already taken.Enter another username");
  } else {
    console.log(newUsers[i] + " Username is available");
  }
}
