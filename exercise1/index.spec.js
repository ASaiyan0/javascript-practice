import { expect } from 'chai';
import { helloWorld } from './index.js';

describe('helloWorld', function () {
  it('should return "Hello World!"', function () {
    expect(helloWorld()).to.equal('Hello World!');
  });
});
