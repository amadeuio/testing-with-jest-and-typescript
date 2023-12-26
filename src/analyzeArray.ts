// Return an object with average, min, max, and length of an array of numbers
function analyzeArray(
  numbers: number[]
): { average: number; min: number; max: number; length: number } | string {
  // Check if the input is empty
  if (numbers.length === 0) return "Please provide a non-empty array.";

  // Calculate average, min, max, and length
  const length: number = numbers.length;
  const average: number = numbers.reduce((acc, num) => acc + num, 0) / length;
  const min: number = Math.min(...numbers);
  const max: number = Math.max(...numbers);

  // Return an object with the calculated values
  return {
    average: Number(average.toFixed(2)),
    min: min,
    max: max,
    length: length,
  };
}

// Example usage
analyzeArray([1, 8, 3, 4, 2, 6]); // { average: 4, min: 1, max: 8, length: 6 }

export default analyzeArray;
