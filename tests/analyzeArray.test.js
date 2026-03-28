import { analyzeArray } from "../src/analyzeArray.js";

describe("Function that takes an array of numbers and returns an object with", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  test("Average", () => {
    expect(object.average).toBe(4);
  });
  test("Min", () => {
    expect(object.min).toBe(1);
  });
  test("Max", () => {
    expect(object.max).toBe(8);
  });
  test("Length", () => {
    expect(object.length).toBe(6);
  });
});
