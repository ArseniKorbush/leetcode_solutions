/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const result = [];

    for (let i = 0; i < l.length; i++) {
        const subArray = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);

        let isArithmetic = true;
        const diff = subArray[1] - subArray[0];

        for (let j = 1; j < subArray.length - 1; j++) {
            if (subArray[j + 1] - subArray[j] !== diff) {
                isArithmetic = false;
                break;
            }
        }

        result.push(isArithmetic);
    }

    return result;
};
