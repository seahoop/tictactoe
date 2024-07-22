// 1) Define the required variables used to track the state of the game.
let board = ["", "", "", "", "", "", "", "", ""];
let turn = "X";
let winner = false;
let tie = false;

// 2) Store cached element references.
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');

// 5) Define the required constants.
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// 4) The state of the game should be rendered to the user.
const updateBoard = () => {
  board.forEach((el, i) => {
    const square = squareEls[i];
    square.textContent = el;
    if (el === 'X') {
      square.style.color = 'red';
    } else if (el === 'O') {
      square.style.color = 'blue';
    } else {
      square.style.color = 'black';
    }
  });
};

const updateMessage = () => {
  if (!winner && !tie) {
    messageEl.textContent = `Player ${turn}'s turn`;
  } else if (!winner && tie) {
    messageEl.textContent = "It's a tie!";
  } else {
    messageEl.textContent = `Player ${turn === 'X' ? 'O' : 'X'} wins!`;
  }
};

const render = () => {
  updateBoard();
  updateMessage();
};

// 6.1 - placePiece
const placePiece = (index) => {
  board[index] = turn;
  console.log(board); // For testing purposes
};

// 6.2 - checkForWinner
const checkForWinner = () => {
  winningCombos.forEach((combo) => {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = true;
    }
  });
  console.log(winner); // For testing purposes
};

// 6.3 - checkForTie
const checkForTie = () => {
  if (winner) return;
  tie = board.every(cell => cell !== "");
  console.log(tie); // For testing purposes
};

// 6.4 - switchPlayerTurn
const switchPlayerTurn = () => {
  if (winner) return;
  turn = turn === 'X' ? 'O' : 'X';
  console.log(turn); // For testing purposes
};

// 6.5 - handleClick
const handleClick = (event) => {
  const square = event.target;
  const squareIndex = Array.from(squareEls).indexOf(square);
  if (board[squareIndex] !== "" || winner) return;

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
};

// 7) Create Reset functionality
const reset = () => {
  init();
};

// Initialize the game state when the page loads.
const init = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
};

// Add event listeners.
squareEls.forEach((square) => {
  square.addEventListener('click', handleClick);
});

resetBtnEl.addEventListener('click', reset);

// Call init to initialize the game.
init();
