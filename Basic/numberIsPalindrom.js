/**
 * Check whether a number is Palindrome or not
 *
 * 121   → true
 * -121  → false
 * 10    → false
 */

let num = 101;

function checkPalindrom(num) {

  // ❌ Negative numbers can never be palindrome
  if (num < 0) {
    return false;
  }

  const oldNum = num; // original number store
  let newNum = 0;    // reversed number

  while (num > 0) {
    const lastdigit = num % 10;            // extract last digit
    newNum = newNum * 10 + lastdigit;      // build reverse number
    num = Math.floor(num / 10);            // remove last digit
  }

  return oldNum === newNum;
}

console.log(checkPalindrom(num)); // true


// last digit => n % 10 modulus
// remove last => n / 10 divide