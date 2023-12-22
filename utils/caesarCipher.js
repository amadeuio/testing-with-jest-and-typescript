// Transform letter to alphabet index
function charToIndex(letter) {
  letter = letter.toLowerCase(); // Uppercase protection
  return letter.charCodeAt(0) - "a".charCodeAt(0) + 1;
}

// Transform alphabet index to letter
function indexToChar(index) {
  const wrappedIndex = ((index - 1) % 26) + 1; // Keep within valid range (1 to 26)
  return String.fromCharCode("a".charCodeAt(0) + wrappedIndex - 1);
}

// Encrypt a string with a shift key
function caesarCipher(str, shift) {
  // Convert the string to array
  const charArray = str.split("");

  // Map each character in the array
  const encryptedArray = charArray.map((char) => {
    // If it's a lowecase letter, shift it
    if (char.match(/[a-z]/)) {
      const index = charToIndex(char);
      char = indexToChar(index + shift);
      // It it's an uppercase letter, shift it and transform to uppercase
    } else if (char.match(/[A-Z]/)) {
      const index = charToIndex(char);
      char = indexToChar(index + shift).toUpperCase();
    }

    return char;
  });

  // Join the array back into a string
  const encryptedString = encryptedArray.join("");

  return encryptedString;
}

// Example usage
console.log(caesarCipher("Hello World!", 3)); // Khoor Zruog!
