// capitalize.js
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage
capitalize("hello world"); // Hello world

module.exports = capitalize;
