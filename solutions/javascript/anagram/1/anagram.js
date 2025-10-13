//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const formatString = string => {
  return string.toLowerCase().split('').sort().join('');
};

const checkAnagram = (stringA, stringB) => {
  if (stringA.length !== stringB.length) {
    return false;
  }

  if (stringA.toLowerCase() === stringB.toLowerCase()) {
    return false;
  }

  if (formatString(stringA) !== formatString(stringB)) {
    return false;
  }

  return true;
};

export const findAnagrams = (target, candidates) => {
  const anagrams = []

  for (const candiate of candidates) {
    if (checkAnagram(target, candiate)) {
      anagrams.push(candiate);
    }
  }

  return anagrams;
};
