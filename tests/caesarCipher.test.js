// caesarCipher.test.js
const caesarCipher = require("../utils/caesarCipher");

test("should encrypt a string with a positive shift", () => {
  expect(caesarCipher("Hello World!", 3)).toBe("Khoor Zruog!");
});

test("should encrypt a string with a negative shift", () => {
  expect(caesarCipher("Hello World!", -3)).toBe("Ebiil Tloia!");
});

test("should handle shifts that exceed the alphabet length", () => {
  expect(caesarCipher("Hello World!", 30)).toBe("Lipps Asvph!");
});

test("shifts that differ from 26 should provide the same encryption", () => {
  const encrypted1 = caesarCipher("Hello World!", 1);
  const encrypted2 = caesarCipher("Hello World!", 27);
  const encrypted3 = caesarCipher("Hello World!", 53);

  expect(encrypted1).toEqual(encrypted2);
  expect(encrypted1).toEqual(encrypted3);
});

test("should handle non-integer shifts", () => {
  expect(caesarCipher("Hello World!", "abc")).toBe("Shift must be an integer.");
});

test("should handle an empty string", () => {
  expect(caesarCipher("", 5)).toBe("");
});

test("should handle special characters without encryption", () => {
  expect(caesarCipher("He11o, W@rld!", 5)).toBe("Mj11t, B@wqi!");
});
