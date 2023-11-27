var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    // Step 1: Skip leading whitespace
    while (s[i] === ' ') {
        i++;
    }

    // Step 2: Check for sign (+/-)
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Read in digits and convert to integer
    while (i < s.length && /[0-9]/.test(s[i])) {
        const digit = parseInt(s[i]);
        // Check if adding the next digit will cause overflow
        if (result > Math.floor((2 ** 31 - 1 - digit) / 10)) {
            return sign === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
        }
        result = result * 10 + digit;
        i++;
    }

    // Step 4: Apply sign and return the result
    return sign * result;
};

// Test cases
console.log(myAtoi("42")); // Output: 42
console.log(myAtoi("   -42")); // Output: -42
console.log(myAtoi("4193 with words")); // Output: 4193
// Developed by SENYA