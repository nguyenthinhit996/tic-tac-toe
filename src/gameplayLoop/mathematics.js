function checkDirection(board = [], row, col, rowChange, colChange) {
  const result = [];
  const currentValue = board[row][col].action;

  for (let i = 1; i <= 2; i++) {
    const newRow = row + i * rowChange;
    const newCol = col + i * colChange;

    // Check boundaries
    if (
      newRow >= 0
      && newCol >= 0
      && newRow < board.length
      && newCol < board[0].length
    ) {
      if (board[newRow][newCol].action === currentValue) {
        result.push({ row: newRow, column: newCol });
      } else {
        break; // Stop checking in this direction if the condition is not met
      }
    } else {
      break; // Stop checking if reaching the boundaries
    }
  }

  return result;
}

function combineDirections(currentvalue, direction1, direction2) {
  return [...direction1, currentvalue, ...direction2];
}

function checkWinningCombinations(board, row, col) {
  const directions = [
    { name: 'Up', row: -1, col: 0 },
    { name: 'Down', row: 1, col: 0 },
    { name: 'Left', row: 0, col: -1 },
    { name: 'Right', row: 0, col: 1 },
    { name: 'UpLeft', row: -1, col: -1 },
    { name: 'UpRight', row: -1, col: 1 },
    { name: 'DownLeft', row: 1, col: -1 },
    { name: 'DownRight', row: 1, col: 1 },
  ];

  const winningCombinations = {};

  directions.forEach((direction, index) => {
    if (index % 2 !== 0) {
      return;
    }
    const oppositeDirection = directions.find(
      (d) => d.row === -direction.row && d.col === -direction.col,
    );

    const directionResult = checkDirection(
      board,
      row,
      col,
      direction.row,
      direction.col,
    );
    const oppositeDirectionResult = checkDirection(
      board,
      row,
      col,
      oppositeDirection.row,
      oppositeDirection.col,
    );

    winningCombinations[`${direction.name}Vs${oppositeDirection.name}`] = combineDirections(
      { row, column: col },
      directionResult,
      oppositeDirectionResult,
    );
  });

  return winningCombinations;
}

const handlWinner = (board = [], testRow, testCol) => {
  let winningCombinations = [];
  if (
    testRow >= 0
    && testRow < board.length
    && testCol >= 0
    && testCol < board[board.length - 1].length
  ) {
    winningCombinations = checkWinningCombinations(board, testRow, testCol);
  }

  return winningCombinations;
};

export default handlWinner;
