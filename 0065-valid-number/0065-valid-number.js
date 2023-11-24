// Developed by SENYA

/**
 * Checks if the given string is a valid number based on the defined components and formats.
 * @param {string} s - Input string to be validated.
 * @return {boolean} - Returns true if the input string is a valid number, otherwise false.
 */
var isNumber = function(s) {
    // Regular expression pattern to match a valid number format
    const regex = /^\s*[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?\s*$/;
    
    return regex.test(s);
};

// Test cases
console.log(isNumber("0")); // Output: true
console.log(isNumber("e")); // Output: false
console.log(isNumber(".")); // Output: false
