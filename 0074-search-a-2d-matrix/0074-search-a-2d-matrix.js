/**
 * Searches for a target value in a matrix that satisfies specific properties.
 * @param {number[][]} matrix - The matrix to search in.
 * @param {number} target - The value to search for.
 * @return {boolean} - Returns true if the target is found, false otherwise.
 */
var searchMatrix = function(matrix, target) {
    // Check if the matrix is empty or has no columns
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;
    
    // Binary search on the flattened matrix treating it as a sorted array
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midElement = matrix[Math.floor(mid / cols)][mid % cols];
        
        if (midElement === target) {
            return true; // Target found
        } else if (midElement < target) {
            left = mid + 1; // Continue searching in the right half
        } else {
            right = mid - 1; // Continue searching in the left half
        }
    }
    
    return false; // Target not found
    
    // Developed by SENYA
};
