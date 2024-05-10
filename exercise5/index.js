/**
 * This function returns the sum of the first n positive numbers.
 * @param {n} number
 * @returns {number} The sum of numbers 1 to n
 */
export function sumOfFirstNPositiveNumbers(n) {
  // This is called the "base case". When n is less than one, we don't call this function recursively.
  // This is necessary for any recursive function so that it doesn't run forever.
  if (n < 1) {
    return 0;
  }

  // If the base case is not met, we call the function recursively.
  // Here, we're adding n to the sum of the first n - 1 positive numbers.
  // Because we're subtracting 1 from n on each recursive call, we'll eventually reach the base case of n < 1.
  return sumOfFirstNPositiveNumbers(n - 1) + n;
}

/**
 * This function returns the factorial of n. Implement it using recursion instead of with a loop.
 * Factorial is defined as n! = n * (n - 1) * (n - 2) * ... * 1, so to implement this function,
 * multiply the result of factorial(n - 1) by n.
 * @param {n} number
 * @returns {number} n!
 */
export function factorial(n) {
}

/**
 * This function returns the nth Fibonacci number. Implement it using recursion instead of with a loop.
 * The Fibonacci sequence is defined as follows: the first two numbers in the sequence are 0 and 1, and
 * each subsequent number is the sum of the previous two. You should use two recursive calls to get the previous
 * two numbers and then add them together to get the nth number.
 * @param {n} number
 * @returns {number} The nth Fibonacci number
 */
export function nthFibonacci(n) {
}
