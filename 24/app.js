"use strict";
//1
let myName = "Hasham";
console.log(myName === myName);

let otherName = "ali";
console.log(otherName !== otherName);

//2
console.log(myName === myName.toLowerCase());

//3
console.log(3 === 3);
console.log(3 !== 3);
console.log(3 > 3);
console.log(3 < 3);
console.log(3 >= 3);
console.log(3 <= 3);

//4
console.log(myName && otherName);
console.log(myName || otherName);

//5
const checkArray = [1, 2, 3, 4, 5];
console.log(checkArray.includes(3));
console.log(checkArray.includes(7));
