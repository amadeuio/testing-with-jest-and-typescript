// analyzeArray.test.js
const analyzeArray = require("../utils/analyzeArray");

test("should return the correct values on an integer array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("should return the correct values on a decimal array", () => {
  expect(analyzeArray([1.2, 4, 3.443])).toEqual({ average: 2.88, min: 1.2, max: 4, length: 3 });
});
