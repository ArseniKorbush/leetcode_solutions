var exist = function(board, word) {
    const ROWS = board.length;
    const COLS = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // Possible movements: right, left, down, up

    const backtrack = (row, col, index) => {
        // If the index reaches the length of the word, it means we found the word
        if (index === word.length) {
            return true;
        }

        // Check boundaries and if the current cell matches the character in the word
        if (
            row < 0 || col < 0 || row >= ROWS || col >= COLS ||
            board[row][col] !== word[index]
        ) {
            return false;
        }

        // Save the current character to avoid reusing it in the future
        const temp = board[row][col];
        board[row][col] = '#'; // Mark current cell as visited

        // Explore adjacent cells
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            // Recursively check neighboring cells
            if (backtrack(newRow, newCol, index + 1)) {
                return true;
            }
        }

        // Backtrack: restore the cell and continue exploring other paths
        board[row][col] = temp;
        return false;
    };

    // Iterate through the board to find the starting point of the word
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (backtrack(i, j, 0)) { // Start exploring from each cell
                return true; // If found, return true
            }
        }
    }

    return false; // Return false if word is not found in the entire board
};
// DEveloped by my friends