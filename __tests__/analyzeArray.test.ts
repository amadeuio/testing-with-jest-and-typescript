import analyzeArray from "../src/analyzeArray";

test("should return correct values for a valid integer array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("should return correct values for an array with negative numbers", () => {
  expect(analyzeArray([-5, -2, 0, 3, 7])).toEqual({ average: 0.6, min: -5, max: 7, length: 5 });
});

test("should return correct values for a valid decimal array", () => {
  expect(analyzeArray([1.2, 4, 3.443])).toEqual({ average: 2.88, min: 1.2, max: 4, length: 3 });
});

test("should handle an empty array", () => {
  expect(analyzeArray([])).toBe("Please provide a non-empty array.");
});
