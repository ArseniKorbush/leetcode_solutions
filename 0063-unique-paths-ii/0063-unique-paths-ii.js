// Developed by SENYA

/**
 * Calculates the number of unique paths from the top-left corner to the bottom-right corner in an m x n grid with obstacles.
 * @param {number[][]} obstacleGrid - Grid representing the presence of obstacles (0 for empty space, 1 for obstacles).
 * @return {number} - Returns the number of unique paths from top-left to bottom-right corner without crossing obstacles.
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // Create a 2D array to store the number of paths for each cell
    const dp = Array(m).fill().map(() => Array(n).fill(0));

    // Fill the first cell with 1 if it's not an obstacle, otherwise set it to 0
    dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;

    // Fill the first row and first column based on obstacle presence and paths from previous cells
    for (let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : dp[i - 1][0];
    }
    for (let j = 1; j < n; j++) {
        dp[0][j] = obstacleGrid[0][j] === 1 ? 0 : dp[0][j - 1];
    }

    // Calculate the number of paths for each cell based on obstacle presence and paths from top and left cells
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            } else {
                dp[i][j] = 0; // If there is an obstacle, set paths to 0
            }
        }
    }

    // Return the number of unique paths to reach the bottom-right corner
    return dp[m - 1][n - 1];
};

// Test cases
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])); // Output: 2
console.log(uniquePathsWithObstacles([[0,1],[0,0]])); // Output: 1
