"use strict";
const pizzas = ["BBQ", "Pepperoni", "Hawaiian", "Meat Lovers", "Veggie"];

pizzas.forEach((pizza) => {
  console.log(pizza);
});

//1
pizzas.forEach((pizza) => {
  console.log(`i like ${pizza} pizza`);
});

//2
const opnins = `Pizza has all of these components. Cheese is fatty, meat toppings tend to be rich, and the sauce is sweet. Pizza toppings are also packed with a compound called glutamate, which can be found in the tomatoes, cheese, pepperoni and sausage.`;
const line = `I love pizza`;
console.log(opnins.concat(line));
