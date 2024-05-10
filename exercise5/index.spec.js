import { expect } from 'chai';
import { sumOfFirstNPositiveNumbers, factorial, nthFibonacci } from './index.js';

describe('sumOfFirstNPositiveNumbers', function () {
  it('should return 0 when n is 0', function () {
    expect(sumOfFirstNPositiveNumbers(0)).to.equal(0);
  });

  it('should return 1 when n is 1', function () {
    expect(sumOfFirstNPositiveNumbers(1)).to.equal(1);
  });

  it('should return 3 when n is 2', function () {
    expect(sumOfFirstNPositiveNumbers(2)).to.equal(3);
  });

  it('should return 10 when n is 4', function () {
    expect(sumOfFirstNPositiveNumbers(4)).to.equal(10);
  });

  it('should return 55 when n is 10', function () {
    expect(sumOfFirstNPositiveNumbers(10)).to.equal(55);
  });
});

describe('factorial', function () {
  it('should return 1 when n is 0', function () {
    expect(factorial(0)).to.equal(1);
  });

  it('should return 1 when n is 1', function () {
    expect(factorial(1)).to.equal(1);
  });

  it('should return 2 when n is 2', function () {
    expect(factorial(2)).to.equal(2);
  });

  it('should return 6 when n is 3', function () {
    expect(factorial(3)).to.equal(6);
  });

  it('should return 24 when n is 4', function () {
    expect(factorial(4)).to.equal(24);
  });

  it('should return 120 when n is 5', function () {
    expect(factorial(5)).to.equal(120);
  });

  it('should return 720 when n is 6', function () {
    expect(factorial(6)).to.equal(720);
  });
});

describe('nthFibonacci', function () {
  it('should return 0 when n is 0', function () {
    expect(nthFibonacci(0)).to.equal(0);
  });

  it('should return 1 when n is 1', function () {
    expect(nthFibonacci(1)).to.equal(1);
  });

  it('should return 1 when n is 2', function () {
    expect(nthFibonacci(2)).to.equal(1);
  });

  it('should return 2 when n is 3', function () {
    expect(nthFibonacci(3)).to.equal(2);
  });

  it('should return 3 when n is 4', function () {
    expect(nthFibonacci(4)).to.equal(3);
  });

  it('should return 5 when n is 5', function () {
    expect(nthFibonacci(5)).to.equal(5);
  });

  it('should return 8 when n is 6', function () {
    expect(nthFibonacci(6)).to.equal(8);
  });

  it('should return 13 when n is 7', function () {
    expect(nthFibonacci(7)).to.equal(13);
  });

  it('should return 21 when n is 8', function () {
    expect(nthFibonacci(8)).to.equal(21);
  });

  it('should return 34 when n is 9', function () {
    expect(nthFibonacci(9)).to.equal(34);
  });

  it('should return 55 when n is 10', function () {
    expect(nthFibonacci(10)).to.equal(55);
  });
});
