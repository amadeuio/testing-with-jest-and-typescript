// analyzeArray.js
function analyzeArray(numbers) {
  // Calculate average, min, max, and length
  const length = numbers.length;
  const average = numbers.reduce((acc, num) => acc + num, 0) / length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  // Return an object with the calculated values
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

// Example usage
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = analyzeArray;
