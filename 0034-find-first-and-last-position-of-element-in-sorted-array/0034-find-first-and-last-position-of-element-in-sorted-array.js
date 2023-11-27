var searchRange = function(nums, target) {
    const findStartingPosition = (nums, target) => {
        let start = 0;
        let end = nums.length - 1;
        let result = -1;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            if (nums[mid] >= target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }

            if (nums[mid] === target) {
                result = mid;
            }
        }

        return result;
    };

    const findEndingPosition = (nums, target) => {
        let start = 0;
        let end = nums.length - 1;
        let result = -1;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            if (nums[mid] <= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }

            if (nums[mid] === target) {
                result = mid;
            }
        }

        return result;
    };

    const startingPos = findStartingPosition(nums, target);
    const endingPos = findEndingPosition(nums, target);

    return [startingPos, endingPos];
};
// Developed by SENYA