window.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");

    squares.forEach(square => {
        square.classList.add("square");

        square.style.width = "100px";
        square.style.height = "100px";
        square.style.border = "2px solid #333";
        square.style.display = "flex";
        square.style.alignItems = "center";
        square.style.justifyContent = "center";
        square.style.fontSize = "2px";
        square.style.cursor = "pointer";
        square.style.backgroundColor = "#f0f0f0";
    });

    const board = document.getElementById("board");
    board.style.display = "grid";
    board.style.gridTemplateColumns = "repeat(3, 100px)";
    board.style.gridTemplateRows = "repeat(3, 100px)";
    board.style.gap = "5px";
    board.style.width = "max-content";
    board.style.margin = "50px auto";

    console.log("Board style successfully on load.");
})