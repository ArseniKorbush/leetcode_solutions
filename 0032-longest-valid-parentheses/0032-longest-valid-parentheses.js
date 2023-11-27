var longestValidParentheses = function(s) {
    let maxLen = 0; // Initialize the maximum length of valid parentheses substring
    let stack = [-1]; // Use a stack to keep track of indices
    
    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // Push the index of '(' into the stack
            stack.push(i);
        } else {
            // For ')'
            stack.pop(); // Remove the top element from the stack
            
            if (stack.length === 0) {
                // If stack is empty, push the current index into the stack to mark the boundary
                stack.push(i);
            } else {
                // Calculate the length of the valid substring by subtracting the current index from the index at the top of the stack
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }
    
    return maxLen; // Return the length of the longest valid parentheses substring
};
// Developed by SENYA