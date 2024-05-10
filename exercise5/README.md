# Exercise 5

This one's the classic example to teach about recursive functions. A recursive function is a function that calls itself. The function should have a base case, which is the condition that stops the recursion. If the base case is not met, the function calls itself with a modified input.

Consider this, the simplest recursive function:

function f() {
  f();
}

This function will call itself indefinitely, because it doesn't have a base case. The base case is what stops the recursion. For example, consider this function:

function f(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  f(n - 1);
}

This function will print the numbers from `n` to 1. When `n` is less than or equal to 0, the function returns and the recursion stops.

I have also included one example in index.js, along with tests. As practice, implement the last two recursive functions in index.js. The first is finding a factorial of a number. The second is finding the nth number in the Fibonacci sequence.
