"use strict";

const magiciansName = ["Harry Houdini", "David Copperfield", "Teller"];
const modifyName = [];

function make_Great(magician) {
  const modilfy = magician.slice(0);
  modilfy.map((magician) => modifyName.push("The Great " + magician));
  return modilfy;
}
function show_magicians(mName) {
  make_Great(mName);
  console.log(modifyName);
  console.log(mName);
}

show_magicians(magiciansName);
