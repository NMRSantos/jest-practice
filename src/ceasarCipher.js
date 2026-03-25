export { ceaserCipher };

function ceaserCipher(word, number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const letters = word.split("");

  const finalArray = letters.map((letter) => {
    const position = alphabet.indexOf(letter);
    const cipherPosition = (position + number) % alphabet.length;
    const cipheredArray = alphabet.at(cipherPosition);
    return cipheredArray;
  });

  const cipher = finalArray.join("");
  return cipher;
}
