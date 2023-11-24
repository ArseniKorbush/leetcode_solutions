// Developed by SENYA

/**
 * Calculates the minimum number of operations required to convert word1 to word2.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @return {number} - Returns the minimum number of operations needed for the conversion.
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create a 2D array for dynamic programming
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    // Fill the first row and column with values from 0 to length of words
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Calculate minimum operations for each character comparison
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }

    return dp[m][n];
};

// Test cases
console.log(minDistance("horse", "ros")); // Output: 3
console.log(minDistance("intention", "execution")); // Output: 5
