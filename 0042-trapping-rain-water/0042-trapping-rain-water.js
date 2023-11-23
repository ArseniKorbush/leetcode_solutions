/**
 * trap - Computes how much water can be trapped after raining on an elevation map
 * Developed by Senya
 * @param {number[]} height - Array representing the elevation map
 * @return {number} - Amount of water trapped
 */
var trap = function(height) {
    if (height === null || height.length === 0) {
        return 0;
    }

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if (height[left] < height[right]) {
            waterTrapped += leftMax - height[left];
            left++;
        } else {
            waterTrapped += rightMax - height[right];
            right--;
        }
    }

    return waterTrapped;
};
