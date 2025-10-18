// tic-tac-toe

// Create an event listner 
document.addEventListener("DOMContentLoaded", function() {
    //board element
    const board = document.getElementById("board");

    // get Squares
    const squares = board.querySelectorAll("div");

    // add squares
    squares.forEach(square => {
        square.classList.add("square");
    });


//create current player variable
    let currentPlayer = "X";

// set game state
    let gameActiveState = ["", "", "", "", "", "", "", "", ""];

// Add click event listener to each square
    squares.forEach((square, index) => {
        square.addEventListener("click", function() {
            // click if square is empty
                if (gameActiveState[index] === "") {
            // update game state
                gameActiveState[index] = currentPlayer;
            // display current player symbol
                square.innerText = currentPlayer;
                square.classList.add(currentPlayer);
            // switch player
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    
    // Mouse Over checker
        square.addEventListener("mouseover", function() {
            if (gameActiveState[index] === "") {
                square.classList.add("hover");

                square.classList.add(currentPlayer);
            }
        });

    // Mouse Out checker
        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
            if (gameActiveState[index] === "") {
                square.classList.remove("X");
                square.classList.remove("O");
            }
        });
    });
});