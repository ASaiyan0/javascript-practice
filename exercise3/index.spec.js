import { expect } from 'chai';
import { reverse, reverseInPlace } from './index.js';

describe('reverse', function () {
  it('should return a new array with items in reverse from the given array', function () {
    expect(reverse([1, 2, 3])).to.eql([3, 2, 1]);
    expect(reverse([4, 3, 2, 1])).to.eql([1, 2, 3, 4]);
    expect(reverse(['l', 3, 3, 't', 'h', 4, 'x'])).to.eql(['x', 4, 'h', 't', 3, 3, 'l']);
    expect(reverse([])).to.eql([]);
    expect(reverse([1])).to.eql([1]);
  });
});

describe('reverseInPlace', function () {
  it('should modify the input array to reverse the order', function () {
    const array = [1, 2, 3];
    reverseInPlace(array);
    expect(array).to.eql([3, 2, 1]);

    const array2 = [4, 3, 2, 1];
    reverseInPlace(array2);
    expect(array2).to.eql([1, 2, 3, 4]);

    const array3 = ['l', 3, 3, 't', 'h', 4, 'x'];
    reverseInPlace(array3);
    expect(array3).to.eql(['x', 4, 'h', 't', 3, 3, 'l']);

    const array4 = [];
    reverseInPlace(array4);
    expect(array4).to.eql([]);

    const array5 = [1];
    reverseInPlace(array5);
    expect(array5).to.eql([1]);
  });
});
