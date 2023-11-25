/**
 * Sorts an array of red, white, and blue objects in-place (0, 1, and 2 respectively).
 * @param {number[]} nums - The array to be sorted.
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0; // Pointer for 0s
    let right = nums.length - 1; // Pointer for 2s
    let i = 0; // Current pointer
    
    // One-pass algorithm to sort the array
    while (i <= right) {
        if (nums[i] === 0) {
            // If the element is 0, swap with the left pointer
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        } else if (nums[i] === 2) {
            // If the element is 2, swap with the right pointer
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            // If the element is 1, move to the next element
            i++;
        }
    }
    
    // Developed by SENYA
};
