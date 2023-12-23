// analyzeArray.test.js
const analyzeArray = require("../utils/analyzeArray");

test("should return the correct values on an integer array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("should return the correct values on a decimal array", () => {
  expect(analyzeArray([1.2, 4, 3.443])).toEqual({ average: 2.88, min: 1.2, max: 4, length: 3 });
});

test("should return error message on non-array inputs", () => {
  expect(analyzeArray("hello")).toBe("Invalid input. Please provide a non-empty array of numbers.");
});

test("should return error message on empty array inputs", () => {
  expect(analyzeArray([])).toBe("Invalid input. Please provide a non-empty array of numbers.");
});

test("should return error message on non-numerical array inputs", () => {
  expect(analyzeArray([1, 2, "three"])).toBe(
    "Invalid input. Please provide a non-empty array of numbers."
  );
});
