//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const numberBits = String(BigInt(number)).split('').map(BigInt);
  const bitsSize = BigInt(numberBits.length);
  const sum = numberBits.reduce((sum, num) => {
    return sum + num ** bitsSize;
  }, 0n);

  return BigInt(number) === sum;
};
