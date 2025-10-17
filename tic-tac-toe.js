window.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const squares = document.querySelectorAll("#board div");
  let currentPlayer = "X";

  squares.forEach(square => {
    square.classList.add("square");

    square.addEventListener("mouseenter", () => {
      square.classList.add("hover");
    });

    square.addEventListener("mouseleave", () => {
      square.classList.remove("hover");
    });

    square.addEventListener("click", () => {
      if (square.textContent === "") {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
});
