function analyzeArray(numbers: number[]): object | string {
  // Check if the input is empty
  if (numbers.length === 0) return "Please provide a non-empty array.";

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

export default analyzeArray;
