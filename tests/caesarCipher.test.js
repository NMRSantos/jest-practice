import { ceaserCipher } from "../src/ceasarCipher.js";

describe("Ceaser cipher", () => {
  test("All lower case characters", () => {
    expect(ceaserCipher("abc", 2)).toBe("cde");
  });
  test("All upper case characters", () => {
    expect(ceaserCipher("ABC", 2)).toBe("CDE");
  });
  test("Mix lower and upper case characters", () => {
    expect(ceaserCipher("AbC", 2)).toBe("CdE");
  });
  test("Don't change speacial characters", () => {
    expect(ceaserCipher("AbC!", 2)).toBe("CdE!");
  });
});
