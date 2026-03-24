export { reverseString };

const string = "string";
let reversedString = "";

function reverseString() {
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = string.split("").reverse().join("");
  }
  return reversedString;
}
