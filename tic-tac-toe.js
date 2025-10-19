// tic-tac-toe

// Create an event listner 
document.addEventListener("DOMContentLoaded", function() {
    //board element
    const board = document.getElementById("board");

    // get Squares
    const squares = board.querySelectorAll("div");

    // game status element
    const gameStatus = document.getElementById("status");

    const newGameButton = document.getElementById(".btn");

    // add squares
    squares.forEach(square => {
        square.classList.add("square");
    });


//create current player variable
    let currentPlayer = "X";

// set game state
    let gameActiveState = ["", "", "", "", "", "", "", "", ""];

    let gameActive = true;

// Winning conditions
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    // Function to check for winner
    function checkWinner() {
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (gameActiveState[a] && gameActiveState[a] === gameActiveState[b] && gameActiveState[a] === gameActiveState[c]) {
                return gameActiveState[a];
            }
        }

    // Check for tie
        if (!gameActiveState.includes("")) {
            return "Tie";
        }

        return null;
    }
    //reset game
    function resetGame() {
        currentPlayer = "X";
        gameActiveState = ["", "", "", "", "", "", "", "", ""];
        gameActive = true;

        
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X");
            square.classList.remove("O");
        });

        gameStatus.textContent = ("Player " + currentPlayer + "'s turn");
        gameStatus.classList.remove("you-won");

    }

    //player move
    function playerMove(square, index) {
        if (gameActiveState[index] === "" && gameActive) {
            gameActiveState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            const winner = checkWinner();
            if (winner) {
                gameActive = false;
                if (winner === "Tie") {     
                    gameStatus.textContent("Congratulations It's a tie!");
                } 
                else {
                    gameStatus.textContent = ("Conratulations! Player " + winner + " wins!");
                    gameStatus.classList.add("you-won");
                }
            } 
            else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                gameStatus.textContent =( "Player " + currentPlayer + "'s turn");
            }
        
        }
    }

// Add click event listener to each square
    squares.forEach((square, index) => {
        square.addEventListener("click", function() {
            playerMove(square, index);
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
    // New Game button event listener
    newGameButton.addEventListener("click", resetGame);
});
