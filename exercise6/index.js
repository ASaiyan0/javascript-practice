import { TicTacToe } from "./TicTacToe.js";

// This code will run when the page loads.
// You should set up event listeners for the board inside this function.
window.addEventListener("load", () => {
  // Create a TicTacToe instance. This will be the instance used for your game on the page.
  const ticTacToe = new TicTacToe();

  // Get all the elements on the page that have click actions or will be changed as the game is played.
  // For starters, I've added the message div and the reset button.
  const messageElement = document.getElementById("message");
  const resetButton = document.getElementById("reset");

  const rows = document.querySelectorAll(".row");

  const boardElements = [];
  for (const row of rows) {
    const squares = row.querySelectorAll(".square");
    boardElements.push(squares);
  }

  // You can change the text of an element (div, button, or anything else with text) like this:
  messageElement.textContent = `${ticTacToe.getCurrentPlayer()}'s Turn`;

  // You can add a click event listener to a button like this:
  resetButton.addEventListener("click", () => {
    ticTacToe.reset();
    messageElement.textContent = `${ticTacToe.getCurrentPlayer()}'s Turn`;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        boardElements[r][c].textContent = "";
      }
    }
  });
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      boardElements[r][c].addEventListener("click", () => {
        if (ticTacToe.isGameOver() == true) {
          return;
        } else if (
          boardElements[r][c].textContent != "X" &&
          boardElements[r][c].textContent != "O"
        ) {
          boardElements[r][c].textContent = `${ticTacToe.getCurrentPlayer()}`;
          ticTacToe.playerMove(r, c);
          console.log(ticTacToe.isGameOver());
          messageElement.textContent = `${ticTacToe.getCurrentPlayer()}'s Turn`;
        } else {
          messageElement.textContent = `Invalid Move. Still ${ticTacToe.getCurrentPlayer()}'s Turn`;
        }
        if (ticTacToe.isGameOver() == true) {
          messageElement.textContent = `Game Over. Winner is ${
            ticTacToe.getWinner() || "no one"
          }. Reset to Play Again.`;
        }
      });
    }
  }
});
