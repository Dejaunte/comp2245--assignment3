// tic-tac-toe

// Create an event listner 
document.addEventListener('DOMContentLoaded', function() {
    //board element
    const board = document.getElementById("board");

    // get Squares
    const squares = board.querySelectorAll("div");

    // add squares
    squares.forEach(square => {
        square.classList.add("square");
    });
});