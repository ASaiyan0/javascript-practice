export class TicTacToe {
  /**
   * The constructor should initialize the board with an empty 3x3 grid.
   * An empty string "" will be an empty square. Filled squares should have either "X" or "O".
   * I recommend the grid be an Array of Arrays of strings, like this: [["", "", ""], ["", "", ""], ["", "", ""]]
   */
  constructor() {
    this.reset();
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
   * @returns {string | undefined} The mark at the given row and column, either "X", "O", or "", or undefined if out of bounds.
   */
  get(row, col) {
    return this.board[row]?.[col];
  }

  /**
   * This method should reset the board back to an empty state.
   */
  reset() {
    this.board = [["", "", ""], ["", "", ""], ["", "", ""]];
    this.currentPlayer = "X";
  }

  playerMove(row, col) {
    if (this.get(row, col) === "") {
      this.set(row, col, this.currentPlayer);
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  isGameOver() {
    return this.getWinner() !== "" || this.board.every(row => row.every(col => col !== ""));
  }

  getWinner() {
    const lines = [
      // Rows
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // Columns
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // Diagonals
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];

    for (const line of lines) {
      const marks = line.map(([row, col]) => this.get(row, col));
      if (marks.every(mark => mark === "X")) {
        return "X";
      } else if (marks.every(mark => mark === "O")) {
        return "O";
      }
    }

    return "";
  }
}
