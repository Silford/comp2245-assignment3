window.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";

    board.style.display = "grid";
    board.style.gridTemplateColumns = "repeat(3, 100px)";
    board.style.gridTemplateRows = "repeat(3, 100px)";
    board.style.gap = "5px";
    board.style.width = "max-content";
    board.style.margin = "50px auto";

    squares.forEach(square => {
        square.classList.add("square");

        square.style.width = "100px";
        square.style.height = "100px";
        square.style.border = "2px solid #333";
        square.style.display = "flex";
        square.style.alignItems = "center";
        square.style.justifyContent = "center";
        square.style.fontSize = "80px";
        square.style.cursor = "pointer";
        square.style.backgroundColor = "#f0f0f0";

        square.addEventListener("click", () => {
            if (square.textContent === ""){
                square.textContent = currentPlayer;
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});