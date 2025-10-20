//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export const rotate = (plain, keys) => {
  return plain.split('').map(letter => {
    if (/[\W\d\s]/i.test(letter)) {
      return letter;
    }

    const currentIndex = alphabet.indexOf(letter.toLowerCase());
    const nextIndex = (currentIndex + keys) % alphabet.length;
    let rotatedChar = alphabet[nextIndex];

    if (letter === letter.toUpperCase()) {
      rotatedChar = rotatedChar.toUpperCase();
    } else {
      rotatedChar = rotatedChar.toLowerCase();
    }

    return rotatedChar;
  }).join('')
};
