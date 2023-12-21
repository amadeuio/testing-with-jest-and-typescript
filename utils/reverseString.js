// reverseString.js
function reverseString(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  return str.split("").reverse().join("");
}

module.exports = reverseString;
