/**
 * Finds the minimum window substring of s containing all characters in t.
 * @param {string} s - The string to search within.
 * @param {string} t - The characters to include in the window.
 * @return {string} - Returns the minimum window substring or an empty string if not found.
 */
var minWindow = function(s, t) {
    // Create maps to count characters in t and the current window
    const targetMap = {};
    const windowMap = {};
    
    // Populate the targetMap with character counts from string t
    for (let char of t) {
        targetMap[char] = (targetMap[char] || 0) + 1;
    }
    
    let left = 0;
    let right = 0;
    let minLen = Infinity;
    let minStart = 0;
    let required = Object.keys(targetMap).length; // Number of unique characters in t
    
    let formed = 0; // Number of unique characters formed in the current window
    
    while (right < s.length) {
        const char = s[right];
        windowMap[char] = (windowMap[char] || 0) + 1;
        
        if (targetMap[char] && windowMap[char] === targetMap[char]) {
            formed++;
        }
        
        while (left <= right && formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            
            const leftChar = s[left];
            windowMap[leftChar]--;
            
            if (targetMap[leftChar] && windowMap[leftChar] < targetMap[leftChar]) {
                formed--;
            }
            
            left++;
        }
        
        right++;
    }
    
    return minLen === Infinity ? "" : s.substr(minStart, minLen);
    
    // Developed by SENYA
};
