// Global variables
let currentPlayer = 'X';  // X starts first
let gameBoard = ['', '', '', '', '', '', '', '', ''];  // 3x3 game grid (flattened)
let gameOver = false;

// Function to initialize the game board
function initializeBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';  // Clear previous board if any
  
  // Create 9 grid cells
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('data-index', i);  // Store the cell index
    cell.addEventListener('click', handleCellClick);  // Event listener for clicks
    board.appendChild(cell);
  }
}

// Function to handle cell clicks
function handleCellClick(event) {
  const index = event.target.getAttribute('data-index');
  
  // If the cell is already occupied or the game is over, do nothing
  if (gameBoard[index] !== '' || gameOver) return;

  // Mark the cell with the current player's symbol
  gameBoard[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  event.target.classList.add(currentPlayer.toLowerCase());  // Add X or O class for styling

  // Check for a winner or a tie
  if (checkWinner()) {
    document.getElementById('gameStatus').textContent = `${currentPlayer} wins!`;
    gameOver = true;
  } else if (gameBoard.every(cell => cell !== '')) {
    document.getElementById('gameStatus').textContent = 'It\'s a tie!';
    gameOver = true;
  } else {
    // Switch players
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('gameStatus').textContent = `${currentPlayer}'s turn`;
  }
}

// Function to check if there's a winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]               // Diagonals
  ];

  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

// Function to reset the game
function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;
  currentPlayer = 'X';
  document.getElementById('gameStatus').textContent = `${currentPlayer}'s turn`;
  initializeBoard();  // Reinitialize the board
}

// Initialize the board on page load
initializeBoard();
