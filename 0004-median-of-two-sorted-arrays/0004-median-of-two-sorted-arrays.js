/**
 * Finds the median of two sorted arrays nums1 and nums2 with a time complexity of O(log(m + n)).
 * @param {number[]} nums1 - First sorted array.
 * @param {number[]} nums2 - Second sorted array.
 * @return {number} - Median of the two sorted arrays.
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    if (totalLength % 2 === 0) {
        // For even total length, find two middle elements and calculate their average
        const left = findKthElement(nums1, nums2, Math.floor(totalLength / 2));
        const right = findKthElement(nums1, nums2, Math.floor(totalLength / 2) + 1);
        return (left + right) / 2;
    } else {
        // For odd total length, find the middle element
        return findKthElement(nums1, nums2, Math.floor(totalLength / 2) + 1);
    }
};

/**
 * Finds the kth smallest element in merged sorted arrays nums1 and nums2.
 * @param {number[]} nums1 - First sorted array.
 * @param {number[]} nums2 - Second sorted array.
 * @param {number} k - Position of the element to find.
 * @returns {number} - kth smallest element in the merged arrays.
 */
const findKthElement = (nums1, nums2, k) => {
    let index1 = 0, index2 = 0;

    while (true) {
        // Base cases
        if (index1 === nums1.length) return nums2[index2 + k - 1];
        if (index2 === nums2.length) return nums1[index1 + k - 1];
        if (k === 1) return Math.min(nums1[index1], nums2[index2]);

        // Define the size of the searching space
        const half = Math.floor(k / 2);
        const newIndex1 = Math.min(index1 + half, nums1.length) - 1;
        const newIndex2 = Math.min(index2 + half, nums2.length) - 1;

        // Determine which array to discard elements from
        if (nums1[newIndex1] <= nums2[newIndex2]) {
            k -= (newIndex1 - index1 + 1);
            index1 = newIndex1 + 1;
        } else {
            k -= (newIndex2 - index2 + 1);
            index2 = newIndex2 + 1;
        }
    }
};

// Developed by Senya
