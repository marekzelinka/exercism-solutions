//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (rawNumber) => {
  const cleanNumber = rawNumber.replace(/[\s.\-()+]/g, '');
  
  if (/[a-z]/gi.test(cleanNumber)) {
    throw new Error('Letters not permitted');
  } else if (/\D/gi.test(cleanNumber)) {
    throw new Error('Punctuations not permitted');
  } else if (cleanNumber.length < 10) {
    throw new Error('Must not be fewer than 10 digits');
  } else if (cleanNumber.length > 11) {
    throw new Error('Must not be greater than 11 digits');
  } else if (cleanNumber.length === 11 && !cleanNumber.startsWith('1')) {
    throw new Error('11 digits must start with 1');
  }

  const numberWithoutCC = cleanNumber.slice(-10);

  if (numberWithoutCC.startsWith('0')) {
    throw new Error('Area code cannot start with zero');
  } else if (numberWithoutCC.startsWith('1')) {
    throw new Error('Area code cannot start with one');
  } else if (numberWithoutCC[3] === '0') {
    throw new Error('Exchange code cannot start with zero');
  } else if (numberWithoutCC[3] === '1') {
    throw new Error('Exchange code cannot start with one');
  }

  return numberWithoutCC;
};
