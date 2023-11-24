// Developed by SENYA

/**
 * Finds a path from the top-left to the bottom-right corner of the grid, minimizing the sum of numbers along the path.
 * @param {number[][]} grid - Grid filled with non-negative numbers.
 * @return {number} - Returns the minimum sum of numbers along the path from top-left to bottom-right corner.
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Create a 2D array to store minimum path sums
    const dp = Array(m).fill().map(() => Array(n).fill(0));

    // Fill the first cell with the value from the grid
    dp[0][0] = grid[0][0];

    // Fill the first row and first column with cumulative sums
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    // Calculate minimum path sum for each cell
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // Choose the minimum sum from the top or left cell and add the current cell value
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    // Return the minimum path sum to reach the bottom-right corner
    return dp[m - 1][n - 1];
};

// Test cases
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // Output: 7
console.log(minPathSum([[1,2,3],[4,5,6]])); // Output: 12
