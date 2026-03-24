import { capitalize } from "../src/capitalize";

test("Capitalize first character of string.", () => {
  expect(capitalize("string")).toBe("String");
});
