// reverseString.js
function reverseString(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  return str.split("").reverse().join("");
}

// Example usage
reverseString("hello world"); // dlrow olleh

module.exports = reverseString;
