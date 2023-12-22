// Transform letter to alphabet index
function charToIndex(letter) {
  letter = letter.toLowerCase(); // Uppercase protection
  return letter.charCodeAt(0) - "a".charCodeAt(0) + 1;
}

// Transform alphabet index to letter
function indexToChar(index) {
  const wrappedIndex = ((((index - 1) % 26) + 26) % 26) + 1; // Handle indices out of range (1 to 26)
  return String.fromCharCode("a".charCodeAt(0) + wrappedIndex - 1);
}

// Shift a single character by the specified amount
function shiftChar(char, shift) {
  if (char.match(/[a-z]/)) {
    const index = charToIndex(char);
    char = indexToChar(index + shift);
  } else if (char.match(/[A-Z]/)) {
    const index = charToIndex(char);
    char = indexToChar(index + shift).toUpperCase();
  }
  return char;
}

// Encrypt a string with a shift key
function caesarCipher(str, shift) {
  if (typeof shift !== "number" || !Number.isInteger(shift)) {
    return "Shift must be an integer.";
  }

  const charArray = str.split("");
  const encryptedArray = charArray.map((char) => shiftChar(char, shift));
  const encryptedString = encryptedArray.join("");

  return encryptedString;
}

// Example usage
console.log(caesarCipher("Hello World!", 3)); // Khoor Zruog!

module.exports = caesarCipher;
