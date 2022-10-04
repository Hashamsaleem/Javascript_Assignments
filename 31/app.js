"use strict";
const membersName = ["John", "Bob", "Mary", "admin", "Jane", "Mark"];

for (let i = 0; i < membersName.length; i++) {
  if (membersName[i] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else if (membersName[i] !== "admin") {
    console.log(`Hello ${membersName[i]}, thank you for logging in again`);
  }
}

// empty arrays
membersName.splice(0);

if (membersName.length === 0) {
  console.log("We need to find some users");
}
