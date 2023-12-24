// Reverses a string
function reverseString(str: string): string {
  if (str.length === 0) return str;

  return str.split("").reverse().join("") as string;
}

// Example usage
reverseString("hello world"); // dlrow olleh

export default reverseString;
