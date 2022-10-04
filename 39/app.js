"use strict";

function city_country(city = "karachi", county = "pakistan") {
  return (
    city[0].toUpperCase() +
    city.slice(1) +
    " , " +
    county[0].toUpperCase() +
    county.slice(1)
  );
}

console.log(city_country());
console.log(city_country("kolkata", "india"));
console.log(city_country("torento", "canada"));
