//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (n) => {
  if (n >= 1000) {
    return "M" + toRoman(n - 1000);
  } else if (n >= 900) {
    return "CM" + toRoman(n - 900);
  } else if (n >= 500) {
    return "D" + toRoman(n - 500);
  } else if (n >= 400) {
    return "CD" + toRoman(n - 400);
  } else if (n >= 100) {
    return "C" + toRoman(n - 100);
  } else if (n >= 90) {
    return "XC" + toRoman(n - 90);
  } else if (n >= 50) {
    return "L" + toRoman(n - 50);
  } else if (n >= 40) {
    return "XL" + toRoman(n - 40);
  } else if (n >= 10) {
    return "X" + toRoman(n - 10);
  } else if (n >= 9) {
    return "IX" + toRoman(n - 9);
  } else if (n >= 5) {
    return "V" + toRoman(n - 5);
  } else if (n >= 4) {
    return "IV" + toRoman(n - 4);
  } else if (n >= 1) {
    return "I" + toRoman(n - 1);
  } else {
    return "";
  }
}
