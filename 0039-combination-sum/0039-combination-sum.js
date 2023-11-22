var combinationSum = function(candidates, target) {
    const result = [];
    
    const backtrack = (current, start, remaining) => {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= remaining) {
                current.push(candidates[i]);
                backtrack(current, i, remaining - candidates[i]);
                current.pop();
            }
        }
    };
    
    backtrack([], 0, target);
    return result;
};

// Test cases
console.log(combinationSum([2, 3, 6, 7], 7)); // Output: [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
console.log(combinationSum([2], 1)); // Output: []
