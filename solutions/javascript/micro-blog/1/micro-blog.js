//
// This is only a SKELETON file for the 'Micro-blog' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MAX_LENGTH = 5;

export const truncate = (input) => {
  return [...input].slice(0, MAX_LENGTH).join('');
};