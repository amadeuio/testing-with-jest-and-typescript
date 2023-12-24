import reverseString from "../src/reverseString";

test("should reverse a string", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("should reverse a string with spaces", () => {
  expect(reverseString("Hello world")).toBe("dlrow olleH");
});

test("should reverse a string with special characters", () => {
  expect(reverseString("He11o w@rld")).toBe("dlr@w o11eH");
});

test("should return empty input unchanged", () => {
  expect(reverseString("")).toBe("");
});
