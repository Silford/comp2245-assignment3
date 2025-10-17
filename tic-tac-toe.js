window.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const squares = document.querySelectorAll("#board div");
  const statusDiv = document.getElementById("status");
  let currentPlayer = "X";
  let gameOver = false;

  squares.forEach(square => {
    square.classList.add("square");

    square.addEventListener("mouseenter", () => {
      square.classList.add("hover");
    });

    square.addEventListener("mouseleave", () => {
      square.classList.remove("hover");
    });

    square.addEventListener("click", () => {
      if (square.textContent === "" && !gameOver) {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        if (checkWinner(currentPlayer)){
            statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
            statusDiv.classList.add("you-won");
            gameOver = true;
        } else{
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });
  });

  function checkWinner(player){ // Asked ChatGPT to help create a function to check for a winner
    const combos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    return combos.some(pattern => 
        pattern.every(i => squares[i].textContent === player)
    );
  }
});
