(function () {
  const mainElemnet = document.getElementsByClassName("square_boxes");
  const buttonReset = document.getElementById("reset");
  const cells = document.querySelectorAll(".square");
  let currentPlayer = "X";
  const winning_combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let boxesComplete = [];

//Handles user and user move 

  function handleCellClick(event) {
    let clickedCell = event.target;
    let clickedNumberIndex = event.target.className.split(" ")[1];
    clickedCell.textContent = currentPlayer;
    boxesComplete.push(currentPlayer);
    if (checkWinner()) {
      console.log("Ye jeeta", currentPlayer);
      let messageElement = document.createElement("h1");
      messageElement.textContent = `${currentPlayer} is the winner`;
      console.log("Main Ele", mainElemnet);
      mainElemnet[0].appendChild(messageElement);
    } else if (boxesComplete.length == 9) {
      let messageElement = document.createElement("h1");
      messageElement.textContent = `Mach Tie`;

      mainElemnet[0].appendChild(messageElement);
    }
    currentPlayer = currentPlayer == "O" ? "X" : "O";
  }

  //Used to check the user has won 
  function checkWinner() {
    for (let i = 0; i < winning_combination.length; i++) {
      let [a, b, c] = winning_combination[i];
      console.log(
        "wff",
        cells[a].textContent,
        cells[b].textContent,
        cells[c].textContent,
        currentPlayer
      );

      if (
        cells[a].textContent === currentPlayer &&
        cells[b].textContent === currentPlayer &&
        cells[c].textContent === currentPlayer
      ) {
        console.log("sfjjsfj");
        return true;
      }
    }
    return false;
  }


  //When reset button clicked to reset the game

  function resetGame(event) {
    cells.forEach((cell) => (cell.textContent = ""));
    boxesComplete = [];
    currentPlayer = "X";
  }

  cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
  buttonReset.addEventListener("click", resetGame);
})();
