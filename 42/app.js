"use strict";

const magiciansName = ["Harry Houdini", "David Copperfield", "Teller"];

function make_Great(magician) {
  const modilfy = magiciansName.slice(0);
  modilfy.map((magician) => console.log("The Great " + magician));
}

function show_Magician(magician) {
  magician.map((magician) => console.log(magician));
}

make_Great(magiciansName);
show_Magician(magiciansName);
