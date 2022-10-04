"use strict";

const personName = "hasham saleem";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(
  personName
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")
);
