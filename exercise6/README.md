# Exercise 6

This is going to be a multi-part exercise to teach about classes. We're going to make a Tic Tac Toe game.

## Part 1

For the first part, we'll make the basic class and add the ability to set squares on the board to either X or O, as well as reset the board back to empty. The tests currently in index.spec.js are only for this part, so make sure they all pass.

## Part 2

For the second part, we're going to add the game logic: keeping track of turns, checking whether a move is valid, and detecting a win or tie. Our Tic Tac Toe game will have the standard rules, which are:
- X always goes first.
- Players alternate turns, so after X selects a square, it becomes O's turn to select a square, and then back to X.
- If one player gets 3 squares in a row, column, or diagonal, the game ends and that player wins.
- If all squares are filled and no player has 3-in-a-row, the game ends in a tie.

Add and implement the following methods on the TicTacToe class:

### TicTacToe.playerMove(row, col)

This method should set the mark of the player whose turn it is at the given square. For example, calling `ticTacToe.playerMove(1, 1)` as the first move would set an "X" in the center, then calling `ticTacToe.playerMove(0, 2)` would set an "O" in the top right corner. It should also check to make sure the move is valid, and if not, it should do nothing. For example, `ticTacToe.playerMove(0, 4)` would be invalid because it's outside the board. Trying to move in a square that already has "X" or "O" would also be invalid.

### TicTacToe.getCurrentPlayer()

This method takes no arguments and returns the mark of the player whose turn it is, either "X" or "O".

### TicTacToe.isGameOver()

This method takes no arguments and returns true if the game is over, either due to one player winning or a tie. Otherwise, it returns false.

### TicTacToe.getWinner()

This method takes no arguments and returns the mark of the player who won the game, "X" or "O". If no player has won, it returns an empty string "".
