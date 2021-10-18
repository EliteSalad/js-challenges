"use strict";

// DESCRIPTION FUNCTION
var getDescription = function getDescription(partner, amountOfChildren, location, jobTitle) {
  var message = "I am currently a ".concat(jobTitle, " living in ").concat(location, ", and married to ").concat(partner, " \nwith ").concat(amountOfChildren, " kids");
  console.log(message);
}; //DESCRIPTION TEST


getDescription("Jane", 2, "London", "Software Coach"); // SNICKERS LIFE TIME SUPPLY CALCULATER

var calculateSupply = function calculateSupply(currentAge, amountOfSnickersPerDay) {
  var maxAge = 90;
  var totalNeeded = amountOfSnickersPerDay * 365 * (maxAge - currentAge);
  var message = "You will need ".concat(totalNeeded, " bars of Snickers to last you until the ripe old age of ").concat(maxAge);
  console.log(message);
}; //SNICKERS TEST


calculateSupply(28, 4);
calculateSupply(28, 2.5);
calculateSupply(28, 12);
calculateSupply(87, 100); //CELCIUS FARENHEIGHT CONVERTER

var celsiusToFarenheit = function celsiusToFarenheit(celsius) {
  var celsiusInF = celsius * 9 / 5 + 32;
  console.log(" ".concat(celsius, " *C is ").concat(celsiusInF, " *F"));
}; //CONVERTER TEST


celsiusToFarenheit(23); //PUPPY AGE CALCULATOR

var calculateDogAge = function calculateDogAge(age) {
  var dogAge = age * 7;
  console.log("Your dog is ".concat(dogAge, " years old in dog years!!"));
};

calculateDogAge(2);
calculateDogAge(3);
calculateDogAge(17);
//# sourceMappingURL=functions-2.dev.js.map
