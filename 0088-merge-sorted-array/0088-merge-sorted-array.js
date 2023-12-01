var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1; // Pointer for nums1
    let p2 = n - 1; // Pointer for nums2
    let p = m + n - 1; // Pointer for the merged array

    // Merge nums1 and nums2 starting from the end
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // If there are remaining elements in nums2, add them to nums1
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};
// Developed by SENYA