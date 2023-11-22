var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b); // Sort the array

    let left = 0;
    let sum = 0;
    let result = 0;

    // Use a sliding window to move the right pointer
    for (let right = 0; right < nums.length; right++) {
        // Calculate the total increment needed for the current window to make all elements equal
        sum += nums[right];

        // Calculate the total number of operations needed to make all elements in the current window equal
        while ((right - left + 1) * nums[right] - sum > k) {
            sum -= nums[left];
            left++;
        }

        // Update the result with the maximum window size
        result = Math.max(result, right - left + 1);
    }

    return result;
};
