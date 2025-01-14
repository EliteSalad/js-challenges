/* JS2 builds on the previous challenges and adds the use of functions with parameters */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that concatenates two strings together with a space in between them.
 *
 * @param {string} firstName John
 * @param {string} lastName Smith
 * @returns {string} John Smith
 */
export const createFullName = (firstName, lastName) => {
  /* Write your code here */
};

/**
 * A function that takes two numbers as an input and returns the smallest one.
 * !!NOTE!! You'll have to write in the parameters for this function yourself.
 *
 * @param {number} number1 100
 * @param {number} number2 200
 * @returns {number} 100
 */
export const findSmallestNumber = (/* Write the parameters here */) => {
  /* Write your code here */
};

/**
 * A function that takes two numbers as input, multiplies them together and returns the product.
 * !!NOTE!! You'll have to write in the parameters for this function yourself.
 *
 * @param {number} number1 3
 * @param {number} number2 6
 * @returns {number} 18
 */
export const multiplyNumbers = (/* Write the parameters here */) => {
  /* Write your code here */
};

/* Intermediate Challenges */

/**
 * A function that tells the user whether or not they've achieved a new high score.
 * If they new score is larger than the current high score then return "You got a new high score!"
 * If the scores are the same return "So close!"
 * Otherwise return "Better luck next Time"
 *
 * @param {number} score 300
 * @param {number} highScore 325
 * @returns {string} "You got a new high score!" | "So close!" | "Better luck next time!"
 */
export const checkIfNewHighScore = (score, highScore) => {
  switch (score) {
    case score > highScore:
      return "You got a new high score!"
      break;
      case score < highScore:
        return "Better luck next time"
        break;
        case score = highScore:
          return "So close!"
          break;

  
    default:
      break;
  }
  /* Write your code here */
};

/**
 * A function that converts a temperature a in celsius to fahrenheit and outputs it in a string format -> "15 degrees celsius is 59 degrees fahrenheit".
 *
 * @param {number} tempInCelsius 15
 * @returns {string} "15 degrees celsius is 59 degrees fahrenheit"
 */
export const celsiusToFahrenheit = (tempInCelsius) => {

  let tempInFahrenheit = (tempInCelsiu* 9) / 5 + 32;
  let say = `${tempInCelsius} degrees celsius is ${tempInCelsius} degrees fahrenheit`;
  return say;

};

/**
 * A function that calculates the number of snickers needed for the rest of your life based on the number you eat per day,
 * your age and your maximum age.
 *
 * @param {number} snickersPerDay 2
 * @param {number} age 25
 * @param {number} maxAge 90
 * @returns {number} 47450
 */
export const calculateLifetimeSupply = (snickersPerDay, age, maxAge) => {
  supplyAmount = (maxAge-age) * snickersPerDay;
  return supplyAmount;

};

/* Advanced Challenges */

/**
 * A function that takes a score input and returns a letter grade.
 * If the score is:
 *  100 - 80: "A"
 *  79 - 70: "B"
 *  79 - 60: "C"
 *  59 - 50: "D"
 *  49 - 40: "E"
 *  39 - 0: "F"
 * If the score is above 100, less than 0, or not a number it should return "Score unavailable"
 *
 * @param {number} score 0 - 100
 * @returns {string} A - F | Score unavailable
 */
export const getGrade = (score) => {

  if (score > 0 || score < 100 ) {
    switch (score) {
      case score >= 80:
        return "A";
        case score >= 70:
          return "B";
          case score >= 60:
            return "C";
            case score >= 50:
              return "D";
              case score >= 40:
                return "E";
      default:
        return "F";
        
    }
 
  }
  else
  return "Score unavailable";

};

/**
 * A function that find the area of a circle to 2 decimal places.
 *
 * @param {number} radius 3
 * @returns {number} 28.27
 */
export const calculateAreaOfCircle = (radius) => {
  const PI = Math.PI;
  const area = (PI * radius ** 2).toFixed(2); //becomes string for some reason

  return parseFloat(areaTo2DecimalPlaces);
};

/* Expert Challenge */

/**
 * A function that generates a student summary from an inputted score and name, to place at the end of a report card for a student.
 * "A": "Congratulations John! You achieved a grade of A."
 * "B": "Well done John! You achieved a grade of B."
 * "C": "Nicely done John! You achieved a grade of C."
 * "D": "That's okay John. You achieved a grade of D."
 * "E": "Too bad John. You achieved a grade of E."
 * "F": "Sorry John. You achieved a grade of F. There's always next year."
 * If there is a score error : "My apologies John, there's been an error in processing your grade."
 *
 * !!NOTE!! Think about how you can use a previous function challenge to complete this one.
 *
 * @param {number} score 0 - 100
 * @param {string} name John
 */
export const getStudentSummary = (score, name) => {
  const letterGrade = getGrade(score);

  switch (letterGrade) {
    case "A":
      return `Congratulations ${name}! You achieved a grade of ${letterGrade}.`;
    case "B":
      return `Well done ${name}! You achieved a grade of ${letterGrade}.`;
    case "C":
      return `Nicely done ${name}! You achieved a grade of ${letterGrade}.`;
    case "D":
      return `That's okay ${name}. You achieved a grade of ${letterGrade}.`;
    case "E":
      return `Too bad ${name}. You achieved a grade of ${letterGrade}.`;
    case "F":
      return `Sorry ${name}. You achieved a grade of ${letterGrade}. There's always next year.`;
    default:
      return `My apologies ${name}, there's been an error in processing your grade.`;
  }
};
