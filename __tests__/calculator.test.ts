import calculator from "../src/calculator";

describe("Addition", () => {
  test("should add positive numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("should add negative numbers", () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });

  test("should add a positive and a negative number", () => {
    expect(calculator.add(2, -3)).toBe(-1);
  });
});

describe("Subtraction", () => {
  test("should subtract positive numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("should subtract negative numbers", () => {
    expect(calculator.subtract(-5, -3)).toBe(-2);
  });

  test("should subtract a negative number from a positive number", () => {
    expect(calculator.subtract(2, -3)).toBe(5);
  });
});

describe("Multiplication", () => {
  test("should multiply positive numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("should multiply negative numbers", () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });

  test("should multiply a positive and a negative number", () => {
    expect(calculator.multiply(2, -3)).toBe(-6);
  });
});

describe("Division", () => {
  test("should divide positive numbers", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("should handle division by zero", () => {
    expect(calculator.divide(5, 0)).toBe("Cannot divide by zero");
  });

  test("should handle decimal division", () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
  });
});
