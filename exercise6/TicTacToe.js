export class TicTacToe {
  /**
   * The constructor should initialize the board with an empty 3x3 grid.
   * An empty string "" will be an empty square. Filled squares should have either "X" or "O".
   * I recommend the grid be an Array of Arrays of strings, like this: [["", "", ""], ["", "", ""], ["", "", ""]]
   */
  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.turn = 0;
    this.winner = "";
  }

  /**
   * This method should set the given mark at the given row and column on the board.
   * @param {number} row The row index of the board, from 0 to 2.
   * @param {number} col The column index of the board, from 0 to 2.
   * @param {string} mark The mark to set at the given row and column, either "X" or "O".
   */
  set(row, col, mark) {
    this.board[row][col] = mark;
  }

  /**
   * This method should return the current value of the square at the given row and column on the board.
   * @param {number} row The row index of the board, from 0 to 2.
   * @param {number} col The column index of the board, from 0 to 2.
   * @returns {string} The mark at the given row and column, either "X", "O", or "".
   */
  get(row, col) {
    return this.board[row][col];
  }

  /**
   * This method should reset the board back to an empty state.
   */
  reset() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.turn = 0;
    this.winner = "";
  }

  playerMove(row, col) {
    if (row < 0 || row > 2) {
      return;
    }
    if (this.get(row, col) != "") {
      return;
    }
    if (this.turn % 2 == 0) {
      this.set(row, col, "X");
      this.turn++;
    } else {
      this.set(row, col, "O");
      this.turn++;
    }
  }

  getCurrentPlayer() {
    if (this.turn % 2 == 0) {
      return "X";
    } else {
      return "O";
    }
  }

  isGameOver() {
    for (let r = 0; r < 3; r++) {
      if (
        this.board[r][0] == "X" &&
        this.board[r][1] == "X" &&
        this.board[r][2] == "X"
      ) {
        this.winner = "X";
        return true;
      }
      if (
        this.board[r][0] == "O" &&
        this.board[r][1] == "O" &&
        this.board[r][2] == "O"
      ) {
        this.winner = "O";
        return true;
      }
      if (
        this.board[0][r] == "X" &&
        this.board[1][r] == "X" &&
        this.board[2][r] == "X"
      ) {
        this.winner = "X";
        return true;
      }
      if (
        this.board[0][r] == "O" &&
        this.board[1][r] == "O" &&
        this.board[2][r] == "O"
      ) {
        this.winner = "O";
        return true;
      }
    }
    if (
      this.board[0][0] == "X" &&
      this.board[1][1] == "X" &&
      this.board[2][2] == "X"
    ) {
      this.winner = "X";
      return true;
    }
    if (
      this.board[0][0] == "O" &&
      this.board[1][1] == "O" &&
      this.board[2][2] == "O"
    ) {
      this.winner = "O";
      return true;
    }
    if (
      this.board[2][0] == "X" &&
      this.board[1][1] == "X" &&
      this.board[0][2] == "X"
    ) {
      this.winner = "X";
      return true;
    }
    if (
      this.board[2][0] == "O" &&
      this.board[1][1] == "O" &&
      this.board[0][2] == "O"
    ) {
      this.winner = "O";
      return true;
    }
    if (this.turn >= 9) {
      return true;
    } else {
      return false;
    }
  }
  getWinner() {
    this.isGameOver();
    if (this.winner == "") {
      return;
    } else {
      return this.winner;
    }
  }
}
