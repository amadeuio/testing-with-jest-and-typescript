// analyzeArray.js

function analyzeArray(numbers) {
  // Check if the input is an array of numbers
  if (
    !Array.isArray(numbers) ||
    numbers.length === 0 ||
    !numbers.every((item) => typeof item === "number")
  ) {
    return "Invalid input. Please provide a non-empty array of numbers.";
  }

  // Calculate average, min, max, and length
  const length = numbers.length;
  const average = numbers.reduce((acc, num) => acc + num, 0) / length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  // Return an object with the calculated values
  return {
    average: Number(average.toFixed(2)),
    min: min,
    max: max,
    length: length,
  };
}

// Example usage
console.log(analyzeArray([1, 8, 3, 4, 2, 6])); // { average: 4, min: 1, max: 8, length: 6 }

module.exports = analyzeArray;
