import { expect } from 'chai';
import { average } from './index.js';

describe('average', function () {
  it('should return the average of two numbers', function () {
    expect(average(1, 2)).to.equal(1.5);
    expect(average(0, 0)).to.equal(0);
    expect(average(0, 1)).to.equal(0.5);
    expect(average(1, 0)).to.equal(0.5);
    expect(average(-1, 1)).to.equal(0);
    expect(average(-1, -1)).to.equal(-1);
    expect(average(1, 1)).to.equal(1);
  });
});
