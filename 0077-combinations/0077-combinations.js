/**
 * Returns all possible combinations of k numbers chosen from the range [1, n].
 * @param {number} n - The range of numbers.
 * @param {number} k - The number of elements to choose.
 * @return {number[][]} - Returns an array of combinations.
 */
var combine = function(n, k) {
    const result = [];
    
    // Helper function to backtrack and generate combinations
    const backtrack = (start, current) => {
        if (current.length === k) {
            result.push([...current]); // Add the combination to the result
            return;
        }
        
        // Explore all possibilities for the next element in the combination
        for (let i = start; i <= n; i++) {
            current.push(i); // Choose i
            backtrack(i + 1, current); // Explore further combinations starting from i + 1
            current.pop(); // Backtrack: remove the last element to try a different path
        }
    };
    
    backtrack(1, []); // Start generating combinations from 1
    
    return result;
    
    // Developed by SENYA
};
