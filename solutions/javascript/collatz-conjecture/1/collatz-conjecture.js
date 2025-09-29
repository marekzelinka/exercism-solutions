//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isEven = n => n % 2 === 0

export const steps = (number) => {
  if (number <= 0) {
    throw new Error('Only positive integers are allowed');
  }
  
  let stepCounter = 0;
  
  while (number !== 1) {
    if (isEven(number)) {
      number /= 2;
    } else {
      number = number * 3 + 1;
    }

    stepCounter += 1;
  }

  return stepCounter;
};
