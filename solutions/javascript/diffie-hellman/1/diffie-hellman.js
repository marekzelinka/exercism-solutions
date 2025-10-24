//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper function to check if a number is prime
const isPrime = (number) => {
  if (number <= 1) {
    return false; // 0 and 1 are not prime numbers
  }

  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export class DiffieHellman {
  constructor(p, g) {
    if (!isPrime(p) || !isPrime(g) || g >= p) {
      throw new Error();
    }

    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error();
    }

    return this.g ** privateKey % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p;
  }

  static getPrivateKey(p) {
    return Math.floor(Math.random() * (p - 2)) + 2;
  }
}