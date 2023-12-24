// Capitalizes the first letter of a string
function capitalize(str: string): string {
  if (str.length === 0) return str;

  return (str.charAt(0).toUpperCase() + str.slice(1)) as string;
}

// Example usage
console.log(capitalize("hello world")); // Hello world

export default capitalize;
