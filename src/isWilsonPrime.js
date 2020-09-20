'use strict';

/**
 * Wilson primes satisfy the following condition:
 *
 * 1) Let Num represent a prime number.
 * 2) Then ((Num-1)! + 1) / (Num * Num) should give a whole number.
 *
 * Implement isWilsonPrime function:
 *
 * Function should return true if the given number is a Wilson prime
 *
 * Examples:
 * isWilsonPrime(5)      returns true
 * isWilsonPrime(9)      returns false
 *
 * @param {number} num
 *
 * @return {boolean}
 */
function isWilsonPrime(num) {
  const resNumber = (getProduct(num - 1) + 1) / num ** 2;

  return resNumber - Math.floor(resNumber) === 0;
}

const getProduct = (number) => {
  let res = number;

  for (let i = number - 1; i > 0; i--) {
    res *= i;
  }

  return res;
};

module.exports = isWilsonPrime;
