import { expect } from "chai";
import { TicTacToe } from "./TicTacToe.js";

/**
 * This is a helper function for the tests that will call .get() on each row and column to get the whole board.
 * @param {TicTacToe} ticTacToe
 */
function getBoard(ticTacToe) {
  return Array.from({ length: 3 }, (_, row) =>
    Array.from({ length: 3 }, (_, col) => ticTacToe.get(row, col))
  );
}

describe("TicTacToe", function () {
  it("should initialize to an empty board", function () {
    expect(getBoard(new TicTacToe())).to.deep.equal([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
});

describe("TicTacToe.set", function () {
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

  it("should set the given mark at the given row and column of the board", function () {
    expect(getBoard(ticTacToe1)).to.deep.equal([
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    expect(getBoard(ticTacToe2)).to.deep.equal([
      ["", "", ""],
      ["", "O", ""],
      ["", "", "X"],
    ]);
    expect(getBoard(ticTacToe3)).to.deep.equal([
      ["", "O", ""],
      ["O", "", "X"],
      ["", "O", ""],
    ]);
  });
});

describe("TicTacToe.reset", function () {
  const ticTacToe = new TicTacToe();
  ticTacToe.set(0, 1, "O");
  ticTacToe.set(1, 0, "O");
  ticTacToe.set(1, 2, "X");
  ticTacToe.set(2, 1, "O");

  // This sets up the board before the reset.
  // If your test fails here, it's because the set method didn't work correctly.
  this.beforeAll(function () {
    expect(getBoard(ticTacToe)).to.deep.equal([
      ["", "O", ""],
      ["O", "", "X"],
      ["", "O", ""],
    ]);
  });

  // This is the actual reset test.
  it("should reset the board to empty", function () {
    ticTacToe.reset();
    expect(getBoard(ticTacToe)).to.deep.equal([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
});

describe("TicTacToe.playerMove", function () {
  const ticTacToe = new TicTacToe();

  it("should set the square for the current player, starting with X", function () {
    ticTacToe.playerMove(0, 0);
    expect(getBoard(ticTacToe)).to.deep.equal([
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("should set the square for the next player, after the first move", function () {
    ticTacToe.playerMove(1, 1);
    expect(getBoard(ticTacToe)).to.deep.equal([
      ["X", "", ""],
      ["", "O", ""],
      ["", "", ""],
    ]);
  });

  it("should set the square for the next player, after the second move", function () {
    ticTacToe.playerMove(0, 1);
    expect(getBoard(ticTacToe)).to.deep.equal([
      ["X", "X", ""],
      ["", "O", ""],
      ["", "", ""],
    ]);
  });

  it("should not set an invalid square", function () {
    ticTacToe.playerMove(0, 4);
    ticTacToe.playerMove(-1, 1);
    ticTacToe.playerMove(5, 0);
    expect(getBoard(ticTacToe)).to.deep.equal([
      ["X", "X", ""],
      ["", "O", ""],
      ["", "", ""],
    ]);
  });

  it("should not set a square that is already taken", function () {
    ticTacToe.playerMove(0, 0);
    ticTacToe.playerMove(1, 1);
    expect(getBoard(ticTacToe)).to.deep.equal([
      ["X", "X", ""],
      ["", "O", ""],
      ["", "", ""],
    ]);
  });
});

describe("TicTacToe.getCurrentPlayer", function () {
  const ticTacToe = new TicTacToe();

  it("should get X for the first turn", function () {
    expect(ticTacToe.getCurrentPlayer()).to.equal("X");
  });

  it("should get O for the second turn", function () {
    ticTacToe.playerMove(0, 0);
    expect(ticTacToe.getCurrentPlayer()).to.equal("O");
  });

  it("should get X for the third turn", function () {
    ticTacToe.playerMove(1, 1);
    expect(ticTacToe.getCurrentPlayer()).to.equal("X");
  });

  it("should not change players after an invalid move", function () {
    ticTacToe.playerMove(0, 0);
    expect(ticTacToe.getCurrentPlayer()).to.equal("X");
  });
});

describe("TicTacToe.isGameOver", function () {
  const ticTacToe = new TicTacToe();

  it("should not be over at the start", function () {
    expect(ticTacToe.isGameOver()).to.be.false;
  });

  it("should be over when the board is full", function () {
    ticTacToe.playerMove(0, 0);
    ticTacToe.playerMove(0, 1);
    ticTacToe.playerMove(0, 2);
    ticTacToe.playerMove(1, 0);
    ticTacToe.playerMove(1, 1);
    ticTacToe.playerMove(1, 2);
    ticTacToe.playerMove(2, 0);
    ticTacToe.playerMove(2, 1);
    ticTacToe.playerMove(2, 2);
    expect(ticTacToe.isGameOver()).to.be.true;
  });

  it("should be over when there is a winner", function () {
    ticTacToe.reset();
    ticTacToe.playerMove(0, 0);
    ticTacToe.playerMove(1, 1);
    ticTacToe.playerMove(0, 1);
    ticTacToe.playerMove(1, 2);
    ticTacToe.playerMove(0, 2);
    expect(ticTacToe.isGameOver()).to.be.true;
  });
});

describe("TicTacToe.getWinner", function () {
  const ticTacToe = new TicTacToe();

  it("should not have a winner at the start", function () {
    expect(ticTacToe.getWinner()).to.equal("");
  });

  it("should have a winner when there is a horizontal row", function () {
    ticTacToe.reset();
    ticTacToe.playerMove(0, 0);
    ticTacToe.playerMove(1, 1);
    ticTacToe.playerMove(0, 1);
    ticTacToe.playerMove(1, 2);
    ticTacToe.playerMove(0, 2);
    expect(ticTacToe.getWinner()).to.equal("X");
  });

  it("should have a winner when there is a vertical column", function () {
    ticTacToe.reset();
    ticTacToe.playerMove(2, 2);
    ticTacToe.playerMove(0, 0);
    ticTacToe.playerMove(1, 1);
    ticTacToe.playerMove(1, 0);
    ticTacToe.playerMove(1, 2);
    ticTacToe.playerMove(2, 0);
    expect(ticTacToe.getWinner()).to.equal("O");
  });

  it("should have a winner when there is a diagonal", function () {
    ticTacToe.reset();
    ticTacToe.playerMove(0, 0);
    ticTacToe.playerMove(1, 0);
    ticTacToe.playerMove(1, 1);
    ticTacToe.playerMove(1, 2);
    ticTacToe.playerMove(2, 2);
    expect(ticTacToe.getWinner()).to.equal("X");
  });

  it("should not have a winner when there is no winner", function () {
    ticTacToe.reset();
    ticTacToe.playerMove(0, 0);
    ticTacToe.playerMove(1, 1);
    ticTacToe.playerMove(0, 1);
    ticTacToe.playerMove(1, 2);
    expect(ticTacToe.getWinner()).to.equal("");
  });
});
