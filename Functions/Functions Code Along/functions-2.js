// DESCRIPTION FUNCTION
const getDescription = (partner, amountOfChildren, location, jobTitle) => {
const message = `I am currently a ${jobTitle} living in ${location}, and married to ${partner} 
with ${amountOfChildren} kids`

console.log(message);
}
//DESCRIPTION TEST
getDescription("Jane", 2, "London", "Software Coach");


// SNICKERS LIFE TIME SUPPLY CALCULATER
const calculateSupply = (currentAge, amountOfSnickersPerDay) => {
    const maxAge = 90;
    const totalNeeded = (amountOfSnickersPerDay * 365) * (maxAge -currentAge);
    const message = `You will need ${totalNeeded} bars of Snickers to last you until the ripe old age of ${maxAge}`;
    console.log(message);
}
//SNICKERS TEST
calculateSupply(28, 4);
calculateSupply(28, 2.5);
calculateSupply(28, 12);
calculateSupply(87, 100);


//CELCIUS FARENHEIGHT CONVERTER
const celsiusToFarenheit = ( celsius) =>{
    const celsiusInF = (celsius * 9) / 5 +32;
    console.log(` ${celsius} *C is ${celsiusInF} *F`);
}
//CONVERTER TEST
celsiusToFarenheit(23);

//PUPPY AGE CALCULATOR
const calculateDogAge = (age) => {
    const dogAge = age * 7;
    console.log(`Your dog is ${dogAge} years old in dog years!!`);
}

calculateDogAge(2);
calculateDogAge(3);
calculateDogAge(17);