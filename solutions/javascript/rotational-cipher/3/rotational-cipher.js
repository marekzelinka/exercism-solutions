//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export const rotate = (input, shiftBy) => {
  return input.split('').map(char => {
    if (/[\W\d\s]/i.test(char)) {
      return char;
    }

    const currentIndex = alphabet.indexOf(char.toLowerCase());
    const nextIndex = (currentIndex + shiftBy) % alphabet.length;
    let encodedChar = alphabet[nextIndex];

    if (char === char.toUpperCase()) {
      encodedChar = encodedChar.toUpperCase();
    }

    return encodedChar;
  }).join('');
};
