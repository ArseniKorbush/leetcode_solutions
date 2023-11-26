var subsets = function(nums) {
    const result = [];
    
    const backtrack = (start, currentSubset) => {
        // Add the current subset to the result
        result.push([...currentSubset]);
        
        // Explore further possibilities by backtracking
        for (let i = start; i < nums.length; i++) {
            currentSubset.push(nums[i]); // Choose
            backtrack(i + 1, currentSubset); // Explore
            currentSubset.pop(); // Unchoose
        }
    };
    
    backtrack(0, []); // Start backtracking from index 0 with an empty subset
    
    return result;
};
