import { expect } from 'chai';
import { TicTacToe } from './index.js';

/**
 * This is a helper function for the tests that will call .get() on each row and column to get the whole board.
 * @param {TicTacToe} ticTacToe
 */
function getBoard(ticTacToe) {
  return Array.from({ length: 3 }, (_, row) => Array.from({ length: 3 }, (_, col) => ticTacToe.get(row, col)));
}

describe('TicTacToe', function () {
  it('should initialize to an empty board', function () {
    expect(getBoard(new TicTacToe())).to.deep.equal([["", "", ""], ["", "", ""], ["", "", ""]]);
  });
});

describe('TicTacToe.set', function () {
  const ticTacToe1 = new TicTacToe();
  ticTacToe1.set(0, 0, "X");

  const ticTacToe2 = new TicTacToe();
  ticTacToe2.set(1, 1, "O");
  ticTacToe2.set(2, 2, "X");

  const ticTacToe3 = new TicTacToe();
  ticTacToe3.set(0, 1, "O");
  ticTacToe3.set(1, 0, "O");
  ticTacToe3.set(1, 2, "X");
  ticTacToe3.set(2, 1, "O");

  it('should set the given mark at the given row and column of the board', function () {
    expect(getBoard(ticTacToe1)).to.deep.equal([["X", "", ""], ["", "", ""], ["", "", ""]]);
    expect(getBoard(ticTacToe2)).to.deep.equal([["", "", ""], ["", "O", ""], ["", "", "X"]]);
    expect(getBoard(ticTacToe3)).to.deep.equal([["", "O", ""], ["O", "", "X"], ["", "O", ""]]);
  });
});

describe('TicTacToe.reset', function () {
  const ticTacToe = new TicTacToe();
  ticTacToe.set(0, 1, "O");
  ticTacToe.set(1, 0, "O");
  ticTacToe.set(1, 2, "X");
  ticTacToe.set(2, 1, "O");

  // This sets up the board before the reset.
  // If your test fails here, it's because the set method didn't work correctly.
  this.beforeAll(function () {
    expect(getBoard(ticTacToe)).to.deep.equal([["", "O", ""], ["O", "", "X"], ["", "O", ""]]);
  });

  // This is the actual reset test.
  it('should reset the board to empty', function () {
    ticTacToe.reset();
    expect(getBoard(ticTacToe)).to.deep.equal([["", "", ""], ["", "", ""], ["", "", ""]]);
  });
});
