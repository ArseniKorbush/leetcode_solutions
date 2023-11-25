/**
 * Returns an array where each element represents the summation of absolute differences 
 * between the element and all other elements in the array.
 * @param {number[]} nums - The sorted array of integers.
 * @return {number[]} - Returns the resulting array.
 */
var getSumAbsoluteDifferences = function(nums) {
    const n = nums.length;
    
    // Calculate the total sum by subtracting each element's value multiplied by its count
    let totalSum = 0;
    for (let i = 1; i < n; i++) {
        totalSum += nums[i] - nums[0];
    }
    
    const result = [totalSum]; // Store the result for the first element
    
    // Calculate the remaining elements based on previous calculations
    for (let i = 1; i < n; i++) {
        const leftCount = i; // Count of elements to the left
        const rightCount = n - i; // Count of elements to the right
        
        // Calculate the contribution of the current element to the result
        const diff = nums[i] - nums[i - 1];
        totalSum += (leftCount - rightCount) * diff;
        
        result.push(totalSum); // Store the result for the current element
    }
    
    return result;
    
    // Developed by SENYA
};
