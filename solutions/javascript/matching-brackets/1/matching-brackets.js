//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const findMatchingBrackets = bracketMap => {
  const bracketOpenings = Object.keys(bracketMap);
  const bracketClosings = Object.values(bracketMap);

  return string => {
    const { pairs, stack } = [...string].reduce(
      ({ pairs, stack }, char, i) => {
        // If we come across an opening bracket, we have to store its index
        if (bracketOpenings.includes(char)) {
          // Find a opening bracket and store its index
          stack.push(i);
        } else if (bracketClosings.includes(char)) {
          // When we find a closing bracket, we can pair it with the last opening
          // bracket we found. This way, we can find the matching pairs in the given string.

          // If we find a closing bracket without a matching opening bracket, we assume that
          // the string is invalid.
          if (stack.length === 0) {
            throw new Error('Invalid string');
          }

          const openingIndex = stack.pop();

          if (bracketMap[string[openingIndex]] !== char) { 
            throw new Error('Invalid string');
          }
          
          pairs.set(openingIndex, i);
          pairs.set(i, openingIndex);
        }

        return { pairs, stack };
      },
      { pairs: new Map(), stack: [] }
    );
    
    if (stack.length > 0) {
      throw new Error('Invalid string');
    }

    return pairs;
  };
};

const bracketMap = {
  "(": ")",
  "[": "]",
  "{": "}",
};
const findBracketPairs = findMatchingBrackets(bracketMap);

export const isPaired = (string) => {
  try {
    findBracketPairs(string);

    return true;
  } catch {
    return false;
  }
};
