export class TicTacToe {
  /**
   * The constructor should initialize the board with an empty 3x3 grid.
   * An empty string "" will be an empty square. Filled squares should have either "X" or "O".
   * I recommend the grid be an Array of Arrays of strings, like this: [["", "", ""], ["", "", ""], ["", "", ""]]
   */
  constructor() {
  }

  /**
   * This method should set the given mark at the given row and column on the board.
   * @param {number} row The row index of the board, from 0 to 2.
   * @param {number} col The column index of the board, from 0 to 2.
   * @param {string} mark The mark to set at the given row and column, either "X" or "O".
   */
  set(row, col, mark) {
  }

  /**
   * This method should return the current value of the square at the given row and column on the board.
   * @param {number} row The row index of the board, from 0 to 2.
   * @param {number} col The column index of the board, from 0 to 2.
   * @returns {string} The mark at the given row and column, either "X", "O", or "".
   */
  get(row, col) {
  }

  /**
   * This method should reset the board back to an empty state.
   */
  reset() {
  }
}
