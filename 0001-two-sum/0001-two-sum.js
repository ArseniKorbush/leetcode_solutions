/**
 * Hash Map - One Pass
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const numMap = new Map(); // Create a map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return the indices that add up to the target
        }

        // Store the current number and its index in the map
        numMap.set(nums[i], i);
    }

    return []; // Return an empty array if no solution is found
};
