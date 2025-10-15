//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = Array.from({ length: 26}, (v, n) => String.fromCharCode(n + 97));

export const isIsogram = (word) => {
  if (word.length === 0) {
    return true;
  }

  const wordArray = [...word]

  for (const alphabetLetter of alphabet) {
    const matches = wordArray.filter(letter => letter.toLowerCase() === alphabetLetter)
    if (matches.length > 1) {
      return false;
    }
  }

  return true;
};
