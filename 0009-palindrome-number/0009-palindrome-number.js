/**
 * Checks if the given integer is a palindrome.
 * Time Complexity: O(log10(x))
 * Space Complexity: O(1)
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    // Handle negative numbers or numbers ending in zero (excluding zero itself)
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    let original = x;

    // Reverse the second half of the number and compare it with the first half
    while (x > reversed) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    // For odd-length numbers, remove the middle digit in the reversed number
    return x === reversed || x === Math.floor(reversed / 10);
};
