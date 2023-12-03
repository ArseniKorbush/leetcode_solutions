var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] < nums[right]) {
            return nums[left];
        }

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === nums[left] && nums[mid] === nums[right]) {
            while (right > left && nums[right] === nums[mid]) {
                right--;
            }
        } else if (nums[mid] >= nums[left]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
};
// Developed by SENYA