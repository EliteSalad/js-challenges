const coaches =["Andy", "Sam", "Bex"];
console.log(coaches[1]);
//CREATE ARRAY 2
const pets = ["Fido", "Rusty", "Jack", "Pippa", "Lucky"];
console.log(pets[2]);

//FOR LOOP
console.log("For Loop Results");

for (let index = 0; index < 5; index++){
    console.log("The index on this loop was " + index);
    console.log(pets[index]);
}

//FOREACH LOOP
console.log("ForEach Loop Results");

pets.forEach((pet)=>{
console.log(pet);
})

//MAP (returns edited array)
const newcoaches = coaches.map((coach) =>{
return "Coach - " + coach;
})

console.log(newcoaches);

const scores = [8,9,12,34,65,32];
//Filters (built in if for arrays)
const highScores = scores.filter((score) =>{
    return score > 18;
})
console.log(highScores);