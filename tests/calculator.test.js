import { calculator } from "../src/calculator";

describe("Calculator app", () => {
  test("Sum", () => {
    expect(calculator.sum(4, 2)).toBe(6);
  });
  test("Subtract", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });
  test("Multiply", () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });
  test("Divide", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
});
