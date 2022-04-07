const curry =
  fn =>
  (...args) =>
    args.length < fn.length ? curry(fn).bind(null, ...args) : fn.call(null, ...args);
/**
 * @param {num} n
 * @returns {boolean}
 */
function isPalindrome(n) {
  if (n < 0) return false;
  if (n % 10 == 0) return false;
  if (n < 10 && n > 0) return true;
  let reversedNumber = 0;
  while (n > reversedNumber) {
    let pop = n % 10;
    n = Math.floor(n / 10);

    reversedNumber = reversedNumber * 10 + pop;
    console.log(n, reversedNumber);
  }
  return n == reversedNumber || n == Math.floor(reversedNumber / 10);
}
/**
 * @param {number} n
 * @returns {number}
 */
function getNumberLength(n) {
  return Math.ceil(Math.log10(n + 1));
}
function getSpecDigit(num, digit) {
  let front =
    Math.floor(num / 10 ** (getNumberLength(num) - (getNumberLength(num) - digit) + 1)) *
    10 ** (getNumberLength(num) - (getNumberLength(num) - digit) + 1);
  let behind = num % 10 ** (digit - 0);
  // console.log(front, behind);
  return (num - front - behind) / 10 ** (digit - 0);
}
/**
 * two pointer
 * @param {*} n
 * @returns
 */
function isPalindrome2(n) {
  if (n < 0) return false;
  if (n < 10 && n >= 0) return true;
  if (n % 10 == 0) return false;
  const len = getNumberLength(n);
  const l = len - 1,r = 0;
  const getNumberDigit = curry(getSpecDigit)(n);
  const result = twoPointerComparsion(getNumberDigit, l, r, true);
  return result; 
}

function twoPointerComparsion(getNumberDigitFn, left, right, next) {
  if(left == right || left < right) return true 
  if(getNumberDigitFn(left) == getNumberDigitFn(right)) {
    return twoPointerComparsion(getNumberDigitFn, left - 1, right + 1, next)
  } else {
    return false
  }
}
console.log(isPalindrome2(1000530001)); 

isPalindrome2(1000530001) 
