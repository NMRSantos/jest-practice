export { ceaserCipher };

function ceaserCipher(word, number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const letters = word.split("");

  const cipher = letters.map((letter) => {
    if (letter >= "a" && letter <= "z") {
      const position = alphabet.indexOf(letter);
      console.log(position);
      const cipherPosition = (position + number) % alphabet.length;
      const result = alphabet.at(cipherPosition);
      return result;
    } else if (letter >= "A" && letter <= "Z") {
      const lowerCaseLetter = letter.toLowerCase();
      const position = alphabet.indexOf(lowerCaseLetter);
      const cipherPosition = (position + number) % alphabet.length;
      const result = alphabet.at(cipherPosition).toUpperCase();
      return result;
    } else {
      return letter;
    }
  });
  const resultingCipher = cipher.join("");
  console.log(resultingCipher);
  return resultingCipher;
}
