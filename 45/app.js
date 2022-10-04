"use strict";

function car(...information) {
  const [modelName, color, manufacturer, number, transmittion] = information;
  const carInfo = {
    manufacturer_Company: manufacturer,
    model_Number: modelName,
    transmittion: transmittion,
    color: color,
    number: number,
  };
  console.log(carInfo);
}

car("Mercedes E20", "Red", "Mercedes", "9012", "manual");
car("BMW X5", "Black", "BMW", "9013", "automatic");
car("Audi A4", "White", "Audi", "9014", "manual");
