// analyzeArray.test.js
const analyzeArray = require("../utils/analyzeArray");

test("should return correct values for a valid integer array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("should return correct values for a valid decimal array", () => {
  expect(analyzeArray([1.2, 4, 3.443])).toEqual({ average: 2.88, min: 1.2, max: 4, length: 3 });
});

test("should handle a non-array input", () => {
  expect(analyzeArray("hello")).toBe("Invalid input. Please provide a non-empty array of numbers.");
});

test("should handle an empty array", () => {
  expect(analyzeArray([])).toBe("Invalid input. Please provide a non-empty array of numbers.");
});

test("should handle an array with non-number elements", () => {
  expect(analyzeArray([1, 2, "three"])).toBe(
    "Invalid input. Please provide a non-empty array of numbers."
  );
});
