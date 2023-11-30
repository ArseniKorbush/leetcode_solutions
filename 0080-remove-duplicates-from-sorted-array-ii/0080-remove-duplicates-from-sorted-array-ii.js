var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length; // If the array length is 2 or less, no need for modification
    }

    let slow = 2; // Initialize the slow pointer starting from the third position
    for (let fast = 2; fast < nums.length; fast++) {
        // If the current element is different from the two elements before the slow pointer
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast]; // Overwrite the slow pointer position with the current element
            slow++; // Move the slow pointer ahead
        }
    }

    return slow; // Return the length up to which the array is modified
};
// Developed by SENYA