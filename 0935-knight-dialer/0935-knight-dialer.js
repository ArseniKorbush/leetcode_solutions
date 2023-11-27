var knightDialer = function(n) {
  const MOD = 1000000007; // Modulo value to handle large outputs

  // Possible moves for each numeric key on the phone pad
  const moves = [
    [4, 6],   // Knight's moves from key 0
    [6, 8],   // Knight's moves from key 1
    [7, 9],   // Knight's moves from key 2
    [4, 8],   // Knight's moves from key 3
    [0, 3, 9],// Knight's moves from key 4
    [],       // No moves for key 5
    [0, 1, 7],// Knight's moves from key 6
    [2, 6],   // Knight's moves from key 7
    [1, 3],   // Knight's moves from key 8
    [2, 4],   // Knight's moves from key 9
  ];

  // Initializing DP (Dynamic Programming) array with counts for each key
  let dp = Array(10).fill(1);

  // Iterating through each step from 1 to n - 1
  for (let i = 1; i < n; i++) {
    const newDP = Array(10).fill(0); // Initialize new DP array for current step

    // Iterate through each numeric key
    for (let j = 0; j < 10; j++) {
      // For each key, accumulate counts from possible moves in the previous step
      for (const move of moves[j]) {
        newDP[j] = (newDP[j] + dp[move]) % MOD;
      }
    }
    dp = newDP; // Update DP array for the current step
  }

  let totalCount = 0;
  for (let count of dp) {
    totalCount = (totalCount + count) % MOD; // Summing up the total counts
  }

  return totalCount; // Return the total count of distinct phone numbers
};

// Test cases
console.log(knightDialer(1)); // Output: 10
console.log(knightDialer(2)); // Output: 20
console.log(knightDialer(3131)); // Output: 136006598

// Developed by SENYA
