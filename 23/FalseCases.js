"use strict";

/* Cases Result = false */

//1
let Age = 16;
let myPrediction = true;
let drivingAge = 18;
if (Age >= drivingAge) {
  console.log(myPrediction);
} else {
  console.log(!myPrediction);
}

//2
let bikeSpeed = "180";
myPrediction = true;
if (bikeSpeed > 200) {
  console.log(myPrediction);
} else {
  console.log(!myPrediction);
}

//3
let myName = "Hasham";
myPrediction = true;
if (myName === "hasham") {
  console.log(myPrediction);
} else {
  console.log(!myPrediction);
}

//4
let vehical = "helicopter";
myPrediction = true;
if (vehical === vehical.toUpperCase()) {
  console.log(myPrediction);
} else {
  console.log(!myPrediction);
}

//5
let studentName = "ali";
let studentId = 2483;
myPrediction = true;
if (studentName === "Ali" && studentId === 2000) {
  console.log(myPrediction);
} else {
  console.log(!myPrediction);
}
