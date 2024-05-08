import { expect } from 'chai';
import { numberToText } from './index.js';

describe('numberToText', function () {
  it('should convert a nonnegative number up to 999 into text', function () {
    expect(numberToText(0)).to.equal('zero');
    expect(numberToText(1)).to.equal('one');
    expect(numberToText(10)).to.equal('ten');
    expect(numberToText(11)).to.equal('eleven');
    expect(numberToText(20)).to.equal('twenty');
    expect(numberToText(21)).to.equal('twenty one');
    expect(numberToText(100)).to.equal('one hundred');
    expect(numberToText(101)).to.equal('one hundred one');
    expect(numberToText(110)).to.equal('one hundred ten');
    expect(numberToText(111)).to.equal('one hundred eleven');
    expect(numberToText(112)).to.equal('one hundred twelve');
    expect(numberToText(120)).to.equal('one hundred twenty');
    expect(numberToText(121)).to.equal('one hundred twenty one');
    expect(numberToText(200)).to.equal('two hundred');
    expect(numberToText(201)).to.equal('two hundred one');
    expect(numberToText(210)).to.equal('two hundred ten');
    expect(numberToText(213)).to.equal('two hundred thirteen');
    expect(numberToText(214)).to.equal('two hundred fourteen');
    expect(numberToText(220)).to.equal('two hundred twenty');
    expect(numberToText(221)).to.equal('two hundred twenty one');
    expect(numberToText(315)).to.equal('three hundred fifteen');
    expect(numberToText(335)).to.equal('three hundred thirty five');
    expect(numberToText(370)).to.equal('three hundred seventy');
    expect(numberToText(416)).to.equal('four hundred sixteen');
    expect(numberToText(457)).to.equal('four hundred fifty seven');
    expect(numberToText(517)).to.equal('five hundred seventeen');
    expect(numberToText(543)).to.equal('five hundred forty three');
    expect(numberToText(666)).to.equal('six hundred sixty six');
    expect(numberToText(789)).to.equal('seven hundred eighty nine');
    expect(numberToText(818)).to.equal('eight hundred eighteen');
    expect(numberToText(919)).to.equal('nine hundred nineteen');
    expect(numberToText(999)).to.equal('nine hundred ninety nine');
  });
});
