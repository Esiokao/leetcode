const curry = (fn) => (...args) => args.length < fn.length ? curry(fn).bind(null, ...args) : fn.call(null, ...args)
const pipe = (...fns) => (x) => fns.reduce((prev, fn)=>fn(prev), x)
const ifEl = (predicate, truefn, falsefn) => data => predicate(data) ? truefn(data) : falsefn(data) 
const isNegative = (num) => num < 0 ? true : false
const divisible = (divisor) => (dividend) => dividend % divisor == 0
const isDivisibleBy10 = divisible(10)
const rejectNegative = ifEl(isNegative, () => false, (num) => num)
const rejectDivisibleBy10 = ifEl(isDivisibleBy10, () => false, (num) => num)
const compare = (a ,b) => a == b
const reverse = (num, temp = 0) => { 
    if (num == 0) return temp;
    temp = (temp * 10) + (num % 10)
    return reverse(Math.floor(num / 10), temp)
}
const compareReversedNumber = (num) => compare(num, reverse(num))
/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(n) {
  if (n < 0) return false;
  if (n < 10 && n >= 0) return true;
  if (n % 10 == 0) return false;
  
  let reversedNumber = 0;
  while (n > reversedNumber) {
    let pop = n % 10;
    n = Math.floor(n / 10);

    reversedNumber = reversedNumber * 10 + pop;
    console.log(n, reversedNumber);
  }
  return n == reversedNumber || n == Math.floor(reversedNumber / 10);
}



