// reverseString.test.js
const reverseString = require("../utils/reverseString");

test("should reverse a string", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("should reverse a string with spaces", () => {
  expect(reverseString("Hello world")).toBe("dlrow olleH");
});

test("should return non-string input unchanged", () => {
  expect(reverseString(123)).toBe(123);
});

test("should return empty input unchanged", () => {
  expect(reverseString("")).toBe("");
});
