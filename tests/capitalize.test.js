// capitalize.test.js
const capitalize = require("../utils/capitalize");

test("should capitalize the first letter on lowercase input", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("should keep the first letter capitalized on uppercase input", () => {
  expect(capitalize("Hello world")).toBe("Hello world");
});

test("should keep the rest of characters unchanged except the first one", () => {
  expect(capitalize("hello world").slice(1)).toBe("ello world");
});

test("should return non-string input unchanged", () => {
  expect(capitalize(123)).toBe(123);
});

test("should return empty input unchanged", () => {
  expect(capitalize("")).toBe("");
});
