"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertPascalCaseToSnakeCase = exports.getHasUppercaseLetters = exports.convertStringToNumber = exports.getIsValidOnNameTag = exports.findType = exports.findLengthOfPassword = exports.addNumbers = exports.findLargestNumber = exports.createFullName = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* This challenge is designed to test you knowledge of Types and Control Flow (If and Switch Statements) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that programmatically concatenates two strings together with a space in between them.
 * This means if the string were different it would still add them together.
 *
 * @returns {string} John Smith
 */
var firstName = "John";
var lastName = "Smith";

var createFullName = function createFullName() {
  var returnString = firstName + " " + lastName;
  return returnString; // Write your code here
};
/**
 * A function that programmatically returns the largest number.
 * This means if the numbers were different it would still return the largest one.
 *
 * @returns {number} the largest number
 */


exports.createFullName = createFullName;
var largeNumber1 = 100;
var largeNumber2 = 200;

var findLargestNumber = function findLargestNumber() {
  if (largeNumber1 > largeNumber2) return largeNumber1;else if (largeNumber2 > largeNumber1) return largeNumber2;else return console.error(); // Write your code here
};
/**
 * A function that programmatically adds two numbers together.
 * This means if the numbers were different it would still add them together.
 *
 * @returns {number} the sum of both numbers
 */


exports.findLargestNumber = findLargestNumber;
var addNumber1 = 12;
var addNumber2 = 24;

var addNumbers = function addNumbers() {
  var total = addNumber1 + addNumber2;
  return total; // Write your code here
};
/* Intermediate Challenges */

/**
 * A function to programmatically find the length of a string.
 * This means if the string was different it would still find the length.
 *
 * @returns {number} the length of the string
 */


exports.addNumbers = addNumbers;
var password = "thisIsMyVeryLongPassword123456789";

var findLengthOfPassword = function findLengthOfPassword() {
  var lengthOfString = password.length;
  return lengthOfString; // Write your code here
};
/**
 * A function that programmatically tells you what the type of the variable is.
 * This variable was still one of the accepted types it would still output a string.
 * If the variable is a string output "This is a string"
 * If the variable is a number output "This is a number"
 * If the variable is a boolean output "This is a boolean"
 * If the variable is not any of those types output "I don't know what this thing is"
 *
 * @returns {string} This is a string
 */


exports.findLengthOfPassword = findLengthOfPassword;
var thing = "I am a thing";

var findType = function findType() {
  var thingType = _typeof(thing);

  switch (thingType) {
    case "string":
      return "This is a string";

    case "number":
      return "This is a string";

    case "boolean":
      return "This is a string";

    default:
      return "Not yet defined";
  }

  if (thingType === "string") {
    return "This is a string";
  } else if (thingType === "number") {
    return "This is a number";
  } else if (thingType === "boolean") {
    return "This is a boolean";
  } else {
    return "I don't know what this thing is";
  } // Write your code here

};
/**
 * A function to programmatically decide if a name is suitable for a name tag.
 * This means it must still work even if the name is different and return something if name provided is incorrect.
 * Name tag rules are: The name must be less than or equal to 8 characters and begin with a capital letter.
 *
 * @returns {boolean} true || false
 */


exports.findType = findType;
var nameTagOption = "Timothy";

var getIsValidOnNameTag = function getIsValidOnNameTag() {
  if (nameTagOption.substring(0, 1) === nameTagOption.substring(0, 1).toUpperCase() & nameTagOption.length < 9) return true;else return false; // Write your code here
};
/* Advanced Challenges */

/**
 * A function that programmatically converts a number stored as a string to a number type.
 * This means if the string was different it would still convert it to a number.
 *
 * @returns {number} The number converted from the string "32.87" -> 32.87
 */


exports.getIsValidOnNameTag = getIsValidOnNameTag;
var stringToConvert = "14.45";

var convertStringToNumber = function convertStringToNumber() {
  return parseFloat(stringToConvert); // Write your code here
};
/**
 * A function that uses regex to programmatically test if a string contains uppercase letters.
 * This means if the string was different it would still accurately return true or false.
 *
 * !!NOTE!! You should use regex to solve this problem!
 *
 * @returns {boolean} true || false
 */


exports.convertStringToNumber = convertStringToNumber;
var stringWithUppercaseLetters = "I Am A String With Uppercase Letters";

var getHasUppercaseLetters = function getHasUppercaseLetters() {
  Array.from(stringWithUppercaseLetters).forEach(function (element) {
    if (element === element.toUpperCase()) return true;
  });
  return false;
}; // Write your code here

/* Expert Challenge */

/**
 * A function that programmatically converts a string written in PascalCase to a string written in snake_case (lowercase with underscores).
 * This means if the PascalCase string changes then the function should still convert it.
 *
 * @returns {string} i_want_to_be_snake_case
 */


exports.getHasUppercaseLetters = getHasUppercaseLetters;
var pascalCaseVariableName = "IWantToBeSnakeCase";

var convertPascalCaseToSnakeCase = function convertPascalCaseToSnakeCase() {
  var splitWords = pascalCaseVariableName.split(/(?=[A-Z])/); //split where there is a capital

  var joinedWordsWithUnderscores = splitWords.join("_"); //join split with underscore

  var snakeCase = joinedWordsWithUnderscores.toLowerCase(); //convert everything to lower case

  return snakeCase; // Write your code here
};

exports.convertPascalCaseToSnakeCase = convertPascalCaseToSnakeCase;
//# sourceMappingURL=challenge.dev.js.map
