var generateMatrix = function(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    let counter = 1;
    
    while (counter <= n * n) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = counter++;
        }
        top++;
        
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = counter++;
        }
        right--;
        
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = counter++;
        }
        bottom--;
        
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = counter++;
        }
        left++;
    }
    
    return matrix;
};
