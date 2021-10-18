"use strict";

var coaches = ["Andy", "Sam", "Bex"];
console.log(coaches[1]); //CREATE ARRAY 2

var pets = ["Fido", "Rusty", "Jack", "Pippa", "Lucky"];
console.log(pets[2]); //FOR LOOP

console.log("For Loop Results");

for (var index = 0; index < 5; index++) {
  console.log("The index on this loop was " + index);
  console.log(pets[index]);
} //FOREACH LOOP


console.log("ForEach Loop Results");
pets.forEach(function (pet) {
  console.log(pet);
}); //MAP (returns edited array)

var newcoaches = coaches.map(function (coach) {
  return "Coach - " + coach;
});
console.log(newcoaches);
var scores = [8, 9, 12, 34, 65, 32]; //Filters (built in if for arrays)

var highScores = scores.filter(function (score) {
  return score > 18;
});
console.log(highScores);
//# sourceMappingURL=arrays.dev.js.map
