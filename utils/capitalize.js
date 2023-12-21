// capitalize.js
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("hello world"));

module.exports = capitalize;
