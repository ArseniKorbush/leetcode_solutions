var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;
    const charMap = new Map(); // Using a Map to store characters and their indices

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charMap.has(currentChar)) {
            // If the character is already in the Map, update the start pointer to the next index of the previous occurrence
            start = Math.max(start, charMap.get(currentChar) + 1);
        }

        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);

        // Store the current character's index in the Map
        charMap.set(currentChar, end);
    }

    return maxLength;
};

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
