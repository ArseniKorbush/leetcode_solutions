var largestSubmatrix = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Transform the matrix
    for (let i = 1; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }
    }

    let maxArea = 0;

    // Calculate the area of the largest rectangle in each row's histogram
    for (let i = 0; i < rows; i++) {
        matrix[i].sort((a, b) => b - a); // Sort the row in descending order

        for (let j = 0; j < cols; j++) {
            maxArea = Math.max(maxArea, matrix[i][j] * (j + 1));
        }
    }

    return maxArea;
};
