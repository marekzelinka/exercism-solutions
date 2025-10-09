//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  // Initialize a variable temp to store the sum of factors
  let temp = 0;

  // Iterate through numbers from 1 to half of the input number to find factors
  for (let i = 1; i <= number / 2; i++) {
    // Check if i is a factor of the input number
    if (number % i === 0) {
      // If true, add it to the sum
      temp += i;
    }
  }
  

  // Check if the sum of factors is equal to the original number and not zero
  if (temp === number && temp !== 0) {
    // If true, the number is a perfect number
    return 'perfect';
  } else if (temp > number) {
    // Check if the sum of factors is smaller than the original number
    return 'abundant';
  } else {
    // Check if the sum of factors is greater than the original number
    return 'deficient';
  }
};
