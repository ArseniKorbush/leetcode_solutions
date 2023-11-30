var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return true; // If target is found, return true
        }

        // Handling duplicate elements at the start or end
        while (nums[left] === nums[mid] && left !== mid) {
            left++; // Move left pointer if duplicates are encountered at the start
        }

        while (nums[right] === nums[mid] && right !== mid) {
            right--; // Move right pointer if duplicates are encountered at the end
        }

        // If the left part is sorted
        if (nums[left] <= nums[mid]) {
            // Check if the target lies in the left sorted part
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Adjust right pointer
            } else {
                left = mid + 1; // Adjust left pointer
            }
        }
        // If the right part is sorted
        else {
            // Check if the target lies in the right sorted part
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // Adjust left pointer
            } else {
                right = mid - 1; // Adjust right pointer
            }
        }
    }

    return false; // Return false if target is not found
};
// Developed by SENYA thanks for help "OLegBts"