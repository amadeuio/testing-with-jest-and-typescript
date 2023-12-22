// calculator.js
var calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    if (num2 === 0) {
      return "Cannot divide by zero";
    }
    return num1 / num2;
  },
};

// example usage:
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(7, 2)); // Output: 5
console.log(calculator.multiply(4, 6)); // Output: 24
console.log(calculator.divide(10, 2)); // Output: 5
console.log(calculator.divide(8, 0)); // Output: "Cannot divide by zero"

module.exports = calculator;
