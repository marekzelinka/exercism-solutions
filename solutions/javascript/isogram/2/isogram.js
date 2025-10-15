//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = Array.from({ length: 26}, (v, n) => String.fromCharCode(n + 97));

export const isIsogram = (word) => {
  const formattedWord = word
    .toLowerCase()
    .split('')
    .filter(char => char >= 'a' && char <= 'z');
  
  return new Set(formattedWord).size === word.replace(/[-\s]/g, '').length;
};
