var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array

    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize the closest sum

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum; // Update closest sum if the current sum is closer to the target
            }

            if (sum < target) {
                left++; // Move left pointer if sum is less than target
            } else {
                right--; // Move right pointer if sum is greater than or equal to target
            }
        }
    }

    return closestSum;
};
