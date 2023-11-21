var nextPermutation = function(nums) {
  let i = nums.length - 2;

  // Find the first decreasing element from the right side
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;

    // Find the smallest element to the right of i that is larger than nums[i]
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    // Swap the elements at indices i and j
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Reverse the elements from index i + 1 to the end of the array
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};
