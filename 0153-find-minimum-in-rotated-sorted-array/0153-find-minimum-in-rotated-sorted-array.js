var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        // Check if the array is already sorted
        if (nums[left] < nums[right]) {
            return nums[left];
        }

        let mid = Math.floor((left + right) / 2);

        // Check which side to continue binary search
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left]; // or nums[right], as both pointers converge
};
// Developed by SENYA