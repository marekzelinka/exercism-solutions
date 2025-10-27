//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string) => {
  return string.replace(/([\w\s])\1+/g, (match, c) => match.length + c);
};

export const decode = (string) => {
  return string.replace(/(\d+)([\w\s])/g, (match, t, c) => c.repeat(t));
};
