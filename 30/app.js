"use strict";
const membersName = ["John", "Bob", "Mary", "admin", "Jane", "Mark"];

for (let i = 0; i < membersName.length; i++) {
  if (membersName[i] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${membersName[i]}, thank you for logging in again`);
  }
}
