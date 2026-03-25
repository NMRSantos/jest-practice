import { ceaserCipher } from "../src/ceasarCipher.js";

describe("Cease cipher", () => {
  test("All lower case characters", () => {
    expect(ceaserCipher("abc", 2)).toBe("cde");
  });
  test("All upper case characters", () => {
    expect(ceaserCipher("ABC, 2")).toBe("CDE");
  });
});
