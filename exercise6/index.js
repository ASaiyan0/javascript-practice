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

  // You can change the text of an element (div, button, or anything else with text) like this:
  messageElement.textContent = `${ticTacToe.getCurrentPlayer()}'s Turn`;

  // You can add a click event listener to a button like this:
  resetButton.addEventListener("click", () => {
    ticTacToe.reset();
  });

  console.log(
    "Logs are printed in the browser console. Open dev tools in your browser to see them."
  );
  console.log(
    "You can log variables and elements too:",
    ticTacToe,
    messageElement,
    resetButton
  );
});
