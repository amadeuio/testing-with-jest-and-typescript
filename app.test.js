// app.test.js
const add = require("./app");

test("adds 3 + 4 to equal 7", () => {
  expect(add(3, 4)).toBe(7);
});
