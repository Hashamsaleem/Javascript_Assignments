"use strict";

function makeSandwishWith(...filling) {
  const [item1, item2, item3] = filling;
  console.log(`Here's your sandwish with ${item1}, ${item2} and ${item3}`);
}

makeSandwishWith("cheese", "tomato", "onion");
makeSandwishWith("olives", "garlic", "onion");
makeSandwishWith("ginger", "mushroom", "tomato");
