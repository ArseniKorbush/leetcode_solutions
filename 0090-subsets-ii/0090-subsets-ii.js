var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b); // Sort the input array to handle duplicates
    const result = [];
    
    // Helper function to generate subsets using backtracking
    const generateSubsets = (start, currentSubset) => {
        result.push([...currentSubset]); // Add the current subset to the result
        
        // Iterate through the elements in nums to generate subsets
        for (let i = start; i < nums.length; i++) {
            // Skip duplicates to avoid duplicate subsets
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }
            
            currentSubset.push(nums[i]); // Include the current number in the subset
            generateSubsets(i + 1, currentSubset); // Recursively generate subsets starting from the next index
            currentSubset.pop(); // Backtrack by removing the current number from the subset
        }
    };
    
    generateSubsets(0, []); // Start generating subsets from index 0 with an empty initial subset
    return result;
};
// Developed by SENYA