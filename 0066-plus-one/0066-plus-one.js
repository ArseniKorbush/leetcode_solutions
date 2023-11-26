var plusOne = function(digits) {
    const n = digits.length;

    // Increment the least significant digit by 1
    digits[n - 1] += 1;

    // Check for carry
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] > 9) {
            digits[i] = 0; // Set the current digit to 0
            if (i > 0) {
                digits[i - 1] += 1; // Increment the previous digit
            } else {
                digits.unshift(1); // Insert 1 at the beginning if carry reaches the most significant digit
            }
        } else {
            break; // No more carry, break the loop
        }
    }

    return digits;
};
