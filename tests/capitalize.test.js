import { capitalize } from "../src/capitalize.js";

test("Capitalize first character of string.", () => {
  expect(capitalize("string")).toBe("String");
});
