//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (name) => {
  return name
    .replaceAll(/,|_/g, '')
    .replaceAll(/\s?-\s?/g, ' ')
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join('');
};
