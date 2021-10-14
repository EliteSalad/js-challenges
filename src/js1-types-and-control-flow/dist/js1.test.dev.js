"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var challenge = _interopRequireWildcard(require("./challenge"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//"./solution";
var createFullName = challenge.createFullName,
    findLargestNumber = challenge.findLargestNumber,
    addNumbers = challenge.addNumbers,
    findLengthOfPassword = challenge.findLengthOfPassword,
    findType = challenge.findType,
    getIsValidOnNameTag = challenge.getIsValidOnNameTag,
    convertStringToNumber = challenge.convertStringToNumber,
    getHasUppercaseLetters = challenge.getHasUppercaseLetters,
    convertPascalCaseToSnakeCase = challenge.convertPascalCaseToSnakeCase;
test("createFullName() tests", function () {
  expect(createFullName()).toBeDefined();
  expect(createFullName()).toBe("John Smith");
});
test("findLargestNumber() tests", function () {
  expect(findLargestNumber()).toBeDefined();
  expect(findLargestNumber()).toBe(200);
});
test("addNumbers() tests", function () {
  expect(addNumbers()).toBeDefined();
  expect(addNumbers()).toBe(36);
});
test("findLengthOfPassword() tests", function () {
  expect(findLengthOfPassword()).toBeDefined();
  expect(findLengthOfPassword()).toBe(33);
});
test("findType() tests", function () {
  expect(findType()).toBeDefined();
  expect(findType()).toBe("This is a string");
});
test("getIsValidOnNameTag() tests", function () {
  expect(getIsValidOnNameTag()).toBeDefined();
  expect(getIsValidOnNameTag()).toBe(true);
});
test("convertStringToNumber() tests", function () {
  expect(convertStringToNumber()).toBeDefined();
  expect(convertStringToNumber()).toBe(14.45);
});
test("getHasUppercaseLetters() tests", function () {
  expect(getHasUppercaseLetters()).toBeDefined();
  expect(getHasUppercaseLetters()).toBe(true);
});
test("convertPascalCaseToSnakeCase() tests", function () {
  expect(convertPascalCaseToSnakeCase()).toBeDefined();
  expect(convertPascalCaseToSnakeCase()).toBe("i_want_to_be_snake_case");
});
//# sourceMappingURL=js1.test.dev.js.map
